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
  link?: string;
  // --- demo fields for sorting ---
  popularity?: number; // higher = more popular
  rating?: number; // 1–5 stars
  dateAdded?: string; // ISO date string
};

const PRODUCTS: Product[] = [
  {
    name: "SOCKS",
    imageSrc: "/buffs/buff-socks.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 21,
    link: "/product/buffs-socks",

    // --- demo values (remove or replace later) ---
    popularity: 80,
    rating: 4.3,
    dateAdded: "2024-12-10",
  },
  // Add more products here and give them demo popularity/rating/dateAdded if needed
];

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const [stockFilter, setStockFilter] = useState<boolean | null>(null);
  const [colorFilters, setColorFilters] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState("default");

  // Apply filters
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

  // Apply sorting
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "priceLowHigh") return a.price - b.price;
    if (sortOption === "priceHighLow") return b.price - a.price;
    if (sortOption === "popularity") return (b.popularity ?? 0) - (a.popularity ?? 0);
    if (sortOption === "rating") return (b.rating ?? 0) - (a.rating ?? 0);
    if (sortOption === "latest") {
      return new Date(b.dateAdded ?? 0).getTime() - new Date(a.dateAdded ?? 0).getTime();
    }
    return 0; // default
  });

  // Pagination
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

  // Scroll animation (unchanged)
  useEffect(() => {
    const animateElements = document.querySelectorAll(
      ".scroll-animate-up, .scroll-animate-down, .scroll-animate-left, .scroll-animate-right"
    );

    const checkInView = () => {
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
    };

    checkInView();
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          checkInView();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
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
          | <span className="text-gray-700">Buffs</span>
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <Sidebar
            onStockFilterChange={setStockFilter}
            onColorFilterChange={setColorFilters}
          />
          <div className="w-full">
            <h2 className="text-[26px] font-medium mb-2">Buffs</h2>

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
                  <option value="default">Default sorting</option>
                  <option value="popularity">Sort by popularity</option>
                  <option value="rating">Sort by average rating</option>
                  <option value="latest">Sort by latest</option>
                  <option value="priceLowHigh">Sort by price: low to high</option>
                  <option value="priceHighLow">Sort by price: high to low</option>
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
