"use client";
import { useState, useRef, useEffect } from "react";
import { playClickSound, playKeySound, playSuccessSound, playFailSound } from "./sound";

const COMMANDS_LIST = [
  { name: "help",     desc: "Show available commands" },
  { name: "about",    desc: "About Jeswel B. Villamor" },
  { name: "skills",   desc: "List technician & development skills" },
  { name: "projects", desc: "List portfolio works" },
  { name: "contact",  desc: "Get contact pathways" },
  { name: "scan",     desc: "Execute hardware & gateway security scan" },
  { name: "clear",    desc: "Clear screen buffer" },
  { name: "exit",     desc: "Close terminal shell" },
];

export default function TerminalCLI() {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState<string[]>([
    "J_V_TERMINAL SHELL v1.4 - INITIALIZED",
    "Type 'help' to view available commands.",
    ""
  ]);
  const [input, setInput] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history, isOpen]);

  const toggleOpen = () => {
    const next = !isOpen;
    setIsOpen(next);
    playClickSound(1000, 0.05);
    if (next) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    playKeySound();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeCommand();
    }
  };

  const executeCommand = async () => {
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    setHistory(prev => [...prev, `> ${input}`]);
    setInput("");
    
    // Play execution beep
    playClickSound(900, 0.02);

    switch (cmd) {
      case "help":
        setHistory(prev => [
          ...prev,
          "SYSTEM SHELL COMMANDS:",
          ...COMMANDS_LIST.map(c => `  ${c.name.padEnd(12)} - ${c.desc}`),
          ""
        ]);
        break;
      case "about":
        setHistory(prev => [
          ...prev,
          "JESWEL BACOLOD VILLAMOR",
          "Role: IT Support / Technician & Basic Web Developer",
          "Bio: Highly trained in network topologies, printer maintenance,",
          "     CCTV surveillance grid operations, and modern web frameworks.",
          "Location: Talisay City, Cebu, Philippines",
          ""
        ]);
        break;
      case "skills":
        setHistory(prev => [
          ...prev,
          "TECHNICAL ARSENAL:",
          "  • IT Support: Computer/Printer diagnostics & repair",
          "  • Surveillance: CCTV system layout, installation & config",
          "  • Networking: LAN/WAN connectivity, Managed Switches, Firewalls",
          "  • Software: React, Next.js, HTML, CSS, Git, VS Code",
          ""
        ]);
        break;
      case "projects":
        setHistory(prev => [
          ...prev,
          "PORTFOLIO DIRECTORY:",
          "  1. CCTV Surveillance Grid [Active Feed] - 32 Node Surveillance Setup",
          "  2. SMB Network Infrastructure [Operational] - Managed Switches/Firewall LAN topology",
          "  3. E-Commerce Platform [Production] - Next.js/Stripe Integration",
          "  4. Task Management App [Production] - React/MongoDB Collaborative suite",
          ""
        ]);
        break;
      case "contact":
        setHistory(prev => [
          ...prev,
          "COMMUNICATION PATHWAYS:",
          "  • Email:    JeswelVillamor1225@gmail.com",
          "  • Phone:    09365943473",
          "  • LinkedIn: linkedin.com/in/jeswel-villamor (placeholder)",
          "  • GitHub:   github.com/jeswel-villamor (placeholder)",
          ""
        ]);
        break;
      case "scan":
        setHistory(prev => [...prev, "[SCAN] Commencing diagnostic run...", "[SCAN] Checking client connections..."]);
        
        await new Promise(r => setTimeout(r, 600));
        playSuccessSound();
        setHistory(prev => [...prev, "  » User OS: Windows (Simulated)", "  » Connection Latency: 24ms", "  » Security Profile: FIREWALL ENFORCED"]);
        
        await new Promise(r => setTimeout(r, 800));
        playSuccessSound();
        setHistory(prev => [...prev, "[SCAN] Analyzing network camera nodes...", "  » CAM_01: ONLINE", "  » CAM_02: ONLINE", "  » CAM_03: ONLINE", "  » System health index: 99.8%", "  » ALL SYSTEMS SECURE.", ""]);
        break;
      case "clear":
        setHistory([]);
        break;
      case "exit":
        setIsOpen(false);
        break;
      default:
        playFailSound();
        setHistory(prev => [...prev, `Unrecognized instruction: '${cmd}'. Type 'help' for command directory.`, ""]);
    }
  };

  return (
    <>
      {/* Floating launcher button */}
      {!isOpen && (
        <button
          onClick={toggleOpen}
          style={{
            position: "fixed",
            bottom: "2rem",
            right: "2rem",
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            background: "rgba(12, 18, 32, 0.9)",
            border: "2px solid var(--acid)",
            color: "var(--acid)",
            fontSize: "1.2rem",
            fontWeight: "bold",
            cursor: "none",
            zIndex: 999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 15px rgba(200, 255, 87, 0.4)",
            transition: "all .3s"
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = "scale(1.1)";
            e.currentTarget.style.boxShadow = "0 0 25px rgba(200, 255, 87, 0.7)";
            playClickSound(1300, 0.005);
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 0 15px rgba(200, 255, 87, 0.4)";
          }}
          title="Open System Shell CLI"
        >
          &gt;_
        </button>
      )}

      {/* Terminal panel */}
      {isOpen && (
        <div style={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          width: "480px",
          height: "360px",
          background: "rgba(6, 10, 18, 0.95)",
          border: "2px solid var(--acid)",
          borderRadius: "8px",
          boxShadow: "0 22px 60px rgba(0,0,0,.75)",
          zIndex: 999,
          display: "flex",
          flexDirection: "column",
          fontFamily: "var(--font-mono)",
          overflow: "hidden",
        }} className="scanlines">
          {/* Header */}
          <div style={{
            background: "var(--surface)",
            borderBottom: "1px solid var(--border)",
            padding: ".5rem 1rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            userSelect: "none"
          }}>
            <span style={{ color: "var(--acid)", fontSize: ".62rem", letterSpacing: ".15em" }}>OPERATIONAL_SHELL.EXE</span>
            <button
              onClick={toggleOpen}
              style={{
                background: "transparent",
                border: "none",
                color: "var(--muted)",
                cursor: "none",
                fontSize: ".8rem",
                padding: ".2rem .5rem"
              }}
              onMouseEnter={e => { e.currentTarget.style.color = "var(--red)"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "var(--muted)"; }}
            >
              ✕
            </button>
          </div>

          {/* Buffer Screen */}
          <div
            ref={containerRef}
            style={{
              flex: 1,
              padding: "1rem",
              overflowY: "auto",
              fontSize: ".65rem",
              color: "var(--text)",
              display: "flex",
              flexDirection: "column",
              gap: ".3rem",
              lineHeight: 1.5
            }}
          >
            {history.map((line, i) => (
              <div key={i} style={{
                color: line.startsWith(">") ? "var(--cyan)" : line.startsWith("[SCAN]") ? "var(--cyan)" : line.startsWith("  »") ? "var(--acid)" : "var(--text)",
                whiteSpace: "pre-wrap"
              }}>
                {line}
              </div>
            ))}
          </div>

          {/* Command Prompt Input */}
          <div style={{
            borderTop: "1px solid var(--border)",
            padding: ".65rem 1rem",
            background: "var(--surface)",
            display: "flex",
            alignItems: "center",
            gap: ".5rem"
          }}>
            <span style={{ color: "var(--acid)", fontSize: ".65rem" }}>$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              style={{
                flex: 1,
                background: "transparent",
                border: "none",
                outline: "none",
                color: "var(--acid)",
                fontFamily: "var(--font-mono)",
                fontSize: ".65rem",
                caretColor: "transparent"
              }}
              placeholder="Type command..."
              autoFocus
            />
            <span className="blink" style={{ color: "var(--acid)", fontSize: ".65rem", marginLeft: "-.5rem" }}>▋</span>
          </div>
        </div>
      )}

      {/* Responsiveness style */}
      <style>{`
        @media(max-width:540px){
          .scanlines {
            width: calc(100vw - 2rem) !important;
            height: 320px !important;
            right: 1rem !important;
            bottom: 1rem !important;
          }
        }
      `}</style>
    </>
  );
}
