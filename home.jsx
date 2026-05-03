/* global React, ReactDOM */

// HERO — premium pass: real photo, ken burns, staggered load motion, anchored stat card.
// Unsplash hero image: a moody industrial / stainless plant frame.
// TODO: replace Unsplash URL with real Liscarroll plant-floor photography once shot.
const HERO_IMG = "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1600&q=80";
const HERO_IMG_FALLBACKS = [
  "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=80",
];

const HEADLINE_WORDS = [
  { text: "Stainless", lineEnd: false },
  { text: "Steel.",    lineEnd: true  },
  { text: "Built",     lineEnd: false },
  { text: "to",        lineEnd: false },
  { text: "Outlast.",  lineEnd: false },
];

const Hero = () => {
  const onImgError = (e) => {
    const tried = Number(e.currentTarget.dataset.tried || 0);
    if (tried < HERO_IMG_FALLBACKS.length) {
      e.currentTarget.dataset.tried = String(tried + 1);
      e.currentTarget.src = HERO_IMG_FALLBACKS[tried];
    }
  };
  return (
    <section style={{ background: TOKENS.white, borderBottom: `1px solid ${TOKENS.hairline}`, position: "relative" }}>
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
            <div className="hero-anim hero-anim-eyebrow">
              <Kicker style={{ marginBottom: 32 }}>Est. 1973 · Liscarroll, Co. Cork</Kicker>
            </div>

            <h1
              className="hero-headline"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(56px, 8vw, 120px)",
                lineHeight: 0.92,
                letterSpacing: "0.02em",
                color: TOKENS.navy,
                margin: 0,
                textTransform: "uppercase",
                textWrap: "balance",
                WebkitTextWrap: "balance",
              }}
            >
              {HEADLINE_WORDS.map((w, i) => (
                <React.Fragment key={i}>
                  <span
                    className="hero-anim hero-anim-word"
                    style={{ display: "inline-block", animationDelay: `${400 + i * 60}ms` }}
                  >
                    {w.text}
                  </span>
                  {i < HEADLINE_WORDS.length - 1 && (w.lineEnd ? <br /> : " ")}
                </React.Fragment>
              ))}
            </h1>

            <p
              className="hero-anim hero-anim-body"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 17,
                lineHeight: 1.55,
                color: TOKENS.body,
                maxWidth: 460,
                marginTop: 36,
                marginBottom: 0,
              }}
            >
              Fifty years of precision stainless steel engineering for farming, food, pharma, leisure and bespoke. Built in Cork. Shipped worldwide.
            </p>

            <div className="hero-anim hero-anim-cta" style={{ display: "flex", gap: 14, marginTop: 40, flexWrap: "wrap" }}>
              <a href="contact.html" style={ctaPrimary}>Get a quote</a>
              <a href="case-studies.html" style={ctaSecondary}>View our work</a>
            </div>
          </div>

          <div style={{ position: "relative" }}>
            <div className="hero-image-wrap" style={{
              position: "relative",
              width: "100%",
              aspectRatio: "4/5",
              overflow: "hidden",
              borderRadius: 4,
              background: TOKENS.navy,
            }}>
              <img
                src={HERO_IMG}
                onError={onImgError}
                data-tried="0"
                alt="Stainless steel fabrication on the Liscarroll Engineering plant floor — sparks from a TIG weld"
                className="hero-anim hero-anim-image hero-image-kenburns"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  display: "block",
                }}
              />
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(180deg, rgba(10,22,40,0.40) 0%, rgba(10,22,40,0) 50%, rgba(10,22,40,0.20) 100%)",
                pointerEvents: "none",
              }} />

              {/* PLANT FLOOR caption tag — bottom-left of the image, hidden on mobile */}
              <div className="hero-caption" style={{
                position: "absolute",
                left: 24,
                bottom: 24,
                display: "flex",
                alignItems: "center",
                gap: 12,
                pointerEvents: "none",
              }}>
                <span style={{ display: "inline-block", width: 2, height: 14, background: TOKENS.steel }} />
                <span style={{
                  color: "rgba(255,255,255,0.8)",
                  fontFamily: "Inter, sans-serif",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}>
                  Plant Floor · Liscarroll
                </span>
              </div>
            </div>

            <div className="hero-badge hero-anim hero-anim-card" style={{
              position: "absolute",
              left: 0,
              bottom: 0,
              transform: "translate(-30%, 50%)",
              background: TOKENS.white,
              maxWidth: 280,
            }}>
              {/* Steel Blue accent square — top-left corner */}
              <span aria-hidden="true" style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: 4,
                height: 4,
                background: TOKENS.steel,
              }} />
              <div className="hero-badge-inner">
                <div className="hero-badge-num" style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  color: TOKENS.navy,
                  lineHeight: 1,
                  letterSpacing: "0.02em",
                }}>
                  <Stat value={50} suffix="+" duration={1600} />
                </div>
                <div className="hero-badge-label" style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  color: TOKENS.body,
                }}>
                  Years of stainless steel engineering, in continuous operation since 1973.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator — pulsing line, hidden on short viewports */}
      <div className="hero-scroll-indicator" aria-hidden="true">
        <span className="hero-scroll-line" />
        <span className="hero-scroll-square" />
      </div>
    </section>
  );
};

// TRUST STRIP — anonymised sectoral pills in a marquee. Replaces the
// previous wordmark stand-ins until permissioned client logos are in
// hand. The pills describe sectors and project types we've delivered for.
const TRUST_SECTORS = [
  "Ireland's largest dairy co-ops",
  "Food & beverage producers",
  "Pharma manufacturers",
  "Sports venues & hospitality",
  "Cleanroom & GMP clients",
  "Wellness & leisure brands",
  "Architectural fit-out",
  "National retailers",
];
const TrustStrip = () => (
  <section className="trust-strip" style={{
    background: TOKENS.white,
    borderBottom: `1px solid ${TOKENS.hairline}`,
  }}>
    <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 0" }}>
      <div style={{
        textAlign: "center",
        fontFamily: "Inter, sans-serif",
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: "#6B7785",
        marginBottom: 24,
        padding: "0 24px",
      }}>
        Fifty years of stainless steel for —
      </div>
      <Marquee items={TRUST_SECTORS} speed={42} gap={32} />
    </div>
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
              {[
                { kind: "stat", value: 38, suffix: "m", label: "Continuous run length" },
                { kind: "text", value: "AISI 304", label: "Food-grade stainless" },
                { kind: "stat", value: 12, suffix: " wks", label: "Designed to delivered" },
              ].map((s) => (
                <div key={s.label}>
                  <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 36, color: "#fff", letterSpacing: "0.02em", lineHeight: 1 }}>
                    {s.kind === "stat"
                      ? <Stat value={s.value} suffix={s.suffix} duration={1400} />
                      : s.value}
                  </div>
                  <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#9DBED5", marginTop: 8, lineHeight: 1.4 }}>{s.label}</div>
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
          <a href="contact.html" style={ctaPrimary}>Talk to engineering</a>
          <a href="tel:+35302248200" style={ctaSecondary}>+353 (0)22 48200</a>
        </div>
      </FadeUp>
    </div>
  </section>
);

// LOCATION MAP — gated by cookie consent. Until the visitor accepts cookies
// (or explicitly clicks "Show map"), we render a static placeholder and do
// not contact Google.
const LocationMap = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (getConsent() === "accepted") setLoaded(true);
    const onConsent = (e) => { if (e.detail === "accepted") setLoaded(true); };
    document.addEventListener("le:consent", onConsent);
    return () => document.removeEventListener("le:consent", onConsent);
  }, []);
  return (
    <section style={{ background: TOKENS.white, borderBottom: `1px solid ${TOKENS.hairline}` }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 32px 80px" }}>
        <FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 24, marginBottom: 32 }}>
            <Kicker>Find us</Kicker>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(36px, 4.5vw, 64px)", lineHeight: 0.95, letterSpacing: "0.02em", color: TOKENS.navy, margin: 0, textTransform: "uppercase" }}>
              Rockspring, Liscarroll, Co. Cork.
            </h2>
          </div>
        </FadeUp>
        <FadeUp delay={120}>
          <div style={{ position: "relative", width: "100%", paddingTop: "42%", border: `0.5px solid ${TOKENS.hairline}`, borderRadius: 12, overflow: "hidden", background: TOKENS.paper }}>
            {loaded ? (
              <iframe
                title="Liscarroll Engineering — Rockspring, Liscarroll, Co. Cork"
                src="https://www.google.com/maps?q=Liscarroll+Engineering,+Rockspring,+Liscarroll,+Co.+Cork,+Ireland&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
              />
            ) : (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  padding: 32,
                  background: "repeating-linear-gradient(135deg, #F4F5F7 0 14px, #EAECEF 14px 28px)",
                }}
              >
                <span style={{ fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: 11, letterSpacing: "0.20em", textTransform: "uppercase", color: "#6B7785", marginBottom: 16 }}>
                  Map · Google Maps embed
                </span>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: TOKENS.body, maxWidth: 460, lineHeight: 1.55, margin: "0 0 20px 0" }}>
                  This map is provided by Google and may set cookies on your device. Click below to load it.
                </p>
                <button
                  onClick={() => { setConsent("accepted"); setLoaded(true); }}
                  style={{ ...ctaPrimary, border: "none", cursor: "pointer", fontSize: 13 }}
                >
                  Show map
                </button>
                <a
                  href="https://www.google.com/maps?q=Liscarroll+Engineering,+Rockspring,+Liscarroll,+Co.+Cork,+Ireland"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginTop: 14, fontFamily: "Inter, sans-serif", fontSize: 12, color: TOKENS.body, letterSpacing: "0.10em", textTransform: "uppercase", textDecoration: "none" }}
                >
                  Or open in Google Maps →
                </a>
              </div>
            )}
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

const App = () => (
  <PageFade>
    <Nav current="" />
    <main id="main">
      <Hero />
      <TrustStrip />
      <IndustriesPreview />
      <CaseStudy />
      <ContactBand />
      <LocationMap />
    </main>
    <Footer />
  </PageFade>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
