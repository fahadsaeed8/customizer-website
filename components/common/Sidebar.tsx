"use client";
import React, { useState } from "react";
import Link from "next/link";

type SidebarProps = {
  onStockFilterChange: (inStock: boolean | null) => void;
  onColorFilterChange: (colors: string[]) => void;
};

type Category = {
  name: string;
  path?: string;
  count?: number;
  children?: Category[];
};

const ChevronDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
    <path d="M7 10l5 5 5-5z" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
    <path d="M7 14l5-5 5 5z" />
  </svg>
);

const CATEGORIES: Category[] = [
  {
    name: "TEAM WEAR",
    path: "/team-wear",
    count: 30,
    children: [
      { name: "American Football", path: "/team-wear/american-football" },
      { name: "7v7 Uniform", path: "/team-wear/7v7-uniform" },
      { name: "Basketball", path: "/team-wear/basketball" },
      { name: "Baseball", path: "/team-wear/baseball" },
      { name: "Flag Football", path: "/team-wear/flag-football" },
      { name: "Rugby", path: "/team-wear/rugby" },
      { name: "Soccer", path: "/team-wear/soccer" },
      { name: "Cheerleading", path: "/team-wear/cheerleading" },
      { name: "Ice Hockey", path: "/team-wear/ice-hockey" },
      { name: "Boxing", path: "/team-wear/boxing" }
    ]
  },
  {
    name: "CLOTHING & APPAREL",
    path: "/clothing-apparel",
    count: 13,
    children: [
      { name: "Hoodie", path: "/clothing-apparel/hoodie" },
      { name: "Jacket", path: "/clothing-apparel/jacket" },
      { name: "Leather Jacket", path: "/clothing-apparel/leather-jacket" },
      { name: "Polo T-shirt", path: "/clothing-apparel/polo-tshirt" },
      { name: "Shirt", path: "/clothing-apparel/shirt" },
      { name: "T-shirts", path: "/clothing-apparel/t-shirts" }
    ]
  },
  {
    name: "ACCESSORIES",
    path: "/products-accessories",
    count: 27,
    children: [
      { name: "Arm Sleeves", path: "/products-accessories/arm-sleeves" },
      { name: "Back Packs", path: "/products-accessories/back-packs" },
      { name: "Custom Hats", path: "/products-accessories/custom-hats" },
      { name: "Custom Socks", path: "/products-accessories/custom-socks" },
      { name: "Duffle Bags", path: "/products-accessories/duffle-bags" },
      { name: "Football Gloves", path: "/products-accessories/football-gloves" },
      { name: "Hand Warmers", path: "/products-accessories/hand-warmers" },
      { name: "Head Bands", path: "/products-accessories/head-bands" },
      { name: "Leg Sleeves", path: "/products-accessories/leg-sleeves" },
      { name: "Soft Shellgards", path: "/products-accessories/soft-shellgards" },
      { name: "Spats Covers", path: "/products-accessories/spats-covers" }
    ]
  },
  {
    name: "FAN STORE",
    path: "/fan-store",
    children: [
      { name: "Arm Sleeves", path: "/fan-store/arm-sleeves" },
      { name: "Back Packs", path: "/fan-store/back-packs" },
      { name: "Custom Hats", path: "/fan-store/custom-hats" },
      { name: "Custom Socks", path: "/fan-store/custom-socks" },
      { name: "Duffle Bags", path: "/fan-store/duffle-bags" },
      { name: "Football Gloves", path: "/fan-store/football-gloves" },
      { name: "Hand Warmers", path: "/fan-store/hand-warmers" },
      { name: "Head Bands", path: "/fan-store/head-bands" },
      { name: "Leg Sleeves", path: "/fan-store/leg-sleeves" },
      { name: "Softshell Headguard", path: "/fan-store/softshell-headguard" }
    ]
  },
  {
    name: "TEAM STORE",
    path: "/team-store",
    children: [
      { name: "AAS EAGLES", path: "/team-store/aas-eagles", count: 22 },
      { name: "AN-Rams", path: "/team-store/an-rams", count: 27 },
      { name: "BUFFS", path: "/team-store/buffs", count: 1 },
      { name: "CO ELITE", path: "/team-store/co-elite", count: 1 },
      { name: "Famlife Flex", path: "/team-store/famlife-flex", count: 2 },
      { name: "HYFIELDS HAWKS", path: "/team-store/hyfields-hawks", count: 12 },
      { name: "McKinley Tech", path: "/team-store/mc-kenly-tec", count: 13 },
      { name: "Potomac", path: "/team-store/protomac", count: 13 },
      { name: "Potomacs Wolverines", path: "/team-store/protomacs-wolveriens", count: 20 },
      { name: "VA Jags", path: "/team-store/va-jags", count: 14 },
      { name: "W PANTHERS", path: "/team-store/w-panthers", count: 15 }
    ]
  },
  {
    name: "SUPPORT",
    path: "/support",
    children: [
      { name: "Accessories", path: "/support/accessories" },
      { name: "Fabric", path: "/support/fabric" },
      { name: "FAQs", path: "/support/faqs" },
      { 
        name: "Manufacturing Process", 
        path: "/support/manufacturing-process",
        children: [
          { name: "Counting Cut Pieces", path: "/support/manufacturing-process/counting-cut-pieces" },
          { name: "Design Preparation", path: "/support/manufacturing-process/design-preparation" },
          { name: "Digital Printing", path: "/support/manufacturing-process/digital-printing" },
          { name: "Ironing", path: "/support/manufacturing-process/ironing" },
          { name: "Laser Cutting", path: "/support/manufacturing-process/laser-cutting" },
          { name: "QC and Packing", path: "/support/manufacturing-process/qc-and-packing" },
          { name: "Sample Room", path: "/support/manufacturing-process/sample-room" },
          { name: "Sewing", path: "/support/manufacturing-process/sewing" },
          { name: "Size Printing", path: "/support/manufacturing-process/size-printing" },
          { name: "Trimming", path: "/support/manufacturing-process/trimming" }
        ]
      },
      { name: "Resource", path: "/support/resource" },
      { name: "Size Reference", path: "/support/size-reference" }
    ]
  }
];

const Sidebar: React.FC<SidebarProps> = ({ onStockFilterChange, onColorFilterChange }) => {
  const [openPaths, setOpenPaths] = useState<string[]>([]);
  const [selectedStock, setSelectedStock] = useState<boolean | null>(null);
  const [colorFilters, setColorFilters] = useState<string[]>([]);

  const toggle = (path?: string) => {
    if (!path) return;
    setOpenPaths((prev) => (prev.includes(path) ? prev.filter((p) => p !== path) : [...prev, path]));
  };

  const handleStockChange = (value: boolean | null) => {
    const newValue = selectedStock === value ? null : value;
    setSelectedStock(newValue);
    onStockFilterChange(newValue);
  };

  const handleColorChange = (color: string) => {
    const newColors = colorFilters.includes(color) ? colorFilters.filter((c) => c !== color) : [...colorFilters, color];
    setColorFilters(newColors);
    onColorFilterChange(newColors);
  };

  const renderChildren = (children?: Category[]) => {
    if (!children || children.length === 0) return null;
    return (
      <ul className="ml-4 mt-1 space-y-1">
        {children.map((child) => (
          <li key={child.name}>
            {child.children ? (
              <div>
                <div 
                  className="flex items-center justify-between cursor-pointer" 
                  onClick={() => toggle(child.path)}
                >
                  <Link href={child.path || '#'} className="flex-1">
                    <span className="hover:text-red-500">
                      {child.name}
                      {child.count ? ` (${child.count})` : ""}
                    </span>
                  </Link>
                  <span>{openPaths.includes(child.path || '') ? <ChevronUpIcon /> : <ChevronDownIcon />}</span>
                </div>
                {openPaths.includes(child.path || '') && renderChildren(child.children)}
              </div>
            ) : (
              <Link href={child.path || '#'} className="hover:text-red-500 block">
                {child.name}
                {child.count ? ` (${child.count})` : ""}
              </Link>
            )}
          </li>
        ))}
      </ul>
    );
  };

  const renderItem = (item: Category) => {
    const hasChildren = !!(item.children && item.children.length);
    const isOpen = item.path ? openPaths.includes(item.path) : false;

    return (
      <li key={item.name} className="cursor-pointer">
        <div className="flex items-center justify-between" onClick={() => hasChildren && toggle(item.path)}>
          {item.path ? (
            <Link href={item.path} className="flex-1">
              <span className="hover:text-red-500">
                {item.name}
                {item.count ? ` (${item.count})` : ""}
              </span>
            </Link>
          ) : (
            <span className="flex-1">{item.name}</span>
          )}
          {hasChildren && <span>{isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}</span>}
        </div>

        {hasChildren && isOpen && renderChildren(item.children)}
      </li>
    );
  };

  return (
    <aside className="w-full lg:w-[350px] text-xs text-gray-800">
      <p className="font-bold text-[18px] text-white bg-[#ad2525] p-2 mb-4">CATEGORIES</p>

      <ul className="space-y-2 text-[16px]">
        {CATEGORIES.map(renderItem)}
      </ul>

      <div className="mt-6">
        <p className="font-bold text-[18px] text-white bg-[#ad2525] p-2 mb-4">FILTER BY STOCK STATUS</p>
        <label className="block text-[16px] mb-2">
          <input
            type="radio"
            name="stockStatus"
            className="mr-2 cursor-pointer"
            checked={selectedStock === true}
            onChange={() => handleStockChange(true)}
          />
          In stock
        </label>
        <label className="block text-[16px] mb-2">
          <input
            type="radio"
            name="stockStatus"
            className="mr-2 cursor-pointer"
            checked={selectedStock === false}
            onChange={() => handleStockChange(false)}
          />
          Out of stock
        </label>
        <button onClick={() => handleStockChange(null)} className="text-md cursor-pointer text-blue-700 hover:underline mt-2">
          Clear selection
        </button>
      </div>

      <div className="mt-6">
        <p className="font-bold text-[18px] text-white bg-[#ad2525] p-2 mb-4">SEARCH BY COLOR</p>
        {["Red", "Blue", "Green", "Yellow", "Black"].map((color) => (
          <label key={color} className="block capitalize text-[16px] mb-2">
            <input type="checkbox" className="mr-2 cursor-pointer" checked={colorFilters.includes(color.toLowerCase())} onChange={() => handleColorChange(color.toLowerCase())} />
            {color}
          </label>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;