import { NextResponse } from "next/server";
import { Resend } from "resend";
import { verifyTurnstileToken } from "@/lib/turnstile";

export const runtime = "nodejs";

const QUOTE_TO = process.env.SMS_QUOTE_TO || "frontdesk@kemsidigital.com";
const QUOTE_FROM =
  process.env.SMS_QUOTE_FROM || "KemisEMAIL Quotes <onboarding@kemis.email>";

type QuoteBody = {
  company?: string;
  contactName?: string;
  email?: string;
  phone?: string;
  channel?: string;
  volume?: string | number;
  notes?: string;
  turnstileToken?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: QuoteBody;

  try {
    body = (await request.json()) as QuoteBody;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const captcha = await verifyTurnstileToken(
    body.turnstileToken,
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("cf-connecting-ip")
  );
  if (!captcha.ok) {
    return NextResponse.json({ error: captcha.error }, { status: 400 });
  }

  const company = (body.company || "").trim();
  const contactName = (body.contactName || "").trim();
  const email = (body.email || "").trim();
  const phone = (body.phone || "").trim();
  const channel = (body.channel || "").trim();
  const notes = (body.notes || "").trim();
  const volumeRaw = String(body.volume ?? "").trim().replace(/,/g, "");
  const volume = Number(volumeRaw);

  if (!company || !contactName || !email || !channel) {
    return NextResponse.json(
      { error: "Company, contact name, email, and channel are required." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  if (!["SMS", "WhatsApp", "Both"].includes(channel)) {
    return NextResponse.json({ error: "Invalid channel selection." }, { status: 400 });
  }

  if (!Number.isFinite(volume) || volume < 10000) {
    return NextResponse.json(
      { error: "Volume must be at least 10,000 numbers." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "Quote form is not configured yet. Please try again shortly or email frontdesk@kemsidigital.com.",
      },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);
  const volumeFormatted = volume.toLocaleString("en-US");

  const text = [
    "New SMS / WhatsApp quote request from kemis.email/sms",
    "",
    `Company / brand (sender): ${company}`,
    `Contact: ${contactName}`,
    `Email: ${email}`,
    `Phone: ${phone || "—"}`,
    `Channel: ${channel}`,
    `Approx. volume: ${volumeFormatted}`,
    "",
    "Notes:",
    notes || "—",
  ].join("\n");

  const { error } = await resend.emails.send({
    from: QUOTE_FROM,
    to: [QUOTE_TO],
    replyTo: email,
    subject: `SMS/WhatsApp quote — ${company} (${volumeFormatted})`,
    text,
  });

  if (error) {
    console.error("Resend SMS quote error:", error);
    return NextResponse.json(
      {
        error:
          "We couldn’t send your request right now. Please email frontdesk@kemsidigital.com.",
      },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
