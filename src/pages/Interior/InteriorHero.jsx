import React from 'react';
import WorkInt from '../../components/Work_I';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const InteriorHero = () => {
    return (
        <>
            <Navbar />

            <section>
                <div className="relative w-full h-screen overflow-hidden">
                    {/* Background Image */}
                    <img
                        src="/images/int_hero.png"
                        alt="Modern house under construction"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                    />

                    {/* Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-30"></div>

                    {/* Content Container */}
                    <div className="relative z-10 flex items-end justify-start h-full p-8 md:p-16 text-white">
                        <div className="max-w-3xl">
                            <h1 className="text-5xl md:text-4xl font-poppins font-semibold mb-4">Interior Designing</h1>
                            <p className="text-lg md:text-lg font-roboto  leading-relaxed">
                                Transform your spaces with our expert interior design services. We blend creativity and functionality, 
                                tailoring each design to your unique style and needs. Whether modern, classic, or eclectic, 
                                our designs elevate your living or working environments to new heights of elegance and comfort.
                            </p>
                        </div>
                    </div>

                </div>

                <div>
                    <WorkInt />
                </div>

                <div>
                    <Footer />
                </div>
            </section>
        </>

    );
};

export default InteriorHero;
