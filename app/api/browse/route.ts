import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const runtime = 'nodejs'; // Prisma needs Node, not Edge

export async function GET(req: NextRequest) {
  const searchParams = new URL(req.url).searchParams;

  const titles = 
}