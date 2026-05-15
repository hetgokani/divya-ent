// App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// --- Core Layout & Global Helpers ---
import Loader from "./components/Loader";
import AutoScroll from "./components/AutoScroll";
import ScrollToTopButton from "./components/ScrollToTopButton";
import "./App.css";

// --- Standard Page Architecture Components ---
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BoardPage from "./pages/BoardPage";
import OurMissionPage from "./pages/OurMissionPage";
import OurVisionPage from "./pages/OurVisionPage";
import OurJourneyPage from "./pages/OurJourneyPage";

// --- Infrastructure Services Routes Components ---
import WaterPage from "./pages/WaterPage";
import CanalPage from "./pages/CanalPage";
import RCCPage from "./pages/RCCPage";
import WTPPage from "./pages/WTPPage";
import BuildingPage from "./pages/BuildingPage";
import CivilPage from "./pages/CivilPage";
import CareerPage from "./pages/CareerPage";
// --- Project Portfolio Matrix Components ---
// CRITICAL: Double check your directory structure! If these files are inside
// the components folder instead, change the keyword prefix path from "../pages/" to "../components/"
import CompletedProjectPage from "./pages/CompletedProjectPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import OnGoingProjectPage from "./pages/OnGoingProjectPage";
import ContactPage from "./pages/ContactPage";
const App = () => {
  // State initialization tracking the initial landing page splash load
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      {/* Synchronization script shifting viewpoint balance window frames up on navigation changes */}
      <AutoScroll />

      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" setLoading={setIsLoading} />
        ) : (
          <div
            key="main-app"
            style={{
              minHeight: "calc(100vh - 100px)",
              background: "#f8f9fa",
              width: "100%",
              maxWidth: "100%",
              overflowX: "hidden",
            }}
          >
            <Routes>
              {/* Main Landing Route */}
              <Route path="/" element={<HomePage />} />

              {/* Corporate Identity Routes */}
              <Route path="/about" element={<AboutPage />} />
              <Route path="/boardofdirectors" element={<BoardPage />} />
              <Route path="/our-mission" element={<OurMissionPage />} />
              <Route path="/our-vision" element={<OurVisionPage />} />
              <Route path="/our-journey" element={<OurJourneyPage />} />

              {/* Specialization Domain Services Sub-Routes */}
              <Route path="/services/water-supply" element={<WaterPage />} />
              <Route
                path="/services/canal-irrigation"
                element={<CanalPage />}
              />
              <Route path="/services/rcc-construction" element={<RCCPage />} />
              <Route path="/services/water-treatment" element={<WTPPage />} />
              <Route
                path="/services/building-construction"
                element={<BuildingPage />}
              />
              <Route
                path="/services/road-infrastructure"
                element={<CivilPage />}
              />

              {/* Structural Project Delivery Tracks */}
              <Route
                path="/completed-projects"
                element={<CompletedProjectPage />}
              />
              <Route path="/project/:id" element={<ProjectDetailPage />} />
              <Route path="/career" element={<CareerPage />} />
              <Route
                path="/ongoing-projects"
                element={<OnGoingProjectPage />}
              />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>

            {/* Global Sticky Utility Backplane Interface Control Anchor */}
            <ScrollToTopButton />
          </div>
        )}
      </AnimatePresence>
    </Router>
  );
};

export default App;
