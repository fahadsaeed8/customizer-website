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
};

const PRODUCTS: Product[] = [
  {
    name: "BLACKHAWKS",
    imageSrc: "/american-football/1.jpg",
    inStock: true,
    colors: ["black", "red"],
    popularity: 10,
    rating: 4,
    latest: 1,
  },
  {
    name: "BRONCOS",
    imageSrc: "/american-football/2.jpg",
    inStock: true,
    colors: ["black", "red"],
    popularity: 9,
    rating: 5,
    latest: 2,
  },
  {
    name: "Buccaneers Football Uniform",
    imageSrc: "/american-football/3.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 6,
    rating: 3,
    latest: 3,
  },
  {
    name: "CHIEFS",
    imageSrc: "/american-football/4.jpg",
    inStock: true,
    colors: ["black", "red"],
    popularity: 8,
    rating: 4,
    latest: 4,
  },
  {
    name: "Cobras Football Uniform",
    imageSrc: "/american-football/5.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 7,
    rating: 5,
    latest: 5,
  },
  {
    name: "DUCKS",
    imageSrc: "/american-football/6.jpg",
    inStock: true,
    colors: ["black", "red"],
    popularity: 5,
    rating: 2,
    latest: 6,
  },
  {
    name: "Eagles Football Uniform",
    imageSrc: "/american-football/7.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 4,
    rating: 3,
    latest: 7,
  },
  {
    name: "FALCONS",
    imageSrc: "/american-football/8.jpg",
    inStock: true,
    colors: ["black", "red"],
    popularity: 7,
    rating: 4,
    latest: 8,
  },
  {
    name: "Hornets Football Uniform",
    imageSrc: "/american-football/9.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 6,
    rating: 3,
    latest: 9,
  },
  {
    name: "Hurricanes Football Uniform",
    imageSrc: "/american-football/10.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 9,
    rating: 5,
    latest: 10,
  },
  {
    name: "Jaguars Football Uniform",
    imageSrc: "/american-football/11.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 5,
    rating: 2,
    latest: 11,
  },
  {
    name: "KNIGHTS",
    imageSrc: "/american-football/12.jpg",
    inStock: true,
    colors: ["black", "red"],
    popularity: 8,
    rating: 4,
    latest: 12,
  },
  {
    name: "Packers Football Uniform",
    imageSrc: "/american-football/13.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 10,
    rating: 5,
    latest: 13,
  },
  {
    name: "PANTHERS",
    imageSrc: "/american-football/14.jpg",
    inStock: true,
    colors: ["black", "red"],
    popularity: 7,
    rating: 3,
    latest: 14,
  },
  {
    name: "Panthers Football Uniform",
    imageSrc: "/american-football/15.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 6,
    rating: 4,
    latest: 15,
  },
  {
    name: "PREDATORS",
    imageSrc: "/american-football/16.jpg",
    inStock: true,
    colors: ["black", "red"],
    popularity: 8,
    rating: 5,
    latest: 16,
  },
  {
    name: "RAMS",
    imageSrc: "/american-football/17.jpg",
    inStock: true,
    colors: ["black", "red"],
    popularity: 9,
    rating: 4,
    latest: 17,
  },
  {
    name: "Ravens Football Uniform",
    imageSrc: "/american-football/18.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 4,
    rating: 2,
    latest: 18,
  },
  {
    name: "Rhinos Football Uniform",
    imageSrc: "/american-football/19.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 5,
    rating: 3,
    latest: 19,
  },
  {
    name: "SAINTS",
    imageSrc: "/american-football/20.jpg",
    inStock: true,
    colors: ["black", "red"],
    popularity: 6,
    rating: 4,
    latest: 20,
  },
  {
    name: "Seahawks Football Uniform",
    imageSrc: "/american-football/21.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 8,
    rating: 5,
    latest: 21,
  },
  {
    name: "SEMINOLES",
    imageSrc: "/american-football/22.jpg",
    inStock: true,
    colors: ["black", "red"],
    popularity: 7,
    rating: 4,
    latest: 22,
  },
  {
    name: "Steelers Football Uniform",
    imageSrc: "/american-football/23.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 6,
    rating: 3,
    latest: 23,
  },
  {
    name: "TAR HEELS",
    imageSrc: "/american-football/24.jpg",
    inStock: true,
    colors: ["black", "red"],
    popularity: 9,
    rating: 5,
    latest: 24,
  },
  {
    name: "Texans Football Uniform",
    imageSrc: "/american-football/25.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 5,
    rating: 3,
    latest: 25,
  },
  {
    name: "Timber-wolef Football Uniform",
    imageSrc: "/american-football/26.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 4,
    rating: 2,
    latest: 26,
  },
  {
    name: "Titans Football Uniform",
    imageSrc: "/american-football/27.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 8,
    rating: 4,
    latest: 27,
  },
  {
    name: "Wolves Football Uniform",
    imageSrc: "/american-football/28.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 6,
    rating: 3,
    latest: 28,
  },
];

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const [stockFilter, setStockFilter] = useState<boolean | null>(null);
  const [colorFilters, setColorFilters] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState("default");

  const filteredProducts = PRODUCTS.filter((product) => {
    if (stockFilter !== null && product.inStock !== stockFilter) return false;
    if (colorFilters.length > 0 && !colorFilters.some((color) => product.colors.includes(color))) return false;
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "popularity") return b.popularity - a.popularity;
    if (sortOption === "rating") return b.rating - a.rating;
    if (sortOption === "latest") return b.latest - a.latest;
    return 0; // default, low-high, high-low are placeholders here
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
          <Link href="/" className="hover:text-red-500">Home</Link> |{" "}
          <Link href="/team-wear" className="hover:text-red-500">TEAM WEAR</Link> |{" "}
          <span className="text-gray-700">ICE HOCKEY</span>
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <Sidebar onStockFilterChange={setStockFilter} onColorFilterChange={setColorFilters} />
          <div className="w-full">
            <h2 className="text-[26px] font-medium mb-2">ICE HOCKEY</h2>

            <div className="flex justify-between items-center mb-4">
              <p className="text-2xl">
                {sortedProducts.length === 0 ? (
                  <span className="font-semibold italic">No products were found matching your selection.</span>
                ) : (
                  <>
                    Showing {indexOfFirstProduct + 1}–{Math.min(indexOfLastProduct, sortedProducts.length)} of {sortedProducts.length} results
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
                  <option value="low-high">Sort by price: low to high</option>
                  <option value="high-low">Sort by price: high to low</option>
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
                  className={`px-3 py-1 cursor-pointer border rounded ${currentPage === index + 1 ? "bg-red-500 text-white" : "hover:text-red-600"}`}
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
