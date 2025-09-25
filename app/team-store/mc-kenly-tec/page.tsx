"use client";
import Sidebar from "@/components/common/Sidebar";
import Footer from "@/components/Footer";
import ProductCardWithPrice from "@/components/ProductCardWithPrice";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Product = {
  name: string;
  imageSrc: string;
  inStock: boolean;
  colors: string[];
  price: number;
  link: string;
  popularity?: number; // 🔹 added for popularity sorting
  rating?: number;     // 🔹 added for rating sorting
  createdAt?: number;  // 🔹 added for latest sorting (timestamp)
};

const PRODUCTS: Product[] = [
  { name: "Arm Sleeves", imageSrc: "/mc-kenly-tec/arm-sleeves-3.jpg", inStock: true, colors: ["black", "red"], price: 25, link: "/product/mc-arm-sleeves", popularity: 50, rating: 4.2, createdAt: 5 },
  { name: "BACKPACK", imageSrc: "/mc-kenly-tec/BACK-PACK-3.jpg", inStock: true, colors: ["black", "red"], price: 42, link: "/product/mc-backpack", popularity: 80, rating: 4.6, createdAt: 8 },
  { name: "Beanie", imageSrc: "/mc-kenly-tec/Beanie-min3.jpg", inStock: true, colors: ["black", "red"], price: 22, link: "/product/mc-beanie", popularity: 65, rating: 4.0, createdAt: 6 },
  { name: "DUFFLE BAG", imageSrc: "/mc-kenly-tec/DUFFLE-BAG-3.jpg", inStock: true, colors: ["black", "red"], price: 52, link: "/product/mc-duffle-bag", popularity: 95, rating: 4.8, createdAt: 10 },
  { name: "Hat", imageSrc: "/mc-kenly-tec/cap-min3.jpg", inStock: true, colors: ["black", "red"], price: 27, link: "/product/mc-hat", popularity: 60, rating: 3.8, createdAt: 3 },
  { name: "Headband", imageSrc: "/mc-kenly-tec/headband-mockup-min3.jpg", inStock: true, colors: ["black", "red"], price: 15, link: "/product/mc-headband", popularity: 45, rating: 3.5, createdAt: 2 },
  { name: "Hoodie", imageSrc: "/mc-kenly-tec/long-sleeves-hoodie.jpg", inStock: true, colors: ["black", "red"], price: 45, link: "/product/mc-hoodie", popularity: 85, rating: 4.7, createdAt: 12 },
  { name: "Loose-fit Shorts", imageSrc: "/mc-kenly-tec/Loose-fit-Shorts.jpg", inStock: true, colors: ["black", "red"], price: 25, link: "/product/mc-loose-fit-shorts", popularity: 55, rating: 4.1, createdAt: 4 },
  { name: "Polo shirt", imageSrc: "/mc-kenly-tec/POLO-min3-scaled-600x600.jpg", inStock: true, colors: ["black", "red"], price: 35, link: "/product/mc-polo-shirt", popularity: 78, rating: 4.3, createdAt: 9 },
  { name: "Spats Cleat Cover", imageSrc: "/mc-kenly-tec/Spats-min3.jpg", inStock: true, colors: ["black", "red"], price: 22, link: "/product/mc-spats-cleat-cover", popularity: 40, rating: 3.7, createdAt: 1 },
  { name: "T-Shirt", imageSrc: "/mc-kenly-tec/T-SHIRT-min3.jpg", inStock: true, colors: ["black", "red"], price: 25, link: "/product/mc-t-shirt", popularity: 90, rating: 4.5, createdAt: 11 },
  { name: "Tie Headband", imageSrc: "/mc-kenly-tec/Tie-Headband.jpg", inStock: true, colors: ["black", "red"], price: 20, link: "/product/mc-tie-headband", popularity: 52, rating: 3.9, createdAt: 7 },
  { name: "Track-suite / Sweatsuite", imageSrc: "/mc-kenly-tec/Track-suit-min3.jpg", inStock: true, colors: ["black", "red"], price: 70, link: "/product/mc-track-suite-sweatsuite", popularity: 99, rating: 4.9, createdAt: 13 },
];

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const [stockFilter, setStockFilter] = useState<boolean | null>(null);
  const [colorFilters, setColorFilters] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState("default");

  // Filter
  const filteredProducts = PRODUCTS.filter((product) => {
    if (stockFilter !== null && product.inStock !== stockFilter) return false;
    if (colorFilters.length > 0 && !colorFilters.some((color) => product.colors.includes(color))) return false;
    return true;
  });

  // Sort
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "price-low-high") return a.price - b.price;
    if (sortOption === "price-high-low") return b.price - a.price;
    if (sortOption === "popularity") return (b.popularity ?? 0) - (a.popularity ?? 0);
    if (sortOption === "rating") return (b.rating ?? 0) - (a.rating ?? 0);
    if (sortOption === "latest") return (b.createdAt ?? 0) - (a.createdAt ?? 0);
    return 0;
  });

  // Pagination
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Reset page on filter change
  useEffect(() => {
    setCurrentPage(1);
  }, [stockFilter, colorFilters, sortOption]);

  return (
    <div>
      <div className="min-h-screen px-6 py-[190px]">
        <h1 className="text-[20px] text-black mb-2">
          <Link href="/" className="hover:text-red-500">Home</Link> |{" "}
          <Link href="/team-wear" className="hover:text-red-500">TEAM WEAR</Link> |{" "}
          <span className="text-gray-700">McKinley Tech</span>
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <Sidebar onStockFilterChange={setStockFilter} onColorFilterChange={setColorFilters} />
          <div className="w-full">
            <h2 className="text-[26px] font-medium mb-2">McKinley Tech</h2>

            <div className="flex justify-between items-center mb-4">
              <p className="text-2xl">
                {filteredProducts.length === 0 ? (
                  <span className="font-semibold italic">No products were found matching your selection.</span>
                ) : (
                  <>Showing {indexOfFirstProduct + 1}–{Math.min(indexOfLastProduct, filteredProducts.length)} of {filteredProducts.length} results</>
                )}
              </p>
              {filteredProducts.length > 0 && (
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="border border-gray-400 rounded p-1 w-[15%] text-sm text-left cursor-pointer"
                >
                  <option value="default">Default sorting</option>
                  <option value="popularity">Sort by popularity</option>
                  <option value="rating">Sort by average rating</option>
                  <option value="latest">Sort by latest</option>
                  <option value="price-low-high">Sort by price: low to high</option>
                  <option value="price-high-low">Sort by price: high to low</option>
                </select>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {currentProducts.map((product) => (
                <ProductCardWithPrice key={product.name} {...product} />
              ))}
            </div>

            <div className="flex justify-center mt-6 text-sm space-x-3">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`px-3 py-1 cursor-pointer border rounded ${
                    currentPage === index + 1 ? "bg-red-500 text-white" : "hover:text-red-600"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
