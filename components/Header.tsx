"use client";
import React, { useEffect, useRef, useState } from "react";
import AddToCartModal from "./AddToCartModal";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UseWindowSize } from "./useWindowSize";
interface HeaderProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isModalOpen, setIsModalOpen }) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [showSearch, setShowSearch] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);

  const toggleSearch = () => {
    setShowSearch((prev) => !prev);
  };

  const toggleMenu = (menu: string) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const { width } = UseWindowSize();

  const productMenuItems = [
    {
      label: "TEAM WEAR",
      link: "/team-wear",
      subItems: [
        { label: "AMERICAN FOOTBALL", link: "/team-wear/american-football" },
        { label: "7v7 UNIFORM", link: "/team-wear/7v7-uniform" },
        { label: "BASKETBALL", link: "/team-wear/basketball" },
        { label: "BASEBALL", link: "/team-wear/baseball" },
        { label: "FLAG FOOTBALL UNIFORM", link: "/team-wear/flag-football" },
        { label: "RUGBY UNIFORM", link: "/team-wear/rugby" },
        { label: "SOCCER UNIFORM", link: "/team-wear/soccer" },
        { label: "CHEERLEADING", link: "/team-wear/cheerleading" },
        { label: "ICE HOCKEY", link: "/team-wear/ice-hockey" },
        { label: "BOXING", link: "/team-wear/boxing" },
      ],
    },
    {
      label: "CLOTHING AND APPAREL",
      link: "/clothing-apparel",
      subItems: [
        { label: "SHIRT", link: "/clothing-apparel/shirt" },
        { label: "JACKET", link: "/clothing-apparel/jacket" },
        { label: "HOODIE", link: "/clothing-apparel/hoodie" },
        { label: "POLO SHIRT", link: "/clothing-apparel/polo-tshirt" },
        { label: "LEATHER JACKET", link: "/clothing-apparel/leather-jacket" },
        { label: "T-SHIRT", link: "/clothing-apparel/t-s`hirts" },
      ],
    },
    {
      label: "ACCESSORIES",
      link: "/products-accessories",
      subItems: [
        { label: "DUFFLE BAGS", link: "/products-accessories/duffle-bags" },
        { label: "BACKPACKS", link: "/products-accessories/back-packs" },
        { label: "CUSTOM HATS", link: "/products-accessories/custom-hats" },
        { label: "CUSTOM SOCKS", link: "/products-accessories/custom-socks" },
        { label: "HEADBANDS", link: "/products-accessories/head-bands" },
        {
          label: "SOFTSHELL HEADGUARD",
          link: "/products-accessories/soft-shellgards",
        },
        {
          label: "FOOTBALL GLOVES",
          link: "/products-accessories/football-gloves",
        },
        { label: "HAND WARMERS", link: "/products-accessories/hand-warmers" },
        { label: "ARM SLEEVES", link: "/products-accessories/arm-sleeves" },
        { label: "SPATS COVERS", link: "/products-accessories/spats-covers" },
        { label: "LEG SLEEVES", link: "/products-accessories/leg-sleeves" },
      ],
    },
    {
      label: "FAN STORE",
      link: "/fan-store",
      subItems: [
        { label: "Categories01", link: "/fan-store/categories01" },
        { label: "Categories02", link: "/fan-store/categories02" },
        { label: "Categories03", link: "/fan-store/categories03" },
      ],
    },
  ];

  const teamStoreItems = [
    { label: "Famlife Flex", link: "/team-store/famlife-flex" },
    { label: "CO ELITE", link: "/team-store/co-elite" },
    { label: "HYFIELDS HAWKS", link: "/team-store/hyfields-hawks" },
    { label: "BUFFS", link: "/team-store/buffs" },
    { label: "McKinley Tech", link: "/team-store/mc-kenly-tec" },
    { label: "Potomac", link: "/team-store/protomac" },
    { label: "AN-Rams", link: "/team-store/an-rams" },
    { label: "Potomacs Wolverines", link: "/team-store/protomacs-wolveriens" },
    { label: "AAS EAGLES", link: "/team-store/aas-eagles" },
    { label: "W PANTHERS", link: "/team-store/w-panthers" },
    { label: "VA Jags", link: "/team-store/va-jags" },
  ];

  const supportItems = [
    { label: "Size Reference", link: "/support/size-reference" },
    {
      label: "Manufacturing Process",
      link: "/support/manufacturing-process",
      subItems: [
        {
          label: "Design Preparation",
          link: "/support/manufacturing-process/design-preparation",
        },
        {
          label: "Digital Printing",
          link: "/support/manufacturing-process/digital-printing",
        },
        {
          label: "Sublimated Printing",
          link: "/support/manufacturing-process/size-printing",
        },
        {
          label: "Laser Cutting",
          link: "/support/manufacturing-process/laser-cutting",
        },
        {
          label: "Counting Cut Pieces",
          link: "/support/manufacturing-process/counting-cut-pieces",
        },
        { label: "Sewing", link: "/support/manufacturing-process/sewing" },
        { label: "Trimming", link: "/support/manufacturing-process/trimming" },
        { label: "Ironing", link: "/support/manufacturing-process/ironing" },
        {
          label: "Qc and Packing",
          link: "/support/manufacturing-process/qc-and-packing",
        },
        {
          label: "Sample Room",
          link: "/support/manufacturing-process/sample-room",
        },
      ],
    },
    { label: "Fabric", link: "/support/fabric" },
    { label: "Accessories", link: "/support/accessories" },
    { label: "Resource", link: "/support/resource" },
    { label: "FAQS", link: "/support/faqs" },
  ];

  const renderDropdown = (items: any[], menuName: string) => (
    <div
      className={`absolute left-0 top-full bg-[#DDDDDD] text-black shadow-lg rounded md:w-64 
        ${
          isMobile
            ? activeMenu === menuName
              ? "block"
              : "hidden"
            : "hidden group-hover:block"
        } 
        z-50`}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group/sub"
          onMouseEnter={() => !isMobile && setHoveredItem(item.label)}
          onMouseLeave={() => !isMobile && setHoveredItem(null)}
        >
          <a
            href={typeof item.link === "string" ? item.link : "#"}
            className="flex justify-between items-center px-4 py-2 text-[19px] font-bold hover:bg-gray-100 cursor-pointer"
            onClick={(e) => {
              if (isMobile && item.subItems) {
                e.preventDefault();
                setHoveredItem(hoveredItem === item.label ? null : item.label);
              }
            }}
          >
            {item.label}
            {item.subItems && (
              <i className="fas fa-chevron-right ml-2 md:ml-0 text-[14px] md:text-lg"></i>
            )}
          </a>

          {item.subItems && (
            <div
              className={`absolute top-0 left-full bg-[#DDDDDD] text-black min-w-[140px] md:min-w-[180px] shadow-lg rounded z-50 
                ${
                  isMobile
                    ? hoveredItem === item.label
                      ? "block"
                      : "hidden"
                    : hoveredItem === item.label
                    ? "block"
                    : "hidden"
                }`}
            >
              {item.subItems.map((subItem: any, subIdx: number) => (
                <a
                  key={subIdx}
                  href={typeof subItem.link === "string" ? subItem.link : "#"}
                  className="block px-4 py-2 hover:bg-gray-100 cursor-pointer font-bold text-[19px]"
                >
                  {subItem.label || subItem}
                </a>
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
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
        setHoveredItem(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(width < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isActive = (path: string) => pathname === path;

  const bgClass = isHomePage
    ? scrolled
      ? "bg-black/60"
      : "bg-transparent"
    : "bg-black/60";

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      if (window.scrollY > 10) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  return (
    <div
      className={`w-full text-sm font-medium fixed top-0 left-0 z-40 ${
        scrolled ? "pt-[0px]" : "pt-[80px]"
      }   transition-colors duration-300 ${bgClass}`}
      ref={menuRef}
    >
      <div className="p-4 md:p-15 md:py-4 md:flex justify-between items-center">
        {/* 🔹 MOBILE + MD TOP BAR */}
        {isMobile || width <= 768 ? (
          <div className="flex justify-between items-center w-full">
            {/* Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white text-[26px]"
            >
              <i className="fas fa-bars"></i>
            </button>

            {/* Search + Cart */}
            <div className="flex items-center gap-4">
              <div ref={searchRef} className="relative">
                <button
                  onClick={toggleSearch}
                  className="text-white hover:text-green-500 cursor-pointer text-[22px] transition duration-300 ease-in"
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

              <div className="relative">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-white hover:text-green-500 cursor-pointer text-[22px] transition duration-300 ease-in"
                >
                  <i className="fas fa-shopping-cart"></i>
                  {cartItemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                      {cartItemCount}
                    </span>
                  )}
                </button>
                <AddToCartModal
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                />
              </div>
            </div>
          </div>
        ) : (
          // 🔹 DESKTOP NAVIGATION
          <div className="lg:flex md:flex-wrap items-center space-x-6 text-black relative w-full justify-between">
            <div className="flex items-center space-x-6">
              <Link
                href="/"
                className={`text-[23px] cursor-pointer p-2 font-semibold hover:bg-[#2d394b] ${
                  isActive("/") ? "bg-[#2d394b] text-white" : "text-white"
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`text-[23px] cursor-pointer p-2 font-semibold hover:bg-[#2d394b] ${
                  isActive("/about") ? "bg-[#2d394b] text-white" : "text-white"
                }`}
              >
                About Us
              </Link>
              {/* Products Dropdown */}
              <div
                className="relative group"
                onMouseLeave={() => !isMobile && setHoveredItem(null)}
              >
                <Link
                  href="/product-pages"
                  className={`flex items-center gap-1 text-[23px] cursor-pointer p-2 font-semibold hover:bg-[#2d394b] ${
                    isActive("/product-pages")
                      ? "bg-[#2d394b] text-white"
                      : "text-white"
                  }`}
                  onClick={() => isMobile && toggleMenu("products")}
                >
                  Products
                  <i className="fas fa-chevron-down text-xs mt-[2px]"></i>
                </Link>
                {renderDropdown(productMenuItems, "products")}
              </div>
              {/* Team Store Dropdown */}
              <div
                className="relative group"
                onMouseLeave={() => !isMobile && setHoveredItem(null)}
              >
                <Link
                  href="/team-store"
                  className="flex items-center gap-1 text-[23px] cursor-pointer text-white hover:text-white hover:bg-[#2d394b] p-2 font-semibold"
                  onClick={() => isMobile && toggleMenu("teamStore")}
                >
                  Team Store
                  <i className="fas fa-chevron-down text-xs mt-[2px]"></i>
                </Link>
                {renderDropdown(teamStoreItems, "teamStore")}
              </div>
              {/* Support Dropdown */}
              <div
                className="relative group"
                onMouseLeave={() => !isMobile && setHoveredItem(null)}
              >
                <div
                  className="flex items-center gap-1 text-[23px] cursor-pointer text-white hover:text-white hover:bg-[#2d394b] p-2 font-semibold"
                  onClick={() => isMobile && toggleMenu("support")}
                >
                  Support
                  <i className="fas fa-chevron-down text-xs mt-[2px]"></i>
                </div>
                {renderDropdown(supportItems, "support")}
              </div>
              <div className="relative group">
                <Link href={"/membership"}>
                  <div className="flex items-center gap-1 text-[23px] cursor-pointer text-white hover:text-white hover:bg-[#2d394b] p-2 font-semibold">
                    Membership
                  </div>
                </Link>
              </div>
              <div className="relative group">
                <Link href={"/contact"}>
                  <div className="flex items-center gap-1 text-[23px] cursor-pointer text-white hover:text-white hover:bg-[#2d394b] p-2 font-semibold">
                    Contact us
                  </div>
                </Link>
              </div>
            </div>

            {/* 🔹 Search, Cart & Purchase Now on Desktop */}
            <div className="flex items-center gap-6">
              {/* Purchase Now Button */}
              {/* <button className="border-[2.5px] text-[20px] cursor-pointer border-green-500 text-green-500 px-9 py-2 rounded-full hover:bg-green-500 hover:text-black transition duration-300 ease-in">
                Purchase now
              </button> */}
              {/* Search */}
              <div ref={searchRef} className="relative">
                <button
                  onClick={toggleSearch}
                  className="text-white hover:text-green-500 cursor-pointer text-[22px] transition duration-300 ease-in"
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

              {/* Cart */}
              <div className="relative">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-white hover:text-green-500 cursor-pointer text-[22px] transition duration-300 ease-in"
                >
                  <i className="fas fa-shopping-cart"></i>
                  {cartItemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                      {cartItemCount}
                    </span>
                  )}
                </button>
                <AddToCartModal
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                />
              </div>
            </div>
          </div>
        )}

        {/* 🔹 MOBILE DROPDOWN MENU */}
        {(isMobile || width <= 768) && mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-black/90 text-white flex flex-col items-start px-6 py-4 space-y-4 z-50">
            <Link href="/" className="text-[20px] font-semibold">
              Home
            </Link>
            <Link href="/about" className="text-[20px] font-semibold">
              About Us
            </Link>

            {/* Products Mobile Dropdown */}
            <button
              onClick={() => toggleMenu("products")}
              className="flex items-center gap-2 text-[20px] font-semibold"
            >
              Products <i className="fas fa-chevron-down"></i>
            </button>
            {activeMenu === "products" && (
              <div className="ml-4 space-y-2">
                {productMenuItems.map((i) => (
                  <div key={i.label}>
                    <button
                      onClick={() =>
                        setHoveredItem(hoveredItem === i.label ? null : i.label)
                      }
                      className="flex items-center gap-2 text-[18px] font-medium"
                    >
                      {i.label}
                      {i.subItems && (
                        <i className="fas fa-chevron-down text-sm"></i>
                      )}
                    </button>
                    {i.subItems && hoveredItem === i.label && (
                      <div className="ml-4 space-y-1">
                        {i.subItems.map((sub: any, subIdx: number) => (
                          <Link
                            key={subIdx}
                            href={sub.link}
                            className="block text-[17px]"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Team Store Mobile Dropdown */}
            <button
              onClick={() => toggleMenu("teamStore")}
              className="flex items-center gap-2 text-[20px] font-semibold"
            >
              Team Store <i className="fas fa-chevron-down"></i>
            </button>
            {activeMenu === "teamStore" && (
              <div className="ml-4 space-y-2">
                {teamStoreItems.map((i) => (
                  <Link key={i.label} href={i.link}>
                    {i.label}
                  </Link>
                ))}
              </div>
            )}

            {/* Support Mobile Dropdown */}
            <button
              onClick={() => toggleMenu("support")}
              className="flex items-center gap-2 text-[20px] font-semibold"
            >
              Support <i className="fas fa-chevron-down"></i>
            </button>
            {activeMenu === "support" && (
              <div className="ml-4 space-y-2">
                {supportItems.map((i) => (
                  <div key={i.label}>
                    <button
                      onClick={() =>
                        setHoveredItem(hoveredItem === i.label ? null : i.label)
                      }
                      className="flex items-center gap-2 text-[18px] font-medium"
                    >
                      {i.label}
                      {i.subItems && (
                        <i className="fas fa-chevron-down text-sm"></i>
                      )}
                    </button>
                    {i.subItems && hoveredItem === i.label && (
                      <div className="ml-4 space-y-1">
                        {i.subItems.map((sub: any, subIdx: number) => (
                          <Link
                            key={subIdx}
                            href={sub.link}
                            className="block text-[17px]"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            <Link href="/membership" className="text-[20px] font-semibold">
              Membership
            </Link>
            <Link href="/contact" className="text-[20px] font-semibold">
              Contact us
            </Link>

            {/* 🔹 Purchase button inside mobile menu at bottom */}
            {/* <button className="mt-6 border-[2.5px] text-[20px] cursor-pointer border-green-500 text-green-500 px-9 py-2 rounded-full hover:bg-green-500 hover:text-black transition duration-300 ease-in">
              Purchase now
            </button> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
