import type { Metadata } from "next";

const title = "SMS & WhatsApp Advertising — Bahamas | KemisEMAIL";
const description =
  "Enterprise SMS and WhatsApp advertising in The Bahamas. Branded sender name, 10,000 to 1M+ numbers, competitive rates from $0.10/send. Request a quote.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/sms",
  },
  openGraph: {
    title,
    description,
    url: "https://kemis.email/sms",
    siteName: "KemisEMAIL",
    type: "website",
    images: [
      {
        url: "/og-kemisemail.png",
        width: 1200,
        height: 630,
        alt: "KemisEMAIL — SMS & WhatsApp Advertising in The Bahamas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-kemisemail.png"],
  },
};

export default function SmsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
