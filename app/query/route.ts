import postgres from 'postgres';
import { NextResponse } from 'next/server';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });
export const runtime = 'nodejs';

export async function GET() {
  // counts
  const [{ count: categoriesCount }] =
    await sql<{ count: number }[]>`SELECT COUNT(*)::int AS count FROM categories`;

  const [{ count: articlesCount }] =
    await sql<{ count: number }[]>`SELECT COUNT(*)::int AS count FROM articles`;

  // sample join
  const sample = await sql<
    { category: string; article: string }[]
  >`
    SELECT c.title AS category, a.title AS article
    FROM articles a
    JOIN categories c ON a.category_id = c.id
    ORDER BY c.title, a.title
    LIMIT 5;
  `;

  // duplicates check (should return 0 rows)
  const dupes = await sql<
    { category_id: string; title: string; n: number }[]
  >`
    SELECT category_id, title, COUNT(*)::int AS n
    FROM articles
    GROUP BY category_id, title
    HAVING COUNT(*) > 1
  `;

  return NextResponse.json({
    categoriesCount,
    articlesCount,
    sample,
    duplicates: dupes,
    ok: dupes.length === 0 && categoriesCount > 0 && articlesCount > 0,
  });
}