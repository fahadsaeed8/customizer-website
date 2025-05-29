import Image from "next/image";
import React from "react";

const Herosection = () => {
  return (
    <div>
      {/* section heading */}
      <div className="relative min-h-screen mt-8 flex items-start justify-start px-12">
        <div className="z-10 flex flex-col items-start text-left max-w-4xl">
          <Image src={"/PROSIX-LOGO.png"} width={450} height={450} alt="logo" />

          <h1 className="text-[48px] leading-[55px] font-bold text-gray-300 mt-8">
            Unveiling the Unique <br /> Side of Customize <br />
            Team Uniforms
          </h1>

          <button className="mt-6 text-[18px] cursor-pointer text-white px-12 py-3 rounded-full bg-gradient-to-r from-red-600 to-blue-900 hover:from-red-700 hover:to-blue-950 transition duration-300 ease-in">
            Explore Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
