import React, { useState, useEffect } from "react";

// 1. Import all 6 images directly from your assets folder
// Matching the exact file extensions seen in your screenshot
import hs1 from "../assets/hs1.png";
import hs2 from "../assets/hs2.png";
import hs3 from "../assets/hs3.jpeg";
import hs4 from "../assets/hs4.PNG";
import hs5 from "../assets/hs5.PNG";
import hs6 from "../assets/hs6.webp";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // 2. Put the imported variables directly into the array (no quotes)
  const images = [hs1, hs2, hs3, hs4, hs5, hs6];

  // Carousel Auto-Play Logic
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000); // SPED UP: Now changes every 2.5 seconds

    return () => clearInterval(slideInterval);
  }, [images.length]);

  return (
    <section className="hero-container">
      {/* INTERNAL CSS */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;800&display=swap');

          .hero-container {
            position: relative;
            width: 100%;
            margin-top: 60px; /* Adjust based on your navbar height */
            min-height: 700px;
            height: calc(100vh - 60px); 
            max-width: 100vw;
            overflow: hidden; 
            font-family: 'Montserrat', sans-serif;
            background-color: #000; /* FIXED: Pure black background completely eliminates the grey flash */
          }

          /* CAROUSEL SLIDE WRAPPER */
          .slide-wrapper {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
          }

          /* INDIVIDUAL RESPONSIVE IMAGES */
          .hero-image {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover; 
            object-position: center center;
            opacity: 0;
            z-index: 1;
            /* SPED UP: Crossfade is now 0.8s (was 1.5s), zoom is 5s (was 7s) */
            transition: opacity 0.8s ease-in-out, transform 5s ease-out;
            transform: scale(1);
          }

          /* The active image instantly gets opacity 1, hiding any background */
          .hero-image.active {
            opacity: 1;
            z-index: 2;
            transform: scale(1.05); /* Slow zoom in */
          }

          /* DARK OVERLAY FOR TEXT READABILITY */
          .overlay {
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            background: linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 100%);
            z-index: 3;
          }

          /* COMPACT FLOATING TAG */
          .white-tag {
            position: absolute;
            bottom: 40px;    
            left: 5%; 
            z-index: 10;
            background: rgba(255, 255, 255, 0.95); 
            backdrop-filter: blur(10px); 
            padding: 15px 25px; 
            border-radius: 8px; 
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2); 
            border-left: 6px solid #62579c;
            /* Simple fade-in animation for the text box on page load */
            animation: slideUpFade 0.8s ease-out forwards;
          }

          .tag-subtitle {
            margin: 0 0 4px 0;
            font-size: 0.75rem; 
            color: #aaaaaa; /* Lightened slightly for the black background start */
            text-transform: uppercase;
            letter-spacing: 3px;
            font-weight: 600;
          }

          .tag-title {
            margin: 0;
            font-size: clamp(1.2rem, 4vw, 1.8rem); 
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 1px;
            line-height: 1.2;
          }

          .gradient-text {
            background: linear-gradient(135deg, #957ab4, #62579c, #2a2859);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            color: transparent;
            display: inline-block;
          }

          @keyframes slideUpFade {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          /* =========================================
             MOBILE RESPONSIVE FIX
             ========================================= */
          @media (max-width: 768px) {
            .hero-container {
              min-height: 450px; /* Increased height for mobile */
              height: 60vh;      /* Takes up more of the mobile screen */
            }
            .white-tag {
              bottom: 25px;      
              padding: 12px 18px;
            }
          }
        `}
      </style>

      {/* IMAGE CAROUSEL */}
      <div className="slide-wrapper">
        <div className="overlay"></div>
        {images.map((imgSrc, index) => (
          <img
            key={index}
            src={imgSrc}
            alt={`Divya Global Infra Slide ${index + 1}`}
            className={`hero-image ${index === currentSlide ? "active" : ""}`}
            // Add a high-priority fetch hint to the very first image to help it load faster
            fetchpriority={index === 0 ? "high" : "auto"}
          />
        ))}
      </div>

      {/* COMPACT FLOATING TAG */}
      <div className="white-tag">
        <p className="tag-subtitle">Welcome to</p>
        <h1 className="tag-title">
          <span className="gradient-text">Divya Global Infra Pvt. Ltd.</span>
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
