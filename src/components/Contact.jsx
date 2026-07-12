import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/Logo.webp"; // Importing the logo as requested

const Contact = () => {
  const colors = {
    primary: "#1A194D", // Heavy Navy Blue
    medium: "#353378",
    accent: "#E6A317", // Construction Gold
    white: "#FFFFFF",
    gridLine: "rgba(26, 25, 77, 0.06)", // Very faint grid line
    textGrey: "#4b5563",
  };

  return (
    <section
      style={{
        position: "relative",
        backgroundColor: colors.white,
        // Sharp, clean grid lines background
        backgroundImage: `
          linear-gradient(to right, ${colors.gridLine} 1px, transparent 1px),
          linear-gradient(to bottom, ${colors.gridLine} 1px, transparent 1px)
        `,
        backgroundSize: "50px 50px",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 5% 80px 5%",
        fontFamily: '"Montserrat", sans-serif',
        boxSizing: "border-box",
      }}
    >
      <style>{`
        .contact-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          width: 100%;
          max-width: 1200px;
          background-color: rgba(255, 255, 255, 0.98);
          border-radius: 12px;
          box-shadow: 0 20px 60px rgba(26, 25, 77, 0.08);
          border: 1px solid rgba(26, 25, 77, 0.05);
          overflow: hidden;
        }

        .contact-left {
          padding: 80px 60px;
          background-color: ${colors.white};
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .contact-right {
          padding: 80px 60px;
          background-color: ${colors.primary};
          color: ${colors.white};
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .contact-link {
          color: ${colors.white};
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .contact-link:hover {
          color: ${colors.accent};
        }

        .info-card {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          margin-bottom: 45px;
          padding-bottom: 25px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .info-card:last-child {
          margin-bottom: 0;
          padding-bottom: 0;
          border-bottom: none;
        }

        @media (max-width: 998px) {
          .contact-container {
            grid-template-columns: 1fr;
          }
          .contact-left, .contact-right {
            padding: 50px 30px;
          }
        }

        @media (max-width: 480px) {
          .contact-left, .contact-right {
            padding: 40px 20px;
          }
        }
      `}</style>

      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* LEFT SIDE: Logo & Description */}
        <div className="contact-left">
          <img
            src={logo}
            alt="Divya Global Infra Logo"
            style={{
              width: "100%",
              maxWidth: "280px",
              height: "auto",
              marginBottom: "30px",
            }}
          />

          <div
            style={{
              width: "50px",
              height: "4px",
              backgroundColor: colors.accent,
              marginBottom: "30px",
            }}
          />

          <h2
            style={{
              fontSize: "clamp(24px, 3vw, 32px)",
              fontWeight: "900",
              color: colors.primary,
              margin: "0 0 20px 0",
              lineHeight: "1.2",
              textTransform: "uppercase",
              letterSpacing: "-0.5px",
            }}
          >
            Engineering The Future of Infrastructure
          </h2>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              color: colors.textGrey,
              fontWeight: "500",
              margin: 0,
              textAlign: "justify",
            }}
          >
            Divya Global Infra Ltd. is a premier construction and infrastructure
            development company dedicated to executing massive, high-quality
            public and private projects. Whether you are inquiring about our
            ongoing mega-projects, seeking expert structural solutions, or
            looking to establish a corporate partnership, our team is ready to
            assist you.
          </p>
        </div>

        {/* RIGHT SIDE: Contact Information */}
        <div className="contact-right">
          <h3
            style={{
              fontSize: "14px",
              fontWeight: "800",
              color: colors.accent,
              letterSpacing: "4px",
              margin: "0 0 40px 0",
              textTransform: "uppercase",
            }}
          >
            Corporate Headquarters
          </h3>

          {/* Address */}
          <div className="info-card">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke={colors.accent}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ flexShrink: 0, marginTop: "4px" }}
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <div>
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: "700",
                  opacity: 0.7,
                  letterSpacing: "1px",
                  marginBottom: "8px",
                }}
              >
                ADDRESS
              </div>
              <div
                style={{
                  fontSize: "16px",
                  lineHeight: "1.6",
                  fontWeight: "500",
                }}
              >
                The Millennium, Office No. 808,
                <br />
                8th Floor, Near Nana Mova Circle,
                <br />
                150-Feet Ring Road,
                <br />
                Rajkot-360004, Gujarat, India.
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="info-card">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke={colors.accent}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ flexShrink: 0, marginTop: "2px" }}
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <div>
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: "700",
                  opacity: 0.7,
                  letterSpacing: "1px",
                  marginBottom: "8px",
                }}
              >
                PHONE DIRECTORY
              </div>
              <a
                href="tel:+917202044744"
                className="contact-link"
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  display: "block",
                }}
              >
                +91 72020 44744
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="info-card">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke={colors.accent}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ flexShrink: 0, marginTop: "2px" }}
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <div>
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: "700",
                  opacity: 0.7,
                  letterSpacing: "1px",
                  marginBottom: "8px",
                }}
              >
                EMAIL INQUIRIES
              </div>
              <a
                href="mailto:info@divyaglobalinfra.com"
                className="contact-link"
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  display: "block",
                }}
              >
                info@divyaglobalinfra.com
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
