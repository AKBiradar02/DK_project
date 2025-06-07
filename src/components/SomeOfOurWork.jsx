// src/components/SomeOfOurWork.jsx 

import React from 'react';

// Paths for the project images
// Make sure these paths are correct relative to your public folder
const projectImage1 = '/images/project1.jpg'; 
const projectImage2 = '/images/project2.jpg'; 
const projectImage3 = '/images/project3.jpg'; 

const SomeOfOurWork = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Some of our Works</h2>

      <div className="relative flex justify-center items-center h-96 sm:h-[450px] md:h-[550px] overflow-hidden">
        {/* Images with overlapping effect */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-4">
          {/* Left Image */}
          <div className="relative -ml-40 sm:-ml-60 md:-ml-80 lg:-ml-96 w-64 sm:w-80 md:w-96 h-auto aspect-[4/3] rounded-xl shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
            <img
              src={projectImage1}
              alt="Project Example 1"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Center/Main Image */}
          <div className="relative z-10 w-80 sm:w-96 md:w-[450px] lg:w-[550px] h-auto aspect-[4/3] rounded-xl shadow-2xl overflow-hidden transform scale-110">
            <img
              src={projectImage2}
              alt="Project Example 2"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Image */}
          <div className="relative -mr-40 sm:-mr-60 md:-mr-80 lg:-mr-96 w-64 sm:w-80 md:w-96 h-auto aspect-[4/3] rounded-xl shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
            <img
              src={projectImage3}
              alt="Project Example 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Pagination dots (optional, but good for visual indication) */}
      <div className="flex justify-center mt-8 space-x-3">
        <span className="h-2 w-2 rounded-full bg-gray-400"></span>
        <span className="h-2 w-2 rounded-full bg-gray-700"></span> {/* Active dot */}
        <span className="h-2 w-2 rounded-full bg-gray-400"></span>
      </div>
    </section>
  );
};

export default SomeOfOurWork;