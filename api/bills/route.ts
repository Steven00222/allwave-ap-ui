// app/api/bills/route.ts
import { NextRequest, NextResponse } from "next/server";

// Dummy data: replace with your DB or Dwolla integration
const bills = [
  { id: 1, vendor: "Vendor A", amount: 100.5, dueDate: "2026-01-31" },
  { id: 2, vendor: "Vendor B", amount: 250.0, dueDate: "2026-02-10" },
];

// GET /api/bills - fetch all bills
export async function GET(req: NextRequest) {
  return NextResponse.json({ bills });
}

// POST /api/bills - create a new bill
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    if (!body.vendor || !body.amount || !body.dueDate) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const newBill = {
      id: bills.length + 1,
      vendor: body.vendor,
      amount: body.amount,
      dueDate: body.dueDate,
    };

    bills.push(newBill);

    return NextResponse.json({ message: "Bill created successfully", bill: newBill }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
}