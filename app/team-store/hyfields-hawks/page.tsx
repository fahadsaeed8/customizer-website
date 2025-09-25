"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "@/components/common/Sidebar";
import Footer from "@/components/Footer";
import ProductCardWithPrice from "@/components/ProductCardWithPrice";
import Link from "next/link";

type Product = {
  name: string;
  imageSrc: string;
  inStock: boolean;
  colors: string[];
  price: number;
  link: string;

  // DEMO fields below — remove these when you have real data
  popularity: number; // DEMO: higher = more popular
  rating: number; // DEMO: 1 - 5
  dateAdded: string; // DEMO: ISO date string
};

const PRODUCTS: Product[] = [
  {
    name: "ARM SLEEVES",
    imageSrc: "/hyfields-hawks/ARM-SLEEVES.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 20,
    link: "/product/hawks-arm-sleeves",
    popularity: 120,
    rating: 4.6,
    dateAdded: "2025-09-10",
  },
  {
    name: "DUFFLE BAG",
    imageSrc: "/hyfields-hawks/DUFFLE-BAG.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 50,
    link: "/product/hawks-duffle-bag",
    popularity: 95,
    rating: 4.2,
    dateAdded: "2025-08-22",
  },
  {
    name: "FOOTBALL GLOVES",
    imageSrc: "/hyfields-hawks/FOOTBALL-GLOVES.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 35,
    link: "/product/hawks-football-gloves",
    popularity: 140,
    rating: 4.8,
    dateAdded: "2025-09-12",
  },
  {
    name: "FOOTBALL TOWEL",
    imageSrc: "/hyfields-hawks/FOOTBALL-TOWEL.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 20,
    link: "/product/hawks-football-towel",
    popularity: 60,
    rating: 4.0,
    dateAdded: "2025-07-30",
  },
  {
    name: "HAT",
    imageSrc: "/hyfields-hawks/hat.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 25,
    link: "/product/hawks-hat",
    popularity: 110,
    rating: 4.4,
    dateAdded: "2025-08-30",
  },
  {
    name: "HEADBAND",
    imageSrc: "/hyfields-hawks/HEAD-BAND.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 15,
    link: "/product/hawks-headband",
    popularity: 70,
    rating: 4.1,
    dateAdded: "2025-08-05",
  },
  {
    name: "HOODIE",
    imageSrc: "/hyfields-hawks/hoodie.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 45,
    link: "/product/hawks-hoodie",
    popularity: 160,
    rating: 4.9,
    dateAdded: "2025-09-14",
  },
  {
    name: "SHORTS",
    imageSrc: "/hyfields-hawks/shorts.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 25,
    link: "/product/hawks-shorts",
    popularity: 85,
    rating: 4.3,
    dateAdded: "2025-08-15",
  },
  {
    name: "SKY MASK",
    imageSrc: "/hyfields-hawks/SKY-MASK.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 20,
    link: "/product/hawks-sky-mask",
    popularity: 45,
    rating: 3.9,
    dateAdded: "2025-06-20",
  },
  {
    name: "SOCKS",
    imageSrc: "/hyfields-hawks/socks.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 21,
    link: "/product/hawks-socks",
    popularity: 100,
    rating: 4.5,
    dateAdded: "2025-09-02",
  },
  {
    name: "T-SHIRT",
    imageSrc: "/hyfields-hawks/T-SHIRT.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 25,
    link: "/product/hawks-t-shirt",
    popularity: 130,
    rating: 4.7,
    dateAdded: "2025-09-08",
  },
  {
    name: "TRACKSUITE",
    imageSrc: "/hyfields-hawks/TRACK-SUITE.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 70,
    link: "/product/hawks-tracksuite",
    popularity: 150,
    rating: 4.8,
    dateAdded: "2025-08-28",
  },
];

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const [stockFilter, setStockFilter] = useState<boolean | null>(null);
  const [colorFilters, setColorFilters] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<string>("default");

  // filter
  let filteredProducts = PRODUCTS.filter((product) => {
    if (stockFilter !== null && product.inStock !== stockFilter) return false;
    if (
      colorFilters.length > 0 &&
      !colorFilters.some((c) => product.colors.includes(c))
    )
      return false;
    return true;
  });

  // sorting: popularity, rating, latest (dateAdded), price low/high
  if (sortOption === "popularity") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => b.popularity - a.popularity
    );
  } else if (sortOption === "rating") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => b.rating - a.rating
    );
  } else if (sortOption === "latest") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) =>
        new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
    );
  } else if (sortOption === "priceLowHigh") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortOption === "priceHighLow") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  }
  // default: keep original order

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

    const checkInView = () => {
      animateElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isInView =
          rect.top <=
            (window.innerHeight || document.documentElement.clientHeight) *
              0.75 && rect.bottom >= 0;
        if (isInView) el.classList.add("in-view");
        else el.classList.remove("in-view");
      });
    };

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
          <Link href="/" className="hover:text-red-500">
            Home
          </Link>{" "}
          |{" "}
          <Link href="/team-wear" className="hover:text-red-500">
            TEAM WEAR
          </Link>{" "}
          | <span className="text-gray-700">HYFIELDS HAWKS</span>
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <Sidebar
            onStockFilterChange={setStockFilter}
            onColorFilterChange={setColorFilters}
          />
          <div className="w-full">
            <h2 className="text-[26px] font-medium mb-2">HYFIELDS HAWKS</h2>

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
                  className="border border-gray-400 rounded p-1 w-[15%] text-sm cursor-pointer"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option value="default">Default sorting</option>
                  <option value="popularity">Sort by popularity</option>
                  <option value="rating">Sort by average rating</option>
                  <option value="latest">Sort by latest</option>
                  <option value="priceLowHigh">
                    Sort by price: low to high
                  </option>
                  <option value="priceHighLow">
                    Sort by price: high to low
                  </option>
                </select>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {currentProducts.map((product) => (
                /* use unique key to ensure reordering shows up correctly */
                <ProductCardWithPrice key={product.link} {...product} />
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
