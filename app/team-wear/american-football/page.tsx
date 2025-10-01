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
    popularity: 5,
    rating: 4,
    latest: 10,
    price: 79,
  },
  {
    name: "BRONCOS",
    imageSrc: "/american-football/2.jpg",
    inStock: true,
    colors: ["black", "red"],
    popularity: 3,
    rating: 5,
    latest: 9,
    price: 89,
  },
  {
    name: "Buccaneers Football Uniform",
    imageSrc: "/american-football/3.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 4,
    rating: 3,
    latest: 8,
    price: 99,
  },
  {
    name: "CHIEFS",
    imageSrc: "/american-football/4.jpg",
    inStock: true,
    colors: ["black", "red"],
    popularity: 2,
    rating: 4,
    latest: 7,
    price: 109,
  },
  {
    name: "Cobras Football Uniform",
    imageSrc: "/american-football/5.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 1,
    rating: 5,
    latest: 6,
    price: 119,
  },
  {
    name: "DUCKS",
    imageSrc: "/american-football/6.jpg",
    inStock: true,
    colors: ["black", "red"],
    popularity: 6,
    rating: 4,
    latest: 5,
    price: 129,
  },
  {
    name: "Eagles Football Uniform",
    imageSrc: "/american-football/7.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 5,
    rating: 2,
    latest: 4,
    price: 139,
  },
  {
    name: "FALCONS",
    imageSrc: "/american-football/8.jpg",
    inStock: true,
    colors: ["black", "red"],
    popularity: 7,
    rating: 3,
    latest: 3,
    price: 149,
  },
  {
    name: "Hornets Football Uniform",
    imageSrc: "/american-football/9.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 8,
    rating: 4,
    latest: 2,
    price: 159,
  },
  {
    name: "Hurricanes Football Uniform",
    imageSrc: "/american-football/10.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 9,
    rating: 5,
    latest: 1,
    price: 169,
  },
  {
    name: "Jaguars Football Uniform",
    imageSrc: "/american-football/11.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 10,
    rating: 3,
    latest: 12,
    price: 179,
  },
  {
    name: "KNIGHTS",
    imageSrc: "/american-football/12.jpg",
    inStock: true,
    colors: ["black", "red"],
    popularity: 11,
    rating: 4,
    latest: 11,
    price: 189,
  },
  {
    name: "Packers Football Uniform",
    imageSrc: "/american-football/13.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 12,
    rating: 2,
    latest: 13,
    price: 199,
  },
  {
    name: "PANTHERS",
    imageSrc: "/american-football/14.jpg",
    inStock: true,
    colors: ["black", "red"],
    popularity: 13,
    rating: 5,
    latest: 14,
    price: 209,
  },
  {
    name: "Panthers Football Uniform",
    imageSrc: "/american-football/15.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 14,
    rating: 3,
    latest: 15,
    price: 219,
  },
  {
    name: "PREDATORS",
    imageSrc: "/american-football/16.jpg",
    inStock: true,
    colors: ["black", "red"],
    popularity: 15,
    rating: 4,
    latest: 16,
    price: 229, 
  },
  {
    name: "RAMS",
    imageSrc: "/american-football/17.jpg",
    inStock: true,
    colors: ["black", "red"],
    popularity: 16,
    rating: 5,
    latest: 17,
    price: 239,
  },
  {
    name: "Ravens Football Uniform",
    imageSrc: "/american-football/18.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 17,
    rating: 3,
    latest: 18,
    price: 249,
  },
  {
    name: "Rhinos Football Uniform",
    imageSrc: "/american-football/19.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 18,
    rating: 4,
    latest: 19,
    price: 259,
  },
  {
    name: "SAINTS",
    imageSrc: "/american-football/20.jpg",
    inStock: true,
    colors: ["black", "red"],
    popularity: 19,
    rating: 5,
    latest: 20,
    price: 269,
  },
  {
    name: "Seahawks Football Uniform",
    imageSrc: "/american-football/21.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 20,
    rating: 4,
    latest: 21,
    price: 279,
  },
  {
    name: "SEMINOLES",
    imageSrc: "/american-football/22.jpg",
    inStock: true,
    colors: ["black", "red"],
    popularity: 21,
    rating: 2,
    latest: 22,
    price: 289,
  },
  {
    name: "Steelers Football Uniform",
    imageSrc: "/american-football/23.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 22,
    rating: 3,
    latest: 23,
    price: 299,
  },
  {
    name: "TAR HEELS",
    imageSrc: "/american-football/24.jpg",
    inStock: true,
    colors: ["black", "red"],
    popularity: 23,
    rating: 4,
    latest: 24,
    price: 309,
  },
  {
    name: "Texans Football Uniform",
    imageSrc: "/american-football/25.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 24,
    rating: 5,
    latest: 25,
    price: 319,
  },
  {
    name: "Timber-wolef Football Uniform",
    imageSrc: "/american-football/26.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 25,
    rating: 3,
    latest: 26,
    price: 329,
  },
  {
    name: "Titans Football Uniform",
    imageSrc: "/american-football/27.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 26,
    rating: 4,
    latest: 27,
    price: 339,
  },
  {
    name: "Wolves Football Uniform",
    imageSrc: "/american-football/28.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 27,
    rating: 5,
    latest: 28,
    price: 349,
  },
];

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const [stockFilter, setStockFilter] = useState<boolean | null>(null);
  const [colorFilters, setColorFilters] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState("default");

  // Filtering
  const filteredProducts = PRODUCTS.filter((product) => {
    if (stockFilter !== null && product.inStock !== stockFilter) return false;
    if (colorFilters.length > 0 && !colorFilters.some((c) => product.colors.includes(c))) return false;
    return true;
  });

  // Sorting (popularity / rating / latest functional; price options intentionally non-functional)
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "popularity":
        return b.popularity - a.popularity;
      case "rating":
        return b.rating - a.rating;
      case "latest":
        return b.latest - a.latest;
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

  useEffect(() => {
    const animateElements = document.querySelectorAll(
      ".scroll-animate-up, .scroll-animate-down, .scroll-animate-left, .scroll-animate-right"
    );
    function checkInView() {
      animateElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isInView =
          rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.75 &&
          rect.bottom >= 0;
        if (isInView) el.classList.add("in-view");
        else el.classList.remove("in-view");
      });
    }
    checkInView();
    let ticking = false;
    const handler = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          checkInView();
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div>
      <div className="min-h-screen px-6 py-[190px]">
        <h1 className="text-[20px] text-black mb-2">
          <Link href="/" className="hover:text-red-500">Home</Link> |{" "}
          <Link href="/team-wear" className="hover:text-red-500">TEAM WEAR</Link> |{" "}
          <span className="text-gray-700">American Football</span>
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <Sidebar onStockFilterChange={setStockFilter} onColorFilterChange={setColorFilters} />
          <div className="w-full">
            <h2 className="text-[26px] font-medium mb-2">American Football</h2>

            <div className="flex justify-between items-center mb-4">
              <p className="text-2xl">
                Showing {indexOfFirstProduct + 1}–
                {Math.min(indexOfLastProduct, sortedProducts.length)} of {sortedProducts.length} results
              </p>

              {sortedProducts.length > 0 && (
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="border border-gray-400 rounded p-1 w-[15%] text-sm text-left cursor-pointer"
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
