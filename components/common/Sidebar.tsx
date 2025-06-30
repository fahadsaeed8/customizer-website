import React, { useState } from "react";

const ChevronDownIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M7 10l5 5 5-5z" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M7 14l5-5 5 5z" />
  </svg>
);

type MenuKey = "accessories" | "clothing" | "fitness" | "teamwear";
type SidebarProps = {
  onStockFilterChange: (inStock: boolean | null) => void;
  onColorFilterChange: (colors: string[]) => void;
};

type OpenMenus = {
  [key in MenuKey]: boolean;
};

const Sidebar: React.FC<SidebarProps> = ({
  onStockFilterChange,
  onColorFilterChange,
}) => {
  const [openMenus, setOpenMenus] = useState<OpenMenus>({
    accessories: false,
    clothing: false,
    fitness: false,
    teamwear: false,
  });

  const [selectedStock, setSelectedStock] = useState<boolean | null>(null);
  const [colorFilters, setColorFilters] = useState<string[]>([]);

  const handleStockChange = (value: boolean | null) => {
    const newValue = selectedStock === value ? null : value;
    setSelectedStock(newValue);
    onStockFilterChange(newValue);
  };

  const handleColorChange = (color: string) => {
    const newColors = colorFilters.includes(color)
      ? colorFilters.filter((c) => c !== color)
      : [...colorFilters, color];

    setColorFilters(newColors);
    onColorFilterChange(newColors);
  };

  const toggleMenu = (menu: MenuKey): void => {
    setOpenMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <aside className="w-full lg:w-[350px] text-xs text-gray-800">
      <p className="font-bold text-[18px] text-white bg-[#ad2525] p-2 mb-4">
        CATEGORIES
      </p>

      <ul className="space-y-2 text-[16px]">
        <li className="cursor-pointer hover:text-red-500">CO ELITE (1)</li>
        <li className="cursor-pointer hover:text-red-500">AAS EAGLES (22)</li>

        <li
          className="flex items-center justify-between cursor-pointer"
          onClick={() => toggleMenu("accessories")}
        >
          <span>ACCESSORIES (27)</span>
          {openMenus.accessories ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </li>
        {openMenus.accessories && (
          <ul className="ml-4 mt-1 space-y-1">
            <li className="hover:text-red-500 cursor-pointer">Gloves</li>
            <li className="hover:text-red-500 cursor-pointer">Bags</li>
          </ul>
        )}

        <li className="cursor-pointer hover:text-red-500">AN–Rams (27)</li>
        <li className="cursor-pointer hover:text-red-500">BAGS (8)</li>
        <li className="cursor-pointer hover:text-red-500">BUFFS (1)</li>

        <li
          className="flex items-center justify-between cursor-pointer"
          onClick={() => toggleMenu("clothing")}
        >
          <span>CLOTHING & APPAREL (13)</span>
          {openMenus.clothing ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </li>
        {openMenus.clothing && (
          <ul className="ml-4 mt-1 space-y-1">
            <li className="hover:text-red-500 cursor-pointer">Jackets</li>
            <li className="hover:text-red-500 cursor-pointer">Pants</li>
          </ul>
        )}

        <li className="cursor-pointer hover:text-red-500">Famlife Flex (2)</li>

        <li
          className="flex items-center justify-between cursor-pointer"
          onClick={() => toggleMenu("fitness")}
        >
          <span>FITNESS WEAR (1)</span>
          {openMenus.fitness ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </li>
        {openMenus.fitness && (
          <ul className="ml-4 mt-1 space-y-1">
            <li className="hover:text-red-500 cursor-pointer">Gym Tops</li>
          </ul>
        )}

        <li className="cursor-pointer hover:text-red-500">
          HYFIELDS HAWKS (12)
        </li>
        <li className="cursor-pointer hover:text-red-500">
          McKinley Tech (13)
        </li>
        <li className="cursor-pointer hover:text-red-500">Potomac (13)</li>
        <li className="cursor-pointer hover:text-red-500">
          Potomacs Wolverines (20)
        </li>

        <li
          className="flex items-center justify-between cursor-pointer"
          onClick={() => toggleMenu("teamwear")}
        >
          <span>TEAM WEAR (30)</span>
          {openMenus.teamwear ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </li>
        {openMenus.teamwear && (
          <ul className="ml-4 mt-1 space-y-1">
            <li className="hover:text-red-500 cursor-pointer">
              American Football
            </li>
            <li className="hover:text-red-500 cursor-pointer">Soccer</li>
            <li className="hover:text-red-500 cursor-pointer">Rugby</li>
          </ul>
        )}

        <li className="cursor-pointer hover:text-red-500">VA Jags (14)</li>
        <li className="cursor-pointer hover:text-red-500">W PANTHERS (15)</li>
      </ul>
      {/* STOCK FILTER */}
      <div className="mt-6">
        <p className="font-bold text-[18px] text-white bg-[#ad2525] p-2 mb-4">
          FILTER BY STOCK STATUS
        </p>
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
        <button
          onClick={() => handleStockChange(null)}
          className="text-md cursor-pointer text-blue-700 hover:underline mt-2"
        >
          Clear selection
        </button>
      </div>

      {/* COLOR FILTER */}
      <div className="mt-6">
        <p className="font-bold text-[18px] text-white bg-[#ad2525] p-2 mb-4">
          SEARCH BY COLOR
        </p>
        {["red", "blue", "green", "yellow", "black"].map((color) => (
          <label key={color} className="block capitalize text-[16px] mb-2">
            <input
              type="checkbox"
              className="mr-2 cursor-pointer"
              checked={colorFilters.includes(color)}
              onChange={() => handleColorChange(color)}
            />
            {color}
          </label>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
