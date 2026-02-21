import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ServicePage = ({ title, description, heroImage, heroAlt, WorkComponent }) => {
  const WorkSection = WorkComponent;
  const workSection = React.createElement(WorkComponent);

  return (
    <>
      <Navbar />

      <main>
        <section className="relative w-full h-screen overflow-hidden">
          <img
            src={heroImage}
            alt={heroAlt || `${title} hero image`}
      <section>
        <div className="relative w-full h-screen overflow-hidden">
          <img
            src={heroImage}
            alt={heroAlt}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-30" />

          <div className="relative z-10 flex items-end justify-start h-full p-8 md:p-16 text-white">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-4xl font-poppins font-semibold mb-4">{title}</h1>
              <p className="text-lg md:text-lg font-roboto leading-relaxed">{description}</p>
            </div>
          </div>
        </section>

        {WorkSection ? <WorkSection /> : null}
      </main>

      <Footer />
        </div>

        {workSection}
        <Footer />
      </section>
    </>
  );
};

export default ServicePage;
