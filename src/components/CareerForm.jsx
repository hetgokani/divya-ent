import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
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

    // Strict Input Filter: If it's the phone field, only allow digits
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

    const phoneNumber = "8400007704";
    const whatsappMessage =
      `*NEW CAREER INQUIRY*%0A` +
      `*Name:* ${formData.fullName}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Subject:* ${formData.subject}%0A` +
      `*Message:* ${formData.message}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
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
        /* Desktop Base Styles matched directly to theme */
        .contact-title {
          font-size: 72px;
          font-weight: 900;
          color: ${colors.primary};
          line-height: 1.1;
          letter-spacing: -3px;
          margin: 0 0 40px 0;
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
          justify-content: center;
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

        /* Contact Details Custom Styling */
        .contact-item {
          margin-bottom: 30px;
          display: flex;
          align-items: flex-start;
          gap: 15px;
        }
        .contact-item-icon {
          flex-shrink: 0;
          margin-top: 2px;
        }
        .contact-item h5 {
          font-size: 13px;
          color: ${colors.accent};
          text-transform: uppercase;
          letter-spacing: 2px;
          margin: 0 0 8px 0;
          font-weight: 800;
        }
        .contact-item p {
          font-size: 16px;
          color: ${colors.primary};
          margin: 0;
          font-weight: 600;
          line-height: 1.6;
        }

        /* Large Tablets */
        @media (max-width: 1024px) {
          .contact-title { font-size: 52px; letter-spacing: -2px; }
          .layout-grid { grid-template-columns: 1fr !important; gap: 40px; }
        }

        /* Mobile Devices */
        @media (max-width: 768px) {
          .contact-title { 
            font-size: 32px; 
            letter-spacing: -1px; 
            text-align: center; 
            line-height: 1.2;
          }
          .header-container { text-align: center !important; align-items: center !important; }
          .accent-line { margin: 0 auto 30px !important; width: 80px !important; }
          .contact-label { text-align: center; width: 100%; font-size: 12px; }
          .bg-watermark { display: none; }
          .input-row { grid-template-columns: 1fr !important; gap: 0px; }
          .info-card { padding: 40px 25px !important; text-align: center; align-items: center; }
          .form-panel { padding: 0px !important; }
          .submit-btn { width: 100% !important; min-width: 100% !important; }
          .contact-item { justify-content: center; text-align: center; flex-direction: column; align-items: center; }
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
        <motion.div
          className="contact-label"
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
          LET'S CONNECT
        </motion.div>

        <h2 className="contact-title">
          GET IN <br />
          <span
            style={{
              color: "transparent",
              WebkitTextStroke: `1.5px ${colors.primary}`,
            }}
          >
            TOUCH
          </span>
          <br /> WITH OUR TEAM.
        </h2>

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

        <div className="layout-grid">
          {/* LEFT SIDE: Contact Details Card */}
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
              justifyContent: "center",
            }}
          >
            <div style={{ marginBottom: "20px" }}>
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
                Reach Out To Us
              </h4>
              <p
                style={{
                  fontSize: "15px",
                  color: colors.medium,
                  lineHeight: "1.7",
                  margin: "0 0 40px 0",
                  opacity: 0.9,
                  fontWeight: "500",
                }}
              >
                Whether you have a project in mind, need infrastructure
                solutions, or just want to say hello, our team is ready to
                assist you.
              </p>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={colors.accent}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <h5>Corporate Office</h5>
                <p>
                  The Millennium, Office No. 808, 8th Floor,
                  <br />
                  Near Nana Mova Circle, 150- Feet Ring Road, Rajkot-360004
                  Gujarat.
                </p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={colors.accent}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div>
                <h5>Phone</h5>
                <p>+91 8400007704</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={colors.accent}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div>
                <h5>Email</h5>
                <p>hr@divyaglobalinfra.com</p>
              </div>
            </div>
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
              <div className="input-row">
                <input
                  name="fullName"
                  placeholder="FULL NAME"
                  required
                  style={inputStyle}
                  onChange={handleChange}
                  value={formData.fullName}
                />
                <input
                  name="phone"
                  type="tel"
                  placeholder="10-DIGIT PHONE"
                  pattern="[0-9]{10}"
                  required
                  style={inputStyle}
                  onChange={handleChange}
                  value={formData.phone}
                />
              </div>

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
                name="subject"
                placeholder="SUBJECT OR INQUIRY TYPE"
                required
                style={inputStyle}
                onChange={handleChange}
                value={formData.subject}
              />

              <textarea
                name="message"
                placeholder="HOW CAN WE HELP YOU?"
                rows="5"
                required
                style={{ ...inputStyle, resize: "none", marginBottom: "35px" }}
                onChange={handleChange}
                value={formData.message}
              />

              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                <button type="submit" className="submit-btn">
                  SEND MESSAGE
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
          fontSize: "14vw",
          fontWeight: "900",
          color: colors.line,
          zIndex: 0,
          userSelect: "none",
          pointerEvents: "none",
          opacity: 0.5,
        }}
      >
        CONTACT
      </div>
    </section>
  );
};

export default ContactForm;
