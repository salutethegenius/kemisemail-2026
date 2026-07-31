import type { Metadata } from "next";

const title = "Service Kit 2026 | KemisEMAIL";
const description =
  "Download the KemisEMAIL Service Kit 2026 — email Hot List campaigns from $19.99 and Bahamas SMS & WhatsApp advertising from ~$0.10/send for 10,000+ numbers.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/service-kit",
  },
  openGraph: {
    title,
    description,
    url: "https://kemis.email/service-kit",
    siteName: "KemisEMAIL",
    type: "website",
    images: [
      {
        url: "/og-kemisemail.png",
        width: 1200,
        height: 630,
        alt: "KemisEMAIL Service Kit 2026 — Email & SMS Advertising",
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

export default function ServiceKitLayout({ children }: { children: React.ReactNode }) {
  return children;
}
