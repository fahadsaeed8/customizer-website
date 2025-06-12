"use client";
import React, { useEffect, useRef, useState } from "react";

const Header = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const toggleSearch = () => {
    setShowSearch((prev) => !prev);
  };

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
          <div className="flex justify-between items-center px-4 py-2 text-[19px] font-bold hover:bg-gray-100 cursor-pointer">
            {item.label}
            {item.subItems && <i className="fas fa-chevron-right text-lg"></i>}
          </div>

          {item.subItems && hoveredItem === item.label && (
            <div className="absolute top-0 left-full bg-[#DDDDDD] text-black min-w-[180px] shadow-lg rounded z-50">
              {item.subItems.map((subItem: string, subIdx: number) => (
                <div
                  key={subIdx}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-bold text-[19px]"
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
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowSearch(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full bg-transparent text-sm font-medium">
      <div className="p-10 md:p-15 md:py-10 md:flex justify-between items-center">
        <div className="lg:flex md:flex-wrap items-center space-x-6 text-black relative">
          <span className="text-[23px] cursor-pointer text-white hover:text-white hover:bg-[#2d394b] p-2 font-semibold">
            About Us
          </span>

          <div
            className="relative group"
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className="flex items-center gap-1 text-[23px] cursor-pointer text-white hover:text-white hover:bg-[#2d394b] p-2 font-semibold">
              Products
              <i className="fas fa-chevron-down text-xs mt-[2px]"></i>
            </div>
            {renderDropdown(productMenuItems)}
          </div>

          <div
            className="relative group"
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className="flex items-center gap-1 text-[23px] cursor-pointer text-white hover:text-white hover:bg-[#2d394b] p-2 font-semibold">
              Team Store
              <i className="fas fa-chevron-down text-xs mt-[2px]"></i>
            </div>
            {renderDropdown(teamStoreItems)}
          </div>

          <div
            className="relative group"
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className="flex items-center gap-1 text-[23px] cursor-pointer text-white hover:text-white hover:bg-[#2d394b] p-2 font-semibold">
              Support
              <i className="fas fa-chevron-down text-xs mt-[2px]"></i>
            </div>
            {renderDropdown(supportItems)}
          </div>

          <div className="relative group">
            <div className="flex items-center gap-1 text-[23px] cursor-pointer text-white hover:text-white hover:bg-[#2d394b] p-2 font-semibold">
              Membership
            </div>
          </div>
          <div className="relative group">
            <div className="flex items-center gap-1 text-[23px] cursor-pointer text-white hover:text-white hover:bg-[#2d394b] p-2 font-semibold">
              Contact us
            </div>
          </div>
        </div>

        <div className="flex mt-5 md:mt-0 items-center space-x-6 relative">
          <button className="border-[2.5px] text-[21px] md:text-[23px] cursor-pointer border-[#75a03e] text-[#75a03e] px-6 md:px-11 tracking-[1px] py-1 md:py-2 rounded-full hover:bg-green-500 hover:text-black transition duration-300 ease-in">
            Purchase now
          </button>

          <div ref={searchRef} className="relative">
            <button
              onClick={toggleSearch}
              className="text-white hover:text-green-500 cursor-pointer text-[22px] md:text-[24px] transition duration-300 ease-in"
            >
              <i className="fas fa-search"></i>
            </button>

            {showSearch && (
              <input
                type="text"
                placeholder="Search..."
                className="absolute top-full right-0 mt-4 px-4 py-2 rounded-full bg-white text-black border outline-none w-64 shadow-md transition-all duration-300 z-50"
              />
            )}
          </div>

          <button className="text-white hover:text-green-500 cursor-pointer text-[22px] md:text-[24px] transition duration-300 ease-in relative">
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
