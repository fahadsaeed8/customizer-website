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
};
const PRODUCTS: Product[] = [
  {
    name: "ARM SLEEVES",
    imageSrc: "/protomac/protomac-arm-sleeve-min2.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 25,
    link: "/product/proto-arm-sleeves",
  },
  {
    name: "BACKPACK",
    imageSrc: "/protomac/protomac-backpack-min2.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 40,
    link: "/product/proto-backpack",
  },
  {
    name: "BEANIES",
    imageSrc: "/protomac/protomac-beanie-min2.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 20,
    link: "/product/proto-beanies",
  },
  {
    name: "DUFFLE BAG",
    imageSrc: "/protomac/protomac-duffle-bag-min2.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 50,
    link: "/product/proto-duffle-bag",
  },
  {
    name: "HAT",
    imageSrc: "/protomac/protomac-hat-min2.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 25,
    link: "/product/proto-hat",
  },
  {
    name: "HEADBAND",
    imageSrc: "/protomac/protomac-headband-min2.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 15,
    link: "/product/proto-headband",
  },
  {
    name: "HOODIE",
    imageSrc: "/protomac/protomac-hoodie-min2.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 45,
    link: "/product/proto-hoodie",
  },
  {
    name: "POLO SHIRT",
    imageSrc: "/protomac/protomac-polo-shirt-min2.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 35,
    link: "/product/proto-polo-shirt",
  },
  {
    name: "SHORTS",
    imageSrc: "/protomac/protomac-shorts-min2.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 25,
    link: "/product/proto-shorts",
  },
  {
    name: "SOCKS",
    imageSrc: "/protomac/protomac-socks-min2.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 21,
    link: "/product/proto-socks",
  },
  {
    name: "Spats Cleat Cover",
    imageSrc: "/protomac/protomac-spats-min2.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 20,
    link: "/product/proto-spats-cleat-cover",
  },
  {
    name: "T-SHIRT",
    imageSrc: "/protomac/protomac-t-shirt-min2.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 25,
    link: "/product/proto-t-shirt",
  },
  {
    name: "Track-suite / Sweatsuite",
    imageSrc: "/protomac/protomac-track-suit-min2.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 70,
    link: "/product/proto-track-suite-sweatsuite",
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
          | <span className="text-gray-700">Potomac</span>
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <Sidebar
            onStockFilterChange={setStockFilter}
            onColorFilterChange={setColorFilters}
          />
          <div className="w-full">
            <h2 className="text-[26px] font-medium mb-2">Potomac</h2>

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
