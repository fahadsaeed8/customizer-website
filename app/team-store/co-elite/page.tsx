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
  link: string;
  popularity: number; // ✅ added
  rating: number;     // ✅ added
  dateAdded: string;  // ✅ added
};

const PRODUCTS: Product[] = [
  {
    name: "CO ELITE FLEECE HOODIE",
    imageSrc: "/co-elite/CO-ELITE-FLEECE-HOODIE.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 45,
    link: "/product/co-elete-fleece-hoodie",
    popularity: 95,       // ✅ dummy data
    rating: 4.7,          // ✅ dummy data
    dateAdded: "2025-09-01", // ✅ dummy data
  },
  {
    name: "CO ELITE TRAINING JACKET",
    imageSrc: "/co-elite/CO-ELITE-TRAINING-JACKET.jpg",
    inStock: true,
    colors: ["black"],
    price: 60,
    link: "/product/co-elete-training-jacket",
    popularity: 120,
    rating: 4.9,
    dateAdded: "2025-09-14",
  },
];

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const [stockFilter, setStockFilter] = useState<boolean | null>(null);
  const [colorFilters, setColorFilters] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState("default");

  // filtering
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

  // sorting ✅ expanded
  if (sortOption === "priceLowHigh") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortOption === "priceHighLow") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortOption === "latest") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
    );
  } else if (sortOption === "popularity") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.popularity - a.popularity);
  } else if (sortOption === "rating") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.rating - a.rating);
  }

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

  useEffect(() => {
    const animateElements = document.querySelectorAll(
      ".scroll-animate-up, .scroll-animate-down, .scroll-animate-left, .scroll-animate-right"
    );

    function checkInView() {
      animateElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isInView =
          rect.top <=
            (window.innerHeight || document.documentElement.clientHeight) * 0.75 &&
          rect.bottom >= 0;

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
          | <span className="text-gray-700">CO ELITE</span>
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <Sidebar
            onStockFilterChange={setStockFilter}
            onColorFilterChange={setColorFilters}
          />
          <div className="w-full">
            <h2 className="text-[26px] font-medium mb-2">CO ELITE</h2>

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
                  <option value="priceLowHigh">Sort by price: low to high</option>
                  <option value="priceHighLow">Sort by price: high to low</option>
                </select>
              )}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
