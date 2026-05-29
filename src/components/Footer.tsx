import { Heart, Mail } from "lucide-react";
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

const socials = [
  { icon: <GithubIcon />,   href: personalInfo.github,            label: "GitHub"   },
  { icon: <LinkedinIcon />, href: personalInfo.linkedin,          label: "LinkedIn" },
  { icon: <Mail size={14}/>,href: `mailto:${personalInfo.email}`, label: "Email"    },
];

const navLinks = [
  { label: "About",      href: "#about"      },
  { label: "Experience", href: "#experience"  },
  { label: "Skills",     href: "#skills"      },
  { label: "Education",  href: "#education"   },
  { label: "Contact",    href: "#contact"     },
];

export default function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        borderTop: "1px solid var(--border)",
        paddingBlock: "3rem",
        overflow: "hidden",
      }}
    >
      {/* Giant watermark initials */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: "-1.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "'Geist', sans-serif",
          fontWeight: 800,
          fontSize: "clamp(6rem, 18vw, 16rem)",
          lineHeight: 1,
          letterSpacing: "-0.04em",
          textTransform: "uppercase",
          background: "linear-gradient(to bottom, rgba(139,92,246,0.06) 0%, transparent 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          userSelect: "none",
          whiteSpace: "nowrap",
          pointerEvents: "none",
        }}
      >
        AK
      </div>

      {/* Top accent line */}
      <div
        style={{
          position: "absolute",
          top: -1,
          left: "50%",
          transform: "translateX(-50%)",
          width: 200,
          height: 1,
          background: "linear-gradient(to right, transparent, var(--accent), transparent)",
          opacity: 0.5,
        }}
      />

      <div className="c" style={{ position: "relative", zIndex: 1 }}>
        {/* Top row: brand + nav links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
            marginBottom: "2.5rem",
          }}
        >
          {/* Brand */}
          <a
            href="#hero"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "0.65rem",
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: "8px",
                background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-light) 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Geist', sans-serif",
                fontWeight: 800,
                fontSize: "0.72rem",
                color: "#fff",
                flexShrink: 0,
              }}
            >
              AK
            </div>
            <div>
              <span
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "var(--text)",
                  display: "block",
                  lineHeight: 1.2,
                }}
              >
                Athulraj K
              </span>
              <span
                style={{
                  fontSize: "0.68rem",
                  color: "var(--text-3)",
                  fontFamily: "var(--font-body)",
                  letterSpacing: "0.04em",
                }}
              >
                Software Engineer
              </span>
            </div>
          </a>

          {/* Nav links */}
          <nav>
            <ul
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.25rem",
                listStyle: "none",
                flexWrap: "wrap",
              }}
            >
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--text-3)",
                      textDecoration: "none",
                      padding: "0.35rem 0.65rem",
                      borderRadius: "6px",
                      transition: "color 0.2s, background 0.2s",
                      fontFamily: "var(--font-body)",
                      display: "inline-block",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--text)";
                      e.currentTarget.style.background = "var(--surface)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--text-3)";
                      e.currentTarget.style.background = "transparent";
                    }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom row: copyright + socials */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
            paddingTop: "1.75rem",
            borderTop: "1px solid var(--border-2)",
          }}
        >
          <p
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              fontSize: "0.78rem",
              color: "var(--text-3)",
              letterSpacing: "0.02em",
              fontFamily: "var(--font-body)",
            }}
          >
            © {new Date().getFullYear()} {personalInfo.name}. Built with
            <Heart size={10} style={{ color: "var(--accent-light)" }} fill="var(--accent-light)" />
            and React.
          </p>

          {/* Social icons */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
            {socials.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  width: 32,
                  height: 32,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "8px",
                  color: "var(--text-3)",
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  textDecoration: "none",
                  transition: "color 0.2s, border-color 0.2s, background 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--accent-light)";
                  e.currentTarget.style.borderColor = "var(--border-accent)";
                  e.currentTarget.style.background = "var(--accent-subtle)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text-3)";
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.background = "var(--surface)";
                }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
