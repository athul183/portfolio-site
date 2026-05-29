import { MapPin, Mail, Phone } from "lucide-react";
import { FadeIn, SectionLabel } from "./ui";
import { personalInfo } from "../data/portfolio";

const GithubIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const traits = [
  {
    label: "Mobile Development",
    detail: "Flutter · iOS · Android",
    icon: "📱",
    color: "#8b5cf6",
  },
  {
    label: "Cloud & DevOps",
    detail: "AWS · Jenkins · Docker · Grafana",
    icon: "☁️",
    color: "#00D4FF",
  },
  {
    label: "Web Development",
    detail: "React.js · TypeScript · .NET",
    icon: "🌐",
    color: "#10B981",
  },
];

export default function About() {
  return (
    <section id="about" style={{ position: "relative" }}>
      {/* Subtle background glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 55% 50% at 90% 50%, rgba(139,92,246,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="c" style={{ position: "relative", zIndex: 1 }}>
        <SectionLabel num="01" label="About Me" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "start",
          }}
        >
          {/* ── Left: headline + avatar card + chips ── */}
          <FadeIn direction="left">
            <h2
              style={{
                fontFamily: "'Geist', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.2rem, 4vw, 3.75rem)",
                letterSpacing: "-0.025em",
                lineHeight: 1.05,
                color: "var(--text)",
                textTransform: "uppercase",
                marginBottom: "2rem",
              }}
            >
              Crafting{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-light) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                digital
              </span>
              <br />experiences
            </h2>

            {/* Avatar / initials card */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.25rem",
                padding: "1.25rem",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)",
                marginBottom: "1.5rem",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Glow behind */}
              <div
                style={{
                  position: "absolute",
                  top: "-30px",
                  left: "-20px",
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  background: "var(--accent)",
                  filter: "blur(40px)",
                  opacity: 0.08,
                  pointerEvents: "none",
                }}
              />

              {/* Monogram circle */}
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-light) 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Geist', sans-serif",
                  fontWeight: 800,
                  fontSize: "1.3rem",
                  color: "#fff",
                  flexShrink: 0,
                  boxShadow: "0 0 24px rgba(139,92,246,0.4)",
                }}
              >
                AK
              </div>

              {/* Info */}
              <div style={{ flex: 1 }}>
                <p
                  style={{
                    fontFamily: "'Geist', sans-serif",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "var(--text)",
                    marginBottom: "0.2rem",
                  }}
                >
                  {personalInfo.name}
                </p>
                <p
                  style={{
                    fontSize: "0.82rem",
                    fontWeight: 500,
                    color: "var(--text-2)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {personalInfo.title}
                </p>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--text-3)",
                    marginTop: "0.3rem",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {personalInfo.location}
                </p>
              </div>

              {/* Status dot */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  padding: "0.3rem 0.7rem",
                  background: "rgba(16,185,129,0.08)",
                  border: "1px solid rgba(16,185,129,0.2)",
                  borderRadius: "100px",
                  alignSelf: "flex-start",
                }}
              >
                <span
                  style={{ width: 6, height: 6, borderRadius: "50%", background: "#10B981", display: "block" }}
                />
                <span
                  style={{
                    fontSize: "0.62rem",
                    fontWeight: 700,
                    color: "#34d399",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  Open
                </span>
              </div>
            </div>

            {/* Contact chips */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
                marginBottom: "1.5rem",
              }}
            >
              {[
                { icon: <MapPin size={12} />, text: personalInfo.location, href: undefined },
                { icon: <Mail size={12} />, text: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { icon: <Phone size={12} />, text: personalInfo.phone, href: `tel:${personalInfo.phone}` },
              ].map(({ icon, text, href }) =>
                href ? (
                  <a key={text} href={href} className="info-chip">
                    {icon} {text}
                  </a>
                ) : (
                  <span key={text} className="info-chip" style={{ cursor: "default" }}>
                    {icon} {text}
                  </span>
                )
              )}
            </div>

            {/* Social links */}
            <div style={{ display: "flex", gap: "0.6rem" }}>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
                style={{ gap: "0.5rem" }}
              >
                <GithubIcon size={14} />
                GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent"
                style={{ gap: "0.5rem" }}
              >
                <LinkedinIcon size={14} />
                LinkedIn
              </a>
            </div>
          </FadeIn>

          {/* ── Right: bio text + trait cards ── */}
          <FadeIn direction="right" delay={0.1}>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                lineHeight: 1.85,
                color: "var(--text-2)",
                marginBottom: "2.5rem",
                borderLeft: "2px solid var(--accent)",
                paddingLeft: "1.25rem",
              }}
            >
              {personalInfo.bio}
            </p>

            {/* Trait feature cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {traits.map(({ label, detail, icon, color }) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1rem 1.25rem",
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius)",
                    transition: "border-color 0.25s, box-shadow 0.25s",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = `${color}40`;
                    (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 20px ${color}15`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                  }}
                >
                  {/* Icon bubble */}
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "10px",
                      background: `${color}12`,
                      border: `1px solid ${color}25`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.1rem",
                      flexShrink: 0,
                    }}
                  >
                    {icon}
                  </div>

                  <div style={{ flex: 1 }}>
                    <p
                      style={{
                        fontWeight: 700,
                        fontSize: "0.88rem",
                        color: "var(--text)",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        fontFamily: "var(--font-body)",
                        marginBottom: "0.15rem",
                      }}
                    >
                      {label}
                    </p>
                    <p
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--text-3)",
                        letterSpacing: "0.04em",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {detail}
                    </p>
                  </div>

                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: color,
                      boxShadow: `0 0 8px ${color}80`,
                      flexShrink: 0,
                    }}
                  />
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about .c > div { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
