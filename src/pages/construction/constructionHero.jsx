
import React from 'react';
import SomeOfOurWork from '../../components/SomeOfOurWork'; // <--- Import the SomeOfOurWork component

// Path for the main hero image
const heroImage = '/images/constructionHero.jpg'; 

const ConstructionHero = () => {
  return (
    <div className="relative w-full"> {/* Removed fixed height here */}
      {/* 1. Main Hero Section (Image, Gradient, Text) */}
      <div className="relative w-full h-[600px] overflow-hidden">
        {/* Background Image */}
        <img
          src={heroImage}
          alt="Modern house under construction"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-30"></div>

        {/* Content Container (Text) */}
        <div className="relative z-10 flex items-end justify-start h-full p-8 md:p-16 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Construction</h1>
            <p className="text-lg md:text-xl leading-relaxed">
              Our construction services deliver exceptional quality and precision, ensuring your vision comes to life
              seamlessly. From foundational work to finishing touches, we handle every aspect with professionalism
              and care, creating sturdy, beautiful spaces that stand the test of time.
            </p>
          </div>
        </div>
      </div>

      {/* 2. "Some of our Works" Section - Rendered directly below the hero part */}
      <SomeOfOurWork /> 
    </div>
  );
};

export default ConstructionHero;