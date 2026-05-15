import React, { useState, useEffect, useRef } from "react";

const HeroSection = () => {
  // 1. Immediate Synchronous State Check (Prevents React-level render lag)
  const [videoLoaded, setVideoLoaded] = useState(() => {
    if (typeof window !== "undefined") {
      return sessionStorage.getItem("video_loaded_before") === "true";
    }
    return false;
  });

  const videoRef = useRef(null);

  useEffect(() => {
    // Safety Fallback: In case browser events hang, drop loader in 400ms
    const timer = setTimeout(() => {
      setVideoLoaded(true);
      sessionStorage.setItem("video_loaded_before", "true");
    }, 400);

    // If video is cached locally, clear loader instantly on mount
    if (videoRef.current && videoRef.current.readyState >= 3) {
      setVideoLoaded(true);
      sessionStorage.setItem("video_loaded_before", "true");
    }

    return () => clearTimeout(timer);
  }, []);

  const handleVideoReady = () => {
    setVideoLoaded(true);
    sessionStorage.setItem("video_loaded_before", "true");
  };

  // 2. Direct Runtime Inline Validation (Bypasses state delay entirely)
  const bypassLoader =
    typeof window !== "undefined" &&
    sessionStorage.getItem("video_loaded_before") === "true";

  return (
    <section className="hero-container">
      {/* INTERNAL CSS */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;800&display=swap');

          .hero-container {
            position: relative;
            width: 100%;
            margin-top: 60px; 
            min-height: 700px;
            height: calc(100vh - 60px); 
            max-width: 100vw;
            box-sizing: border-box;
            overflow: hidden; 
            font-family: 'Montserrat', sans-serif;
            background-color: #000;
          }

          /* FULL SCREEN VIDEO */
          .hero-video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover; 
            object-position: center center;
            z-index: 1;
            /* If already cached, drop opacity transition delay completely */
            opacity: ${videoLoaded || bypassLoader ? 1 : 0};
            transition: ${bypassLoader ? "none" : "opacity 0.2s ease-in-out"};
          }

          /* SMALL WHITE TAG FLOATING OFF THE EDGE */
          .white-tag {
            position: absolute;
            bottom: 20px;    
          
            z-index: 10;
            background: rgba(255, 255, 255, 0.95); 
            backdrop-filter: blur(8px); 
            padding: 10px 20px; 
            border-radius: 12px; 
            box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.2); 
            border-left: 5px solid #62579c;
            opacity: ${bypassLoader ? 1 : 0};
            transform: ${bypassLoader ? "translateY(0)" : "translateY(20px)"};
            animation: ${videoLoaded && !bypassLoader ? "slideUpTag 0.4s ease-out forwards" : "none"};
          }

          @keyframes slideUpTag {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          .tag-subtitle {
            margin: 0 0 2px 0;
            font-size: 0.7rem; 
            color: #555555; 
            text-transform: uppercase;
            letter-spacing: 2px;
            font-weight: 500;
          }

          .tag-title {
            margin: 0;
            font-size: clamp(1.1rem, 3vw, 1.4rem); 
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 1px;
            line-height: 1.1;
          }

          .gradient-text {
            background: linear-gradient(to right, #957ab4, #62579c, #353378);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            color: transparent;
            display: inline-block;
          }

          /* PREMIUM CONSTRUCTION LOADER BRACKET */
          .construction-loader {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #0b0b0f;
            z-index: 100;
            display: ${bypassLoader ? "none" : "flex"};
            flex-direction: column;
            justify-content: center;
            align-items: center;
            pointer-events: none;
            opacity: ${videoLoaded ? 0 : 1};
            transition: opacity 0.3s cubic-bezier(0.25, 1, 0.5, 1);
          }

          .loader-content {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 24px;
          }

          .building-ring {
            width: 60px;
            height: 60px;
            border: 3px solid rgba(149, 122, 180, 0.1);
            border-top: 3px solid #62579c;
            border-right: 3px solid #957ab4;
            border-radius: 50%;
            animation: spinStructural 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
          }

          .loader-text {
            color: #ffffff;
            font-size: 1.2rem;
            font-weight: 800;
            letter-spacing: 4px;
            text-transform: uppercase;
            margin: 0;
            animation: pulseText 1.8s ease-in-out infinite;
          }

          @keyframes spinStructural {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          @keyframes pulseText {
            0%, 100% { opacity: 0.6; transform: scale(0.98); }
            50% { opacity: 1; transform: scale(1); }
          }
        `}
      </style>

      {/* PREMIUM CONSTRUCTION LOADER */}
      <div className="construction-loader">
        <div className="loader-content">
          <div className="building-ring"></div>
          <h2 className="loader-text">Divya Global Infra Pvt. Ltd.</h2>
        </div>
      </div>

      {/* BACKGROUND VIDEO */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="hero-video"
        onLoadedData={handleVideoReady}
        onCanPlay={handleVideoReady}
      >
        <source src="/homevideo.mp4" type="video/mp4" />
      </video>

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
