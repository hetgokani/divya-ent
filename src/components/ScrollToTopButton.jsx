import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import smLogo from "../assets/smlogo.jpg";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsVisible(currentScroll > 300);

      // SLOWED DOWN: Changed from / 2 to / 8 for a subtle, premium spin
      setRotation(currentScroll / 8);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0, y: 50 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0,
        y: isVisible ? 0 : 50,
      }}
      transition={{ duration: 0.3 }}
      onClick={scrollToTop}
      style={{
        pointerEvents: isVisible ? "auto" : "none",
        position: "fixed",
        bottom: "30px",
        right: "20px",
        zIndex: 9999,
        backgroundColor: "#FFFFFF",
        border: "1px solid #f0f0f0",
        borderRadius: "50%",
        // Balanced width and height to be a perfect circle
        width: "50px",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.15)",
        overflow: "hidden",
        padding: "0",
      }}
    >
      <motion.div
        animate={{ rotate: rotation }}
        // Linear ease makes the manual scroll tracking feel connected to your finger
        transition={{ type: "tween", ease: "linear", duration: 0 }}
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={smLogo}
          alt="Logo"
          style={{
            width: "70%", // Shrinking logo slightly inside the circle for a cleaner look
            height: "80%",
            objectFit: "contain",
          }}
        />
      </motion.div>
    </motion.button>
  );
};

export default ScrollToTopButton;
