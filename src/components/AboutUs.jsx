import React from "react";
import '../index.css'

const AboutUs = () => {
    return (
        <section id="about" className="bg-white py-16 xs:py-10 sm:py-12 md:py-50 px-2 xs:px-4 md:px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 xs:gap-8 md:gap-12 items-center">
                {/* Image */}
                <div>
                    <img
                        src="/images/About.png"
                        alt="Team member"
                        className="rounded-lg shadow-lg w-full object-cover max-h-[220px] xs:max-h-[300px] md:max-h-[400px]"
                    />
                </div>

                {/* Text */}
                <div>
                    <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-[Aoboshi One] font-bold mb-2 xs:mb-4 md:mb-6">ABOUT US</h2>
                    <p className="text-gray-700 text-sm xs:text-base md:text-lg leading-relaxed mb-2 xs:mb-4">
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
