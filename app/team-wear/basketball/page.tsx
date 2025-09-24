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
  price: number; // ✅ price is now required
};

const PRODUCTS: Product[] = [
  {
    name: "Beauties Basketball Uniform",
    imageSrc: "/basket/1.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 85,
    rating: 4.5,
    latest: 202401,
    price: 60,
  },
  {
    name: "Bucks Basketball Uniform",
    imageSrc: "/basket/2.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 90,
    rating: 4.8,
    latest: 202402,
    price: 75,
  },
  {
    name: "Buccaneers Football Uniform",
    imageSrc: "/basket/3.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 70,
    rating: 4.2,
    latest: 202310,
    price: 55,
  },
  {
    name: "Cavalers Basketball Uniform",
    imageSrc: "/basket/4.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 88,
    rating: 4.7,
    latest: 202308,
    price: 80,
  },
  {
    name: "Devils Basketball Uniform",
    imageSrc: "/basket/5.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 75,
    rating: 4.3,
    latest: 202401,
    price: 68,
  },
  {
    name: "Grizzlies Basketball Uniform",
    imageSrc: "/basket/6.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 95,
    rating: 4.9,
    latest: 202402,
    price: 82,
  },
  {
    name: "Heat Basketball Uniform",
    imageSrc: "/basket/7.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 65,
    rating: 4.1,
    latest: 202307,
    price: 50,
  },
  {
    name: "Hollywood Hoops Basketball Uniform",
    imageSrc: "/basket/8.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 85,
    rating: 4.6,
    latest: 202309,
    price: 72,
  },
  {
    name: "Lakers Basketball Uniform",
    imageSrc: "/basket/9.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 92,
    rating: 4.9,
    latest: 202403,
    price: 90,
  },
  {
    name: "Miami Basketball Uniform",
    imageSrc: "/basket/10.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 76,
    rating: 4.2,
    latest: 202310,
    price: 65,
  },
  {
    name: "Mp Al Basketball Uniform",
    imageSrc: "/basket/11.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 80,
    rating: 4.4,
    latest: 202312,
    price: 70,
  },
  {
    name: "Raptors Basketball Uniform",
    imageSrc: "/basket/12.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 87,
    rating: 4.6,
    latest: 202401,
    price: 78,
  },
  {
    name: "Spartans Basketball Uniform",
    imageSrc: "/basket/13.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 72,
    rating: 4.3,
    latest: 202309,
    price: 58,
  },
  {
    name: "Storm Basketball Uniform",
    imageSrc: "/basket/14.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 83,
    rating: 4.5,
    latest: 202311,
    price: 74,
  },
  {
    name: "Surge Basketball Uniform",
    imageSrc: "/basket/15.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 68,
    rating: 4.0,
    latest: 202307,
    price: 52,
  },
  {
    name: "Trojans Basketball Uniform",
    imageSrc: "/basket/15.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 91,
    rating: 4.8,
    latest: 202403,
    price: 88,
  },
];

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const [stockFilter, setStockFilter] = useState<boolean | null>(null);
  const [colorFilters, setColorFilters] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState("Default sorting");

  const filteredProducts = PRODUCTS.filter((product) => {
    if (stockFilter !== null && product.inStock !== stockFilter) return false;
    if (colorFilters.length > 0 && !colorFilters.some((c) => product.colors.includes(c))) {
      return false;
    }
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "Sort by popularity":
        return b.popularity - a.popularity;
      case "Sort by average rating":
        return b.rating - a.rating;
      case "Sort by latest":
        return b.latest - a.latest;
      case "Sort by price: low to high":
        return a.price - b.price; // ✅ price sort
      case "Sort by price: high to low":
        return b.price - a.price; // ✅ price sort
      default:
        return 0;
    }
  });

  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

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
          | <span className="text-gray-700">BASKETBALL</span>
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <Sidebar onStockFilterChange={setStockFilter} onColorFilterChange={setColorFilters} />
          <div className="w-full">
            <h2 className="text-[26px] font-medium mb-2">BASKETBALL</h2>

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

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
