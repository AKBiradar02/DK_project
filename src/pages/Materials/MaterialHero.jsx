import React from 'react';
import WorkMat from '../../components/Work_M';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const MaterialH = () => {
    return (
        <>
            <Navbar />

            <section>
                <div className="relative w-full h-screen overflow-hidden">
                    {/* Background Image */}
                    <img
                        src="/images/mat_hero.png"
                        alt="Modern house under construction"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                    />

                    {/* Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-30"></div>

                    {/* Content Container */}
                    <div className="relative z-10 flex items-end justify-start h-full p-8 md:p-16 text-white">
                        <div className="max-w-3xl">
                            <h1 className="text-5xl md:text-6xl font-aoboshi mb-4">Materials</h1>
                            <p className="text-lg md:text-xl font-kameron leading-relaxed">
                                Our selection of premium materials guarantees durability and aesthetic appeal.
                                We source the finest products, ensuring each element of your space is crafted with excellence.
                                From flooring to fixtures, our materials enhance the overall beauty and longevity of your interiors.
                            </p>
                        </div>
                    </div>

                </div>

                <div>
                    <WorkMat />
                </div>

                <div>
                    <Footer />
                </div>
            </section>
        </>

    );
};

export default MaterialH;
