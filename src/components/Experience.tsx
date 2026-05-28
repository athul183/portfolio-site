import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Briefcase, MapPin, Calendar } from "lucide-react";
import { FadeIn, SectionLabel } from "./ui";
import { experiences } from "../data/portfolio";

export default function Experience() {
  const [expanded, setExpanded] = useState<number | null>(1);

  return (
    <section id="experience">
      <div className="c">
        <SectionLabel num="02" label="Experience" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "5rem",
            alignItems: "start",
          }}
        >
          {/* ── Left: sticky title ── */}
          <FadeIn direction="left">
            <div style={{ position: "sticky", top: "8rem" }}>
              <h2
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                  letterSpacing: "-0.025em",
                  lineHeight: 1.05,
                  textTransform: "uppercase",
                  color: "var(--text)",
                  marginBottom: "1.5rem",
                }}
              >
                Work
                <br />
                <span style={{ color: "var(--accent)" }}>History</span>
              </h2>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "var(--text-2)",
                  lineHeight: 1.7,
                  maxWidth: "18rem",
                }}
              >
                My professional journey building products across mobile, web, and cloud infrastructure.
              </p>
            </div>
          </FadeIn>

          {/* ── Right: experience list ── */}
          <div>
            {experiences.map((exp, i) => (
              <FadeIn key={exp.id} delay={i * 0.07}>
                <div
                  className="exp-item"
                  onClick={() => setExpanded(expanded === exp.id ? null : exp.id)}
                >
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
                      {/* Badges */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          marginBottom: "0.75rem",
                          flexWrap: "wrap",
                        }}
                      >
                        <span className="exp-num">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="exp-tag">{exp.type}</span>
                        {exp.current && (
                          <span className="exp-tag exp-current">
                            <span
                              style={{
                                width: 5,
                                height: 5,
                                borderRadius: "50%",
                                background: "var(--accent)",
                                display: "inline-block",
                                animation: "ping 1.5s ease-out infinite",
                              }}
                            />
                            Current
                          </span>
                        )}
                      </div>

                      {/* Role */}
                      <div className="exp-role">{exp.role}</div>

                      {/* Meta */}
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "1.25rem",
                          marginTop: "0.5rem",
                          color: "var(--text-3)",
                          fontSize: "0.82rem",
                          letterSpacing: "0.04em",
                        }}
                      >
                        <span style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                          <Briefcase size={11} /> {exp.company}
                        </span>
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
                      style={{ color: "var(--text-3)", flexShrink: 0, marginTop: "0.5rem" }}
                    >
                      <ChevronDown size={16} />
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
                            gap: "0.75rem",
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
    </section>
  );
}
