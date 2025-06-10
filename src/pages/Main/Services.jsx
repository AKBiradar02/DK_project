import React from "react";
import { Link } from "react-router-dom";
import "../../index.css";
import ScrollArrow from "../../components/ScrollArrow";

const services = [
    {
        title: "Construction",
        image: "/images/Construction.png",
        path: "/construction",
    },
    {
        title: "Interior Designing",
        image: "/images/Inerior_design.png",
        path: "/interior",
    },
    {
        title: "Material",
        image: "/images/Material.png",
        path: "/material",
    },
];

const Services = () => {
    return (
        <section id="services" className="relative bg-transparent py-10 xs:py-12 sm:py-14 md:py-20 px-4 sm:px-6 md:px-8 bg-cover bg-center bg-no-repeat border">
            <div className="max-w-6xl mx-auto text-center relative">
                <h2 className="text-xl sm:text-3xl md:text-4xl font-aoboshi underline font-semibold text-[#303231] leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                    <span className="bg-gradient-to-r from-[#303231] to-[#818F85] text-transparent bg-clip-text underline">
                        OUR SERVICES
                    </span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-16">
                    {services.map((service, idx) => (
                        <Link
                            key={idx}
                            to={service.path}
                            className="overflow-hidden block cursor-pointer"
                        >
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full lg:w-full w-[80%] max-w-[320px] sm:max-w-[380px] md:max-w-[500px] h-36 sm:h-44 md:h-[280px] object-cover shadow-[0px_16px_16px_-8px_rgba(12,12,13,0.1),0px_4px_4px_-4px_rgba(12,12,13,0.05)] rounded-[15px] box-border mx-auto lg:mx-0"
                            />
                            <div className="p-3 sm:p-4">
                                <h3 className="text-base sm:text-lg md:text-lg font-aoboshi text-gray-800">{service.title}</h3>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Scroll Down Arrow - Positioned to overlap into the next section */}
                <div className="hidden lg:block absolute bottom-[-130.5px] right-[40px] xl:right-[calc(50%-600px)] 2xl:right-[calc(50%-650px)] z-20">
                    <ScrollArrow />
                </div>
            </div>
        </section>
    );
};

export default Services;