"use client";
import Sidebar from "@/components/common/Sidebar";
import Footer from "@/components/Footer";
import ProductCardWithPrice from "@/components/ProductCardWithPrice";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";

type Product = {
  name: string;
  imageSrc: string;
  inStock: boolean;
  colors: string[];
  price: number;
  link: string;
  popularity?: number;
  rating?: number;
  dateAdded?: string;
};

const PRODUCTS: Product[] = [
  {
    name: "Arm-Sleeves",
    imageSrc: "/w-panthers/Arm-Sleeves-panthers.png",
    inStock: true,
    colors: ["black", "red"],
    price: 20,
    link: "/product/panthers-arm-sleeves",
    popularity: 80,
    rating: 4.2,
    dateAdded: "2024-12-20",
  },
  {
    name: "Backpack",
    imageSrc: "/w-panthers/Backpack-panthers.png",
    inStock: true,
    colors: ["black", "red"],
    price: 35,
    link: "/product/panthers-backpack",
    popularity: 90,
    rating: 4.8,
    dateAdded: "2025-01-10",
  },
  {
    name: "Compression Shirts",
    imageSrc: "/w-panthers/Compression-Shirts-panthers.png",
    inStock: true,
    colors: ["black", "red"],
    price: 25,
    link: "/product/panthers-compression-shirts",
    popularity: 75,
    rating: 4.0,
    dateAdded: "2025-01-05",
  },
  {
    name: "Cotton Hoodie",
    imageSrc: "/w-panthers/Cotton-Hoodie-panthers.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 40,
    link: "/product/panthers-cotton-hoodie",
    popularity: 95,
    rating: 4.9,
    dateAdded: "2025-01-15",
  },
  {
    name: "Duffle Bags",
    imageSrc: "/w-panthers/Duffle-Bags-panthers.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 42,
    link: "/product/panthers-duffle-bags",
    popularity: 60,
    rating: 3.9,
    dateAdded: "2025-01-02",
  },
  {
    name: "Fan Jersey",
    imageSrc: "/w-panthers/Fan-Jersey-panthers.png",
    inStock: true,
    colors: ["black", "red"],
    price: 35,
    link: "/product/panthers-fan-jersey",
    popularity: 85,
    rating: 4.5,
    dateAdded: "2025-01-08",
  },
  {
    name: "Legging / Tights",
    imageSrc: "/w-panthers/Legging-Tights-panthers.png",
    inStock: true,
    colors: ["black", "red"],
    price: 25,
    link: "/product/panthers-legging-tights",
    popularity: 70,
    rating: 4.1,
    dateAdded: "2025-01-03",
  },
  {
    name: "Long SLeeves Dri-fit Hoodie",
    imageSrc: "/w-panthers/Long-SLeeves-Dri-fit-Hooodie.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 40,
    link: "/product/panthers-long-sLeeves-dri-fit-hoodie",
    popularity: 88,
    rating: 4.6,
    dateAdded: "2025-01-12",
  },
  {
    name: "Long Sleeves Shirt",
    imageSrc: "/w-panthers/Long-Sleeves-Shirt-panthers.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 30,
    link: "/product/panthers-long-sleeves-shirt-panthers",
    popularity: 72,
    rating: 4.0,
    dateAdded: "2025-01-06",
  },
  {
    name: "Quarter Zipper Shirt",
    imageSrc: "/w-panthers/Quarter-Zipper-Shirt-panthers.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 43,
    link: "/product/panthers-quarter-zipper-shirt",
    popularity: 93,
    rating: 4.7,
    dateAdded: "2025-01-11",
  },
  {
    name: "Sleeveless Hoodie",
    imageSrc: "/w-panthers/Sleeveless-Hoodie-panthers.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 40,
    link: "/product/panthers-sleeveless-hoodie",
    popularity: 65,
    rating: 3.8,
    dateAdded: "2024-12-28",
  },
  {
    name: "Spats / Cleat Cover",
    imageSrc: "/w-panthers/Spats-Cleat-Cover-panthers.png",
    inStock: true,
    colors: ["black", "red"],
    price: 20,
    link: "/product/panthers-spats-cleat-cover",
    popularity: 55,
    rating: 3.5,
    dateAdded: "2024-12-25",
  },
  {
    name: "T Shirt",
    imageSrc: "/w-panthers/T-Shirt-panthers.png",
    inStock: true,
    colors: ["black", "red"],
    price: 23,
    link: "/product/panthers-t-shirt",
    popularity: 68,
    rating: 4.1,
    dateAdded: "2025-01-07",
  },
  {
    name: "T Shirt",
    imageSrc: "/w-panthers/T-Shirt2-panthers.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 25,
    link: "/product/panthers-t-shirt2",
    popularity: 78,
    rating: 4.3,
    dateAdded: "2025-01-04",
  },
  {
    name: "Track Suite",
    imageSrc: "/w-panthers/Track-Suite-panthers.png",
    inStock: true,
    colors: ["black", "red"],
    price: 70,
    link: "/product/panthers-track-suite",
    popularity: 100,
    rating: 5.0,
    dateAdded: "2025-01-14",
  },
];

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const [stockFilter, setStockFilter] = useState<boolean | null>(null);
  const [colorFilters, setColorFilters] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<string>("default");

  const filteredAndSorted = useMemo(() => {
    let list = PRODUCTS.filter((product) => {
      if (stockFilter !== null && product.inStock !== stockFilter) return false;
      if (colorFilters.length > 0 && !colorFilters.some((c) => product.colors.includes(c))) return false;
      return true;
    });

    switch (sortOption) {
      case "lowToHigh":
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case "highToLow":
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case "popularity":
        list = [...list].sort((a, b) => (b.popularity ?? 0) - (a.popularity ?? 0));
        break;
      case "rating":
        list = [...list].sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
        break;
      case "latest":
        list = [...list].sort(
          (a, b) => new Date(b.dateAdded ?? 0).getTime() - new Date(a.dateAdded ?? 0).getTime()
        );
        break;
      default:
        break;
    }

    return list;
  }, [stockFilter, colorFilters, sortOption]);

  const totalPages = Math.ceil(filteredAndSorted.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredAndSorted.slice(indexOfFirstProduct, indexOfLastProduct);

  useEffect(() => {
    setCurrentPage(1);
  }, [stockFilter, colorFilters, sortOption]);

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
          <Link href="/" className="hover:text-red-500">Home</Link> |{" "}
          <Link href="/team-wear" className="hover:text-red-500">TEAM WEAR</Link> |{" "}
          <span className="text-gray-700">W Panthers</span>
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <Sidebar onStockFilterChange={setStockFilter} onColorFilterChange={setColorFilters} />
          <div className="w-full">
            <h2 className="text-[26px] font-medium mb-2">W Panthers</h2>

            <div className="flex justify-between items-center mb-4">
              <p className="text-2xl">
                {filteredAndSorted.length === 0 ? (
                  <span className="font-semibold italic">
                    No products were found matching your selection.
                  </span>
                ) : (
                  <>Showing {indexOfFirstProduct + 1}–{Math.min(indexOfLastProduct, filteredAndSorted.length)} of {filteredAndSorted.length} results</>
                )}
              </p>

              {filteredAndSorted.length > 0 && (
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="border border-gray-400 rounded p-1 w-[15%] text-sm cursor-pointer"
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
                <ProductCardWithPrice key={product.link} {...product} />
              ))}
            </div>

            <div className="flex justify-center mt-6 text-sm space-x-3">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`px-3 py-1 cursor-pointer border rounded ${currentPage === index + 1 ? "bg-red-500 text-white" : "hover:text-red-600"}`}
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
