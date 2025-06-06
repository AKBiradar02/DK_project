import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#252926] text-white py-4 xs:py-6 md:py-8 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col items-center px-2 xs:px-4">
        {/* Social Icons */}
        <div className="flex flex-wrap justify-center space-x-4 xs:space-x-6 mb-3 xs:mb-4">
          <a href="#" aria-label="Facebook">
            <img src="/images/facebook.png" alt="Facebook" className="w-6 h-6 xs:w-7 xs:h-7" />
          </a>
          <a href="#" aria-label="Instagram">
            <img src="/images/instagram.png" alt="Instagram" className="w-6 h-6 xs:w-7 xs:h-7" />
          </a>
          <a href="#" aria-label="WhatsApp">
            <img src="/images/whatsapp.png" alt="WhatsApp" className="w-6 h-6 xs:w-7 xs:h-7" />
          </a>
        </div>
        {/* Navigation Links */}
        <div className="mb-2 text-center text-xs xs:text-sm flex flex-wrap justify-center gap-x-2 gap-y-1">
          <a href="#home" className="mx-1 hover:text-[#CDB7A7]">Home</a> /
          <a href="#services" className="mx-1 hover:text-[#CDB7A7]">Services</a> /
          <a href="#about" className="mx-1 hover:text-[#CDB7A7]">About Us</a> /
          <a href="#contact" className="mx-1 hover:text-[#CDB7A7]">Contact Us</a>
        </div>
        <div className="text-[10px] xs:text-xs text-gray-400 text-center">&copy; {new Date().getFullYear()} DK Construction and Interior. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer; 