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
  dateAdded?: string; 
};

const PRODUCTS: Product[] = [
  {
    name: "Arm Sleeves",
    imageSrc: "/protomac-wolverines/Arm-sleeves-proto-wolves.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 25,
    link: "/product/wolf-arm-sleeves",
    popularity: 50,
    rating: 4.2,
    dateAdded: "2024-12-01",
  },
  {
    name: "Backpack",
    imageSrc: "/protomac-wolverines/BAG-2-min-1-600x600.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 40,
    link: "/product/wolf-backpack",
    popularity: 80,
    rating: 4.8,
    dateAdded: "2025-01-10",
  },
  {
    name: "Beanies",
    imageSrc: "/protomac-wolverines/beanie-2-min.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 20,
    link: "/product/wolf-beanies",
    popularity: 30,
    rating: 3.9,
    dateAdded: "2024-11-15",
  },
  {
    name: "Duffle Bag",
    imageSrc: "/protomac-wolverines/Duffle-Bag-2.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 50,
    link: "/product/wolf-duffle-bag",
    popularity: 60,
    rating: 4.5,
    dateAdded: "2025-02-05",
  },
  {
    name: "Football Gloves",
    imageSrc: "/protomac-wolverines/Football-Gloves-2.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 30,
    link: "/product/wolf-football-gloves",
    popularity: 70,
    rating: 4.4,
    dateAdded: "2025-01-25",
  },
  {
    name: "Half-zipper Shirt",
    imageSrc: "/protomac-wolverines/Half-zipper-Shirt.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 25,
    link: "/product/wolf-half-zipper-shirt",
    popularity: 55,
    rating: 4.1,
    dateAdded: "2024-12-20",
  },
  {
    name: "Hat",
    imageSrc: "/protomac-wolverines/Hat-1.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 25,
    link: "/product/wolf-hat",
    popularity: 65,
    rating: 4.6,
    dateAdded: "2025-02-01",
  },
  {
    name: "Headband",
    imageSrc: "/protomac-wolverines/Headband-1.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 15,
    link: "/product/wolf-headband",
    popularity: 40,
    rating: 3.8,
    dateAdded: "2024-11-05",
  },
  {
    name: "Hoodie",
    imageSrc: "/protomac-wolverines/Hoodie-1.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 45,
    link: "/product/wolf-hoodie",
    popularity: 90,
    rating: 4.9,
    dateAdded: "2025-02-12",
  },
  {
    name: "Loose-fit Shorts",
    imageSrc: "/protomac-wolverines/Loose-fit-Shorts-1.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 25,
    link: "/product/wolf-loose-fit-shorts",
    popularity: 58,
    rating: 4.0,
    dateAdded: "2024-12-10",
  },
  {
    name: "Polo shirt",
    imageSrc: "/protomac-wolverines/Polo-shirt-1.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 35,
    link: "/product/wolf-polo-shirt",
    popularity: 68,
    rating: 4.3,
    dateAdded: "2025-01-30",
  },
  {
    name: "Practice Jersey",
    imageSrc: "/protomac-wolverines/Practice-Jersey-1.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 30,
    link: "/product/wolf-practice-jersey",
    popularity: 62,
    rating: 4.2,
    dateAdded: "2025-01-05",
  },
  {
    name: "Sleeveless Hoodie",
    imageSrc: "/protomac-wolverines/Sleeveless-Hoodie-1.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 25,
    link: "/product/wolf-sleeveless-hoodie",
    popularity: 52,
    rating: 4.1,
    dateAdded: "2024-12-08",
  },
  {
    name: "Sleeveless Shirt",
    imageSrc: "/protomac-wolverines/Sleeveless-Shirt-1.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 23,
    link: "/product/wolf-sleeveless-shirt",
    popularity: 42,
    rating: 3.9,
    dateAdded: "2024-11-28",
  },
  {
    name: "Socks",
    imageSrc: "/protomac-wolverines/Socks-1.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 25,
    link: "/product/wolf-socks",
    popularity: 77,
    rating: 4.7,
    dateAdded: "2025-01-18",
  },
  {
    name: "Spats Cleat Cover",
    imageSrc: "/protomac-wolverines/Spats-Cleat-Cover-12.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 20,
    link: "/product/wolf-spats-cleat-cover",
    popularity: 38,
    rating: 3.7,
    dateAdded: "2024-11-12",
  },
  {
    name: "T-Shirt",
    imageSrc: "/protomac-wolverines/T-Shirt-1.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 25,
    link: "/product/wolf-t-shirt",
    popularity: 85,
    rating: 4.6,
    dateAdded: "2025-02-08",
  },
  {
    name: "Tie Headband",
    imageSrc: "/protomac-wolverines/Tie-Headband-1.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 18,
    link: "/product/wolf-tie-headband",
    popularity: 33,
    rating: 3.5,
    dateAdded: "2024-10-30",
  },
  {
    name: "Tights- Legging",
    imageSrc: "/protomac-wolverines/Tights-Legging-1.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 23,
    link: "/product/wolf-tights-legging",
    popularity: 47,
    rating: 4.0,
    dateAdded: "2024-12-15",
  },
  {
    name: "Track-suite / Sweat suite",
    imageSrc: "/protomac-wolverines/Track-suite-Sweat-suite-1.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 70,
    link: "/product/wolf-track-suite-Sweat-suite",
    popularity: 95,
    rating: 5.0,
    dateAdded: "2025-02-14",
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
    if (stockFilter !== null && product.inStock !== stockFilter) {
      return false;
    }
    if (colorFilters.length > 0) {
      const matchesColor = colorFilters.every((color) =>
        product.colors.includes(color)
      );
      if (!matchesColor) {
        return false;
      }
    }
    return true;
  });

  // ✅ Sorting
  if (sortOption === "low-to-high") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortOption === "high-to-low") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortOption === "popularity") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => (b.popularity ?? 0) - (a.popularity ?? 0)
    );
  } else if (sortOption === "rating") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => (b.rating ?? 0) - (a.rating ?? 0)
    );
  } else if (sortOption === "latest") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) =>
        new Date(b.dateAdded ?? "").getTime() -
        new Date(a.dateAdded ?? "").getTime()
    );
  }

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

  useEffect(() => {
    const animateElements = document.querySelectorAll(
      ".scroll-animate-up, .scroll-animate-down, .scroll-animate-left, .scroll-animate-right"
    );

    function checkInView() {
      animateElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isInView =
          rect.top <=
            (window.innerHeight || document.documentElement.clientHeight) * 0.75 &&
          rect.bottom >= 0;

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
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="border border-gray-400 rounded p-1 w-[15%] text-sm text-left cursor-pointer"
                >
                  <option value="default">Default sorting</option>
                  <option value="popularity">Sort by popularity</option>
                  <option value="rating">Sort by average rating</option>
                  <option value="latest">Sort by latest</option>
                  <option value="low-to-high">Sort by price: low to high</option>
                  <option value="high-to-low">Sort by price: high to low</option>
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
