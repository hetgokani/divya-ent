import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { completedProjectsData } from "./projectData";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [selectedImgIdx, setSelectedImgIdx] = useState(0);

  useEffect(() => {
    const activeProject = completedProjectsData.find((p) => p.id === id);
    if (activeProject) {
      setProject(activeProject);
      setSelectedImgIdx(0); // Reset image index when switching projects
      window.scrollTo(0, 0);
    } else {
      navigate("/completed-projects");
    }
  }, [id, navigate]);

  if (!project) return null;

  const theme = {
    primary: "#1A194D",
    accent: "#E6A317",
    white: "#FFFFFF",
    concrete: "#F3F4F6",
    gridGrey: "rgba(26, 25, 77, 0.08)",
    textDark: "#1F2937",
  };

  return (
    <main
      style={{
        backgroundColor: theme.white,
        backgroundImage: `linear-gradient(${theme.gridGrey} 1px, transparent 1px), linear-gradient(90deg, ${theme.gridGrey} 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
        padding: "160px 8% 120px 8%",
        fontFamily: '"Montserrat", sans-serif',
        minHeight: "100vh",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {/* --- RETURN DIRECTION BUTTON --- */}
        <button
          onClick={() => navigate("/completed-projects")}
          style={{
            background: "none",
            border: "none",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: "12px",
            fontWeight: "900",
            color: theme.primary,
            letterSpacing: "2px",
            cursor: "pointer",
            marginBottom: "50px",
            padding: 0,
            textTransform: "uppercase",
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
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          BACK TO COMPLETED PROJECTS
        </button>

        {/* --- STRUCTURAL SPLIT CONTENT INTERFACE GRID --- */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: "60px",
            alignItems: "start",
          }}
          className="detail-split-matrix"
        >
          {/* LEFT COLUMN: MULTI-IMAGE GALLERY MECHANICS */}
          <div>
            {/* Focal Display Board View */}
            <div
              className="main-image-display"
              style={{
                position: "relative",
                height: "500px",
                backgroundColor: theme.concrete,
                border: `1px solid ${theme.gridGrey}`,
                overflow: "hidden",
                marginBottom: "20px",
                boxShadow: "0 30px 60px rgba(0,0,0,0.05)",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedImgIdx}
                  src={project.allImages[selectedImgIdx]}
                  alt={`${project.title} variant compilation view`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </AnimatePresence>
            </div>

            {/* Carousel Interactive Strips */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "15px",
              }}
            >
              {project.allImages.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImgIdx(idx)}
                  className="thumbnail-box"
                  style={{
                    height: "90px",
                    cursor: "pointer",
                    border:
                      selectedImgIdx === idx
                        ? `3px solid ${theme.accent}`
                        : `1px solid ${theme.gridGrey}`,
                    opacity: selectedImgIdx === idx ? 1 : 0.6,
                    transition: "all 0.2s ease",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={img}
                    alt={`Structural subcomponent view ${idx + 1}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: REINFORCED TEXT ARCHITECTURE PROFILE */}
          <div style={{ paddingTop: "10px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  width: "30px",
                  height: "2px",
                  background: theme.accent,
                }}
              />
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: "900",
                  color: theme.accent,
                  letterSpacing: "3px",
                }}
              >
                PROJECT OVERVIEW
              </span>
            </div>

            <h1
              className="project-heading"
              style={{
                fontSize: "clamp(32px, 4vw, 52px)",
                fontWeight: "900",
                color: theme.primary,
                lineHeight: "1.1",
                margin: "0 0 35px 0",
                textTransform: "uppercase",
                letterSpacing: "-1px",
              }}
            >
              {project.title}
            </h1>

            <div
              style={{
                width: "100%",
                height: "1px",
                background: theme.gridGrey,
                marginBottom: "35px",
              }}
            />

            <h3
              style={{
                fontSize: "14px",
                fontWeight: "900",
                color: theme.primary,
                letterSpacing: "1.5px",
                margin: "0 0 15px 0",
                textTransform: "uppercase",
              }}
            >
              Structural Execution Report
            </h3>

            <p
              style={{
                fontSize: "16px",
                color: theme.textDark,
                lineHeight: "1.8",
                fontWeight: "500",
                margin: 0,
              }}
            >
              {project.longDescription}
            </p>
          </div>
        </div>
      </div>

      {/* Breakpoint Handling Rules Inline Engine Styles */}
      <style>{`
        @media (max-width: 1024px) {
          .detail-split-matrix {
            grid-template-columns: 1fr !important;
            gap: 50px !important;
          }
          .main-image-display {
            height: 400px !important;
          }
        }
        @media (max-width: 600px) {
          .project-heading {
             font-size: 28px !important;
             word-wrap: break-word;
          }
          .main-image-display {
            height: 250px !important;
          }
          .thumbnail-box {
            height: 60px !important;
          }
        }
      `}</style>
    </main>
  );
};

export default ProjectDetail;
