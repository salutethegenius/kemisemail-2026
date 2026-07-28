import type { Metadata } from "next";

const title = "Service Kit 2026 — Hot List Highlights | KemisEMAIL";
const description =
  "Download the KemisEMAIL Service Kit 2026. Hot List campaigns from $19.99 reach 5,000–8,000 of our most engaged Bahamian buyers — design included.";

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
        alt: "KemisEMAIL — Bahamas Email Newsletter & Eblast Platform",
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
