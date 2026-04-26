/* global React, ReactDOM */
const {
  TOKENS,
  FadeUp,
  PageFade,
  Placeholder,
  Kicker,
  ctaPrimary,
  ctaSecondary,
  Nav,
  Footer,
  INDUSTRIES
} = window;
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
const ContactGrid = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    industry: "",
    message: ""
  });
  const onSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };
  const inputStyle = {
    width: "100%",
    border: "none",
    borderBottom: `0.5px solid ${TOKENS.brushed}`,
    background: "transparent",
    padding: "14px 0",
    fontFamily: "Inter, sans-serif",
    fontSize: 15,
    color: TOKENS.navy,
    outline: "none"
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
  }, [["Phone", "+353 (0)22 48200", "tel:+35302248200"], ["Email", "info@liscarrollengineering.ie", "mailto:info@liscarrollengineering.ie"], ["Address", /*#__PURE__*/React.createElement(React.Fragment, null, "Rockspring, Liscarroll", /*#__PURE__*/React.createElement("br", null), "Mallow, Co. Cork"), null], ["Hours", "Mon–Fri, 9am–5pm", null]].map(([label, val, href], i) => /*#__PURE__*/React.createElement("div", {
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
      marginTop: 32,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h3", {
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
      marginBottom: 0
    }
  }, "We will be back to you within one working day.")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: onSubmit,
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 32,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "Name"), /*#__PURE__*/React.createElement("input", {
    required: true,
    value: form.name,
    onChange: e => setForm({
      ...form,
      name: e.target.value
    }),
    style: inputStyle
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "Email"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    required: true,
    value: form.email,
    onChange: e => setForm({
      ...form,
      email: e.target.value
    }),
    style: inputStyle
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "Company"), /*#__PURE__*/React.createElement("input", {
    value: form.company,
    onChange: e => setForm({
      ...form,
      company: e.target.value
    }),
    style: inputStyle
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 24,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "Industry"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      marginTop: 12
    }
  }, INDUSTRIES.map(ind => /*#__PURE__*/React.createElement("button", {
    key: ind.slug,
    type: "button",
    onClick: () => setForm({
      ...form,
      industry: ind.slug
    }),
    style: {
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
      borderRadius: 4,
      transition: "all 200ms ease"
    }
  }, ind.name)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "Tell us about your project"), /*#__PURE__*/React.createElement("textarea", {
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
      padding: "14px 0"
    }
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    style: {
      ...ctaPrimary,
      border: "none",
      cursor: "pointer",
      fontSize: 14
    }
  }, "Send enquiry \u2192")))))));
};
const App = () => /*#__PURE__*/React.createElement(PageFade, null, /*#__PURE__*/React.createElement(Nav, {
  current: "contact.html"
}), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(ContactGrid, null)), /*#__PURE__*/React.createElement(Footer, null));
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));