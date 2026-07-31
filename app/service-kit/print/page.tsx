const brands = ["Burger King", "KFC", "Urban Nassau Rides", "Oasis", "Windermere", "Drewber"];

export default function ServiceKitPrintPage() {
  return (
    <div className="ke-print">
      <section className="ke-print-page ke-print-cover">
        <p className="ke-print-brand">
          Kemis<span>EMAIL</span>
        </p>
        <h1>
          Service Kit
          <br />
          <span>2026</span>
        </h1>
        <p className="ke-print-lede">
          Email to 30,000+ opted-in Bahamian inboxes. Enterprise SMS & WhatsApp with branded sender
          names from 10,000 numbers.
        </p>
        <div className="ke-print-meta">
          <div>
            <strong>Email</strong>
            <span>Hot List from $19.99 · Standard $65 · Monthly $249</span>
          </div>
          <div>
            <strong>SMS / WhatsApp</strong>
            <span>From ~$0.10/send · Min 10,000 · Bahamas only</span>
          </div>
        </div>
        <p className="ke-print-url">kemis.email</p>
      </section>

      <section className="ke-print-page">
        <p className="ke-print-label">Email · Hot List</p>
        <h2>
          Inbox
          <br />
          campaigns.
        </h2>
        <p className="ke-print-lede">
          Reach 30,000+ verified Bahamian inboxes — or target the Hot List of 5,000–8,000 most engaged
          buyers.
        </p>
        <ol className="ke-print-list">
          <li>
            <strong>5,000–8,000 engaged buyers</strong>
            <span>Top openers and clickers — people who never miss a deal.</span>
          </li>
          <li>
            <strong>Full campaign design included</strong>
            <span>You provide artwork and copy. We design, build, and deploy.</span>
          </li>
          <li>
            <strong>Built for flash offers</strong>
            <span>Weekend deals and urgency campaigns at a fraction of a full broadcast.</span>
          </li>
          <li>
            <strong>Higher intent, smarter spend</strong>
            <span>Book Hot List anytime for $19.99.</span>
          </li>
        </ol>
        <div className="ke-print-stats">
          <div>
            <div className="ke-print-stat-val">30K+</div>
            <div className="ke-print-stat-lbl">Opted-in subscribers</div>
          </div>
          <div>
            <div className="ke-print-stat-val">38%</div>
            <div className="ke-print-stat-lbl">Avg open rate</div>
          </div>
          <div>
            <div className="ke-print-stat-val">2×</div>
            <div className="ke-print-stat-lbl">Industry open benchmark</div>
          </div>
        </div>
        <div className="ke-print-brands">
          {brands.map((b) => (
            <span key={b}>{b}</span>
          ))}
        </div>
      </section>

      <section className="ke-print-page">
        <p className="ke-print-label">SMS & WhatsApp</p>
        <h2>
          Their phone.
          <br />
          Your brand.
        </h2>
        <p className="ke-print-lede">
          Recipients see <strong>YOUR COMPANY</strong> — not a random number. Enterprise Bahamas
          messaging from 10,000 to 1M+ numbers.
        </p>
        <ol className="ke-print-list">
          <li>
            <strong>Branded sender name</strong>
            <span>Instant recognition. Higher trust than unknown numbers.</span>
          </li>
          <li>
            <strong>SMS + WhatsApp</strong>
            <span>One campaign brief. We run the paced send.</span>
          </li>
          <li>
            <strong>Enterprise volume</strong>
            <span>Serviced 10,000–1M+ — not DIY self-serve blasts.</span>
          </li>
          <li>
            <strong>From ~$0.10 / send</strong>
            <span>Bahamas-only pricing. Custom quotes for larger runs.</span>
          </li>
        </ol>
        <div className="ke-print-stats">
          <div>
            <div className="ke-print-stat-val">20,256</div>
            <div className="ke-print-stat-lbl">NHI SMS delivered</div>
          </div>
          <div>
            <div className="ke-print-stat-val">100%</div>
            <div className="ke-print-stat-lbl">Delivery rate</div>
          </div>
          <div>
            <div className="ke-print-stat-val">0</div>
            <div className="ke-print-stat-lbl">Failed / blocked</div>
          </div>
        </div>
        <p className="ke-print-note">
          Live proof: National Health Insurance enterprise SMS campaign across The Bahamas.
        </p>
      </section>

      <section className="ke-print-page ke-print-contact">
        <p className="ke-print-label">Next step</p>
        <h2>
          Let&apos;s
          <br />
          talk.
        </h2>
        <p className="ke-print-lede">
          Download this kit, then book email or request an SMS quote. We handle the send. You get the
          report.
        </p>
        <ul className="ke-print-contact-list">
          <li>
            <strong>Web</strong>
            <span>kemis.email · kemis.email/sms · kemis.email/service-kit</span>
          </li>
          <li>
            <strong>Front desk</strong>
            <span>frontdesk@kemsidigital.com</span>
          </li>
          <li>
            <strong>WhatsApp</strong>
            <span>+1 242 447 9692</span>
          </li>
        </ul>
        <p className="ke-print-footer">
          A licensed subsidiary of Kemis Ltd., The Bahamas. © {new Date().getFullYear()} KemisEMAIL.
        </p>
      </section>
    </div>
  );
}
