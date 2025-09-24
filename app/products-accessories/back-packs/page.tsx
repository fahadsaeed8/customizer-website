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
  popularity: number;
  rating: number;
  latest: number;
  price: number; // store as number, not string
};

const PRODUCTS: Product[] = [
  {
    name: "A Town Backpack",
    imageSrc: "/accessories/A-Town-Backpack.jpg",
    inStock: true,
    colors: ["black", "red"],
    popularity: 80,
    rating: 4.5,
    latest: 20240101,
    price: 39.99,
  },
  {
    name: "Bagpack",
    imageSrc: "/accessories/Bagpack.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 60,
    rating: 4.2,
    latest: 20240210,
    price: 34.99,
  },
  {
    name: "Boom Bagpack",
    imageSrc: "/accessories/Boom-Bagpack.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 75,
    rating: 4.7,
    latest: 20240120,
    price: 42.0,
  },
  {
    name: "Crusrders Bagpack",
    imageSrc: "/accessories/Crusrders-Bagpack.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 50,
    rating: 4.0,
    latest: 20231215,
    price: 29.99,
  },
  {
    name: "DM Bagpack",
    imageSrc: "/accessories/DM-Bagpack.jpg",
    inStock: true,
    colors: ["black", "red"],
    popularity: 90,
    rating: 4.9,
    latest: 20240305,
    price: 44.99,
  },
  {
    name: "Kap City Bagpack",
    imageSrc: "/accessories/Kap-City-Bagpack.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 65,
    rating: 4.3,
    latest: 20240115,
    price: 37.5,
  },
  {
    name: "Miami Bagpack",
    imageSrc: "/accessories/Miami-Bagpack.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 70,
    rating: 4.1,
    latest: 20231230,
    price: 35.0,
  },
  {
    name: "Seminols Bagpack",
    imageSrc: "/accessories/Seminols-Bagpack.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 55,
    rating: 3.9,
    latest: 20231120,
    price: 32.0,
  },
  {
    name: "Terror Squad Bagpack",
    imageSrc: "/accessories/Terror-Squad-Bagpack.jpg",
    inStock: true,
    colors: ["black", "red"],
    popularity: 95,
    rating: 5.0,
    latest: 20240401,
    price: 49.99,
  },
  {
    name: "Titans Bagpack",
    imageSrc: "/accessories/Titans-Bagpack.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 85,
    rating: 4.6,
    latest: 20240220,
    price: 41.99,
  },
  {
    name: "Wildcats Bagpack",
    imageSrc: "/accessories/Wildcats-Bagpack.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 68,
    rating: 4.4,
    latest: 20240125,
    price: 36.5,
  },
];

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const [stockFilter, setStockFilter] = useState<boolean | null>(null);
  const [colorFilters, setColorFilters] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<string>("Default sorting");

  // Filtering
  const filteredProducts = PRODUCTS.filter((product) => {
    if (stockFilter !== null && product.inStock !== stockFilter) return false;
    if (colorFilters.length > 0 && !colorFilters.some((c) => product.colors.includes(c))) {
      return false;
    }
    return true;
  });

  // Sorting
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "Sort by popularity") return b.popularity - a.popularity;
    if (sortOption === "Sort by average rating") return b.rating - a.rating;
    if (sortOption === "Sort by latest") return b.latest - a.latest;
    if (sortOption === "Sort by price: low to high") return a.price - b.price;
    if (sortOption === "Sort by price: high to low") return b.price - a.price;
    return 0; // Default sorting
  });

  // Pagination
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Reset page on filter/sort change
  useEffect(() => {
    setCurrentPage(1);
  }, [stockFilter, colorFilters, sortOption]);

  return (
    <div>
      <div className="min-h-screen px-6 py-[190px]">
        {/* Breadcrumb */}
        <h1 className="text-[20px] text-black mb-2">
          <Link href="/" className="hover:text-red-500">Home</Link> |{" "}
          <Link href="/team-wear" className="hover:text-red-500">TEAM WEAR</Link> |{" "}
          <span className="text-gray-700">7v7 UNIFORM</span>
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <Sidebar onStockFilterChange={setStockFilter} onColorFilterChange={setColorFilters} />

          {/* Main Content */}
          <div className="w-full">
            <h2 className="text-[26px] font-medium mb-2">7v7 UNIFORM</h2>

            {/* Results and Sorting */}
            <div className="flex justify-between items-center mb-4">
              <p className="text-2xl">
                {sortedProducts.length === 0 ? (
                  <span className="font-semibold italic text-lg text-gray-500">No products were found matching your selection.</span>
                ) : (
                  <>Showing {indexOfFirstProduct + 1}–{Math.min(indexOfLastProduct, sortedProducts.length)} of {sortedProducts.length} results</>
                )}
              </p>

              {sortedProducts.length > 0 && (
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="border border-gray-400 rounded p-1 w-[15%] text-sm text-left cursor-pointer"
                >
                  <option>Default sorting</option>
                  <option>Sort by popularity</option>
                  <option>Sort by average rating</option>
                  <option>Sort by latest</option>
                  <option>Sort by price: low to high</option>
                  <option>Sort by price: high to low</option>
                </select>
              )}
            </div>

            {/* Products */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {currentProducts.map((product) => (
                <ProductCardWithPrice key={product.name} {...product} />
              ))}
            </div>

            {/* Pagination */}
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
