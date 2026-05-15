import React from "react";
import { motion } from "framer-motion";

const OngoingProjects = () => {
  const theme = {
    primary: "#1A194D", // Heavy Navy Blue
    accent: "#E6A317", // Construction Gold
    white: "#FFFFFF",
    gridGrey: "rgba(26, 25, 77, 0.08)", // Blueprint line color
    textGrey: "#4b5563",
    lightGrey: "#f8f9fa",
  };

  const ongoingProjectsData = [
    {
      id: 1,
      client: "Gujarat Water Supply & Sewerage Board",
      state: "Gujarat",
      scope: "Pipe Work & RCC Work (SUMP, ESR, WTP, Intake Well)",

      status: "Work in Progress",
      type: "Water Supply",
    },
    {
      id: 2,
      client: "Narmada Water Resources",
      state: "Gujarat",
      scope: "Pipe Work & RCC Work (SUMP, ESR, WTP, Intake Well)",

      status: "Work in Progress",
      type: "Resources & Pipelines",
    },
    {
      id: 3,
      client: "Gujarat Council of School Education",
      state: "Gujarat",
      scope: "Building Work",

      status: "Work in Progress",
      type: "Civil Architecture",
    },
    {
      id: 4,
      client: "Rajkot Urban Development Authority",
      state: "Gujarat",
      scope: "Pipe Work & RCC Work (SUMP, ESR, WTP, Intake Well)",

      status: "Work in Progress",
      type: "Urban Infrastructure",
    },
  ];

  return (
    <section
      style={{
        backgroundColor: theme.white,
        backgroundImage: `linear-gradient(${theme.gridGrey} 1px, transparent 1px), linear-gradient(90deg, ${theme.gridGrey} 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
        padding: "clamp(100px, 10vw, 140px) 5% 100px 5%",
        minHeight: "100vh",
        fontFamily: '"Montserrat", sans-serif',
        position: "relative",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      <style>{`
        .ongoing-structural-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
          gap: 40px;
          width: 100%;
          box-sizing: border-box;
        }

        /* Responsive Fixes for Small Screen Dev Tunnels / Mobile Devices */
        @media (max-width: 1024px) {
          .ongoing-structural-grid {
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          }
        }

        @media (max-width: 768px) {
          .ongoing-structural-grid {
            grid-template-columns: 1fr !important;
            gap: 30px;
          }
          .card-padding {
            padding: 30px 24px !important;
          }
          .card-header-height {
            height: 180px !important;
          }
          .meta-footer {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 20px !important;
          }
          .status-badge {
            width: 100% !important;
            text-align: center !important;
          }
        }
      `}</style>

      {/* Giant Background Architectural Wireframe Text */}
      <div
        style={{
          position: "absolute",
          bottom: "-5%",
          right: "-5%",
          fontSize: "16vw",
          fontWeight: "900",
          color: theme.primary,
          opacity: 0.02,
          letterSpacing: "10px",
          pointerEvents: "none",
          zIndex: 0,
          userSelect: "none",
        }}
      >
        ONGOING
      </div>

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* --- HEADER BLOCK --- */}
        <div style={{ marginBottom: "60px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              marginBottom: "15px",
            }}
          >
            <div
              style={{ width: "40px", height: "4px", background: theme.accent }}
            />
            <span
              style={{
                fontSize: "11px",
                fontWeight: "900",
                color: theme.accent,
                letterSpacing: "4px",
              }}
            >
              CURRENT LIVE INFRASTRUCTURE
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(38px, 6vw, 85px)",
              fontWeight: "900",
              color: theme.primary,
              lineHeight: "0.9",
              letterSpacing: "-2px",
              margin: 0,
              textTransform: "uppercase",
            }}
          >
            ONGOING <br />
            <span
              style={{
                color: "transparent",
                WebkitTextStroke: `1.5px ${theme.primary}`,
              }}
            >
              PROJECTS
            </span>
          </h1>
        </div>

        {/* --- ONGOING PROJECTS GRID --- */}
        <div className="ongoing-structural-grid">
          {ongoingProjectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              style={{
                backgroundColor: theme.white,
                border: `1px solid ${theme.gridGrey}`,
                display: "flex",
                flexDirection: "column",
                position: "relative",
                boxSizing: "border-box",
              }}
            >
              {/* Card Vector Top Graphical Header Box */}
              <div
                className="card-header-height"
                style={{
                  position: "relative",
                  height: "200px",
                  backgroundColor: theme.lightGrey,
                  backgroundImage: `radial-gradient(${theme.gridGrey} 1.5px, transparent 1.5px)`,
                  backgroundSize: "20px 20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  borderBottom: `1px solid ${theme.gridGrey}`,
                  boxSizing: "border-box",
                }}
              >
                <div style={{ textAlign: "center", padding: "0 20px" }}>
                  <div
                    style={{
                      fontSize: "10px",
                      fontWeight: "900",
                      color: theme.accent,
                      letterSpacing: "3px",
                      textTransform: "uppercase",
                      marginBottom: "8px",
                    }}
                  >
                    // SITE SCHEMATIC
                  </div>
                  <div
                    style={{
                      fontSize: "20px",
                      fontWeight: "900",
                      color: theme.primary,
                      letterSpacing: "-0.5px",
                      textTransform: "uppercase",
                    }}
                  >
                    {project.type}
                  </div>
                </div>

                {/* Realtime Live Site Status Tag Ring Component */}
                <div
                  style={{
                    position: "absolute",
                    top: "20px",
                    right: "20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    backgroundColor: theme.white,
                    padding: "6px 12px",
                    border: `1px solid ${theme.gridGrey}`,
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      backgroundColor: "#10B981",
                      borderRadius: "50%",
                      display: "inline-block",
                      boxShadow: "0 0 10px #10B981",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "9px",
                      fontWeight: "900",
                      color: theme.primary,
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                    }}
                  >
                    LIVE SITE
                  </span>
                </div>

                {/* Top Corner Geometric Triangle Frame Detail */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "16px",
                    height: "16px",
                    background: theme.primary,
                    clipPath: "polygon(100% 0, 0 0, 100% 100%)",
                  }}
                />
              </div>

              {/* Data Properties & Meta Content Area Layout */}
              <div
                className="card-padding"
                style={{
                  padding: "35px 30px",
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxSizing: "border-box",
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: "22px",
                      fontWeight: "900",
                      color: theme.primary,
                      margin: "0 0 8px 0",
                      lineHeight: "1.25",
                      textTransform: "uppercase",
                      letterSpacing: "-0.5px",
                    }}
                  >
                    {project.client}
                  </h3>

                  <div
                    style={{
                      fontSize: "11px",
                      fontWeight: "800",
                      color: theme.accent,
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      marginBottom: "25px",
                    }}
                  >
                    LOCATION: {project.state}, INDIA
                  </div>

                  <div style={{ marginBottom: "30px" }}>
                    <div
                      style={{
                        fontSize: "10px",
                        fontWeight: "900",
                        color: theme.primary,
                        opacity: 0.4,
                        letterSpacing: "1px",
                        marginBottom: "6px",
                      }}
                    >
                      SCOPE OF CONTRACT:
                    </div>
                    <p
                      style={{
                        fontSize: "14px",
                        color: theme.textGrey,
                        lineHeight: "1.6",
                        margin: 0,
                        fontWeight: "600",
                      }}
                    >
                      {project.scope}
                    </p>
                  </div>
                </div>

                {/* Refactored Clean Footer Row Layout (Valuation Label Completely Removed) */}
                <div
                  className="meta-footer"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderTop: `1px solid ${theme.gridGrey}`,
                    paddingTop: "25px",
                    marginTop: "10px",
                    boxSizing: "border-box",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: "24px",
                        fontWeight: "900",
                        color: theme.primary,
                        letterSpacing: "-1px",
                        lineHeight: "1",
                      }}
                    >
                      {project.value}
                    </div>
                  </div>

                  <div
                    className="status-badge"
                    style={{
                      padding: "10px 20px",
                      backgroundColor: theme.primary,
                      color: theme.white,
                      fontSize: "11px",
                      fontWeight: "900",
                      letterSpacing: "1.5px",
                      textTransform: "uppercase",
                      boxSizing: "border-box",
                    }}
                  >
                    {project.status}
                  </div>
                </div>
              </div>

              {/* Wireframe Outer Border Overlay Grid Sync Box */}
              <div
                style={{
                  position: "absolute",
                  top: "-6px",
                  left: "-6px",
                  right: "-6px",
                  bottom: "-6px",
                  border: `1px solid ${theme.gridGrey}`,
                  pointerEvents: "none",
                  zIndex: -1,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OngoingProjects;
