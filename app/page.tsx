"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

type LocationKey = "nassau" | "freeport" | "family" | "all";
type IndustryKey = "retail" | "food" | "health" | "events" | "professional";

const reachData: Record<LocationKey, Record<IndustryKey, number>> = {
  nassau: { retail: 18400, food: 22000, health: 14000, events: 26000, professional: 12000 },
  freeport: { retail: 6200, food: 7800, health: 5000, events: 9000, professional: 4200 },
  family: { retail: 3800, food: 4200, health: 2800, events: 5500, professional: 2200 },
  all: { retail: 28400, food: 34000, health: 21800, events: 40500, professional: 18400 },
};

const openRates: Record<IndustryKey, string> = {
  retail: "27%",
  food: "33%",
  health: "31%",
  events: "35%",
  professional: "24%",
};

const clickRates: Record<IndustryKey, string> = {
  retail: "1.2%",
  food: "1.8%",
  health: "1.6%",
  events: "2.0%",
  professional: "1.0%",
};

const locLabels: Record<LocationKey, string> = {
  nassau: "Nassau",
  freeport: "Freeport",
  family: "Family Islands",
  all: "All Bahamas",
};

const indLabels: Record<IndustryKey, string> = {
  retail: "retail",
  food: "food & dining",
  health: "health & beauty",
  events: "events",
  professional: "professional services",
};

const CONTACT_EMAIL = "billing@kemis.net";
const WHATSAPP_E164 = "12424479692";

const EMAIL_CAMPAIGN = {
  name: "Email Campaign",
  listPrice: "$65",
  cardPrice: "$69",
  cardUrl: "https://payments.thekemisgroup.com/b/fZu6oA8A58Rp4SQ5JBefC05",
} as const;

const HOT_LIST = {
  name: "Hot List Campaign",
  listPrice: "$19.99",
  cardPrice: "$21.99",
  cardUrl: "https://payments.thekemisgroup.com/b/8x2eV6g2x6Jh2KI6NFefC04",
} as const;

const MONTHLY_PLAN = {
  name: "Monthly Campaign Plan",
  listPrice: "$249",
  cardPrice: "$265",
  cardUrl: "https://payments.thekemisgroup.com/b/9B67sEeYt8Rp8527RJefC06",
} as const;

function bankTransferWhatsAppUrl(packageName: string, listPrice: string) {
  const text = `Hi — I'd like to pay by bank transfer for ${packageName} (${listPrice}). Please send banking details.`;
  return `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(text)}`;
}

function bankTransferMailtoUrl(packageName: string, listPrice: string) {
  const subject = `Bank transfer — ${packageName}`;
  const body = `Hi — I'd like to pay by bank transfer for ${packageName} (${listPrice}). Please send banking details.`;
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function scrollToId(id: string) {
  if (typeof document === "undefined") return;
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

function BuyActions({
  name,
  listPrice,
  cardPrice,
  cardUrl,
  cardCta,
}: {
  name: string;
  listPrice: string;
  cardPrice: string;
  cardUrl: string;
  cardCta?: string;
}) {
  return (
    <div className="ke-price-actions">
      <a className="ke-price-buy" href={cardUrl} target="_blank" rel="noreferrer">
        {cardCta ?? `Pay by card — ${cardPrice} →`}
      </a>
      <a
        className="ke-price-bank"
        href={bankTransferWhatsAppUrl(name, listPrice)}
        target="_blank"
        rel="noreferrer"
      >
        Bank transfer — {listPrice} · WhatsApp
      </a>
      <a className="ke-price-bank ke-price-bank-secondary" href={bankTransferMailtoUrl(name, listPrice)}>
        Or email for banking details
      </a>
    </div>
  );
}

export default function HomePage() {
  const [location, setLocation] = useState<LocationKey>("nassau");
  const [industry, setIndustry] = useState<IndustryKey>("retail");

  const metrics = useMemo(() => {
    const reach = reachData[location][industry];
    const openRate = parseFloat(openRates[industry]) / 100;
    const estOpens = Math.round(reach * openRate);
    return {
      reach,
      openRateString: openRates[industry],
      clickRateString: clickRates[industry],
      estOpens,
      subtitle: `${locLabels[location]} ${indLabels[industry]} · sendable audience`,
    };
  }, [location, industry]);

  return (
    <div className="ke-wrap">
      <SiteNav ctaLabel="Buy Now →" onCtaClick={() => scrollToId("ke-pricing-section")} />

      <motion.section
        className="ke-hero"
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
          <rect x="50" y="400" width="8" height="8" fill="#FF4500" opacity="0.4" />
          <rect x="100" y="420" width="8" height="8" fill="#0047FF" opacity="0.3" />
          <rect x="150" y="440" width="8" height="8" fill="#6200FF" opacity="0.3" />
          <polygon points="1100,480 1140,560 1060,560" fill="#FF4500" opacity="0.06" />
          <polygon points="850,100 890,60 890,140" fill="#0047FF" opacity="0.08" />
        </svg>

        <motion.div
          className="ke-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
        >
          <div className="ke-eyebrow">
            <span />
            Audience and promotion · The Bahamas
          </div>
          <h1 className="ke-h1">
            Put Your Business
            <br />
            in Front of
            <br />
            <span className="o">Bahamian</span>
            <br />
            <span className="b">Customers.</span>
          </h1>
          <p className="ke-hero-sub">
            Reach thousands of consumers across Nassau, Freeport and the Family Islands through
            targeted email and SMS campaigns. No ad algorithms. No waiting. Pick your audience, launch
            your campaign and measure the response.
          </p>
          <motion.div
            className="ke-hero-btns"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
          >
            <button className="ke-btn-primary" onClick={() => scrollToId("ke-pricing-section")}>
              Get Started — From $19.99
            </button>
            <button className="ke-btn-secondary" onClick={() => scrollToId("ke-estimator-section")}>
              See Your Reach →
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="ke-hero-badge"
          initial={{ opacity: 0, scale: 0.9, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5, ease: "easeOut" }}
        >
          <div className="ke-hero-badge-num">30K+</div>
          <div className="ke-hero-badge-label">
            Sendable
            <br />
            Audience
          </div>
        </motion.div>
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
            25%+ Newsletter Open Rate
          </div>
          <div className="ke-ticker-item">
            <span className="ke-ticker-dot b" />
            Nassau · Freeport · Family Islands
          </div>
          <div className="ke-ticker-item">
            <span className="ke-ticker-dot p" />
            20+ Years Trusted Service
          </div>
          <div className="ke-ticker-item">
            <span className="ke-ticker-dot" />
            KFC · Stacker King · Anthony&apos;s · DIB
          </div>
          <div className="ke-ticker-item">
            <span className="ke-ticker-dot b" />
            Results in 48 Hours
          </div>
          <div className="ke-ticker-item">
            <span className="ke-ticker-dot p" />
            Zero Invoice Friction
          </div>
          <div className="ke-ticker-item">
            <span className="ke-ticker-dot" />
            25%+ Newsletter Open Rate
          </div>
          <div className="ke-ticker-item">
            <span className="ke-ticker-dot b" />
            Nassau · Freeport · Family Islands
          </div>
          <div className="ke-ticker-item">
            <span className="ke-ticker-dot p" />
            20+ Years Trusted Service
          </div>
          <div className="ke-ticker-item">
            <span className="ke-ticker-dot" />
            KFC · Stacker King · Anthony&apos;s · DIB
          </div>
          <div className="ke-ticker-item">
            <span className="ke-ticker-dot b" />
            Results in 48 Hours
          </div>
          <div className="ke-ticker-item">
            <span className="ke-ticker-dot p" />
            Zero Invoice Friction
          </div>
        </div>
      </motion.div>

      <motion.section
        className="ke-estimator"
        id="ke-estimator-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <svg
          className="ke-estimator-geo"
          viewBox="0 0 1400 600"
          preserveAspectRatio="none"
          aria-hidden="true"
          focusable="false"
        >
          <line x1="0" y1="0" x2="1400" y2="600" stroke="#FF4500" strokeWidth="2" />
          <line x1="200" y1="0" x2="1400" y2="500" stroke="#0047FF" strokeWidth="1" />
          <line x1="0" y1="200" x2="800" y2="600" stroke="#6200FF" strokeWidth="1" />
          <circle cx="700" cy="300" r="200" fill="none" stroke="#FF4500" strokeWidth="2" />
          <circle cx="700" cy="300" r="300" fill="none" stroke="#0047FF" strokeWidth="1" />
        </svg>
        <div className="ke-est-inner">
          <div className="ke-est-left">
            <div className="ke-section-label">Reach Estimator</div>
            <h2 className="ke-section-title">
              See Your
              <br />
              Audience
              <br />
              Before You Buy
            </h2>
            <p>Pick your targets. See real numbers from real campaigns — not guesses.</p>
            <br />
            <div className="ke-control-group">
              <span className="ke-control-label">Location</span>
              <div className="ke-chips">
                <button
                  className={`ke-chip ${location === "nassau" ? "active" : ""}`}
                  onClick={() => setLocation("nassau")}
                >
                  Nassau
                </button>
                <button
                  className={`ke-chip b ${location === "freeport" ? "active" : ""}`}
                  onClick={() => setLocation("freeport")}
                >
                  Freeport
                </button>
                <button
                  className={`ke-chip p ${location === "family" ? "active" : ""}`}
                  onClick={() => setLocation("family")}
                >
                  Family Islands
                </button>
                <button
                  className={`ke-chip ${location === "all" ? "active" : ""}`}
                  onClick={() => setLocation("all")}
                >
                  All Bahamas
                </button>
              </div>
            </div>
            <div className="ke-control-group">
              <span className="ke-control-label">Industry</span>
              <div className="ke-chips">
                <button
                  className={`ke-chip ${industry === "retail" ? "active" : ""}`}
                  onClick={() => setIndustry("retail")}
                >
                  Retail
                </button>
                <button
                  className={`ke-chip ${industry === "food" ? "active" : ""}`}
                  onClick={() => setIndustry("food")}
                >
                  Food &amp; Dining
                </button>
                <button
                  className={`ke-chip p ${industry === "health" ? "active" : ""}`}
                  onClick={() => setIndustry("health")}
                >
                  Health &amp; Beauty
                </button>
                <button
                  className={`ke-chip b ${industry === "events" ? "active" : ""}`}
                  onClick={() => setIndustry("events")}
                >
                  Events
                </button>
                <button
                  className={`ke-chip ${industry === "professional" ? "active" : ""}`}
                  onClick={() => setIndustry("professional")}
                >
                  Professional
                </button>
              </div>
            </div>
          </div>
          <div className="ke-est-right">
            <motion.div
              className="ke-reach-display"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
            >
              <div className="ke-reach-label">Estimated Reach</div>
              <div className="ke-reach-num">{metrics.reach.toLocaleString()}</div>
              <div className="ke-reach-sub">{metrics.subtitle}</div>
            </motion.div>
            <motion.div
              className="ke-metrics-grid"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="ke-metric-card">
                <div className="ke-metric-val o">{metrics.openRateString}</div>
                <div className="ke-metric-lbl">Paid Open Rate</div>
              </div>
              <div className="ke-metric-card">
                <div className="ke-metric-val b">{metrics.clickRateString}</div>
                <div className="ke-metric-lbl">Avg Click Rate</div>
              </div>
              <div className="ke-metric-card">
                <div className="ke-metric-val p">{metrics.estOpens.toLocaleString()}</div>
                <div className="ke-metric-lbl">Est. Opens</div>
              </div>
              <div className="ke-metric-card">
                <div className="ke-metric-val">48hrs</div>
                <div className="ke-metric-lbl">Delivery Time</div>
              </div>
            </motion.div>
            <p className="ke-est-note">
              Paid campaigns typically open in the 24–35% range by industry. Kemis.email newsletters
              typically open at 25%+.
            </p>
            <button className="ke-est-cta" onClick={() => scrollToId("ke-pricing-section")}>
              Buy This Send →
            </button>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="ke-pricing"
        id="ke-pricing-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: "some" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="ke-section-label">Pricing — No Invoice. No Wait. Just Send.</div>
        <h2 className="ke-section-title">
          Pick Your
          <br />
          Campaign.
        </h2>
        <div className="ke-pricing-grid">
          <motion.div
            className="ke-price-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: "some" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="ke-price-name">{EMAIL_CAMPAIGN.name}</div>
            <div className="ke-price-amount">{EMAIL_CAMPAIGN.listPrice}</div>
            <div className="ke-price-period">per campaign · 30K+ sendable audience</div>
            <div className="ke-price-desc">
              Broad reach to Bahamian consumers nationwide — or target by island and industry. You
              supply artwork. We send.
            </div>
            <hr className="ke-price-divider" />
            <ul className="ke-price-features">
              <li className="ke-price-feature">You supply artwork &amp; copy</li>
              <li className="ke-price-feature">Geo and industry targeting</li>
              <li className="ke-price-feature">Delivery metrics after send</li>
              <li className="ke-price-feature">Flash sales, announcements, promotions</li>
            </ul>
            <div className="ke-price-hotlist">
              <div className="ke-price-hotlist-kicker">Or start smaller</div>
              <div className="ke-price-hotlist-row">
                <span className="ke-price-hotlist-name">Hot List</span>
                <span className="ke-price-hotlist-price">{HOT_LIST.listPrice}</span>
              </div>
              <p>5,000–8,000 most engaged openers and clickers. Campaign design included.</p>
              <BuyActions
                name={HOT_LIST.name}
                listPrice={HOT_LIST.listPrice}
                cardPrice={HOT_LIST.cardPrice}
                cardUrl={HOT_LIST.cardUrl}
                cardCta={`Pay by card — ${HOT_LIST.cardPrice} Hot List →`}
              />
            </div>
            <BuyActions
              name={EMAIL_CAMPAIGN.name}
              listPrice={EMAIL_CAMPAIGN.listPrice}
              cardPrice={EMAIL_CAMPAIGN.cardPrice}
              cardUrl={EMAIL_CAMPAIGN.cardUrl}
            />
            <div className="ke-price-tag">
              Instant card checkout via Stripe. Card price includes online processing. Bank transfer is
              the list price.
            </div>
          </motion.div>

          <motion.div
            className="ke-price-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: "some" }}
            transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
          >
            <div className="ke-price-name">Email + SMS Campaign</div>
            <div className="ke-price-amount ke-price-amount-text">Quote</div>
            <div className="ke-price-period">custom · higher-impact push</div>
            <div className="ke-price-desc">
              Inbox plus a branded tap on the phone. Email reaches 30K+ consumers; SMS is the
              higher-impact add-on.
            </div>
            <hr className="ke-price-divider" />
            <ul className="ke-price-features">
              <li className="ke-price-feature">Email campaign to the sendable audience</li>
              <li className="ke-price-feature">Branded SMS / WhatsApp — recipients see YOUR COMPANY</li>
              <li className="ke-price-feature">From ~$0.10/send · minimum 10,000 numbers</li>
              <li className="ke-price-feature">One brief. We run the send and report back.</li>
            </ul>
            <div className="ke-price-actions">
              <Link className="ke-price-buy" href="/sms">
                Request a quote →
              </Link>
            </div>
            <div className="ke-price-tag">Quote-only. Pair SMS with an email campaign or run it on its own.</div>
          </motion.div>

          <motion.div
            className="ke-price-card featured"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: "some" }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          >
            <div className="ke-price-badge">Best for growth</div>
            <div className="ke-price-name">{MONTHLY_PLAN.name}</div>
            <div className="ke-price-amount">{MONTHLY_PLAN.listPrice}</div>
            <div className="ke-price-period">4 campaigns / month</div>
            <div className="ke-price-desc">
              Recurring customer acquisition — stay in front of the same Bahamian audience every week.
            </div>
            <hr className="ke-price-divider" />
            <ul className="ke-price-features">
              <li className="ke-price-feature">Four email campaigns per month</li>
              <li className="ke-price-feature">Priority scheduling</li>
              <li className="ke-price-feature">Dedicated account manager</li>
              <li className="ke-price-feature">Monthly strategy session</li>
            </ul>
            <BuyActions
              name={MONTHLY_PLAN.name}
              listPrice={MONTHLY_PLAN.listPrice}
              cardPrice={MONTHLY_PLAN.cardPrice}
              cardUrl={MONTHLY_PLAN.cardUrl}
            />
            <div className="ke-price-tag">
              Instant card checkout via Stripe. Card price includes online processing. Bank transfer is
              the list price.
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="ke-proof"
        id="ke-proof-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="ke-section-label">Recent Campaigns</div>
        <h2 className="ke-section-title" style={{ color: "#F5F4F0" }}>
          Real Numbers.
          <br />
          Real Clients.
        </h2>
        <div className="ke-proof-grid">
          <motion.div
            className="ke-proof-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="ke-proof-brand">Anthony&apos;s</div>
            <div className="ke-proof-cat">Food &amp; Catering</div>
            <div className="ke-proof-stats">
              <div className="ke-proof-stat-row">
                <div>
                  <div className="ke-proof-stat-val" style={{ color: "#FF4500" }}>
                    29%
                  </div>
                  <div className="ke-proof-stat-lbl">Open Rate</div>
                </div>
                <div>
                  <div className="ke-proof-stat-val" style={{ color: "#0047FF" }}>
                    1.9%
                  </div>
                  <div className="ke-proof-stat-lbl">Click Rate</div>
                </div>
              </div>
              <div>
                <div className="ke-proof-stat-val" style={{ color: "#F5F4F0" }}>
                  18K
                </div>
                <div className="ke-proof-stat-lbl">Recipients</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="ke-proof-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.05, duration: 0.4, ease: "easeOut" }}
          >
            <div className="ke-proof-brand">DIB Events</div>
            <div className="ke-proof-cat">Entertainment</div>
            <div className="ke-proof-stats">
              <div className="ke-proof-stat-row">
                <div>
                  <div className="ke-proof-stat-val" style={{ color: "#FF4500" }}>
                    31%
                  </div>
                  <div className="ke-proof-stat-lbl">Open Rate</div>
                </div>
                <div>
                  <div className="ke-proof-stat-val" style={{ color: "#0047FF" }}>
                    2.1%
                  </div>
                  <div className="ke-proof-stat-lbl">Click Rate</div>
                </div>
              </div>
              <div>
                <div className="ke-proof-stat-val" style={{ color: "#F5F4F0" }}>
                  22K
                </div>
                <div className="ke-proof-stat-lbl">Recipients</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="ke-proof-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }}
          >
            <div className="ke-proof-brand">Stacker King</div>
            <div className="ke-proof-cat">Restaurant</div>
            <div className="ke-proof-stats">
              <div className="ke-proof-stat-row">
                <div>
                  <div className="ke-proof-stat-val" style={{ color: "#FF4500" }}>
                    28%
                  </div>
                  <div className="ke-proof-stat-lbl">Open Rate</div>
                </div>
                <div>
                  <div className="ke-proof-stat-val" style={{ color: "#0047FF" }}>
                    1.4%
                  </div>
                  <div className="ke-proof-stat-lbl">Click Rate</div>
                </div>
              </div>
              <div>
                <div className="ke-proof-stat-val" style={{ color: "#F5F4F0" }}>
                  16K
                </div>
                <div className="ke-proof-stat-lbl">Recipients</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="ke-proof-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.15, duration: 0.4, ease: "easeOut" }}
          >
            <div className="ke-proof-brand">Beauty Career</div>
            <div className="ke-proof-cat">Professional / Health</div>
            <div className="ke-proof-stats">
              <div className="ke-proof-stat-row">
                <div>
                  <div className="ke-proof-stat-val" style={{ color: "#FF4500" }}>
                    32%
                  </div>
                  <div className="ke-proof-stat-lbl">Open Rate</div>
                </div>
                <div>
                  <div className="ke-proof-stat-val" style={{ color: "#6200FF" }}>
                    1.3%
                  </div>
                  <div className="ke-proof-stat-lbl">Click Rate</div>
                </div>
              </div>
              <div>
                <div className="ke-proof-stat-val" style={{ color: "#F5F4F0" }}>
                  14K
                </div>
                <div className="ke-proof-stat-lbl">Recipients</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="ke-process"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="ke-section-label">How It Works</div>
        <h2 className="ke-section-title">
          Live in
          <br />
          3 Steps.
        </h2>
        <div className="ke-process-steps">
          <motion.div
            className="ke-step"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="ke-step-num" style={{ color: "#FF4500" }}>
              01
            </div>
            <div className="ke-step-title">Buy Instantly</div>
            <p className="ke-step-desc">
              Choose your package. Pay via Stripe in under 60 seconds. No invoice. No waiting for
              approval. Done.
            </p>
          </motion.div>
          <motion.div
            className="ke-step"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.05, duration: 0.4, ease: "easeOut" }}
          >
            <div className="ke-step-num" style={{ color: "#0047FF" }}>
              02
            </div>
            <div className="ke-step-title">Brief Your Send</div>
            <p className="ke-step-desc">
              Submit your artwork and message, or let our team build your campaign. We handle
              everything.
            </p>
          </motion.div>
          <motion.div
            className="ke-step"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }}
          >
            <div className="ke-step-num" style={{ color: "#6200FF" }}>
              03
            </div>
            <div className="ke-step-title">Results in 48hrs</div>
            <p className="ke-step-desc">
              A full campaign hits the 30K+ nationwide sendable audience. You get a live analytics
              report showing opens, clicks, and reach.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="ke-sms-promo"
        id="ke-sms-promo-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="ke-sms-promo-inner">
          <div>
            <div className="ke-section-label">SMS & WhatsApp</div>
            <h2 className="ke-section-title">
              Higher-impact
              <br />
              on their phone.
            </h2>
            <p className="ke-sms-promo-copy">
              Pair your email campaign with branded SMS. Inbox plus a tap on the shoulder — from
              ~$0.10/send, minimum 10,000. Proven on 20,256 NHI deliveries at 100%.
            </p>
          </div>
          <a className="ke-btn-primary" href="/sms">
            Explore SMS →
          </a>
        </div>
      </motion.section>

      <motion.section
        className="ke-kit-promo"
        id="ke-service-kit-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="ke-kit-promo-inner">
          <div>
            <div className="ke-section-label">Service Kit 2026</div>
            <h2 className="ke-section-title">
              Email + SMS
              <br />
              leave-behind.
            </h2>
            <p className="ke-kit-promo-copy">
              Reach 30K+ Bahamian consumers by email, with SMS for higher-impact campaigns — download
              the Service Kit PDF for your team.
            </p>
          </div>
          <a className="ke-btn-primary" href="/service-kit">
            View Service Kit →
          </a>
        </div>
      </motion.section>

      <motion.section
        className="ke-cta"
        id="ke-cta-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
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
          <line x1="0" y1="300" x2="800" y2="400" stroke="#fff" strokeWidth="1" />
          <circle cx="200" cy="200" r="150" fill="none" stroke="#FF4500" strokeWidth="2" />
          <circle cx="1200" cy="100" r="100" fill="none" stroke="#fff" strokeWidth="1.5" />
          <rect x="600" y="50" width="50" height="50" fill="none" stroke="#FF4500" strokeWidth="1.5" />
        </svg>
        <h2>
          Ready to Reach
          <br />
          <span>Bahamian Customers?</span>
        </h2>
        <p>
          Reach 30K+ consumers through targeted email. SMS is available when you need a higher-impact
          push.
        </p>
        <motion.div
          className="ke-cta-btns"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }}
        >
          <button className="ke-btn-white" onClick={() => scrollToId("ke-pricing-section")}>
            Start From $19.99 →
          </button>
          <button className="ke-btn-outline-white" onClick={() => scrollToId("ke-pricing-section")}>
            View All Packages
          </button>
        </motion.div>
      </motion.section>

      <SiteFooter
        links={
          <>
            <a href="/sms">SMS</a>
            <a href="/contact">Contact</a>
            <a href="/service-kit">Service Kit</a>
          </>
        }
      />
    </div>
  );
}
