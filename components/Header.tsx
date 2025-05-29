import React from "react";

const Header = () => {
  return (
    <div className="w-full bg-transparent text-sm font-medium">
      <div className=" p-15 py-2 flex justify-between">
        <a className="flex items-center space-x-2">
          <img src="/mainLogo.png" alt="Logo" className="h-11 w-auto" />
        </a>

        <div className="hidden lg:flex flex-wrap items-center space-x-3 text-black">
          <span className="flex text-[15px] cursor-pointer items-center gap-1 hover:text-[#0B6D76]">
            <i className="fa fa-phone text-[#0B6D76] hover:text-[#0B6D76]"></i>{" "}
            <strong>Lahore</strong> 03004010284
          </span>
          <span className="text-[22px]">|</span>
          <span className="flex text-[15px] cursor-pointer items-center gap-1 hover:text-[#0B6D76]">
            <i className="fa fa-phone text-[#0B6D76] hover:text-[#0B6D76]"></i>{" "}
            <strong>Islamabad</strong> 03103172004
          </span>
          <span className="text-[22px]">|</span>
          <span className="flex text-[15px] cursor-pointer items-center gap-1 hover:text-[#0B6D76]">
            <i className="fa fa-phone text-[#0B6D76] hover:text-[#0B6D76]"></i>{" "}
            <strong>Karachi</strong> 03106225430
          </span>
          <span className="text-[22px]">|</span>
          <a
            href="mailto:your.email@example.com"
            className="flex text-[15px] cursor-pointer items-center font-semibold hover:no-underline gap-1 hover:text-[#0B6D76]"
          >
            <i className="fa fa-envelope text-[#0B6D76] hover:text-[#0B6D76]"></i>{" "}
            <span>Email Click Mail</span>
          </a>

          <span className="text-[22px]">|</span>
          <span className="flex text-[15px] cursor-pointer items-center gap-1 hover:text-[#0B6D76]">
            <i className="fa fa-user text-[#0B6D76] hover:text-[#0B6D76]"></i>{" "}
            <strong>Student</strong>
          </span>
          <span className="text-[22px]">|</span>
          <span className="flex text-[15px] cursor-pointer items-center gap-1 hover:text-[#0B6D76]">
            <i className="fa fa-user text-[#0B6D76] hover:text-[#0B6D76]"></i>{" "}
            <strong>Consultant</strong>
          </span>
        </div>

        <div
          style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
          className="flex-shrink-0 rounded-[2px] px-0 py-[3px] flex items-center"
        >
          <img src="/no1.gif" alt="Badge" className="h-11 w-auto" />
        </div>
      </div>
    </div>
  );
};

export default Header;
