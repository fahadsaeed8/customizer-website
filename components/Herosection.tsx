import React from "react";

const Herosection = () => {
  return (
    <div>
      {/* section heading */}
      <div className="relative min-h-screen flex items-center justify-center px-4">
        <div className="z-10 flex flex-col items-center text-center max-w-4xl">
          <h3 className="text-[26px] font-semibold leading-[28px] text-[#30374f]">
            Want To
          </h3>
          <h1 className="text-[48px] leading-[60px] font-bold text-[#0b6d76] mt-2">
            Study Abroad <span className="text-[#0b6d76">?</span>
          </h1>
          <p className="text-[#30374f] font-semibold mt-4 text-[18px] leading-[20px]">
            Find the perfect courses and universities to
            <br />
            meet your education goals
          </p>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
