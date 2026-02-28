"use client";
import { useReveal } from "./useReveal";

const CATEGORIES = [
  {
    title: "Frontend",
    items: [
      { name: "React / Next.js",    pct: 90 },
      { name: "TypeScript",         pct: 85 },
      { name: "HTML / CSS",         pct: 95 },
      { name: "Tailwind CSS",       pct: 88 },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js",            pct: 82 },
      { name: "Express.js",         pct: 80 },
      { name: "MongoDB",            pct: 75 },
      { name: "PostgreSQL",         pct: 70 },
    ],
  },
  {
    title: "Tools & Others",
    items: [
      { name: "Git / GitHub",       pct: 92 },
      { name: "VS Code",            pct: 95 },
      { name: "Figma",              pct: 78 },
      { name: "Docker",             pct: 65 },
    ],
  },
];

const CERTS = [
  { code: "WEB\nDEV",  name: "Full Stack Web Development", year: "2024" },
  { code: "REACT",       name: "React Advanced Patterns", year: "2024" },
  { code: "NODE",       name: "Node.js Backend Development", year: "2023" },
  { code: "UI/UX",      name: "User Interface Design",      year: "2023" },
];

export default function Skills() {
  const { ref, visible } = useReveal();

  return (
    <section id="skills" ref={ref as React.RefObject<HTMLElement>}
      style={{ padding: "8rem 0", background: "rgba(12,18,32,.5)" }}
    >
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 2rem" }}>
        <div className={`reveal ${visible ? "in" : ""}`}>

          <p style={{ fontFamily: "var(--font-mono)", fontSize: ".62rem", letterSpacing: ".3em", color: "var(--acid)", textTransform: "uppercase", marginBottom: "1rem" }}>
            02. Skills
          </p>
          <h2 style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(2.8rem,7vw,5.2rem)",
            fontWeight: 800, lineHeight: .9, color: "#fff", marginBottom: "4rem",
          }}>
            Technical <span style={{ color: "var(--acid)" }}>Arsenal</span>
          </h2>

          {/* Skill bars */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "3.5rem", marginBottom: "4rem" }} className="skills-cols">
            {CATEGORIES.map(cat => (
              <div key={cat.title}>
                <p style={{
                  fontFamily: "var(--font-mono)", fontSize: ".6rem", letterSpacing: ".25em",
                  color: "var(--acid)", textTransform: "uppercase",
                  borderBottom: "1px solid var(--border)", paddingBottom: ".75rem", marginBottom: "1.5rem",
                }}>
                  // {cat.title}
                </p>
                {cat.items.map(item => (
                  <div key={item.name} style={{ marginBottom: "1.25rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: ".45rem" }}>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: ".65rem", color: "var(--text)" }}>{item.name}</span>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: ".65rem", color: "var(--acid)" }}>{item.pct}%</span>
                    </div>
                    <div className="bar-track">
                      <div className="bar-fill" style={{ width: visible ? `${item.pct}%` : "0%" }} />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Certs */}
          <p style={{ fontFamily: "var(--font-mono)", fontSize: ".6rem", letterSpacing: ".25em", color: "var(--acid)", textTransform: "uppercase", marginBottom: "1.25rem" }}>
            // Certifications
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="certs-cols">
            {CERTS.map(c => (
              <div key={c.code} className="card" style={{ display: "flex", alignItems: "center", gap: "1.25rem", padding: "1.25rem 1.5rem" }}>
                <div style={{
                  width: 54, height: 54, flexShrink: 0,
                  border: "1px solid var(--border)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--font-mono)", fontSize: ".58rem",
                  color: "var(--acid)", textAlign: "center", lineHeight: 1.4,
                  whiteSpace: "pre",
                }}>
                  {c.code}
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: ".7rem", color: "var(--text)", marginBottom: ".3rem" }}>{c.name}</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: ".58rem", color: "var(--muted)" }}>Certified {c.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:900px){ .skills-cols { grid-template-columns: 1fr !important; } }
        @media(max-width:600px){ .certs-cols  { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
