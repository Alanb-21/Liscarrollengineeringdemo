/* global React, ReactDOM */

const PAGES = {
  privacy: {
    kicker: "Legal",
    title: "Privacy Policy",
    intro:
      "We respect your privacy. This page sets out what data we collect on liscarrollengineering.ie, why we collect it, and what we do with it.",
    sections: [
      {
        h: "Who we are",
        p: "Liscarroll Engineering Limited, Rockspring, Liscarroll, Mallow, Co. Cork, Ireland. You can reach us by phone on +353 (0)22 48200 or by email at info@liscarrollengineering.ie.",
      },
      {
        h: "What we collect",
        p: "When you submit our contact form, we collect the name, email address, phone number (if provided), company name and message you give us. We use this information solely to respond to your enquiry. We do not sell, rent or share it with third parties for marketing purposes.",
      },
      {
        h: "Cookies and tracking",
        p: "This website does not set marketing or advertising cookies. We use a single first-party cookie to remember your cookie-banner choice. Where the page embeds Google Maps, we ask for your consent before loading the embed — Google may then set its own cookies under its own privacy policy.",
      },
      {
        h: "Email service",
        p: "Form submissions are delivered to our office via Resend (resend.com), a transactional email provider. Resend processes the data on our behalf as a sub-processor; their privacy policy is published at resend.com/legal/privacy-policy.",
      },
      {
        h: "How long we keep it",
        p: "Enquiry emails are retained in our inbox for as long as the project relationship is active, then archived in line with normal business records. You can ask us to delete your data at any time by emailing info@liscarrollengineering.ie.",
      },
      {
        h: "Your rights",
        p: "Under the GDPR you have the right to access, correct, port and erase your personal data, and to lodge a complaint with the Data Protection Commission of Ireland (dataprotection.ie). To exercise any of these rights, email info@liscarrollengineering.ie.",
      },
      {
        h: "Updates",
        p: "We may update this policy from time to time. The version date below is the date of the most recent change.",
      },
    ],
    updated: "Last updated: May 2026",
  },
  terms: {
    kicker: "Legal",
    title: "Terms of Use",
    intro:
      "By using liscarrollengineering.ie you agree to the following terms. They are written in plain English.",
    sections: [
      {
        h: "Use of the site",
        p: "This website is published by Liscarroll Engineering Limited for general information about our products and services. The content is offered in good faith but does not constitute a contract or a quotation.",
      },
      {
        h: "Quotations and contracts",
        p: "Specifications, lead times, capacities and prices shown on this site are indicative only. A binding quotation is issued only in writing, signed by an authorised member of our team, against an agreed scope of work.",
      },
      {
        h: "Intellectual property",
        p: "All copy, drawings, photography and design on this site are © Liscarroll Engineering Limited or used with permission. You are welcome to share links to our pages. Reuse of content beyond fair quotation requires our written permission.",
      },
      {
        h: "External links",
        p: "Where we link to third-party websites we are not responsible for their content or their privacy practices. Read their own policies before sharing data with them.",
      },
      {
        h: "Liability",
        p: "We do our best to keep this site accurate and online. To the extent permitted by Irish law, we exclude liability for any indirect or consequential loss arising from your use of the site or reliance on its content.",
      },
      {
        h: "Governing law",
        p: "These terms are governed by the laws of Ireland and any dispute is subject to the exclusive jurisdiction of the Irish courts.",
      },
    ],
    updated: "Last updated: May 2026",
  },
};

const slug = window.__LEGAL_PAGE === "terms" ? "terms" : "privacy";
const data = PAGES[slug];
document.title = `${data.title} — Liscarroll Engineering`;

const Hero = () => (
  <section style={{ background: TOKENS.white, borderBottom: `1px solid ${TOKENS.hairline}`, padding: "100px 0 60px" }}>
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px" }}>
      <FadeUp><Kicker style={{ marginBottom: 32 }}>{data.kicker}</Kicker></FadeUp>
      <FadeUp delay={120}>
        <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(48px, 7vw, 96px)", lineHeight: 0.95, letterSpacing: "0.02em", color: TOKENS.navy, margin: 0, textTransform: "uppercase" }}>
          {data.title}
        </h1>
      </FadeUp>
      <FadeUp delay={220}>
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: 17, lineHeight: 1.6, color: TOKENS.body, maxWidth: 720, marginTop: 28 }}>
          {data.intro}
        </p>
      </FadeUp>
    </div>
  </section>
);

const Body = () => (
  <section style={{ background: TOKENS.white, padding: "60px 0 120px", borderBottom: `1px solid ${TOKENS.hairline}` }}>
    <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 32px" }}>
      {data.sections.map((s, i) => (
        <FadeUp key={s.h} delay={i * 40}>
          <div style={{ marginTop: i === 0 ? 0 : 36 }}>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(26px, 3vw, 36px)", letterSpacing: "0.02em", color: TOKENS.navy, margin: "0 0 12px 0", textTransform: "uppercase", lineHeight: 1.1 }}>
              {s.h}
            </h2>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 16, lineHeight: 1.7, color: TOKENS.body, margin: 0 }}>
              {s.p}
            </p>
          </div>
        </FadeUp>
      ))}
      <FadeUp delay={data.sections.length * 40}>
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: TOKENS.body, marginTop: 56, letterSpacing: "0.05em", textTransform: "uppercase" }}>
          {data.updated}
        </p>
      </FadeUp>
    </div>
  </section>
);

const App = () => (
  <PageFade>
    <Nav current={`${slug}.html`} />
    <main id="main">
      <Hero />
      <Body />
    </main>
    <Footer />
  </PageFade>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
