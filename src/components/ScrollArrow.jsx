import React from "react";

const ScrollArrow = () => {
  return (
    <div className="w-[40px] h-[55px] sm:w-[65px] sm:h-[85px] md:w-[75px] md:h-[95px] lg:w-[83px] lg:h-[103px] bg-[#CDB7A7] shadow-[0px_16px_32px_-8px_rgba(12,12,13,0.4)]">
      <div className="flex items-center justify-center w-full h-full">
        <img
          src="./images/arrow_down.png"
          alt="Scroll Down Arrow"
          className="w-8 h-10"
        />
      </div>
    </div>
  );
};

export default ScrollArrow;