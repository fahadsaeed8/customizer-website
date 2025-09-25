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
    name: "A.M.E 7v7 Uniform",
    imageSrc: "/7v7/1.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 80,
    rating: 4.5,
    latest: 10,
    price: 120,
  },
  {
    name: "Aug 7v7 Uniform",
    imageSrc: "/7v7/2.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 60,
    rating: 4.0,
    latest: 9,
    price: 100,
  },
  {
    name: "Boom 7v7 Uniform",
    imageSrc: "/7v7/3.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 95,
    rating: 4.8,
    latest: 12,
    price: 150,
  },
  {
    name: "Crusaders 7v7 Uniform",
    imageSrc: "/7v7/4.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 50,
    rating: 3.9,
    latest: 5,
    price: 90,
  },
  {
    name: "Dm 7v7 Uniform",
    imageSrc: "/7v7/5.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 70,
    rating: 4.3,
    latest: 7,
    price: 110,
  },
  {
    name: "Egals 35 7v7 Uniform",
    imageSrc: "/7v7/6.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 40,
    rating: 3.7,
    latest: 3,
    price: 95,
  },
  {
    name: "Future stars 7v7 Uniform",
    imageSrc: "/7v7/7.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 88,
    rating: 4.6,
    latest: 11,
    price: 140,
  },
  {
    name: "Gatros 7v7 Uniform",
    imageSrc: "/7v7/8.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 30,
    rating: 3.5,
    latest: 2,
    price: 80,
  },
  {
    name: "Hurricanes 7v7 Uniform",
    imageSrc: "/7v7/9.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 78,
    rating: 4.4,
    latest: 8,
    price: 125,
  },
  {
    name: "I G E 7v7 Uniform",
    imageSrc: "/7v7/10.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 55,
    rating: 4.1,
    latest: 4,
    price: 105,
  },
  {
    name: "Miami 7v7 Uniform",
    imageSrc: "/7v7/11.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 90,
    rating: 4.7,
    latest: 13,
    price: 160,
  },
  {
    name: "Seminoles 7v7 Uniform",
    imageSrc: "/7v7/12.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 45,
    rating: 3.8,
    latest: 6,
    price: 98,
  },
  {
    name: "Tarror Squad 7v7 Uniform",
    imageSrc: "/7v7/13.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 68,
    rating: 4.2,
    latest: 9,
    price: 115,
  },
  {
    name: "U-Elite 7v7 Uniform",
    imageSrc: "/7v7/14.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 82,
    rating: 4.6,
    latest: 12,
    price: 135,
  },
  {
    name: "Wr 7v7 Uniform",
    imageSrc: "/7v7/15.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 35,
    rating: 3.6,
    latest: 1,
    price: 85,
  },
];

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const [stockFilter, setStockFilter] = useState<boolean | null>(null);
  const [colorFilters, setColorFilters] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<string>("default");

  // Filtering
  let filteredProducts = PRODUCTS.filter((product) => {
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

  // Sorting
  if (sortOption === "popularity") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => b.popularity - a.popularity
    );
  } else if (sortOption === "rating") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.rating - a.rating);
  } else if (sortOption === "latest") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.latest - a.latest);
  } else if (sortOption === "low-to-high") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortOption === "high-to-low") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortOption === "default") {
    filteredProducts = [...PRODUCTS]; // reset
  }

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
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
          <Link href="/" className="hover:text-red-500">Home</Link> |{" "}
          <Link href="/team-wear" className="hover:text-red-500">TEAM WEAR</Link> |{" "}
          <span className="text-gray-700">7v7 UNIFORM</span>
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <Sidebar
            onStockFilterChange={setStockFilter}
            onColorFilterChange={setColorFilters}
          />
          <div className="w-full">
            <h2 className="text-[26px] font-medium mb-2">7v7 UNIFORM</h2>

            <div className="flex justify-between items-center mb-4">
              <p className="text-2xl">
                {filteredProducts.length === 0 ? (
                  <span className="font-semibold italic">
                    No products were found matching your selection.
                  </span>
                ) : (
                  <>
                    Showing {indexOfFirstProduct + 1}–
                    {Math.min(indexOfLastProduct, filteredProducts.length)} of{" "}
                    {filteredProducts.length} results
                  </>
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
                  <option value="low-to-high">Sort by price: low to high</option>
                  <option value="high-to-low">Sort by price: high to low</option>
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
