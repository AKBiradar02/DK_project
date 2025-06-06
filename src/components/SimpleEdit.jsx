import React from "react";
import ScrollArrow from "./Static/ScrollArrow";

const DesignSection = () => {
    return (
        <section className="py-8 sm:py-12 md:py-16 px-4 md:px-6 bg-white"
                id="projects"
        >
            <div className="max-w-6xl mx-auto">
                {/* Main Content Container */}
                <div className="flex flex-col lg:flex-row items-center lg:gap-12 mb-12">
                    {/* Left Side - Images */}
                    <div className="flex-1 relative flex flex-col items-center lg:items-start gap-8 lg:gap-6">
                        {/* First Image */}
                        <div className="relative w-fit mx-auto lg:mx-0">
                            {/* Background rectangle */}
                            <div className="absolute -top-7 -left-9 w-40 h-36 border-2 border-[#AF8C53] z-0 hidden sm:block"></div>

                            {/* Foreground image */}
                            <img
                                src="./images/DH1.png"
                                alt="Dream House"
                                className="relative z-10 shadow-lg w-full max-w-[400px] md:max-w-[500px] h-auto rounded-md lg:rounded-lg transition-transform duration-300 hover:scale-105"
                                loading="lazy"
                            />
                        </div>

                        {/* Second Image - Positioned with overlap */}
                        <div className="absolute top-70 left-100 w-40 h-35 border-2 border-[#AF8C53] z-0 hidden md:block"></div>
                        <div className="lg:ml-16">
                            <img
                                src="/images/DH2.png"
                                alt="Interior Design"
                                className="w-full max-w-[400px] md:max-w-[500px] h-auto shadow-lg rounded-md z-10 relative transition-transform duration-300 hover:scale-105"
                                loading="lazy"
                            />
                        </div>
                        <div className="absolute top-126 left-8 w-40 h-35 border-2 border-[#AF8C53] z-0 hidden md:block"></div>
                    </div>

                    {/* Right Side - Text Content */}
                    <div className="w-full md:w-1/2 px-4 md:pl-10 lg:pl-20  text-left mt-6 md:mt-0">
                        <h2 className="text-xl sm:text-3xl md:text-4xl font-semibold font-aoboshi text-[#303231] leading-tight mb-4">
                            <span className="bg-gradient-to-r from-[#303231] to-[#818F85] text-transparent bg-clip-text shadow-md">
                                THE DREAM HOUSE DESIGN
                            </span>
                        </h2>

                        <p className="text-[#303231] font-kameron text-sm sm:text-base leading-relaxed mb-6">
                            Adding the DK Construction touch to your house brings usefulness and aesthetic appeal together.
                            We use cutting-edge technology to give your house a faultless appearance that will last for a very long period.
                        </p>

                        <button className="bg-gradient-to-r from-[#303231] to-[#818F85] absolute left-265 overflow-hidden text-white px-4 sm:px-6 py-2 sm:py-2.5 shadow-lg text-sm sm:text-base">
                            BOOK FREE CONSULTATION
                        </button>
                    </div>
                </div>

                {/* Scroll Down Arrow */}
                <div>
                    <ScrollArrow />
                </div>
            </div>
        </section>
    );
};

export default DesignSection;
