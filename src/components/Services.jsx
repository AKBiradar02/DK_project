import React from "react";
import ScrollArrow from "./Static/ScrollArrow";

const services = [
    {
        title: "Construction",
        image: "/images/Construction.png",
    },
    {
        title: "Interior Designing",
        image: "/images/Inerior_design.png",
    },
    {
        title: "Material",
        image: "/images/Material.png",
    },
];

const Services = () => {
    return (
        <section id="services" className="bg-gray-50 py-8 xs:py-10 sm:py-12 md:py-20 px-2 xs:px-4 md:px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-4 xs:mb-6 md:mb-10">OUR SERVICES</h2>
                <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 xs:gap-6 md:gap-8">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden"
                        >
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-36 xs:h-44 md:h-56 object-cover"
                            />
                            <div className="p-3 xs:p-4">
                                <h3 className="text-base xs:text-lg md:text-xl font-semibold text-gray-800">{service.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Scroll Down Arrow */}
                
            </div>
        </section>
    );
};

export default Services;
