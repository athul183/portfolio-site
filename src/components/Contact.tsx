import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, MapPin, Phone } from "lucide-react";
import { FadeIn, SectionLabel } from "./ui";
import { personalInfo } from "../data/portfolio";

const GithubIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

type FormState = { name: string; email: string; message: string };

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const sub  = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:${personalInfo.email}?subject=${sub}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact">
      <div className="c">
        <SectionLabel num="05" label="Contact" />

        {/* Giant "Let's Talk" */}
        <FadeIn>
          <div style={{ marginBottom: "4rem" }}>
            <h2
              style={{
                fontFamily: "'Geist', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(3rem, 8vw, 7rem)",
                letterSpacing: "-0.03em",
                lineHeight: 0.95,
                textTransform: "uppercase",
                color: "var(--text)",
                marginBottom: "1.5rem",
              }}
            >
              Let's{" "}
              <span style={{ color: "var(--accent)" }}>Talk</span>
            </h2>
            <p style={{ color: "var(--text-2)", fontSize: "1rem", maxWidth: "30rem", lineHeight: 1.7 }}>
              Have a project in mind or want to discuss opportunities? Feel free to reach out — I'd love to connect.
            </p>
          </div>
        </FadeIn>

        {/* Big email link */}
        <FadeIn delay={0.08}>
          <div style={{ marginBottom: "4rem" }}>
            <p className="caption" style={{ color: "var(--text-3)", marginBottom: "0.75rem" }}>
              Email me at
            </p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="contact-email"
            >
              {personalInfo.email}
            </a>
          </div>
        </FadeIn>

        {/* Two column: quick links + form */}
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
          {/* Quick info */}
          <FadeIn direction="left">
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                { icon: <Phone size={13} />,   label: "Phone",    value: personalInfo.phone,    href: `tel:${personalInfo.phone}` },
                { icon: <MapPin size={13} />,  label: "Location", value: personalInfo.location,  href: undefined },
              ].map(({ icon, label, value, href }) => (
                <div key={label}>
                  <p className="caption" style={{ color: "var(--text-3)", marginBottom: "0.25rem", display: "flex", alignItems: "center", gap: "0.35rem" }}>
                    {icon}{label}
                  </p>
                  {href ? (
                    <a href={href} style={{ color: "var(--text)", fontSize: "0.95rem", fontWeight: 500, textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={(e) => e.currentTarget.style.color = "var(--accent)"}
                      onMouseLeave={(e) => e.currentTarget.style.color = "var(--text)"}
                    >{value}</a>
                  ) : (
                    <p style={{ color: "var(--text)", fontSize: "0.95rem", fontWeight: 500 }}>{value}</p>
                  )}
                </div>
              ))}

              {/* Social */}
              <div>
                <p className="caption" style={{ color: "var(--text-3)", marginBottom: "0.75rem" }}>Find me on</p>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  {[
                    { icon: <GithubIcon size={15} />,   href: personalInfo.github,            label: "GitHub"   },
                    { icon: <LinkedinIcon size={15} />, href: personalInfo.linkedin,          label: "LinkedIn" },
                  ].map(({ icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="btn btn-ghost"
                      style={{ padding: "0.625rem 0.875rem", gap: "0.45rem" }}
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
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "2rem",
                }}
              >
                {(["name","email"] as const).map((k) => (
                  <div key={k}>
                    <label
                      htmlFor={k}
                      className="caption"
                      style={{ display: "block", marginBottom: "0.5rem", color: "var(--text-3)" }}
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
                      className="input"
                    />
                  </div>
                ))}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="caption"
                  style={{ display: "block", marginBottom: "0.5rem", color: "var(--text-3)" }}
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
                  className="input"
                />
              </div>

              <div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn btn-accent"
                >
                  {sent ? (
                    <><CheckCircle size={14} /><span>Message Sent!</span></>
                  ) : (
                    <><Send size={14} /><span>Send Message</span></>
                  )}
                </motion.button>
              </div>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
