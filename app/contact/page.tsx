"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import TurnstileWidget from "@/components/TurnstileWidget";

type FormState = {
  name: string;
  email: string;
  phone: string;
  topic: "Email advertising" | "Email + SMS" | "SMS / WhatsApp" | "General";
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  topic: "General",
  message: "",
};

function scrollToId(id: string) {
  if (typeof document === "undefined") return;
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function ContactPage() {
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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, turnstileToken }),
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
      <SiteNav ctaLabel="Send Message →" onCtaClick={() => scrollToId("ke-contact-form")} />

      <motion.section
        className="ke-sms-quote ke-contact-page"
        id="ke-contact-form"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="ke-sms-quote-inner">
          <div>
            <div className="ke-section-label">Contact</div>
            <h1 className="ke-section-title">
              Talk to
              <br />
              the front desk.
            </h1>
            <p className="ke-sms-quote-lede">
              Reach 30K+ Bahamian consumers through targeted email, or add SMS for a higher-impact
              campaign. Send a note — we’ll get back to you.
            </p>
          </div>

          {success ? (
            <div className="ke-sms-success" role="status">
              <h3>Message sent</h3>
              <p>Thanks — the front desk will follow up shortly.</p>
              <button type="button" className="ke-btn-secondary" onClick={() => setSuccess(false)}>
                Send another →
              </button>
            </div>
          ) : (
            <form className="ke-sms-form" onSubmit={onSubmit} noValidate>
              <label>
                Name
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  placeholder="Your name"
                  maxLength={80}
                />
              </label>
              <div className="ke-sms-form-row">
                <label>
                  Email
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    placeholder="you@company.com"
                    maxLength={120}
                  />
                </label>
                <label>
                  Phone <em>(optional)</em>
                  <input
                    value={form.phone}
                    onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                    placeholder="+1 242 …"
                    maxLength={40}
                  />
                </label>
              </div>
              <label>
                Topic
                <select
                  value={form.topic}
                  onChange={(e) =>
                    setForm((f) => ({
                      ...f,
                      topic: e.target.value as FormState["topic"],
                    }))
                  }
                >
                  <option value="General">General</option>
                  <option value="Email advertising">Email advertising</option>
                  <option value="Email + SMS">Email + SMS</option>
                  <option value="SMS / WhatsApp">SMS / WhatsApp</option>
                </select>
              </label>
              <label>
                Message
                <textarea
                  required
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  placeholder="How can we help?"
                  rows={5}
                  maxLength={3000}
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
                {submitting ? "Sending…" : "Send Message →"}
              </button>
            </form>
          )}
        </div>
      </motion.section>

      <SiteFooter
        links={
          <>
            <Link href="/">Email</Link>
            <Link href="/sms">SMS</Link>
          </>
        }
      />
    </div>
  );
}
