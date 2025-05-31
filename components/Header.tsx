"use client";
import React, { useState } from "react";

const Header = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const productMenuItems = [
    {
      label: "TEAM WEAR",
    },
    {
      label: "CLOTHING AND APPAREL",
      subItems: [
        "SHIRT",
        "JACKET",
        "HOODIE",
        "POLO SHIRT",
        "LEATHER JACKET",
        "T-SHIRT",
      ],
    },
    {
      label: "ACCESSORIES",
    },
    {
      label: "FAN STORE",
    },
  ];

  const teamStoreItems = [
    { label: "MEN'S STORE" },
    { label: "WOMEN'S STORE" },
    { label: "YOUTH" },
    {
      label: "COLLECTIONS",
      subItems: ["NEW ARRIVALS", "BEST SELLERS", "ON SALE"],
    },
  ];

  const supportItems = [
    { label: "HELP CENTER" },
    { label: "RETURNS" },
    { label: "SHIPPING INFO" },
    { label: "TRACK ORDER" },
    { label: "FAQS" },
  ];

  const renderDropdown = (items: any[]) => (
    <div className="absolute left-0 top-full bg-[#DDDDDD] text-black shadow-lg rounded w-64 hidden group-hover:block z-50">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group/sub"
          onMouseEnter={() => setHoveredItem(item.label)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <div className="flex justify-between items-center px-4 py-2 text-[20px] font-bold hover:bg-gray-100 cursor-pointer">
            {item.label}
            {item.subItems && <i className="fas fa-chevron-right text-lg"></i>}
          </div>

          {item.subItems && hoveredItem === item.label && (
            <div className="absolute top-0 left-full bg-[#DDDDDD] text-black min-w-[180px] shadow-lg rounded z-50">
              {item.subItems.map((subItem: string, subIdx: number) => (
                <div
                  key={subIdx}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-bold text-[20px]"
                >
                  {subItem}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full bg-transparent text-sm font-medium">
      <div className="p-15 py-10 flex justify-between items-center">
        <div className="lg:flex flex-wrap items-center space-x-6 text-black relative">
          <span className="text-[24px] cursor-pointer text-white hover:text-white hover:bg-[#2d394b] p-2 font-semibold">
            About Us
          </span>

          <div
            className="relative group"
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className="flex items-center gap-1 text-[24px] cursor-pointer text-white hover:text-white hover:bg-[#2d394b] p-2 font-semibold">
              Products
              <i className="fas fa-chevron-down text-[20px] mt-[2px]"></i>
            </div>
            {renderDropdown(productMenuItems)}
          </div>

          <div
            className="relative group"
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className="flex items-center gap-1 text-[24px] cursor-pointer text-white hover:text-white hover:bg-[#2d394b] p-2 font-semibold">
              Team Store
              <i className="fas fa-chevron-down text-xs mt-[2px]"></i>
            </div>
            {renderDropdown(teamStoreItems)}
          </div>

          <div
            className="relative group"
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className="flex items-center gap-1 text-[24px] cursor-pointer text-white hover:text-white hover:bg-[#2d394b] p-2 font-semibold">
              Support
              <i className="fas fa-chevron-down text-xs mt-[2px]"></i>
            </div>
            {renderDropdown(supportItems)}
          </div>

          <span className="text-[24px] cursor-pointer text-white hover:text-white hover:bg-[#2d394b] p-2 font-semibold">
            Membership
          </span>
          <span className="text-[24px] cursor-pointer text-white hover:text-white hover:bg-[#2d394b] p-2 font-semibold">
            Contact us
          </span>
        </div>

        <div className="flex items-center space-x-6">
          <button className="border-[2.5px] text-[26px] cursor-pointer border-[#75a03e] text-[#75a03e] px-13 tracking-[1px] py-2 rounded-full hover:bg-green-500 hover:text-black transition duration-300 ease-in">
            Purchase now
          </button>

          <button className="text-white hover:text-green-500 cursor-pointer text-[24px] transition duration-300 ease-in">
            <i className="fas fa-search"></i>
          </button>

          <button className="text-white hover:text-green-500 cursor-pointer text-[24px] transition duration-300 ease-in relative">
            <i className="fas fa-shopping-cart"></i>
            <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs rounded-full px-1.5">
              3
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
