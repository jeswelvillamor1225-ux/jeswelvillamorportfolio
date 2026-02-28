"use client";
import { useState, useEffect } from "react";

const ROLES = [
  "Full-Stack Developer",
  "Systems Architect",
  "Cloud Engineer",
  "DevOps Practitioner",
  "Security Enthusiast",
];

function useTypewriter(phrases: string[]) {
  const [text,      setText]      = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx,   setCharIdx]   = useState(0);
  const [deleting,  setDeleting]  = useState(false);

  useEffect(() => {
    const phrase = phrases[phraseIdx];
    const delay  = deleting ? 38 : charIdx === phrase.length ? 1600 : 75;

    const t = setTimeout(() => {
      if (!deleting && charIdx < phrase.length) {
        setText(phrase.slice(0, charIdx + 1));
        setCharIdx(c => c + 1);
      } else if (!deleting && charIdx === phrase.length) {
        setDeleting(true);
      } else if (deleting && charIdx > 0) {
        setText(phrase.slice(0, charIdx - 1));
        setCharIdx(c => c - 1);
      } else {
        setDeleting(false);
        setPhraseIdx(i => (i + 1) % phrases.length);
      }
    }, delay);

    return () => clearTimeout(t);
  }, [charIdx, deleting, phraseIdx, phrases]);

  return text;
}

const S: Record<string, React.CSSProperties> = {
  section: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    padding: "7rem 0 4rem",
    position: "relative",
    overflow: "hidden",
  },
  wrap: { maxWidth: 1120, margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 1 },
  badge: { display: "inline-flex", alignItems: "center", gap: ".6rem", marginBottom: "2rem" },
  badgeText: { fontFamily: "var(--font-mono)", fontSize: ".62rem", letterSpacing: ".3em", textTransform: "uppercase", color: "var(--acid)" },
  sub: { fontFamily: "var(--font-mono)", fontSize: ".78rem", letterSpacing: ".18em", color: "var(--muted)", marginBottom: ".6rem" },
  name: {
    fontFamily: "var(--font-display)",
    fontSize: "clamp(4.5rem,12vw,9.5rem)",
    fontWeight: 900,
    lineHeight: .88,
    color: "#fff",
    marginBottom: "1.5rem",
    letterSpacing: "-.02em",
  },
  typedRow: { display: "flex", alignItems: "center", gap: ".75rem", marginBottom: "2rem", flexWrap: "wrap" as const },
  typedLabel: { fontFamily: "var(--font-mono)", fontSize: ".72rem", color: "var(--muted)" },
  typedText: { fontFamily: "var(--font-mono)", fontSize: "1.05rem", color: "var(--acid)", minHeight: "1.6rem" },
  desc: { fontFamily: "var(--font-mono)", fontSize: ".7rem", lineHeight: 2, color: "var(--muted)", maxWidth: 460, marginBottom: "2.5rem" },
  ctaRow: { display: "flex", flexWrap: "wrap" as const, gap: "1rem", marginBottom: "4rem" },
  btnPrimary: {
    background: "var(--acid)", color: "#000",
    fontFamily: "var(--font-mono)", fontSize: ".68rem", fontWeight: 700,
    letterSpacing: ".2em", textTransform: "uppercase" as const,
    padding: ".85rem 1.8rem", textDecoration: "none",
    transition: "background .2s",
    display: "inline-block",
  },
  btnSec: {
    border: "1px solid var(--border)", color: "var(--text)",
    fontFamily: "var(--font-mono)", fontSize: ".68rem",
    letterSpacing: ".2em", textTransform: "uppercase" as const,
    padding: ".85rem 1.8rem", textDecoration: "none",
    transition: "all .2s",
    display: "inline-block",
  },
  statsRow: {
    display: "grid", gridTemplateColumns: "repeat(3,1fr)",
    gap: "2.5rem", maxWidth: 400,
    paddingTop: "2rem", borderTop: "1px solid var(--border)",
  },
  statNum: {
    fontFamily: "var(--font-display)",
    fontSize: "2.8rem", fontWeight: 800,
    color: "var(--acid)",
    textShadow: "0 0 20px rgba(200,255,87,.5)",
  },
  statLbl: { fontFamily: "var(--font-mono)", fontSize: ".58rem", color: "var(--muted)", letterSpacing: ".1em", marginTop: ".2rem" },
  decoBig: {
    position: "absolute" as const, right: "-8vw", top: "8vh",
    width: "58vw", height: "58vw", borderRadius: "50%",
    border: "1px solid var(--border)", opacity: .35,
    pointerEvents: "none" as const,
  },
  decoMid: {
    position: "absolute" as const, right: "-2vw", top: "14vh",
    width: "44vw", height: "44vw", borderRadius: "50%",
    border: "1px solid var(--border)", opacity: .18,
    pointerEvents: "none" as const,
  },
  lineV1: {
    position: "absolute" as const, top: 0, left: "35%",
    width: 1, height: "40vh",
    background: "linear-gradient(to bottom, transparent, rgba(200,255,87,.22), transparent)",
    pointerEvents: "none" as const,
  },
  lineV2: {
    position: "absolute" as const, bottom: 0, right: "28%",
    width: 1, height: "30vh",
    background: "linear-gradient(to top, transparent, rgba(87,240,255,.15), transparent)",
    pointerEvents: "none" as const,
  },
  bracketTR: {
    position: "absolute" as const, top: "1.5rem", right: "1.5rem",
    width: 20, height: 20,
    borderTop: "2px solid rgba(200,255,87,.2)",
    borderRight: "2px solid rgba(200,255,87,.2)",
  },
  bracketBL: {
    position: "absolute" as const, bottom: "1.5rem", left: "1.5rem",
    width: 20, height: 20,
    borderBottom: "2px solid rgba(200,255,87,.2)",
    borderLeft: "2px solid rgba(200,255,87,.2)",
  },
};

export default function Hero() {
  const typed = useTypewriter(ROLES);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section style={S.section} className="scanlines">
      <div style={S.decoBig}  />
      <div style={S.decoMid}  />
      <div style={S.lineV1}   />
      <div style={S.lineV2}   />
      <div style={S.bracketTR} />
      <div style={S.bracketBL} />

      <div style={S.wrap}>
        <div style={{ opacity: mounted ? 1 : 0, transition: "opacity .5s" }}>

          <div style={S.badge}>
            <div className="pulse-dot" />
            <span style={S.badgeText}>Available for opportunities</span>
          </div>

          <div style={S.sub}>&lt;hello world /&gt;</div>

          <div style={S.name} className="glitch" data-text={"Jeswel\nBacolod Villamor"}>
            Jeswel<br />Bacolod Villamor
          </div>

          <div style={S.typedRow}>
            <span style={S.typedLabel}>$ role</span>
            <span style={S.typedText}>
              {typed}<span className="blink" style={{ color: "var(--acid)" }}>▋</span>
            </span>
          </div>

          <p style={S.desc}>
            // Crafting innovative digital solutions with precision.<br />
            // Passionate about clean code and user-centric design.<br />
            // Transforming ideas into powerful, scalable applications.
          </p>

          <div style={S.ctaRow}>
            <a href="#projects" style={S.btnPrimary}
              onMouseEnter={e => ((e.target as HTMLElement).style.background = "#fff")}
              onMouseLeave={e => ((e.target as HTMLElement).style.background = "var(--acid)")}>
              View Work →
            </a>
            <a href="#contact" style={S.btnSec}
              onMouseEnter={e => { const el = e.target as HTMLElement; el.style.borderColor = "var(--acid)"; el.style.color = "var(--acid)"; }}
              onMouseLeave={e => { const el = e.target as HTMLElement; el.style.borderColor = "var(--border)"; el.style.color = "var(--text)"; }}>
              Get In Touch
            </a>
          </div>

          <div style={S.statsRow}>
            {[["6+","Years Exp."],["40+","Projects"],["99.9%","Uptime"]].map(([n,l]) => (
              <div key={l}>
                <div style={S.statNum} className="glow">{n}</div>
                <div style={S.statLbl}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: ".5rem", opacity: .35,
      }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: ".55rem", letterSpacing: ".25em", color: "var(--muted)" }}>SCROLL</span>
        <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, var(--muted), transparent)" }} />
      </div>
    </section>
  );
}
