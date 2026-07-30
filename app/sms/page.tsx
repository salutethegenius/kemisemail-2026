"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import TurnstileWidget from "@/components/TurnstileWidget";

type FormState = {
  company: string;
  contactName: string;
  email: string;
  phone: string;
  channel: "SMS" | "WhatsApp" | "Both";
  volume: string;
  notes: string;
};

const initialForm: FormState = {
  company: "",
  contactName: "",
  email: "",
  phone: "",
  channel: "SMS",
  volume: "10000",
  notes: "",
};

function scrollToId(id: string) {
  if (typeof document === "undefined") return;
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

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

export default function SmsPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [turnstileReset, setTurnstileReset] = useState(0);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    if (!turnstileToken) {
      setError("Please complete the captcha challenge.");
      setSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/sms-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          volume: form.volume.replace(/,/g, ""),
          turnstileToken,
        }),
      });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        setTurnstileToken(null);
        setTurnstileReset((n) => n + 1);
        return;
      }
      setSuccess(true);
      setForm(initialForm);
      setTurnstileToken(null);
      setTurnstileReset((n) => n + 1);
    } catch {
      setError("Network error. Please try again or email frontdesk@kemsidigital.com.");
      setTurnstileToken(null);
      setTurnstileReset((n) => n + 1);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="ke-wrap">
      <SiteNav ctaLabel="Get a Quote →" onCtaClick={() => scrollToId("ke-sms-quote")} />

      <motion.section
        className="ke-sms-hero"
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
          <circle cx="1300" cy="100" r="80" fill="none" stroke="#6200FF" strokeWidth="1.5" opacity="0.12" />
          <rect x="800" y="40" width="60" height="60" fill="none" stroke="#FF4500" strokeWidth="1.5" opacity="0.2" />
          <polygon points="1100,480 1140,560 1060,560" fill="#FF4500" opacity="0.06" />
        </svg>

        <div className="ke-sms-hero-grid">
          <motion.div
            className="ke-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
          >
            <div className="ke-eyebrow">
              <span />
              Bahamas · SMS & WhatsApp Advertising
            </div>
            <h1 className="ke-h1">
              Your Brand.
              <br />
              <span className="o">Their Phone.</span>
              <br />
              <span className="b">10K–1M+</span>
              <br />
              <span className="p">Delivered.</span>
            </h1>
            <p className="ke-hero-sub">
              Enterprise SMS and WhatsApp campaigns for The Bahamas. Recipients see{" "}
              <strong>YOUR COMPANY</strong> — not a random number. Minimum 10,000. We handle the send.
            </p>
            <div className="ke-hero-btns">
              <button className="ke-btn-primary" onClick={() => scrollToId("ke-sms-quote")}>
                Request a Quote
              </button>
              <button className="ke-btn-secondary" onClick={() => scrollToId("ke-sms-proof")}>
                See NHI Results →
              </button>
            </div>
          </motion.div>

          <motion.div
            className="ke-sms-phones"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            aria-hidden="true"
          >
            <div className="ke-sms-phone ke-sms-phone-bad">
              <div className="ke-sms-phone-notch" />
              <div className="ke-sms-bubble">
                <div className="ke-sms-sender">242-555-0199</div>
                <p>Limited time offer — tap to learn more.</p>
              </div>
              <div className="ke-sms-phone-caption">Unknown number</div>
            </div>
            <div className="ke-sms-phone ke-sms-phone-good">
              <div className="ke-sms-phone-notch" />
              <div className="ke-sms-bubble">
                <div className="ke-sms-sender">YOUR COMPANY</div>
                <p>Limited time offer — tap to learn more.</p>
              </div>
              <div className="ke-sms-phone-caption">Branded sender</div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.div
        className="ke-ticker"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.4, ease: "easeOut" }}
      >
        <div className="ke-ticker-inner">
          <div className="ke-ticker-item">
            <span className="ke-ticker-dot" />
            Branded sender name
          </div>
          <div className="ke-ticker-item">
            <span className="ke-ticker-dot b" />
            SMS · WhatsApp
          </div>
          <div className="ke-ticker-item">
            <span className="ke-ticker-dot p" />
            10,000 to 1M+ Bahamas numbers
          </div>
          <div className="ke-ticker-item">
            <span className="ke-ticker-dot" />
            From ~$0.10 / send
          </div>
        </div>
      </motion.div>

      <motion.section
        className="ke-sms-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="ke-section-label">Why it lands</div>
        <h2 className="ke-section-title">
          Advertising that
          <br />
          gets opened.
        </h2>
        <div className="ke-sms-why-grid">
          <div className="ke-sms-why">
            <div className="ke-sms-why-num" style={{ color: "#FF4500" }}>
              01
            </div>
            <h3>Branded sender</h3>
            <p>Inbox shows your company name — not 242-555-5555. Instant recognition. Higher trust.</p>
          </div>
          <div className="ke-sms-why">
            <div className="ke-sms-why-num" style={{ color: "#0047FF" }}>
              02
            </div>
            <h3>SMS + WhatsApp</h3>
            <p>Reach Bahamians on the channels they actually check. One campaign brief. We run the send.</p>
          </div>
          <div className="ke-sms-why">
            <div className="ke-sms-why-num" style={{ color: "#6200FF" }}>
              03
            </div>
            <h3>Enterprise volume</h3>
            <p>From 10,000 to 1M+ numbers. Serviced end-to-end — you share the list, we deliver.</p>
          </div>
          <div className="ke-sms-why">
            <div className="ke-sms-why-num" style={{ color: "#FF4500" }}>
              04
            </div>
            <h3>Delivery report</h3>
            <p>Full transparency after every send — deliverability, spend, and timeline for your team.</p>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="ke-sms-scale"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="ke-section-label" style={{ color: "#F5F4F0", borderColor: "#F5F4F0" }}>
          Scale
        </div>
        <h2 className="ke-section-title" style={{ color: "#F5F4F0" }}>
          Built for
          <br />
          big lists.
        </h2>
        <p className="ke-sms-scale-sub">
          This is an enterprise product. We service campaigns from{" "}
          <strong>10,000 to 1,000,000+</strong> Bahamas numbers — not DIY self-serve blasts.
        </p>
        <div className="ke-sms-scale-band">
          <span>10K</span>
          <div className="ke-sms-scale-line" />
          <span>100K</span>
          <div className="ke-sms-scale-line" />
          <span>1M+</span>
        </div>
      </motion.section>

      <motion.section
        className="ke-sms-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="ke-section-label">Bahamas rates</div>
        <h2 className="ke-section-title">
          Competitive.
          <br />
          Transparent.
        </h2>
        <div className="ke-sms-rates">
          <div className="ke-sms-rate-hero">
            <div className="ke-sms-rate-price">
              ~$0.10<span>/send</span>
            </div>
            <p>Bahamas SMS & WhatsApp advertising · volume quotes for larger runs</p>
          </div>
          <ul className="ke-sms-rate-list">
            <li>Minimum campaign size: <strong>10,000</strong> numbers</li>
            <li>Bahamas-only pricing — quoted for local traffic</li>
            <li>Custom volume pricing for 50K, 100K, and 1M+</li>
            <li>Full cost report after every campaign</li>
          </ul>
        </div>
      </motion.section>

      <motion.section
        className="ke-sms-proof"
        id="ke-sms-proof"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="ke-section-label">Live campaign</div>
        <h2 className="ke-section-title">
          National Health
          <br />
          Insurance.
        </h2>
        <p className="ke-sms-proof-lede">
          Recent enterprise SMS campaign for National Health Insurance (NHI) across The Bahamas.
        </p>
        <div className="ke-sms-proof-stats">
          <div>
            <div className="ke-sms-stat-num">20,256</div>
            <div className="ke-sms-stat-label">SMS delivered</div>
          </div>
          <div>
            <div className="ke-sms-stat-num">100%</div>
            <div className="ke-sms-stat-label">Delivery rate</div>
          </div>
          <div>
            <div className="ke-sms-stat-num">0</div>
            <div className="ke-sms-stat-label">Failed / blocked</div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="ke-sms-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="ke-section-label">How it works</div>
        <h2 className="ke-section-title">
          Four steps.
          <br />
          We run it.
        </h2>
        <div className="ke-process-steps">
          <div className="ke-step">
            <div className="ke-step-num" style={{ color: "#FF4500" }}>
              01
            </div>
            <div className="ke-step-title">Share your list</div>
            <p className="ke-step-desc">Send us your Bahamas contacts (10,000+). We validate and size the campaign.</p>
          </div>
          <div className="ke-step">
            <div className="ke-step-num" style={{ color: "#0047FF" }}>
              02
            </div>
            <div className="ke-step-title">Quote & approve</div>
            <p className="ke-step-desc">Transparent Bahamas rate. Approve sender name and message content before anything goes live.</p>
          </div>
          <div className="ke-step">
            <div className="ke-step-num" style={{ color: "#6200FF" }}>
              03
            </div>
            <div className="ke-step-title">We send</div>
            <p className="ke-step-desc">Paced enterprise delivery across SMS and/or WhatsApp. You focus on the message.</p>
          </div>
          <div className="ke-step">
            <div className="ke-step-num" style={{ color: "#FF4500" }}>
              04
            </div>
            <div className="ke-step-title">You get the report</div>
            <p className="ke-step-desc">Deliverability, spend, and timeline — proof you can share with your team.</p>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="ke-sms-quote"
        id="ke-sms-quote"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="ke-sms-quote-inner">
          <div>
            <div className="ke-section-label">Request a quote</div>
            <h2 className="ke-section-title">
              Tell us the
              <br />
              campaign.
            </h2>
            <p className="ke-sms-quote-lede">
              Bahamas SMS & WhatsApp only. Minimum 10,000 numbers. We’ll reply from the Kemis front desk.
            </p>
          </div>

          {success ? (
            <div className="ke-sms-success" role="status">
              <h3>Request received</h3>
              <p>Thanks — we’ll follow up shortly about your campaign.</p>
              <button
                type="button"
                className="ke-btn-secondary"
                onClick={() => setSuccess(false)}
              >
                Send another →
              </button>
            </div>
          ) : (
            <form className="ke-sms-form" onSubmit={onSubmit} noValidate>
              <label>
                Company / brand name
                <span>Shown as sender ID</span>
                <input
                  required
                  value={form.company}
                  onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
                  placeholder="YOUR COMPANY"
                  maxLength={80}
                />
              </label>
              <div className="ke-sms-form-row">
                <label>
                  Contact name
                  <input
                    required
                    value={form.contactName}
                    onChange={(e) => setForm((f) => ({ ...f, contactName: e.target.value }))}
                    placeholder="Full name"
                    maxLength={80}
                  />
                </label>
                <label>
                  Work email
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    placeholder="you@company.com"
                    maxLength={120}
                  />
                </label>
              </div>
              <div className="ke-sms-form-row">
                <label>
                  Phone <em>(optional)</em>
                  <input
                    value={form.phone}
                    onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                    placeholder="+1 242 …"
                    maxLength={40}
                  />
                </label>
                <label>
                  Channel
                  <select
                    value={form.channel}
                    onChange={(e) =>
                      setForm((f) => ({
                        ...f,
                        channel: e.target.value as FormState["channel"],
                      }))
                    }
                  >
                    <option value="SMS">SMS</option>
                    <option value="WhatsApp">WhatsApp</option>
                    <option value="Both">Both</option>
                  </select>
                </label>
              </div>
              <label>
                Approximate volume
                <span>Minimum 10,000</span>
                <input
                  required
                  inputMode="numeric"
                  value={form.volume}
                  onChange={(e) => setForm((f) => ({ ...f, volume: e.target.value }))}
                  placeholder="10000"
                />
              </label>
              <label>
                Message / notes <em>(optional)</em>
                <textarea
                  value={form.notes}
                  onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))}
                  placeholder="Timing, audience, campaign goal…"
                  rows={4}
                  maxLength={2000}
                />
              </label>

              <TurnstileWidget onToken={setTurnstileToken} resetSignal={turnstileReset} />

              {error ? (
                <p className="ke-sms-form-error" role="alert">
                  {error}
                </p>
              ) : null}

              <button
                className="ke-btn-primary"
                type="submit"
                disabled={submitting || !turnstileToken}
              >
                {submitting ? "Sending…" : "Request Quote →"}
              </button>
            </form>
          )}
        </div>
      </motion.section>

      <footer className="ke-footer" aria-label="Site footer">
        <div className="ke-footer-logo">
          <Link href="/">
            <FooterLogo />
          </Link>
        </div>
        <div className="ke-footer-note">
          A licensed subsidiary of Kemis Ltd., The Bahamas. © {new Date().getFullYear()} KemisEMAIL.
        </div>
        <div className="ke-footer-links">
          <Link href="/">Email</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </footer>
    </div>
  );
}
