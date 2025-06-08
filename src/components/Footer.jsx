import React from "react";

const FacebookIcon = () => (
  <svg
    className="w-6 h-6 xs:w-7 xs:h-7"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.342v21.316C0 23.4.6 24 1.325 24H12.82v-9.294H9.692V11.08h3.128V8.412c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.1 2.796.143v3.24l-1.918.001c-1.505 0-1.796.715-1.796 1.763v2.31h3.59l-.467 3.626h-3.123V24h6.116c.725 0 1.325-.6 1.325-1.342V1.342C24 .6 23.4 0 22.675 0z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    className="w-6 h-6 xs:w-7 xs:h-7"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm4.75-.75a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg
    className="w-6 h-6 xs:w-7 xs:h-7"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.52 3.48A11.957 11.957 0 0012 0C5.373 0 0 5.373 0 12c0 2.123.559 4.098 1.53 5.812L0 24l6.344-1.616A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12 0-3.213-1.266-6.213-3.48-8.52zm-8.52 16.155c-2.458 0-4.698-1.067-6.285-2.797l-.448-.44-3.758 1.02 1-3.66-.463-.475A9.98 9.98 0 012.02 12c0-5.523 4.477-10 10-10 2.658 0 5.144 1.038 6.99 2.76a9.922 9.922 0 012.988 7.24c0 5.523-4.477 10-10 10zm5.41-7.404c-.3-.149-1.773-.874-2.05-.973-.276-.099-.477-.149-.68.149-.203.3-.784.973-.96 1.173-.175.203-.35.224-.65.075-.3-.149-1.268-.467-2.42-1.485-.894-.797-1.5-1.78-1.675-2.08-.175-.3-.018-.462.131-.61.135-.134.3-.35.45-.524.15-.174.2-.3.3-.498.099-.198.05-.372-.025-.52-.075-.149-.68-1.644-.93-2.256-.244-.592-.492-.513-.68-.523l-.58-.01c-.2 0-.52.074-.792.372-.27.3-1.04 1.016-1.04 2.475 0 1.46 1.065 2.875 1.215 3.074.15.198 2.1 3.2 5.075 4.487.71.306 1.263.488 1.695.625.712.226 1.36.194 1.87.118.57-.085 1.773-.724 2.025-1.424.252-.7.252-1.3.176-1.424-.075-.124-.276-.198-.575-.347z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-[#252926] text-white py-4 xs:py-6 md:py-8 mt-12 w-full">
      <div className="max-w-6xl mx-auto flex flex-col items-center px-4 xs:px-6">
        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-4 mb-3 xs:mb-4">
          <a href="#" aria-label="Facebook" className="hover:text-[#CDB7A7]">
            <FacebookIcon />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-[#CDB7A7]">
            <InstagramIcon />
          </a>
          <a href="#" aria-label="WhatsApp" className="hover:text-[#CDB7A7]">
            <WhatsAppIcon />
          </a>
        </div>
        {/* Navigation Links */}
        <div className="mb-2 text-center text-xs xs:text-sm flex flex-wrap justify-center gap-2">
          <a href="#home" className="mx-1 hover:text-[#CDB7A7]">Home</a> /
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
