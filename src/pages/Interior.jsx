import React from "react";

const InteriorDesigningPage = () => {
    return (
        <section className="h-screen w-screen flex flex-col overflow-hidden">
            {/* Hero Section */}
            <section
                className="relative bg-cover bg-center h-full flex items-center justify-center"
                style={{ backgroundImage: "url('/images/interior-designing-hero.jpg')" }}
            >
                {/* Rectangle Overlay */}
                <div
                    className="absolute w-full h-[50vh] sm:h-[60vh] md:h-[70vh]
                    left-0 top-1/2 bg-gradient-to-r from-[#252926] to-transparent
                    rotate-[-90deg] origin-top-left z-0"
                ></div>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

                {/* Text Content */}
                <div className="relative z-20">
                    <h1
                        className="absolute left-[3%] sm:left-[5%] md:left-[5.8%] top-[30%] sm:top-[35%] 
                        md:top-[43.5%] text-4xl sm:text-5xl md:text-6xl font-aoboshi 
                        font-normal leading-[1.45] text-white max-w-[635px] sm:max-w-[635px]"
                    >
                        Interior Designing
                    </h1>
                    <p
                        className="absolute left-[3%] sm:left-[5%] md:left-[5.8%] 
                        top-[40%] sm:top-[45%] md:top-[52.5%] text-sm sm:text-base 
                        md:text-xl font-kameron font-normal leading-[1.5] text-justify 
                        text-white max-w-[923px] sm:max-w-[923px]"
                    >
                        Transform your spaces with our expert interior design services. We blend creativity and functionality,
                        tailoring each design to your unique style and needs. Whether modern, classic, or eclectic, our designs
                        elevate your living or working environments to new heights of elegance and comfort.
                    </p>
                </div>
            </section>
        </section>
    );
};

export default InteriorDesigningPage;