import { NextResponse } from 'next/server';
import { documents } from '@/lib/data';

export async function GET() {
  return NextResponse.json({ items: documents });
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  return NextResponse.json({
    status: 'saved_demo',
    message: 'Connect Hostinger MySQL to persist this document in production.',
    document: body
  });
}
