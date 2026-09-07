"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const PDF_HREF = "/service-kit/KemisEmail-Service-Kit-2026.pdf";
const WHATSAPP_URL =
  "https://wa.me/12424479692?text=" +
  encodeURIComponent("Hi KemisEmail — I want to book a Hot List campaign");

const emailHighlights = [
  {
    title: "30K+ nationwide reach",
    body: "A standard full email campaign hits the typical nationwide sendable audience — or target by island and industry.",
  },
  {
    title: "Hot List from $19.99",
    body: "5,000–8,000 most engaged openers and clickers. Campaign design included. Start smaller, then go broad.",
  },
  {
    title: "Monthly Campaign Plan $249",
    body: "Four campaigns a month. Recurring customer acquisition — stay in front of the same audience every week.",
  },
  {
    title: "Buy, send, measure",
    body: "You provide artwork and copy. We send. You get the report. No ad algorithms. No waiting.",
  },
];

const smsHighlights = [
  {
    title: "Higher-impact companion",
    body: "Pair branded SMS with an email campaign. Inbox plus a tap on the phone.",
  },
  {
    title: "Branded sender name",
    body: "Inbox shows YOUR COMPANY — not 242-555-5555. Instant recognition. Higher trust.",
  },
  {
    title: "SMS + WhatsApp",
    body: "Reach Bahamians on the channels they actually check. One brief. We run the send.",
  },
  {
    title: "From ~$0.10 / send",
    body: "Bahamas-only rates. Minimum 10,000. Custom volume quotes for larger runs.",
  },
];

const emailProofStats = [
  { value: "30K+", label: "Sendable audience" },
  { value: "25%+", label: "Newsletter open rate" },
  { value: "24–35%", label: "Paid campaign opens" },
];

const smsProofStats = [
  { value: "20,256", label: "NHI SMS delivered" },
  { value: "100%", label: "Delivery rate" },
  { value: "0", label: "Failed / blocked" },
];

const brands = ["Burger King", "KFC", "Urban Nassau Rides", "Oasis", "Windermere", "Drewber"];

function scrollToId(id: string) {
  if (typeof document === "undefined") return;
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function ServiceKitPage() {
  return (
    <div className="ke-wrap">
      <SiteNav
        ctaLabel="Grab Kit →"
        onCtaClick={() => {
          window.location.href = PDF_HREF;
        }}
      />

      <motion.section
        className="ke-hero ke-sk-hero"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <svg
          className="ke-hero-geo"
          viewBox="0 0 1400 600"
          preserveAspectRatio="none"
          aria-hidden="true"
          focusable="false"
        >
          <line x1="900" y1="0" x2="1400" y2="600" stroke="#FF4500" strokeWidth="1.5" opacity="0.12" />
          <line x1="1000" y1="0" x2="1400" y2="400" stroke="#0047FF" strokeWidth="1" opacity="0.1" />
          <line x1="1100" y1="0" x2="1400" y2="300" stroke="#6200FF" strokeWidth="1" opacity="0.1" />
          <rect x="800" y="40" width="60" height="60" fill="none" stroke="#FF4500" strokeWidth="1.5" opacity="0.2" />
          <rect x="1200" y="200" width="40" height="40" fill="#0047FF" opacity="0.08" />
          <circle cx="1300" cy="100" r="80" fill="none" stroke="#6200FF" strokeWidth="1.5" opacity="0.12" />
          <circle cx="1350" cy="450" r="120" fill="none" stroke="#FF4500" strokeWidth="1" opacity="0.08" />
          <line x1="0" y1="500" x2="400" y2="600" stroke="#0A0A0A" strokeWidth="0.5" opacity="0.15" />
          <polygon points="1100,480 1140,560 1060,560" fill="#FF4500" opacity="0.06" />
          <polygon points="850,100 890,60 890,140" fill="#0047FF" opacity="0.08" />
        </svg>

        <motion.div
          className="ke-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
        >
          <p className="ke-sk-brand" aria-label="KemisEMAIL">
            Kemis<span>EMAIL</span>
          </p>
          <h1 className="ke-h1">
            Service Kit
            <br />
            <span className="o">2026</span>
          </h1>
          <p className="ke-hero-sub">
            The leave-behind for Bahamian businesses — reach 30K+ consumers through targeted email,
            with SMS available for higher-impact campaigns.
          </p>
          <motion.div
            className="ke-hero-btns"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
          >
            <a className="ke-btn-primary" href={PDF_HREF} download>
              Grab it now →
            </a>
            <button
              type="button"
              className="ke-btn-secondary"
              onClick={() => scrollToId("email-highlights")}
            >
              Explore →
            </button>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section
        className="ke-sk-highlights"
        id="email-highlights"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="ke-section-label">Email Campaign</div>
        <h2 className="ke-section-title">
          Broad reach.
          <br />
          Three ways in.
        </h2>
        <p className="ke-sk-section-lede">
          Email Campaign $65 · Hot List $19.99 · Monthly Campaign Plan $249 — 30K+ nationwide
          sendable audience.
        </p>
        <ul className="ke-sk-highlight-list">
          {emailHighlights.map((item, index) => (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ delay: index * 0.08, duration: 0.45, ease: "easeOut" }}
            >
              <span className="ke-sk-highlight-index">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </motion.section>

      <motion.section
        className="ke-sk-sms"
        id="sms-highlights"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="ke-section-label">Email + SMS</div>
        <h2 className="ke-section-title">
          Higher-impact
          <br />
          on their phone.
        </h2>
        <p className="ke-sk-section-lede">
          Pair branded SMS with an email campaign. Recipients see <strong>YOUR COMPANY</strong>, not a
          random number. From ~$0.10/send · minimum 10,000.
        </p>
        <ul className="ke-sk-highlight-list ke-sk-highlight-list-light">
          {smsHighlights.map((item, index) => (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.06, duration: 0.4, ease: "easeOut" }}
            >
              <span className="ke-sk-highlight-index">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </motion.li>
          ))}
        </ul>
        <div className="ke-sk-sms-cta">
          <Link className="ke-btn-primary" href="/sms">
            Request SMS quote →
          </Link>
        </div>
      </motion.section>

      <motion.section
        className="ke-sk-proof"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="ke-section-label">From the Service Kit</div>
        <h2 className="ke-section-title">
          Proof that
          <br />
          opens.
        </h2>

        <div className="ke-sk-proof-block">
          <h3 className="ke-sk-proof-heading">Email</h3>
          <div className="ke-sk-proof-stats">
            {emailProofStats.map((stat) => (
              <div key={stat.label} className="ke-sk-proof-stat">
                <div className="ke-sk-proof-val">{stat.value}</div>
                <div className="ke-sk-proof-lbl">{stat.label}</div>
              </div>
            ))}
          </div>
          <p className="ke-sk-proof-note">
            Brands Nassau trusts — including the names already running on KemisEMAIL.
          </p>
          <div className="ke-sk-brands" aria-label="Trusted brands">
            {brands.map((brand) => (
              <span key={brand}>{brand}</span>
            ))}
          </div>
        </div>

        <div className="ke-sk-proof-block ke-sk-proof-block-sms">
          <h3 className="ke-sk-proof-heading">SMS · National Health Insurance</h3>
          <div className="ke-sk-proof-stats">
            {smsProofStats.map((stat) => (
              <div key={stat.label} className="ke-sk-proof-stat">
                <div className="ke-sk-proof-val">{stat.value}</div>
                <div className="ke-sk-proof-lbl">{stat.label}</div>
              </div>
            ))}
          </div>
          <p className="ke-sk-proof-note">
            Live enterprise Bahamas SMS campaign — full delivery report included with every send.
          </p>
        </div>
      </motion.section>

      <motion.section
        className="ke-cta"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <svg
          className="ke-cta-geo"
          viewBox="0 0 1400 400"
          preserveAspectRatio="none"
          aria-hidden="true"
          focusable="false"
        >
          <line x1="0" y1="0" x2="1400" y2="400" stroke="#fff" strokeWidth="2" />
          <line x1="200" y1="0" x2="1400" y2="300" stroke="#FF4500" strokeWidth="1.5" />
          <circle cx="200" cy="200" r="150" fill="none" stroke="#FF4500" strokeWidth="2" />
          <circle cx="1200" cy="100" r="100" fill="none" stroke="#fff" strokeWidth="1.5" />
        </svg>
        <h2>
          Grab the
          <br />
          <span>Service Kit</span>
        </h2>
        <p>Email Campaign $65 · Hot List $19.99 · Monthly Plan $249 · Email + SMS by quote.</p>
        <motion.div
          className="ke-cta-btns"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }}
        >
          <a className="ke-btn-white" href={PDF_HREF} download>
            Grab it now →
          </a>
          <a className="ke-btn-outline-white" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            WhatsApp to book
          </a>
          <Link className="ke-btn-outline-white" href="/sms">
            SMS quote →
          </Link>
        </motion.div>
      </motion.section>

      <SiteFooter
        links={
          <>
            <Link href="/">Email</Link>
            <Link href="/sms">SMS</Link>
            <a href={PDF_HREF} download>
              PDF
            </a>
            <Link href="/contact">Contact</Link>
          </>
        }
      />
    </div>
  );
}
