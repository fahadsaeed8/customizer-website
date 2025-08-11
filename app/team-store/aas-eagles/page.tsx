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
};
const PRODUCTS: Product[] = [
   {
    name: "Arm Sleeves",
    imageSrc: "/aas-eagles/Arm-Sleeves-green.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 15,
  },
 {
    name: "Backpack",
    imageSrc: "/aas-eagles/Backpack-green.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 40,
  },
 {
    name: "Beanies",
    imageSrc: "/aas-eagles/Beanies-green.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 20,
  },
 {
    name: "Duffle Bag",
    imageSrc: "/aas-eagles/Duffle-Bag-green.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 50,
  },
 {
    name: "Fan Shirts",
    imageSrc: "/aas-eagles/Fan-Shirts-green.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 20,
  },
 {
    name: "Football Gloves",
    imageSrc: "/aas-eagles/Football-Gloves-green.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 30,
  },
 {
    name: "Half-zipper shirt",
    imageSrc: "/aas-eagles/Half-zipper-shirt-green.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 25,
  },
 {
    name: "Hat",
    imageSrc: "/aas-eagles/Hat-green.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 25,
  },
 {
    name: "Headband",
    imageSrc: "/aas-eagles/Headband-green.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 15,
  },
 {
    name: "Hoodie",
    imageSrc: "/aas-eagles/Hoodie-green.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 45,
  },
 {
    name: "Loose-fit Shorts",
    imageSrc: "/aas-eagles/Loose-fit-Shorts-green.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 25,
  },
 {
    name: "Mens-Polo Shirt",
    imageSrc: "/aas-eagles/Mens-Polo-Shirt-green.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 30,
  },
 {
    name: "Prectice Jerseys",
    imageSrc: "/aas-eagles/Prectice-Jerseys.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 20,
  },
 {
    name: "Sleeveless Hoodie",
    imageSrc: "/aas-eagles/Sleeveless-Hoodie-green.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 23,
  },
 {
    name: "Sleeveless Shirt",
    imageSrc: "/aas-eagles/Sleeveless-Shirt-green.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 20,
  },
 {
    name: "Socks",
    imageSrc: "/aas-eagles/Socks-green.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 20,
  },
 {
    name: "Spats Cleat Cover",
    imageSrc: "/aas-eagles/Spats-Cleat-Cover-green.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 17,
  },
 {
    name: "T Shirts",
    imageSrc: "/aas-eagles/T-Shirts-green.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 20,
  },
 {
    name: "Tie Headband",
    imageSrc: "/aas-eagles/Tie-Headband-green.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 18,
  },
 {
    name: "Tights Legging",
    imageSrc: "/aas-eagles/Tights-Legging-green.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 23,
  },
 {
    name: "Track-Suite",
    imageSrc: "/aas-eagles/Track-Suite-green.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 70,
  },
 {
    name: "Woman Shirts",
    imageSrc: "/aas-eagles/Woman-Shirts-green.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 20,
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
          | <span className="text-gray-700">AAS Eagles</span>
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <Sidebar
            onStockFilterChange={setStockFilter}
            onColorFilterChange={setColorFilters}
          />
          <div className="w-full">
            <h2 className="text-[26px] font-medium mb-2">AAS Eagles</h2>

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
