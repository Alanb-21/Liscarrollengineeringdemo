/* global React, ReactDOM */
const { TOKENS, FadeUp, PageFade, Placeholder, Kicker, ctaPrimary, ctaSecondary, Nav, Footer } = window;

const TIMELINE = [
  ["1973", "Founded in Liscarroll", "John O'Sullivan opens a small fabrication shop in Liscarroll, Co. Cork. First job: a milk cooling tank for a neighbouring dairy farm."],
  ["1981", "First export contract", "Refurbished equipment shipped to a creamery in the United Kingdom. The export business begins quietly."],
  ["1989", "Into food production", "Expansion from dairy farming into full food-production fabrication. Butter producers and creameries become long-term clients."],
  ["1996", "Second generation joins", "Mary O'Sullivan joins the business full-time. Operations, scheduling and supplier relations are professionalised."],
  ["2004", "Move to Rockspring", "Relocation to the current 20,000 sq ft facility at Rockspring. CNC machinery and full craneage installed."],
  ["2011", "Pharmaceutical work begins", "First passivated vessels delivered to an Irish pharmaceutical client. Mirror-polished GMP work becomes a core capability."],
  ["2017", "ISO accreditation", "Quality management system audited and certified to ISO 9001 across every manufacturing process."],
  ["2021", "Croke Park", "Bespoke 'Tap. Take. Go.' bar fabrication delivered for one of Ireland's most-watched venues."],
  ["2026", "Five sectors served", "Farming, food, pharma, leisure and bespoke — all from the same Cork plant. Three generations of the O'Sullivan family still on the books."],
];

const Hero = () => (
  <section style={{ background: TOKENS.white, borderBottom: `1px solid ${TOKENS.hairline}`, padding: "100px 0 80px" }}>
    <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 32px" }}>
      <FadeUp><Kicker style={{ marginBottom: 32 }}>Fifty-three years</Kicker></FadeUp>
      <FadeUp delay={120}>
        <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(56px, 8vw, 120px)", lineHeight: 0.92, letterSpacing: "0.02em", color: TOKENS.navy, margin: 0, textTransform: "uppercase", maxWidth: 1100 }}>
          Our heritage.
        </h1>
      </FadeUp>
      <FadeUp delay={220}>
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: 18, lineHeight: 1.55, color: TOKENS.body, maxWidth: 640, marginTop: 32 }}>
          One family. One Cork plant. Fifty-three years of stainless steel manufacturing — and counting.
        </p>
      </FadeUp>
    </div>
  </section>
);

const HeritageImages = () => (
  <section style={{ background: TOKENS.white, padding: "0 0 120px", borderBottom: `1px solid ${TOKENS.hairline}` }}>
    <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 32px" }}>
      <FadeUp>
        <Placeholder label="ARCHIVE · Workshop floor, Liscarroll, c. 1978" ratio="21/9" tone="paper" />
      </FadeUp>
      <div className="heritage-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginTop: 32 }}>
        <FadeUp delay={100}><Placeholder label="ARCHIVE · First milk tank, 1973" ratio="4/3" tone="navy" /></FadeUp>
        <FadeUp delay={200}><Placeholder label="ARCHIVE · Founder John O'Sullivan, 1989" ratio="4/3" tone="steel" /></FadeUp>
      </div>
    </div>
  </section>
);

const Timeline = () => (
  <section style={{ background: TOKENS.white, padding: "120px 0", borderBottom: `1px solid ${TOKENS.hairline}` }}>
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px" }}>
      <div style={{ marginBottom: 72 }}>
        <FadeUp><Kicker style={{ marginBottom: 28 }}>The timeline</Kicker></FadeUp>
        <FadeUp delay={120}>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(40px, 5vw, 72px)", lineHeight: 0.95, letterSpacing: "0.02em", color: TOKENS.navy, margin: 0, textTransform: "uppercase" }}>
            A reputation, hammered out.
          </h2>
        </FadeUp>
      </div>

      <div style={{ borderTop: `1px solid ${TOKENS.hairline}` }}>
        {TIMELINE.map(([year, title, body], i) => (
          <FadeUp key={year} delay={i * 50}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "140px 1fr",
              gap: 32,
              padding: "36px 0",
              borderBottom: `1px solid ${TOKENS.hairline}`,
              alignItems: "start",
            }}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 56, letterSpacing: "0.02em", color: TOKENS.navy, lineHeight: 1 }}>
                {year}
              </div>
              <div>
                <h3 style={{ fontFamily: "Inter, sans-serif", fontSize: 18, fontWeight: 500, color: TOKENS.navy, margin: "0 0 10px 0", letterSpacing: "0.01em" }}>
                  {title}
                </h3>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 15, lineHeight: 1.65, color: TOKENS.body, margin: 0, maxWidth: 640 }}>
                  {body}
                </p>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

const Quote = () => (
  <section style={{ background: TOKENS.navy, color: "#E8ECF1", padding: "140px 0" }}>
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px", textAlign: "center" }}>
      <FadeUp>
        <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 80, color: TOKENS.steel, lineHeight: 1, display: "block", marginBottom: 24 }}>"</span>
      </FadeUp>
      <FadeUp delay={120}>
        <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.1, letterSpacing: "0.02em", color: "#fff", margin: 0, textTransform: "uppercase" }}>
          We have only ever made one promise — that what leaves our floor will outlast what we made the year before.
        </p>
      </FadeUp>
      <FadeUp delay={240}>
        <div style={{ marginTop: 48, fontFamily: "Inter, sans-serif", fontSize: 13, color: "#9DBED5", letterSpacing: "0.20em", textTransform: "uppercase" }}>
          John O'Sullivan · Founder · 1973
        </div>
      </FadeUp>
    </div>
  </section>
);

const App = () => (
  <PageFade>
    <Nav current="our-heritage.html" />
    <main>
      <Hero />
      <HeritageImages />
      <Timeline />
      <Quote />
    </main>
    <Footer />
  </PageFade>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
