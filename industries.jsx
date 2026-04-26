/* global React, ReactDOM */

const PageHero = ({ kicker, title, sub }) => (
  <section style={{ background: TOKENS.white, borderBottom: `1px solid ${TOKENS.hairline}`, padding: "100px 0 80px" }}>
    <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 32px" }}>
      <FadeUp><Kicker style={{ marginBottom: 32 }}>{kicker}</Kicker></FadeUp>
      <FadeUp delay={120}>
        <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(56px, 8vw, 120px)", lineHeight: 0.92, letterSpacing: "0.02em", color: TOKENS.navy, margin: 0, textTransform: "uppercase", maxWidth: 1100 }}>
          {title}
        </h1>
      </FadeUp>
      {sub && (
        <FadeUp delay={220}>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 18, lineHeight: 1.55, color: TOKENS.body, maxWidth: 640, marginTop: 32 }}>
            {sub}
          </p>
        </FadeUp>
      )}
    </div>
  </section>
);

const IndustriesHub = () => (
  <section style={{ background: TOKENS.white, padding: "100px 0", borderBottom: `1px solid ${TOKENS.hairline}` }}>
    <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 32px" }}>
      <div className="industries-hub-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
        {INDUSTRIES.map((ind, i) => (
          <FadeUp key={ind.slug} delay={i * 80}>
            <a href={ind.href} style={{
              display: "block",
              textDecoration: "none",
              color: "inherit",
              padding: 0,
              border: `0.5px solid ${TOKENS.brushed}`,
              borderRadius: 18,
              transition: "transform 400ms cubic-bezier(.2,.7,.2,1), border-color 200ms ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = TOKENS.navy;
              const img = e.currentTarget.querySelector(".hub-img");
              if (img) img.style.transform = "scale(1.04)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = TOKENS.brushed;
              const img = e.currentTarget.querySelector(".hub-img");
              if (img) img.style.transform = "scale(1)";
            }}>
              <div style={{ overflow: "hidden", borderRadius: 12 }}>
                <div className="hub-img" style={{ transition: "transform 600ms cubic-bezier(.2,.7,.2,1)" }}>
                  <Placeholder label={ind.image} ratio="16/10" tone={i % 2 === 0 ? "navy" : "steel"} />
                </div>
              </div>
              <div style={{ padding: "32px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 16 }}>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.20em", textTransform: "uppercase", color: TOKENS.steel }}>
                    {ind.n} / 05
                  </span>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, letterSpacing: "0.20em", textTransform: "uppercase", color: TOKENS.body }}>
                    {ind.items.length} services
                  </span>
                </div>
                <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 56, letterSpacing: "0.02em", color: TOKENS.navy, margin: "0 0 16px 0", textTransform: "uppercase", lineHeight: 1 }}>
                  {ind.name}
                </h2>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 15, lineHeight: 1.6, color: TOKENS.body, margin: "0 0 24px 0" }}>
                  {ind.desc}
                </p>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 500, color: TOKENS.navy, letterSpacing: "0.10em", textTransform: "uppercase", borderBottom: `1px solid ${TOKENS.steel}`, paddingBottom: 6 }}>
                  Explore {ind.name} →
                </span>
              </div>
            </a>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

const App = () => (
  <PageFade>
    <Nav current="industries.html" />
    <main>
      <PageHero
        kicker="What we build"
        title={<>Five industries.<br />One standard.</>}
        sub="Whether you are cooling milk in Kerry or fabricating a pharma vessel for Dublin, every project receives the same fifty-year-old standard of precision. Choose your industry below."
      />
      <IndustriesHub />
    </main>
    <Footer />
  </PageFade>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
