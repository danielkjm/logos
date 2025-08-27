// import postgres from 'postgres';
// import { NextResponse } from 'next/server';
// import { categories } from '../lib/seed-data.js';

// const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

// // --- Helpers that mirror the tutorial style ---
// async function createTables() {
//   await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

//   await sql`
//     CREATE TABLE IF NOT EXISTS categories (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       -- keep your numeric sample id if you want to reference it later:
//       legacy_id NUMERIC NULL,
//       title TEXT NOT NULL UNIQUE,
//       description TEXT
//     );
//   `;

//   await sql`
//     CREATE TABLE IF NOT EXISTS articles (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       category_id UUID NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
//       legacy_id NUMERIC NULL,
//       title TEXT NOT NULL,
//       description TEXT,
//       image_url TEXT,
//       width INT,
//       UNIQUE (category_id, title)
//     );
//   `;
// }

// // Insert or fetch a category id in one round-trip (idempotent)
// async function upsertCategoryAndGetId(c: {
//   title: string; description?: string | null; legacy_id?: number;
// }) {
//   const { title, description, legacy_id } = c;

//   // Use a CTE so the seed is safe to re-run:
//   const rows = await sql<[{ id: string }]>`
//     WITH ins AS (
//       INSERT INTO categories (legacy_id, title, description)
//       VALUES (${legacy_id ?? null}, ${title}, ${description ?? null})
//       ON CONFLICT (title) DO NOTHING
//       RETURNING id
//     )
//     SELECT id FROM ins
//     UNION ALL
//     SELECT id FROM categories WHERE title = ${title}
//     LIMIT 1;
//   `;
//   return rows[0].id;
// }

// async function seedCategoriesAndArticles() {
//   await createTables();

//   // Loop categories, then their articles
//   for (const c of categories) {
//     const catId = await upsertCategoryAndGetId({
//       title: c.title,
//       description: c.description,
//       legacy_id: c.id,
//     });

//     // Insert articles for this category
//     for (const a of c.articles) {
//       await sql`
//         INSERT INTO articles (category_id, legacy_id, title, description, image_url, width)
//         VALUES (${catId}, ${a.id}, ${a.title}, ${a.description}, ${a.imageUrl}, ${a.width})
//         ON CONFLICT (category_id, title) DO NOTHING;
//       `;
//     }
//   }
// }

// export async function GET() {
//   try {
//     await sql.begin(async (trx) => {
//       // run seed inside a transaction like the tutorial
//       await trx`SELECT 1`; // noop; keeps 'trx' referenced
//       await seedCategoriesAndArticles();
//     });

//     return NextResponse.json({ message: 'Database seeded successfully' });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ error }, { status: 500 });
//   }
// }