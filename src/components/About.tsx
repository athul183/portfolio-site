
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

export default function About() {
  return (
    <section id="about">
      <div className="c">
        <SectionLabel num="01" label="About Me" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "start",
          }}
        >
          {/* ── Left: big headline ── */}
          <FadeIn direction="left">
            <h2
              style={{
                fontFamily: "'Geist', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.5rem, 4.5vw, 4rem)",
                letterSpacing: "-0.025em",
                lineHeight: 1.05,
                color: "var(--text)",
                textTransform: "uppercase",
              }}
            >
              Crafting{" "}
              <span style={{ color: "var(--accent)" }}>digital</span>
              <br />experiences
            </h2>

            {/* Quick info pills */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
                marginTop: "2rem",
              }}
            >
              {[
                { icon: <MapPin size={11} />, text: personalInfo.location },
                { icon: <Mail size={11} />,   text: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { icon: <Phone size={11} />,  text: personalInfo.phone, href: `tel:${personalInfo.phone}` },
              ].map(({ icon, text, href }) =>
                href ? (
                  <a
                    key={text}
                    href={href}
                    className="exp-tag"
                    style={{ gap: "0.4rem", display: "inline-flex", alignItems: "center", textDecoration: "none" }}
                  >
                    {icon} {text}
                  </a>
                ) : (
                  <span
                    key={text}
                    className="exp-tag"
                    style={{ gap: "0.4rem", display: "inline-flex", alignItems: "center" }}
                  >
                    {icon} {text}
                  </span>
                )
              )}
            </div>

            {/* Social links */}
            <div style={{ display: "flex", gap: "0.75rem", marginTop: "2rem" }}>
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

          {/* ── Right: bio text ── */}
          <FadeIn direction="right" delay={0.1}>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "var(--text-2)",
                marginBottom: "2rem",
              }}
            >
              {personalInfo.bio}
            </p>

            {/* Trait list */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { label: "Mobile Development", detail: "Flutter · iOS · Android" },
                { label: "Cloud & DevOps",     detail: "AWS · Jenkins · Docker · Grafana" },
                { label: "Web Development",    detail: "React.js · TypeScript · .NET" },
              ].map(({ label, detail }) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingBlock: "0.875rem",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <span
                    style={{
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      color: "var(--text)",
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {label}
                  </span>
                  <span className="caption" style={{ color: "var(--text-3)" }}>
                    {detail}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
