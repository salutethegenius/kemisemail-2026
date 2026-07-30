import type { Metadata } from "next";

const title = "Contact — KemisEMAIL";
const description =
  "Contact KemisEMAIL about Bahamas email advertising or SMS & WhatsApp campaigns.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title,
    description,
    url: "https://kemis.email/contact",
    siteName: "KemisEMAIL",
    type: "website",
    images: [
      {
        url: "/og-kemisemail.png",
        width: 1200,
        height: 630,
        alt: "Contact KemisEMAIL",
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

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
