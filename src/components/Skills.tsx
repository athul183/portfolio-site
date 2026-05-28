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

/* Duplicate array for seamless infinite marquee */
const mkRow = (arr: string[]) => [...arr, ...arr];

const allTech = mkRow(skills.technologies);
const allLang = mkRow(skills.languages);
const allSoft = mkRow(skills.soft.concat(skills.languages));

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
          left: 0,
          top: 0,
          bottom: 0,
          width: 80,
          zIndex: 1,
          pointerEvents: "none",
          background: "linear-gradient(to right, var(--bg), transparent)",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: 80,
          zIndex: 1,
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
            <span>{techIcons[skill] || "◆"}</span>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" style={{ paddingInline: 0 }}>
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
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                letterSpacing: "-0.025em",
                lineHeight: 1.05,
                textTransform: "uppercase",
                color: "var(--text)",
              }}
            >
              My <span style={{ color: "var(--accent)" }}>Stack</span>
            </h2>
            <p
              style={{
                maxWidth: "30rem",
                color: "var(--text-2)",
                fontSize: "0.95rem",
                lineHeight: 1.7,
              }}
            >
              A broad toolkit spanning mobile development, web technologies, cloud infrastructure, and DevOps.
            </p>
          </div>
        </FadeIn>
      </div>

      {/* Full-width marquee rows */}
      <FadeIn delay={0.1}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <MarqueeRow items={allTech} speed={35} />
          <MarqueeRow items={allLang} reverse speed={28} />
          <MarqueeRow items={allSoft} speed={40} />
        </div>
      </FadeIn>

      {/* Categorical summary */}
      <div className="c" style={{ marginTop: "5rem" }}>
        <FadeIn delay={0.2}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1px",
              border: "1px solid var(--border)",
              borderRadius: "1rem",
              overflow: "hidden",
            }}
          >
            {[
              { title: "Languages",    items: skills.languages    },
              { title: "Technologies", items: skills.technologies },
              { title: "Soft Skills",  items: skills.soft         },
            ].map(({ title, items }) => (
              <div
                key={title}
                style={{
                  background: "var(--bg-2)",
                  padding: "2rem 1.75rem",
                  borderRight: "1px solid var(--border)",
                }}
              >
                <p
                  className="caption"
                  style={{ color: "var(--accent)", marginBottom: "1.25rem" }}
                >
                  {title}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {items.map((s) => (
                    <span
                      key={s}
                      className="skill-pill"
                      style={{ fontSize: "0.78rem", padding: "0.4rem 0.9rem" }}
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
