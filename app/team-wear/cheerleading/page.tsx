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
    name: "BLACKHAWKS",
    imageSrc: "/american-football/1.jpg",
    inStock: true,
    colors: ["black", "red"],
    popularity: 80,
    rating: 4.5,
    latest: 202401,
    price: 60,
  },
  {
    name: "BRONCOS",
    imageSrc: "/american-football/2.jpg",
    inStock: true,
    colors: ["black", "red"],
    popularity: 85,
    rating: 4.6,
    latest: 202402,
    price: 70,
  },
  {
    name: "Buccaneers Football Uniform",
    imageSrc: "/american-football/3.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 75,
    rating: 4.3,
    latest: 202310,
    price: 55,
  },
  {
    name: "CHIEFS",
    imageSrc: "/american-football/4.jpg",
    inStock: true,
    colors: ["black", "red"],
    popularity: 90,
    rating: 4.7,
    latest: 202311,
    price: 78,
  },
  {
    name: "Cobras Football Uniform",
    imageSrc: "/american-football/5.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 70,
    rating: 4.2,
    latest: 202309,
    price: 50,
  },
  {
    name: "DUCKS",
    imageSrc: "/american-football/6.jpg",
    inStock: true,
    colors: ["black", "red"],
    popularity: 82,
    rating: 4.4,
    latest: 202312,
    price: 68,
  },
  {
    name: "Eagles Football Uniform",
    imageSrc: "/american-football/7.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 78,
    rating: 4.5,
    latest: 202401,
    price: 72,
  },
  {
    name: "FALCONS",
    imageSrc: "/american-football/8.jpg",
    inStock: true,
    colors: ["black", "red"],
    popularity: 88,
    rating: 4.8,
    latest: 202402,
    price: 80,
  },
  {
    name: "Hornets Football Uniform",
    imageSrc: "/american-football/9.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 65,
    rating: 4.1,
    latest: 202308,
    price: 48,
  },
  {
    name: "Hurricanes Football Uniform",
    imageSrc: "/american-football/10.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 92,
    rating: 4.9,
    latest: 202403,
    price: 90,
  },
  {
    name: "Jaguars Football Uniform",
    imageSrc: "/american-football/11.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 72,
    rating: 4.3,
    latest: 202310,
    price: 58,
  },
  {
    name: "KNIGHTS",
    imageSrc: "/american-football/12.jpg",
    inStock: true,
    colors: ["black", "red"],
    popularity: 83,
    rating: 4.6,
    latest: 202309,
    price: 76,
  },
  {
    name: "Packers Football Uniform",
    imageSrc: "/american-football/13.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 79,
    rating: 4.4,
    latest: 202311,
    price: 66,
  },
  {
    name: "PANTHERS",
    imageSrc: "/american-football/14.jpg",
    inStock: true,
    colors: ["black", "red"],
    popularity: 86,
    rating: 4.7,
    latest: 202401,
    price: 82,
  },
  {
    name: "Panthers Football Uniform",
    imageSrc: "/american-football/15.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 74,
    rating: 4.2,
    latest: 202307,
    price: 54,
  },
  {
    name: "PREDATORS",
    imageSrc: "/american-football/16.jpg",
    inStock: true,
    colors: ["black", "red"],
    popularity: 81,
    rating: 4.5,
    latest: 202312,
    price: 69,
  },
  {
    name: "RAMS",
    imageSrc: "/american-football/17.jpg",
    inStock: true,
    colors: ["black", "red"],
    popularity: 87,
    rating: 4.8,
    latest: 202402,
    price: 84,
  },
  {
    name: "Ravens Football Uniform",
    imageSrc: "/american-football/18.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 73,
    rating: 4.3,
    latest: 202310,
    price: 59,
  },
  {
    name: "Rhinos Football Uniform",
    imageSrc: "/american-football/19.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 77,
    rating: 4.4,
    latest: 202311,
    price: 64,
  },
  {
    name: "SAINTS",
    imageSrc: "/american-football/20.jpg",
    inStock: true,
    colors: ["black", "red"],
    popularity: 89,
    rating: 4.7,
    latest: 202401,
    price: 85,
  },
  {
    name: "Seahawks Football Uniform",
    imageSrc: "/american-football/21.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 91,
    rating: 4.9,
    latest: 202403,
    price: 92,
  },
  {
    name: "SEMINOLES",
    imageSrc: "/american-football/22.jpg",
    inStock: true,
    colors: ["black", "red"],
    popularity: 84,
    rating: 4.6,
    latest: 202309,
    price: 74,
  },
  {
    name: "Steelers Football Uniform",
    imageSrc: "/american-football/23.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 76,
    rating: 4.3,
    latest: 202308,
    price: 57,
  },
  {
    name: "TAR HEELS",
    imageSrc: "/american-football/24.jpg",
    inStock: true,
    colors: ["black", "red"],
    popularity: 82,
    rating: 4.5,
    latest: 202310,
    price: 68,
  },
  {
    name: "Texans Football Uniform",
    imageSrc: "/american-football/25.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 88,
    rating: 4.7,
    latest: 202311,
    price: 79,
  },
  {
    name: "Timber-wolef Football Uniform",
    imageSrc: "/american-football/26.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 69,
    rating: 4.2,
    latest: 202307,
    price: 53,
  },
  {
    name: "Titans Football Uniform",
    imageSrc: "/american-football/27.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 93,
    rating: 4.9,
    latest: 202403,
    price: 95,
  },
  {
    name: "Wolves Football Uniform",
    imageSrc: "/american-football/28.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 71,
    rating: 4.3,
    latest: 202309,
    price: 62,
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
        return (a.price ?? 0) - (b.price ?? 0);
      case "Sort by price: high to low":
        return (b.price ?? 0) - (a.price ?? 0);
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
          | <span className="text-gray-700">CHEERLEADING</span>
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <Sidebar onStockFilterChange={setStockFilter} onColorFilterChange={setColorFilters} />
          <div className="w-full">
            <h2 className="text-[26px] font-medium mb-2">CHEERLEADING</h2>

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

            {sortedProducts.length > 0 && (
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
