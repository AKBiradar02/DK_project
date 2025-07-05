import React, { useState, useEffect } from 'react';

// Project image batches for material work
const projectBatches = [
    ['/images/mat_1.png', '/images/mat_main.png', '/images/mat_2.png'],
    ['/images/mat_4.png', '/images/mat_main2.png', '/images/mat_5.png']
];

const WorkMat = () => {
    const [currentBatch, setCurrentBatch] = useState(0);
    const [centerIndex, setCenterIndex] = useState(1);
    const [animate, setAnimate] = useState(false);

    const currentImages = projectBatches[currentBatch];

    const reordered = [
        currentImages[(centerIndex + 2) % 3], // left
        currentImages[centerIndex],          // center
        currentImages[(centerIndex + 1) % 3] // right
    ];

    useEffect(() => {
        setAnimate(true);
        const timeout = setTimeout(() => setAnimate(false), 300);
        return () => clearTimeout(timeout);
    }, [centerIndex, currentBatch]);

    const handleRecenter = (indexInView) => {
        if (indexInView === 0) setCenterIndex((centerIndex + 2) % 3);
        if (indexInView === 2) setCenterIndex((centerIndex + 1) % 3);
    };

    const handleBatchChange = (index) => {
        if (index === currentBatch) return;
        setCurrentBatch(index);
        setCenterIndex(1); // reset center to middle image
    };

    return (
        <section className="bg-white pt-18 pb-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl
                        md:text-3xl font-poppins font-bold text-[#303231]
                        leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-center">
                <span className="bg-gradient-to-r
                from-[#303231] to-[#818F85] text-transparent
                bg-clip-text">
                    Some of Our Work
                </span>
            </h2>

            <div className="relative flex flex-col md:flex-row justify-center items-center h-auto md:h-96 overflow-visible md:overflow-visible">
                <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                    {reordered.map((img, i) => (
                        <div
                            key={i}
                            onClick={() => handleRecenter(i)}
                            className={`relative cursor-pointer w-full sm:w-80 md:w-96 h-auto aspect-[4/3] rounded-xl overflow-hidden 
              transition-all duration-500 ease-in-out
              ${i === 0
                                    ? 'hover:scale-105 md:-ml-40 z-0'
                                    : i === 1
                                        ? 'md:scale-110 z-10 sm:w-96 md:w-[450px] lg:w-[550px]'
                                        : 'hover:scale-105 md:-mr-40 z-0'
                                }
              ${animate ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
                        >
                            <img
                                src={img}
                                alt={`Material Image ${i}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center mt-8 space-x-3">
                {projectBatches.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleBatchChange(index)}
                        className={`h-3 w-3 rounded-full transition-all duration-300 ${currentBatch === index ? 'bg-gray-700 scale-110' : 'bg-gray-400'
                            }`}
                        aria-label={`Go to batch ${index + 1}`}
                    ></button>
                ))}
            </div>
        </section>
    );
};

export default WorkMat;
