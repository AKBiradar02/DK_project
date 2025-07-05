import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

// Paths for the interior image batches
const projectBatches = [
  ['/images/int_1.png', '/images/int_main.png', '/images/int_2.png'],
  ['/images/int_3.png', '/images/int_main2.png', '/images/int_4.png']
];

const WorkInt = () => {
  const [currentBatch, setCurrentBatch] = useState(0);
  const [centerIndex, setCenterIndex] = useState(1); // middle image
  const [animate, setAnimate] = useState(false);

  const currentImages = projectBatches[currentBatch];

  const reordered = [
    currentImages[(centerIndex + 2) % 3], // left
    currentImages[centerIndex],          // center
    currentImages[(centerIndex + 1) % 3] // right
  ];

  useEffect(() => {
    setAnimate(true);
    const timeout = setTimeout(() => setAnimate(false), 300);
    return () => clearTimeout(timeout);
  }, [centerIndex, currentBatch]);

  const handleRecenter = (indexInView) => {
    if (indexInView === 0) setCenterIndex((centerIndex + 2) % 3); // left → center
    if (indexInView === 2) setCenterIndex((centerIndex + 1) % 3); // right → center
  };

  const handleBatchChange = (index) => {
    if (index === currentBatch) return;
    setCurrentBatch(index);
    setCenterIndex(1); // reset to center
  };

  return (
    <>
      <Navbar />

      <section className="bg-white pt-12 pb-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl text-center sm:text-3xl md:text-3xl font-poppins font-semibold text-[#303231] leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <span className="bg-gradient-to-r from-[#303231] to-[#818F85] text-transparent bg-clip-text underline">
            Some of Our Work
          </span>
        </h2>

        {/* Image layout */}
        <div className="relative flex flex-col md:flex-row justify-center pt-10 px-4 sm:px-6 lg:px-8 items-center h-auto md:h-96 overflow-visible md:overflow-visible">
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
            {reordered.map((img, i) => (
              <div
                key={i}
                onClick={() => handleRecenter(i)}
                className={`relative cursor-pointer w-full sm:w-80 md:w-96 h-auto aspect-[4/3] rounded-xl overflow-hidden 
                transition-all duration-500 ease-in-out
                ${i === 0
                    ? 'hover:scale-105 md:-ml-40 z-0'
                    : i === 1
                      ? 'md:scale-110 z-10 sm:w-96 md:w-[450px] lg:w-[550px]'
                      : 'hover:scale-105 md:-mr-40 z-0'
                  }
                ${animate ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
              >
                <img
                  src={img}
                  alt={`Project ${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-12 space-x-3">
          {projectBatches.map((_, index) => (
            <button
              key={index}
              onClick={() => handleBatchChange(index)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${currentBatch === index ? 'bg-gray-700 scale-110' : 'bg-gray-400'
                }`}
              aria-label={`Go to batch ${index + 1}`}
            ></button>
          ))}
        </div>
      </section>
    </>
  );
};

export default WorkInt;
