import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PiPipeLight } from "react-icons/pi";
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [rotation, setRotation] = useState(0);

  const colors = {
    primary: "#1A194D", // Heavy Navy Blue
    icon: "#FFFFFF", // Clean White
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // 1. Handle Visibility
      if (currentScroll > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // 2. Handle Rotation (1 degree for every 2 pixels scrolled)
      setRotation(currentScroll / 2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
        pointerEvents: isVisible ? "auto" : "none", // Prevent clicking when hidden
        position: "fixed",
        bottom: "30px",
        right: "15px", // Kept tight to the right side
        zIndex: 9999,
        backgroundColor: colors.primary,
        border: "none",
        borderRadius: "50%",
        width: "48px",
        height: "48px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        boxShadow: `0px 6px 15px rgba(26, 25, 77, 0.4)`,
        WebkitTapHighlightColor: "transparent",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "28px",
          height: "28px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* ROTATING ARCHITECTURE ICON */}
        <motion.div
          // Apply the rotation state directly to Framer Motion's animate property
          animate={{ rotate: rotation }}
          // A tiny tween makes the manual state updates look buttery smooth
          transition={{ type: "tween", ease: "linear", duration: 0.1 }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: colors.icon,
          }}
        >
          <PiPipeLight size={24} />
        </motion.div>
      </div>
    </motion.button>
  );
};

export default ScrollToTopButton;
