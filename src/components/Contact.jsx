import React, { useState } from "react";

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
    accent: "#E6A317", // Construction Gold
    white: "#FFFFFF",
    gridLine: "rgba(26, 25, 77, 0.06)", // Very faint grid line
    inputBg: "#F9FAFC", // Extremely subtle off-white for inputs
    inputBorder: "rgba(26, 25, 77, 0.1)",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
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

    const phoneNumber = "9638757366";
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
    padding: "18px 20px",
    backgroundColor: colors.inputBg,
    border: `1px solid ${colors.inputBorder}`,
    borderRadius: "2px",
    fontSize: "13px",
    fontWeight: "700",
    color: colors.primary,
    fontFamily: "'Montserrat', sans-serif",
    marginBottom: "20px",
    outline: "none",
    transition: "all 0.2s ease",
    boxSizing: "border-box",
    letterSpacing: "0.5px",
    textTransform: "uppercase",
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
        input:focus, textarea:focus {
          border-color: ${colors.accent} !important;
          background-color: ${colors.white} !important;
          box-shadow: 0 4px 12px rgba(26, 25, 77, 0.05);
        }
        
        input::placeholder, textarea::placeholder {
          color: ${colors.primary};
          opacity: 0.4;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .submit-btn {
          width: 100%;
          padding: 22px 0;
          background-color: transparent;
          color: ${colors.primary};
          border: 2px solid ${colors.primary};
          border-radius: 50px;
          font-weight: 900;
          letter-spacing: 3px;
          cursor: pointer;
          text-transform: uppercase;
          font-size: 13px;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
        }
        
        .submit-btn:hover {
          background-color: ${colors.primary};
          color: ${colors.white};
        }

        .submit-btn:hover .accent-bar {
          background-color: ${colors.white} !important;
        }

        .layout-container {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          width: 100%;
          max-width: 1300px;
          gap: 80px;
          background-color: rgba(255, 255, 255, 0.95);
          padding: 60px;
          border-radius: 4px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.03);
          border: 1px solid rgba(26, 25, 77, 0.05);
        }

        .input-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        @media (max-width: 1024px) {
          .layout-container {
            grid-template-columns: 1fr;
            gap: 50px;
            padding: 40px;
          }
        }

        @media (max-width: 768px) {
          .layout-container {
            padding: 30px 20px;
          }
          .input-row {
            grid-template-columns: 1fr;
            gap: 0;
          }
        }
      `}</style>

      <div className="layout-container">
        {/* LEFT SIDE: Head Office Info */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <h2
            style={{
              fontSize: "36px",
              fontWeight: "900",
              color: colors.primary,
              margin: "0 0 30px 0",
              textTransform: "uppercase",
              letterSpacing: "-1px",
            }}
          >
            HEAD OFFICE
          </h2>

          {/* Address with Icon */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "15px",
              marginBottom: "40px",
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke={colors.accent}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ flexShrink: 0, marginTop: "2px" }}
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <p
              style={{
                fontSize: "15px",
                color: colors.medium,
                lineHeight: "1.8",
                fontWeight: "700",
                margin: 0,
              }}
            >
              The Millennium, Office No. 808, 8th Floor, Near Nana Mova Circle,
              150- Feet Ring Road, Rajkot-360004, Gujarat
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "25px",
              marginBottom: "50px",
            }}
          >
            {/* Phone with Icon */}
            <div
              style={{ display: "flex", alignItems: "flex-start", gap: "15px" }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke={colors.accent}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ flexShrink: 0, marginTop: "2px" }}
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <div>
                <div
                  style={{
                    color: colors.accent,
                    fontSize: "11px",
                    fontWeight: "800",
                    letterSpacing: "1.5px",
                    marginBottom: "4px",
                  }}
                >
                  PHONE NUMBER
                </div>
                <div
                  style={{
                    fontSize: "16px",
                    color: colors.primary,
                    fontWeight: "800",
                  }}
                >
                  +91 9638757366
                </div>
              </div>
            </div>

            {/* Email with Icon */}
            <div
              style={{ display: "flex", alignItems: "flex-start", gap: "15px" }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke={colors.accent}
                strokeWidth="2.5"
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
                    color: colors.accent,
                    fontSize: "11px",
                    fontWeight: "800",
                    letterSpacing: "1.5px",
                    marginBottom: "4px",
                  }}
                >
                  EMAIL CHANNELS
                </div>
                <a
                  href="mailto:info@divyaglobalinfra.com"
                  style={{
                    fontSize: "16px",
                    color: colors.primary,
                    fontWeight: "800",
                    textDecoration: "none",
                  }}
                >
                  info@divyaglobalinfra.com
                </a>
              </div>
            </div>
          </div>

          <p
            style={{
              fontSize: "13px",
              color: colors.primary,
              lineHeight: "1.6",
              fontWeight: "700",
              margin: 0,
            }}
          >
            Fill out your corporate metrics layout details below. Submitting
            packages your operational data directly to our primary
            administrative WhatsApp line for contract review.
          </p>
        </div>

        {/* RIGHT SIDE: Contact Form */}
        <div>
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
              rows="6"
              required
              style={{ ...inputStyle, resize: "none", marginBottom: "30px" }}
              onChange={handleChange}
              value={formData.message}
            />

            <button type="submit" className="submit-btn">
              SUBMIT VIA WHATSAPP
              <div
                className="accent-bar"
                style={{
                  width: "30px",
                  height: "2px",
                  backgroundColor: colors.accent,
                  transition: "background-color 0.2s ease",
                }}
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
