import React from "react";
import "../../index.css";

const AboutUs = () => {
    return (
        <section id="about" className="bg-white py-10 xs:py-12 sm:py-14 md:py-20 px-4 sm:px-6 md:px-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Image - vertical rectangle */}
                <div className="flex justify-center">
                    <div className="relative w-fit">
                        <div className="absolute -top-5 -left-5 w-28 sm:w-32 md:w-36 h-28 sm:h-32 md:h-36 border-2 border-[#AF8C53] z-0 rounded-md"></div>
                        <div className="absolute -bottom-5 left-[180px] xs:left-[200px] sm:left-[240px] md:left-[200px] w-28 sm:w-32 md:w-36 h-28 sm:h-32 md:h-36 border-2 border-[#AF8C53] z-0 rounded-md"></div>
                        <img
                            src="/images/About.png"
                            alt="Team member"
                            className="relative z-10 rounded-lg shadow-lg w-[80%] max-w-[320px] sm:max-w-[380px] md:max-w-[400px] h-[400px] xs:h-[450px] sm:h-[500px] object-cover"
                        />
                    </div>
                </div>

                {/* Text */}
                <div className="text-center md:text-left">
                    <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-[Aoboshi One] font-bold mb-4 md:mb-6 text-[#252926]">
                        ABOUT US
                    </h2>
                    <p className="text-gray-700 text-sm xs:text-base md:text-lg leading-relaxed mb-4">
                        Welcome to DK Construction, India's home, where innovation and leadership in the construction and interior industry define us. Our team excels in transforming your life to reflect modern professionalism and a passion for creative spaces. We believe in quality, trust, and a personalized approach to every project, ensuring your vision becomes reality. Our expertise spans construction, interior design, and material solutions, making us your one-stop destination for all your home and workspace needs. Join us as we redefine excellence in the art of exceptional house design with DK.
                    </p>
                    <p className="text-gray-600 text-xs xs:text-sm md:text-base">
                        Whether it's a new build, a renovation, or just ideas — we make it happen with
                        commitment, creativity, and quality.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;