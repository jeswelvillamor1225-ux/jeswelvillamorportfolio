"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { playClickSound, getSoundEnabled, setSoundEnabled } from "./sound";

const LINKS = [
  { href: "#about",    label: "About",    n: "01" },
  { href: "#skills",   label: "Skills",   n: "02" },
  { href: "#projects", label: "Projects", n: "03" },
  { href: "#resume",   label: "Resume",   n: "04" },
  { href: "#media",    label: "Media",    n: "05" },
  { href: "#contact",  label: "Contact",  n: "06" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const [soundOn, setSoundOn]   = useState(true);
  const [crtOn, setCrtOn]       = useState(true);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", fn);
    
    // Initialize sound and CRT settings from local storage / default
    const savedSound = getSoundEnabled();
    setSoundOn(savedSound);

    const savedCrt = localStorage.getItem("crt-enabled") !== "false";
    setCrtOn(savedCrt);
    if (savedCrt) {
      document.documentElement.classList.add("crt-active");
    } else {
      document.documentElement.classList.remove("crt-active");
    }

    return () => window.removeEventListener("scroll", fn);
  }, []);

  const toggleSound = () => {
    const nextVal = !soundOn;
    setSoundOn(nextVal);
    setSoundEnabled(nextVal);
    if (nextVal) {
      // Small bleep to demonstrate it's on
      setTimeout(() => playClickSound(800, 0.05), 50);
    }
  };

  const toggleCrt = () => {
    const nextVal = !crtOn;
    setCrtOn(nextVal);
    localStorage.setItem("crt-enabled", nextVal ? "true" : "false");
    if (nextVal) {
      document.documentElement.classList.add("crt-active");
    } else {
      document.documentElement.classList.remove("crt-active");
    }
    playClickSound(1000, 0.03);
  };

  const handleLinkClick = () => {
    playClickSound(900, 0.02);
    setOpen(false);
  };

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
        <Link href="/" onClick={() => playClickSound(1100, 0.02)} style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: ".3rem" }}>
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
                onClick={handleLinkClick}
                style={{
                  fontFamily: "var(--font-mono)", fontSize: ".62rem",
                  letterSpacing: ".22em", textTransform: "uppercase",
                  color: "var(--muted)", textDecoration: "none",
                  transition: "color .2s",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = "var(--acid)";
                  playClickSound(1400, 0.005);
                }}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
              >
                <span style={{ color: "var(--acid)", marginRight: ".25rem" }}>{l.n}.</span>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Controls and Resume btn */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }} className="hidden-mobile">
          <button
            onClick={toggleSound}
            title="Toggle Terminal Audio"
            style={{
              background: "transparent",
              border: "1px solid var(--border)",
              color: soundOn ? "var(--acid)" : "var(--muted)",
              fontFamily: "var(--font-mono)",
              fontSize: ".55rem",
              letterSpacing: ".1em",
              padding: ".35rem .6rem",
              cursor: "none",
              transition: "all .2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--acid)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; }}
          >
            SOUND: {soundOn ? "ON" : "OFF"}
          </button>
          
          <button
            onClick={toggleCrt}
            title="Toggle Scanline Filter"
            style={{
              background: "transparent",
              border: "1px solid var(--border)",
              color: crtOn ? "var(--acid)" : "var(--muted)",
              fontFamily: "var(--font-mono)",
              fontSize: ".55rem",
              letterSpacing: ".1em",
              padding: ".35rem .6rem",
              cursor: "none",
              transition: "all .2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--acid)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; }}
          >
            CRT: {crtOn ? "ON" : "OFF"}
          </button>

          <a
            href="/Jeswel_Villamor_Modern_IT_Resume.pdf"
            onClick={() => playClickSound(1200, 0.05)}
            style={{
              fontFamily: "var(--font-mono)", fontSize: ".62rem",
              letterSpacing: ".2em", textTransform: "uppercase",
              border: "1px solid var(--acid)", color: "var(--acid)",
              padding: ".45rem 1.1rem", textDecoration: "none",
              transition: "all .2s",
              marginLeft: ".5rem"
            }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = "var(--acid)"; el.style.color = "#000"; playClickSound(1400, 0.005); }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = "transparent"; el.style.color = "var(--acid)"; }}
          >
            Resume
          </a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => { setOpen(o => !o); playClickSound(1000, 0.02); }}
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
            <a key={l.href} href={l.href} onClick={handleLinkClick}
              style={{ fontFamily: "var(--font-mono)", fontSize: ".75rem", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--text)", textDecoration: "none" }}>
              <span style={{ color: "var(--acid)", marginRight: ".5rem" }}>{l.n}.</span>{l.label}
            </a>
          ))}
          <div style={{ display: "flex", gap: "1rem", marginTop: "1rem", borderTop: "1px solid var(--border)", paddingTop: "1.5rem" }}>
            <button onClick={toggleSound} style={{ background: "transparent", border: "1px solid var(--border)", color: soundOn ? "var(--acid)" : "var(--muted)", padding: ".45rem .8rem", fontSize: ".65rem", fontFamily: "var(--font-mono)", flex: 1 }}>
              SOUND: {soundOn ? "ON" : "OFF"}
            </button>
            <button onClick={toggleCrt} style={{ background: "transparent", border: "1px solid var(--border)", color: crtOn ? "var(--acid)" : "var(--muted)", padding: ".45rem .8rem", fontSize: ".65rem", fontFamily: "var(--font-mono)", flex: 1 }}>
              CRT: {crtOn ? "ON" : "OFF"}
            </button>
          </div>
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
