import React from "react";
import ScrollArrow from "../../components/ScrollArrow";

const DesignSection = () => {
    return (
        <section
            id="projects"
            className="relative bg-transparent py-10 xs:py-12 sm:py-14 md:py-20 px-4 sm:px-6 md:px-8 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/bg_hero.png')" }}
        >
            <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-20 items-center">
                {/* LEFT side images only visible on large screen */}
                <div className="hidden lg:flex flex-col items-start justify-start w-1/2 gap-6 md:gap-8 lg:gap-10 pt-4">
                    {/* DH1 Image */}
                    <div className="relative w-fit -ml-16">
                        <div className="absolute -top-5 -left-5 w-28 sm:w-32 md:w-36 lg:w-40 h-28 sm:h-32 md:h-36 lg:h-40 border-2 border-[#AF8C53] z-0 rounded-md"></div>
                        <img
                            src="/images/DH1.png"
                            alt="Dream House"
                            className="relative z-10 shadow-lg w-[240px] xs:w-[280px] sm:w-[340px] md:w-[380px] lg:w-[420px] h-auto rounded-lg transition-transform duration-300 hover:scale-105"
                            loading="lazy"
                        />
                    </div>

                    {/* DH2 Image */}
                    <div className="relative w-fit ml-8 sm:ml-10 md:ml-12 lg:ml-16">
                        <div className="absolute -top-5 left-[180px] xs:left-[200px] sm:left-[240px] md:left-[260px] lg:left-[300px] w-28 sm:w-32 md:w-36 lg:w-40 h-28 sm:h-32 md:h-36 lg:h-40 border-2 border-[#AF8C53] z-0 rounded-md"></div>
                        <div className="absolute -bottom-5 -left-5 w-28 sm:w-32 md:w-36 lg:w-40 h-28 sm:h-32 md:h-36 lg:h-40 border-2 border-[#AF8C53] z-0 rounded-md"></div>
                        <img
                            src="/images/DH2.png"
                            alt="Interior Design"
                            className="relative z-10 shadow-lg w-[240px] xs:w-[280px] sm:w-[340px] md:w-[380px] lg:w-[420px] h-auto rounded-lg transition-transform duration-300 hover:scale-105"
                            loading="lazy"
                        />
                    </div>
                </div>

                {/* RIGHT side (always visible) */}
                <div className="w-full lg:w-1/2 flex flex-col items-center pt-6 sm:pt-8 md:pt-12 lg:pt-1">
                    {/* h2 */}
                    <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-aoboshi underline font-semibold text-[#303231] leading-tight mb-4 sm:mb-6 md:mb-8">
                        <span className="bg-gradient-to-r from-[#303231] to-[#818F85] text-transparent bg-clip-text underline">
                            THE DREAM HOUSE DESIGN
                        </span>
                    </h2>

                    {/* Mobile-only DH1 */}
                    <div className="relative w-fit my-4 lg:hidden">
                        <div className="absolute -top-5 -left-5 w-28 sm:w-32 md:w-36 h-28 sm:h-32 md:h-36 border-2 border-[#AF8C53] z-0 rounded-md"></div>
                        <img
                            src="/images/DH1.png"
                            alt="Dream House"
                            className="relative z-10 shadow-lg w-[240px] xs:w-[280px] sm:w-[340px] md:w-[380px] h-auto rounded-lg transition-transform duration-300 hover:scale-105"
                            loading="lazy"
                        />
                    </div>

                    {/* Paragraph */}
                    <p className="text-[#303231] font-kameron text-sm xs:text-base sm:text-lg md:text-xl text-center lg:text-justify leading-relaxed mb-6 sm:mb-8 md:mb-10 w-full max-w-[95%] sm:max-w-[90%] md:max-w-[85%]">
                        Adding the DK Construction touch to your house brings usefulness and aesthetic appeal together.
                        We use cutting-edge technology to give your house a faultless appearance that will last for a very long period.
                    </p>

                    {/* Mobile-only DH2 */}
                    <div className="relative w-fit my-4 lg:hidden">
                        <div className="absolute -top-5 -left-5 w-28 sm:w-32 md:w-36 h-28 sm:h-32 md:h-36 border-2 border-[#AF8C53] z-0 rounded-md"></div>
                        <img
                            src="/images/DH2.png"
                            alt="Interior Design"
                            className="relative z-10 shadow-lg w-[240px] xs:w-[280px] sm:w-[340px] md:w-[380px] h-auto rounded-lg transition-transform duration-300 hover:scale-105"
                            loading="lazy"
                        />
                    </div>

                    {/* Button */}
                    <button className="bg-gradient-to-r from-[#303231] to-[#818F85] font-julius text-white px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 shadow-lg text-sm xs:text-base sm:text-lg md:text-xl rounded hover:opacity-90 transition duration-300">
                        BOOK FREE CONSULTATION
                    </button>
                </div>
            </div>

            {/* Scroll Arrow - Added to the left side */}
            <div className="hidden lg:block absolute bottom-[-50.5px] left-[40px] xl:left-[calc(50%-600px)] 2xl:left-[calc(50%-650px)] z-20">
                <ScrollArrow />
            </div>
        </section>
    );
};

export default DesignSection;