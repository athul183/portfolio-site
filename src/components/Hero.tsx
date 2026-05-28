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
        paddingBottom: "4rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle purple glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 60% at 15% 60%, rgba(194,164,255,0.07) 0%, transparent 65%), " +
            "radial-gradient(ellipse 50% 40% at 80% 30%, rgba(194,164,255,0.04) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div className="c" style={{ position: "relative", zIndex: 1 }}>
        {/* Top row: status + role */}
        <FadeIn delay={0.05}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1rem",
              marginBottom: "1.5rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <span
                style={{
                  position: "relative",
                  display: "inline-flex",
                  width: 8,
                  height: 8,
                }}
              >
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
                className="caption"
                style={{ color: "#10B981", letterSpacing: "0.15em" }}
              >
                Available for opportunities
              </span>
            </div>

            <span className="caption" style={{ color: "var(--text-3)" }}>
              Based in Kerala, India
            </span>
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
            background: "var(--border)",
            transformOrigin: "left",
            marginBlock: "2.5rem",
          }}
        />

        {/* Bottom row: bio + stats + CTA */}
        <FadeIn delay={0.35}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "3rem",
              alignItems: "end",
            }}
          >
            {/* Left: description */}
            <div>
              <p
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontSize: "clamp(1rem, 1.5vw, 1.3rem)",
                  fontWeight: 400,
                  color: "var(--text-2)",
                  lineHeight: 1.6,
                  maxWidth: "44rem",
                  marginBottom: "2rem",
                }}
              >
                Software Engineer specialising in{" "}
                <span style={{ color: "var(--text)", fontWeight: 600 }}>
                  <Typewriter
                    words={["Flutter", "Native iOS", "Native Android", "React.js", "AWS DevOps"]}
                  />
                </span>
                . Building robust, user-centric mobile &amp; web applications.
              </p>

              {/* CTA buttons */}
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                <a href="#experience" className="btn btn-accent">
                  View My Work
                  <ArrowDown size={14} />
                </a>
                <a href="#contact" className="btn btn-ghost">
                  Get In Touch
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                  style={{ padding: "0.75rem 1rem" }}
                >
                  <GithubIcon size={16} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                  style={{ padding: "0.75rem 1rem" }}
                >
                  <LinkedinIcon size={16} />
                </a>
              </div>
            </div>

            {/* Right: stats */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.5rem 2.5rem",
                textAlign: "right",
              }}
            >
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div
                    style={{
                      fontFamily: "'Geist', sans-serif",
                      fontWeight: 800,
                      fontSize: "clamp(2rem, 3.5vw, 3rem)",
                      lineHeight: 1,
                      color: "var(--accent)",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    <Counter value={s.value} />
                  </div>
                  <div
                    className="caption"
                    style={{ marginTop: "0.35rem", color: "var(--text-3)" }}
                  >
                    {s.label}
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
          bottom: "2rem",
          right: "2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          color: "var(--text-3)",
        }}
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="caption" style={{ writingMode: "vertical-rl", letterSpacing: "0.18em" }}>Scroll</span>
        <ArrowDown size={13} />
      </motion.div>
    </section>
  );
}
