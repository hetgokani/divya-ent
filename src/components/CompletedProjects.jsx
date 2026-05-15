import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { completedProjectsData } from "./projectData";

const CompletedProjects = () => {
  const navigate = useNavigate();

  const theme = {
    primary: "#1A194D", // Heavy Navy Blue
    accent: "#E6A317", // Construction Gold/Orange
    white: "#FFFFFF",
    gridGrey: "rgba(26, 25, 77, 0.08)", // Blueprint line color
    textGrey: "#4b5563",
  };

  return (
    <section
      style={{
        backgroundColor: theme.white,
        backgroundImage: `linear-gradient(${theme.gridGrey} 1px, transparent 1px), linear-gradient(90deg, ${theme.gridGrey} 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
        padding: "140px 8% 100px 8%",
        minHeight: "100vh",
        fontFamily: '"Montserrat", sans-serif',
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Giant Background Architectural Wireframe Text */}
      <div
        className="bg-watermark"
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
        PORTFOLIO
      </div>

      <div
        style={{
          maxWidth: "1500px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* --- HEADER BLOCK --- */}
        <div className="header-wrapper" style={{ marginBottom: "80px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              marginBottom: "20px",
            }}
          >
            <div
              className="accent-line"
              style={{ width: "60px", height: "4px", background: theme.accent }}
            />
            <span
              style={{
                fontSize: "12px",
                fontWeight: "900",
                color: theme.accent,
                letterSpacing: "4px",
                textTransform: "uppercase",
              }}
            >
              Divya Global Infra Pvt. Ltd.
            </span>
          </div>

          <h1
            className="portfolio-title"
            style={{
              fontSize: "clamp(45px, 7vw, 95px)",
              fontWeight: "900",
              color: theme.primary,
              lineHeight: "0.85",
              letterSpacing: "-3px",
              margin: 0,
              textTransform: "uppercase",
            }}
          >
            COMPLETED <br />
            <span
              style={{
                color: "transparent",
                WebkitTextStroke: `2px ${theme.primary}`,
              }}
            >
              PROJECTS
            </span>
          </h1>
        </div>

        {/* --- PROJECTS GRID --- */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
            gap: "60px 40px",
          }}
          className="projects-structural-grid"
        >
          {completedProjectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: (index % 3) * 0.1 }}
              // --- NAVIGATION ON CLICK ---
              onClick={() => navigate(`/project/${project.id}`)}
              style={{
                backgroundColor: theme.white,
                border: `1px solid ${theme.gridGrey}`,
                display: "flex",
                flexDirection: "column",
                position: "relative",
                height: "100%",
                cursor: "pointer", // Indicates clickability
              }}
            >
              {/* Main Structural Frame Image */}
              <div
                style={{
                  position: "relative",
                  height: "320px",
                  overflow: "hidden",
                  background: "#E2E8F0",
                }}
              >
                <img
                  src={project.mainImage}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />

                {/* Structural Corner Notch Design Detail */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "20px",
                    height: "20px",
                    background: theme.accent,
                    clipPath: "polygon(100% 0, 0 0, 100% 100%)",
                  }}
                />
              </div>

              {/* Text Meta Content Info Holder */}
              <div
                style={{
                  padding: "40px 30px 35px 30px",
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: "22px",
                      fontWeight: "900",
                      color: theme.primary,
                      margin: "0 0 15px 0",
                      lineHeight: "1.3",
                      textTransform: "uppercase",
                      letterSpacing: "-0.5px",
                    }}
                  >
                    {project.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "15px",
                      color: theme.textGrey,
                      lineHeight: "1.7",
                      margin: "0 0 30px 0",
                      fontWeight: "500",
                    }}
                  >
                    {project.description}
                  </p>
                </div>

                {/* Industrial Skew Action Button */}
                <div
                  style={{
                    alignSelf: "flex-start",
                    background: "transparent",
                    color: theme.primary,
                    border: `2px solid ${theme.primary}`,
                    padding: "12px 28px",
                    fontSize: "12px",
                    fontWeight: "900",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = theme.primary;
                    e.currentTarget.style.color = theme.white;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = theme.primary;
                  }}
                >
                  READ MORE
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>

              {/* Wireframe Outline Outer Border Box */}
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

      <style>{`
        @media (max-width: 900px) {
          .projects-structural-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .portfolio-title {
            font-size: clamp(38px, 10vw, 50px) !important;
            letter-spacing: -1px !important;
          }
          .bg-watermark {
            display: none !important;
          }
          .header-wrapper {
             text-align: center;
             display: flex;
             flex-direction: column;
             align-items: center;
          }
          .accent-line {
             margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
};

export default CompletedProjects;
