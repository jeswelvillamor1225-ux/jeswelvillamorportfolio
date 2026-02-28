"use client";
import { useReveal } from "./useReveal";
import Image from "next/image";

const STACK = [
  "TypeScript / JS", "React / Next.js",
  "Node.js",         "Go",
  "PostgreSQL",      "Redis",
  "AWS / GCP",       "Kubernetes",
  "Terraform",       "Docker",
];

export default function About() {
  const { ref, visible } = useReveal();

  return (
    <section id="about" ref={ref as React.RefObject<HTMLElement>}
      style={{ padding: "8rem 0" }}
    >
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 2rem" }}>
        <div className={`reveal ${visible ? "in" : ""}`}
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}
        >
          {/* Left text */}
          <div>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: ".62rem", letterSpacing: ".3em", color: "var(--acid)", textTransform: "uppercase", marginBottom: "1rem" }}>
              01. About
            </p>
            <h2 style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(2.8rem,7vw,5.2rem)",
              fontWeight: 800, lineHeight: .9, color: "#fff", marginBottom: "2rem",
            }}>
              Building<br />the{" "}
              <span style={{ color: "var(--acid)", textTransform: "uppercase" }}>Digital</span><br />
              Infrastructure
            </h2>

            {[
              "I'm Jeswel Bacolod Villamor, a passionate full-stack developer dedicated to creating elegant digital solutions. I specialize in building modern web applications that combine beautiful design with robust functionality.",
              "My expertise spans frontend development (React, Next.js, TypeScript) and backend technologies (Node.js, databases, cloud services). I believe in writing clean, maintainable code and creating exceptional user experiences.",
              "When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and continuously expanding my knowledge in the ever-evolving world of software development.",
            ].map((p, i) => (
              <p key={i} style={{ fontFamily: "var(--font-mono)", fontSize: ".7rem", lineHeight: 2, color: "var(--muted)", marginBottom: "1rem" }}>{p}</p>
            ))}

            <p style={{ fontFamily: "var(--font-mono)", fontSize: ".6rem", letterSpacing: ".25em", color: "var(--acid)", textTransform: "uppercase", margin: "1.75rem 0 .9rem" }}>
              // Current Stack
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: ".5rem" }}>
              {STACK.map(t => (
                <div key={t} style={{ display: "flex", alignItems: "center", gap: ".5rem", fontFamily: "var(--font-mono)", fontSize: ".65rem", color: "var(--muted)" }}>
                  <span style={{ color: "var(--acid)" }}>▸</span> {t}
                </div>
              ))}
            </div>
          </div>

          {/* Right photo placeholder */}
          <div style={{ position: "relative", maxWidth: 360, margin: "0 auto", width: "100%" }}>
            <div style={{
              aspectRatio: "4/5",
              border: "1px solid var(--border)",
              background: "linear-gradient(135deg, var(--surface), var(--bg))",
              position: "relative", overflow: "hidden",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <div className="corner-tl" />
              <div className="corner-br" />
              <div className="scan-beam" />
              <Image 
                src="/jeswel.jpg" 
                alt="Jeswel Bacolod Villamor" 
                fill 
                style={{ objectFit: "cover" }}
              />
            </div>
            {/* Shadow offset */}
            <div style={{
              position: "absolute", inset: 0, border: "1px solid rgba(200,255,87,.14)",
              transform: "translate(10px,10px)", zIndex: -1,
            }} />
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          #about .reveal { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
