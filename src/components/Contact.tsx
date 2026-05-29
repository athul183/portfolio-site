import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { FadeIn, SectionLabel } from "./ui";
import { personalInfo } from "../data/portfolio";

const GithubIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

type FormState = { name: string; email: string; message: string };

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const sub  = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:${personalInfo.email}?subject=${sub}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const inputStyle = (field: string): React.CSSProperties => ({
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: `1px solid ${focused === field ? "var(--accent)" : "var(--border)"}`,
    color: "var(--text)",
    fontFamily: "var(--font-body)",
    fontSize: "0.95rem",
    padding: "0.875rem 0",
    outline: "none",
    transition: "border-color 0.25s",
    resize: "none",
  });

  return (
    <section id="contact" style={{ position: "relative" }}>
      {/* Background accent */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 55% at 50% 100%, rgba(139,92,246,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="c" style={{ position: "relative", zIndex: 1 }}>
        <SectionLabel num="05" label="Contact" />

        {/* Header */}
        <FadeIn>
          <div style={{ marginBottom: "3rem" }}>
            <h2
              style={{
                fontFamily: "'Geist', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.8rem, 7vw, 6.5rem)",
                letterSpacing: "-0.03em",
                lineHeight: 0.95,
                textTransform: "uppercase",
                color: "var(--text)",
                marginBottom: "1.25rem",
              }}
            >
              Let's{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-light) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Talk
              </span>
            </h2>
            <p
              style={{
                color: "var(--text-2)",
                fontSize: "1rem",
                maxWidth: "32rem",
                lineHeight: 1.75,
                fontFamily: "var(--font-body)",
              }}
            >
              Have a project in mind or want to discuss opportunities? Feel free to reach out — I'd love to connect.
            </p>
          </div>
        </FadeIn>

        {/* Big email link block */}
        <FadeIn delay={0.08}>
          <a
            href={`mailto:${personalInfo.email}`}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
              padding: "1.5rem 2rem",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-lg)",
              marginBottom: "4rem",
              textDecoration: "none",
              transition: "border-color 0.25s, box-shadow 0.25s",
              flexWrap: "wrap",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border-accent)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 30px var(--accent-glow)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--text-3)",
                  fontFamily: "var(--font-body)",
                  marginBottom: "0.4rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                }}
              >
                <Mail size={11} /> Email me at
              </p>
              <span className="contact-email">{personalInfo.email}</span>
            </div>
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "10px",
                background: "var(--accent-subtle)",
                border: "1px solid var(--border-accent)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--accent-light)",
                flexShrink: 0,
                transition: "background 0.2s",
              }}
            >
              <ArrowRight size={16} />
            </div>
          </a>
        </FadeIn>

        {/* Two column: contact info + form */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "5rem",
            alignItems: "start",
            borderTop: "1px solid var(--border)",
            paddingTop: "3rem",
          }}
        >
          {/* Contact info panel */}
          <FadeIn direction="left">
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <p
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--text-3)",
                  fontFamily: "var(--font-body)",
                  marginBottom: "0.25rem",
                }}
              >
                Quick Contact
              </p>

              {/* Contact info cards */}
              {[
                {
                  icon: <Phone size={14} />,
                  label: "Phone",
                  value: personalInfo.phone,
                  href: `tel:${personalInfo.phone}`,
                  color: "#8b5cf6",
                },
                {
                  icon: <MapPin size={14} />,
                  label: "Location",
                  value: personalInfo.location,
                  href: undefined,
                  color: "#10B981",
                },
              ].map(({ icon, label, value, href, color }) => (
                <div
                  key={label}
                  style={{
                    padding: "1rem 1.25rem",
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.875rem",
                    transition: "border-color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLDivElement).style.borderColor = `${color}30`)
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)")
                  }
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "9px",
                      background: `${color}12`,
                      border: `1px solid ${color}25`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: color,
                      flexShrink: 0,
                    }}
                  >
                    {icon}
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: "0.65rem",
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "var(--text-3)",
                        fontFamily: "var(--font-body)",
                        marginBottom: "0.15rem",
                      }}
                    >
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        style={{
                          fontSize: "0.88rem",
                          fontWeight: 600,
                          color: "var(--text)",
                          fontFamily: "var(--font-body)",
                          textDecoration: "none",
                          transition: "color 0.2s",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-light)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text)")}
                      >
                        {value}
                      </a>
                    ) : (
                      <p
                        style={{
                          fontSize: "0.88rem",
                          fontWeight: 600,
                          color: "var(--text)",
                          fontFamily: "var(--font-body)",
                        }}
                      >
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}

              {/* Social links */}
              <div>
                <p
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--text-3)",
                    fontFamily: "var(--font-body)",
                    marginBottom: "0.75rem",
                  }}
                >
                  Find me on
                </p>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  {[
                    { icon: <GithubIcon size={15} />, href: personalInfo.github, label: "GitHub" },
                    { icon: <LinkedinIcon size={15} />, href: personalInfo.linkedin, label: "LinkedIn" },
                  ].map(({ icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="btn btn-ghost"
                      style={{ padding: "0.6rem 0.875rem", gap: "0.45rem" }}
                    >
                      {icon}
                      {label}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Contact form */}
          <FadeIn direction="right" delay={0.1}>
            <form
              onSubmit={handleSubmit}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-xl)",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.75rem",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Form bg glow */}
              <div
                style={{
                  position: "absolute",
                  top: -40,
                  right: -40,
                  width: 160,
                  height: 160,
                  borderRadius: "50%",
                  background: "var(--accent)",
                  filter: "blur(60px)",
                  opacity: 0.05,
                  pointerEvents: "none",
                }}
              />

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1.5rem",
                }}
              >
                {(["name", "email"] as const).map((k) => (
                  <div key={k}>
                    <label
                      htmlFor={k}
                      style={{
                        display: "block",
                        fontSize: "0.68rem",
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: focused === k ? "var(--accent-light)" : "var(--text-3)",
                        fontFamily: "var(--font-body)",
                        marginBottom: "0.5rem",
                        transition: "color 0.2s",
                      }}
                    >
                      {k === "name" ? "Your Name" : "Email Address"}
                    </label>
                    <input
                      id={k}
                      type={k === "email" ? "email" : "text"}
                      placeholder={k === "name" ? "John Doe" : "john@example.com"}
                      required
                      value={form[k]}
                      onChange={(e) => setForm((p) => ({ ...p, [k]: e.target.value }))}
                      onFocus={() => setFocused(k)}
                      onBlur={() => setFocused(null)}
                      style={inputStyle(k)}
                    />
                  </div>
                ))}
              </div>

              <div>
                <label
                  htmlFor="message"
                  style={{
                    display: "block",
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: focused === "message" ? "var(--accent-light)" : "var(--text-3)",
                    fontFamily: "var(--font-body)",
                    marginBottom: "0.5rem",
                    transition: "color 0.2s",
                  }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  required
                  value={form.message}
                  onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  style={inputStyle("message")}
                />
              </div>

              <div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn btn-accent"
                  style={{ width: "100%", justifyContent: "center", padding: "1rem" }}
                >
                  {sent ? (
                    <><CheckCircle size={16} /><span>Message Sent!</span></>
                  ) : (
                    <><Send size={16} /><span>Send Message</span></>
                  )}
                </motion.button>
              </div>
            </form>
          </FadeIn>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact .c > div:last-child { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          #contact .contact-email { font-size: clamp(1.2rem, 5vw, 2rem) !important; }
        }
      `}</style>
    </section>
  );
}
