import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- IMPORTING ALL PROJECT IMAGES ---
import sauni1 from "../assets/Sauni.webp";
import sauni2 from "../assets/Sauni1.webp";
import sauni3 from "../assets/Sauni2.webp";

import di1 from "../assets/DIPipe.webp";
import di2 from "../assets/DIPipe1.webp";
import di3 from "../assets/DIPipe2.webp";
import di4 from "../assets/DIPipe3.webp";

import rcc1 from "../assets/RCC1.webp";
import rcc2 from "../assets/RCC2.webp";
import rcc3 from "../assets/RCC3.webp";
import rcc4 from "../assets/RCC4.webp";

import canal1 from "../assets/Canal1.webp";
import canal2 from "../assets/Canal2.webp";
import canal3 from "../assets/Canal3.webp";
import canal4 from "../assets/Canal4.webp";

import hw1 from "../assets/hwork1.webp";
import pond1 from "../assets/Pondwork.webp";

// 7. Water Treatment Plant Work (Primary)
import wtp1 from "../assets/watertreament.webp";
import wtp2 from "../assets/watertreament2.webp";
import wtp3 from "../assets/watertreament3.webp";
import wtp4 from "../assets/watertreament4.webp";
import wtpAlt from "../assets/WaterTreatment1.webp";

import storage1 from "../assets/Storage.webp";

import mech1 from "../assets/mechanically.webp";
import mech2 from "../assets/mechanically2.webp";
import mech3 from "../assets/mechanically3.webp";
import mech4 from "../assets/mechanically4.webp";

// Array of all images for the gallery mapping
const galleryImages = [
  sauni1,
  di1,
  rcc1,
  canal1,
  wtp1,
  mech1,
  sauni2,
  di2,
  rcc2,
  canal2,
  wtp2,
  mech2,
  sauni3,
  di3,
  rcc3,
  canal3,
  wtp3,
  mech3,
  hw1,
  pond1,
  storage1,
  wtpAlt,
  di4,
  rcc4,
  canal4,
  wtp4,
  mech4,
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const theme = {
    primary: "#1A194D",
    accent: "#E6A317",
    white: "#FFFFFF",
    gridGrey: "rgba(26, 25, 77, 0.08)",
    overlay: "rgba(26, 25, 77, 0.95)", // Deep blue transparent overlay for lightbox
  };

  // Close lightbox on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

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
      {/* --- INLINE CSS FOR PREMIUM GRID & HOVER EFFECTS --- */}
      <style>{`
        .gallery-watermark {
          position: absolute;
          bottom: -2%;
          left: -2%;
          font-size: 18vw;
          font-weight: 900;
          color: ${theme.primary};
          opacity: 0.02;
          letter-spacing: 10px;
          pointer-events: none;
          z-index: 0;
          user-select: none;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          grid-auto-rows: 280px;
          gap: 20px;
          grid-auto-flow: dense; /* Fills in the gaps created by spanning elements */
          position: relative;
          z-index: 1;
        }

        /* Dynamic Masonry Effect: Makes certain images larger to break the grid pattern */
        .gallery-item:nth-child(7n + 1) {
          grid-column: span 2;
          grid-row: span 2;
        }
        
        .gallery-item:nth-child(5n + 3) {
          grid-column: span 2;
        }

        .gallery-item {
          position: relative;
          overflow: hidden;
          background: #E2E8F0;
          cursor: pointer;
          border: 1px solid ${theme.gridGrey};
        }

        .gallery-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Hover Overlay Mechanics */
        .gallery-overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(26, 25, 77, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.4s ease;
          border: 4px solid transparent;
        }

        .gallery-item:hover .gallery-img {
          transform: scale(1.08);
        }

        .gallery-item:hover .gallery-overlay {
          opacity: 1;
          border-color: ${theme.accent};
        }

        .view-btn {
          color: ${theme.white};
          font-weight: 900;
          letter-spacing: 3px;
          text-transform: uppercase;
          font-size: 12px;
          border: 2px solid ${theme.white};
          padding: 10px 24px;
          transform: translateY(20px);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .gallery-item:hover .view-btn {
          transform: translateY(0);
        }

        /* Responsive Resets */
        @media (max-width: 1024px) {
          .gallery-grid {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            grid-auto-rows: 220px;
          }
        }

        @media (max-width: 768px) {
          .gallery-watermark { display: none; }
          .gallery-grid {
            grid-template-columns: 1fr; /* Stack on mobile */
            grid-auto-rows: 250px;
          }
          /* Remove spans on mobile so it looks clean and uniform */
          .gallery-item:nth-child(7n + 1),
          .gallery-item:nth-child(5n + 3) {
            grid-column: span 1;
            grid-row: span 1;
          }
          .gallery-header {
             text-align: center;
             align-items: center;
          }
          .accent-line-wrap { margin: 0 auto; justify-content: center; }
          .page-title { font-size: clamp(38px, 10vw, 50px) !important; letter-spacing: -1px !important; }
        }
      `}</style>

      {/* Giant Background Architectural Wireframe Text */}
      <div className="gallery-watermark">VISUALS</div>

      <div style={{ maxWidth: "1500px", margin: "0 auto" }}>
        {/* --- HEADER BLOCK --- */}
        <div
          className="gallery-header"
          style={{ marginBottom: "80px", position: "relative", zIndex: 1 }}
        >
          <div
            className="accent-line-wrap"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              marginBottom: "20px",
            }}
          >
            <div
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
              Project Documentation
            </span>
          </div>

          <h1
            className="page-title"
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
            OUR <br />
            <span
              style={{
                color: "transparent",
                WebkitTextStroke: `2px ${theme.primary}`,
              }}
            >
              GALLERY
            </span>
          </h1>
        </div>

        {/* --- DYNAMIC MASONRY GRID --- */}
        <div className="gallery-grid">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              className="gallery-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              transition={{ duration: 0.6, delay: (index % 5) * 0.1 }}
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img}
                alt={`Project execution detail ${index + 1}`}
                className="gallery-img"
                loading="lazy"
              />

              <div className="gallery-overlay">
                <div className="view-btn">Expand View</div>
              </div>

              {/* Architectural Corner Notch */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  width: "25px",
                  height: "25px",
                  background: theme.accent,
                  clipPath: "polygon(100% 0, 0 100%, 100% 100%)",
                  zIndex: 2,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- FULL SCREEN LIGHTBOX --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedImage(null)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: theme.overlay,
              backdropFilter: "blur(10px)",
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "40px",
              cursor: "zoom-out",
            }}
          >
            {/* Close Button */}
            <div
              style={{
                position: "absolute",
                top: "30px",
                right: "40px",
                color: theme.white,
                background: "transparent",
                border: `2px solid ${theme.white}`,
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = theme.white;
                e.currentTarget.style.color = theme.primary;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = theme.white;
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </div>

            {/* High-Res Image Display */}
            <motion.img
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              src={selectedImage}
              alt="Expanded view"
              onClick={(e) => e.stopPropagation()} // Prevents closing when clicking the image itself
              style={{
                maxWidth: "100%",
                maxHeight: "90vh",
                objectFit: "contain",
                boxShadow: "0 30px 60px rgba(0,0,0,0.5)",
                border: `4px solid ${theme.white}`,
                cursor: "default",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
