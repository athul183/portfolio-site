import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Typewriter, FadeIn, Counter } from "./ui";
import { personalInfo, stats } from "../data/portfolio";

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

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        paddingTop: "8rem",
        paddingBottom: "5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background radial glows */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 65% 55% at 10% 65%, rgba(139,92,246,0.1) 0%, transparent 65%), " +
            "radial-gradient(ellipse 45% 40% at 85% 25%, rgba(139,92,246,0.06) 0%, transparent 60%), " +
            "radial-gradient(ellipse 30% 30% at 50% 100%, rgba(139,92,246,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Subtle grid overlay */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
          maskImage: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.5) 20%, rgba(0,0,0,0.5) 80%, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.5) 20%, rgba(0,0,0,0.5) 80%, transparent)",
        }}
      />

      <div className="c" style={{ position: "relative", zIndex: 1 }}>
        {/* Top row: status + location */}
        <FadeIn delay={0.05}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            {/* Availability badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                padding: "0.4rem 1rem 0.4rem 0.6rem",
                background: "rgba(16,185,129,0.08)",
                border: "1px solid rgba(16,185,129,0.2)",
                borderRadius: "100px",
              }}
            >
              <span style={{ position: "relative", display: "inline-flex", width: 8, height: 8 }}>
                <span
                  className="ping"
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50%",
                    background: "#10B981",
                    opacity: 0.6,
                  }}
                />
                <span
                  style={{
                    position: "relative",
                    display: "block",
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#10B981",
                  }}
                />
              </span>
              <span
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#34d399",
                  fontFamily: "var(--font-body)",
                }}
              >
                Available for opportunities
              </span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                fontSize: "0.75rem",
                fontWeight: 500,
                color: "var(--text-3)",
                letterSpacing: "0.06em",
                fontFamily: "var(--font-body)",
              }}
            >
              <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} style={{ flexShrink: 0 }}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              Kerala, India
            </div>
          </div>
        </FadeIn>

        {/* GIANT NAME */}
        <div style={{ overflow: "hidden" }}>
          <motion.h1
            className="hero-name"
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            Athulraj{" "}
            <span className="accent">K</span>
          </motion.h1>
        </div>

        {/* Divider row */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{
            height: 1,
            background: "linear-gradient(to right, var(--border-accent), var(--border), transparent)",
            transformOrigin: "left",
            marginBlock: "2.5rem",
          }}
        />

        {/* Bottom row: bio + CTA | divider | stats */}
        <FadeIn delay={0.35}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto 280px",
              gap: "3rem",
              alignItems: "end",
            }}
          >
            {/* Left: description + CTAs */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(0.95rem, 1.4vw, 1.2rem)",
                  fontWeight: 400,
                  color: "var(--text-2)",
                  lineHeight: 1.75,
                  maxWidth: "44rem",
                  marginBottom: "0.75rem",
                }}
              >
                Software Engineer specialising in{" "}
                <span
                  style={{
                    color: "var(--accent-light)",
                    fontWeight: 700,
                    background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-light) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  <Typewriter
                    words={["Flutter", "Native iOS", "Native Android", "React.js", "AWS DevOps"]}
                  />
                </span>
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(0.95rem, 1.4vw, 1.2rem)",
                  fontWeight: 400,
                  color: "var(--text-2)",
                  lineHeight: 1.75,
                  maxWidth: "44rem",
                  marginBottom: "2.5rem",
                }}
              >
                Building robust, user-centric mobile &amp; web applications.
              </p>

              {/* CTA buttons */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
                <a href="#experience" className="btn btn-accent">
                  View My Work
                  <ArrowDown size={13} />
                </a>
                <a href="#contact" className="btn btn-ghost">
                  Get In Touch
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                  style={{ padding: "0.7rem 0.95rem" }}
                  aria-label="GitHub"
                >
                  <GithubIcon size={15} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                  style={{ padding: "0.7rem 0.95rem" }}
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={15} />
                </a>
              </div>
            </div>

            {/* Vertical divider */}
            <div
              style={{
                width: 1,
                alignSelf: "stretch",
                background: "linear-gradient(to bottom, transparent, var(--border-accent), transparent)",
                opacity: 0.5,
              }}
            />

            {/* Right: stats as vertical list */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  className="stat-item"
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                    <span style={{ fontSize: "1.1rem" }}>{s.icon}</span>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        color: "var(--text-3)",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {s.label}
                    </span>
                  </div>
                  <div
                    style={{
                      fontFamily: "'Geist', sans-serif",
                      fontWeight: 800,
                      fontSize: "1.6rem",
                      lineHeight: 1,
                      background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-light) 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      letterSpacing: "-0.03em",
                      flexShrink: 0,
                    }}
                  >
                    <Counter value={s.value} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.4rem",
          color: "var(--text-3)",
        }}
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span
          style={{
            fontSize: "0.62rem",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            fontFamily: "var(--font-body)",
          }}
        >
          Scroll
        </span>
        <ArrowDown size={12} />
      </motion.div>

      <style>{`
        @media (max-width: 900px) {
          #hero .hero-bottom-grid {
            grid-template-columns: 1fr !important;
          }
          #hero .hero-divider-v { display: none !important; }
          #hero .hero-stats { flex-direction: row !important; flex-wrap: wrap; }
        }
      `}</style>
    </section>
  );
}
