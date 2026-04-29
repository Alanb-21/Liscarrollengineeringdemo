/* global React, ReactDOM */
const { useState, useEffect } = React;
const { TOKENS, FadeUp, PageFade, Placeholder, Kicker, ctaPrimary, ctaSecondary, Nav, Footer, INDUSTRIES } = window;

// HERO
const Hero = () => (
  <section style={{ background: TOKENS.white, borderBottom: `1px solid ${TOKENS.hairline}` }}>
    <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 32px" }}>
      <div className="hero-grid" style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 80,
        alignItems: "center",
        minHeight: "82vh",
        paddingTop: 80,
        paddingBottom: 80,
      }}>
        <div>
          <FadeUp><Kicker style={{ marginBottom: 32 }}>Est. 1973 · Liscarroll, Co. Cork</Kicker></FadeUp>
          <FadeUp delay={120}>
            <h1 style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(56px, 8vw, 120px)",
              lineHeight: 0.92,
              letterSpacing: "0.02em",
              color: TOKENS.navy,
              margin: 0,
              textTransform: "uppercase",
            }}>
              Stainless<br />steel, built<br />to outlast.
            </h1>
          </FadeUp>
          <FadeUp delay={240}>
            <p style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 17,
              lineHeight: 1.55,
              color: TOKENS.body,
              maxWidth: 460,
              marginTop: 36,
              marginBottom: 0,
            }}>
              Fifty years of precision stainless steel engineering for farming, food, pharma, leisure and bespoke. Built in Cork. Shipped worldwide.
            </p>
          </FadeUp>
          <FadeUp delay={340}>
            <div style={{ display: "flex", gap: 14, marginTop: 40, flexWrap: "wrap" }}>
              <a href="contact.html" style={ctaPrimary}>Start a Project</a>
              <a href="case-studies.html" style={ctaSecondary}>View our work</a>
            </div>
          </FadeUp>
        </div>

        <FadeUp delay={200}>
          <div style={{ position: "relative" }}>
            <Placeholder label="HERO · weld in progress, plant floor" ratio="4/5" tone="navy" />
            <div className="hero-badge" style={{
              position: "absolute",
              left: -28,
              bottom: -28,
              background: TOKENS.white,
              padding: "20px 24px",
              border: `0.5px solid ${TOKENS.brushed}`,
              maxWidth: 240,
            }}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 56, color: TOKENS.navy, lineHeight: 1, letterSpacing: "0.02em" }}>50+</div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: TOKENS.body, marginTop: 6, lineHeight: 1.4 }}>
                Years of stainless steel engineering, in continuous operation since 1973.
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </div>

    <FadeUp>
      <div style={{
        borderTop: `1px solid ${TOKENS.hairline}`,
        borderBottom: `1px solid ${TOKENS.hairline}`,
        background: TOKENS.white,
      }}>
        <div style={{
          display: "flex", gap: 60, padding: "22px 32px", maxWidth: 1440, margin: "0 auto",
          alignItems: "center", flexWrap: "wrap", justifyContent: "space-between",
        }}>
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, letterSpacing: "0.20em", textTransform: "uppercase", color: TOKENS.body, fontWeight: 500 }}>
            Trusted by
          </span>
          {["Ballymaloe", "Dale Farm", "Hot Box", "Croke Park", "Kerry Group", "Glanbia"].map((c) => (
            <span key={c} style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 22, letterSpacing: "0.05em", color: TOKENS.navy, opacity: 0.65 }}>{c}</span>
          ))}
        </div>
      </div>
    </FadeUp>
  </section>
);

// INDUSTRIES PREVIEW
const IndustriesPreview = () => {
  const [active, setActive] = useState(0);
  return (
    <section style={{ background: TOKENS.white, padding: "120px 0", borderBottom: `1px solid ${TOKENS.hairline}` }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 32px" }}>
        <div className="ind-header" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, marginBottom: 80, alignItems: "end" }}>
          <FadeUp>
            <Kicker style={{ marginBottom: 28 }}>Our industries</Kicker>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(44px, 5.5vw, 84px)", lineHeight: 0.95, letterSpacing: "0.02em", color: TOKENS.navy, margin: 0, textTransform: "uppercase" }}>
              Five sectors.<br />One standard.
            </h2>
          </FadeUp>
          <FadeUp delay={120}>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 17, lineHeight: 1.6, color: TOKENS.body, margin: 0, maxWidth: 480, justifySelf: "end" }}>
              Whether we're cooling milk in Kerry or fabricating for a cleanroom in Dublin, every project receives the same fifty-year-old standard of precision. No tier system. No exceptions.
            </p>
          </FadeUp>
        </div>

        <div className="ind-split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
          <div style={{ borderTop: `1px solid ${TOKENS.hairline}` }}>
            {INDUSTRIES.map((ind, i) => (
              <FadeUp key={ind.n} delay={i * 60}>
                <a
                  href={ind.href}
                  onMouseEnter={() => setActive(i)}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "60px 1fr auto",
                    gap: 24,
                    padding: "32px 0",
                    borderBottom: `1px solid ${TOKENS.hairline}`,
                    cursor: "pointer",
                    alignItems: "start",
                    opacity: active === i ? 1 : 0.55,
                    transition: "opacity 200ms ease",
                    textDecoration: "none",
                  }}
                >
                  <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 24, color: active === i ? TOKENS.steel : TOKENS.navy, letterSpacing: "0.05em", transition: "color 200ms ease" }}>
                    {ind.n}
                  </span>
                  <div>
                    <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(28px, 3vw, 44px)", letterSpacing: "0.02em", color: TOKENS.navy, margin: "0 0 12px 0", textTransform: "uppercase", lineHeight: 1 }}>
                      {ind.name}
                    </h3>
                    <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14.5, lineHeight: 1.6, color: TOKENS.body, margin: 0, maxWidth: 420 }}>
                      {ind.desc}
                    </p>
                  </div>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: 18, color: active === i ? TOKENS.steel : TOKENS.brushed, transition: "color 200ms ease", marginTop: 8 }}>→</span>
                </a>
              </FadeUp>
            ))}
          </div>

          <div className="ind-image-wrap" style={{ position: "sticky", top: 110 }}>
            <div style={{ position: "relative" }}>
              {INDUSTRIES.map((ind, i) => (
                <div key={ind.slug} style={{
                  position: i === 0 ? "relative" : "absolute",
                  inset: 0,
                  opacity: active === i ? 1 : 0,
                  transition: "opacity 400ms ease",
                }}>
                  <Placeholder label={ind.image} ratio="4/5" tone={i % 2 === 0 ? "navy" : "steel"} />
                </div>
              ))}
            </div>
            <div style={{ marginTop: 20, display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, letterSpacing: "0.20em", textTransform: "uppercase", color: TOKENS.body, fontWeight: 500 }}>
                {INDUSTRIES[active].n} / 05
              </span>
              <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 18, letterSpacing: "0.04em", color: TOKENS.navy }}>
                {INDUSTRIES[active].name.toUpperCase()}
              </span>
            </div>
          </div>
        </div>

        <FadeUp>
          <div style={{ marginTop: 64 }}>
            <a href="industries.html" style={ctaSecondary}>All industries →</a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

// CASE STUDY (signature dark)
const CaseStudy = () => (
  <section style={{ background: TOKENS.navy, color: "#E8ECF1", padding: "120px 0" }}>
    <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 32px" }}>
      <div className="case-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 80, alignItems: "stretch" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <FadeUp><Kicker dark style={{ marginBottom: 28 }}>Case study · 01</Kicker></FadeUp>
            <FadeUp delay={120}>
              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(44px, 5.5vw, 88px)", lineHeight: 0.92, letterSpacing: "0.02em", color: "#fff", margin: 0, textTransform: "uppercase" }}>
                Ballymaloe<br />Production<br />Line.
              </h2>
            </FadeUp>
            <FadeUp delay={220}>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 16.5, lineHeight: 1.65, color: "#9DBED5", marginTop: 36, maxWidth: 480 }}>
                Stainless steel fabrication for one of Ireland's most recognised food brands. Designed, built and delivered from our Cork facility — every weld ISO-compliant, the whole job on schedule.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={300}>
            <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", borderTop: "1px solid rgba(192,200,209,0.25)", paddingTop: 32, gap: 24 }}>
              {[["38m", "Continuous run length"], ["AISI 304", "Food-grade stainless"], ["12 wks", "Designed to delivered"]].map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 36, color: "#fff", letterSpacing: "0.02em", lineHeight: 1 }}>{n}</div>
                  <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#9DBED5", marginTop: 8, lineHeight: 1.4 }}>{l}</div>
                </div>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={400}>
            <a href="case-studies.html" style={{
              marginTop: 40,
              fontFamily: "Inter, sans-serif",
              fontSize: 13,
              fontWeight: 500,
              color: "#fff",
              textDecoration: "none",
              letterSpacing: "0.10em",
              textTransform: "uppercase",
              borderBottom: `1px solid ${TOKENS.steel}`,
              paddingBottom: 8,
              alignSelf: "flex-start",
              width: "fit-content",
              display: "inline-block",
            }}>
              Read the full study →
            </a>
          </FadeUp>
        </div>

        <FadeUp delay={120}>
          <div>
            <Placeholder label="CASE STUDY · Ballymaloe production line — full bleed" ratio="4/3" tone="steel" />
            <div className="case-thumbs" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginTop: 16 }}>
              <Placeholder label="weld detail" ratio="1/1" tone="navy" />
              <Placeholder label="install" ratio="1/1" tone="steel" />
              <Placeholder label="delivery" ratio="1/1" tone="navy" />
            </div>
          </div>
        </FadeUp>
      </div>
    </div>
  </section>
);

// CLOSING CTA BAND
const ContactBand = () => (
  <section style={{ background: TOKENS.white, padding: "140px 0 120px", borderBottom: `1px solid ${TOKENS.hairline}` }}>
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px", textAlign: "center" }}>
      <FadeUp>
        <div style={{ display: "inline-flex" }}>
          <Kicker style={{ marginBottom: 32 }}>Start a project</Kicker>
        </div>
      </FadeUp>
      <FadeUp delay={120}>
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(48px, 7vw, 110px)", lineHeight: 0.92, letterSpacing: "0.02em", color: TOKENS.navy, margin: "0 auto", textTransform: "uppercase", maxWidth: 980 }}>
          Tell us what you need to build.
        </h2>
      </FadeUp>
      <FadeUp delay={220}>
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: 17, lineHeight: 1.6, color: TOKENS.body, maxWidth: 560, margin: "32px auto 0" }}>
          Talk to a team that has been engineering stainless steel since 1973. Initial consultation is direct, free, and on the phone.
        </p>
      </FadeUp>
      <FadeUp delay={320}>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", marginTop: 40, flexWrap: "wrap" }}>
          <a href="contact.html" style={ctaPrimary}>Start a Project</a>
          <a href="tel:+35302248200" style={ctaSecondary}>+353 (0)22 48200</a>
        </div>
      </FadeUp>
    </div>
  </section>
);

const App = () => (
  <PageFade>
    <Nav current="" />
    <main>
      <Hero />
      <IndustriesPreview />
      <CaseStudy />
      <ContactBand />
    </main>
    <Footer />
  </PageFade>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
