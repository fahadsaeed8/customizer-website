"use client";
import React, { useEffect, useRef, useState } from "react";
import AddToCartModal from "./AddToCartModal";
import CartItems from "./CartItems";
import CheckoutModal from "./CheckoutModal";
import Link from "next/link";
import { usePathname } from "next/navigation";
interface HeaderProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isModalOpen, setIsModalOpen }) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [showSearch, setShowSearch] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
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
        { label: "T-SHIRT", link: "/clothing-apparel/t-shirts" },
      ],
    },
    {
      label: "ACCESSORIES",
      link: "/products-accessories",
      subItems: [
        { label: "DUFFLE BAGS", link: "/accessories/duffle-bags" },
        { label: "BACKPACKS", link: "/accessories/backpacks" },
        { label: "CUSTOM HATS", link: "/accessories/custom-hats" },
        { label: "CUSTOM SOCKS", link: "/accessories/custom-socks" },
        { label: "HEADBANDS", link: "/accessories/headbands" },
        { label: "SOFTSHELL HEADGUARD", link: "/accessories/headguard" },
        { label: "FOOTBALL GLOVES", link: "/accessories/football-gloves" },
        { label: "HAND WARMERS", link: "/accessories/hand-warmers" },
        { label: "ARM SLEEVES", link: "/accessories/arm-sleeves" },
        { label: "SPATS COVERS", link: "/accessories/spats-covers" },
        { label: "LEG SLEEVES", link: "/accessories/leg-sleeves" },
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
    { label: "MEN'S STORE", link: "/team-store/men" },
    { label: "WOMEN'S STORE", link: "/team-store/women" },
    { label: "YOUTH", link: "/team-store/youth" },
    {
      label: "COLLECTIONS",
      subItems: [
        { label: "NEW ARRIVALS", link: "/collections/new-arrivals" },
        { label: "BEST SELLERS", link: "/collections/best-sellers" },
        { label: "ON SALE", link: "/collections/on-sale" },
      ],
    },
  ];

  const supportItems = [
    { label: "HELP CENTER", link: "/team-store/men" },
    { label: "RETURNS", link: "/team-store/men" },
    { label: "SHIPPING INFO", link: "/team-store/men" },
    { label: "TRACK ORDER", link: "/team-store/men" },
    { label: "FAQS", link: "/team-store/men" },
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
      setIsMobile(window.innerWidth < 768);
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
      className={`w-full text-sm font-medium fixed top-0 left-0 z-40 pt-[80px] transition-colors duration-300 ${bgClass}`}
      ref={menuRef}
    >
      <div className="p-10 md:p-15 md:py-4 md:flex justify-between items-center">
        <div className="lg:flex md:flex-wrap items-center space-x-6 text-black relative">
          <Link
            href="/"
            className={`text-[23px] cursor-pointer p-2 font-semibold hover:bg-[#2d394b] ${
              isActive("/") ? "bg-[#2d394b] text-white" : "text-white"
            }`}
          >
            Home{" "}
          </Link>
          <Link
            href="/about"
            className={`text-[23px] cursor-pointer p-2 font-semibold hover:bg-[#2d394b] ${
              isActive("/about") ? "bg-[#2d394b] text-white" : "text-white"
            }`}
          >
            About Us
          </Link>

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

          <div
            className="relative group"
            onMouseLeave={() => !isMobile && setHoveredItem(null)}
          >
            <div
              className="flex items-center gap-1 text-[23px] cursor-pointer text-white hover:text-white hover:bg-[#2d394b] p-2 font-semibold"
              onClick={() => isMobile && toggleMenu("teamStore")}
            >
              Team Store
              <i className="fas fa-chevron-down text-xs mt-[2px]"></i>
            </div>
            {renderDropdown(teamStoreItems, "teamStore")}
          </div>

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
            <div className="flex items-center gap-1 text-[23px] cursor-pointer text-white hover:text-white hover:bg-[#2d394b] p-2 font-semibold">
              Contact us
            </div>
          </div>
        </div>

        <div className="flex mt-5 md:mt-0 items-center space-x-6 relative">
          <button className="border-[2.5px] text-[22px] md:text-[23px] cursor-pointer border-green-500 text-green-500 px-9 md:px-11 tracking-[1px] py-2 rounded-full hover:bg-green-500 hover:text-black transition duration-300 ease-in">
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

          <div className="relative">
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-white hover:text-green-500 cursor-pointer text-[22px] md:text-[24px] transition duration-300 ease-in"
            >
              <i className="fas fa-shopping-cart"></i>
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>

            <CheckoutModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            />

            {/* <CartItems
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
