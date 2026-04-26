/* global React, ReactDOM */
const { TOKENS, FadeUp, PageFade, Placeholder, Kicker, ctaPrimary, ctaSecondary, Nav, Footer, INDUSTRIES } = window;

// Reads ?slug=farming or window.__INDUSTRY_SLUG
const slug = window.__INDUSTRY_SLUG || "farming";
const ind = INDUSTRIES.find((x) => x.slug === slug) || INDUSTRIES[0];
const idx = INDUSTRIES.findIndex((x) => x.slug === ind.slug);
const prev = INDUSTRIES[(idx - 1 + INDUSTRIES.length) % INDUSTRIES.length];
const next = INDUSTRIES[(idx + 1) % INDUSTRIES.length];

document.title = `${ind.name} — Liscarroll Engineering`;

const Hero = () => (
  <section style={{ background: TOKENS.white, borderBottom: `1px solid ${TOKENS.hairline}` }}>
    <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 32px" }}>
      <FadeUp>
        <div style={{ paddingTop: 60, fontFamily: "Inter, sans-serif", fontSize: 12, color: TOKENS.body, letterSpacing: "0.10em", textTransform: "uppercase" }}>
          <a href="industries.html" style={{ color: TOKENS.body, textDecoration: "none" }}>Industries</a>
          <span style={{ margin: "0 10px", color: TOKENS.brushed }}>/</span>
          <span style={{ color: TOKENS.navy }}>{ind.name}</span>
        </div>
      </FadeUp>

      <div className="ind-detail-grid" style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 80, alignItems: "center", padding: "60px 0 100px" }}>
        <div>
          <FadeUp><Kicker style={{ marginBottom: 28 }}>Industry · {ind.n} / 05</Kicker></FadeUp>
          <FadeUp delay={120}>
            <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(56px, 9vw, 140px)", lineHeight: 0.9, letterSpacing: "0.02em", color: TOKENS.navy, margin: 0, textTransform: "uppercase" }}>
              {ind.name}
            </h1>
          </FadeUp>
          <FadeUp delay={220}>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 18, lineHeight: 1.6, color: TOKENS.body, maxWidth: 540, marginTop: 32 }}>
              {ind.long}
            </p>
          </FadeUp>
          <FadeUp delay={320}>
            <div style={{ display: "flex", gap: 14, marginTop: 36, flexWrap: "wrap" }}>
              <a href="contact.html" style={ctaPrimary}>Discuss your project</a>
              <a href="case-studies.html" style={ctaSecondary}>See related work</a>
            </div>
          </FadeUp>
        </div>
        <FadeUp delay={200}>
          <Placeholder label={ind.image} ratio="4/5" tone={idx % 2 === 0 ? "navy" : "steel"} />
        </FadeUp>
      </div>
    </div>
  </section>
);

const Products = () => (
  <section style={{ background: TOKENS.white, padding: "100px 0", borderBottom: `1px solid ${TOKENS.hairline}` }}>
    <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 32px" }}>
      <div style={{ marginBottom: 64, maxWidth: 720 }}>
        <FadeUp><Kicker style={{ marginBottom: 28 }}>What we build for {ind.name.toLowerCase()}</Kicker></FadeUp>
        <FadeUp delay={120}>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(40px, 5vw, 72px)", lineHeight: 0.95, letterSpacing: "0.02em", color: TOKENS.navy, margin: 0, textTransform: "uppercase" }}>
            The full range.
          </h2>
        </FadeUp>
      </div>
      <div className="product-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderTop: `1px solid ${TOKENS.hairline}` }}>
        {ind.items.map((it, i) => (
          <FadeUp key={it} delay={(i % 3) * 60}>
            <div style={{
              padding: "32px 28px 32px 0",
              paddingLeft: i % 3 === 0 ? 0 : 28,
              borderRight: (i + 1) % 3 === 0 ? "none" : `1px solid ${TOKENS.hairline}`,
              borderBottom: `1px solid ${TOKENS.hairline}`,
              minHeight: 160,
            }}>
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.20em", textTransform: "uppercase", color: TOKENS.steel }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 32, letterSpacing: "0.02em", color: TOKENS.navy, margin: "16px 0 12px 0", textTransform: "uppercase", lineHeight: 1 }}>
                {it}
              </h3>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13.5, lineHeight: 1.6, color: TOKENS.body, margin: 0 }}>
                Built to AISI 304 standard at our Cork facility. Specifications available on request.
              </p>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

const NextPrev = () => (
  <section style={{ background: TOKENS.white, padding: "60px 0 120px" }}>
    <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 32px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, borderTop: `1px solid ${TOKENS.hairline}`, borderBottom: `1px solid ${TOKENS.hairline}` }}>
        <a href={prev.href} style={{ display: "block", padding: "40px 32px 40px 0", borderRight: `1px solid ${TOKENS.hairline}`, textDecoration: "none" }}>
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.20em", textTransform: "uppercase", color: TOKENS.body }}>← Previous</span>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 40, letterSpacing: "0.02em", color: TOKENS.navy, marginTop: 12, textTransform: "uppercase", lineHeight: 1 }}>{prev.name}</div>
        </a>
        <a href={next.href} style={{ display: "block", padding: "40px 0 40px 32px", textDecoration: "none", textAlign: "right" }}>
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.20em", textTransform: "uppercase", color: TOKENS.body }}>Next →</span>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 40, letterSpacing: "0.02em", color: TOKENS.navy, marginTop: 12, textTransform: "uppercase", lineHeight: 1 }}>{next.name}</div>
        </a>
      </div>
    </div>
  </section>
);

const App = () => (
  <PageFade>
    <Nav current="industries.html" />
    <main>
      <Hero />
      <Products />
      <NextPrev />
    </main>
    <Footer />
  </PageFade>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
