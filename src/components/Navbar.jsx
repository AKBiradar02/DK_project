import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleHomeClick = () => {
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const heroSection = document.getElementById('home');
                if (heroSection) {
                    heroSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 300);
        } else {
            const heroSection = document.getElementById('home');
            if (heroSection) {
                heroSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setMenuOpen(false);
    };

    const handleServicesClick = () => {
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const servicesSection = document.getElementById('services');
                if (servicesSection) {
                    servicesSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 300);
        } else {
            const servicesSection = document.getElementById('services');
            if (servicesSection) {
                servicesSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setMenuOpen(false);
    };

    const handleAboutClick = () => {
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const aboutSection = document.getElementById('about');
                if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 300);
        } else {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setMenuOpen(false);
    };

    const handleContactClick = () => {
        const formSection = document.getElementById('contactForm');
        if (formSection) {
            formSection.scrollIntoView({ behavior: 'smooth' });

            // Slight delay to ensure it renders first
            setTimeout(() => {
                const event = new CustomEvent('openContactForm');
                window.dispatchEvent(event);
            }, 400);
        }
    };



    return (
        <header className="w-full fixed top-0 z-50 backdrop-blur-md bg-gradient-to-r
        from-[rgba(205,183,167,0.5)] to-[rgba(255,255,255,0.5)]
                        shadow-lg">
            <div className="relative w-full h-[65px] sm:h-[75px]
            px-2 sm:px-4">
                {/* Logos */}
                <div
                    className="absolute w-[80px] h-[83px] left-[50px] top-[6px] bg-no-repeat bg-contain"
                    style={{ backgroundImage: "url('/images/group1.png')" }}
                ></div>
                <div
                    className="absolute w-[156px] h-[34px] left-[110px] top-[30px] bg-no-repeat bg-contain"
                    style={{ backgroundImage: "url('/images/CAI.png')" }}
                ></div>


                {/* Desktop Nav */}
                <nav className="hidden lg:flex absolute left-[77%] top-20 md:top-8
                                    transform -translate-x-1/2 font-poppins font-semibold text-lg
                                    sm:text-xl md:text-base leading-[22px] text-[#252926] space-x-4 md:space-x-6">
                    <button onClick={handleHomeClick} className="cursor-pointer hover:text-red-600">
                        Home
                    </button>
                    <button onClick={handleServicesClick} className="cursor-pointer hover:text-red-600">
                        Services
                    </button>
                    <button onClick={handleAboutClick} className="cursor-pointer hover:text-red-600">
                        About Us
                    </button>
                    <button onClick={handleContactClick} className="cursor-pointer hover:text-red-600">
                        Contact Us
                    </button>
                </nav>


                {/* Hamburger */}
                <div className="lg:hidden absolute right-4 top-4 z-50">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-gray-700 hover:text-red-600 p-2 focus:outline-none"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="lg:hidden fixed inset-0 z-40">
                    <div className="absolute inset-0 bg-black bg-opacity-40" onClick={() => setMenuOpen(false)}></div>
                    <div className="absolute top-[65px] sm:top-[75px] left-0 w-full bg-white
                                    shadow-lg animate-fade-in">
                        <nav className="flex flex-col items-center py-4 space-y-2">
                            <button onClick={handleHomeClick} className="w-full text-center py-2 hover:text-red-600 cursor-pointer">Home</button>
                            <button onClick={handleServicesClick} className="w-full text-center py-2 hover:text-red-600 cursor-pointer">Services</button>
                            <button onClick={handleAboutClick} className="w-full text-center py-2 hover:text-red-600 cursor-pointer">About Us</button>
                            <button onClick={handleContactClick} className="w-full text-center py-2 hover:text-red-600 cursor-pointer">Contact Us</button>
                            <button onClick={handleContactClick} className="mt-2 px-4 py-2 bg-[#CDB7A7] text-[#252926] font-semibold rounded shadow hover:text-red-600 cursor-pointer">SIGN UP</button>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;