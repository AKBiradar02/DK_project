import React from "react";
import { Link } from "react-router-dom";
import "../../index.css";
import ScrollArrow from "../../components/ScrollArrow";

const services = [
    {
        title: "Construction",
        image: "/images/Construction.png",
        path: "/construction", // ✅ updated
    },
    {
        title: "Interior Designing",
        image: "/images/Inerior_design.png",
        path: "/interior", // ✅ updated
    },
    {
        title: "Material",
        image: "/images/Material.png",
        path: "/material", // ✅ updated
    },
];

const Services = () => {
    return (
        <section id="services" className="py-6 sm:py-8 md:py-12 lg:py-16 px-3 overflow-hidden sm:px-4 md:px-6 bg-white">
            <div className="max-w-6xl mx-auto text-center relative">
                <h2 className="text-xl sm:text-3xl md:text-4xl font-aoboshi underline font-semibold text-[#303231] leading-tight mb-4">
                    <span className="bg-gradient-to-r from-[#303231] to-[#818F85] text-transparent bg-clip-text underline">
                        OUR SERVICES
                    </span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-12">
                    {services.map((service, idx) => (
                        <Link
                            key={idx}
                            to={service.path}
                            className="overflow-hidden block cursor-pointer"
                        >
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full lg:w-full w-[80%] max-w-[320px] sm:max-w-[380px] md:max-w-[400px] h-36 sm:h-44 md:h-[280px] object-cover shadow-[0px_16px_16px_-8px_rgba(12,12,13,0.1),0px_4px_4px_-4px_rgba(12,12,13,0.05)] rounded-[15px] box-border mx-auto lg:mx-0"
                            />
                            <div className="p-3 sm:p-4">
                                <h3 className="text-base sm:text-lg md:text-xl font-semibold font-[Aoboshi One] text-gray-800">{service.title}</h3>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Scroll Down Arrow - Visible only on laptop/PC (lg and up) */}
                <div className="hidden lg:block absolute -bottom-30 left-1/2 md:left-[89%] transform translate-x-1/2">
                    <ScrollArrow />
                </div>
            </div>
        </section>
    );
};

export default Services;