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
  popularity?: number;
  rating?: number;
  createdAt?: number;
};

const PRODUCTS: Product[] = [
  {
    name: "Crusaders Socks",
    imageSrc: "/accessories/Crusaders-Socks.png",
    inStock: true,
    colors: ["black", "red"],
    price: 15,
    link: "/product/crusaders-socks",
    popularity: 75,
    rating: 4.3,
    createdAt: 1,
  },
  {
    name: "Dolphins Socks",
    imageSrc: "/accessories/Dolphins-Socks.png",
    inStock: true,
    colors: ["black", "red"],
    price: 18,
    link: "/product/dolphins-socks",
    popularity: 60,
    rating: 4.0,
    createdAt: 2,
  },
  {
    name: "Patriots Socks",
    imageSrc: "/accessories/Patriots-Socks.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 20,
    link: "/product/patriots-socks",
    popularity: 80,
    rating: 4.6,
    createdAt: 3,
  },
  {
    name: "Patriots Socks (Alt)",
    imageSrc: "/accessories/Patriots-Socks-2.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 22,
    link: "/product/patriots-socks-alt",
    popularity: 85,
    rating: 4.8,
    createdAt: 4,
  },
  {
    name: "Socks",
    imageSrc: "/accessories/Socks.png",
    inStock: true,
    colors: ["black", "red"],
    price: 12,
    link: "/product/socks",
    popularity: 50,
    rating: 3.8,
    createdAt: 5,
  },
  {
    name: "Socks (Alt)",
    imageSrc: "/accessories/Socks-2.png",
    inStock: true,
    colors: ["black", "red"],
    price: 14,
    link: "/product/socks-alt",
    popularity: 55,
    rating: 4.1,
    createdAt: 6,
  },
  {
    name: "Knights Socks",
    imageSrc: "/accessories/Knights-Socks.png",
    inStock: true,
    colors: ["black", "red"],
    price: 16,
    link: "/product/knights-socks",
    popularity: 65,
    rating: 4.2,
    createdAt: 7,
  },
  {
    name: "Falcons Socks",
    imageSrc: "/accessories/Falcons-Socks.png",
    inStock: true,
    colors: ["black", "red"],
    price: 17,
    link: "/product/falcons-socks",
    popularity: 70,
    rating: 4.4,
    createdAt: 8,
  },
];

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const [stockFilter, setStockFilter] = useState<boolean | null>(null);
  const [colorFilters, setColorFilters] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState("default");

  // Filter
  const filteredProducts = PRODUCTS.filter((product) => {
    if (stockFilter !== null && product.inStock !== stockFilter) return false;
    if (
      colorFilters.length > 0 &&
      !colorFilters.some((color) => product.colors.includes(color))
    )
      return false;
    return true;
  });

  // Sort
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "price-low-high") return a.price - b.price;
    if (sortOption === "price-high-low") return b.price - a.price;
    if (sortOption === "popularity")
      return (b.popularity ?? 0) - (a.popularity ?? 0);
    if (sortOption === "rating") return (b.rating ?? 0) - (a.rating ?? 0);
    if (sortOption === "latest") return (b.createdAt ?? 0) - (a.createdAt ?? 0);
    return 0;
  });

  // Pagination
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Reset page when filters or sorting change
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
          | <span className="text-gray-700">Custom Socks</span>
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <Sidebar
            onStockFilterChange={setStockFilter}
            onColorFilterChange={setColorFilters}
          />

          <div className="w-full">
            <h2 className="text-[26px] font-medium mb-2">Custom Socks</h2>

            <div className="flex justify-between items-center mb-4">
              <p className="text-2xl">
                {filteredProducts.length === 0 ? (
                  <span className="font-semibold italic text-lg text-gray-500">
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
                  <option value="price-low-high">Sort by price: low to high</option>
                  <option value="price-high-low">Sort by price: high to low</option>
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
