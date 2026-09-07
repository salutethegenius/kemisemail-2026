import type { ReactNode } from "react";
import Link from "next/link";

function FooterLogo() {
  return (
    <svg
      width="200"
      height="44"
      viewBox="0 0 200 44"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="KemisEMAIL"
    >
      <rect x="0" y="4" width="4" height="36" fill="#F5F4F0" />
      <polygon points="4,4 18,4 10,22 4,22" fill="#FF4500" />
      <polygon points="4,22 10,22 22,40 6,40" fill="#0047FF" />
      <rect x="24" y="4" width="3" height="3" fill="#6200FF" opacity="0.9" />
      <rect x="29" y="4" width="3" height="3" fill="#FF4500" opacity="0.5" />
      <rect x="34" y="4" width="3" height="3" fill="#0047FF" opacity="0.3" />
      <text
        x="42"
        y="32"
        fontFamily="'Barlow Condensed',sans-serif"
        fontWeight="900"
        fontSize="30"
        fill="#F5F4F0"
        letterSpacing={-0.2}
      >
        KEMIS
      </text>
      <text
        x="134"
        y="32"
        fontFamily="'Barlow Condensed',sans-serif"
        fontWeight="900"
        fontSize="30"
        fill="#FF4500"
        letterSpacing={-0.2}
      >
        EMAIL
      </text>
    </svg>
  );
}

type SiteFooterProps = {
  links: ReactNode;
};

export default function SiteFooter({ links }: SiteFooterProps) {
  return (
    <footer className="ke-footer" aria-label="Site footer">
      <Link href="/" className="ke-footer-logo" aria-label="KemisEMAIL home">
        <FooterLogo />
      </Link>
      <div className="ke-footer-note">
        <p>
          A licensed subsidiary of Kemis Ltd., The Bahamas. © {new Date().getFullYear()}{" "}
          KemisEMAIL.
        </p>
        <p>KemisDigital builds websites. Kemis.email is audience and promotion.</p>
      </div>
      <div className="ke-footer-links">
        {links}
        <a href="https://kemisdigital.com" target="_blank" rel="noreferrer">
          KemisDigital
        </a>
      </div>
    </footer>
  );
}
