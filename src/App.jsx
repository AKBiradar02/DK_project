import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./pages/Main/Hero";
import DesignSection from "./pages/Main/DesignSection";
import Services from "./pages/Main/Services";
import AboutUs from "./pages/Main/AboutUs";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import ServicePage from "./pages/ServicePage";
import NotFound from "./pages/NotFound";
import { servicePages } from "./data/servicePages";

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

        {Object.entries(servicePages).map(([path, page]) => (
          <Route
            key={path}
            path={`/${path}`}
            element={<ServicePage {...page} />}
          />
        ))}

        <Route path="*" element={<NotFound />} />
      </Routes>

      <ContactForm />
    </div>
  );
}

export default App;
