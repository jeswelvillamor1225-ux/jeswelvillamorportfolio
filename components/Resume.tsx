"use client";
import { useReveal } from "./useReveal";

const RESUME_DATA = {
  personal: {
    name: "Jeswel B. Villamor",
    email: "JeswelVillamor4@gmail.com",
    phone: "09365943473",
    address: "Libo Mohon, Talisay City Cebu",
    age: 27,
    birthdate: "December 25, 1998",
    birthplace: "Libo Mohon, Talisay City Cebu",
    civilStatus: "Single",
    desiredPosition: "I.T Support or Technician"
  },
  objective: "To obtain a challenging position in the field of Information Technology where I can utilize my skills and knowledge to contribute to the success of the organization.",
  education: [
    {
      level: "Tertiary",
      school: "Talisay City College",
      location: "Talisay City Cebu",
      period: "2019-2020"
    },
    {
      level: "Secondary",
      school: "Mohon National High School",
      location: "Mohon Talisay City, Cebu",
      period: "2014-2015"
    },
    {
      level: "Elementary",
      school: "Mohon Elementary School",
      location: "Mohon Talisay City, Cebu",
      period: "2010-2011"
    }
  ],
  workExperience: [
    {
      position: "CCTV Operator",
      company: "CT-TODA",
      period: "July 2021 - June 2022"
    },
    {
      position: "Sales & Maintenance Technician",
      company: "Rd Computers Sales & Maintenance Co.",
      period: "September 2020 - May 2021"
    },
    {
      position: "OJT - Sales & Maintenance",
      company: "Rd Computers Sales & Maintenance Co.",
      period: "May 2019 - March 2020"
    },
    {
      position: "All around Clerk",
      company: "7/11",
      period: "May 2015 - January 2016"
    }
  ],
  training: [
    {
      title: "Advance ROTC Academic Phase Training (MS 41-42) CL 09-18",
      organizer: "7th Regional Community Defense Group, ARESCOM",
      date: "June 11, 2018"
    },
    {
      title: "Advance ROTC Academic Phase Training (MS 31 and 32) CL 08-17",
      organizer: "7th Regional Community Defense Group, ARESCOM",
      date: "May 16, 2017"
    },
    {
      title: "ROTC Summer Camp Training (MS-3) Class 14-2017",
      organizer: "7th Regional Community Defense Group, ARESCOM",
      date: "May 3, 2017"
    },
    {
      title: "Reserve Officer Training Corps (ROTC) Component",
      organizer: "Talisay City College (A) ROTC unit",
      date: "March 28, 2017"
    }
  ],
  skills: [
    "Computer Technician",
    "Printer Technician", 
    "CCTV Installer",
    "CCTV Technician",
    "Basic Web Development",
    "Network Engineer Jr. Staff",
    "LAN / WAN & Connectivity",
    "Microsoft Office",
    "Firewall"
  ],
  affiliations: [
    {
      organization: "Reserve Officer Training Corps (ROTC) Talisay City College",
      positions: ["Band Officer Leader (2017-2018)", "Corps S3 Discipline Officer (2018-2019)"]
    },
    {
      organization: "Pag-asa Youth Association Philippines (PYAP) Mohon Talisay City, Cebu",
      positions: ["Sgt. Arms"]
    }
  ]
};

export default function Resume() {
  const { ref, visible } = useReveal();

  return (
    <section id="resume" ref={ref as React.RefObject<HTMLElement>}
      style={{ padding: "8rem 0", background: "rgba(12,18,32,.5)" }}
    >
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 2rem" }}>
        <div className={`reveal ${visible ? "in" : ""}`}>

          <p style={{ fontFamily: "var(--font-mono)", fontSize: ".62rem", letterSpacing: ".3em", color: "var(--acid)", textTransform: "uppercase", marginBottom: "1rem" }}>
            05. Resume
          </p>
          <h2 style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(2.8rem,7vw,5.2rem)",
            fontWeight: 800, lineHeight: .9, color: "#fff", marginBottom: "3rem",
          }}>
            Professional <span style={{ color: "var(--acid)" }}>Background</span>
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "3rem", marginBottom: "3rem" }}>
            {/* Personal Information */}
            <div className="card" style={{ padding: "2rem" }}>
              <h3 style={{
                fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 700,
                color: "var(--acid)", marginBottom: "1.5rem"
              }}>
                {RESUME_DATA.personal.name}
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: ".8rem" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: ".65rem", color: "var(--text)" }}>
                  <span style={{ color: "var(--acid)" }}>Email:</span> {RESUME_DATA.personal.email}
                </div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: ".65rem", color: "var(--text)" }}>
                  <span style={{ color: "var(--acid)" }}>Phone:</span> {RESUME_DATA.personal.phone}
                </div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: ".65rem", color: "var(--text)" }}>
                  <span style={{ color: "var(--acid)" }}>Location:</span> {RESUME_DATA.personal.address}
                </div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: ".65rem", color: "var(--text)" }}>
                  <span style={{ color: "var(--acid)" }}>Age:</span> {RESUME_DATA.personal.age}
                </div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: ".65rem", color: "var(--text)" }}>
                  <span style={{ color: "var(--acid)" }}>Position:</span> {RESUME_DATA.personal.desiredPosition}
                </div>
              </div>
            </div>

            {/* Objective */}
            <div className="card" style={{ padding: "2rem" }}>
              <h3 style={{
                fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 700,
                color: "#fff", marginBottom: "1rem"
              }}>
                Objective
              </h3>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: ".7rem", lineHeight: 1.8, color: "var(--muted)" }}>
                {RESUME_DATA.objective}
              </p>
            </div>
          </div>

          {/* Work Experience */}
          <div className="card" style={{ padding: "2rem", marginBottom: "2rem" }}>
            <h3 style={{
              fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 700,
              color: "#fff", marginBottom: "1.5rem"
            }}>
              Work Experience
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {RESUME_DATA.workExperience.map((work, index) => (
                <div key={index} style={{ 
                  borderBottom: index < RESUME_DATA.workExperience.length - 1 ? "1px solid var(--border)" : "none",
                  paddingBottom: index < RESUME_DATA.workExperience.length - 1 ? "1.5rem" : "0"
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: ".5rem", flexWrap: "wrap", gap: ".5rem" }}>
                    <h4 style={{
                      fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: 600,
                      color: "var(--acid)"
                    }}>
                      {work.position}
                    </h4>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: ".6rem", color: "var(--muted)" }}>
                      {work.period}
                    </span>
                  </div>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: ".65rem", color: "var(--text)" }}>
                    {work.company}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Skills Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginBottom: "2rem" }}>
            {/* Education */}
            <div className="card" style={{ padding: "2rem" }}>
              <h3 style={{
                fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 700,
                color: "#fff", marginBottom: "1.5rem"
              }}>
                Education
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {RESUME_DATA.education.map((edu, index) => (
                  <div key={index}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: ".3rem" }}>
                      <h4 style={{
                        fontFamily: "var(--font-display)", fontSize: ".9rem", fontWeight: 600,
                        color: "var(--acid)"
                      }}>
                        {edu.level}
                      </h4>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: ".6rem", color: "var(--muted)" }}>
                        {edu.period}
                      </span>
                    </div>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: ".65rem", color: "var(--text)" }}>
                      {edu.school}
                    </p>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: ".6rem", color: "var(--muted)" }}>
                      {edu.location}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="card" style={{ padding: "2rem" }}>
              <h3 style={{
                fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 700,
                color: "#fff", marginBottom: "1.5rem"
              }}>
                Technical Skills
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: ".5rem" }}>
                {RESUME_DATA.skills.map((skill, index) => (
                  <div key={index} style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
                    <span style={{ color: "var(--acid)", fontFamily: "var(--font-mono)", fontSize: ".6rem" }}>▸</span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: ".65rem", color: "var(--text)" }}>
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Training & Affiliations */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
            {/* Training */}
            <div className="card" style={{ padding: "2rem" }}>
              <h3 style={{
                fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 700,
                color: "#fff", marginBottom: "1.5rem"
              }}>
                Training & Seminars
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {RESUME_DATA.training.map((training, index) => (
                  <div key={index}>
                    <h4 style={{
                      fontFamily: "var(--font-display)", fontSize: ".8rem", fontWeight: 600,
                      color: "var(--acid)", marginBottom: ".3rem", lineHeight: 1.3
                    }}>
                      {training.title}
                    </h4>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: ".6rem", color: "var(--text)", marginBottom: ".2rem" }}>
                      {training.organizer}
                    </p>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: ".6rem", color: "var(--muted)" }}>
                      {training.date}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Affiliations */}
            <div className="card" style={{ padding: "2rem" }}>
              <h3 style={{
                fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 700,
                color: "#fff", marginBottom: "1.5rem"
              }}>
                Organizations
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {RESUME_DATA.affiliations.map((aff, index) => (
                  <div key={index}>
                    <h4 style={{
                      fontFamily: "var(--font-display)", fontSize: ".8rem", fontWeight: 600,
                      color: "var(--acid)", marginBottom: ".5rem"
                    }}>
                      {aff.organization}
                    </h4>
                    {aff.positions.map((position, posIndex) => (
                      <p key={posIndex} style={{ fontFamily: "var(--font-mono)", fontSize: ".6rem", color: "var(--text)", marginBottom: ".2rem" }}>
                        • {position}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Download Resume Button */}
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <a href="/Jeswel_Villamor_Modern_IT_Resume.pdf" download style={{
              background: "var(--acid)", color: "#000",
              fontFamily: "var(--font-mono)", fontSize: ".7rem", fontWeight: 700,
              letterSpacing: ".2em", textTransform: "uppercase",
              padding: "1rem 2rem", textDecoration: "none",
              transition: "background .2s", display: "inline-block",
            }}
              onMouseEnter={e => ((e.target as HTMLElement).style.background = "#fff")}
              onMouseLeave={e => ((e.target as HTMLElement).style.background = "var(--acid)")}
            >
              Download Full Resume →
            </a>
          </div>

        </div>
      </div>

      <style>{`
        @media(max-width:900px){
          #resume .reveal > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
