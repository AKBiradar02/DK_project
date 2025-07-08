import React from "react";
import ScrollArrow from "../../components/ScrollArrow";

const Hero = () => {
    return (
        <section
            id="home"
            className="relative h-screen w-full bg-cover bg-center flex items-center pt-[45px]
                        sm:pt-[75px] md:pt-[10px]"
            style={{ backgroundImage: "url('/images/Hero.png')" }}
        >
            {/* ✅ Gradient overlay fixed on left */}
            <div className="absolute top-0 left-0 w-[40%] h-full bg-gradient-to-r from-[#5A4D43] to-transparent z-0" />

            {/* ✅ Text content — separate, positioned on top */}
            <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 lg:px-15 max-w-[350px] lg:ml-30 lg:mt-25">
                <h1 className="text-white font-poppins font-semibold text-left text-[40px] xs:text-[44px]
                                        sm:text-[48px] md:text-[56px] lg:text-[40px] leading-tight mb-4">
                    Lets Make your <br className="block sm:hidden" />
                    Interior Better
                </h1>
                <p className="text-white text-[20px] xs:text-[22px] sm:text-[25px] lg:text-[18px] font-roboto mb-6 font-extralight">
                    Expertly crafted interior design solutions in Akola, dedicated to
                    turning houses into dream homes. Experience personalized and modern
                    interiors to suit your goals and dreams!
                </p>
                <button className="w-full max-w-[200px] mx-auto md:mx-0 h-[38px] xs:h-[40px]
            bg-[#CDB7A7] text-[#252926] shadow flex items-center justify-center
            font-poppins font-semibold text-[13px] xs:text-[16px] leading-[19px]
            hover:text-red-600 hover:bg-[#C5AB95] transition-all duration-300 rounded cursor-pointer">
                    KNOW MORE
                </button>
            </div>

            {/* Scroll Arrow */}
            <div className="hidden lg:block absolute bottom-[-51.5px] right-[40px] xl:right-[calc(50%-600px)] 2xl:right-[calc(50%-650px)]">
                <ScrollArrow />
            </div>
        </section>
    );
};

export default Hero;
