import React from "react";
import ScrollArrow from "./Static/ScrollArrow";

const DesignSection = () => {
    return (
        <section className="py-8 xs:py-10 sm:py-12 md:py-90 px-2 xs:px-4 overflow-hidden md:px-6 bg-white" id="projects">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="absolute w-[585px] h-[49px] left-[781px] top-[973px] font-aoboshi 
                                text-[40px] leading-[30px] bg-gradient-to-r from-[#303231] 
                                to-[#818F85] text-transparent bg-clip-text shadow-xl">
                    THE DREAM HOUSE DESIGN
                </h2>
                <p className="absolute w-[525px] h-[178px] left-[826px] 
                            top-[1056px] font-kameron text-base font-normal leading-[30px] text-justify text-[#303231]">
                    At DK Construction, we turn your dream ideas into reality. Our custom house and interior
                    designs are focused on excellence, elegance, and personalized lifestyle experiences.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-6 md:gap-8 mb-6 xs:mb-8 md:mb-12">
                    <img
                        src="/images/DH1.png"
                        alt="House Design"
                        className="box-border absolute w-[493px] h-[261px]
                                left-[87px] top-[825px] bg-[url('R2.2.jpg')] border-2 border-[#AF8C53] shadow-md"
                    />







                    <img
                        src="/images/DH2.png"
                        alt="Interior Design"
                        className="box-border absolute  w-[527px] h-[354px] left-[202px] 
                        top-[1137px] ] 
                        border-2 border-[#AF8C53] shadow-md"
                    />
                </div>

                <button className="absolute w-[270px] h-[33px] left-[1081px] 
                top-[1201px] bg-gradient-to-r from-[#303231] to-[#818F85] shadow-xl
                ">
                    PORTFOLIO & COLLECTION
                </button>


                {/* Scroll Down Arrow */}
                <div>
                    <ScrollArrow />
                </div>
            </div>

            <div className="absolute box-border w-180 h-156 ">

            </div>

        </section>
    );
};

export default DesignSection;
