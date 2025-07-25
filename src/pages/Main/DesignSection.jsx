import React from "react";
import ScrollArrow from "../../components/ScrollArrow";

const DesignSection = () => {
    return (
        <section
            id="projects"
            className="relative bg-transparent py-10 xs:py-12 sm:py-14
                        md:py-20 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/bg_hero.png')" }}
        >
            <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8
            flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-20 items-center">

                {/* LEFT images */}
                <div className="hidden lg:flex flex-col items-start w-1/2 gap-8 pt-4">
                    <div className="relative w-fit -ml-5">
                        <div className="absolute -top-5 -left-5 w-32 h-32 border-2 border-[#AF8C53] z-0 rounded-md"></div>
                        <img
                            src="/images/DH1.png"
                            alt="Dream House"
                            className="relative z-10 shadow-lg w-[420px] rounded-lg transition-transform duration-300 hover:scale-105"
                        />
                    </div>

                    <div className="relative w-fit ml-35">
                        <div className="absolute -top-5 left-[320px] w-32 h-32 border-2 border-[#AF8C53] z-0 rounded-md"></div>
                        <div className="absolute -bottom-5 -left-5 w-32 h-32 border-2 border-[#AF8C53] z-0 rounded-md"></div>
                        <img
                            src="/images/DH2.png"
                            alt="Interior Design"
                            className="relative z-10 shadow-lg w-[420px] rounded-lg transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                </div>

                {/* RIGHT text */}
                <div className="w-full lg:w-1/2 flex flex-col items-center pt-6 sm:pt-8 md:pt-12 lg:pt-1">
                    <h2 className="text-lg xs:text-xl sm:text-3xl md:text-3xl lg:text-3xl
                                font-poppins font-semibold text-[#303231] leading-tight mb-6">

                        <span className="bg-gradient-to-r from-[#303231] to-[#818F85]
                                        text-transparent bg-clip-text">
                            THE DREAM HOUSE DESIGN
                        </span>
                    </h2>

                    {/* Mobile images */}
                    <div className="relative w-fit my-4 lg:hidden">
                        <div className="absolute -top-5 -left-2 w-32 h-32 border-2 border-[#AF8C53] z-0 rounded-md"></div>
                        <img
                            src="/images/DH1.png"
                            alt="Dream House"
                            className="relative z-10 shadow-lg w-[340px] rounded-lg transition-transform duration-300 hover:scale-105"
                        />
                    </div>

                    <p className="text-[#303231] font-roboto text-gray-900 text-base sm:text-lg
                                    md:text-lg text-center lg:text-justify leading-relaxed mb-8 max-w-[90%]">
                        Adding the DK Construction touch to your house brings usefulness and aesthetic appeal together.
                        We use cutting-edge technology to give your house a faultless appearance that will last for a very long period.
                    </p>

                    <div className="relative w-fit my-4 lg:hidden">
                        <div className="absolute -top-5 -left-2 w-32 h-32 border-2 border-[#AF8C53] z-0 rounded-md"></div>
                        <img
                            src="/images/DH2.png"
                            alt="Interior Design"
                            className="relative z-10 shadow-lg w-[340px] rounded-lg transition-transform duration-300 hover:scale-105"
                        />
                    </div>

                    <button className="bg-gradient-to-r from-[#303231] to-[#818F85] font-poppins font-semibold
                                    text-white px-6 py-2.5 shadow-lg text-lg md:text-lg
                                    rounded hover:opacity-90 transition duration-300">
                        BOOK CONSULTATION
                    </button>
                </div>
            </div>

            <div className="hidden lg:block absolute bottom-[-50.5px] left-[40px] xl:left-[calc(50%-600px)]
                                2xl:left-[calc(50%-650px)] z-20">
                <ScrollArrow />
            </div>
        </section>
    );
};

export default DesignSection;
