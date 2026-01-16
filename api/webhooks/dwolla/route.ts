// app/api/webhooks/dwolla/route.ts
import { NextRequest, NextResponse } from 'next/server';

// You can store your Dwolla webhook secret in an environment variable
const DWOLLA_WEBHOOK_SECRET = process.env.DWOLLA_WEBHOOK_SECRET || 'your-webhook-secret';

export async function POST(req: NextRequest) {
  try {
    const headers = Object.fromEntries(req.headers.entries());
    const signature = headers['webhook-signature'] || headers['webhook-signature-timestamp'];

    // Optional: Verify the webhook signature if needed
    // (Dwolla recommends validating using your webhook secret)

    const body = await req.json();

    console.log('Received Dwolla Webhook:', body);

    // Process webhook events here (e.g., payment completed, failed, etc.)
    // Example: if (body.topic === 'transfer_completed') { ... }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing Dwolla webhook:', error);
    return NextResponse.json({ success: false, error: 'Failed to process webhook' }, { status: 500 });
  }
}