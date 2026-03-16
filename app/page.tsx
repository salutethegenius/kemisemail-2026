"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

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

function scrollToId(id: string) {
  if (typeof document === "undefined") return;
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
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
      subtitle: `${locLabels[location]} ${indLabels[industry]} subscribers · verified & active`,
    };
  }, [location, industry]);

  return (
    <div className="ke-wrap">
      <nav className="ke-nav">
        <div className="ke-logo" aria-label="KemisEMAIL">
          <svg width="200" height="44" viewBox="0 0 200 44" xmlns="http://www.w3.org/2000/svg">
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
        </div>
        <button className="ke-nav-cta" onClick={() => scrollToId("ke-pricing-section")}>
          Buy Now →
        </button>
      </nav>

      <motion.section
        className="ke-hero"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <svg className="ke-hero-geo" viewBox="0 0 1400 600" preserveAspectRatio="none" aria-hidden="true">
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
            Bahamas #1 Email Platform
          </div>
          <h1 className="ke-h1">
            <span className="o">30,000</span>
            <br />
            Bahamians.
            <br />
            <span className="b">One</span> Send.
            <br />
            <span className="p">Results</span> Friday.
          </h1>
          <p className="ke-hero-sub">
            The largest verified email audience in The Bahamas. Real businesses. Real opens. No invoicing. Buy, send, done.
          </p>
          <motion.div
            className="ke-hero-btns"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
          >
            <button className="ke-btn-primary" onClick={() => scrollToId("ke-pricing-section")}>
              Get Started — From $65
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
          <div className="ke-hero-badge-num">70K+</div>
          <div className="ke-hero-badge-label">
            Verified
            <br />
            Subscribers
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
            53% Avg Open Rate
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
          {/* repeat for seamless loop */}
          <div className="ke-ticker-item">
            <span className="ke-ticker-dot" />
            53% Avg Open Rate
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
        <svg className="ke-estimator-geo" viewBox="0 0 1400 600" preserveAspectRatio="none" aria-hidden="true">
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
                <div className="ke-metric-lbl">Avg Open Rate</div>
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
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="ke-section-label">Pricing — No Invoice. No Wait. Just Send.</div>
        <h2 className="ke-section-title">
          Pick Your
          <br />
          Package.
        </h2>
        <div className="ke-pricing-grid">
          <motion.div
            className="ke-price-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="ke-price-name">Single Eblast</div>
            <div className="ke-price-amount">$65</div>
            <div className="ke-price-period">per blast</div>
            <div className="ke-price-desc">You provide the artwork. We send it to thousands.</div>
            <hr className="ke-price-divider" />
            <ul className="ke-price-features">
              <li className="ke-price-feature">You supply artwork &amp; copy</li>
              <li className="ke-price-feature">Wide reach to subscriber base</li>
              <li className="ke-price-feature">Basic delivery metrics</li>
              <li className="ke-price-feature">Perfect for flash sales, announcements</li>
            </ul>
            <a
              className="ke-price-buy"
              href="https://buy.stripe.com/fZufZgfzMgpla6vbFJdZ60w"
              target="_blank"
              rel="noreferrer"
            >
              Buy Now — $65 →
            </a>
            <div className="ke-price-tag">Instant checkout via Stripe</div>
          </motion.div>
          <motion.div
            className="ke-price-card featured"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
          >
            <div className="ke-price-badge">Best Value</div>
            <div className="ke-price-name">Full Newsletter</div>
            <div className="ke-price-amount">$147</div>
            <div className="ke-price-period">per campaign</div>
            <div className="ke-price-desc">Custom design, branded send, full tracking.</div>
            <hr className="ke-price-divider" />
            <ul className="ke-price-features">
              <li className="ke-price-feature">Custom branded newsletter design</li>
              <li className="ke-price-feature">Lead collection &amp; tracking</li>
              <li className="ke-price-feature">Performance analytics report</li>
              <li className="ke-price-feature">Best for shops, events, schools</li>
            </ul>
            <a
              className="ke-price-buy"
              href="https://buy.stripe.com/aFa28qcnAdd93I739ddZ60x"
              target="_blank"
              rel="noreferrer"
            >
              Buy Now — $147 →
            </a>
            <div className="ke-price-tag">Instant checkout via Stripe</div>
          </motion.div>
          <motion.div
            className="ke-price-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          >
            <div className="ke-price-name">Most Popular</div>
            <div className="ke-price-amount">$249</div>
            <div className="ke-price-period">4 campaigns / month</div>
            <div className="ke-price-desc">Monthly package for consistent growth.</div>
            <hr className="ke-price-divider" />
            <ul className="ke-price-features">
              <li className="ke-price-feature">Everything in Single Eblast</li>
              <li className="ke-price-feature">Priority scheduling</li>
              <li className="ke-price-feature">Dedicated account manager</li>
              <li className="ke-price-feature">Monthly strategy session</li>
            </ul>
            <a
              className="ke-price-buy"
              href="https://buy.stripe.com/aFa7sKafsa0X0vVfVZdZ60y"
              target="_blank"
              rel="noreferrer"
            >
              Buy Now — $249 →
            </a>
            <div className="ke-price-tag">Instant checkout via Stripe</div>
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
                    53%
                  </div>
                  <div className="ke-proof-stat-lbl">Open Rate</div>
                </div>
                <div>
                  <div className="ke-proof-stat-val" style={{ color: "#0047FF" }}>
                    3.85%
                  </div>
                  <div className="ke-proof-stat-lbl">Click Rate</div>
                </div>
              </div>
              <div>
                <div className="ke-proof-stat-val" style={{ color: "#F5F4F0" }}>
                  25K
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
                    48%
                  </div>
                  <div className="ke-proof-stat-lbl">Open Rate</div>
                </div>
                <div>
                  <div className="ke-proof-stat-val" style={{ color: "#0047FF" }}>
                    4.24%
                  </div>
                  <div className="ke-proof-stat-lbl">Click Rate</div>
                </div>
              </div>
              <div>
                <div className="ke-proof-stat-val" style={{ color: "#F5F4F0" }}>
                  25K
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
                    51%
                  </div>
                  <div className="ke-proof-stat-lbl">Open Rate</div>
                </div>
                <div>
                  <div className="ke-proof-stat-val" style={{ color: "#0047FF" }}>
                    2.76%
                  </div>
                  <div className="ke-proof-stat-lbl">Click Rate</div>
                </div>
              </div>
              <div>
                <div className="ke-proof-stat-val" style={{ color: "#F5F4F0" }}>
                  20K
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
                    55%
                  </div>
                  <div className="ke-proof-stat-lbl">Open Rate</div>
                </div>
                <div>
                  <div className="ke-proof-stat-val" style={{ color: "#6200FF" }}>
                    1.29%
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
              Choose your package. Pay via Stripe in under 60 seconds. No invoice. No waiting for approval. Done.
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
              Submit your artwork and message, or let our team build your campaign. We handle everything.
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
              Your campaign hits 30,000+ inboxes. You get a live analytics report showing opens, clicks, and reach.
            </p>
          </motion.div>
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
        <svg className="ke-cta-geo" viewBox="0 0 1400 400" preserveAspectRatio="none" aria-hidden="true">
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
          <span>The Bahamas?</span>
        </h2>
        <p>Join hundreds of local and international businesses already growing with KemisEMAIL.</p>
        <motion.div
          className="ke-cta-btns"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }}
        >
          <button className="ke-btn-white" onClick={() => scrollToId("ke-pricing-section")}>
            Start From $65 →
          </button>
          <button className="ke-btn-outline-white" onClick={() => scrollToId("ke-pricing-section")}>
            View All Packages
          </button>
        </motion.div>
      </motion.section>

      <footer className="ke-footer">
        <div className="ke-footer-logo">
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
            <rect x="24" y="4" width="3" height="3" fill="#6200FF" />
            <rect x="29" y="4" width="3" height="3" fill="#FF4500" opacity="0.5" />
            <text
              x="38"
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
              x="130"
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
        </div>
        <div className="ke-footer-note">
          A licensed subsidiary of Kemis Ltd., The Bahamas. © {new Date().getFullYear()} KemisEMAIL.
        </div>
        <div className="ke-footer-links">
          <a href="#">Privacy</a>
          <a href="#">Contact</a>
          <a href="#">KemisDigital</a>
        </div>
      </footer>
    </div>
  );
}

