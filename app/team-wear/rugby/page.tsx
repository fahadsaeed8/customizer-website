"use client";
import Sidebar from "@/components/common/Sidebar";
import Footer from "@/components/Footer";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Product = {
  name: string;
  imageSrc: string;
  inStock: boolean;
  colors: string[];
  popularity?: number;
  rating: number;
  latest: number;
  price: number;
};

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const [stockFilter, setStockFilter] = useState<boolean | null>(null);
  const [colorFilters, setColorFilters] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<string>("default");

  // Empty products list for Rugby
  const PRODUCTS: Product[] = [
    // example structure, still empty
    // {
    //   name: "Rugby Jersey",
    //   imageSrc: "/rugby-jersey.png",
    //   inStock: true,
    //   colors: ["red", "black"],
    //   popularity: 10,
    //   rating: 4.5,
    //   latest: 1,
    //   price: 59,
    // }
  ];

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
  }).sort((a, b) => {
    if (sortOption === "popularity") return (b.popularity ?? 0) - (a.popularity ?? 0);
    if (sortOption === "rating") return (b.rating ?? 0) - (a.rating ?? 0);
    if (sortOption === "latest") return (b.latest ?? 0) - (a.latest ?? 0);
    if (sortOption === "priceLow") return (a.price ?? 0) - (b.price ?? 0);
    if (sortOption === "priceHigh") return (b.price ?? 0) - (a.price ?? 0);
    return 0; // Default
  });

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
          <Link href="/" className="hover:text-red-500">
            Home
          </Link>{" "}
          |{" "}
          <Link href="/team-wear" className="hover:text-red-500">
            TEAM WEAR
          </Link>{" "}
          | <span className="text-gray-700">RUGBY</span>
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <Sidebar
            onStockFilterChange={setStockFilter}
            onColorFilterChange={setColorFilters}
          />

          <div className="w-full">
            <h2 className="text-[26px] font-medium mb-2">RUGBY</h2>

            <div className="flex justify-between items-center mb-4">
              <p className="text-2xl">
                <span className="font-semibold italic">
                  No products were found matching your selection.
                </span>
              </p>

              <select
                className="border border-gray-400 rounded p-1 w-[15%] text-sm text-left cursor-pointer"
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="default">Default sorting</option>
                <option value="popularity">Sort by popularity</option>
                <option value="rating">Sort by average rating</option>
                <option value="latest">Sort by latest</option>
                <option value="priceLow">Sort by price: low to high</option>
                <option value="priceHigh">Sort by price: high to low</option>
              </select>
            </div>

            {/* No grid since no products */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
