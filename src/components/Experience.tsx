import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MapPin, Calendar } from "lucide-react";
import { FadeIn, SectionLabel } from "./ui";
import { experiences } from "../data/portfolio";

export default function Experience() {
  const [expanded, setExpanded] = useState<number | null>(1);

  return (
    <section id="experience" style={{ position: "relative" }}>
      {/* Background accent */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 50% 60% at 5% 50%, rgba(139,92,246,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="c" style={{ position: "relative", zIndex: 1 }}>
        <SectionLabel num="02" label="Experience" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "5rem",
            alignItems: "start",
          }}
        >
          {/* ── Left: sticky title with mini timeline ── */}
          <FadeIn direction="left">
            <div style={{ position: "sticky", top: "8rem" }}>
              <h2
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2.2rem, 3.5vw, 3.2rem)",
                  letterSpacing: "-0.025em",
                  lineHeight: 1.05,
                  textTransform: "uppercase",
                  color: "var(--text)",
                  marginBottom: "1rem",
                }}
              >
                Work
                <br />
                <span
                  style={{
                    background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-light) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  History
                </span>
              </h2>
              <p
                style={{
                  fontSize: "0.88rem",
                  fontFamily: "var(--font-body)",
                  color: "var(--text-2)",
                  lineHeight: 1.75,
                  maxWidth: "18rem",
                  marginBottom: "2rem",
                }}
              >
                My professional journey building products across mobile, web, and cloud infrastructure.
              </p>

              {/* Mini timeline */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {experiences.map((exp) => (
                  <button
                    key={exp.id}
                    onClick={() => setExpanded(expanded === exp.id ? null : exp.id)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.65rem",
                      padding: "0.5rem 0.75rem",
                      background: expanded === exp.id ? `${exp.color}12` : "transparent",
                      border: `1px solid ${expanded === exp.id ? exp.color + "30" : "transparent"}`,
                      borderRadius: "8px",
                      cursor: "pointer",
                      transition: "all 0.2s",
                      textAlign: "left",
                    }}
                  >
                    <span
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: exp.color,
                        boxShadow: expanded === exp.id ? `0 0 10px ${exp.color}80` : "none",
                        flexShrink: 0,
                        transition: "box-shadow 0.2s",
                      }}
                    />
                    <div>
                      <p
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          color: expanded === exp.id ? "var(--text)" : "var(--text-3)",
                          fontFamily: "var(--font-body)",
                          lineHeight: 1.2,
                          transition: "color 0.2s",
                        }}
                      >
                        {exp.role}
                      </p>
                      <p
                        style={{
                          fontSize: "0.65rem",
                          color: "var(--text-3)",
                          fontFamily: "var(--font-body)",
                          marginTop: "0.1rem",
                        }}
                      >
                        {exp.company}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* ── Right: experience list ── */}
          <div>
            {experiences.map((exp, i) => (
              <FadeIn key={exp.id} delay={i * 0.07}>
                <div
                  className="exp-item"
                  onClick={() => setExpanded(expanded === exp.id ? null : exp.id)}
                  style={{ paddingLeft: "1rem" }}
                >
                  {/* Color accent left bar */}
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      bottom: 0,
                      width: 3,
                      background: exp.color,
                      borderRadius: "0 2px 2px 0",
                      opacity: expanded === exp.id ? 1 : 0.25,
                      transition: "opacity 0.3s",
                    }}
                  />

                  {/* Header row */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      gap: "1rem",
                      marginBottom: "0.75rem",
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      {/* Badges row */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.45rem",
                          marginBottom: "0.85rem",
                          flexWrap: "wrap",
                        }}
                      >
                        <span className="exp-num">{String(i + 1).padStart(2, "0")}</span>

                        {/* Type badge */}
                        <span className="exp-tag">{exp.type}</span>

                        {/* Current badge */}
                        {exp.current && (
                          <span className="exp-tag exp-current">
                            <span
                              style={{
                                width: 5,
                                height: 5,
                                borderRadius: "50%",
                                background: "var(--accent-light)",
                                display: "inline-block",
                                animation: "ping 1.5s ease-out infinite",
                              }}
                            />
                            Current
                          </span>
                        )}

                        {/* Company chip */}
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.35rem",
                            padding: "0.22rem 0.65rem",
                            borderRadius: "100px",
                            fontSize: "0.67rem",
                            fontWeight: 700,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            background: `${exp.color}10`,
                            border: `1px solid ${exp.color}25`,
                            color: exp.color,
                            fontFamily: "var(--font-body)",
                          }}
                        >
                          <span
                            style={{ fontSize: "0.85rem", lineHeight: 1 }}
                          >
                            {exp.icon}
                          </span>
                          {exp.company}
                        </span>
                      </div>

                      {/* Role */}
                      <div className="exp-role">{exp.role}</div>

                      {/* Meta info */}
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "1.25rem",
                          marginTop: "0.6rem",
                          color: "var(--text-3)",
                          fontSize: "0.8rem",
                          letterSpacing: "0.04em",
                          fontFamily: "var(--font-body)",
                        }}
                      >
                        <span style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                          <MapPin size={11} /> {exp.location}
                        </span>
                        <span style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                          <Calendar size={11} /> {exp.period}
                        </span>
                      </div>
                    </div>

                    {/* Chevron */}
                    <motion.div
                      animate={{ rotate: expanded === exp.id ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: "8px",
                        background: expanded === exp.id ? "var(--accent-subtle)" : "var(--surface)",
                        border: `1px solid ${expanded === exp.id ? "var(--border-accent)" : "var(--border)"}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: expanded === exp.id ? "var(--accent-light)" : "var(--text-3)",
                        flexShrink: 0,
                        marginTop: "0.25rem",
                        transition: "all 0.25s",
                      }}
                    >
                      <ChevronDown size={14} />
                    </motion.div>
                  </div>

                  {/* Expandable responsibilities */}
                  <AnimatePresence initial={false}>
                    {expanded === exp.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        style={{ overflow: "hidden" }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.65rem",
                            paddingTop: "1rem",
                          }}
                        >
                          {exp.responsibilities.map((item, j) => (
                            <motion.div
                              key={j}
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: j * 0.06 }}
                              className="exp-resp"
                            >
                              {item}
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #experience .c > div {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          #experience .sticky-panel { position: static !important; }
        }
      `}</style>
    </section>
  );
}
