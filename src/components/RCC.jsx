import React from "react";
import { motion } from "framer-motion";

// Replace this with your actual image path when ready
import rccImg from "../assets/s3.png";

const RCC = () => {
  const theme = {
    navyBlue: "#111439",
    gold: "#eeb422",
    gridGrey: "#f3f3f3",
    textGrey: "#4b5563",
    white: "#FFFFFF",
    lightGrey: "#f9fafb",
  };

  const structuralReveal = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    viewport: { once: true, margin: "-50px" },
  };

  return (
    <section
      style={{
        backgroundColor: theme.white,
        padding: "clamp(80px, 10vw, 140px) 0",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
      }}
    >
      {/* --- RESPONSIVE CSS & BACKGROUND GRID --- */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;500;600;700;900&display=swap');
        
        .grid-background {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background-size: 80px 80px;
          background-image: 
            linear-gradient(to right, ${theme.gridGrey} 1px, transparent 1px),
            linear-gradient(to bottom, ${theme.gridGrey} 1px, transparent 1px);
          z-index: 0;
        }

        .construction-font { 
          font-family: 'Archivo Black', sans-serif; 
        }
        
        .outline-text {
          color: transparent;
          -webkit-text-stroke: 1.5px ${theme.navyBlue};
        }

        .content-wrapper {
          position: relative;
          z-index: 1;
        }

        /* Responsive Layouts */
        @media (max-width: 1024px) {
          .main-grid { 
            grid-template-columns: 1fr !important; 
            gap: 60px !important; 
          }
          .hero-text { font-size: clamp(40px, 8vw, 55px) !important; }
        }

        @media (max-width: 640px) {
          .service-stats { 
            flex-direction: column !important; 
            gap: 20px !important; 
          }
          .hero-text { font-size: clamp(32px, 10vw, 42px) !important; }
        }
      `}</style>

      {/* Grid Overlay */}
      <div className="grid-background" />

      <div
        className="content-wrapper"
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 5%",
        }}
      >
        {/* --- HEADER BLOCK --- */}
        <div className="header-block" style={{ marginBottom: "60px" }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              marginBottom: "20px",
            }}
          >
            <span
              style={{
                color: theme.gold,
                fontWeight: "800",
                letterSpacing: "4px",
                textTransform: "uppercase",
                fontSize: "14px",
              }}
            >
              [ SERVICE 03 ]
            </span>
            <div
              style={{
                height: "2px",
                width: "40px",
                backgroundColor: theme.gold,
              }}
            />
          </motion.div>

          <motion.h1
            {...structuralReveal}
            className="construction-font hero-text"
            style={{
              fontSize: "clamp(45px, 6vw, 75px)",
              color: theme.navyBlue,
              lineHeight: "1.05",
              margin: 0,
              textTransform: "uppercase",
              letterSpacing: "-1px",
            }}
          >
            RCC & <br />
            <span className="outline-text">CONCRETE</span> <br />
            STRUCTURES
          </motion.h1>
        </div>

        {/* --- MAIN CONTENT GRID --- */}
        <div
          className="main-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: "80px",
            alignItems: "start",
          }}
        >
          {/* LEFT SIDE: TEXT & DETAILS */}
          <motion.div
            {...structuralReveal}
            style={{ position: "relative", paddingTop: "20px" }}
          >
            <h3
              style={{
                fontSize: "22px",
                fontWeight: "800",
                color: theme.navyBlue,
                marginBottom: "20px",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Durable Public Infrastructure
            </h3>

            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.8",
                color: theme.textGrey,
                fontWeight: "500",
                marginBottom: "20px",
              }}
            >
              Divya Global Infra Pvt. Ltd. provides comprehensive{" "}
              <strong style={{ color: theme.navyBlue }}>
                RCC (Reinforced Cement Concrete) construction services
              </strong>{" "}
              designed specifically for massive public infrastructure and
              high-capacity utility projects.
            </p>

            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.8",
                color: theme.textGrey,
                fontWeight: "500",
                marginBottom: "40px",
              }}
            >
              We execute complex reinforced structures including elevated water
              tanks, sumps, and retaining walls. Our engineering team focuses
              relentlessly on structural durability, stringent safety standards,
              and efficient execution to guarantee long-term infrastructure
              performance.
            </p>

            {/* Scope of Work / Materials */}
            <div
              style={{
                background: theme.lightGrey,
                borderLeft: `6px solid ${theme.gold}`,
                padding: "30px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
              }}
            >
              <h4
                style={{
                  margin: "0 0 15px 0",
                  color: theme.navyBlue,
                  fontWeight: "800",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                Structural Competencies
              </h4>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "10px",
                }}
              >
                {[
                  "Elevated Storage Reservoirs (ESR)",
                  "Underground Sumps",
                  "Intake Wells",
                  "Heavy Retaining Walls",
                  "Public Utility Buildings",
                  "Durability Testing",
                ].map((item, index) => (
                  <li
                    key={index}
                    style={{
                      color: theme.textGrey,
                      fontWeight: "600",
                      fontSize: "15px",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <div
                      style={{
                        width: "6px",
                        height: "6px",
                        backgroundColor: theme.navyBlue,
                        borderRadius: "50%",
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* RIGHT SIDE: IMAGE CONTAINER */}
          <div style={{ position: "relative" }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              style={{
                position: "relative",
                zIndex: 2,
                height: "auto",
                minHeight: "550px",
                backgroundColor: "#e5e7eb",
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={rccImg}
                alt="Large RCC construction project"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
              />

              {/* Bottom Accent Bar on Image */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  background: theme.navyBlue,
                  color: theme.white,
                  padding: "15px 25px",
                  fontWeight: "700",
                  fontSize: "13px",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  zIndex: 2,
                }}
              >
                <span>Building Concrete Foundations</span>
                <div
                  style={{
                    height: "2px",
                    width: "30px",
                    backgroundColor: theme.gold,
                  }}
                />
              </div>
            </motion.div>

            {/* Subtle Yellow Accent Block behind image */}
            <div
              style={{
                position: "absolute",
                top: "-20px",
                right: "-20px",
                width: "100%",
                height: "100%",
                border: `2px solid ${theme.gold}`,
                zIndex: 1,
                pointerEvents: "none",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RCC;
