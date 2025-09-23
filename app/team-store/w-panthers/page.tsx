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
    name: "Arm-Sleeves",
    imageSrc: "/w-panthers/Arm-Sleeves-panthers.png",
    inStock: true,
    colors: ["black", "red"],
    price: 20,
    link: "/product/panthers-arm-sleeves",
  },
 {
    name: "Backpack",
    imageSrc: "/w-panthers/Backpack-panthers.png",
    inStock: true,
    colors: ["black", "red"],
    price: 35,
    link: "/product/panthers-backpack",
  },
 {
    name: "Compression Shirts",
    imageSrc: "/w-panthers/Compression-Shirts-panthers.png",
    inStock: true,
    colors: ["black", "red"],
    price: 25,
    link: "/product/panthers-compression-shirts",
  },
 {
    name: "Cotton Hoodie",
    imageSrc: "/w-panthers/Cotton-Hoodie-panthers.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 40,
    link: "/product/panthers-cotton-hoodie",
  },
 {
    name: "Duffle Bags",
    imageSrc: "/w-panthers/Duffle-Bags-panthers.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 42,
    link: "/product/panthers-duffle-bags",
  },
 {
    name: "Fan Jersey",
    imageSrc: "/w-panthers/Fan-Jersey-panthers.png",
    inStock: true,
    colors: ["black", "red"],
    price: 35,
    link: "/product/panthers-fan-jersey",
  },
 {
    name: "Legging / Tights",
    imageSrc: "/w-panthers/Legging-Tights-panthers.png",
    inStock: true,
    colors: ["black", "red"],
    price: 25,
    link: "/product/panthers-legging-tights",
  },
 {
    name: "Long SLeeves Dri-fit Hoodie",
    imageSrc: "/w-panthers/Long-SLeeves-Dri-fit-Hooodie.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 40,
    link: "/product/panthers-long-sLeeves-dri-fit-hoodie",
  },
 {
    name: "Long Sleeves Shirt",
    imageSrc: "/w-panthers/Long-Sleeves-Shirt-panthers.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 30,
    link: "/product/panthers-long-sleeves-shirt-panthers",
  },
 {
    name: "Quarter Zipper Shirt",
    imageSrc: "/w-panthers/Quarter-Zipper-Shirt-panthers.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 43,
    link: "/product/panthers-quarter-zipper-shirt",
  },
 {
    name: "Sleeveless Hoodie",
    imageSrc: "/w-panthers/Sleeveless-Hoodie-panthers.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 40,
    link: "/product/panthers-sleeveless-hoodie",
  },
 {
    name: "Spats / Cleat Cover",
    imageSrc: "/w-panthers/Spats-Cleat-Cover-panthers.png",
    inStock: true,
    colors: ["black", "red"],
    price: 20,
    link: "/product/panthers-spats-cleat-cover",
  },
 {
    name: "T Shirt",
    imageSrc: "/w-panthers/T-Shirt-panthers.png",
    inStock: true,
    colors: ["black", "red"],
    price: 23,
    link: "/product/panthers-t-shirt",
  },
 {
    name: "T Shirt",
    imageSrc: "/w-panthers/T-Shirt2-panthers.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 25,
    link: "/product/panthers-t-shirt2",
  },
 {
    name: "Track Suite",
    imageSrc: "/w-panthers/Track-Suite-panthers.png",
    inStock: true,
    colors: ["black", "red"],
    price: 70,
    link: "/product/panthers-track-suite",
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
          | <span className="text-gray-700">W Panthers</span>
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <Sidebar
            onStockFilterChange={setStockFilter}
            onColorFilterChange={setColorFilters}
          />
          <div className="w-full">
            <h2 className="text-[26px] font-medium mb-2">W Panthers</h2>

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
