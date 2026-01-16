// app/api/vendors/route.ts
import { NextRequest, NextResponse } from 'next/server';

// Dummy vendors data
const vendors = [
  { id: 1, name: 'Vendor A', email: 'vendorA@example.com' },
  { id: 2, name: 'Vendor B', email: 'vendorB@example.com' },
  { id: 3, name: 'Vendor C', email: 'vendorC@example.com' },
];

export async function GET(req: NextRequest) {
  try {
    return NextResponse.json({ success: true, data: vendors });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to fetch vendors' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const newVendor = {
      id: vendors.length + 1,
      ...body,
    };
    vendors.push(newVendor);
    return NextResponse.json({ success: true, data: newVendor }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to create vendor' }, { status: 500 });
  }
}