/* Hero.jsx */
import React from "react";
import ScrollArrow from "../../components/ScrollArrow";

const Hero = () => {
    return (
        <section
            id="home"
            className="relative h-screen sm:min-h-[70vh] md:min-h-screen w-full bg-cover bg-center flex flex-col md:flex-row items-center md:items-stretch pt-[65px] sm:pt-[75px]"
            style={{ backgroundImage: "url('/images/Hero.png')" }}
        >
            {/* Gradient background with 35% width on desktop */}
            <div className="w-full md:w-[35%] bg-gradient-to-r from-[#5A4D43] to-transparent flex flex-col justify-center px-4 sm:px-6 md:pl-[100px] py-8 md:py-0 z-10 min-h-[calc(100vh-65px)] sm:min-h-[calc(70vh-75px)] md:min-h-[calc(100vh-75px)]">
                <div className="text-white font-hammersmith text-center 
                md:text-left">
                    <h1 className="text-[22px] xs:text-[28px] sm:text-[32px] md:text-[56px] lg:text-[60px] leading-tight mb-4">
                        Lets Make <br className="hidden xs:block" />
                        your Interior <br className="hidden xs:block" />
                        Better
                    </h1>
                    <p className="text-[13px] xs:text-[15px] sm:text-[18px] font-kameron mb-6 pr-0 md:pr-4">
                        Expertly crafted interior design solutions in Akola, dedicated to
                        turning houses into dream homes. Experience personalized and modern
                        interiors to suit your goals and dreams!
                    </p>
                    <button className="w-full max-w-[200px] mx-auto md:mx-0 h-[38px] xs:h-[40px] bg-[#CDB7A7] text-[#252926] shadow flex items-center justify-center font-semibold text-[13px] xs:text-[16px] leading-[19px] hover:text-red-600 hover:bg-[#C5AB95] transition-all duration-300 rounded cursor-pointer">
                        KNOW MORE
                    </button>
                </div>
            </div>

            {/* Scroll Arrow - Positioned to overlap into DesignSection */}
            <div className="hidden lg:block absolute bottom-[-51.5px] right-[40px] xl:right-[calc(50%-600px)] 2xl:right-[calc(50%-650px)]">
                <ScrollArrow />
            </div>
        </section>
    );
};

export default Hero;