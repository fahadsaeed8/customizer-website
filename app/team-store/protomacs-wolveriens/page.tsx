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
    name: "Arm Sleeves",
    imageSrc: "/protomac-wolverines/Arm-sleeves-proto-wolves.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 25,
    link: "/product/wolf-arm-sleeves",
  },
  {
    name: "Backpack",
    imageSrc: "/protomac-wolverines/BAG-2-min-1-600x600.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 40,
    link: "/product/wolf-backpack",
  },
  {
    name: "Beanies",
    imageSrc: "/protomac-wolverines/beanie-2-min.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 20,
    link: "/product/wolf-beanies",
  },
  {
    name: "Duffle Bag",
    imageSrc: "/protomac-wolverines/Duffle-Bag-2.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 50,
    link: "/product/wolf-duffle-bag",
  },
  {
    name: "Football Gloves",
    imageSrc: "/protomac-wolverines/Football-Gloves-2.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 30,
    link: "/product/wolf-football-gloves",
  },
  {
    name: "Half-zipper Shirt",
    imageSrc: "/protomac-wolverines/Half-zipper-Shirt.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 25,
    link: "/product/wolf-half-zipper-shirt",
  },
  {
    name: "Hat",
    imageSrc: "/protomac-wolverines/Hat-1.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 25,
    link: "/product/wolf-hat",
  },
  {
    name: "Headband",
    imageSrc: "/protomac-wolverines/Headband-1.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 15,
    link: "/product/wolf-headband",
  },
  {
    name: "Hoodie",
    imageSrc: "/protomac-wolverines/Hoodie-1.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 45,
    link: "/product/wolf-hoodie",
  },
  {
    name: "Loose-fit Shorts",
    imageSrc: "/protomac-wolverines/Loose-fit-Shorts-1.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 25,
    link: "/product/wolf-loose-fit-shorts",
  },
  {
    name: "Polo shirt",
    imageSrc: "/protomac-wolverines/Polo-shirt-1.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 35,
    link: "/product/wolf-polo-shirt",
  },
  {
    name: "Practice Jersey",
    imageSrc: "/protomac-wolverines/Practice-Jersey-1.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 30,
    link: "/product/wolf-practice-jersey",
  },
  {
    name: "Sleeveless Hoodie",
    imageSrc: "/protomac-wolverines/Sleeveless-Hoodie-1.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 25,
    link: "/product/wolf-sleeveless-hoodie",
  },
  {
    name: "Sleeveless Shirt",
    imageSrc: "/protomac-wolverines/Sleeveless-Shirt-1.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 23,
    link: "/product/wolf-sleeveless-shirt",
  },
  {
    name: "Socks",
    imageSrc: "/protomac-wolverines/Socks-1.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 25,
    link: "/product/wolf-socks",
  },
  {
    name: "Spats Cleat Cover",
    imageSrc: "/protomac-wolverines/Spats-Cleat-Cover-12.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 20,
    link: "/product/wolf-spats-cleat-cover",
  },
  {
    name: "T-Shirt",
    imageSrc: "/protomac-wolverines/T-Shirt-1.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 25,
    link: "/product/wolf-t-shirt",
  },
  {
    name: "Tie Headband",
    imageSrc: "/protomac-wolverines/Tie-Headband-1.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 18,
    link: "/product/wolf-tie-headband",
  },
  {
    name: "Tights- Legging",
    imageSrc: "/protomac-wolverines/Tights-Legging-1.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 23,
    link: "/product/wolf-tights-legging",
  },
  {
    name: "Track-suite / Sweat suite",
    imageSrc: "/protomac-wolverines/Track-suite-Sweat-suite-1.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 70,
    link: "/product/wolf-track-suite-Sweat-suite",
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
          | <span className="text-gray-700">Potomacs Wolverines</span>
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <Sidebar
            onStockFilterChange={setStockFilter}
            onColorFilterChange={setColorFilters}
          />
          <div className="w-full">
            <h2 className="text-[26px] font-medium mb-2">Potomacs Wolverines</h2>

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
