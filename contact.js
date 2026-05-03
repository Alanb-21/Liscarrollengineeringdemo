/* global React, ReactDOM */

const Hero = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: TOKENS.white,
    borderBottom: `1px solid ${TOKENS.hairline}`,
    padding: "100px 0 80px"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1440,
    margin: "0 auto",
    padding: "0 32px"
  }
}, /*#__PURE__*/React.createElement(FadeUp, null, /*#__PURE__*/React.createElement(Kicker, {
  style: {
    marginBottom: 32
  }
}, "Start a project")), /*#__PURE__*/React.createElement(FadeUp, {
  delay: 120
}, /*#__PURE__*/React.createElement("h1", {
  style: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: "clamp(56px, 8vw, 120px)",
    lineHeight: 0.92,
    letterSpacing: "0.02em",
    color: TOKENS.navy,
    margin: 0,
    textTransform: "uppercase",
    maxWidth: 1100
  }
}, "Tell us what you", /*#__PURE__*/React.createElement("br", null), "need to build.")), /*#__PURE__*/React.createElement(FadeUp, {
  delay: 220
}, /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: "Inter, sans-serif",
    fontSize: 18,
    lineHeight: 1.55,
    color: TOKENS.body,
    maxWidth: 640,
    marginTop: 32
  }
}, "Initial consultations are direct, free, and on the phone. Or fill the form and we will be back within one working day."))));
const readQuery = () => {
  if (typeof window === "undefined") return {};
  try {
    const p = new URLSearchParams(window.location.search);
    return {
      industry: p.get("industry") || "",
      product: p.get("product") || ""
    };
  } catch {
    return {};
  }
};
const ContactGrid = () => {
  const initial = readQuery();
  const validIndustry = INDUSTRIES.find(i => i.slug === initial.industry) ? initial.industry : "";
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: validIndustry,
    product: initial.product || "",
    message: initial.product ? `I'd like to discuss ${initial.product.replace(/-/g, " ")}.\n\n` : "",
    company_website: "" // honeypot
  });
  const onSubmit = async e => {
    e.preventDefault();
    if (submitting) return;
    setError("");
    setSubmitting(true);
    try {
      const resp = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });
      const data = await resp.json().catch(() => ({}));
      if (!resp.ok) {
        setError(data.error || "Something went wrong. Please call +353 (0)22 48200.");
        setSubmitting(false);
        return;
      }
      setSubmitted(true);
      setSubmitting(false);
    } catch (err) {
      setError("Could not reach the server. Please call +353 (0)22 48200 or email info@liscarrollengineering.ie.");
      setSubmitting(false);
    }
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
    boxSizing: "border-box"
  };
  const labelStyle = {
    fontFamily: "Inter, sans-serif",
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: "0.20em",
    textTransform: "uppercase",
    color: TOKENS.body,
    display: "block",
    marginBottom: 4
  };
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: TOKENS.white,
      padding: "60px 0 120px",
      borderBottom: `1px solid ${TOKENS.hairline}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1440,
      margin: "0 auto",
      padding: "0 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "contact-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.4fr",
      gap: 80,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(FadeUp, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Kicker, {
    style: {
      marginBottom: 28
    }
  }, "Direct lines"), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: `1px solid ${TOKENS.hairline}`,
      marginTop: 32
    }
  }, [["Phone", "+353 (0)22 48200", "tel:+35302248200"], ["Email", "info@liscarrollengineering.ie", "mailto:info@liscarrollengineering.ie"], ["Address", /*#__PURE__*/React.createElement(React.Fragment, null, "Rockspring, Liscarroll", /*#__PURE__*/React.createElement("br", null), "Mallow, Co. Cork"), null], ["Hours", "Mon–Fri, 9am–5pm", null]].map(([label, val, href]) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      padding: "24px 0",
      borderBottom: `1px solid ${TOKENS.hairline}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: labelStyle
  }, label), href ? /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      fontFamily: "Inter, sans-serif",
      fontSize: 17,
      color: TOKENS.navy,
      textDecoration: "none",
      fontWeight: 500
    }
  }, val) : /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Inter, sans-serif",
      fontSize: 17,
      color: TOKENS.navy,
      lineHeight: 1.5,
      fontWeight: 500
    }
  }, val)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Placeholder, {
    label: "MAP \xB7 Rockspring, Liscarroll, Co. Cork",
    ratio: "4/3",
    tone: "paper"
  })))), /*#__PURE__*/React.createElement(FadeUp, {
    delay: 120
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Kicker, {
    style: {
      marginBottom: 28
    }
  }, "Project enquiry"), submitted ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "60px 40px",
      border: `0.5px solid ${TOKENS.brushed}`,
      borderRadius: 18,
      marginTop: 32,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "'Bebas Neue', sans-serif",
      fontSize: 56,
      letterSpacing: "0.02em",
      color: TOKENS.navy,
      margin: 0,
      textTransform: "uppercase",
      lineHeight: 1
    }
  }, "Thank you."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "Inter, sans-serif",
      fontSize: 16,
      color: TOKENS.body,
      marginTop: 20,
      marginBottom: 32
    }
  }, "Your enquiry is in. We will be back to you within one working day."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      justifyContent: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "case-studies.html",
    style: ctaSecondary
  }, "Read case studies"), /*#__PURE__*/React.createElement("a", {
    href: "tel:+35302248200",
    style: ctaPrimary
  }, "Or call us now"))) : /*#__PURE__*/React.createElement("form", {
    onSubmit: onSubmit,
    style: {
      marginTop: 32
    },
    noValidate: true
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: "-10000px",
      width: 1,
      height: 1,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "company_website"
  }, "Company website (leave blank)"), /*#__PURE__*/React.createElement("input", {
    id: "company_website",
    name: "company_website",
    type: "text",
    tabIndex: "-1",
    autoComplete: "off",
    value: form.company_website,
    onChange: e => setForm({
      ...form,
      company_website: e.target.value
    })
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 32,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "cf-name",
    style: labelStyle
  }, "Name"), /*#__PURE__*/React.createElement("input", {
    id: "cf-name",
    name: "name",
    autoComplete: "name",
    required: true,
    value: form.name,
    onChange: e => setForm({
      ...form,
      name: e.target.value
    }),
    style: inputStyle
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "cf-email",
    style: labelStyle
  }, "Email"), /*#__PURE__*/React.createElement("input", {
    id: "cf-email",
    name: "email",
    type: "email",
    autoComplete: "email",
    required: true,
    value: form.email,
    onChange: e => setForm({
      ...form,
      email: e.target.value
    }),
    style: inputStyle
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 32,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "cf-phone",
    style: labelStyle
  }, "Phone ", /*#__PURE__*/React.createElement("span", {
    style: {
      textTransform: "none",
      letterSpacing: 0,
      color: TOKENS.brushed
    }
  }, "(optional)")), /*#__PURE__*/React.createElement("input", {
    id: "cf-phone",
    name: "phone",
    type: "tel",
    autoComplete: "tel",
    value: form.phone,
    onChange: e => setForm({
      ...form,
      phone: e.target.value
    }),
    style: inputStyle
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "cf-company",
    style: labelStyle
  }, "Company"), /*#__PURE__*/React.createElement("input", {
    id: "cf-company",
    name: "company",
    autoComplete: "organization",
    value: form.company,
    onChange: e => setForm({
      ...form,
      company: e.target.value
    }),
    style: inputStyle
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    id: "cf-industry-label",
    style: labelStyle
  }, "Industry"), /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    "aria-labelledby": "cf-industry-label",
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      marginTop: 12
    }
  }, INDUSTRIES.map(ind => {
    const selected = form.industry === ind.slug;
    return /*#__PURE__*/React.createElement("button", {
      key: ind.slug,
      type: "button",
      role: "radio",
      "aria-checked": selected,
      "aria-pressed": selected,
      onClick: () => setForm({
        ...form,
        industry: selected ? "" : ind.slug
      }),
      style: {
        background: selected ? TOKENS.navy : "transparent",
        color: selected ? "#fff" : TOKENS.navy,
        border: `0.5px solid ${selected ? TOKENS.navy : TOKENS.brushed}`,
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
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 5,
        height: 5,
        borderRadius: "50%",
        background: selected ? "#fff" : TOKENS.steel,
        flexShrink: 0
      }
    }), ind.name);
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "cf-message",
    style: labelStyle
  }, "Tell us about your project"), /*#__PURE__*/React.createElement("textarea", {
    id: "cf-message",
    name: "message",
    rows: "5",
    required: true,
    value: form.message,
    onChange: e => setForm({
      ...form,
      message: e.target.value
    }),
    style: {
      ...inputStyle,
      resize: "vertical",
      padding: "12px 16px"
    }
  })), error && /*#__PURE__*/React.createElement("div", {
    role: "alert",
    style: {
      marginBottom: 20,
      padding: "12px 16px",
      borderRadius: 8,
      background: "#FEF2F2",
      border: "1px solid #FECACA",
      color: "#991B1B",
      fontFamily: "Inter, sans-serif",
      fontSize: 13.5,
      lineHeight: 1.5
    }
  }, error), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "submit",
    disabled: submitting,
    "aria-busy": submitting,
    style: {
      ...ctaPrimary,
      border: "none",
      cursor: submitting ? "default" : "pointer",
      fontSize: 14,
      opacity: submitting ? 0.7 : 1
    }
  }, submitting ? "Sending…" : "Send enquiry →"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "Inter, sans-serif",
      fontSize: 12,
      color: TOKENS.body,
      lineHeight: 1.5
    }
  }, "By submitting you agree to our", " ", /*#__PURE__*/React.createElement("a", {
    href: "privacy.html",
    style: {
      color: TOKENS.navy
    }
  }, "privacy policy"), "."))))))));
};
const App = () => /*#__PURE__*/React.createElement(PageFade, null, /*#__PURE__*/React.createElement(Nav, {
  current: "contact.html"
}), /*#__PURE__*/React.createElement("main", {
  id: "main"
}, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(ContactGrid, null)), /*#__PURE__*/React.createElement(Footer, null));
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));