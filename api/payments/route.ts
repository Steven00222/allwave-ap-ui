// app/api/payments/route.ts
import { NextRequest, NextResponse } from "next/server";

// Dummy payments data (replace with DB or Dwolla integration)
let payments = [
  { id: 1, vendorId: 1, amount: 500, status: "pending", date: "2026-01-16" },
  { id: 2, vendorId: 2, amount: 1200, status: "completed", date: "2026-01-15" },
];

// GET /api/payments - fetch all payments
export async function GET(req: NextRequest) {
  return NextResponse.json({ payments });
}

// POST /api/payments - create a new payment
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { vendorId, amount, status } = body;

    if (!vendorId || !amount || !status) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const newPayment = {
      id: payments.length + 1,
      vendorId,
      amount,
      status,
      date: new Date().toISOString().split("T")[0], // YYYY-MM-DD
    };

    payments.push(newPayment);

    return NextResponse.json({ message: "Payment created successfully", payment: newPayment }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
}