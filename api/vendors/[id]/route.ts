// app/api/vendors/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";

// Dummy vendors data (replace with DB or real API)
let vendors = [
  { id: 1, name: "Vendor One", email: "vendor1@example.com" },
  { id: 2, name: "Vendor Two", email: "vendor2@example.com" },
];

// GET /api/vendors/:id - fetch a vendor by id
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const vendorId = parseInt(params.id, 10);
  const vendor = vendors.find((v) => v.id === vendorId);

  if (!vendor) {
    return NextResponse.json({ error: "Vendor not found" }, { status: 404 });
  }

  return NextResponse.json({ vendor });
}

// PUT /api/vendors/:id - update a vendor
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const vendorId = parseInt(params.id, 10);
    const body = await req.json();
    const vendorIndex = vendors.findIndex((v) => v.id === vendorId);

    if (vendorIndex === -1) {
      return NextResponse.json({ error: "Vendor not found" }, { status: 404 });
    }

    vendors[vendorIndex] = { ...vendors[vendorIndex], ...body };

    return NextResponse.json({ message: "Vendor updated", vendor: vendors[vendorIndex] });
  } catch (error) {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
}

// DELETE /api/vendors/:id - remove a vendor
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const vendorId = parseInt(params.id, 10);
  const vendorIndex = vendors.findIndex((v) => v.id === vendorId);

  if (vendorIndex === -1) {
    return NextResponse.json({ error: "Vendor not found" }, { status: 404 });
  }

  const removedVendor = vendors.splice(vendorIndex, 1)[0];
  return NextResponse.json({ message: "Vendor deleted", vendor: removedVendor });
}