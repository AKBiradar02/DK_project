import React, { useState, useEffect } from "react";
import ScrollArrow from "../../components/ScrollArrow";

// Images for slideshow
const slides = [
    "/images/Hero.png",
    "/images/int_main.png",
    "/images/project.png"
];

// Corresponding captions
const captions = [
    {
        title: "Let’s Make your\nInterior Better",
        description:
            "Expertly crafted interior design solutions in Akola, dedicated to turning houses into dream homes. Experience personalized and modern interiors to suit your goals and dreams!"
    },
    {
        title: "Modern Designs\nwith Purpose",
        description:
            "From cozy corners to luxurious layouts, our experts bring life to your vision. We focus on functionality, elegance, and comfort in every detail."
    },
    {
        title: "Transforming Spaces\nwith Elegance",
        description:
            "Your space reflects your identity. Let’s turn your ideas into artfully designed rooms that inspire, energize, and comfort."
    }
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="home"
            className="relative h-screen w-full bg-cover bg-center flex items-center pt-[45px] sm:pt-[75px] md:pt-[10px] transition-all duration-1000 ease-in-out"
            style={{ backgroundImage: `url('${slides[currentSlide]}')` }}
        >
            {/* Gradient Overlay */}
            <div className="absolute top-0 left-0 w-[40%] h-full bg-gradient-to-r from-[#5A4D43] to-transparent z-0" />

            {/* Text Content */}
            <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 lg:px-16 max-w-[350px] lg:ml-28">
                <h1 className="text-white font-poppins font-semibold text-left whitespace-pre-line text-[40px] xs:text-[44px] sm:text-[48px] md:text-[56px] lg:text-[40px] leading-tight mb-4">
                    {captions[currentSlide].title}
                </h1>
                <p className="text-white text-[20px] xs:text-[22px] sm:text-[25px] lg:text-[18px] font-roboto mb-6 font-extralight">
                    {captions[currentSlide].description}
                </p>
            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-3 w-3 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-white scale-110" : "bg-white/40"
                            }`}
                    ></button>
                ))}
            </div>

            {/* Scroll Arrow */}
            <div className="hidden lg:block absolute bottom-[-51.5px] right-[40px] xl:right-[calc(50%-600px)] 2xl:right-[calc(50%-650px)]">
                <ScrollArrow />
            </div>
        </section>
    );
};

export default Hero;
