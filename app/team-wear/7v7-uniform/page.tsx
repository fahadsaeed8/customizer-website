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
};

const PRODUCTS: Product[] = [
  {
    name: "A.M.E 7v7 Uniform",
    imageSrc: "/7v7/1.png",
    inStock: true,
    colors: ["black", "red"],
  },
  {
    name: "Aug 7v7 Uniform",
    imageSrc: "/7v7/2.png",
    inStock: true,
    colors: ["black", "red"],
  },
  {
    name: "Boom 7v7 Uniform",
    imageSrc: "/7v7/3.png",
    inStock: true,
    colors: ["black", "red"],
  },
  {
    name: "Crusaders 7v7 Uniform",
    imageSrc: "/7v7/4.png",
    inStock: true,
    colors: ["black", "red"],
  },
  {
    name: "Dm 7v7 Uniform",
    imageSrc: "/7v7/5.png",
    inStock: true,
    colors: ["black", "red"],
  },
  {
    name: "Egals 35 7v7 Uniform",
    imageSrc: "/7v7/6.png",
    inStock: true,
    colors: ["black", "red"],
  },
  {
    name: "Future stars 7v7 Uniform",
    imageSrc: "/7v7/7.png",
    inStock: true,
    colors: ["black", "red"],
  },
  {
    name: "Gatros 7v7 Uniform",
    imageSrc: "/7v7/8.png",
    inStock: true,
    colors: ["black", "red"],
  },
  {
    name: "Hurricanes 7v7 Uniform",
    imageSrc: "/7v7/9.png",
    inStock: true,
    colors: ["black", "red"],
  },
  {
    name: "I G E 7v7 Uniform",
    imageSrc: "/7v7/10.png",
    inStock: true,
    colors: ["black", "red"],
  },
  {
    name: "Miami 7v7 Uniform",
    imageSrc: "/7v7/11.png",
    inStock: true,
    colors: ["black", "red"],
  },
  {
    name: "Seminoles 7v7 Uniform",
    imageSrc: "/7v7/12.png",
    inStock: true,
    colors: ["black", "red"],
  },
  {
    name: "Tarror Squad 7v7 Uniform",
    imageSrc: "/7v7/13.png",
    inStock: true,
    colors: ["black", "red"],
  },
  {
    name: "U-Elite 7v7 Uniform",
    imageSrc: "/7v7/14.png",
    inStock: true,
    colors: ["black", "red"],
  },
  {
    name: "Wr 7v7 Uniform",
    imageSrc: "/7v7/15.png",
    inStock: true,
    colors: ["black", "red"],
  },
];

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const [stockFilter, setStockFilter] = useState<boolean | null>(null);
  const [colorFilters, setColorFilters] = useState<string[]>([]);

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

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [stockFilter, colorFilters]);

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
          | <span className="text-gray-700">7v7 UNIFORM</span>
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <Sidebar
            onStockFilterChange={setStockFilter}
            onColorFilterChange={setColorFilters}
          />
          <div className="w-full">
            <h2 className="text-[26px] font-medium mb-2">7v7 UNIFORM</h2>

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
                <select className="border border-gray-400 rounded p-1 w-[15%] text-sm text-left cursor-pointer">
                  <option>Default sorting</option>
                  <option>Sort by popularity</option>
                  <option>Sort by average rating</option>
                  <option>Sort by latest</option>
                  <option>Sort by price: low to high</option>
                  <option>Sort by price: high to low</option>
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
