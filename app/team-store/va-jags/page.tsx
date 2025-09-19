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
  latest?: number;
};

const PRODUCTS: Product[] = [
  {
    name: "Bags",
    imageSrc: "/va-jags/Bags-va.jpeg",
    inStock: true,
    colors: ["black", "red"],
    price: 16,
    link: "/product/va-bags",
    popularity: 50,
    rating: 4.1,
    latest: 4,
  },
  {
    name: "FAN SHIRT",
    imageSrc: "/va-jags/FAN-SHIRT-va.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 30,
    link: "/product/va-fan-shirt",
    popularity: 70,
    rating: 4.3,
    latest: 7,
  },
  {
    name: "Hoodie",
    imageSrc: "/va-jags/Hoodie-va.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 40,
    link: "/product/va-hoodie",
    popularity: 90,
    rating: 4.7,
    latest: 9,
  },
  {
    name: "Jacket",
    imageSrc: "/va-jags/Jacket-va.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 45,
    link: "/product/va-jacket",
    popularity: 85,
    rating: 4.6,
    latest: 10,
  },
  {
    name: "Legging-Tights",
    imageSrc: "/va-jags/Legging-Tights-va.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 28,
    link: "/product/va-legging-tights",
    popularity: 40,
    rating: 3.9,
    latest: 3,
  },
  {
    name: "Long Sleeve T-Shirt",
    imageSrc: "/va-jags/Long-Sleeve-T-Shirt-va.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 30,
    link: "/product/va-long-sleeve-t-shirt",
    popularity: 55,
    rating: 4.0,
    latest: 6,
  },
  {
    name: "Long Sleeves Dri-Fit Hoodie",
    imageSrc: "/va-jags/Long-Sleeves-Dri-Fit-Hoodie.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 30,
    link: "/product/va-long-sleeves-dri-fit-hoodie",
    popularity: 65,
    rating: 4.2,
    latest: 8,
  },
  {
    name: "Loose-Fit Shorts",
    imageSrc: "/va-jags/Loose-Fit-Shorts-va.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 28,
    link: "/product/va-loose-fit-shorts",
    popularity: 45,
    rating: 3.8,
    latest: 2,
  },
  {
    name: "Quarter Zipper",
    imageSrc: "/va-jags/Quarter-Zipper-va.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 49.99,
    link: "/product/va-quarter-zipper",
    popularity: 95,
    rating: 4.9,
    latest: 11,
  },
  {
    name: "Short-Sleeves Dri-Fit Hoodie",
    imageSrc: "/va-jags/Short-Sleeves-Dri-Fit-Hoodie-va.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 28,
    link: "/product/va-short-sleeves-dri-fit-hoodie",
    popularity: 60,
    rating: 4.1,
    latest: 5,
  },
  {
    name: "T-Shirt",
    imageSrc: "/va-jags/T-shirt-va.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 28,
    link: "/product/va-t-shirt",
    popularity: 50,
    rating: 4.0,
    latest: 4,
  },
  {
    name: "Trouser For Hoodie",
    imageSrc: "/va-jags/Trouser-For-Hoodie-va.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 35,
    link: "/product/va-trouser-for-hoodie",
    popularity: 70,
    rating: 4.3,
    latest: 7,
  },
  {
    name: "Trouser For Jacket",
    imageSrc: "/va-jags/Trouser-For-Jacket-va.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 40,
    link: "/product/va-trouser-for-jacket",
    popularity: 75,
    rating: 4.4,
    latest: 8,
  },
  {
    name: "Trouser For Quarter Zipper",
    imageSrc: "/va-jags/Trouser-For-Quarter-zipper.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 35,
    link: "/product/va-trouser-for-quarter-zipper",
    popularity: 80,
    rating: 4.5,
    latest: 9,
  },
];

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const [stockFilter, setStockFilter] = useState<boolean | null>(null);
  const [colorFilters, setColorFilters] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<string>("default");

  // ✅ Filtering
  let filteredProducts = PRODUCTS.filter((product) => {
    if (stockFilter !== null && product.inStock !== stockFilter) return false;
    if (colorFilters.length > 0 && !colorFilters.some((c) => product.colors.includes(c))) {
      return false;
    }
    return true;
  });

  // ✅ Sorting
  if (sortOption === "lowToHigh") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortOption === "highToLow") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortOption === "popularity") {
    filteredProducts = [...filteredProducts].sort((a, b) => (b.popularity ?? 0) - (a.popularity ?? 0));
  } else if (sortOption === "rating") {
    filteredProducts = [...filteredProducts].sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
  } else if (sortOption === "latest") {
    filteredProducts = [...filteredProducts].sort((a, b) => (b.latest ?? 0) - (a.latest ?? 0));
  }

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  useEffect(() => {
    setCurrentPage(1);
  }, [stockFilter, colorFilters, sortOption]);

  // Scroll animation
  useEffect(() => {
    const animateElements = document.querySelectorAll(
      ".scroll-animate-up, .scroll-animate-down, .scroll-animate-left, .scroll-animate-right"
    );

    function checkInView() {
      animateElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isInView =
          rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.75 &&
          rect.bottom >= 0;

        if (isInView) el.classList.add("in-view");
        else el.classList.remove("in-view");
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
          <Link href="/" className="hover:text-red-500">Home</Link> |{" "}
          <Link href="/team-wear" className="hover:text-red-500">TEAM WEAR</Link> |{" "}
          <span className="text-gray-700">VA Jags</span>
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <Sidebar onStockFilterChange={setStockFilter} onColorFilterChange={setColorFilters} />
          <div className="w-full">
            <h2 className="text-[26px] font-medium mb-2">VA Jags</h2>

            <div className="flex justify-between items-center mb-4">
              <p className="text-2xl">
                {filteredProducts.length === 0 ? (
                  <span className="font-semibold italic">
                    No products were found matching your selection.
                  </span>
                ) : (
                  <>Showing {indexOfFirstProduct + 1}–
                    {Math.min(indexOfLastProduct, filteredProducts.length)} of{" "}
                    {filteredProducts.length} results</>
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
                  <option value="lowToHigh">Sort by price: low to high</option>
                  <option value="highToLow">Sort by price: high to low</option>
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
                    currentPage === index + 1 ? "bg-red-500 text-white" : "hover:text-red-600"
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
