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
    name: "ARM SLEEVES",
    imageSrc: "/an-rams/arm-sleeve-3-min.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 25,
  },
  {
    name: "BACKPACK",
    imageSrc: "/an-rams/backpack-4-min.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 40,
  },
  {
    name: "Basketball Shorts",
    imageSrc: "/an-rams/basketball-shorts-3-min.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 25,
  },
  {
    name: "Beanies",
    imageSrc: "/an-rams/beanie-4-min.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 20,
  },
  {
    name: "CHEERLEADER UNIFORMS",
    imageSrc: "/an-rams/cheerleader-uniforms-3-min.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 38,
  },
  {
    name: "Coaches Polo Shirt",
    imageSrc: "/an-rams/coaches-polo-shirt-3-min.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 35,
  },
  {
    name: "Duffle Bag",
    imageSrc: "/an-rams/duffle-bag-3-min.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 50,
  },
  {
    name: "Football Gloves",
    imageSrc: "/an-rams/football-gloves-3-min.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 30,
  },
  {
    name: "Half-Zipper Shirt",
    imageSrc: "/an-rams/half-zipper-3-min-300x300.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 28,
  },
  {
    name: "Hat",
    imageSrc: "/an-rams/cap-4-min-600x600.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 25,
  },
  {
    name: "Headband",
    imageSrc: "/an-rams/headband-mockup-3-min-600x600.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 15,
  },
  {
    name: "Hoodie",
    imageSrc: "/an-rams/LONG-SLEEVES-HOODIE-3-min-scaled-600x600.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 45,
  },
  {
    name: "Practice Jersey",
    imageSrc: "/an-rams/PRACTICE-JERSEY-3-min-600x600.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 25,
  },
  {
    name: "Sleeveless-hoodie",
    imageSrc: "/an-rams/sleeveless-hoodie-3-min-scaled-600x600.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 30,
  },
  {
    name: "Sleeveless-T shirt",
    imageSrc: "/an-rams/Sleeveless-T-shirt-3-min-scaled-600x600.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 23,
  },
  {
    name: "Socks",
    imageSrc: "/an-rams/SOCKS-15-3-min-600x600.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 23,
  },
  {
    name: "Spats / Cleat Cover",
    imageSrc: "/an-rams/spats-3-min-600x600.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 20,
  },
  {
    name: "T-shirt",
    imageSrc: "/an-rams/T-SHIRT-3-min-scaled-600x600.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 20,
  },
  {
    name: "Tie Headband",
    imageSrc: "/an-rams/head-band-3-min-300x300.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 18,
  },
  {
    name: "Tights / Legging",
    imageSrc: "/an-rams/TIGHTS-3-min-scaled-600x600.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 23,
  },
  {
    name: "Tracksuite",
    imageSrc: "/an-rams/track-suit-3-min-scaled-600x600.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 70,
  },
  {
    name: "Woman Tracksuite",
    imageSrc: "/an-rams/WOMAN-TRACK-SUITE-1-min-600x600.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 70,
  },
  {
    name: "Woman Crop Top",
    imageSrc: "/an-rams/CROP-TOP-1-min-600x600.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 20,
  },
  {
    name: "Woman Polo Shirts",
    imageSrc: "/an-rams/woman-polo-shirtr-2-min-600x600.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 35,
  },
  {
    name: "Woman short-tights",
    imageSrc: "/an-rams/BIKER-SHORTS-1-min-600x600.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 20,
  },
  {
    name: "Woman Shorts",
    imageSrc: "/an-rams/woman-booty-shorts-1-min-600x600.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 25,
  },
  {
    name: "Woman T Shirt",
    imageSrc: "/an-rams/MOCK-UP_T-Shirt_Woman_12-1-min-429x600.jpg",
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
          | <span className="text-gray-700">AN Rams</span>
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <Sidebar
            onStockFilterChange={setStockFilter}
            onColorFilterChange={setColorFilters}
          />
          <div className="w-full">
            <h2 className="text-[26px] font-medium mb-2">AN Rams</h2>

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
