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
        <section id="services" className="relative bg-transparent py-10 xs:py-12 sm:py-14
                                            md:py-30 bg-cover bg-center bg-no-repeat">

            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 text-center relative">

                <h2 className="text-xl sm:text-3xl md:text-3xl font-poppins font-semibold
                                text-[#303231] leading-tight mb-10">
                    <span className="bg-gradient-to-r from-[#303231] to-[#818F85]
                                    text-transparent bg-clip-text">
                        OUR SERVICES
                    </span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-16">
                    {services.map((service, idx) => (
                        <Link key={idx} to={service.path} className="block cursor-pointer">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full max-w-[360px] h-[260px] object-cover shadow-lg rounded-[15px] mx-auto"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-poppins font-semibold text-gray-800">{service.title}</h3>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="hidden lg:block absolute bottom-[-200.5px] right-[40px] xl:right-[calc(50%-600px)] 2xl:right-[calc(50%-650px)] z-20">
                    <ScrollArrow />
                </div>
            </div>
        </section>
    );
};

export default Services;
