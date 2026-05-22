import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.text();
  return NextResponse.json({
    status: 'received_demo',
    bytes: body.length,
    message: 'Add Razorpay signature verification and MySQL update logic after adding credentials.'
  });
}
