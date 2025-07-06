import React from "react";
import "../../index.css";

const AboutUs = () => {
    return (
        <section
            id="about"
            className="relative bg-transparent py-10 xs:py-12
            sm:py-14 md:py-30 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/bg_hero.jpg')" }}
        >
            <div className="absolute inset-0 bg-white bg-opacity-80 z-0"></div>

            <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 grid
                            grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

                <div className="flex justify-center ml-10 md:ml-0">

                    <div className="relative w-fit">
                        <div className="absolute -top-5 -left-5 w-28 sm:w-32 md:w-36
                        h-28 sm:h-32 md:h-36 border-2 border-[#AF8C53] z-0 rounded-md"></div>

                        <div className="absolute -bottom-5 left-[180px] xs:left-[200px]
                        sm:left-[240px] md:left-[200px] w-28 sm:w-32 md:w-36 h-28 sm:h-32
                        md:h-36 border-2 border-[#AF8C53] z-0 rounded-md"></div>

                        <img
                            src="/images/About.png"
                            alt="Team member"
                            className="relative z-10 rounded-lg shadow-lg w-[80%]
                            max-w-[320px] sm:max-w-[380px] md:max-w-[400px] h-[400px]
                            xs:h-[450px] sm:h-[500px] object-cover"
                        />
                    </div>
                </div>

                <div className="text-center md:text-left">
                    <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-3xl
                                text-center text-[#303231] mb-4 md:mb-6
                                bg-gradient-to-r from-[#303231] to-[#818F85] text-transparent bg-clip-text underline">
                        ABOUT US
                    </h2>
                    <p className="text-gray-700 text-sm xs:text-base font-roboto font-semibold
                                    md:text-base leading-relaxed mb-4">
                        Welcome to our interior design haven, where creativity meets functionality.
                        At DK Construction, we believe in transforming spaces to reflect your unique
                        style and personality. Our team of passionate designers and skilled
                        craftsmen work meticulously to bring your vision to life,
                        ensuring every detail is perfect. With a keen eye for aesthetics
                        and a commitment to quality, we create environments that are not
                        only beautiful but also practical and comfortable.

                    </p>
                    <p className="text-gray-600 font-sans text-xs xs:text-sm md:text-base">
                        Whether it's a cozy home or a chic office,
                        we tailor our designs to elevate your everyday living.
                        Experience the art of exceptional interior design with us.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
