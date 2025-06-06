import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DesignSection from "./components/DesignSection";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Hero />
        <DesignSection />
        <Services />
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
