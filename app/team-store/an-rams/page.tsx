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
  popularity?: number; // higher = more popular
  rating?: number; // 1 to 5
  dateAdded?: string; // ISO date
};

const PRODUCTS: Product[] = [
  {
    name: "ARM SLEEVES",
    imageSrc: "/an-rams/arm-sleeve-3-min.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 25,
    link: "/product/an-arm-sleeves",
    popularity: 80,
    rating: 4.2,
    dateAdded: "2024-12-01",
  },
  {
    name: "BACKPACK",
    imageSrc: "/an-rams/backpack-4-min.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 40,
    link: "/product/an-backpack",
    popularity: 120,
    rating: 4.5,
    dateAdded: "2025-01-05",
  },
  {
    name: "Basketball Shorts",
    imageSrc: "/an-rams/basketball-shorts-3-min.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 25,
    link: "/product/an-basketball-shorts",
    popularity: 60,
    rating: 3.9,
    dateAdded: "2024-11-15",
  },
  {
    name: "Beanies",
    imageSrc: "/an-rams/beanie-4-min.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 20,
    link: "/product/an-beanies",
    popularity: 95,
    rating: 4.7,
    dateAdded: "2025-01-10",
  },
  {
    name: "CHEERLEADER UNIFORMS",
    imageSrc: "/an-rams/cheerleader-uniforms-3-min.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 38,
    link: "/product/an-cheerleader-uniforms",
    popularity: 50,
    rating: 3.8,
    dateAdded: "2024-10-25",
  },
  {
    name: "Coaches Polo Shirt",
    imageSrc: "/an-rams/coaches-polo-shirt-3-min.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 35,
    link: "/product/an-coaches-polo-shirt",
    popularity: 110,
    rating: 4.6,
    dateAdded: "2025-01-20",
  },
  {
    name: "Duffle Bag",
    imageSrc: "/an-rams/duffle-bag-3-min.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 50,
    link: "/product/an-duffle-bag",
    popularity: 70,
    rating: 4.1,
    dateAdded: "2024-12-15",
  },
  {
    name: "Football Gloves",
    imageSrc: "/an-rams/football-gloves-3-min.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 30,
    link: "/product/an-football-gloves",
    popularity: 130,
    rating: 4.8,
    dateAdded: "2025-02-01",
  },
  {
    name: "Half-Zipper Shirt",
    imageSrc: "/an-rams/half-zipper-3-min-300x300.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 28,
    link: "/product/an-half-zipper-shirt",
    popularity: 65,
    rating: 4.0,
    dateAdded: "2024-09-20",
  },
  {
    name: "Hat",
    imageSrc: "/an-rams/cap-4-min-600x600.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 25,
    link: "/product/an-hat",
    popularity: 140,
    rating: 4.9,
    dateAdded: "2025-02-05",
  },
  {
    name: "Headband",
    imageSrc: "/an-rams/headband-mockup-3-min-600x600.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 15,
    link: "/product/an-headband",
    popularity: 55,
    rating: 3.7,
    dateAdded: "2024-08-10",
  },
  {
    name: "Hoodie",
    imageSrc: "/an-rams/LONG-SLEEVES-HOODIE-3-min-scaled-600x600.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 45,
    link: "/product/an-hoodie",
    popularity: 150,
    rating: 4.9,
    dateAdded: "2025-02-10",
  },
  {
    name: "Practice Jersey",
    imageSrc: "/an-rams/PRACTICE-JERSEY-3-min-600x600.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 25,
    link: "/product/an-practice-jersey",
    popularity: 40,
    rating: 3.5,
    dateAdded: "2024-07-01",
  },
  {
    name: "Sleeveless-hoodie",
    imageSrc: "/an-rams/sleeveless-hoodie-3-min-scaled-600x600.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 30,
    link: "/product/an-sleeveless-hoodie",
    popularity: 100,
    rating: 4.4,
    dateAdded: "2024-11-01",
  },
  {
    name: "Sleeveless-T Shirt",
    imageSrc: "/an-rams/Sleeveless-T-shirt-3-min-scaled-600x600.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 23,
    link: "/product/an-sleeveless-t-shirt",
    popularity: 75,
    rating: 4.1,
    dateAdded: "2024-12-20",
  },
  {
    name: "Socks",
    imageSrc: "/an-rams/SOCKS-15-3-min-600x600.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 23,
    link: "/product/an-socks",
    popularity: 85,
    rating: 4.3,
    dateAdded: "2025-01-15",
  },
  {
    name: "Spats / Cleat Cover",
    imageSrc: "/an-rams/spats-3-min-600x600.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 20,
    link: "/product/an-spats-cleat-cover",
    popularity: 45,
    rating: 3.6,
    dateAdded: "2024-06-10",
  },
  {
    name: "T-Shirt",
    imageSrc: "/an-rams/T-SHIRT-3-min-scaled-600x600.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 20,
    link: "/product/an-t-shirt",
    popularity: 115,
    rating: 4.7,
    dateAdded: "2025-01-25",
  },
  {
    name: "Tie Headband",
    imageSrc: "/an-rams/head-band-3-min-300x300.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 18,
    link: "/product/an-tie-headband",
    popularity: 50,
    rating: 3.9,
    dateAdded: "2024-09-05",
  },
  {
    name: "Tights / Legging",
    imageSrc: "/an-rams/TIGHTS-3-min-scaled-600x600.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 23,
    link: "/product/an-tights-legging",
    popularity: 70,
    rating: 4.0,
    dateAdded: "2024-12-30",
  },
  {
    name: "Tracksuite",
    imageSrc: "/an-rams/track-suit-3-min-scaled-600x600.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 70,
    link: "/product/an-tracksuite",
    popularity: 125,
    rating: 4.8,
    dateAdded: "2025-02-12",
  },
  {
    name: "Woman Tracksuite",
    imageSrc: "/an-rams/WOMAN-TRACK-SUITE-1-min-600x600.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 70,
    link: "/product/an-woman-tracksuite",
    popularity: 90,
    rating: 4.2,
    dateAdded: "2025-01-30",
  },
  {
    name: "Woman Crop Top",
    imageSrc: "/an-rams/CROP-TOP-1-min-600x600.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 20,
    link: "/product/an-woman-crop-top",
    popularity: 35,
    rating: 3.2,
    dateAdded: "2024-05-15",
  },
  {
    name: "Woman Polo Shirts",
    imageSrc: "/an-rams/woman-polo-shirtr-2-min-600x600.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 35,
    link: "/product/an-woman-polo-shirts",
    popularity: 105,
    rating: 4.5,
    dateAdded: "2025-02-08",
  },
  {
    name: "Woman short-tights",
    imageSrc: "/an-rams/BIKER-SHORTS-1-min-600x600.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 20,
    link: "/product/an-woman-short-tights",
    popularity: 60,
    rating: 3.8,
    dateAdded: "2024-07-18",
  },
  {
    name: "Woman Shorts",
    imageSrc: "/an-rams/woman-booty-shorts-1-min-600x600.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 25,
    link: "/product/an-woman-shorts",
    popularity: 82,
    rating: 4.1,
    dateAdded: "2024-10-12",
  },
  {
    name: "Woman T Shirt",
    imageSrc: "/an-rams/MOCK-UP_T-Shirt_Woman_12-1-min-429x600.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 20,
    link: "/product/an-woman-t-shirt",
    popularity: 98,
    rating: 4.3,
    dateAdded: "2025-02-03",
  },
];

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const [stockFilter, setStockFilter] = useState<boolean | null>(null);
  const [colorFilters, setColorFilters] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState("default");

  // ✅ Filtering
  let filteredProducts = PRODUCTS.filter((product) => {
    if (stockFilter !== null && product.inStock !== stockFilter) return false;
    if (colorFilters.length > 0 && !colorFilters.some((color) => product.colors.includes(color))) return false;
    return true;
  });

  // ✅ Sorting
  filteredProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "low-to-high") return a.price - b.price;
    if (sortOption === "high-to-low") return b.price - a.price;

    if (sortOption === "popularity") return (b as any).popularity - (a as any).popularity;
    if (sortOption === "rating") return (b as any).rating - (a as any).rating;
    if (sortOption === "latest") return new Date((b as any).dateAdded).getTime() - new Date((a as any).dateAdded).getTime();

    return 0; // default
  });

  // ✅ Pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Reset page on filters/sorting change
  useEffect(() => {
    setCurrentPage(1);
  }, [stockFilter, colorFilters, sortOption]);

  return (
    <div>
      <div className="min-h-screen px-6 py-[190px]">
        <h1 className="text-[20px] text-black mb-2">
          <Link href="/" className="hover:text-red-500">Home</Link> |{" "}
          <Link href="/team-wear" className="hover:text-red-500">TEAM WEAR</Link> |{" "}
          <span className="text-gray-700">AN Rams</span>
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <Sidebar onStockFilterChange={setStockFilter} onColorFilterChange={setColorFilters} />
          <div className="w-full">
            <h2 className="text-[26px] font-medium mb-2">AN Rams</h2>

            <div className="flex justify-between items-center mb-4">
              <p className="text-2xl">
                {filteredProducts.length === 0 ? (
                  <span className="font-semibold italic">No products were found matching your selection.</span>
                ) : (
                  <>Showing {indexOfFirstProduct + 1}–{Math.min(indexOfLastProduct, filteredProducts.length)} of {filteredProducts.length} results</>
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
