import React from "react";
import '../index.css';
import ScrollArrow from "./Static/ScrollArrow";


const services = [
    {
        title: "Construction",
        image: "/images/Construction.png",
        path: "/services/construction",
    },
    {
        title: "Interior Designing",
        image: "/images/Inerior_design.png",
        path: "/services/interior-designing",
    },
    {
        title: "Material",
        image: "/images/Material.png",
        path: "/services/material",
    },
];

const Services = () => {
    return (
        <section id="services" className="py-6 sm:py-8 md:py-12 lg:py-16 px-3
        overflow-hidden sm:px-4 md:px-6 bg-white">

            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-[Aoboshi One] underline
                            font-bold mb-4 xs:mb-6 md:mb-10 shadow-[0px_8px_12px_rgba(0, 0, 0, 0.15)]
                            sm:shadow-[0px_8px_12px_rgba(0, 0, 0, 0.15)]
                            bg-gradient-to-r from-gray-600 to-gray-200 bg-clip-text text-transparent
                            ">
                    OUR SERVICES
                </h2>
                <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 xs:gap-6 md:gap-8">
                    {services.map((service, idx) => (
                        <a
                            key={idx}
                            href={service.path}
                            className="  overflow-hidden block cursor-pointer"
                        >
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-36 xs:h-44 md:h-70 object-cover
                                            shadow-[0px_16px_16px_-8px_rgba(12,12,13,0.1),
                                            0px_4px_4px_-4px_rgba(12,12,13,0.05)]
                                            rounded-[15px] box-border"
                            />
                            <div className="p-3 xs:p-4">
                                <h3 className="text-base xs:text-lg md:text-xl font-semibold font-[Aoboshi One] text-gray-800">{service.title}</h3>
                            </div>
                        </a>
                    ))}
                </div>
                {/* Scroll Down Arrow */}
                <div className="absolute bottom-8 left-320 top-530 transform -translate-x-1/2">
                    <ScrollArrow />
                </div>
            </div>
        </section>
    );
};

export default Services;