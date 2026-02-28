"use client";
import { useReveal } from "./useReveal";
import { useState } from "react";

const MEDIA_ITEMS = [
  {
    type: "video",
    title: "Technical Demonstration 1",
    description: "Network setup and configuration demonstration",
    file: "Recording 2026-02-28 161212.mp4",
    thumbnail: "manage.png"
  },
  {
    type: "video", 
    title: "Technical Demonstration 2",
    description: "Hardware maintenance and troubleshooting",
    file: "Recording 2026-02-28 161419.mp4",
    thumbnail: "motherboard.png"
  },
  {
    type: "image",
    title: "Network Management",
    description: "Professional network management setup",
    file: "manage.png"
  },
  {
    type: "image",
    title: "Managed Switch Configuration", 
    description: "Enterprise network switch setup",
    file: "managedswitch.png"
  },
  {
    type: "image",
    title: "Hardware Assembly",
    description: "Computer hardware installation and configuration",
    file: "motherboard.png"
  }
];

export default function Media() {
  const { ref, visible } = useReveal();
  const [selectedMedia, setSelectedMedia] = useState<typeof MEDIA_ITEMS[0] | null>(null);

  return (
    <section id="media" ref={ref as React.RefObject<HTMLElement>}
      style={{ padding: "8rem 0", background: "rgba(12,18,32,.5)" }}
    >
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 2rem" }}>
        <div className={`reveal ${visible ? "in" : ""}`}>

          <p style={{ fontFamily: "var(--font-mono)", fontSize: ".62rem", letterSpacing: ".3em", color: "var(--acid)", textTransform: "uppercase", marginBottom: "1rem" }}>
            06. Media Gallery
          </p>
          <h2 style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(2.8rem,7vw,5.2rem)",
            fontWeight: 800, lineHeight: .9, color: "#fff", marginBottom: "3rem",
          }}>
            Technical <span style={{ color: "var(--acid)" }}>Showcase</span>
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem" }}>
            {MEDIA_ITEMS.map((item, index) => (
              <div key={index} className="card" style={{ 
                padding: "1.5rem", 
                cursor: "pointer",
                transition: "transform .2s, border-color .2s",
                border: "1px solid var(--border)",
                transform: selectedMedia === item ? "scale(1.02)" : "scale(1)",
                borderColor: selectedMedia === item ? "var(--acid)" : "var(--border)"
              }}
                onClick={() => setSelectedMedia(item)}
                onMouseEnter={e => { 
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--acid)";
                  el.style.transform = "scale(1.02)";
                }}
                onMouseLeave={e => { 
                  const el = e.currentTarget as HTMLElement;
                  if (selectedMedia !== item) {
                    el.style.borderColor = "var(--border)";
                    el.style.transform = "scale(1)";
                  }
                }}
              >
                {/* Preview */}
                <div style={{ 
                  aspectRatio: "16/9", 
                  background: "linear-gradient(135deg, var(--surface), var(--bg))",
                  borderRadius: "8px",
                  marginBottom: "1rem",
                  overflow: "hidden",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  {item.type === "video" ? (
                    <>
                      <img 
                        src={`/${item.thumbnail}`} 
                        alt={item.title}
                        style={{ 
                          width: "100%", 
                          height: "100%", 
                          objectFit: "cover",
                          position: "absolute"
                        }}
                      />
                      <div style={{
                        position: "absolute",
                        width: "60px",
                        height: "60px",
                        background: "rgba(200,255,87,.9)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#000",
                        fontSize: "1.5rem",
                        fontWeight: "bold"
                      }}>
                        ▶
                      </div>
                    </>
                  ) : (
                    <img 
                      src={`/${item.file}`} 
                      alt={item.title}
                      style={{ 
                        width: "100%", 
                        height: "100%", 
                        objectFit: "cover"
                      }}
                    />
                  )}
                </div>

                {/* Info */}
                <h3 style={{
                  fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 700,
                  color: "#fff", marginBottom: ".5rem"
                }}>
                  {item.title}
                </h3>
                <p style={{ 
                  fontFamily: "var(--font-mono)", 
                  fontSize: ".65rem", 
                  color: "var(--muted)", 
                  marginBottom: "1rem",
                  lineHeight: 1.6
                }}>
                  {item.description}
                </p>
                <div style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: ".5rem",
                  fontFamily: "var(--font-mono)",
                  fontSize: ".6rem",
                  color: "var(--acid)"
                }}>
                  <span>{item.type === "video" ? "🎥" : "🖼️"}</span>
                  <span>{item.type === "video" ? "Video" : "Image"}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Modal for selected media */}
          {selectedMedia && (
            <div style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0,0,0,.9)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1000,
              padding: "2rem"
            }}
              onClick={() => setSelectedMedia(null)}
            >
              <div style={{
                maxWidth: "900px",
                width: "100%",
                background: "var(--bg)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                overflow: "hidden"
              }}
                onClick={e => e.stopPropagation()}
              >
                {/* Header */}
                <div style={{
                  padding: "1.5rem",
                  borderBottom: "1px solid var(--border)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}>
                  <div>
                    <h3 style={{
                      fontFamily: "var(--font-display)", fontSize: "1.3rem", fontWeight: 700,
                      color: "#fff", marginBottom: ".3rem"
                    }}>
                      {selectedMedia.title}
                    </h3>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: ".65rem", color: "var(--muted)" }}>
                      {selectedMedia.description}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedMedia(null)}
                    style={{
                      background: "none",
                      border: "none",
                      color: "var(--muted)",
                      fontSize: "1.5rem",
                      cursor: "pointer",
                      padding: ".5rem",
                      fontFamily: "var(--font-mono)"
                    }}
                  >
                    ✕
                  </button>
                </div>

                {/* Content */}
                <div style={{ padding: "1.5rem" }}>
                  {selectedMedia.type === "video" ? (
                    <video 
                      controls 
                      style={{ 
                        width: "100%", 
                        borderRadius: "8px",
                        maxHeight: "500px"
                      }}
                    >
                      <source src={`/${selectedMedia.file}`} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img 
                      src={`/${selectedMedia.file}`} 
                      alt={selectedMedia.title}
                      style={{ 
                        width: "100%", 
                        borderRadius: "8px",
                        maxHeight: "500px",
                        objectFit: "contain"
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          )}

        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @media(max-width:768px){
            #media .reveal > div { grid-template-columns: 1fr !important; }
          }
        `
      }} />
    </section>
  );
}
