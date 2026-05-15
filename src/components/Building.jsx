import React from "react";
import { motion } from "framer-motion";

// Replace this with your actual image path when ready
import buildingImg from "../assets/s5.webp";

const Building = () => {
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
              [ SERVICE 05 ]
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
            BUILDING <br />
            <span className="outline-text">CONSTRUCTION</span> <br />
            PROJECTS
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
              Government & Institutional Excellence
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
              Divya Global Infra Pvt. Ltd. executes high-profile{" "}
              <strong style={{ color: theme.navyBlue }}>
                government and institutional building projects
              </strong>{" "}
              with an unwavering commitment to premium construction standards.
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
              From large-scale administrative buildings to critical public
              utility infrastructure, we deliver complete building construction
              services. Our expertise spans structural framework, premium
              finishing, and rigorous project management, ensuring absolute
              quality, durability, and timely delivery.
            </p>

            {/* --- FIXED DOTS SECTION --- */}
            <div
              style={{
                background: theme.lightGrey,
                borderLeft: `6px solid ${theme.gold}`,
                padding: "35px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
              }}
            >
              <h4
                style={{
                  margin: "0 0 25px 0",
                  color: theme.navyBlue,
                  fontWeight: "800",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  fontSize: "16px",
                }}
              >
                Construction Capabilities
              </h4>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "grid",
                  // Properly handles column layout on different screens
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: "18px",
                }}
              >
                {[
                  "Administrative Buildings",
                  "Public Utility Infrastructure",
                  "Heavy Structural Frameworks",
                  "Premium Finishing Works",
                  "Turnkey Project Management",
                  "Quality & Safety Assurance",
                ].map((item, index) => (
                  <li
                    key={index}
                    style={{
                      color: theme.textGrey,
                      fontWeight: "600",
                      fontSize: "15px",
                      display: "flex",
                      alignItems: "flex-start", // Anchors dot to the top of text
                      gap: "12px",
                      lineHeight: "1.5",
                    }}
                  >
                    {/* CUSTOM ALIGNED DOT */}
                    <div
                      style={{
                        width: "8px",
                        height: "8px",
                        backgroundColor: theme.navyBlue,
                        borderRadius: "50%",
                        marginTop: "7px", // Fine-tuned vertical alignment
                        flexShrink: 0, // Prevents dot from warping
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
                src={buildingImg}
                alt="Modern government building construction"
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
                <span>Crafting Timeless Structures</span>
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

export default Building;
