"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const LINKS = [
  { href: "#about",    label: "About",    n: "01" },
  { href: "#skills",   label: "Skills",   n: "02" },
  { href: "#projects", label: "Projects", n: "03" },
  { href: "#resume",   label: "Resume",   n: "04" },
  { href: "#contact",  label: "Contact",  n: "05" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        transition: "background .4s, border-color .4s",
        background: scrolled ? "rgba(6,10,18,.92)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <nav
        style={{
          maxWidth: 1120, margin: "0 auto",
          padding: "1.25rem 2rem",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: ".3rem" }}>
          <span style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 800, letterSpacing: ".12em", color: "var(--acid)" }}>JV</span>
          <span style={{ color: "var(--muted)", margin: "0 .2rem" }}>/</span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: ".65rem", color: "var(--muted)", letterSpacing: ".15em" }}>DEV</span>
        </Link>

        {/* Desktop links */}
        <ul style={{ display: "flex", gap: "2.5rem", listStyle: "none" }} className="hidden-mobile">
          {LINKS.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                style={{
                  fontFamily: "var(--font-mono)", fontSize: ".62rem",
                  letterSpacing: ".22em", textTransform: "uppercase",
                  color: "var(--muted)", textDecoration: "none",
                  transition: "color .2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--acid)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
              >
                <span style={{ color: "var(--acid)", marginRight: ".25rem" }}>{l.n}.</span>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Resume btn */}
        <a
          href="/resume.pdf"
          className="hidden-mobile"
          style={{
            fontFamily: "var(--font-mono)", fontSize: ".62rem",
            letterSpacing: ".2em", textTransform: "uppercase",
            border: "1px solid var(--acid)", color: "var(--acid)",
            padding: ".45rem 1.1rem", textDecoration: "none",
            transition: "all .2s",
          }}
          onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = "var(--acid)"; el.style.color = "#000"; }}
          onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = "transparent"; el.style.color = "var(--acid)"; }}
        >
          Resume
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(o => !o)}
          className="show-mobile"
          style={{ background: "none", border: "none", cursor: "pointer", padding: ".5rem", display: "flex", flexDirection: "column", gap: "5px" }}
          aria-label="Toggle menu"
        >
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: "block", width: 24, height: 1,
              background: "var(--acid)",
              transition: "transform .3s, opacity .3s",
              transform: open
                ? i === 0 ? "rotate(45deg) translate(4px,4px)"
                : i === 1 ? "scaleX(0)"
                : "rotate(-45deg) translate(4px,-4px)"
                : "none",
              opacity: open && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div style={{
          borderTop: "1px solid var(--border)",
          background: "var(--surface)",
          padding: "2rem",
          display: "flex", flexDirection: "column", gap: "1.5rem",
        }}>
          {LINKS.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ fontFamily: "var(--font-mono)", fontSize: ".75rem", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--text)", textDecoration: "none" }}>
              <span style={{ color: "var(--acid)", marginRight: ".5rem" }}>{l.n}.</span>{l.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        .hidden-mobile { display: flex !important; }
        .show-mobile   { display: none  !important; }
        @media(max-width:768px){
          .hidden-mobile { display: none  !important; }
          .show-mobile   { display: flex  !important; }
        }
      `}</style>
    </header>
  );
}
