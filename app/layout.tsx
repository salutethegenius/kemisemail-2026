import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const siteUrl = new URL("https://kemis.email");
const siteName = "KemisEMAIL";
const siteTitle = "KemisEMAIL — Bahamas Email Newsletter Platform";
const siteDescription =
  "Bahamas email newsletter and eblast service reaching 30,000+ verified Bahamian inboxes.";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl.toString(),
    siteName,
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
    title: siteTitle,
    description: siteDescription,
    images: ["/og-kemisemail.png"],
  },
  icons: {
    icon: [
      { url: "/kemisemail-favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/kemisemail-favicon-64.png", sizes: "64x64", type: "image/png" },
    ],
    apple: [
      { url: "/kemisemail-favicon-64.png", sizes: "64x64", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationLdJson = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: siteUrl.toString(),
    logo: new URL("/kemisemail-logo-dark.png", siteUrl).toString(),
  };

  const webSiteLdJson = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl.toString(),
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationLdJson, webSiteLdJson]),
          }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

