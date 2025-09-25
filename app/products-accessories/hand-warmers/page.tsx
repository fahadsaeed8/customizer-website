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
  price: number;
};

const PRODUCTS: Product[] = [
  {
    name: "BLACKHAWKS",
    imageSrc: "/american-football/1.jpg",
    inStock: true,
    colors: ["black", "red"],
    popularity: 85,
    rating: 4.3,
    latest: 202402,
    price: 120.5,
  },
  {
    name: "BRONCOS",
    imageSrc: "/american-football/2.jpg",
    inStock: true,
    colors: ["blue", "white"],
    popularity: 75,
    rating: 4.0,
    latest: 202401,
    price: 110.0,
  },
  {
    name: "Buccaneers Football Uniform",
    imageSrc: "/american-football/3.png",
    inStock: true,
    colors: ["red", "black"],
    popularity: 95,
    rating: 4.6,
    latest: 202403,
    price: 140.99,
  },
  {
    name: "CHIEFS",
    imageSrc: "/american-football/4.jpg",
    inStock: true,
    colors: ["yellow", "red"],
    popularity: 70,
    rating: 3.9,
    latest: 202310,
    price: 100.25,
  },
  {
    name: "Cobras Football Uniform",
    imageSrc: "/american-football/5.png",
    inStock: true,
    colors: ["green", "black"],
    popularity: 80,
    rating: 4.1,
    latest: 202311,
    price: 115.75,
  },
  {
    name: "DUCKS",
    imageSrc: "/american-football/6.jpg",
    inStock: true,
    colors: ["yellow", "black"],
    popularity: 65,
    rating: 3.8,
    latest: 202309,
    price: 95.0,
  },
  {
    name: "Eagles Football Uniform",
    imageSrc: "/american-football/7.png",
    inStock: true,
    colors: ["green", "white"],
    popularity: 88,
    rating: 4.5,
    latest: 202402,
    price: 130.49,
  },
  {
    name: "FALCONS",
    imageSrc: "/american-football/8.jpg",
    inStock: true,
    colors: ["black", "red"],
    popularity: 92,
    rating: 4.7,
    latest: 202401,
    price: 150.99,
  },
  {
    name: "Hornets Football Uniform",
    imageSrc: "/american-football/9.png",
    inStock: true,
    colors: ["yellow", "black"],
    popularity: 60,
    rating: 3.7,
    latest: 202308,
    price: 89.99,
  },
  {
    name: "Hurricanes Football Uniform",
    imageSrc: "/american-football/10.png",
    inStock: true,
    colors: ["orange", "white"],
    popularity: 77,
    rating: 4.0,
    latest: 202312,
    price: 112.5,
  },
  {
    name: "Jaguars Football Uniform",
    imageSrc: "/american-football/11.png",
    inStock: true,
    colors: ["teal", "black"],
    popularity: 85,
    rating: 4.3,
    latest: 202402,
    price: 125.0,
  },
  {
    name: "KNIGHTS",
    imageSrc: "/american-football/12.jpg",
    inStock: true,
    colors: ["black", "white"],
    popularity: 72,
    rating: 4.1,
    latest: 202311,
    price: 105.0,
  },
  // ... you can continue the same pattern for the rest of the products
];

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const [stockFilter, setStockFilter] = useState<boolean | null>(null);
  const [colorFilters, setColorFilters] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<string>("Default sorting");

  const filteredProducts = PRODUCTS.filter((product) => {
    if (stockFilter !== null && product.inStock !== stockFilter) return false;
    if (
      colorFilters.length > 0 &&
      !colorFilters.some((c) => product.colors.includes(c))
    ) {
      return false;
    }
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "Sort by popularity") return b.popularity - a.popularity;
    if (sortOption === "Sort by average rating") return b.rating - a.rating;
    if (sortOption === "Sort by latest") return b.latest - a.latest;
    if (sortOption === "Sort by price: low to high") return a.price - b.price;
    if (sortOption === "Sort by price: high to low") return b.price - a.price;
    return 0;
  });

  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [stockFilter, colorFilters, sortOption]);

  return (
    <div>
      <div className="min-h-screen px-6 py-[190px]">
        <h1 className="text-[20px] text-black mb-2">
          <Link href="/" className="hover:text-red-500">
            Home
          </Link>{" "}
          |{" "}
          <Link href="/team-wear" className="hover:text-red-500">
            TEAM WEAR
          </Link>{" "}
          | <span className="text-gray-700">HAND WARMERS</span>
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <Sidebar
            onStockFilterChange={setStockFilter}
            onColorFilterChange={setColorFilters}
          />
          <div className="w-full">
            <h2 className="text-[26px] font-medium mb-2">HAND WARMERS</h2>

            <div className="flex justify-between items-center mb-4">
              <p className="text-2xl">
                {sortedProducts.length === 0 ? (
                  <span className="font-semibold italic text-lg text-gray-500">
                    No products were found matching your selection.
                  </span>
                ) : (
                  <>
                    Showing {indexOfFirstProduct + 1}–
                    {Math.min(indexOfLastProduct, sortedProducts.length)} of{" "}
                    {sortedProducts.length} results
                  </>
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

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {currentProducts.map((product) => (
                <ProductCardWithPrice key={product.name} {...product} />
              ))}
            </div>

            {sortedProducts.length > productsPerPage && (
              <div className="flex justify-center mt-6 text-sm space-x-3">
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`px-3 py-1 cursor-pointer border rounded ${
                      currentPage === index + 1
                        ? "bg-red-500 text-white"
                        : "hover:text-red-600"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
