"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

function LogoMark() {
  return (
    <svg
      width="200"
      height="44"
      viewBox="0 0 200 44"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="KemisEMAIL"
    >
      <rect x="0" y="4" width="4" height="36" fill="#0A0A0A" />
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
        fill="#0A0A0A"
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

type SiteNavProps = {
  ctaLabel: string;
  onCtaClick: () => void;
};

export default function SiteNav({ ctaLabel, onCtaClick }: SiteNavProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function close() {
    setOpen(false);
  }

  return (
    <>
      <nav className="ke-nav" aria-label="Primary">
        <Link href="/" className="ke-logo" aria-label="KemisEMAIL home" onClick={close}>
          <LogoMark />
        </Link>

        <div className="ke-nav-actions">
          <button
            type="button"
            className="ke-nav-cta"
            onClick={() => {
              close();
              onCtaClick();
            }}
          >
            {ctaLabel}
          </button>
          <button
            type="button"
            className={`ke-nav-burger${open ? " is-open" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="ke-site-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div
        id="ke-site-menu"
        className={`ke-menu${open ? " is-open" : ""}`}
        aria-hidden={!open}
      >
        <div className="ke-menu-backdrop" onClick={close} />
        <div className="ke-menu-panel" role="dialog" aria-modal="true" aria-label="Site menu">
          <div className="ke-menu-header">
            <span className="ke-menu-label">Menu</span>
            <button type="button" className="ke-menu-close" onClick={close} aria-label="Close menu">
              Close
            </button>
          </div>
          <ul className="ke-menu-list">
            <li>
              <Link href="/" onClick={close}>
                Email
              </Link>
            </li>
            <li>
              <Link href="/sms" onClick={close}>
                SMS
              </Link>
            </li>
            <li>
              <Link href="/service-kit" onClick={close}>
                Service Kit
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={close}>
                Contact
              </Link>
            </li>
          </ul>
          <p className="ke-menu-note">kemis.email/contact</p>
        </div>
      </div>
    </>
  );
}
