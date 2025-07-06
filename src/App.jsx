import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./pages/Main/Hero";
import DesignSection from "./pages/Main/DesignSection";
import Services from "./pages/Main/Services";
import AboutUs from "./pages/Main/AboutUs";
import Footer from "./components/Footer";
import InteriorHero from "./pages/Interior/InteriorHero";
import MaterialH from "./pages/Materials/MaterialHero"
import ConstructionHero from "./pages/construction/constructionHero";

function App() {
  return (
    <div className="max-w-screen overflow-x-hidden">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <div className="w-full">
                <Hero />
                <DesignSection />
                <Services />
                <AboutUs />
              </div>
              <Footer />
            </>
          }
        />
        <Route path="/construction" element={<ConstructionHero />} />
        <Route path="/interior" element={<InteriorHero />} />
        <Route path="/material" element={<MaterialH />} />
      </Routes>
    </div>
  );
}

export default App;