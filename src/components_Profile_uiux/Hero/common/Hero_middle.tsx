import React from "react";

const Hero_middle = () => {

  return (
    <div className="relative flex flex-1/3 flex-wrap w-full">
        {/* <img src="/assets/gdt.jpg" 
        alt="Gadiel Dave Tagam"
        className='absolute w-full h-full object-cover border border-gray-300 m-2 z-0'/> */}

        <div className="grid grid-cols-2 grid-rows-2 gap-2 w-full z-0">
            <div className="flex rounded-lg border w-full h-full"></div>
            <div className="flex rounded-lg border w-full h-full"></div>
            <div className="flex rounded-lg border w-full h-full"></div>
            <div className="flex rounded-lg border w-full h-full"></div>
        </div>
    </div>
  );
}; 

export default Hero_middle;