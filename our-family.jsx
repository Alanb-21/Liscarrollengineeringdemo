/* global React, ReactDOM */

const TEAM = [
  { role: "Managing Director", bio: "Holds the long view: the workload, the standards and the team that delivers them.", joined: "1985" },
  { role: "Operations Director", bio: "Runs scheduling, supplier relations and the books — the engine room.", joined: "1996" },
  { role: "Head of Fabrication", bio: "Coded welder. Trains every new fabricator who comes through our doors.", joined: "2002" },
  { role: "Quality & Compliance Lead", bio: "ISO lead. If a weld leaves our shop, it has the sign-off of this desk.", joined: "2014" },
  { role: "Senior CNC Engineer", bio: "Two decades on 5-axis. Will out-precision any spec sheet you put in front of him.", joined: "2008" },
  { role: "Project Manager — Pharma & Food", bio: "Runs regulated-industry projects from quote to handover.", joined: "2019" },
  { role: "Senior Welder", bio: "Coded to EN ISO 9606. Mirror-finish specialist. Quiet. Brilliant.", joined: "2011" },
  { role: "Design Engineer", bio: "Takes napkin sketches and turns them into manufacturing drawings.", joined: "2021" },
];

const Hero = () => (
  <section style={{ background: TOKENS.white, borderBottom: `1px solid ${TOKENS.hairline}`, padding: "100px 0 80px" }}>
    <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 32px" }}>
      <FadeUp><Kicker style={{ marginBottom: 32 }}>The people who build it</Kicker></FadeUp>
      <FadeUp delay={120}>
        <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(56px, 8vw, 120px)", lineHeight: 0.92, letterSpacing: "0.02em", color: TOKENS.navy, margin: 0, textTransform: "uppercase", maxWidth: 1100 }}>
          Our team.
        </h1>
      </FadeUp>
      <FadeUp delay={220}>
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: 18, lineHeight: 1.55, color: TOKENS.body, maxWidth: 640, marginTop: 32 }}>
          The engineers, welders, fabricators and project managers behind every Liscarroll job. Most have been on this floor for a decade or more — the craft, the standards and the longevity are why projects land on schedule.
        </p>
      </FadeUp>
    </div>
  </section>
);

const TeamGrid = () => (
  <section style={{ background: TOKENS.white, padding: "100px 0", borderBottom: `1px solid ${TOKENS.hairline}` }}>
    <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 32px" }}>
      <div className="team-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
        {TEAM.map((p, i) => (
          <FadeUp key={p.role} delay={(i % 4) * 80}>
            <div>
              <Placeholder label={`PORTRAIT · ${p.role}`} ratio="3/4" tone={i % 2 === 0 ? "navy" : "steel"} style={{ borderRadius: 12 }} />
              <div style={{ paddingTop: 20 }}>
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 12,
                  fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 500,
                  letterSpacing: "0.15em", textTransform: "uppercase", color: TOKENS.steel,
                  borderRadius: 9999, padding: "6px 12px",
                  border: `0.5px solid ${TOKENS.hairline}`,
                }}>
                  <span style={{ width: 5, height: 5, borderRadius: "50%", background: TOKENS.steel, flexShrink: 0 }} />
                  Joined {p.joined}
                </div>
                <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 26, letterSpacing: "0.02em", color: TOKENS.navy, margin: "0 0 12px 0", textTransform: "uppercase", lineHeight: 1.05 }}>
                  {p.role}
                </h3>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13.5, lineHeight: 1.55, color: TOKENS.body, margin: 0 }}>
                  {p.bio}
                </p>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

const Standards = () => (
  <section style={{ background: TOKENS.navy, color: "#E8ECF1", padding: "120px 0" }}>
    <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 32px" }}>
      <div style={{ marginBottom: 72, maxWidth: 720 }}>
        <FadeUp><Kicker dark style={{ marginBottom: 28 }}>How we work</Kicker></FadeUp>
        <FadeUp delay={120}>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(40px, 5vw, 72px)", lineHeight: 0.95, letterSpacing: "0.02em", color: "#fff", margin: 0, textTransform: "uppercase" }}>
            The standards we hold each other to.
          </h2>
        </FadeUp>
      </div>
      <div className="cap-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", borderTop: "1px solid rgba(192,200,209,0.25)" }}>
        {[
          ["01", "Coded welders", "Every welder on-site is certified to international weld code. No exceptions, ever.", "EN ISO 9606"],
          ["02", "ISO accreditation", "Quality management verified to international standards. Auditable end-to-end.", "ISO 9001"],
          ["03", "AISI 304 default", "Food-grade stainless as our baseline. Higher grades on request and engineered for the job.", "EN13732"],
        ].map(([n, t, b, s], i, arr) => (
          <FadeUp key={n} delay={i * 80}>
            <div className="cap-cell" style={{
              padding: "48px 32px 48px 0",
              paddingLeft: i === 0 ? 0 : 32,
              borderRight: i === arr.length - 1 ? "none" : "1px solid rgba(192,200,209,0.25)",
              borderBottom: "1px solid rgba(192,200,209,0.25)",
            }}>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.20em", textTransform: "uppercase", color: "#9DBED5", marginBottom: 28 }}>{n}</div>
              <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 36, letterSpacing: "0.02em", color: "#fff", margin: "0 0 18px 0", textTransform: "uppercase", lineHeight: 1 }}>{t}</h3>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14.5, lineHeight: 1.65, color: "#9DBED5", margin: 0 }}>{b}</p>
              <div style={{ marginTop: 32, paddingTop: 20, borderTop: "1px solid rgba(192,200,209,0.25)", fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: 11, letterSpacing: "0.10em", color: "#9DBED5", textTransform: "uppercase" }}>{s}</div>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

const App = () => (
  <PageFade>
    <Nav current="our-family.html" />
    <main>
      <Hero />
      <TeamGrid />
      <Standards />
    </main>
    <Footer />
  </PageFade>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
