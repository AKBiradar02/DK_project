import React from 'react';


// Paths for the project images
const projectImage1 = '/images/mat_1.png';
const projectImage2 = '/images/mat_main.png';
const projectImage3 = '/images/mat_2.png';

const WorkMat = () => {
    return (
       


            <section className="bg-white pt-24 pb-16 px-4 sm:px-6 lg:px-8">
                <h2 className="text-xl text-center sm:text-3xl md:text-4xl font-aoboshi underline font-semibold text-[#303231] leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                    <span className="bg-gradient-to-r from-[#303231] to-[#818F85] text-transparent bg-clip-text underline">
                        Some of Our Work
                    </span>
                </h2>

                <div className="relative flex flex-col md:flex-row justify-center items-center h-auto md:h-96 overflow-visible md:overflow-visible">
                    {/* Images with overlapping effect */}
                    <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                        {/* Left Image */}
                        <div className="relative w-full sm:w-80 md:w-96 h-auto aspect-[4/3] rounded-xl overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 md:-ml-40">
                            <img
                                src={projectImage1}
                                alt="Project Example 1"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Center/Main Image */}
                        <div className="relative z-10 w-full sm:w-96 md:w-[450px] lg:w-[550px] h-auto aspect-[4/3] rounded-xl overflow-hidden md:scale-110">
                            <img
                                src={projectImage2}
                                alt="Project Example 2"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Right Image */}
                        <div className="relative w-full sm:w-80 md:w-96 h-auto aspect-[4/3] rounded-xl overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 md:-mr-40">
                            <img
                                src={projectImage3}
                                alt="Project Example 3"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Pagination dots */}
                <div className="flex justify-center mt-8 space-x-3">
                    <span className="h-2 w-2 rounded-full bg-gray-400"></span>
                    <span className="h-2 w-2 rounded-full bg-gray-700"></span> {/* Active dot */}
                    <span className="h-2 w-2 rounded-full bg-gray-400"></span>
                </div>
            </section>
       
    );
};

export default WorkMat;
