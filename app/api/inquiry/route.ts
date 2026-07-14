import { NextResponse } from "next/server";
import { inquirySchema } from "@/lib/validation";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = inquirySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: parsed.error.flatten() },
      { status: 422 },
    );
  }

  // Honeypot tripped → pretend success, drop silently.
  if (parsed.data.company) {
    return NextResponse.json({ ok: true });
  }

  const { name, email, message } = parsed.data;
  console.log("[inquiry]", { name, email, message: message.slice(0, 80) });

  return NextResponse.json({ ok: true });
}
