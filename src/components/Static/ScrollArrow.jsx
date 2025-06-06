import React from "react";

const ScrollArrow = () => {
  return (
    <div
      className="hidden sm:block absolute right-4 bottom-4 sm:left-[700px] sm:top-[650px] 
                  md:left-[1000px] md:top-[680px] lg:left-[1259px] lg:top-[709px] w-[40px] h-[55px] sm:w-[65px] 
                  sm:h-[85px] md:w-[75px]
                  md:h-[95px] lg:w-[83px] lg:h-[103px] bg-[#CDB7A7] shadow-[0px_16px_32px_-8px_rgba(12,12,13,0.4)] z-10"
    >
      <div
        className="absolute top-1/2 left-1/2 w-[40px]  -translate-x-1/2 -translate-y-1/2 border-t-5 border-black rotate-90"
      ></div>
      <div className="w-20 h-28 flex items-center justify-center">
            <div className="w-8 h-8 border-b-4 border-r-4 rotate-45"></div>
        </div>
    </div>
  );
};

export default ScrollArrow;
