import React from "react";

// Import your logos based on the asset folder screenshot
import oldLogo from "../assets/oldlogo.jpg";
import newLogo from "../assets/Logo.webp";

const Rename = () => {
  const colors = {
    primary: "#1A194D", // Heavy Navy Blue
    accent: "#E6A317", // Construction Gold
    white: "#FFFFFF",
    line: "rgba(26, 25, 77, 0.08)",
    textGrey: "#4b5563",
  };

  return (
    <section
      style={{
        position: "relative",
        backgroundColor: colors.white,
        backgroundImage: `
          linear-gradient(to right, ${colors.line} 1px, transparent 1px),
          linear-gradient(to bottom, ${colors.line} 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
        padding: "40px 5% 80px", // REDUCED PADDING
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: '"Montserrat", sans-serif',
        overflow: "hidden",
      }}
    >
      <style>{`
        .rename-container {
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .transform-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 40px;
          margin: 50px 0; /* REDUCED MARGIN */
          width: 100%;
        }

        .entity-box {
          flex: 1;
          background: ${colors.white};
          border: 1px solid rgba(26, 25, 77, 0.1);
          padding: 40px 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          position: relative;
          box-shadow: 0 15px 40px rgba(0,0,0,0.04);
          transition: all 0.4s ease;
          border-radius: 8px;
        }

        .entity-box.old {
          /* Removed grayscale and opacity effect here to keep full color */
        }

        .entity-box.new {
          border: 2px solid ${colors.primary};
          box-shadow: 0 25px 50px rgba(26, 25, 77, 0.1);
          transform: scale(1.05);
        }

        .entity-box.new::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 5px;
          background-color: ${colors.accent};
          border-top-left-radius: 6px;
          border-top-right-radius: 6px;
        }

        .arrow-container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: ${colors.accent};
        }

        .mobile-arrow { display: none; }
        .desktop-arrow { display: block; }

        @media (max-width: 1024px) {
          .transform-wrapper {
            flex-direction: column;
            gap: 25px;
            margin: 40px 0;
          }
          .entity-box {
            width: 100%;
            max-width: 450px;
            padding: 35px 25px;
          }
          .entity-box.new {
            transform: scale(1);
          }
          .desktop-arrow { display: none; }
          .mobile-arrow { display: block; margin: 5px 0; }
        }

        @media (max-width: 768px) {
          .rename-title {
            font-size: clamp(30px, 8vw, 45px) !important;
          }
        }
      `}</style>

      {/* BACKGROUND WATERMARK */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "15vw",
          fontWeight: "900",
          color: colors.primary,
          opacity: 0.02,
          letterSpacing: "20px",
          pointerEvents: "none",
          zIndex: 0,
          whiteSpace: "nowrap",
        }}
      >
        EVOLUTION
      </div>

      <div className="rename-container">
        {/* HEADER SECTION */}
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <div
            style={{
              display: "inline-block",
              padding: "6px 20px",
              border: `1.5px solid ${colors.primary}`,
              fontSize: "11px",
              fontWeight: "900",
              letterSpacing: "4px",
              color: colors.primary,
              marginBottom: "20px",
              textTransform: "uppercase",
            }}
          >
            OUR LEGACY
          </div>

          <h2
            className="rename-title"
            style={{
              fontSize: "clamp(40px, 6vw, 65px)",
              fontWeight: "900",
              color: colors.primary,
              lineHeight: "1.1",
              letterSpacing: "-2px",
              margin: "0",
              textTransform: "uppercase",
            }}
          >
            NEW IDENTITY. <br />
            <span
              style={{
                color: "transparent",
                WebkitTextStroke: `2px ${colors.primary}`,
              }}
            >
              SAME VISION.
            </span>
          </h2>
        </div>

        {/* TRANSFORMATION GRAPHIC */}
        <div className="transform-wrapper">
          {/* OLD COMPANY BOX */}
          <div className="entity-box old">
            <div
              style={{
                fontSize: "11px",
                fontWeight: "800",
                color: colors.textGrey,
                letterSpacing: "3px",
                marginBottom: "20px",
                textTransform: "uppercase",
              }}
            >
              Founded As
            </div>

            {/* OLD LOGO */}
            <img
              src={oldLogo}
              alt="Divya Enterprise Old Logo"
              style={{
                height: "70px",
                width: "auto",
                objectFit: "contain",
                marginBottom: "15px",
              }}
            />

            <h3
              style={{
                fontSize: "clamp(18px, 3vw, 22px)",
                fontWeight: "800",
                color: colors.primary,
                margin: 0,
                letterSpacing: "-0.5px",
              }}
            >
              DIVYA ENTERPRISE
            </h3>
          </div>

          {/* STATIC ARROW */}
          <div className="arrow-container">
            {/* Desktop Right Arrow */}
            <svg
              className="desktop-arrow"
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>

            {/* Mobile Down Arrow */}
            <svg
              className="mobile-arrow"
              width="35"
              height="35"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </div>

          {/* NEW COMPANY BOX */}
          <div className="entity-box new">
            <div
              style={{
                fontSize: "11px",
                fontWeight: "900",
                color: colors.accent,
                letterSpacing: "3px",
                marginBottom: "20px",
                textTransform: "uppercase",
              }}
            >
              Evolved Into
            </div>

            {/* NEW LOGO */}
            <img
              src={newLogo}
              alt="Divya Global Infra New Logo"
              style={{
                height: "70px",
                width: "auto",
                objectFit: "contain",
                marginBottom: "15px",
              }}
            />

            <h3
              style={{
                fontSize: "clamp(18px, 3vw, 22px)",
                fontWeight: "900",
                color: colors.primary,
                margin: 0,
                letterSpacing: "-0.5px",
              }}
            >
              DIVYA GLOBAL INFRA
              <span
                style={{
                  display: "block",
                  fontSize: "14px",
                  fontWeight: "700",
                  marginTop: "6px",
                  letterSpacing: "2px",
                  opacity: 0.8,
                }}
              >
                PVT. LTD.
              </span>
            </h3>
          </div>
        </div>

        {/* DESCRIPTION - FIXED ALIGNMENT */}
        <p
          style={{
            fontSize: "clamp(15px, 2vw, 17px)",
            lineHeight: "1.8",
            color: colors.primary,
            fontWeight: "500",
            textAlign: "justify" /* MAKES TEXT FLUSH ON BOTH SIDES */,
            maxWidth: "850px",
            margin: "0 auto",
            opacity: 0.85,
          }}
        >
          To better reflect our expanding scale, enhanced engineering
          capabilities, and commitment to world-class infrastructure, we have
          officially transitioned our identity. While our name has evolved, our
          foundational values of{" "}
          <strong style={{ color: colors.accent, fontWeight: "800" }}>
            precision, reliability, and excellence
          </strong>{" "}
          remain stronger than ever. We look forward to building the future with
          the same dedication you have always trusted.
        </p>
      </div>
    </section>
  );
};

export default Rename;
