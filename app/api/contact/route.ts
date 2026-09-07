import { NextResponse } from "next/server";
import { Resend } from "resend";
import { verifyTurnstileToken } from "@/lib/turnstile";

export const runtime = "nodejs";

const CONTACT_TO = process.env.CONTACT_TO || process.env.SMS_QUOTE_TO || "frontdesk@kemsidigital.com";
const CONTACT_FROM =
  process.env.CONTACT_FROM ||
  process.env.SMS_QUOTE_FROM ||
  "KemisEMAIL Contact <onboarding@kemis.email>";

type ContactBody = {
  name?: string;
  email?: string;
  phone?: string;
  topic?: string;
  message?: string;
  turnstileToken?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: ContactBody;

  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const phone = (body.phone || "").trim();
  const topic = (body.topic || "").trim();
  const message = (body.message || "").trim();

  const captcha = await verifyTurnstileToken(
    body.turnstileToken,
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("cf-connecting-ip")
  );
  if (!captcha.ok) {
    return NextResponse.json({ error: captcha.error }, { status: 400 });
  }

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const allowedTopics = ["Email advertising", "Email + SMS", "SMS / WhatsApp", "General"];
  if (topic && !allowedTopics.includes(topic)) {
    return NextResponse.json({ error: "Invalid topic selection." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "Contact form is not configured yet. Please try again shortly or email frontdesk@kemsidigital.com.",
      },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);
  const topicLine = topic || "General";

  const text = [
    "New contact form message from kemis.email/contact",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "—"}`,
    `Topic: ${topicLine}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const { error } = await resend.emails.send({
    from: CONTACT_FROM,
    to: [CONTACT_TO],
    replyTo: email,
    subject: `Contact — ${topicLine} — ${name}`,
    text,
  });

  if (error) {
    console.error("Resend contact error:", error);
    return NextResponse.json(
      {
        error:
          "We couldn’t send your message right now. Please email frontdesk@kemsidigital.com.",
      },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
