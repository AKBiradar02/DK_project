import React, { useState } from "react";


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header className="w-full bg-white shadow-md fixed top-0 z-50">
            <div className="relative w-full h-[65px] sm:h-[75px] bg-gradient-to-r from-[rgba(205,183,167,0.63)] to-[rgba(255,255,255,0.63)] shadow-[0_16px_32px_rgba(12,12,13,0.4)] z-50 px-2 sm:px-4">
                {/* First Image */}
                <div
                    className="absolute w-[40px] h-[45px] left-2 top-2 bg-no-repeat bg-contain sm:w-[60px] sm:h-[70px] sm:left-4 sm:top-2 md:w-[81px] md:h-[100px] md:left-[120px] md:top-[1px]"
                    style={{ backgroundImage: "url('/images/group1.png')" }}
                ></div>
                {/* Second Image */}
                <div
                    className="absolute w-[55px] h-[30px] left-12 top-7 bg-no-repeat bg-contain sm:w-[80px] sm:h-[50px] sm:left-20 sm:top-8 md:w-[125px] md:h-[80px] md:left-[190px] md:top-[35px]"
                    style={{ backgroundImage: "url('/images/CAI.png')" }}
                ></div>
                {/* Desktop Navigation Links */}
                <nav className="hidden md:flex absolute left-250 top-[20px] md:top-[31px] transform -translate-x-1/2 font-julius-sans-one font-normal text-[14px] sm:text-[16px] md:text-[20px] leading-[22px] text-[#252926] space-x-2 sm:space-x-4 md:space-x-6">
                    <a href="#home" className="text-gray-700 hover:text-red-600 transition px-2 py-1 rounded">Home</a>
                    <a href="#services" className="text-gray-700 hover:text-red-600 transition px-2 py-1 rounded">Services</a>
                    <a href="#about" className="text-gray-700 hover:text-red-600 transition px-2 py-1 rounded">About Us</a>
                    <a href="#contact" className="text-gray-700 hover:text-red-600 transition px-2 py-1 rounded">Contact Us</a>
                </nav>
                {/* Sign Up Button */}
                <a
                    href="#contact"
                    className="hidden md:flex absolute right-35 top-[18px] md:top-[23px] w-[80px] h-[30px] md:w-[113px] md:h-[34px] bg-[#CDB7A7] shadow flex items-center justify-center text-center text-[#252926] font-julius-sans-one font-semibold text-[13px] md:text-[16px] leading-[19px] hover:text-red-600 transition rounded"
                >
                    SIGN UP
                </a>
                {/* ScrollIcon */}

                {/* Mobile Menu Button */}
                <div className="md:hidden absolute right-4 top-4 z-50">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 hover:text-red-600 transition focus:outline-none p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>
            {/* Mobile Menu with Backdrop */}
            {menuOpen && (
                <div className="fixed inset-0 z-40">
                    <div className="absolute inset-0 bg-black bg-opacity-40" onClick={() => setMenuOpen(false)}></div>
                    <div className="absolute top-[65px] sm:top-[75px] left-0 w-full bg-white shadow-lg animate-fade-in">
                        <nav className="flex flex-col items-center py-4 space-y-2">
                            <a href="#home" className="text-gray-700 hover:text-red-600 transition px-4 py-2 w-full text-center" onClick={() => setMenuOpen(false)}>Home</a>
                            <a href="#services" className="text-gray-700 hover:text-red-600 transition px-4 py-2 w-full text-center" onClick={() => setMenuOpen(false)}>Services</a>
                            <a href="#about" className="text-gray-700 hover:text-red-600 transition px-4 py-2 w-full text-center" onClick={() => setMenuOpen(false)}>About Us</a>
                            <a href="#contact" className="text-gray-700 hover:text-red-600 transition px-4 py-2 w-full text-center" onClick={() => setMenuOpen(false)}>Contact Us</a>
                            <a href="#contact" className="w-[90px] h-[32px] bg-[#CDB7A7] shadow flex items-center justify-center text-center text-[#252926] font-julius-sans-one font-semibold text-[14px] leading-[19px] hover:text-red-600 transition rounded mt-2" onClick={() => setMenuOpen(false)}>SIGN UP</a>
                        </nav>
                    </div>
                </div>
            )}
        </header>
        
    );
};

export default Navbar;
