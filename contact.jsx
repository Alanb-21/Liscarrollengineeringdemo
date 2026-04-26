/* global React, ReactDOM */

const Hero = () => (
  <section style={{ background: TOKENS.white, borderBottom: `1px solid ${TOKENS.hairline}`, padding: "100px 0 80px" }}>
    <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 32px" }}>
      <FadeUp><Kicker style={{ marginBottom: 32 }}>Start a project</Kicker></FadeUp>
      <FadeUp delay={120}>
        <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(56px, 8vw, 120px)", lineHeight: 0.92, letterSpacing: "0.02em", color: TOKENS.navy, margin: 0, textTransform: "uppercase", maxWidth: 1100 }}>
          Tell us what you<br />need to build.
        </h1>
      </FadeUp>
      <FadeUp delay={220}>
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: 18, lineHeight: 1.55, color: TOKENS.body, maxWidth: 640, marginTop: 32 }}>
          Initial consultations are direct, free, and on the phone. Or fill the form and we will be back within one working day.
        </p>
      </FadeUp>
    </div>
  </section>
);

const ContactGrid = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", industry: "", message: "" });
  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  const inputStyle = {
    width: "100%",
    border: `0.5px solid ${TOKENS.brushed}`,
    background: "transparent",
    padding: "12px 16px",
    fontFamily: "Inter, sans-serif",
    fontSize: 15,
    color: TOKENS.navy,
    outline: "none",
    borderRadius: 12,
    boxSizing: "border-box",
  };
  const labelStyle = {
    fontFamily: "Inter, sans-serif",
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: "0.20em",
    textTransform: "uppercase",
    color: TOKENS.body,
    display: "block",
    marginBottom: 4,
  };

  return (
    <section style={{ background: TOKENS.white, padding: "60px 0 120px", borderBottom: `1px solid ${TOKENS.hairline}` }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 32px" }}>
        <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, alignItems: "start" }}>
          <FadeUp>
            <div>
              <Kicker style={{ marginBottom: 28 }}>Direct lines</Kicker>
              <div style={{ borderTop: `1px solid ${TOKENS.hairline}`, marginTop: 32 }}>
                {[
                  ["Phone", "+353 (0)22 48200", "tel:+35302248200"],
                  ["Email", "info@liscarrollengineering.ie", "mailto:info@liscarrollengineering.ie"],
                  ["Address", <>Rockspring, Liscarroll<br />Mallow, Co. Cork</>, null],
                  ["Hours", "Mon–Fri, 9am–5pm", null],
                ].map(([label, val, href], i) => (
                  <div key={label} style={{ padding: "24px 0", borderBottom: `1px solid ${TOKENS.hairline}` }}>
                    <div style={labelStyle}>{label}</div>
                    {href ? (
                      <a href={href} style={{ fontFamily: "Inter, sans-serif", fontSize: 17, color: TOKENS.navy, textDecoration: "none", fontWeight: 500 }}>{val}</a>
                    ) : (
                      <div style={{ fontFamily: "Inter, sans-serif", fontSize: 17, color: TOKENS.navy, lineHeight: 1.5, fontWeight: 500 }}>{val}</div>
                    )}
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 40 }}>
                <Placeholder label="MAP · Rockspring, Liscarroll, Co. Cork" ratio="4/3" tone="paper" />
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={120}>
            <div>
              <Kicker style={{ marginBottom: 28 }}>Project enquiry</Kicker>
              {submitted ? (
                <div style={{
                  padding: "60px 40px",
                  border: `0.5px solid ${TOKENS.brushed}`,
                  borderRadius: 18,
                  marginTop: 32,
                  textAlign: "center",
                }}>
                  <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 56, letterSpacing: "0.02em", color: TOKENS.navy, margin: 0, textTransform: "uppercase", lineHeight: 1 }}>
                    Thank you.
                  </h3>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: 16, color: TOKENS.body, marginTop: 20, marginBottom: 0 }}>
                    We will be back to you within one working day.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} style={{ marginTop: 32 }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginBottom: 8 }}>
                    <div>
                      <label style={labelStyle}>Name</label>
                      <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Email</label>
                      <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} style={inputStyle} />
                    </div>
                  </div>
                  <div style={{ marginBottom: 8 }}>
                    <label style={labelStyle}>Company</label>
                    <input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} style={inputStyle} />
                  </div>
                  <div style={{ marginBottom: 24, marginTop: 24 }}>
                    <label style={labelStyle}>Industry</label>
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 12 }}>
                      {INDUSTRIES.map((ind) => (
                        <button
                          key={ind.slug}
                          type="button"
                          onClick={() => setForm({ ...form, industry: ind.slug })}
                          style={{
                            background: form.industry === ind.slug ? TOKENS.navy : "transparent",
                            color: form.industry === ind.slug ? "#fff" : TOKENS.navy,
                            border: `0.5px solid ${form.industry === ind.slug ? TOKENS.navy : TOKENS.brushed}`,
                            padding: "10px 16px",
                            fontFamily: "Inter, sans-serif",
                            fontSize: 12,
                            fontWeight: 500,
                            letterSpacing: "0.05em",
                            textTransform: "uppercase",
                            cursor: "pointer",
                            borderRadius: 9999,
                            transition: "all 200ms ease",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 6,
                          }}
                        >
                          <span style={{ width: 5, height: 5, borderRadius: "50%", background: form.industry === ind.slug ? "#fff" : TOKENS.steel, flexShrink: 0 }} />
                          {ind.name}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div style={{ marginBottom: 32 }}>
                    <label style={labelStyle}>Tell us about your project</label>
                    <textarea
                      rows="5"
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      style={{ ...inputStyle, resize: "vertical", padding: "12px 16px" }}
                    />
                  </div>
                  <button type="submit" style={{ ...ctaPrimary, border: "none", cursor: "pointer", fontSize: 14 }}>
                    Send enquiry →
                  </button>
                </form>
              )}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
};

const App = () => (
  <PageFade>
    <Nav current="contact.html" />
    <main>
      <Hero />
      <ContactGrid />
    </main>
    <Footer />
  </PageFade>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
