import React, { useState } from "react";
import { motion } from "framer-motion";

const CareerForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    applyingFor: "",
    experience: "",
  });

  const colors = {
    primary: "#1A194D",
    medium: "#353378",
    light: "#62579C",
    accent: "#E6A317",
    white: "#FFFFFF",
    line: "rgba(53, 51, 120, 0.08)",
    inputBorder: "rgba(26, 25, 77, 0.15)",
    inputBg: "#f8f9fa",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Strict Input Filter: If it's the phone field, only allow digits to be typed
    if (name === "phone") {
      const genericDigits = value.replace(/\D/g, "");
      // Limit to max 10 digits
      if (genericDigits.length <= 10) {
        setFormData({ ...formData, [name]: genericDigits });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Extra validation fallback verification layer
    if (formData.phone.length !== 10) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    const phoneNumber = "7990077971";
    const message =
      `*NEW CAREER APPLICATION*%0A` +
      `*Name:* ${formData.fullName}%0A` +
      `*Position:* ${formData.applyingFor}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Experience:* ${formData.experience}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const inputStyle = {
    width: "100%",
    padding: "20px 24px",
    backgroundColor: colors.inputBg,
    border: `1px solid ${colors.inputBorder}`,
    borderRadius: "0px",
    fontSize: "14px",
    fontWeight: "600",
    color: colors.primary,
    fontFamily: "'Montserrat', sans-serif",
    marginBottom: "24px",
    outline: "none",
    transition: "all 0.3s ease",
    boxSizing: "border-box",
    letterSpacing: "0.5px",
  };

  return (
    <section
      style={{
        position: "relative",
        backgroundColor: colors.white,
        backgroundImage: `linear-gradient(${colors.line} 1px, transparent 1px), linear-gradient(90deg, ${colors.line} 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
        padding: "100px 8%",
        overflow: "hidden",
        fontFamily: '"Montserrat", sans-serif',
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <style>{`
        /* Desktop Base Styles matched directly to OurMission text-rhythms */
        .career-title {
          font-size: 72px;
          font-weight: 900;
          color: ${colors.primary};
          line-height: 1.1;
          letter-spacing: -3px;
          margin: 0 0 40px 0;
        }
        .career-desc {
          font-size: 20px;
          line-height: 1.8;
          color: ${colors.medium};
          max-width: 850px;
          font-weight: 500;
        }
        .layout-grid {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 60px;
          margin-top: 60px;
          width: 100%;
        }
        .input-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        /* Premium Focus & Interaction States */
        input:focus, textarea:focus {
          border-color: ${colors.primary} !important;
          background-color: ${colors.white} !important;
          box-shadow: 0 15px 35px rgba(26, 25, 77, 0.06);
        }
        
        input::placeholder, textarea::placeholder {
          color: ${colors.primary};
          opacity: 0.45;
          font-weight: 600;
          letter-spacing: 1px;
        }

        /* Highly Stable Component Style for Pill Button Layout */
        .submit-btn {
          width: auto;
          min-width: 320px;
          padding: 22px 50px;
          background-color: transparent;
          color: ${colors.primary};
          border: 2px solid ${colors.primary};
          border-radius: 50px;
          font-weight: 900;
          letter-spacing: 3px;
          cursor: pointer;
          text-transform: uppercase;
          font-size: 14px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          align-items: center;
          justifyContent: center;
          gap: 15px;
          box-shadow: 0 10px 30px rgba(26, 25, 77, 0.02);
          outline: none;
        }
        
        .submit-btn:hover {
          background-color: ${colors.primary};
          color: ${colors.white};
          border-color: ${colors.primary};
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(26, 25, 77, 0.15);
        }

        .submit-btn:hover .accent-bar {
          background-color: ${colors.white} !important;
        }

        /* Large Tablets */
        @media (max-width: 1024px) {
          .career-title { font-size: 52px; letter-spacing: -2px; }
          .career-desc { font-size: 18px; }
          .layout-grid { grid-template-columns: 1fr !important; gap: 40px; }
        }

        /* Mobile Devices mirroring OurMission fixes */
        @media (max-width: 768px) {
          .career-title { 
            font-size: 32px; 
            letter-spacing: -1px; 
            text-align: center; 
            line-height: 1.2;
          }
          .career-desc { 
            font-size: 15px; 
            text-align: center; 
            line-height: 1.6;
          }
          .header-container { text-align: center !important; align-items: center !important; }
          .accent-line { margin: 0 auto 30px !important; width: 80px !important; }
          .career-label { text-align: center; width: 100%; font-size: 12px; }
          .bg-watermark { display: none; }
          .input-row { grid-template-columns: 1fr !important; gap: 0px; }
          .info-card { padding: 40px 25px !important; text-align: center; align-items: center; }
          .form-panel { padding: 0px !important; }
          .submit-btn { width: 100% !important; min-width: 100% !important; }
        }
      `}</style>

      <div
        className="header-container"
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          zIndex: 1,
        }}
      >
        {/* Label configuration matching 'Our Mission' label */}
        <motion.div
          className="career-label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          style={{
            color: colors.accent,
            fontSize: "14px",
            fontWeight: "900",
            letterSpacing: "5px",
            marginBottom: "20px",
            textTransform: "uppercase",
          }}
        >
          JOIN THE LEGACY
        </motion.div>

        {/* Title configuration matching 'BUILDING SUSTAINABLE...' layout */}
        <h2 className="career-title">
          BUILD YOUR <br />
          <span
            style={{
              color: "transparent",
              WebkitTextStroke: `1.5px ${colors.primary}`,
            }}
          >
            FUTURE
          </span>
          <br /> WITH Divya Global Infra Pvt. Ltd.
        </h2>

        {/* Dynamic accent line signature */}
        <motion.div
          className="accent-line"
          initial={{ width: 0 }}
          whileInView={{ width: "150px" }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{
            height: "6px",
            backgroundColor: colors.accent,
            marginBottom: "50px",
          }}
        />

        {/* Content & Form split workspace setup */}
        <div className="layout-grid">
          {/* LEFT SIDE: Info Card built exactly like a Pillar Card */}
          <motion.div
            className="info-card"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              padding: "50px 40px",
              backgroundColor: colors.white,
              border: `1px solid ${colors.line}`,
              boxShadow: "0 20px 40px rgba(0,0,0,0.04)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "40px",
            }}
          >
            <div>
              <h4
                style={{
                  fontSize: "24px",
                  fontWeight: "900",
                  color: colors.primary,
                  margin: "0 0 15px 0",
                  textTransform: "uppercase",
                  letterSpacing: "-0.5px",
                }}
              >
                Why Divya Global Infra Pvt. Ltd.?
              </h4>
              <p
                style={{
                  fontSize: "15px",
                  color: colors.medium,
                  lineHeight: "1.7",
                  margin: 0,
                  opacity: 0.9,
                  fontWeight: "500",
                }}
              >
                We don't just hire employees; we partner with professionals who
                want to build high-impact infrastructure across Gujarat.
              </p>
            </div>

            {/* Custom Updated List Configured exactly to instructions */}
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              {[
                "In WhatsApp HR will message you",
                "Send your CV while submitting your CV",
                "Technical Innovation & Growth",
              ].map((item, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    fontWeight: "700",
                    fontSize: "13.5px",
                    color: colors.primary,
                    letterSpacing: "0.2px",
                  }}
                >
                  <div
                    style={{
                      width: "6px",
                      height: "6px",
                      backgroundColor: colors.accent,
                      borderRadius: "50%",
                      flexShrink: 0,
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT SIDE: Interactive Form Area */}
          <motion.div
            className="form-panel"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <form onSubmit={handleSubmit}>
              <input
                name="fullName"
                placeholder="FULL NAME"
                required
                style={inputStyle}
                onChange={handleChange}
                value={formData.fullName}
              />

              <input
                name="applyingFor"
                placeholder="WHAT POSITION ARE YOU APPLYING FOR?"
                required
                style={inputStyle}
                onChange={handleChange}
                value={formData.applyingFor}
              />

              <div className="input-row">
                <input
                  name="email"
                  type="email"
                  placeholder="EMAIL ADDRESS"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  required
                  style={inputStyle}
                  onChange={handleChange}
                  value={formData.email}
                />
                <input
                  name="phone"
                  type="tel"
                  placeholder="10-DIGIT PHONE NUMBER"
                  pattern="[0-9]{10}"
                  required
                  style={inputStyle}
                  onChange={handleChange}
                  value={formData.phone}
                />
              </div>

              <textarea
                name="experience"
                placeholder="TELL US ABOUT YOUR EXPERTISE AND JOURNEY..."
                rows="4"
                required
                style={{ ...inputStyle, resize: "none", marginBottom: "35px" }}
                onChange={handleChange}
                value={formData.experience}
              />

              {/* Wrapped submission layout block to force true element alignment centering */}
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                <button type="submit" className="submit-btn">
                  SUBMIT VIA WHATSAPP
                  <div
                    className="accent-bar"
                    style={{
                      width: "30px",
                      height: "2px",
                      backgroundColor: colors.accent,
                      transition: "background-color 0.3s ease",
                    }}
                  />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Background Watermark */}
      <div
        className="bg-watermark"
        style={{
          position: "absolute",
          bottom: "-40px",
          right: "-20px",
          fontSize: "15vw",
          fontWeight: "900",
          color: colors.line,
          zIndex: 0,
          userSelect: "none",
          pointerEvents: "none",
          opacity: 0.5,
        }}
      >
        CAREERS
      </div>
    </section>
  );
};

export default CareerForm;
