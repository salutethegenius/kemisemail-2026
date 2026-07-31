"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";

const PDF_HREF = "/service-kit/KemisEmail-Service-Kit-2026.pdf";
const WHATSAPP_URL =
  "https://wa.me/12424479692?text=" +
  encodeURIComponent("Hi KemisEmail — I want to talk about email or SMS campaigns");

const emailHighlights = [
  {
    title: "5,000–8,000 engaged buyers",
    body: "Top openers and clickers only — the people who never miss a deal.",
  },
  {
    title: "Full campaign design included",
    body: "You provide artwork and copy. We design, build, and deploy.",
  },
  {
    title: "Built for flash offers",
    body: "Weekend deals, last-minute fills, and urgency campaigns at a fraction of a full broadcast.",
  },
  {
    title: "Higher intent, smarter spend",
    body: "Smaller reach than 30K+. Stronger buyers. Book anytime for $19.99.",
  },
];

const smsHighlights = [
  {
    title: "Branded sender name",
    body: "Inbox shows YOUR COMPANY — not 242-555-5555. Instant recognition. Higher trust.",
  },
  {
    title: "SMS + WhatsApp",
    body: "Reach Bahamians on the channels they actually check. One brief. We run the send.",
  },
  {
    title: "Enterprise volume",
    body: "Serviced campaigns from 10,000 to 1M+ Bahamas numbers — not DIY self-serve blasts.",
  },
  {
    title: "From ~$0.10 / send",
    body: "Bahamas-only rates. Minimum 10,000. Custom volume quotes for larger runs.",
  },
];

const emailProofStats = [
  { value: "30K+", label: "Opted-in subscribers" },
  { value: "38%", label: "Avg open rate" },
  { value: "2×", label: "Industry open benchmark" },
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

function FooterLogo() {
  return (
    <svg width="200" height="44" viewBox="0 0 200 44" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
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
          <circle cx="1300" cy="100" r="80" fill="none" stroke="#6200FF" strokeWidth="1.5" opacity="0.12" />
          <polygon points="1100,480 1140,560 1060,560" fill="#FF4500" opacity="0.06" />
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
            The leave-behind for Bahamian businesses — email to 30,000+ opted-in inboxes, plus enterprise
            SMS & WhatsApp with branded sender names from 10,000 numbers.
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
            <button type="button" className="ke-btn-secondary" onClick={() => scrollToId("email-highlights")}>
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
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="ke-section-label">Email · Hot List</div>
        <h2 className="ke-section-title">
          Inbox
          <br />
          campaigns.
        </h2>
        <p className="ke-sk-section-lede">
          Hot List $19.99 · Standard eblast $65 · Monthly 4-pack $249 — reach 30,000+ verified Bahamian
          inboxes.
        </p>
        <ul className="ke-sk-highlight-list">
          {emailHighlights.map((item, index) => (
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
      </motion.section>

      <motion.section
        className="ke-sk-sms"
        id="sms-highlights"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="ke-section-label">SMS & WhatsApp</div>
        <h2 className="ke-section-title">
          Their phone.
          <br />
          Your brand.
        </h2>
        <p className="ke-sk-section-lede">
          Enterprise Bahamas messaging — recipients see <strong>YOUR COMPANY</strong>, not a random
          number. From ~$0.10/send · minimum 10,000.
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
          lands.
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
        <p>
          PDF leave-behind for 2026 — Email Hot List from $19.99 · SMS from ~$0.10/send · 10K+ minimum.
        </p>
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
            WhatsApp us
          </a>
          <Link className="ke-btn-outline-white" href="/sms">
            SMS quote →
          </Link>
        </motion.div>
      </motion.section>

      <footer className="ke-footer" aria-label="Site footer">
        <Link className="ke-footer-logo" href="/" aria-label="KemisEMAIL home">
          <FooterLogo />
        </Link>
        <div className="ke-footer-note">
          A licensed subsidiary of Kemis Ltd., The Bahamas. © {new Date().getFullYear()} KemisEMAIL.
        </div>
        <div className="ke-footer-links">
          <Link href="/">Email</Link>
          <Link href="/sms">SMS</Link>
          <a href={PDF_HREF} download>
            PDF
          </a>
          <Link href="/contact">Contact</Link>
        </div>
      </footer>
    </div>
  );
}
