import React, { useState, useEffect, useRef } from "react";

const HeroSection = () => {
  // 1. Force the loader to be TRUE by default on every single page load.
  // No sessionStorage tricks. It stays true until the video actually paints.
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    const forcePlay = async () => {
      try {
        await vid.play();
      } catch (error) {
        // Silently catch autoplay restrictions
      }
    };

    forcePlay();

    // 2. Immediate check: If the video somehow loaded instantly, drop the loader.
    // readyState 3 or 4 means the browser has enough data to show frames.
    if (vid.readyState >= 3) {
      setIsLoading(false);
    }
  }, []);

  // 3. This is the magic trigger. It only fires when the black screen is gone.
  const handleVideoReady = () => {
    setIsLoading(false);
  };

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
            /* Video stays hidden (opacity 0) until isLoading is false */
            opacity: ${isLoading ? 0 : 1};
            transition: opacity 0.8s ease-in-out;
          }

          /* SMALL WHITE TAG FLOATING OFF THE EDGE */
          .white-tag {
            position: absolute;
            bottom: 20px;    
            left: 20px;
            z-index: 10;
            background: rgba(255, 255, 255, 0.95); 
            backdrop-filter: blur(8px); 
            padding: 10px 20px; 
            border-radius: 12px; 
            box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.2); 
            border-left: 5px solid #62579c;
            /* Slides up smoothly only after the loader goes away */
            opacity: ${isLoading ? 0 : 1};
            transform: ${isLoading ? "translateY(20px)" : "translateY(0)"};
            transition: all 0.6s ease-out 0.4s; 
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

          /* THE LOADER OVERLAY (COVERS THE BLACK SCREEN) */
          .construction-loader {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #0b0b0f;
            z-index: 100;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            pointer-events: none;
            /* Stays fully visible as long as isLoading is true */
            opacity: ${isLoading ? 1 : 0};
            visibility: ${isLoading ? "visible" : "hidden"};
            transition: opacity 0.5s ease, visibility 0.5s ease;
          }

          .loader-content {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 24px;
          }

          /* THE SPINNER YOU REQUESTED */
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

      {/* 
        PREMIUM SPINNER LOADER 
        This acts as a solid wall over the video until it's 100% ready. 
      */}
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
        onPlaying={
          handleVideoReady
        } /* This is the ultimate fallback to kill the loader only when frames are moving */
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
