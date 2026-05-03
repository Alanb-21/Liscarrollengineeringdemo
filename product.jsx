/* global React, ReactDOM */

// Reads window.__INDUSTRY_SLUG and window.__PRODUCT_SLUG to look up the
// product entry in the global PRODUCTS catalogue (set by product-data.js).
const indSlug = window.__INDUSTRY_SLUG || "farming";
const prodSlug = window.__PRODUCT_SLUG || "milk-cooling-tanks";
const key = `${indSlug}/${prodSlug}`;
const product = window.PRODUCTS[key] || window.PRODUCTS["farming/milk-cooling-tanks"];
const list = window.PRODUCTS_BY_INDUSTRY[indSlug] || [];
const idx = list.findIndex((p) => p.slug === product.slug);
const prev = list[(idx - 1 + list.length) % list.length];
const next = list[(idx + 1) % list.length];

document.title = `${product.name} — ${product.industryName} — Liscarroll Engineering`;

const indHref = `industry-${product.industrySlug}.html`;
const prodHref = (p) => `product-${p.industrySlug}-${p.slug}.html`;
const ctxQuery = `?industry=${product.industrySlug}&product=${product.slug}`;

const Hero = () => (
  <section style={{ background: TOKENS.white, borderBottom: `1px solid ${TOKENS.hairline}` }}>
    <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 32px" }}>
      <FadeUp>
        <div style={{ paddingTop: 60, fontFamily: "Inter, sans-serif", fontSize: 12, color: TOKENS.body, letterSpacing: "0.10em", textTransform: "uppercase" }}>
          <a href="industries.html" style={{ color: TOKENS.body, textDecoration: "none" }}>Industries</a>
          <span style={{ margin: "0 10px", color: TOKENS.brushed }}>/</span>
          <a href={indHref} style={{ color: TOKENS.body, textDecoration: "none" }}>{product.industryName}</a>
          <span style={{ margin: "0 10px", color: TOKENS.brushed }}>/</span>
          <span style={{ color: TOKENS.navy }}>{product.name}</span>
        </div>
      </FadeUp>

      <div className="ind-detail-grid" style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 80, alignItems: "center", padding: "60px 0 100px" }}>
        <div>
          <FadeUp><Kicker style={{ marginBottom: 28 }}>{product.industryName} · {product.n} / {product.of}</Kicker></FadeUp>
          <FadeUp delay={120}>
            <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(48px, 8vw, 120px)", lineHeight: 0.9, letterSpacing: "0.02em", color: TOKENS.navy, margin: 0, textTransform: "uppercase" }}>
              {product.name}
            </h1>
          </FadeUp>
          <FadeUp delay={180}>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 15, fontWeight: 500, color: TOKENS.steel, marginTop: 24, marginBottom: 0, letterSpacing: "0.01em" }}>
              {product.tagline}
            </p>
          </FadeUp>
          <FadeUp delay={260}>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 17, lineHeight: 1.65, color: TOKENS.body, maxWidth: 520, marginTop: 20, marginBottom: 0 }}>
              {product.desc}
            </p>
          </FadeUp>
          <FadeUp delay={340}>
            <div style={{ display: "flex", gap: 14, marginTop: 40, flexWrap: "wrap" }}>
              <a href={`contact.html${ctxQuery}`} style={ctaPrimary}>Request a quote</a>
              <a href={`contact.html${ctxQuery}&kind=specsheet`} style={ctaSecondary}>Request spec sheet</a>
            </div>
          </FadeUp>
        </div>
        <FadeUp delay={200}>
          <Placeholder label={product.standaloneLabel} ratio="4/5" tone="navy" />
        </FadeUp>
      </div>
    </div>
  </section>
);

const Drawings = () => (
  <section style={{ background: TOKENS.paper, padding: "100px 0", borderBottom: `1px solid ${TOKENS.hairline}` }}>
    <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 32px" }}>
      <div style={{ marginBottom: 56, display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24 }}>
        <div>
          <FadeUp><Kicker style={{ marginBottom: 20 }}>Technical drawings</Kicker></FadeUp>
          <FadeUp delay={100}>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(36px, 4.5vw, 64px)", lineHeight: 0.95, letterSpacing: "0.02em", color: TOKENS.navy, margin: 0, textTransform: "uppercase" }}>
              Engineering documentation.
            </h2>
          </FadeUp>
        </div>
        <FadeUp delay={150}>
          <a href={`contact.html${ctxQuery}&kind=drawings`} style={ctaSecondary}>Request full drawing pack →</a>
        </FadeUp>
      </div>
      <div className="product-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
        <FadeUp><Placeholder label={product.drawing1} ratio="3/4" tone="light" style={{ borderRadius: 12 }} /></FadeUp>
        <FadeUp delay={80}><Placeholder label={product.drawing2} ratio="3/4" tone="light" style={{ borderRadius: 12 }} /></FadeUp>
        <FadeUp delay={160}><Placeholder label={product.drawing3} ratio="3/4" tone="light" style={{ borderRadius: 12 }} /></FadeUp>
      </div>
    </div>
  </section>
);

const Specifications = () => (
  <section style={{ background: TOKENS.navy, color: "#E8ECF1", padding: "120px 0" }}>
    <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 32px" }}>
      <div style={{ marginBottom: 64 }}>
        <FadeUp><Kicker dark style={{ marginBottom: 20 }}>Specifications</Kicker></FadeUp>
        <FadeUp delay={100}>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(36px, 4.5vw, 64px)", lineHeight: 0.95, letterSpacing: "0.02em", color: "#fff", margin: 0, textTransform: "uppercase" }}>
            Standard build specification.
          </h2>
        </FadeUp>
        <FadeUp delay={160}>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 15, lineHeight: 1.6, color: "#9DBED5", marginTop: 20, maxWidth: 560 }}>
            Custom specifications available on request. All deviations are documented and priced at quotation stage.
          </p>
        </FadeUp>
      </div>
      <div style={{ borderTop: "1px solid rgba(192,200,209,0.25)" }}>
        {product.specs.map(([label, value], i) => (
          <FadeUp key={label} delay={i * 40}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "260px 1fr",
              gap: 40,
              padding: "24px 0",
              borderBottom: "1px solid rgba(192,200,209,0.15)",
              alignItems: "baseline",
            }}>
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.20em", textTransform: "uppercase", color: "#9DBED5" }}>
                {label}
              </span>
              <span style={{ fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: 15, letterSpacing: "0.04em", color: "#fff" }}>
                {value}
              </span>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

const Installed = () => (
  <section style={{ background: TOKENS.white, padding: "100px 0", borderBottom: `1px solid ${TOKENS.hairline}` }}>
    <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 32px" }}>
      <FadeUp>
        <div style={{ marginBottom: 40 }}>
          <Kicker style={{ marginBottom: 20 }}>Installed</Kicker>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(36px, 4.5vw, 64px)", lineHeight: 0.95, letterSpacing: "0.02em", color: TOKENS.navy, margin: 0, textTransform: "uppercase" }}>
            In the field.
          </h2>
        </div>
      </FadeUp>
      <FadeUp delay={80}>
        <Placeholder label={product.installedLabel} ratio="21/9" tone="steel" style={{ borderRadius: 12 }} />
      </FadeUp>
      <FadeUp delay={140}>
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13.5, color: TOKENS.body, marginTop: 18, letterSpacing: "0.01em", lineHeight: 1.5 }}>
          {product.installedCaption}
        </p>
      </FadeUp>
    </div>
  </section>
);

const NextPrev = () => (
  <section style={{ background: TOKENS.white, padding: "60px 0 100px" }}>
    <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 32px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderTop: `1px solid ${TOKENS.hairline}`, borderBottom: `1px solid ${TOKENS.hairline}` }}>
        <a href={prodHref(prev)} style={{ display: "block", padding: "40px 32px 40px 0", borderRight: `1px solid ${TOKENS.hairline}`, textDecoration: "none" }}>
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.20em", textTransform: "uppercase", color: TOKENS.body }}>← Previous product</span>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 40, letterSpacing: "0.02em", color: TOKENS.navy, marginTop: 12, textTransform: "uppercase", lineHeight: 1 }}>{prev.name}</div>
        </a>
        <a href={prodHref(next)} style={{ display: "block", padding: "40px 0 40px 32px", textDecoration: "none", textAlign: "right" }}>
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.20em", textTransform: "uppercase", color: TOKENS.body }}>Next product →</span>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 40, letterSpacing: "0.02em", color: TOKENS.navy, marginTop: 12, textTransform: "uppercase", lineHeight: 1 }}>{next.name}</div>
        </a>
      </div>
      <div style={{ marginTop: 40, textAlign: "center" }}>
        <a href={indHref} style={{ fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 500, color: TOKENS.body, textDecoration: "none", letterSpacing: "0.10em", textTransform: "uppercase" }}>
          ← Back to all {product.industryName.toLowerCase()} products
        </a>
      </div>
    </div>
  </section>
);

const App = () => (
  <PageFade>
    <Nav current="industries.html" />
    <main id="main">
      <Hero />
      <Drawings />
      <Specifications />
      <Installed />
      <NextPrev />
    </main>
    <Footer />
  </PageFade>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
