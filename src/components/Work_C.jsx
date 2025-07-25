import React, { useState, useRef } from "react";
import Navbar from "./Navbar";

const projectImages = [
  ['/images/project2.png', '/images/project.png', '/images/project1.png'],
  ['/images/int_1.png', '/images/int_main.png', '/images/int_2.png']
];

const SomeOfOurWork = () => {
  const [currentBatch, setCurrentBatch] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);      // 👈 modal open state
  const sectionRef = useRef(null);                            // 👈 scroll-back ref

  const images = projectImages[currentBatch];

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar />

      <section
        ref={sectionRef}
        className="bg-white pt-18 pb-16 px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl font-poppins font-bold text-[#303231] leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-center">
          <span className="bg-gradient-to-r from-[#303231] to-[#818F85] text-transparent bg-clip-text">
            Some of Our Work
          </span>
        </h2>

        {/* 🖼️ Grid of Cards (preview) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-screen-xl mx-auto">
          {images.map((img, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition duration-300 hover:scale-105"
              onClick={openModal}  // 👈 open grid modal (batch)
            >
              <img
                src={img}
                alt={`Work ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>

        {/* Pagination Dots to switch batches */}
        <div className="flex justify-center mt-12 space-x-3">
          {projectImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBatch(index)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${currentBatch === index ? "bg-gray-700 scale-110" : "bg-gray-400"
                }`}
              aria-label={`Go to image batch ${index + 1}`}
            ></button>
          ))}
        </div>
      </section>

      {/* ✅ Modal: Blurred background + grid of *all* images in batch */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={closeModal} // click outside closes
        >
          {/* Dim/blur layer */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm md:backdrop-blur" />

          {/* Modal content wrapper */}
          <div
            className="relative z-10 max-w-7xl w-[90%] max-h-[90vh] overflow-y-auto p-4 sm:p-6 md:p-8 bg-black/40 rounded-xl"
            onClick={(e) => e.stopPropagation()} // prevent close when clicking inside
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              aria-label="Close gallery"
              className="absolute top-4 right-4 text-white text-3xl leading-none px-2"
            >
              &times;
            </button>

            <h3 className="text-center text-white font-poppins font-semibold text-xl sm:text-2xl mb-6">
              Project Gallery
            </h3>

            {/* Modal Grid of images */}
            <div className="
              grid gap-4
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
            ">
              {images.map((img, idx) => (
                <div
                  key={idx}
                  className="overflow-hidden rounded-lg shadow-lg cursor-pointer group"
                >
                  <img
                    src={img}
                    alt={`Gallery image ${idx + 1}`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SomeOfOurWork;
