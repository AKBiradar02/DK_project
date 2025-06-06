import React from "react";

const HeroSection = () => {
    return (
        <section
            className="relative min-h-screen w-full bg-cover bg-center flex flex-col items-center justify-center text-white px-6"
            style={{ backgroundImage: "url('/images/int_hero.png')" }}
        >
            {/* Gradient Overlay */}
            <div className="absolute w-[95%] sm:w-[761px] h-[1500px] left-0
               bg-gradient-r form-[#252926] to-[#FFFFFF00]">
            </div>

            {/* Content Section */}
            <div className="relative z-10  p-6 md:p-20 max-w-lg">
                <h1 className="text-3xl md:text-5xl font-bold">Interior Designing</h1>
                <p className="mt-4 text-lg">
                    Transform your spaces with our expert interior design services. We blend creativity and functionality, tailoring each design to your unique style.
                </p>

            </div>
        </section>
    );
};

export default HeroSection;