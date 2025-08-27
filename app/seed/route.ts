import postgres from 'postgres';
import { NextResponse } from 'next/server';
// Adjust this import if your file lives elsewhere:
import { categories } from '../lib/seed-data';

export const runtime = 'nodejs';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function GET() {
  try {
    await sql.begin(async (tx) => {
      // Extensions / tables
      await tx`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

      await tx`
        CREATE TABLE IF NOT EXISTS categories (
          id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
          title TEXT NOT NULL UNIQUE,
          description TEXT
        );
      `;

      await tx`
        CREATE TABLE IF NOT EXISTS articles (
          id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
          category_id UUID NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
          title TEXT NOT NULL,
          description TEXT,
          image_url TEXT,
          width INT,
          UNIQUE (category_id, title)
        );
      `;

      // Seed data (no legacy_id)
      for (const c of categories) {
        const [{ id: categoryId }] = await tx<[{ id: string }]>`
          INSERT INTO categories (title, description)
          VALUES (${c.title}, ${c.description})
          ON CONFLICT (title) DO UPDATE
            SET description = EXCLUDED.description
          RETURNING id;
        `;

        for (const a of c.articles) {
          await tx`
            INSERT INTO articles (category_id, title, description, image_url, width)
            VALUES (${categoryId}, ${a.title}, ${a.description}, ${a.imageUrl}, ${a.width})
            ON CONFLICT (category_id, title) DO UPDATE SET
              description = EXCLUDED.description,
              image_url   = EXCLUDED.image_url,
              width       = EXCLUDED.width;
          `;
        }
      }
    });

    return NextResponse.json({ message: 'Database seeded successfully' });
  } catch (e: any) {
    // helpful diagnostics
    console.error('Seed failed:', e);
    return NextResponse.json(
      { message: e?.message, code: e?.code, position: e?.position },
      { status: 500 },
    );
  }
}