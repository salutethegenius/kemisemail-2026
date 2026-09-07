import type { Metadata } from "next";

const title = "Email + SMS Campaigns — Bahamas | Kemis.email";
const description =
  "Pair branded SMS with email to reach Bahamian customers. Higher-impact campaigns with branded sender names from ~$0.10/send. Request a quote.";

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
        alt: "Kemis.email — Email + SMS campaigns in The Bahamas",
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
