"use client";
import { useState } from "react";
import { useReveal } from "./useReveal";

const SOCIALS = [
  { label: "Email",    value: "JeswelVillamor1225@gmail.com",   href: "mailto:JeswelVillamor1225@gmail.com" },
  { label: "LinkedIn", value: "/in/jeswel-villamor",     href: "#" },
  { label: "GitHub",   value: "@jeswel-villamor",       href: "#" },
  { label: "Location", value: "Libo Mohon, Talisay City Cebu",  href: null },
];

export default function Contact() {
  const { ref, visible } = useReveal();
  const [form, setForm]  = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const [sent, setSent]  = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setLogs([]);

    const logMessages = [
      `[SYS] Initializing SMTP connection to mail server...`,
      `[SYS] Handshake established with SSL/TLS protocol.`,
      `[SYS] Encrypting message payload (AES-256-GCM)...`,
      `[MSG] Sender IP resolved. Mailbox verified: ${form.email}`,
      `[MSG] Packet payload size: ${JSON.stringify(form).length} bytes.`,
      `[SYS] Routing packet through secure regional relays...`,
      `[SYS] Executing transmission sequence...`,
      `[SUCCESS] Message successfully delivered to Jeswel's mailbox. Status: 200 OK.`,
    ];

    for (let i = 0; i < logMessages.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 400 + Math.random() * 300));
      setLogs((prev) => [...prev, logMessages[i]]);
    }

    await new Promise((resolve) => setTimeout(resolve, 600));
    setSent(true);
    setSending(false);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "var(--bg)",
    border: "1px solid var(--border)",
    color: "var(--text)",
    fontFamily: "var(--font-mono)",
    fontSize: ".7rem",
    padding: ".85rem 1rem",
    outline: "none",
    transition: "border-color .2s",
  };

  return (
    <section id="contact" ref={ref as React.RefObject<HTMLElement>}
      style={{ padding: "8rem 0", background: "rgba(12,18,32,.5)" }}
    >
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 2rem" }}>
        <div className={`reveal ${visible ? "in" : ""}`}>

          <p style={{ fontFamily: "var(--font-mono)", fontSize: ".62rem", letterSpacing: ".3em", color: "var(--acid)", textTransform: "uppercase", marginBottom: "1rem" }}>
            04. Contact
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem" }} className="contact-cols">

            {/* Left */}
            <div>
              <h2 style={{
                fontFamily: "var(--font-display)", fontSize: "clamp(2.6rem,6vw,4.8rem)",
                fontWeight: 800, lineHeight: .92, color: "#fff", marginBottom: "1.5rem",
              }}>
                Let's Build<br />
                <span style={{ color: "var(--acid)" }}>Something</span><br />
                Together
              </h2>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: ".7rem", lineHeight: 2, color: "var(--muted)", marginBottom: "2.5rem", maxWidth: 400 }}>
                I'm passionate about creating innovative web solutions and open to exciting opportunities. Let's collaborate and bring your ideas to life!
              </p>

              {SOCIALS.map(s => (
                <div key={s.label} style={{ display: "flex", alignItems: "center", gap: "1.5rem", borderBottom: "1px solid var(--border)", paddingBottom: ".9rem", marginBottom: ".9rem" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: ".58rem", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--muted)", width: 70, flexShrink: 0 }}>
                    {s.label}
                  </span>
                  {s.href ? (
                    <a href={s.href} style={{ fontFamily: "var(--font-mono)", fontSize: ".72rem", color: "var(--text)", textDecoration: "none", transition: "color .2s" }}
                      onMouseEnter={e => ((e.target as HTMLElement).style.color = "var(--acid)")}
                      onMouseLeave={e => ((e.target as HTMLElement).style.color = "var(--text)")}
                    >{s.value}</a>
                  ) : (
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: ".72rem", color: "var(--text)" }}>{s.value}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Right: form */}
            <div>
              {sending ? (
                <div style={{
                  border: "1px solid var(--acid)",
                  background: "rgba(6, 10, 18, 0.95)",
                  fontFamily: "var(--font-mono)",
                  fontSize: ".65rem",
                  padding: "2rem",
                  minHeight: "280px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between"
                }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: ".4rem", textAlign: "left" }}>
                    <div style={{ color: "var(--acid)", borderBottom: "1px solid var(--border)", paddingBottom: ".5rem", marginBottom: ".5rem", display: "flex", justifyContent: "space-between" }}>
                      <span>MESSAGING SHELL v1.0</span>
                      <span className="blink">● TRANSMITTING</span>
                    </div>
                    {logs.map((log, idx) => (
                      <div key={idx} style={{ color: log.includes("SUCCESS") ? "var(--acid)" : log.includes("MSG") ? "var(--cyan)" : "var(--text)", minHeight: "1.2rem" }}>
                        {log}
                      </div>
                    ))}
                    <div className="blink" style={{ color: "var(--acid)", marginTop: "0.2rem" }}>▋</div>
                  </div>
                </div>
              ) : sent ? (
                <div style={{
                  border: "1px solid rgba(200,255,87,.25)",
                  background: "rgba(200,255,87,.04)",
                  padding: "3rem", textAlign: "center",
                }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "2.5rem", color: "var(--acid)", marginBottom: "1rem" }}>✓</div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", fontWeight: 700, color: "#fff", marginBottom: ".5rem" }}>Message Received</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: ".65rem", color: "var(--muted)", marginBottom: "1.5rem" }}>I'll get back to you within 48 hours.</div>
                  <button 
                    onClick={() => { setSent(false); setForm({ name: "", email: "", message: "" }); }}
                    style={{
                      background: "transparent",
                      border: "1px solid var(--border)",
                      color: "var(--muted)",
                      fontFamily: "var(--font-mono)",
                      fontSize: ".6rem",
                      padding: ".4rem 1rem",
                      cursor: "none",
                      transition: "all .2s"
                    }}
                    onMouseEnter={e => { const el = e.target as HTMLElement; el.style.borderColor = "var(--acid)"; el.style.color = "var(--acid)"; }}
                    onMouseLeave={e => { const el = e.target as HTMLElement; el.style.borderColor = "var(--border)"; el.style.color = "var(--muted)"; }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  {(["name","email","message"] as const).map(field => (
                    <div key={field}>
                      <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: ".58rem", letterSpacing: ".25em", textTransform: "uppercase", color: "var(--acid)", marginBottom: ".5rem" }}>
                        {field.charAt(0).toUpperCase() + field.slice(1)}
                      </label>
                      {field === "message" ? (
                        <textarea
                          rows={6}
                          required
                          placeholder={field === "message" ? "Tell me about your project..." : ""}
                          value={form[field]}
                          onChange={e => setForm(f => ({ ...f, [field]: e.target.value }))}
                          style={{ ...inputStyle, resize: "none" }}
                          onFocus={e => (e.target.style.borderColor = "var(--acid)")}
                          onBlur={e  => (e.target.style.borderColor = "var(--border)")}
                        />
                      ) : (
                        <input
                          type={field === "email" ? "email" : "text"}
                          required
                          placeholder={field === "email" ? "you@example.com" : "Your name"}
                          value={form[field]}
                          onChange={e => setForm(f => ({ ...f, [field]: e.target.value }))}
                          style={inputStyle}
                          onFocus={e => (e.target.style.borderColor = "var(--acid)")}
                          onBlur={e  => (e.target.style.borderColor = "var(--border)")}
                        />
                      )}
                    </div>
                  ))}
                  <button type="submit" style={{
                    width: "100%",
                    background: "var(--acid)", color: "#000",
                    fontFamily: "var(--font-mono)", fontSize: ".7rem", fontWeight: 700,
                    letterSpacing: ".2em", textTransform: "uppercase",
                    padding: "1rem", border: "none", cursor: "none",
                    transition: "background .2s",
                  }}
                    onMouseEnter={e => ((e.target as HTMLElement).style.background = "#fff")}
                    onMouseLeave={e => ((e.target as HTMLElement).style.background = "var(--acid)")}
                  >
                    Send Message →
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Footer */}
          <div style={{
            marginTop: "5rem", paddingTop: "2rem", borderTop: "1px solid var(--border)",
            display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem",
          }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 800, letterSpacing: ".12em" }}>
              <span style={{ color: "var(--acid)" }}>JV</span>
              <span style={{ color: "var(--muted)", margin: "0 .3rem" }}>/</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: ".65rem", color: "var(--muted)" }}>DEV</span>
            </div>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: ".6rem", color: "var(--muted)" }}>
              © 2024 Jeswel Bacolod Villamor. Built with Next.js.
            </span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: ".62rem", color: "var(--acid)" }} className="blink">
              &gt; Available for work_
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          .contact-cols { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
