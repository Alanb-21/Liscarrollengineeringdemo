/* global React */
const { useState, useEffect, useRef } = React;

// =========================================================================
// DESIGN TOKENS
// =========================================================================
const TOKENS = {
  white: "#FFFFFF",
  navy: "#0A1628",
  body: "#4A5568",
  steel: "#2E86AB",
  hairline: "#ECEEF1",
  brushed: "#C0C8D1",
  paper: "#FAFAFA",
};

// =========================================================================
// FADE-UP — IntersectionObserver-driven scroll reveal
// =========================================================================
const FadeUp = ({ children, delay = 0, y = 24, as = "div", style = {}, ...rest }) => {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  const Tag = as;
  return (
    <Tag
      ref={ref}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : `translateY(${y}px)`,
        transition: `opacity 700ms cubic-bezier(.2,.7,.2,1) ${delay}ms, transform 800ms cubic-bezier(.2,.7,.2,1) ${delay}ms`,
        willChange: "opacity, transform",
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

// =========================================================================
// PAGE FADE — wraps a page, fades content in on mount, intercepts internal
// link clicks to fade out before navigation.
// =========================================================================
const PageFade = ({ children }) => {
  const [state, setState] = useState("entering"); // entering -> entered -> leaving
  const navTimeout = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setState("entered"), 30);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      // Find anchor
      let el = e.target;
      while (el && el.tagName !== "A") el = el.parentElement;
      if (!el) return;
      const href = el.getAttribute("href");
      if (!href) return;
      // skip external, hashes, mailto, tel, target=_blank
      if (
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        el.target === "_blank" ||
        /^https?:\/\//.test(href)
      )
        return;
      // skip if same page
      const dest = href.split("#")[0];
      if (!dest || dest === location.pathname.split("/").pop()) return;

      e.preventDefault();
      setState("leaving");
      clearTimeout(navTimeout.current);
      navTimeout.current = setTimeout(() => {
        location.href = href;
      }, 320);
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <div
      style={{
        opacity: state === "entered" ? 1 : 0,
        transform: state === "entered" ? "translateY(0)" : "translateY(8px)",
        transition: "opacity 380ms cubic-bezier(.2,.7,.2,1), transform 380ms cubic-bezier(.2,.7,.2,1)",
        minHeight: "100vh",
      }}
    >
      {children}
    </div>
  );
};

// =========================================================================
// PLACEHOLDER IMAGE — striped SVG with monospace label
// =========================================================================
const Placeholder = ({ label, ratio = "4/3", tone = "navy", style = {} }) => {
  const tones = {
    navy: { bg: "#0A1628", stripe: "#15243B", text: "#8AA0BD" },
    steel: { bg: "#1B3A52", stripe: "#234862", text: "#9DBED5" },
    light: { bg: "#ECEEF1", stripe: "#E1E5EA", text: "#6B7785" },
    paper: { bg: "#F4F5F7", stripe: "#EAECEF", text: "#6B7785" },
  };
  const t = tones[tone] || tones.navy;
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: ratio,
        background: t.bg,
        backgroundImage: `repeating-linear-gradient(135deg, ${t.bg} 0 14px, ${t.stripe} 14px 28px)`,
        overflow: "hidden",
        ...style,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "flex-end",
          padding: "20px 22px",
        }}
      >
        <span
          style={{
            fontFamily: "'JetBrains Mono', ui-monospace, monospace",
            fontSize: 11,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: t.text,
            background: "rgba(0,0,0,0.18)",
            padding: "5px 9px",
            borderRadius: 2,
          }}
        >
          {label}
        </span>
      </div>
    </div>
  );
};

// =========================================================================
// KICKER
// =========================================================================
const Kicker = ({ children, dark = false, style = {} }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 12, ...style }}>
    <span style={{ display: "inline-block", width: 22, height: 1, background: TOKENS.steel }} />
    <span
      style={{
        fontFamily: "Inter, sans-serif",
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: "0.20em",
        textTransform: "uppercase",
        color: dark ? "#9DBED5" : TOKENS.steel,
      }}
    >
      {children}
    </span>
  </div>
);

// =========================================================================
// CTA STYLES
// =========================================================================
const ctaPrimary = {
  display: "inline-block",
  fontFamily: "Inter, sans-serif",
  fontSize: 14,
  fontWeight: 500,
  background: TOKENS.navy,
  color: "#fff",
  padding: "16px 28px",
  borderRadius: 4,
  textDecoration: "none",
  letterSpacing: "0.02em",
};
const ctaSecondary = {
  display: "inline-block",
  fontFamily: "Inter, sans-serif",
  fontSize: 14,
  fontWeight: 500,
  background: TOKENS.white,
  color: TOKENS.navy,
  padding: "16px 28px",
  borderRadius: 4,
  textDecoration: "none",
  letterSpacing: "0.02em",
  border: `0.5px solid ${TOKENS.brushed}`,
};

// =========================================================================
// LOGO
// =========================================================================
const Logo = ({ height = 40, dark = false }) => (
  <a href="index.html" style={{ display: "inline-flex", alignItems: "center", textDecoration: "none" }}>
    <img
      src="assets/liscarroll-logo.png"
      alt="Liscarroll Engineering"
      style={{
        height,
        width: "auto",
        display: "block",
        filter: dark ? "brightness(1.05)" : "none",
      }}
    />
  </a>
);

// =========================================================================
// NAV LINKS
// =========================================================================
const NAV_LINKS = [
  { label: "Industries", href: "industries.html" },
  { label: "Our Family", href: "our-family.html" },
  { label: "Case Studies", href: "case-studies.html" },
  { label: "Our Heritage", href: "our-heritage.html" },
  { label: "Contact", href: "contact.html" },
];

// =========================================================================
// NAV
// =========================================================================
const Nav = ({ current = "" }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(255,255,255,0.96)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          borderBottom: `0.5px solid ${scrolled ? TOKENS.brushed : TOKENS.hairline}`,
          transition: "border-color 200ms ease",
        }}
      >
        <div
          style={{
            maxWidth: 1440,
            margin: "0 auto",
            padding: "0 32px",
            height: 84,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Logo height={44} />

          <nav className="desktop-nav" style={{ display: "flex", gap: 36, alignItems: "center" }}>
            {NAV_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 13.5,
                  fontWeight: 500,
                  color: TOKENS.navy,
                  textDecoration: "none",
                  letterSpacing: "0.01em",
                  position: "relative",
                  paddingBottom: 4,
                  borderBottom: current === item.href ? `1px solid ${TOKENS.steel}` : "1px solid transparent",
                  transition: "border-color 200ms ease",
                }}
                onMouseEnter={(e) => {
                  if (current !== item.href) e.currentTarget.style.borderBottomColor = TOKENS.brushed;
                }}
                onMouseLeave={(e) => {
                  if (current !== item.href) e.currentTarget.style.borderBottomColor = "transparent";
                }}
              >
                {item.label}
              </a>
            ))}
            <a href="contact.html" style={{ ...ctaPrimary, padding: "11px 22px", fontSize: 13 }}>
              Start a Project
            </a>
          </nav>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(true)}
            style={{
              display: "none",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: 8,
            }}
            aria-label="Open menu"
          >
            <div style={{ width: 22, height: 1, background: TOKENS.navy, marginBottom: 6 }} />
            <div style={{ width: 22, height: 1, background: TOKENS.navy, marginBottom: 6 }} />
            <div style={{ width: 14, height: 1, background: TOKENS.navy }} />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: TOKENS.white,
          zIndex: 100,
          padding: "32px",
          display: "flex",
          flexDirection: "column",
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "auto" : "none",
          transition: "opacity 240ms ease",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 48 }}>
          <Logo height={36} />
          <button
            onClick={() => setMobileOpen(false)}
            style={{
              background: "transparent",
              border: "none",
              fontSize: 28,
              color: TOKENS.navy,
              cursor: "pointer",
              lineHeight: 1,
            }}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>
        <nav style={{ display: "flex", flexDirection: "column" }}>
          {NAV_LINKS.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 36,
                letterSpacing: "0.03em",
                color: TOKENS.navy,
                textDecoration: "none",
                padding: "22px 0",
                borderTop: i === 0 ? `1px solid ${TOKENS.hairline}` : "none",
                borderBottom: `1px solid ${TOKENS.hairline}`,
                display: "flex",
                alignItems: "baseline",
                gap: 16,
              }}
            >
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, letterSpacing: "0.20em", color: TOKENS.steel }}>
                0{i + 1}
              </span>
              {item.label}
            </a>
          ))}
        </nav>
        <a href="contact.html" style={{ ...ctaPrimary, marginTop: "auto", textAlign: "center", padding: "18px 22px" }}>
          Start a Project
        </a>
      </div>
    </>
  );
};

// =========================================================================
// FOOTER
// =========================================================================
const Footer = () => (
  <footer style={{ background: TOKENS.navy, color: "#9DBED5", padding: "100px 0 40px" }}>
    <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 32px" }}>
      <div
        className="footer-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
          gap: 56,
          marginBottom: 80,
        }}
      >
        <div>
          <img
            src="assets/liscarroll-logo.png"
            alt="Liscarroll Engineering"
            style={{ height: 56, width: "auto", marginBottom: 24, filter: "brightness(1.05)" }}
          />
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 14,
              lineHeight: 1.6,
              color: "#9DBED5",
              maxWidth: 320,
              margin: 0,
            }}
          >
            Precision stainless steel manufacturing. Built in Cork since 1973. Trusted nationwide and exporting internationally.
          </p>
        </div>

        {[
          {
            title: "Industries",
            items: [
              ["Farming", "industry-farming.html"],
              ["Food & Beverage", "industry-food.html"],
              ["Pharmaceuticals", "industry-pharma.html"],
              ["Leisure", "industry-leisure.html"],
              ["Bespoke", "industry-bespoke.html"],
            ],
          },
          {
            title: "Company",
            items: [
              ["Our Family", "our-family.html"],
              ["Our Heritage", "our-heritage.html"],
              ["Case Studies", "case-studies.html"],
              ["Contact", "contact.html"],
            ],
          },
          {
            title: "Contact",
            items: [
              ["+353 (0)22 48200", "tel:+35302248200"],
              ["info@liscarrollengineering.ie", "mailto:info@liscarrollengineering.ie"],
              ["Rockspring, Liscarroll", null],
              ["Mallow, Co. Cork", null],
            ],
          },
        ].map((col) => (
          <div key={col.title}>
            <div
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.20em",
                textTransform: "uppercase",
                color: "#fff",
                marginBottom: 24,
              }}
            >
              {col.title}
            </div>
            {col.items.map(([label, href]) => {
              const style = {
                fontFamily: "Inter, sans-serif",
                fontSize: 13.5,
                lineHeight: 1.5,
                color: "#9DBED5",
                marginBottom: 10,
                textDecoration: "none",
                display: "block",
              };
              return href ? (
                <a key={label} href={href} style={style}>
                  {label}
                </a>
              ) : (
                <div key={label} style={style}>
                  {label}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div
        className="footer-bottom"
        style={{
          borderTop: "1px solid rgba(192,200,209,0.18)",
          paddingTop: 32,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <span style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#9DBED5", letterSpacing: "0.02em" }}>
          © 2026 Liscarroll Engineering Limited. All rights reserved.
        </span>
        <span
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 12,
            color: "#9DBED5",
            letterSpacing: "0.10em",
            textTransform: "uppercase",
          }}
        >
          Simply better by design
        </span>
      </div>
    </div>
  </footer>
);

// =========================================================================
// SHARED INDUSTRY DATA
// =========================================================================
const INDUSTRIES = [
  {
    n: "01",
    slug: "farming",
    name: "Farming",
    desc: "Milk cooling tanks, ice banks, silos and buffer tanks engineered to Irish dairy standards.",
    items: ["Milk Cooling Tanks", "Ice Builders", "Milk Silos", "Buffer Tanks", "Heat Recovery Units", "Used Equipment"],
    image: "Dairy plant — silo install",
    long:
      "Since 1973 we have built milk cooling tanks for Irish dairy farms — every one engineered to AISI 304 food-grade stainless steel and exceeding the EN13732 international cooling standard. Our farming range covers everything from a 1,000-litre direct-expansion tank for a single-herd setup to a full milk silo and buffer system for a co-op.",
    href: "industry-farming.html",
  },
  {
    n: "02",
    slug: "food",
    name: "Food & Beverage",
    desc: "Precision fabrications for butter producers, creameries and food exporters across Ireland.",
    items: ["Production Lines", "Vessels & Tanks", "Conveyor Systems", "Cleanroom Fittings", "Mixing Equipment", "Bespoke Process Lines"],
    image: "Polished production line",
    long:
      "Our food and beverage work spans butter producers, creameries, breweries and exporters. We design and fabricate full production lines — from the receiving tank to the packing-line conveyor — finished to a hygiene standard our food-industry clients audit regularly.",
    href: "industry-food.html",
  },
  {
    n: "03",
    slug: "pharma",
    name: "Pharmaceuticals",
    desc: "Cleanability, traceability and compliance for pharmaceutical manufacturers.",
    items: ["Passivated Vessels", "Sterile Pipework", "Mixing Tanks", "GMP Surfaces", "Validation Documentation", "Mirror-Polished Finishes"],
    image: "Pharma cleanroom vessel",
    long:
      "For pharmaceutical clients we deliver passivated vessels, sterile pipework and mirror-polished GMP surfaces — every job documented to the traceability standards your auditors expect. Material certificates, weld logs, surface-roughness reports — included as standard, not a paid add-on.",
    href: "industry-pharma.html",
  },
  {
    n: "04",
    slug: "leisure",
    name: "Leisure",
    desc: "Bespoke stainless steel pools, spas and wellness installations.",
    items: ["Plunge Pools", "Hot & Cold Tubs", "Spa Surrounds", "Wellness Suites", "Architectural Water Features", "Custom Finishes"],
    image: "Stainless plunge pool",
    long:
      "Stainless steel is the right material for water — it does not rot, it does not stain, it does not need replacing in a decade. Our leisure work covers plunge pools, hot and cold therapy tubs, full wellness suites and architectural water features — every weld polished to remove every visual seam.",
    href: "industry-leisure.html",
  },
  {
    n: "05",
    slug: "bespoke",
    name: "Bespoke",
    desc: "Anything outside the standard catalogue — including signature work for Croke Park.",
    items: ["Bar Installations", "Architectural", "Sculpture", "One-Offs", "Hospitality Fit-Out", "Public Realm"],
    image: "Bespoke bar fabrication",
    long:
      "If it can be drawn in stainless steel, it can be made in our Cork facility. Our bespoke work has been specified for Croke Park, hospitality fit-outs across Dublin, and one-off architectural pieces for projects we are not contractually allowed to name. Bring us a sketch — we will engineer the rest.",
    href: "industry-bespoke.html",
  },
];

// =========================================================================
// EXPORT GLOBALS
// =========================================================================
Object.assign(window, {
  TOKENS,
  FadeUp,
  PageFade,
  Placeholder,
  Kicker,
  ctaPrimary,
  ctaSecondary,
  Logo,
  Nav,
  Footer,
  INDUSTRIES,
});
