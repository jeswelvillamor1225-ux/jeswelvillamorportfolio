"use client";
import { useState, useEffect } from "react";

export default function SystemStatus() {
  const [cpu, setCpu] = useState(24);
  const [ram, setRam] = useState(48);
  const [ping, setPing] = useState(18);
  const [firewallPackets, setFirewallPackets] = useState(84920);
  const [cctvStatus, setCctvStatus] = useState(["ONLINE", "ONLINE", "ACTIVE"]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Fluctuations
      setCpu(prev => {
        const diff = Math.floor(Math.random() * 9) - 4; // -4 to +4
        return Math.max(10, Math.min(95, prev + diff));
      });
      setRam(prev => {
        const diff = Math.floor(Math.random() * 3) - 1; // -1 to +1
        return Math.max(40, Math.min(60, prev + diff));
      });
      setPing(prev => {
        const diff = Math.floor(Math.random() * 7) - 3; // -3 to +3
        return Math.max(8, Math.min(42, prev + diff));
      });
      setFirewallPackets(prev => prev + Math.floor(Math.random() * 15) + 2);
      
      // CCTV feeds status toggle once in a while
      if (Math.random() > 0.85) {
        setCctvStatus(prev => {
          const next = [...prev];
          const idx = Math.floor(Math.random() * 3);
          next[idx] = next[idx] === "ONLINE" ? "ACTIVE" : "ONLINE";
          return next;
        });
      }
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      border: "1px solid var(--border)",
      background: "rgba(12, 18, 32, 0.45)",
      fontFamily: "var(--font-mono)",
      padding: "1.5rem",
      position: "relative",
      marginTop: "2rem",
      maxWidth: "460px",
      width: "100%",
    }} className="card">
      <div className="corner-tl" />
      <div className="corner-br" />
      
      <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--border)", paddingBottom: ".75rem", marginBottom: "1rem" }}>
        <span style={{ fontSize: ".62rem", letterSpacing: ".2em", color: "var(--acid)" }}>// SYSTEM OPERATIONS</span>
        <span style={{ fontSize: ".58rem", color: "var(--cyan)", display: "flex", alignItems: "center", gap: ".3rem" }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--cyan)", display: "inline-block" }} className="blink" />
          SYS_MONITOR OK
        </span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
        {/* Left Stats */}
        <div style={{ display: "flex", flexDirection: "column", gap: ".75rem" }}>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: ".55rem", color: "var(--muted)", marginBottom: ".25rem" }}>
              <span>GATEWAY CPU</span>
              <span>{cpu}%</span>
            </div>
            <div style={{ height: "4px", background: "var(--border)", overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${cpu}%`, background: "var(--cyan)", transition: "width .5s ease" }} />
            </div>
          </div>

          <div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: ".55rem", color: "var(--muted)", marginBottom: ".25rem" }}>
              <span>BUFFER MEMORY</span>
              <span>{ram}%</span>
            </div>
            <div style={{ height: "4px", background: "var(--border)", overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${ram}%`, background: "var(--acid)", transition: "width .5s ease" }} />
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", fontSize: ".6rem", borderTop: "1px solid var(--border)", paddingTop: ".5rem", marginTop: ".25rem" }}>
            <span style={{ color: "var(--muted)" }}>SYS PING:</span>
            <span style={{ color: "var(--cyan)" }}>{ping} ms</span>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", fontSize: ".6rem" }}>
            <span style={{ color: "var(--muted)" }}>FW PACKETS:</span>
            <span style={{ color: "var(--text)" }}>{firewallPackets.toLocaleString()}</span>
          </div>
        </div>

        {/* Right Stats: CCTV nodes */}
        <div style={{ borderLeft: "1px solid var(--border)", paddingLeft: "1rem", display: "flex", flexDirection: "column", gap: ".5rem" }}>
          <span style={{ fontSize: ".55rem", letterSpacing: ".1em", color: "var(--muted)", textTransform: "uppercase" }}>SURVEILLANCE CAMERAS:</span>
          {cctvStatus.map((status, index) => (
            <div key={index} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: ".6rem" }}>
              <span style={{ color: "var(--text)" }}>CAM_NODE_0{index + 1}</span>
              <span style={{
                color: status === "ACTIVE" ? "var(--red)" : "var(--acid)",
                fontSize: ".5rem",
                letterSpacing: ".05em",
                border: `1px solid ${status === "ACTIVE" ? "rgba(255,87,112,.22)" : "rgba(200,255,87,.22)"}`,
                padding: ".1rem .3rem",
                borderRadius: "2px",
                display: "inline-flex",
                alignItems: "center",
                gap: ".25rem"
              }}>
                {status === "ACTIVE" && <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--red)", display: "inline-block" }} className="blink" />}
                {status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
