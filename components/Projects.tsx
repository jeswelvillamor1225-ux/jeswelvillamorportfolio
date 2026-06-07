"use client";
import { useState } from "react";
import { useReveal } from "./useReveal";

const PROJECTS = [
  {
    num: "01", featured: true, category: "web",
    name: "E-Commerce Platform",
    desc: "Modern online shopping experience with real-time inventory, secure payments, and responsive design. Built with Next.js and Stripe integration for seamless transactions.",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind", "PostgreSQL"],
    status: "prod",  statusLabel: "Production",
    live: "#", github: "#",
  },
  {
    num: "02", featured: true, category: "web",
    name: "Task Management App",
    desc: "Collaborative project management tool with drag-and-drop interface, real-time updates, and team analytics. Increases productivity by 40%.",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    status: "prod",   statusLabel: "Production",
    live: "#", github: "#",
  },
  {
    num: "03", featured: true, category: "it",
    name: "CCTV Surveillance Grid",
    desc: "Deployment of an enterprise CCTV network with 32 IP cameras, NVR configuration, remote client viewing, and automated motion alerts.",
    tags: ["CCTV", "NVR", "Networking", "IP Routing", "Security"],
    status: "prod",  statusLabel: "Active Feed",
    live: "#", github: "#",
  },
  {
    num: "04", featured: false, category: "it",
    name: "SMB Network Infrastructure",
    desc: "Designed and installed a high-speed LAN/WAN topology for a business office, including managed switches, security firewall rules, and backup network storage.",
    tags: ["LAN / WAN", "Managed Switches", "Firewall", "DHCP/DNS", "NAS"],
    status: "prod",  statusLabel: "Operational",
    live: "#", github: "#",
  },
  {
    num: "05", featured: false, category: "web",
    name: "Portfolio Website",
    desc: "Personal portfolio showcasing projects with smooth animations, dark mode toggle, and optimized performance for excellent user experience.",
    tags: ["Next.js", "Framer Motion", "SCSS", "SEO"],
    status: "prod",  statusLabel: "Production",
    live: "#", github: "#",
  },
  {
    num: "06", featured: false, category: "web",
    name: "Blog Platform",
    desc: "Content management system with markdown support, comment system, and admin dashboard for seamless content creation and management.",
    tags: ["React", "Express", "JWT", "REST API"],
    status: "dev",   statusLabel: "Development",
    live: "#", github: "#",
  },
];

const STATUS_COLORS: Record<string, { color: string; bg: string; border: string }> = {
  prod: { color: "var(--acid)", bg: "rgba(200,255,87,.07)", border: "rgba(200,255,87,.22)" },
  dev:  { color: "var(--cyan)", bg: "rgba(87,240,255,.07)", border: "rgba(87,240,255,.22)" },
  beta: { color: "var(--red)",  bg: "rgba(255,87,112,.07)", border: "rgba(255,87,112,.22)" },
};

export default function Projects() {
  const { ref, visible } = useReveal();
  const [filter, setFilter] = useState<"all" | "web" | "it">("all");

  const filteredProjects = PROJECTS.filter(p => filter === "all" || p.category === filter);
  const featured = filteredProjects.filter(p => p.featured);
  const normal = filteredProjects.filter(p => !p.featured);

  return (
    <section id="projects" ref={ref as React.RefObject<HTMLElement>}
      style={{ padding: "8rem 0" }}
    >
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 2rem" }}>
        <div className={`reveal ${visible ? "in" : ""}`}>

          {/* Header */}
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "3.5rem", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: ".62rem", letterSpacing: ".3em", color: "var(--acid)", textTransform: "uppercase", marginBottom: "1rem" }}>
                03. Projects
              </p>
              <h2 style={{
                fontFamily: "var(--font-display)", fontSize: "clamp(2.8rem,7vw,5.2rem)",
                fontWeight: 800, lineHeight: .9, color: "#fff",
              }}>
                Selected <span style={{ color: "var(--acid)" }}>Work</span>
              </h2>
            </div>
            <a href="#" style={{
              fontFamily: "var(--font-mono)", fontSize: ".62rem", letterSpacing: ".2em",
              textTransform: "uppercase", color: "var(--muted)", textDecoration: "none",
              borderBottom: "1px solid var(--muted)", paddingBottom: ".2rem",
              transition: "all .2s",
            }}
              onMouseEnter={e => { const el = e.target as HTMLElement; el.style.color = "var(--acid)"; el.style.borderColor = "var(--acid)"; }}
              onMouseLeave={e => { const el = e.target as HTMLElement; el.style.color = "var(--muted)"; el.style.borderColor = "var(--muted)"; }}
            >
              View all →
            </a>
          </div>

          {/* Category Filters */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "3rem" }}>
            {(["all", "web", "it"] as const).map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: ".62rem",
                  letterSpacing: ".2em",
                  textTransform: "uppercase",
                  padding: ".5rem 1.25rem",
                  border: filter === cat ? "1px solid var(--acid)" : "1px solid var(--border)",
                  background: filter === cat ? "var(--acid)" : "transparent",
                  color: filter === cat ? "#000" : "var(--muted)",
                  cursor: "none",
                  transition: "all .2s"
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget;
                  if (filter !== cat) {
                    el.style.borderColor = "var(--acid)";
                    el.style.color = "var(--acid)";
                  }
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget;
                  if (filter !== cat) {
                    el.style.borderColor = "var(--border)";
                    el.style.color = "var(--muted)";
                  }
                }}
              >
                {cat === "all" ? "All Projects" : cat === "web" ? "Web Dev" : "IT & Networking"}
              </button>
            ))}
          </div>

          {/* Featured cards */}
          {featured.length > 0 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "1.5rem" }}>
              {featured.map(p => {
                const sc = STATUS_COLORS[p.status] || STATUS_COLORS.prod;
                return (
                  <div key={p.num} className="card" style={{ padding: "2rem", display: "grid", gridTemplateColumns: "1fr auto", gap: "1.5rem", alignItems: "start" }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: ".75rem" }}>
                        <span style={{ fontFamily: "var(--font-mono)", fontSize: ".62rem", color: "var(--acid)" }}>{p.num}</span>
                        <span style={{
                          fontFamily: "var(--font-mono)", fontSize: ".58rem", letterSpacing: ".14em",
                          textTransform: "uppercase", padding: ".18rem .6rem",
                          color: sc.color, background: sc.bg, border: `1px solid ${sc.border}`,
                        }}>{p.statusLabel}</span>
                      </div>
                      <h3 style={{
                        fontFamily: "var(--font-display)", fontSize: "1.65rem", fontWeight: 700,
                        color: "#fff", marginBottom: ".6rem", transition: "color .2s",
                      }}
                        onMouseEnter={e => ((e.target as HTMLElement).style.color = "var(--acid)")}
                        onMouseLeave={e => ((e.target as HTMLElement).style.color = "#fff")}
                      >{p.name}</h3>
                      <p style={{ fontFamily: "var(--font-mono)", fontSize: ".67rem", lineHeight: 1.9, color: "var(--muted)", maxWidth: 560, marginBottom: "1.25rem" }}>{p.desc}</p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: ".45rem" }}>
                        {p.tags.map(t => <span key={t} className="chip">{t}</span>)}
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: ".6rem", alignItems: "flex-end" }}>
                      <BtnLink href={p.live} variant="primary">Live ↗</BtnLink>
                      <BtnLink href={p.github} variant="ghost">GitHub</BtnLink>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Mini grid */}
          {normal.length > 0 && (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="mini-cols">
              {normal.map(p => {
                return (
                  <div key={p.num} className="card" style={{ padding: "1.5rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: ".62rem", color: "var(--acid)" }}>{p.num}</span>
                      <div style={{ display: "flex", gap: "1rem" }}>
                        <a href={p.github} style={{ fontFamily: "var(--font-mono)", fontSize: ".62rem", color: "var(--muted)", textDecoration: "none", transition: "color .2s" }}
                          onMouseEnter={e => ((e.target as HTMLElement).style.color = "var(--acid)")}
                          onMouseLeave={e => ((e.target as HTMLElement).style.color = "var(--muted)")}>GH</a>
                        <a href={p.live}   style={{ fontFamily: "var(--font-mono)", fontSize: ".62rem", color: "var(--muted)", textDecoration: "none", transition: "color .2s" }}
                          onMouseEnter={e => ((e.target as HTMLElement).style.color = "var(--acid)")}
                          onMouseLeave={e => ((e.target as HTMLElement).style.color = "var(--muted)")}>↗</a>
                      </div>
                    </div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 700, color: "#fff", marginBottom: ".5rem" }}>{p.name}</h3>
                    <p  style={{ fontFamily: "var(--font-mono)", fontSize: ".63rem", lineHeight: 1.8, color: "var(--muted)", marginBottom: "1rem" }}>{p.desc}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: ".4rem" }}>
                      {p.tags.map(t => <span key={t} className="chip">{t}</span>)}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media(max-width:720px){
          .mini-cols { grid-template-columns: 1fr !important; }
          #projects .card { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function BtnLink({ href, variant, children }: { href: string; variant: "primary" | "ghost"; children: React.ReactNode }) {
  const isPrimary = variant === "primary";
  return (
    <a href={href} style={{
      fontFamily: "var(--font-mono)", fontSize: ".6rem", letterSpacing: ".18em",
      textTransform: "uppercase", padding: ".5rem .9rem",
      textDecoration: "none", whiteSpace: "nowrap",
      border: `1px solid ${isPrimary ? "rgba(200,255,87,.35)" : "var(--border)"}`,
      color: isPrimary ? "var(--acid)" : "var(--muted)",
      transition: "all .2s",
    }}
      onMouseEnter={e => {
        const el = e.target as HTMLElement;
        if (isPrimary) { el.style.background = "var(--acid)"; el.style.color = "#000"; }
        else           { el.style.borderColor = "var(--muted)"; el.style.color = "var(--text)"; }
      }}
      onMouseLeave={e => {
        const el = e.target as HTMLElement;
        if (isPrimary) { el.style.background = "transparent"; el.style.color = "var(--acid)"; }
        else           { el.style.borderColor = "var(--border)"; el.style.color = "var(--muted)"; }
      }}
    >{children}</a>
  );
}
