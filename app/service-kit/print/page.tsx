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
          Reach 30K+ Bahamian consumers through targeted email campaigns. SMS available for
          higher-impact campaigns.
        </p>
        <div className="ke-print-meta">
          <div>
            <strong>Email Campaign</strong>
            <span>$65 broad reach · Hot List $19.99 · Monthly Plan $249</span>
          </div>
          <div>
            <strong>Email + SMS</strong>
            <span>Custom quote · From ~$0.10/send · Min 10,000</span>
          </div>
        </div>
        <p className="ke-print-url">kemis.email</p>
      </section>

      <section className="ke-print-page">
        <p className="ke-print-label">Email Campaign</p>
        <h2>
          Broad reach.
          <br />
          Three ways in.
        </h2>
        <p className="ke-print-lede">
          A standard full campaign hits the 30K+ nationwide sendable audience — or target by island
          and industry. Hot List is the $19.99 option for 5,000–8,000 most engaged buyers.
        </p>
        <ol className="ke-print-list">
          <li>
            <strong>30K+ nationwide reach</strong>
            <span>Typical sendable audience for a standard full email campaign.</span>
          </li>
          <li>
            <strong>Hot List from $19.99</strong>
            <span>5,000–8,000 most engaged openers and clickers. Campaign design included.</span>
          </li>
          <li>
            <strong>Monthly Campaign Plan $249</strong>
            <span>Four campaigns a month. Recurring customer acquisition.</span>
          </li>
          <li>
            <strong>Buy, send, measure</strong>
            <span>You provide artwork and copy. We send. You get the report.</span>
          </li>
        </ol>
        <div className="ke-print-stats">
          <div>
            <div className="ke-print-stat-val">30K+</div>
            <div className="ke-print-stat-lbl">Sendable audience</div>
          </div>
          <div>
            <div className="ke-print-stat-val">25%+</div>
            <div className="ke-print-stat-lbl">Newsletter open rate</div>
          </div>
          <div>
            <div className="ke-print-stat-val">24–35%</div>
            <div className="ke-print-stat-lbl">Paid campaign opens</div>
          </div>
        </div>
        <div className="ke-print-brands">
          {brands.map((b) => (
            <span key={b}>{b}</span>
          ))}
        </div>
      </section>

      <section className="ke-print-page">
        <p className="ke-print-label">Email + SMS</p>
        <h2>
          Higher-impact
          <br />
          on their phone.
        </h2>
        <p className="ke-print-lede">
          Pair branded SMS with an email campaign. Recipients see <strong>YOUR COMPANY</strong> — not
          a random number. From 10,000 numbers.
        </p>
        <ol className="ke-print-list">
          <li>
            <strong>Higher-impact companion</strong>
            <span>Inbox plus a tap on the phone. Quote-only add-on to email.</span>
          </li>
          <li>
            <strong>Branded sender name</strong>
            <span>Instant recognition. Higher trust than unknown numbers.</span>
          </li>
          <li>
            <strong>SMS + WhatsApp</strong>
            <span>One campaign brief. We run the paced send.</span>
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
          Download this kit, then buy an email campaign or request an Email + SMS quote. We handle the
          send. You get the report.
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
          KemisDigital builds websites. Kemis.email is audience and promotion.
        </p>
      </section>
    </div>
  );
}
