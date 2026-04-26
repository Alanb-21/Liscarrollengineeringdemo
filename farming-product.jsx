/* global React, ReactDOM */

const FARMING_PRODUCTS = [
  {
    slug: "milk-cooling-tanks",
    n: "01",
    name: "Milk Cooling Tanks",
    tagline: "Direct-expansion and ice-bank milk cooling for every herd size.",
    desc: "From a 1,000-litre tank for a single-herd setup to a full silo and buffer system for a co-op collection point, every Liscarroll milk cooling tank is engineered to exceed EN13732 and built from AISI 304 food-grade stainless steel. We have been building cooling tanks on this floor since 1973.",
    specs: [
      ["Capacity", "1,000 – 30,000 L"],
      ["Material", "AISI 304 stainless steel"],
      ["Standard", "EN13732 (exceeds)"],
      ["Cooling method", "Direct expansion or ice bank"],
      ["Internal finish", "Electropolished Ra ≤ 0.4μm"],
      ["Insulation", "100mm polyurethane foam"],
      ["CIP system", "Integrated spray-ball"],
      ["Connections", "IDF / DIN dairy fittings"],
    ],
    standaloneLabel: "PRODUCT · Milk cooling tank — standalone, polished",
    drawing1: "DRAWING · Front elevation — milk cooling tank",
    drawing2: "DRAWING · Side section — milk cooling tank",
    drawing3: "DRAWING · Plan view — milk cooling tank",
    installedLabel: "INSTALLED · Milk cooling tank, Co. Cork dairy farm",
    installedCaption: "1,200 L direct-expansion tank installed on a family dairy farm, Co. Cork.",
  },
  {
    slug: "ice-builders",
    n: "02",
    name: "Ice Builders",
    tagline: "Build ice on off-peak power. Deploy cooling on demand.",
    desc: "Ice builders accumulate cooling capacity overnight on off-peak electricity tariffs and discharge it during milking — reducing peak power draw and protecting milk quality without oversizing your refrigeration plant. Fabricated in AISI 304 stainless steel, compatible with all major cooling systems.",
    specs: [
      ["Ice storage", "500 – 10,000 kg equivalent"],
      ["Material", "AISI 304 stainless steel"],
      ["Refrigerant", "R449A (low-GWP HFO)"],
      ["Operation", "Overnight off-peak build"],
      ["Control", "PLC with remote monitoring"],
      ["Power supply", "3-phase 400V"],
      ["Insulation", "80mm polyurethane foam"],
      ["Connections", "IDF dairy fittings"],
    ],
    standaloneLabel: "PRODUCT · Ice builder unit — standalone",
    drawing1: "DRAWING · Front elevation — ice builder",
    drawing2: "DRAWING · Pipework schematic — ice builder",
    drawing3: "DRAWING · Electrical layout — ice builder",
    installedLabel: "INSTALLED · Ice builder, dairy co-op, Co. Kerry",
    installedCaption: "2,500 kg ice builder serving a 200-cow operation, Co. Kerry.",
  },
  {
    slug: "milk-silos",
    n: "03",
    name: "Milk Silos",
    tagline: "Large-volume vertical and horizontal milk storage for creameries and co-ops.",
    desc: "Liscarroll silos are engineered for creameries, co-op collection points and large-scale dairy operations. Available vertical or horizontal, fully insulated with automated CIP, and built to food-grade surface specifications. Capacities from 10,000 L to 200,000 L — larger on request.",
    specs: [
      ["Capacity", "10,000 – 200,000 L"],
      ["Material", "AISI 304 / 316L"],
      ["Orientation", "Vertical or horizontal"],
      ["Insulation", "100mm PU foam, cladded"],
      ["Agitation", "Tri-lobe rotary or paddle"],
      ["CIP", "Automated full-cycle spray"],
      ["Level", "Ultrasonic sender and display"],
      ["Access", "Top manway, side sample valve"],
    ],
    standaloneLabel: "PRODUCT · Milk silo — vertical, standalone",
    drawing1: "DRAWING · Vertical silo — front elevation",
    drawing2: "DRAWING · Silo — section view",
    drawing3: "DRAWING · Agitator detail — silo",
    installedLabel: "INSTALLED · Milk silo installation, creamery, Co. Cork",
    installedCaption: "50,000 L vertical silo installed at a co-op collection point, Co. Cork.",
  },
  {
    slug: "buffer-tanks",
    n: "04",
    name: "Buffer Tanks",
    tagline: "Smooth the flow between milking and bulk cooling.",
    desc: "Buffer tanks protect your cooling capacity by absorbing warm milk before it enters the main cooling system — critical for high-throughput parlours where cooling demand spikes at milking time. Every tank built to AISI 304 with a hygienically welded interior and integrated CIP circuit.",
    specs: [
      ["Capacity", "500 – 10,000 L"],
      ["Material", "AISI 304 stainless steel"],
      ["Internal finish", "Ra ≤ 0.8μm"],
      ["Insulation", "80mm polyurethane foam"],
      ["CIP system", "Spray-ball circuit"],
      ["Connections", "IDF / DIN dairy fittings"],
      ["Supports", "Adjustable stainless legs"],
      ["Working temp", "1 – 6°C"],
    ],
    standaloneLabel: "PRODUCT · Buffer tank — standalone, polished interior",
    drawing1: "DRAWING · Buffer tank — front elevation",
    drawing2: "DRAWING · Buffer tank — section view",
    drawing3: "DRAWING · Buffer tank — connections detail",
    installedLabel: "INSTALLED · Buffer tank, high-throughput parlour, Co. Tipperary",
    installedCaption: "3,000 L buffer tank serving a 300-cow rotary parlour, Co. Tipperary.",
  },
  {
    slug: "heat-recovery-units",
    n: "05",
    name: "Heat Recovery Units",
    tagline: "Recover waste refrigeration heat. Cut water heating costs by up to 60%.",
    desc: "Heat recovery units capture waste heat from the condensing side of your refrigeration cycle and transfer it to your domestic hot water supply. Typically reduces water heating costs by 40–60%. Simple to retrofit alongside an existing cooling installation. Every unit CE-marked and built to specification.",
    specs: [
      ["Recovery efficiency", "40 – 60%"],
      ["Material", "AISI 304 plate pack"],
      ["Connections", "1.5\" – 2\" IDF"],
      ["Working pressure", "6 bar max"],
      ["Temp differential", "Up to 35°C"],
      ["Flow rate", "To project specification"],
      ["Certification", "CE marked"],
      ["Lead time", "4 – 6 weeks"],
    ],
    standaloneLabel: "PRODUCT · Heat recovery unit — standalone",
    drawing1: "DRAWING · Heat recovery — flow schematic",
    drawing2: "DRAWING · Plate pack — detail",
    drawing3: "DRAWING · Installation layout — heat recovery",
    installedLabel: "INSTALLED · Heat recovery unit, dairy farm, Co. Limerick",
    installedCaption: "Heat recovery unit recovering waste heat from two direct-expansion tanks, Co. Limerick.",
  },
  {
    slug: "used-equipment",
    n: "06",
    name: "Used Equipment",
    tagline: "Factory-reconditioned dairy equipment, re-certified and warranted.",
    desc: "We buy, strip, inspect and recondition used milk cooling tanks and ancillary dairy equipment at our Cork facility. Every piece is assessed against EN13732 and offered with a 12-month warranty. A cost-effective route to Liscarroll quality for smaller operations or temporary capacity.",
    specs: [
      ["Inspection", "Full strip-down and report"],
      ["Recertification", "EN13732 where applicable"],
      ["Warranty", "12 months parts and labour"],
      ["Lead time", "2 – 4 weeks from stock"],
      ["Tank range", "500 L – 50,000 L"],
      ["Condition grades", "Grade A or Grade B"],
      ["Documentation", "Full service history supplied"],
      ["Availability", "Subject to current stock"],
    ],
    standaloneLabel: "PRODUCT · Reconditioned milk tank — polished, ready to ship",
    drawing1: "DRAWING · Inspection report — used tank",
    drawing2: "DRAWING · Recondition checklist — standard",
    drawing3: "DRAWING · Certification documentation",
    installedLabel: "INSTALLED · Reconditioned tank, small dairy, Co. Cork",
    installedCaption: "Grade-A reconditioned 2,000 L tank, re-certified and installed, Co. Cork.",
  },
];

const pSlug = window.__FARMING_PRODUCT_SLUG || "milk-cooling-tanks";
const product = FARMING_PRODUCTS.find((p) => p.slug === pSlug) || FARMING_PRODUCTS[0];
const pIdx = FARMING_PRODUCTS.findIndex((p) => p.slug === pSlug);
const prevP = FARMING_PRODUCTS[(pIdx - 1 + FARMING_PRODUCTS.length) % FARMING_PRODUCTS.length];
const nextP = FARMING_PRODUCTS[(pIdx + 1) % FARMING_PRODUCTS.length];

document.title = `${product.name} — Farming — Liscarroll Engineering`;

const Hero = () => (
  <section style={{ background: TOKENS.white, borderBottom: `1px solid ${TOKENS.hairline}` }}>
    <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 32px" }}>
      <FadeUp>
        <div style={{ paddingTop: 60, fontFamily: "Inter, sans-serif", fontSize: 12, color: TOKENS.body, letterSpacing: "0.10em", textTransform: "uppercase" }}>
          <a href="industries.html" style={{ color: TOKENS.body, textDecoration: "none" }}>Industries</a>
          <span style={{ margin: "0 10px", color: TOKENS.brushed }}>/</span>
          <a href="industry-farming.html" style={{ color: TOKENS.body, textDecoration: "none" }}>Farming</a>
          <span style={{ margin: "0 10px", color: TOKENS.brushed }}>/</span>
          <span style={{ color: TOKENS.navy }}>{product.name}</span>
        </div>
      </FadeUp>

      <div className="ind-detail-grid" style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 80, alignItems: "center", padding: "60px 0 100px" }}>
        <div>
          <FadeUp><Kicker style={{ marginBottom: 28 }}>Farming · {product.n} / 06</Kicker></FadeUp>
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
              <a href="contact.html" style={ctaPrimary}>Request a quote</a>
              <a href="contact.html" style={ctaSecondary}>Request spec sheet</a>
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
          <a href="contact.html" style={ctaSecondary}>Request full drawing pack →</a>
        </FadeUp>
      </div>
      <div className="product-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
        <FadeUp><Placeholder label={product.drawing1} ratio="3/4" tone="light" /></FadeUp>
        <FadeUp delay={80}><Placeholder label={product.drawing2} ratio="3/4" tone="light" /></FadeUp>
        <FadeUp delay={160}><Placeholder label={product.drawing3} ratio="3/4" tone="light" /></FadeUp>
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
        <Placeholder label={product.installedLabel} ratio="21/9" tone="steel" />
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
        <a href={`product-farming-${prevP.slug}.html`} style={{ display: "block", padding: "40px 32px 40px 0", borderRight: `1px solid ${TOKENS.hairline}`, textDecoration: "none" }}>
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.20em", textTransform: "uppercase", color: TOKENS.body }}>← Previous product</span>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 40, letterSpacing: "0.02em", color: TOKENS.navy, marginTop: 12, textTransform: "uppercase", lineHeight: 1 }}>{prevP.name}</div>
        </a>
        <a href={`product-farming-${nextP.slug}.html`} style={{ display: "block", padding: "40px 0 40px 32px", textDecoration: "none", textAlign: "right" }}>
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.20em", textTransform: "uppercase", color: TOKENS.body }}>Next product →</span>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 40, letterSpacing: "0.02em", color: TOKENS.navy, marginTop: 12, textTransform: "uppercase", lineHeight: 1 }}>{nextP.name}</div>
        </a>
      </div>
      <div style={{ marginTop: 40, textAlign: "center" }}>
        <a href="industry-farming.html" style={{ fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 500, color: TOKENS.body, textDecoration: "none", letterSpacing: "0.10em", textTransform: "uppercase" }}>
          ← Back to all farming products
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
      <Drawings />
      <Specifications />
      <Installed />
      <NextPrev />
    </main>
    <Footer />
  </PageFade>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
