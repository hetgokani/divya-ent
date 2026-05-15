import React from "react";
import { motion } from "framer-motion";
import constructionImg from "../assets/construction2.png"; // Ensure this path is correct

const MoreAboutUs = () => {
  // Updated theme matching the screenshots
  const theme = {
    navyBlue: "#111439", // Deep blue from headings
    gold: "#eeb422", // Yellow/Gold from lines and accents
    gridGrey: "#f3f3f3", // Very light grey for background grid
    textGrey: "#4b5563", // Subtle grey for paragraph text
    white: "#FFFFFF",
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
        padding: "clamp(60px, 10vw, 120px) 0",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* --- RESPONSIVE CSS & BACKGROUND GRID --- */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;500;600;700;900&display=swap');
        
        /* Blueprint Background Grid matching screenshot */
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

        /* TABLET & MOBILE RESPONSIVENESS */
        @media (max-width: 1024px) {
          .main-grid { 
            grid-template-columns: 1fr !important; 
            gap: 60px !important; 
          }
          .hero-text { font-size: clamp(40px, 8vw, 55px) !important; }
          .header-block { margin-bottom: 40px !important; }
        }

        @media (max-width: 640px) {
          .card-padding { padding: 30px 15px !important; }
          .stats-area { 
            flex-direction: column !important; 
            align-items: flex-start !important; 
            gap: 30px !important; 
          }
          .hero-text { font-size: clamp(35px, 10vw, 45px) !important; }
          .side-text-decor { display: none; }
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
        <div className="header-block" style={{ marginBottom: "80px" }}>
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
              ABOUT US
            </span>
            <div
              style={{
                height: "2px",
                width: "40px",
                backgroundColor: theme.gold,
              }}
            />
          </motion.div>

          <motion.h2
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
            FORGING THE <br />
            <span className="outline-text">SKYLINES OF</span> <br />
            GUJARAT
          </motion.h2>
        </div>

        {/* --- MAIN CONTENT GRID --- */}
        <div
          className="main-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: "80px",
            alignItems: "center",
          }}
        >
          {/* LEFT SIDE: TEXT & STATS */}
          <motion.div
            {...structuralReveal}
            className="card-padding"
            style={{ position: "relative" }}
          >
            {/* Minimalist Side Decor Text matching "RAJKOT INDIA DIVYA EXPERIENCE" */}
            <div
              className="side-text-decor"
              style={{
                position: "absolute",
                left: "-60px",
                top: "10%",
                transform: "rotate(-90deg)",
                transformOrigin: "left top",
                fontSize: "10px",
                letterSpacing: "8px",
                color: theme.gridGrey,
                fontWeight: "700",
                whiteSpace: "nowrap",
                textShadow: "1px 1px 0px rgba(0,0,0,0.1)",
              }}
            >
              Divya Global Infra Pvt. Ltd.
            </div>

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
              Engineering Evolution
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
              Divya Global Infra Pvt. Ltd. didn't just grow; we{" "}
              <strong style={{ color: theme.navyBlue }}>reinforced</strong>.
              What started as a Civil Work Contractor in 2013 has mutated into a
              strategic force in Central Government projects.
            </p>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.8",
                color: theme.textGrey,
                fontWeight: "500",
              }}
            >
              We specialize in heavy-duty roads and monumental civil trades. We
              deliver a
              <span style={{ color: theme.navyBlue, fontWeight: "800" }}>
                {" "}
                COMMITMENT EXPERIENCE{" "}
              </span>
              that survives the test of time.
            </p>

            {/* CLEAN STATS AREA (Matching Screenshot 2 style) */}
            <div
              className="stats-area"
              style={{
                display: "flex",
                gap: "50px",
                marginTop: "60px",
                borderTop: `1px solid #e5e7eb`,
                paddingTop: "40px",
              }}
            >
              <div>
                <div
                  className="construction-font"
                  style={{ fontSize: "45px", color: theme.navyBlue }}
                >
                  991+
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: "700",
                    color: theme.textGrey,
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    marginTop: "5px",
                  }}
                >
                  Cr. Completed
                </div>
              </div>

              <div>
                <div
                  className="construction-font"
                  style={{ fontSize: "45px", color: theme.navyBlue }}
                >
                  808+
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: "700",
                    color: theme.textGrey,
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    marginTop: "5px",
                  }}
                >
                  Cr. Ongoing
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: IMAGE */}
          <div style={{ position: "relative" }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              style={{
                position: "relative",
                zIndex: 2,
                height: "auto",
                maxHeight: "650px",
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(0,0,0,0.08)", // Clean shadow instead of solid block shadow
              }}
            >
              <img
                src={constructionImg}
                alt="Construction Execution"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
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
                }}
              >
                <span>We Build For The Future</span>
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

export default MoreAboutUs;
