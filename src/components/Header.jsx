import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/Logo.webp";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
  });

  useEffect(() => {
    const handleResize = () => setWindowSize({ width: window.innerWidth });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { width } = useWindowSize();

  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const isMobile = width <= 998;
  const isNarrowDesktop = width > 998 && width <= 1300;

  const colors = {
    primary: "#1A194D",
    white: "#FFFFFF",
    accent: "#E6A317",
    line: "rgba(26, 25, 77, 0.08)",
    borderLine: "rgba(26, 25, 77, 0.15)",
    textDark: "#333333",
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  // UPDATED NAVLINKS WITH INDIVIDUAL PATHS FOR EACH SERVICE
  const navLinks = [
    { name: "HOME", path: "/" },
    {
      name: "ABOUT US",
      path: "/about",
      dropdown: [
        { name: "Who We Are", path: "/about" },
        { name: "Our Mission", path: "/our-mission" },
        { name: "Our Vision", path: "/our-vision" },
        { name: "Our Journey", path: "/our-journey" },
        { name: "Board of Directors", path: "/boardofdirectors" },
      ],
    },
    {
      name: "SERVICES",
      path: "/services/water-supply",

      dropdown: [
        {
          name: "Water Supply & Pipeline Infrastructure",
          path: "/services/water-supply",
        },
        {
          name: "Canal Construction & Irrigation Projects",
          path: "/services/canal-irrigation",
        },
        { name: "RCC Construction Works", path: "/services/rcc-construction" },
        {
          name: "Water Treatment Plant (WTP) Projects",
          path: "/services/water-treatment",
        },
        {
          name: "Building Construction Projects",
          path: "/services/building-construction",
        },
        {
          name: "Road & Civil Infrastructure Works",
          path: "/services/road-infrastructure",
        },
      ],
    },
    {
      name: "PROJECTS",
      path: "/completed-projects",
      dropdown: [
        { name: "Completed Projects", path: "/completed-projects" },
        { name: "Ongoing Projects", path: "/ongoing-projects" },
      ],
    },
    { name: "INVESTOR", path: "/investor" },
    { name: "CAREER", path: "/career" },
    { name: "GALLERY", path: "/gallery" },
    { name: "CSR", path: "/csr" },
    { name: "CONTACT US", path: "/contact" },
  ];

  const styles = {
    header: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      zIndex: 9999,
      backgroundColor: colors.white,
      boxShadow: isScrolled ? "0 4px 20px rgba(0,0,0,0.06)" : "none",
      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      fontFamily: '"Montserrat", sans-serif',
    },
    container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: isMobile ? "10px 20px" : isNarrowDesktop ? "10px 2%" : "10px 5%",
      maxWidth: "100%",
      width: "100%",
      height: isMobile ? "70px" : "90px",
      margin: "0 auto",
      borderBottom: isScrolled ? "none" : `1px solid ${colors.line}`,
      boxSizing: "border-box",
      position: "relative",
      zIndex: 10001,
      backgroundColor: colors.white,
    },
    logoWrapper: {
      display: "flex",
      alignItems: "center",
      flexShrink: 0,
    },
    logoImage: {
      height: isMobile ? "55px" : isNarrowDesktop ? "65px" : "75px",
      width: "auto",
      objectFit: "contain",
      marginTop: "15px",
      transition: "height 0.3s ease",
    },
    desktopNav: {
      display: isMobile ? "none" : "flex",
      alignItems: "center",
      height: "100%",
    },
    navItemContainer: (index) => ({
      position: "relative",
      display: "flex",
      alignItems: "center",
      height: "30px",
      borderRight:
        index === navLinks.length - 1
          ? "none"
          : `1px solid ${colors.borderLine}`,
    }),
    navItem: {
      fontSize: width <= 1300 ? "10.5px" : "12px",
      fontWeight: "800",
      color: colors.primary,
      textDecoration: "none",
      letterSpacing: "1.2px",
      padding: width <= 1300 ? "0 12px" : "0 18px",
      textTransform: "uppercase",
      whiteSpace: "nowrap",
      display: "flex",
      alignItems: "center",
      gap: "6px",
      height: "100%",
      cursor: "pointer",
    },
    desktopDropdown: {
      position: "absolute",
      top: "calc(100% + 20px)",
      left: "0",
      backgroundColor: colors.white,
      boxShadow: "0 15px 40px rgba(26, 25, 77, 0.08)",
      padding: "15px 0",
      minWidth: "320px",
      borderRadius: "0 0 8px 8px",
      border: `1px solid ${colors.line}`,
      width: "max-content", // Fits the width to the longest text automatically
      minWidth: "350px", // Ensures a solid minimum base width
      whiteSpace: "nowrap", // PREVENTS the text from breaking into two lines
      borderTop: `3px solid ${colors.accent}`,
    },
    activeLine: {
      position: "absolute",
      bottom: "-15px",
      left: "20px",
      right: "20px",
      height: "3px",
      backgroundColor: colors.accent,
      borderRadius: "2px",
    },
    hamburgerBtn: {
      display: isMobile ? "block" : "none",
      width: "30px",
      height: "22px",
      background: "transparent",
      border: "none",
      zIndex: 10002,
      cursor: "pointer",
      padding: 0,
      position: "relative",
    },
    mobileMenuOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100vh",
      zIndex: 10000,
      display: "flex",
      flexDirection: "column",
      paddingTop: "70px",
      backgroundColor: colors.white,
      backgroundImage: `linear-gradient(${colors.line} 1px, transparent 1px), linear-gradient(90deg, ${colors.line} 1px, transparent 1px)`,
      backgroundSize: "60px 60px",
      overflowY: "auto",
      overflowX: "hidden",
      fontFamily: '"Montserrat", sans-serif',
    },
    mobileItemWrapper: (isOpen) => ({
      backgroundColor: isOpen ? "rgba(26, 25, 77, 0.02)" : "transparent",
      transition: "background-color 0.3s ease",
      width: "100%",
      borderBottom: `1px solid ${colors.line}`,
    }),
    mobileNavItem: {
      padding: "20px 25px",
      fontSize: "1.15rem",
      fontWeight: "800",
      color: colors.primary,
      textTransform: "uppercase",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    mobileDropdown: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      padding: "10px 25px 25px 60px",
      backgroundColor: "transparent",
    },
  };

  const Chevron = ({ isOpen, color = "currentColor", size = 12 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        transition: "transform 0.3s ease",
        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
      }}
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  );

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <div style={styles.logoWrapper}>
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
            <img src={logo} alt="DIVYA Logo" style={styles.logoImage} />
          </Link>
        </div>

        <nav style={styles.desktopNav}>
          {navLinks.map((link, index) => {
            const isPageActive =
              currentPath === link.path ||
              (link.dropdown &&
                link.dropdown.some((sub) => sub.path === currentPath));

            return (
              <div
                key={link.name}
                style={styles.navItemContainer(index)}
                onMouseEnter={() => setHoveredItem(link.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link to={link.path} style={styles.navItem}>
                  {link.name}
                  {link.dropdown && (
                    <Chevron
                      isOpen={hoveredItem === link.name}
                      size={10}
                      color={colors.primary}
                    />
                  )}
                  <AnimatePresence>
                    {(hoveredItem === link.name ||
                      (!hoveredItem && isPageActive)) && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        style={styles.activeLine}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </AnimatePresence>
                </Link>

                <AnimatePresence>
                  {link.dropdown && hoveredItem === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      style={styles.desktopDropdown}
                    >
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          style={{
                            padding: "10px 25px",
                            fontSize: "0.85rem",
                            color: colors.textDark,
                            textDecoration: "none",
                            display: "block",
                            fontWeight: "600",
                            transition: "all 0.2s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.color = colors.accent;
                            e.target.style.paddingLeft = "30px";
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.color = colors.textDark;
                            e.target.style.paddingLeft = "25px";
                          }}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        <button
          style={styles.hamburgerBtn}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "2.5px",
              background: colors.primary,
              borderRadius: "2px",
              top: isMobileMenuOpen ? "50%" : "0%",
              left: 0,
              transform: isMobileMenuOpen
                ? "translateY(-50%) rotate(45deg)"
                : "translateY(0) rotate(0deg)",
              transition: "all 0.3s ease",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "2.5px",
              background: colors.primary,
              borderRadius: "2px",
              top: "50%",
              left: 0,
              transform: "translateY(-50%)",
              opacity: isMobileMenuOpen ? 0 : 1,
              transition: "all 0.3s ease",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "2.5px",
              background: colors.primary,
              borderRadius: "2px",
              bottom: isMobileMenuOpen ? "50%" : "0%",
              left: 0,
              transform: isMobileMenuOpen
                ? "translateY(50%) rotate(-45deg)"
                : "translateY(0) rotate(0deg)",
              transition: "all 0.3s ease",
            }}
          />
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            style={styles.mobileMenuOverlay}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
          >
            <div
              style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) rotate(-90deg)",
                fontSize: "25vw",
                fontWeight: "900",
                color: colors.primary,
                opacity: 0.03,
                letterSpacing: "15px",
                pointerEvents: "none",
                zIndex: 0,
              }}
            >
              DIVYA
            </div>

            <div
              style={{
                width: "100%",
                position: "relative",
                zIndex: 1,
                paddingBottom: "60px",
              }}
            >
              {navLinks.map((link, index) => (
                <div
                  key={link.name}
                  style={styles.mobileItemWrapper(activeDropdown === link.name)}
                >
                  <div
                    style={styles.mobileNavItem}
                    onClick={() => {
                      if (link.dropdown) {
                        setActiveDropdown(
                          activeDropdown === link.name ? null : link.name,
                        );
                      } else {
                        navigate(link.path);
                        setIsMobileMenuOpen(false);
                      }
                    }}
                  >
                    <span style={{ display: "flex", alignItems: "center" }}>
                      <span
                        style={{
                          color: colors.accent,
                          fontSize: "0.85rem",
                          fontWeight: "800",
                          marginRight: "20px",
                          fontFamily: "monospace",
                        }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {link.name}
                    </span>
                    {link.dropdown && (
                      <Chevron
                        isOpen={activeDropdown === link.name}
                        size={16}
                        color={colors.primary}
                      />
                    )}
                  </div>

                  <AnimatePresence>
                    {link.dropdown && activeDropdown === link.name && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        style={{ overflow: "hidden" }}
                      >
                        <div style={styles.mobileDropdown}>
                          {link.dropdown.map((sub) => (
                            <Link
                              key={sub.name}
                              to={sub.path}
                              style={{
                                fontSize: "1rem",
                                color: colors.textDark,
                                fontWeight: "600",
                                textDecoration: "none",
                                padding: "8px 0",
                              }}
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
