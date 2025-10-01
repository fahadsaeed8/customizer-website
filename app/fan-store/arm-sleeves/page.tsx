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
    latest: 20,
    price: 45,
  },
  {
    name: "BRONCOS",
    imageSrc: "/american-football/2.jpg",
    inStock: true,
    colors: ["black", "red"],
    popularity: 3,
    rating: 5,
    latest: 18,
    price: 50,
  },
  {
    name: "Buccaneers Football Uniform",
    imageSrc: "/american-football/3.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 4,
    rating: 4,
    latest: 17,
    price: 48,
  },
  {
    name: "CHIEFS",
    imageSrc: "/american-football/4.jpg",
    inStock: true,
    colors: ["black", "red"],
    popularity: 6,
    rating: 5,
    latest: 16,
    price: 55,
  },
  {
    name: "Cobras Football Uniform",
    imageSrc: "/american-football/5.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 2,
    rating: 3,
    latest: 15,
    price: 42,
  },
  {
    name: "DUCKS",
    imageSrc: "/american-football/6.jpg",
    inStock: true,
    colors: ["black", "red"],
    popularity: 1,
    rating: 4,
    latest: 14,
    price: 40,
  },
  {
    name: "Eagles Football Uniform",
    imageSrc: "/american-football/7.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 7,
    rating: 5,
    latest: 13,
    price: 52,
  },
  {
    name: "FALCONS",
    imageSrc: "/american-football/8.jpg",
    inStock: true,
    colors: ["black", "red"],
    popularity: 3,
    rating: 4,
    latest: 12,
    price: 44,
  },
  {
    name: "Hornets Football Uniform",
    imageSrc: "/american-football/9.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 5,
    rating: 3,
    latest: 11,
    price: 47,
  },
  {
    name: "Hurricanes Football Uniform",
    imageSrc: "/american-football/10.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 4,
    rating: 5,
    latest: 10,
    price: 49,
  },
  {
    name: "Jaguars Football Uniform",
    imageSrc: "/american-football/11.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 2,
    rating: 3,
    latest: 9,
    price: 41,
  },
  {
    name: "KNIGHTS",
    imageSrc: "/american-football/12.jpg",
    inStock: true,
    colors: ["black", "red"],
    popularity: 6,
    rating: 4,
    latest: 8,
    price: 53,
  },
  {
    name: "Packers Football Uniform",
    imageSrc: "/american-football/13.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 7,
    rating: 5,
    latest: 7,
    price: 56,
  },
  {
    name: "PANTHERS",
    imageSrc: "/american-football/14.jpg",
    inStock: true,
    colors: ["black", "red"],
    popularity: 3,
    rating: 4,
    latest: 6,
    price: 46,
  },
  {
    name: "Panthers Football Uniform",
    imageSrc: "/american-football/15.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 4,
    rating: 4,
    latest: 5,
    price: 43,
  },
  {
    name: "PREDATORS",
    imageSrc: "/american-football/16.jpg",
    inStock: true,
    colors: ["black", "red"],
    popularity: 5,
    rating: 5,
    latest: 4,
    price: 54,
  },
  {
    name: "RAMS",
    imageSrc: "/american-football/17.jpg",
    inStock: true,
    colors: ["black", "red"],
    popularity: 2,
    rating: 3,
    latest: 3,
    price: 39,
  },
  {
    name: "Ravens Football Uniform",
    imageSrc: "/american-football/18.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 4,
    rating: 5,
    latest: 2,
    price: 51,
  },
  {
    name: "Rhinos Football Uniform",
    imageSrc: "/american-football/19.png",
    inStock: true,
    colors: ["black", "red"],
    popularity: 1,
    rating: 2,
    latest: 1,
    price: 38,
  },
];

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const [stockFilter, setStockFilter] = useState<boolean | null>(null);
  const [colorFilters, setColorFilters] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState("Default sorting");

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
      case "Sort by popularity":
        return b.popularity - a.popularity;
      case "Sort by average rating":
        return b.rating - a.rating;
      case "Sort by latest":
        return b.latest - a.latest;
      case "Sort by price: low to high":
        return a.price - b.price;
      case "Sort by price: high to low":
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

  useEffect(() => {
    const animateElements = document.querySelectorAll(
      ".scroll-animate-up, .scroll-animate-down, .scroll-animate-left, .scroll-animate-right"
    );

    function checkInView() {
      animateElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isInView =
          rect.top <=
            (window.innerHeight || document.documentElement.clientHeight) *
              0.75 && rect.bottom >= 0;

        if (isInView) {
          el.classList.add("in-view");
        } else {
          el.classList.remove("in-view");
        }
      });
    }

    checkInView();
    let ticking = false;
    window.addEventListener("scroll", () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          checkInView();
          ticking = false;
        });
        ticking = true;
      }
    });
    return () => {
      window.removeEventListener("scroll", checkInView);
    };
  }, []);

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
          | <span className="text-gray-700">ARM SLEEVES</span>
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <Sidebar
            onStockFilterChange={setStockFilter}
            onColorFilterChange={setColorFilters}
          />
          <div className="w-full">
            <h2 className="text-[26px] font-medium mb-2">ARM SLEEVES</h2>

            <div className="flex justify-between items-center mb-4">
              <p className="text-2xl">
                {sortedProducts.length > 0 ? (
                  <>
                    Showing {indexOfFirstProduct + 1}–
                    {Math.min(indexOfLastProduct, sortedProducts.length)} of{" "}
                    {sortedProducts.length} results
                  </>
                ) : (
                  <span className="font-semibold italic">
                    No products were found matching your selection.
                  </span>
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
