import { FadeIn, SectionLabel } from "./ui";
import { skills } from "../data/portfolio";

const techIcons: Record<string, string> = {
  Flutter:"🦋","Native Android":"🤖","Native iOS":"🍎","React.js":"⚛️",
  AWS:"☁️",Docker:"🐳",Jenkins:"⚙️",DevOps:"🔄",".NET":"💜",
  "Web Development":"🌐",JIRA:"📋",GIT:"📦",Grafana:"📊",
  Prometheus:"🔥",Splunk:"🔍",SonarQube:"🧹",Dart:"🎯",
  Swift:"🦅",Python:"🐍",Java:"☕",Kotlin:"🏔️",
  TypeScript:"📘",JavaScript:"📜",SQL:"🗄️",
  "Team Player":"🤝","Problem Solving":"🧩","Communication":"💬",
  "Collaborative & Coordinating":"🔗","Fast Learner":"⚡",
};

const mkRow = (arr: string[]) => [...arr, ...arr, ...arr];

const allTech = mkRow(skills.technologies);
const allLang = mkRow(skills.languages);
const allSoft = mkRow([...skills.soft, ...skills.languages.slice(0, 4)]);

function MarqueeRow({
  items,
  reverse = false,
  speed = 35,
}: {
  items: string[];
  reverse?: boolean;
  speed?: number;
}) {
  return (
    <div style={{ overflow: "hidden", position: "relative" }}>
      {/* Edge fades */}
      <div
        style={{
          position: "absolute",
          left: 0, top: 0, bottom: 0,
          width: 100, zIndex: 1,
          pointerEvents: "none",
          background: "linear-gradient(to right, var(--bg), transparent)",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 0, top: 0, bottom: 0,
          width: 100, zIndex: 1,
          pointerEvents: "none",
          background: "linear-gradient(to left, var(--bg), transparent)",
        }}
      />

      <div
        className="skill-row"
        style={{
          animation: `${reverse ? "marquee-r" : "marquee-l"} ${speed}s linear infinite`,
        }}
      >
        {items.map((skill, i) => (
          <span key={i} className="skill-pill">
            <span style={{ fontSize: "0.9rem" }}>{techIcons[skill] || "◆"}</span>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

const categories = [
  {
    title: "Languages",
    icon: "🔤",
    color: "#8b5cf6",
    items: skills.languages,
    count: skills.languages.length,
  },
  {
    title: "Technologies",
    icon: "⚙️",
    color: "#00D4FF",
    items: skills.technologies,
    count: skills.technologies.length,
  },
  {
    title: "Soft Skills",
    icon: "🤝",
    color: "#10B981",
    items: skills.soft,
    count: skills.soft.length,
  },
];

export default function Skills() {
  return (
    <section id="skills" style={{ paddingInline: 0, position: "relative" }}>
      {/* Header */}
      <div className="c" style={{ marginBottom: "4rem" }}>
        <SectionLabel num="03" label="Skills" />

        <FadeIn>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1.5rem",
            }}
          >
            <h2
              style={{
                fontFamily: "'Geist', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.2rem, 4.5vw, 4rem)",
                letterSpacing: "-0.025em",
                lineHeight: 1.05,
                textTransform: "uppercase",
                color: "var(--text)",
              }}
            >
              My{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-light) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Stack
              </span>
            </h2>
            <p
              style={{
                maxWidth: "30rem",
                color: "var(--text-2)",
                fontSize: "0.92rem",
                lineHeight: 1.75,
                fontFamily: "var(--font-body)",
              }}
            >
              A broad toolkit spanning mobile development, web technologies, cloud infrastructure, and DevOps.
            </p>
          </div>
        </FadeIn>
      </div>

      {/* Full-width marquee rows */}
      <FadeIn delay={0.1}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <MarqueeRow items={allTech} speed={38} />
          <MarqueeRow items={allLang} reverse speed={28} />
          <MarqueeRow items={allSoft} speed={42} />
        </div>
      </FadeIn>

      {/* Glassmorphism category cards */}
      <div className="c" style={{ marginTop: "5rem" }}>
        <FadeIn delay={0.2}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {categories.map(({ title, icon, color, items, count }) => (
              <div
                key={title}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-lg)",
                  padding: "1.75rem",
                  position: "relative",
                  overflow: "hidden",
                  transition: "border-color 0.25s, box-shadow 0.25s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = `${color}30`;
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 30px ${color}12`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                {/* Background glow */}
                <div
                  style={{
                    position: "absolute",
                    top: -20,
                    right: -20,
                    width: 100,
                    height: 100,
                    borderRadius: "50%",
                    background: color,
                    filter: "blur(40px)",
                    opacity: 0.06,
                    pointerEvents: "none",
                  }}
                />

                {/* Header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "1.5rem",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
                    <div
                      style={{
                        width: 38,
                        height: 38,
                        borderRadius: "10px",
                        background: `${color}12`,
                        border: `1px solid ${color}25`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1rem",
                      }}
                    >
                      {icon}
                    </div>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        color: color,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {title}
                    </span>
                  </div>

                  {/* Count badge */}
                  <span
                    style={{
                      padding: "0.2rem 0.55rem",
                      borderRadius: "100px",
                      background: `${color}12`,
                      border: `1px solid ${color}25`,
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      color: color,
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {count}
                  </span>
                </div>

                {/* Skill pills */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
                  {items.map((s) => (
                    <span
                      key={s}
                      className="skill-pill"
                      style={{ fontSize: "0.75rem", padding: "0.35rem 0.8rem" }}
                    >
                      {techIcons[s] || "◆"} {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
