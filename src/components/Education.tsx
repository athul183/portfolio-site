import { motion } from "framer-motion";
import { GraduationCap, Award, Globe, Trophy } from "lucide-react";
import { FadeIn, SectionLabel } from "./ui";
import { education, certifications, languages, achievements } from "../data/portfolio";

export default function Education() {
  return (
    <section id="education" style={{ position: "relative" }}>
      {/* Background glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 50% 60% at 95% 50%, rgba(139,92,246,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="c" style={{ position: "relative", zIndex: 1 }}>
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
            {/* Section heading */}
            <FadeIn direction="left">
              <h2
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2.2rem, 3.8vw, 3.2rem)",
                  letterSpacing: "-0.025em",
                  lineHeight: 1.05,
                  textTransform: "uppercase",
                  color: "var(--text)",
                  marginBottom: "2.5rem",
                }}
              >
                Learning
                <br />
                <span
                  style={{
                    background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-light) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  &amp; Growth
                </span>
              </h2>
            </FadeIn>

            {/* Degree Card — full glassmorphism */}
            <FadeIn delay={0.08}>
              <div
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-xl)",
                  padding: "2rem",
                  position: "relative",
                  overflow: "hidden",
                  marginBottom: "1.5rem",
                }}
              >
                {/* Corner glow */}
                <div
                  style={{
                    position: "absolute",
                    top: -30,
                    left: -30,
                    width: 150,
                    height: 150,
                    borderRadius: "50%",
                    background: "var(--accent)",
                    filter: "blur(50px)",
                    opacity: 0.06,
                    pointerEvents: "none",
                  }}
                />

                {/* Header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "12px",
                      background: "rgba(139,92,246,0.1)",
                      border: "1px solid rgba(139,92,246,0.2)",
                      color: "var(--accent-light)",
                      flexShrink: 0,
                    }}
                  >
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <span
                      style={{
                        fontSize: "0.68rem",
                        fontWeight: 700,
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "var(--accent-light)",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      Bachelor's Degree
                    </span>
                    <h3
                      style={{
                        fontFamily: "'Geist', sans-serif",
                        fontWeight: 700,
                        fontSize: "1.15rem",
                        color: "var(--text)",
                        marginTop: "0.2rem",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {education.degree}
                    </h3>
                  </div>
                </div>

                {/* Field */}
                <p
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    color: "var(--accent-light)",
                    fontFamily: "var(--font-body)",
                    marginBottom: "0.75rem",
                  }}
                >
                  {education.field}
                </p>

                {/* Institution details */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.3rem",
                    marginBottom: "1.5rem",
                    paddingBottom: "1.5rem",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <p style={{ fontSize: "0.85rem", color: "var(--text-2)", fontFamily: "var(--font-body)" }}>
                    {education.institution}
                  </p>
                  <p style={{ fontSize: "0.78rem", color: "var(--text-3)", fontFamily: "var(--font-body)" }}>
                    {education.university}
                  </p>
                  <p style={{ fontSize: "0.78rem", color: "var(--text-3)", fontFamily: "var(--font-body)" }}>
                    {education.period}
                  </p>
                </div>

                {/* CGPA section */}
                <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                  <div>
                    <p
                      style={{
                        fontSize: "0.68rem",
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "var(--text-3)",
                        fontFamily: "var(--font-body)",
                        marginBottom: "0.25rem",
                      }}
                    >
                      CGPA
                    </p>
                    <p
                      style={{
                        fontFamily: "'Geist', sans-serif",
                        fontWeight: 800,
                        fontSize: "2.5rem",
                        lineHeight: 1,
                        color: "var(--text)",
                        letterSpacing: "-0.04em",
                      }}
                    >
                      {education.cgpa}
                      <span
                        style={{
                          fontSize: "1rem",
                          color: "var(--text-3)",
                          fontWeight: 400,
                        }}
                      >
                        /10
                      </span>
                    </p>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div className="bar-track" style={{ height: 4 }}>
                      <motion.div
                        className="bar-fill"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: parseFloat(education.cgpa) / 10 }}
                        transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true }}
                      />
                    </div>
                    <p
                      style={{
                        fontSize: "0.68rem",
                        color: "var(--text-3)",
                        marginTop: "0.5rem",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {Math.round((parseFloat(education.cgpa) / 10) * 100)}% percentile
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Achievements */}
            <FadeIn delay={0.16}>
              <div
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-lg)",
                  padding: "1.75rem",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: -20,
                    right: -20,
                    width: 100,
                    height: 100,
                    borderRadius: "50%",
                    background: "#F59E0B",
                    filter: "blur(40px)",
                    opacity: 0.06,
                    pointerEvents: "none",
                  }}
                />

                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "10px",
                      background: "rgba(245,158,11,0.1)",
                      border: "1px solid rgba(245,158,11,0.2)",
                      color: "#fbbf24",
                    }}
                  >
                    <Trophy size={16} />
                  </div>
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "#fbbf24",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    Achievements
                  </span>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
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
                        padding: "0.875rem",
                        background: "rgba(245,158,11,0.04)",
                        border: "1px solid rgba(245,158,11,0.1)",
                        borderRadius: "10px",
                      }}
                    >
                      <span style={{ fontSize: "1.1rem", flexShrink: 0 }}>
                        {i === 0 ? "🏆" : "🥁"}
                      </span>
                      <p
                        style={{
                          fontSize: "0.875rem",
                          color: "var(--text-2)",
                          lineHeight: 1.65,
                          fontFamily: "var(--font-body)",
                        }}
                      >
                        {ach}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* ── Right column ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {/* Certifications */}
            <FadeIn direction="right">
              <div
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-lg)",
                  padding: "1.75rem",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: -20,
                    left: -20,
                    width: 100,
                    height: 100,
                    borderRadius: "50%",
                    background: "#00D4FF",
                    filter: "blur(40px)",
                    opacity: 0.05,
                    pointerEvents: "none",
                  }}
                />

                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "10px",
                      background: "rgba(0,212,255,0.08)",
                      border: "1px solid rgba(0,212,255,0.18)",
                      color: "#00D4FF",
                    }}
                  >
                    <Award size={16} />
                  </div>
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "#00D4FF",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    Certifications
                  </span>
                  <span
                    style={{
                      marginLeft: "auto",
                      padding: "0.15rem 0.5rem",
                      background: "rgba(0,212,255,0.08)",
                      border: "1px solid rgba(0,212,255,0.2)",
                      borderRadius: "100px",
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      color: "#00D4FF",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {certifications.length}
                  </span>
                </div>

                {/* Cert grid — 2 per row */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "0.65rem",
                  }}
                >
                  {certifications.map((cert, i) => (
                    <motion.div
                      key={cert.name}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.07 }}
                      viewport={{ once: true }}
                      style={{
                        padding: "0.875rem",
                        background: `${cert.color}07`,
                        border: `1px solid ${cert.color}20`,
                        borderRadius: "10px",
                        position: "relative",
                        overflow: "hidden",
                        transition: "border-color 0.2s, box-shadow 0.2s",
                        cursor: "default",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLDivElement).style.borderColor = `${cert.color}45`;
                        (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 16px ${cert.color}15`;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLDivElement).style.borderColor = `${cert.color}20`;
                        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                      }}
                    >
                      <div
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          background: cert.color,
                          boxShadow: `0 0 8px ${cert.color}80`,
                          marginBottom: "0.6rem",
                        }}
                      />
                      <p
                        style={{
                          fontSize: "0.78rem",
                          fontWeight: 700,
                          color: "var(--text)",
                          fontFamily: "var(--font-body)",
                          lineHeight: 1.3,
                          marginBottom: "0.25rem",
                        }}
                      >
                        {cert.name}
                      </p>
                      <p
                        style={{
                          fontSize: "0.68rem",
                          color: "var(--text-3)",
                          fontFamily: "var(--font-body)",
                          lineHeight: 1.3,
                        }}
                      >
                        {cert.issuer}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Languages */}
            <FadeIn direction="right" delay={0.12}>
              <div
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-lg)",
                  padding: "1.75rem",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    bottom: -20,
                    right: -20,
                    width: 100,
                    height: 100,
                    borderRadius: "50%",
                    background: "#10B981",
                    filter: "blur(40px)",
                    opacity: 0.05,
                    pointerEvents: "none",
                  }}
                />

                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.75rem" }}>
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "10px",
                      background: "rgba(16,185,129,0.08)",
                      border: "1px solid rgba(16,185,129,0.2)",
                      color: "#34d399",
                    }}
                  >
                    <Globe size={16} />
                  </div>
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "#34d399",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    Languages Spoken
                  </span>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  {languages.map((lang) => (
                    <div key={lang.name}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginBottom: "0.6rem",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "0.9rem",
                            fontWeight: 700,
                            color: "var(--text)",
                            fontFamily: "var(--font-body)",
                          }}
                        >
                          {lang.name}
                        </span>
                        <span
                          style={{
                            fontSize: "0.68rem",
                            fontWeight: 600,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: "var(--text-3)",
                            fontFamily: "var(--font-body)",
                            padding: "0.15rem 0.5rem",
                            background: "var(--surface-2)",
                            borderRadius: "100px",
                          }}
                        >
                          {lang.level}
                        </span>
                      </div>
                      <div className="bar-track" style={{ height: 4 }}>
                        <motion.div
                          className="bar-fill"
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: lang.progress / 100 }}
                          transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                          viewport={{ once: true }}
                        />
                      </div>
                      <p
                        style={{
                          fontSize: "0.65rem",
                          color: "var(--text-3)",
                          marginTop: "0.35rem",
                          textAlign: "right",
                          fontFamily: "var(--font-body)",
                        }}
                      >
                        {lang.progress}%
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #education .c > div { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          #education .cert-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
