import React from "react";
import ScrollArrow from "./Static/ScrollArrow";



const DesignSection = () => {
    return (
        <section
            id="projects"
            className="py-8 sm:py-10 md:py-14 lg:py-20 px-3 sm:px-4 md:px-6 bg-white overflow-hidden"
        >
            <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-20">
                {/* LEFT side images only visible on large screen */}
                <div className="hidden lg:flex flex-col items-center justify-start w-1/2 gap-8 pt-4">
                    {/* DH1 Image */}
                    <div className="relative w-fit">
                        <div className="absolute -top-5 -left-5 w-32 h-32 border-2 border-[#AF8C53] z-0 rounded-md"></div>
                        <img
                            src="/images/DH1.png"
                            alt="Dream House"
                            className="relative z-10 shadow-lg w-[400px] h-auto rounded-lg transition-transform duration-300 hover:scale-105"
                            loading="lazy"
                        />
                    </div>

                    {/* DH2 Image */}
                    <div className="relative w-fit">
                        <div className="absolute -top-5 -left-5 w-32 h-32 border-2 border-[#AF8C53] z-0 rounded-md"></div>
                        <img
                            src="/images/DH2.png"
                            alt="Interior Design"
                            className="relative z-10 shadow-lg w-[400px] h-auto rounded-lg transition-transform duration-300 hover:scale-105"
                            loading="lazy"
                        />
                    </div>
                </div>

                {/* RIGHT side (always visible) */}
                <div className="w-full lg:w-1/2 flex flex-col items-start">
                    {/* h2 */}
                    <h2 className="text-xl sm:text-3xl md:text-4xl font-semibold text-[#303231] leading-tight mb-4">
                        <span className="bg-gradient-to-r from-[#303231] to-[#818F85] text-transparent bg-clip-text shadow-md">
                            THE DREAM HOUSE DESIGN
                        </span>
                    </h2>

                    {/* Mobile-only DH1 */}
                    <div className="relative w-fit mx-auto my-4 lg:hidden">
                        <div className="absolute -top-5 -left-5 w-28 sm:w-32 h-28 sm:h-32 border-2 border-[#AF8C53] z-0 rounded-md"></div>
                        <img
                            src="/images/DH1.png"
                            alt="Dream House"
                            className="relative z-10 shadow-lg w-[260px] xs:w-[300px] sm:w-[360px] md:w-[400px] h-auto rounded-lg transition-transform duration-300 hover:scale-105"
                            loading="lazy"
                        />
                    </div>

                    {/* Paragraph */}
                    <p className="text-[#303231] font-kameron text-sm sm:text-base leading-relaxed mb-6">
                        Adding the DK Construction touch to your house brings usefulness and aesthetic appeal together.
                        We use cutting-edge technology to give your house a faultless appearance that will last for a very long period.
                    </p>

                    {/* Mobile-only DH2 */}
                    <div className="relative w-fit mx-auto my-4 lg:hidden">
                        <div className="absolute -top-5 -left-5 w-28 sm:w-32 h-28 sm:h-32 border-2 border-[#AF8C53] z-0 rounded-md"></div>
                        <img
                            src="/images/DH2.png"
                            alt="Interior Design"
                            className="relative z-10 shadow-lg w-[260px] xs:w-[300px] sm:w-[360px] md:w-[400px] h-auto rounded-lg transition-transform duration-300 hover:scale-105"
                            loading="lazy"
                        />
                    </div>

                    {/* Button */}
                    <button className="bg-gradient-to-r from-[#303231] to-[#818F85] text-white px-4 sm:px-6 py-2 sm:py-2.5 shadow-lg text-sm sm:text-base rounded hover:opacity-90 transition duration-300">
                        BOOK FREE CONSULTATION
                    </button>
                </div>
            </div>

            {/* Scroll Arrow */}
            <div className="flex justify-center mt-6">
                <ScrollArrow />
            </div>
        </section>
    );
};

export default DesignSection;
