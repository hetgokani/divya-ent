import React, { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const colors = {
    primary: "#1A194D", // Heavy Navy Blue
    medium: "#353378",
    light: "#62579C",
    accent: "#E6A317", // Construction Gold
    white: "#FFFFFF",
    line: "rgba(53, 51, 120, 0.08)", // Blueprint line color
    inputBorder: "rgba(26, 25, 77, 0.15)",
    inputBg: "#f8f9fa",
  };

  // --- 🪄 3D MOUSE PARALLAX LOGIC (Matching Premium Section Rhythms) ---
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 100, damping: 30 });
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  const rotateX = useTransform(smoothY, [-0.5, 0.5], ["4deg", "-4deg"]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], ["-4deg", "4deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Direct input sanitization for phone numbers
    if (name === "phone") {
      const genericDigits = value.replace(/\D/g, "");
      if (genericDigits.length <= 10) {
        setFormData({ ...formData, [name]: genericDigits });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.phone.length !== 10) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    const phoneNumber = "7990077971";
    const whatsappMessage =
      `*NEW CONTACT INQUIRY*%0A` +
      `--------------------------%0A` +
      `*Name:* ${formData.fullName}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Subject:* ${formData.subject}%0A` +
      `*Message:* ${formData.message}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const inputStyle = {
    width: "100%",
    padding: "20px 24px",
    backgroundColor: colors.inputBg,
    border: `1px solid ${colors.inputBorder}`,
    borderRadius: "0px", // Crisp, structural architecture corners
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
      onMouseMove={handleMouseMove}
      style={{
        position: "relative",
        backgroundColor: colors.white,
        backgroundImage: `linear-gradient(${colors.line} 1px, transparent 1px), linear-gradient(90deg, ${colors.line} 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
        padding: "140px 8% 100px 8%",
        overflow: "hidden",
        fontFamily: '"Montserrat", sans-serif',
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        boxSizing: "border-box",
      }}
    >
      <style>{`
        .contact-title {
          font-size: clamp(55px, 7vw, 95px);
          font-weight: 900;
          color: ${colors.primary};
          line-height: 0.85;
          letter-spacing: -3px;
          margin: 0 0 40px 0;
          text-transform: uppercase;
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

        /* Focus & Interaction Layer */
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

        /* Stable Pill Button Layout */
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

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .layout-grid { grid-template-columns: 1fr !important; gap: 40px; }
        }

        @media (max-width: 768px) {
          .contact-title { 
            text-align: center; 
            line-height: 1.1;
          }
          .header-container { text-align: center !important; align-items: center !important; }
          .accent-line { margin: 0 auto 30px !important; width: 80px !important; }
          .contact-label { text-align: center; width: 100%; font-size: 12px; }
          .bg-watermark { display: none; }
          .input-row { grid-template-columns: 1fr !important; gap: 0px; }
          .info-card { padding: 40px 25px !important; }
          .submit-btn { width: 100% !important; min-width: 100% !important; }
        }
      `}</style>

      <div
        className="header-container"
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          zIndex: 1,
        }}
      >
        {/* Label block synced with Mission layout parameters */}
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
          GET IN TOUCH
        </motion.div>

        {/* Dynamic scale header block */}
        <h2 className="contact-title">
          CONNECT WITH <br />
          <span
            style={{
              color: "transparent",
              WebkitTextStroke: `2px ${colors.primary}`,
            }}
          >
            OUR TEAM
          </span>
          <br /> FOR MEGA PROJECTS
        </h2>

        {/* Golden structural signature line */}
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

        {/* Workspace interactive main container frame */}
        <motion.div
          className="layout-grid"
          style={{
            rotateX,
            rotateY,
            perspective: "1000px",
          }}
        >
          {/* LEFT SIDE: Architectural Info Panel Card */}
          <div
            className="info-card"
            style={{
              padding: "50px 40px",
              backgroundColor: colors.white,
              border: `1px solid ${colors.line}`,
              boxShadow: "0 25px 50px rgba(0,0,0,0.03)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "40px",
              position: "relative",
            }}
          >
            <div>
              <h4
                style={{
                  fontSize: "24px",
                  fontWeight: "900",
                  color: colors.primary,
                  margin: "0 0 20px 0",
                  textTransform: "uppercase",
                  letterSpacing: "-0.5px",
                }}
              >
                HEAD OFFICE
              </h4>

              <p
                style={{
                  fontSize: "15px",
                  color: colors.medium,
                  lineHeight: "1.8",
                  margin: "0 0 35px 0",
                  fontWeight: "600",
                }}
              >
                The Millennium, Office No. 808, 8th Floor,
                <br />
                Near Nana Mova Circle, 150- Feet Ring Road,
                <br />
                Rajkot-360004 [Gujarat]
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <div
                  style={{
                    fontSize: "14px",
                    color: colors.primary,
                    fontWeight: "700",
                  }}
                >
                  <div
                    style={{
                      color: colors.accent,
                      fontSize: "11px",
                      letterSpacing: "1px",
                      marginBottom: "4px",
                    }}
                  >
                    // PHONE NUMBER
                  </div>
                  +91 96387 57366 / 72020 44744
                </div>

                <div
                  style={{
                    fontSize: "14px",
                    color: colors.primary,
                    fontWeight: "700",
                  }}
                >
                  <div
                    style={{
                      color: colors.accent,
                      fontSize: "11px",
                      letterSpacing: "1px",
                      marginBottom: "4px",
                    }}
                  >
                    // EMAIL CHANNELS
                  </div>
                  <a
                    href="mailto:divyaenterprise2015@gmail.com"
                    style={{
                      color: colors.medium,
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                  >
                    divyaenterprise2015@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Workflow connecting note */}
            <p
              style={{
                fontSize: "13px",
                color: colors.primary,
                lineHeight: "1.6",
                fontWeight: "700",
                margin: 0,
                borderTop: `1px solid ${colors.line}`,
                paddingTop: "25px",
                letterSpacing: "0.2px",
              }}
            >
              Fill out your corporate metrics layout details below. Submitting
              packages your operational data directly to our primary
              administrative WhatsApp line for contract review.
            </p>

            {/* Mini corner tab accent tracking your layout matrix */}
            <div
              style={{
                position: "absolute",
                bottom: "0",
                right: "0",
                background: colors.line,
                color: colors.primary,
                padding: "8px 16px",
                fontSize: "9px",
                fontWeight: "900",
                letterSpacing: "2px",
              }}
            >
              HQ_EST.2015
            </div>
          </div>

          {/* RIGHT SIDE: Dynamic Interface Input Panel */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <form onSubmit={handleSubmit}>
              <input
                name="fullName"
                placeholder="YOUR FULL NAME"
                required
                style={inputStyle}
                onChange={handleChange}
                value={formData.fullName}
              />

              <input
                name="subject"
                placeholder="PROJECT SUBJECT / ARCHITECTURE TYPE"
                required
                style={inputStyle}
                onChange={handleChange}
                value={formData.subject}
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
                name="message"
                placeholder="DESCRIBE THE INFRASTRUCTURE REQUIREMENTS OR WORK SCOPE..."
                rows="5"
                required
                style={{ ...inputStyle, resize: "none", marginBottom: "35px" }}
                onChange={handleChange}
                value={formData.message}
              />

              {/* Exact execution block for centering properties */}
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
          </div>
        </motion.div>
      </div>

      {/* Background Watermark Layout Element */}
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
        CONTACT
      </div>
    </section>
  );
};

export default Contact;
