"use client";
import Sidebar from "@/components/common/Sidebar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
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
    name: "Barclays Soccer Uniforms",
    imageSrc: "/american-football/SOCCER-1.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 8,
    rating: 4.2,
    latest: 202405,
    price: 59,
  },
  {
    name: "Cowpens Soccer Uniforms",
    imageSrc: "/american-football/SOCCER-2.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 10,
    rating: 4.5,
    latest: 202406,
    price: 65,
  },
  {
    name: "Hook Soccer FC",
    imageSrc: "/american-football/SOCCER-3.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 6,
    rating: 3.9,
    latest: 202404,
    price: 55,
  },
  {
    name: "Park City Soccer Club",
    imageSrc: "/american-football/SOCCER-4.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 12,
    rating: 4.7,
    latest: 202407,
    price: 72,
  },
  {
    name: "Soccer United",
    imageSrc: "/american-football/SOCCER-5.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 5,
    rating: 3.5,
    latest: 202403,
    price: 48,
  },
  {
    name: "Soccer Legends",
    imageSrc: "/american-football/SOCCER-6.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 9,
    rating: 4.4,
    latest: 202405,
    price: 69,
  },
  {
    name: "Soccer Stars",
    imageSrc: "/american-football/SOCCER-7.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 7,
    rating: 3.8,
    latest: 202402,
    price: 52,
  },
  {
    name: "Soccer Champions",
    imageSrc: "/american-football/SOCCER-8.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 11,
    rating: 4.6,
    latest: 202406,
    price: 75,
  },
];

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const [stockFilter, setStockFilter] = useState<boolean | null>(null);
  const [colorFilters, setColorFilters] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState("default");

  const filteredProducts = PRODUCTS.filter((product) => {
    if (stockFilter !== null && product.inStock !== stockFilter) {
      return false;
    }
    if (colorFilters.length > 0) {
      if (!colorFilters.some((color) => product.colors.includes(color))) {
        return false;
      }
    }
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "popularity":
        return b.popularity - a.popularity;
      case "rating":
        return b.rating - a.rating;
      case "latest":
        return b.latest - a.latest;
      case "priceLow":
        return a.price - b.price;
      case "priceHigh":
        return b.price - a.price;
      default:
        return 0;
    }
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
          | <span className="text-gray-700">SOCCER UNIFORM</span>
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <Sidebar
            onStockFilterChange={setStockFilter}
            onColorFilterChange={setColorFilters}
          />
          <div className="w-full">
            <h2 className="text-[26px] font-medium mb-2">SOCCER UNIFORM</h2>

            <div className="flex justify-between items-center mb-4">
              <p className="text-2xl">
                {sortedProducts.length === 0 ? (
                  <span className="font-semibold italic">
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
                  className="border border-gray-400 rounded p-1 w-[15%] text-sm text-left cursor-pointer"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option value="default">Default sorting</option>
                  <option value="popularity">Sort by popularity</option>
                  <option value="rating">Sort by average rating</option>
                  <option value="latest">Sort by latest</option>
                  <option value="priceLow">Sort by price: low to high</option>
                  <option value="priceHigh">Sort by price: high to low</option>
                </select>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {currentProducts.map((product) => (
                <ProductCard key={product.name} {...product} />
              ))}
            </div>

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
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
