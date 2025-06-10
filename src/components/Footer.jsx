import React from "react";
import { FaFacebookSquare, FaInstagram, FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#252926] text-white font-cormorant py-4 xs:py-6 md:py-8 mt-12 w-full">
      <div className="max-w-6xl mx-auto flex flex-col items-center px-4 xs:px-6">
        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-4 mb-3 xs:mb-4">
          <a
            href="https://www.facebook.com/dkconstructionandinterior"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-[#CDB7A7] text-2xl xs:text-3xl"
          >
            <FaFacebookSquare />
          </a>
          <a
            href="https://www.instagram.com/dkconstructionandinterior"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-[#CDB7A7] text-2xl xs:text-3xl"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/919876543210"
            aria-label="WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-[#CDB7A7] text-2xl xs:text-3xl"
          >
            <FaWhatsappSquare />
          </a>
        </div>

        {/* Navigation Links */}
        <div className="mb-2 text-center text-xs xs:text-sm flex flex-wrap justify-center gap-2">
          <a href="#home" className="mx-1 hover:text-[#CDB7A7] font-cormorant">Home</a> /
          <a href="#services" className="mx-1 hover:text-[#CDB7A7]">Services</a> /
          <a href="#about" className="mx-1 hover:text-[#CDB7A7]">About Us</a> /
          <a href="#contact" className="mx-1 hover:text-[#CDB7A7]">Contact Us</a>
        </div>

        <div className="text-[10px] xs:text-xs text-gray-400 text-center w-full">
          &copy; {new Date().getFullYear()} DK Construction and Interior. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
