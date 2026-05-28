import { motion } from "framer-motion";
import { GraduationCap, Award, Globe, Trophy } from "lucide-react";
import { FadeIn, SectionLabel } from "./ui";
import { education, certifications, languages, achievements } from "../data/portfolio";

export default function Education() {
  return (
    <section id="education">
      <div className="c">
        <SectionLabel num="04" label="Education & Achievements" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "start",
          }}
        >
          {/* ── Left column ── */}
          <div>
            {/* Education */}
            <FadeIn direction="left">
              <h2
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                  letterSpacing: "-0.025em",
                  lineHeight: 1.05,
                  textTransform: "uppercase",
                  color: "var(--text)",
                  marginBottom: "2.5rem",
                }}
              >
                Learning
                <br />
                <span style={{ color: "var(--accent)" }}>&amp; Growth</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.08}>
              <div
                style={{
                  borderTop: "1px solid var(--border)",
                  paddingTop: "2rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "10px",
                      background: "rgba(194,164,255,0.1)",
                      border: "1px solid rgba(194,164,255,0.2)",
                      color: "var(--accent)",
                      flexShrink: 0,
                    }}
                  >
                    <GraduationCap size={18} />
                  </div>
                  <span className="caption" style={{ color: "var(--accent)" }}>Bachelor's Degree</span>
                </div>

                <h3
                  style={{
                    fontFamily: "'Geist', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.25rem",
                    color: "var(--text)",
                    marginBottom: "0.35rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {education.degree}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--accent)", marginBottom: "0.75rem" }}>
                  {education.field}
                </p>
                <p style={{ fontSize: "0.85rem", color: "var(--text-2)", marginBottom: "0.25rem" }}>
                  {education.institution}
                </p>
                <p style={{ fontSize: "0.82rem", color: "var(--text-3)", marginBottom: "0.25rem" }}>
                  {education.university}
                </p>
                <p style={{ fontSize: "0.82rem", color: "var(--text-3)", marginBottom: "2rem" }}>
                  {education.period}
                </p>

                {/* CGPA big number */}
                <div
                  style={{
                    padding: "1.5rem",
                    borderRadius: "0.75rem",
                    background: "rgba(194,164,255,0.06)",
                    border: "1px solid rgba(194,164,255,0.15)",
                  }}
                >
                  <p className="caption" style={{ color: "var(--text-3)", marginBottom: "0.5rem" }}>CGPA</p>
                  <p
                    style={{
                      fontFamily: "'Geist', sans-serif",
                      fontWeight: 800,
                      fontSize: "3rem",
                      lineHeight: 1,
                      color: "var(--text)",
                      letterSpacing: "-0.04em",
                    }}
                  >
                    {education.cgpa}
                    <span style={{ fontSize: "1rem", color: "var(--text-3)", fontWeight: 400 }}> / 10</span>
                  </p>
                  <div className="bar-track" style={{ marginTop: "1rem" }}>
                    <motion.div
                      className="bar-fill"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: parseFloat(education.cgpa) / 10 }}
                      transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Achievements */}
            <FadeIn delay={0.16}>
              <div style={{ marginTop: "2.5rem", borderTop: "1px solid var(--border)", paddingTop: "2rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                  <div
                    style={{
                      width: 40, height: 40,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      borderRadius: "10px",
                      background: "rgba(245,158,11,0.1)",
                      border: "1px solid rgba(245,158,11,0.2)",
                      color: "#fbbf24",
                    }}
                  >
                    <Trophy size={18} />
                  </div>
                  <span className="caption" style={{ color: "#fbbf24" }}>Achievements</span>
                </div>
                {achievements.map((ach, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    style={{
                      display: "flex",
                      gap: "0.75rem",
                      alignItems: "flex-start",
                      marginBottom: "0.75rem",
                    }}
                  >
                    <span style={{ fontSize: "1.1rem" }}>{i === 0 ? "🏆" : "🥁"}</span>
                    <p style={{ fontSize: "0.9rem", color: "var(--text-2)", lineHeight: 1.65 }}>{ach}</p>
                  </motion.div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* ── Right column ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {/* Certifications */}
            <FadeIn direction="right">
              <div style={{ borderTop: "1px solid var(--border)", paddingTop: "2rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                  <div
                    style={{
                      width: 40, height: 40,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      borderRadius: "10px",
                      background: "rgba(0,212,255,0.08)",
                      border: "1px solid rgba(0,212,255,0.18)",
                      color: "#00D4FF",
                    }}
                  >
                    <Award size={18} />
                  </div>
                  <span className="caption" style={{ color: "#00D4FF" }}>Certifications</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {certifications.map((cert, i) => (
                    <motion.div
                      key={cert.name}
                      initial={{ opacity: 0, x: 8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07 }}
                      viewport={{ once: true }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        paddingBlock: "0.75rem",
                        borderBottom: "1px solid var(--border-2)",
                      }}
                    >
                      <span
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          background: cert.color,
                          boxShadow: `0 0 8px ${cert.color}80`,
                          flexShrink: 0,
                        }}
                      />
                      <div>
                        <p style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--text)" }}>{cert.name}</p>
                        <p style={{ fontSize: "0.78rem", color: "var(--text-3)" }}>{cert.issuer}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Languages */}
            <FadeIn direction="right" delay={0.12}>
              <div style={{ borderTop: "1px solid var(--border)", paddingTop: "2rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                  <div
                    style={{
                      width: 40, height: 40,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      borderRadius: "10px",
                      background: "rgba(16,185,129,0.08)",
                      border: "1px solid rgba(16,185,129,0.2)",
                      color: "#34d399",
                    }}
                  >
                    <Globe size={18} />
                  </div>
                  <span className="caption" style={{ color: "#34d399" }}>Languages Spoken</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
                  {languages.map((lang) => (
                    <div key={lang.name}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                        <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--text)" }}>{lang.name}</span>
                        <span className="caption" style={{ color: "var(--text-3)" }}>{lang.level}</span>
                      </div>
                      <div className="bar-track">
                        <motion.div
                          className="bar-fill"
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: lang.progress / 100 }}
                          transition={{ duration: 1, delay: 0.2 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
