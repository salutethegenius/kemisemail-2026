import type { Metadata } from "next";

const title = "Service Kit 2026 | Kemis.email";
const description =
  "Reach 30K+ Bahamian consumers by email, with SMS for higher-impact campaigns. Email from $19.99, monthly plans $249.";

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
        alt: "Kemis.email Service Kit 2026 — Email & SMS campaigns",
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
