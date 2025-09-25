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
  link?: string;
  popularity?: number;
  rating?: number;
  latest?: number;
};

const PRODUCTS: Product[] = [
  {
    name: "Arm Sleeves",
    imageSrc: "/aas-eagles/Arm-Sleeves-green.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 15,
    link: "/product/aas-armsleeves",
    popularity: 50,
    rating: 4.2,
    latest: 5,
  },
  {
    name: "Backpack",
    imageSrc: "/aas-eagles/Backpack-green.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 40,
    link: "/product/aas-backpack",
    popularity: 80,
    rating: 4.5,
    latest: 9,
  },
  {
    name: "Beanies",
    imageSrc: "/aas-eagles/Beanies-green.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 20,
    link: "/product/aas-beanies",
    popularity: 30,
    rating: 3.8,
    latest: 2,
  },
  {
    name: "Duffle Bag",
    imageSrc: "/aas-eagles/Duffle-Bag-green.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 50,
    link: "/product/aas-duffle-bag",
    popularity: 90,
    rating: 4.7,
    latest: 10,
  },
  {
    name: "Fan Shirts",
    imageSrc: "/aas-eagles/Fan-Shirts-green.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 20,
    link: "/product/aas-fan-shirts",
    popularity: 40,
    rating: 4.0,
    latest: 4,
  },
  {
    name: "Football Gloves",
    imageSrc: "/aas-eagles/Football-Gloves-green.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 30,
    link: "/product/aas-football-gloves",
    popularity: 60,
    rating: 4.3,
    latest: 6,
  },
  {
    name: "Half-zipper shirt",
    imageSrc: "/aas-eagles/Half-zipper-shirt-green.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 25,
    link: "/product/aas-half-zipper-shirt",
    popularity: 35,
    rating: 4.0,
    latest: 3,
  },
  {
    name: "Hat",
    imageSrc: "/aas-eagles/Hat-green.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 25,
    link: "/product/aas-hat",
    popularity: 45,
    rating: 4.1,
    latest: 7,
  },
  {
    name: "Headband",
    imageSrc: "/aas-eagles/Headband-green.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 15,
    link: "/product/aas-headband",
    popularity: 22,
    rating: 3.7,
    latest: 1,
  },
  {
    name: "Hoodie",
    imageSrc: "/aas-eagles/Hoodie-green.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 45,
    link: "/product/aas-hoodie",
    popularity: 75,
    rating: 4.6,
    latest: 8,
  },
  {
    name: "Loose-fit Shorts",
    imageSrc: "/aas-eagles/Loose-fit-Shorts-green.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 25,
    link: "/product/aas-loose-fit-shorts",
    popularity: 28,
    rating: 3.9,
    latest: 2,
  },
  {
    name: "Mens-Polo Shirt",
    imageSrc: "/aas-eagles/Mens-Polo-Shirt-green.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 30,
    link: "/product/aas-mens-polo-shirt",
    popularity: 55,
    rating: 4.2,
    latest: 5,
  },
  {
    name: "Prectice Jerseys",
    imageSrc: "/aas-eagles/Prectice-Jerseys.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 20,
    link: "/product/aas-prectice-jerseys",
    popularity: 33,
    rating: 3.9,
    latest: 3,
  },
  {
    name: "Sleeveless Hoodie",
    imageSrc: "/aas-eagles/Sleeveless-Hoodie-green.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 23,
    link: "/product/aas-sleeveless-hoodie",
    popularity: 26,
    rating: 3.8,
    latest: 2,
  },
  {
    name: "Sleeveless Shirt",
    imageSrc: "/aas-eagles/Sleeveless-Shirt-green.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 20,
    link: "/product/aas-sleeveless-shirt",
    popularity: 24,
    rating: 3.7,
    latest: 1,
  },
  {
    name: "Socks",
    imageSrc: "/aas-eagles/Socks-green.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 20,
    link: "/product/aas-socks",
    popularity: 18,
    rating: 3.5,
    latest: 1,
  },
  {
    name: "Spats Cleat Cover",
    imageSrc: "/aas-eagles/Spats-Cleat-Cover-green.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 17,
    link: "/product/aas-spats-cleat-cover",
    popularity: 20,
    rating: 3.6,
    latest: 1,
  },
  {
    name: "T Shirts",
    imageSrc: "/aas-eagles/T-Shirts-green.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 20,
    link: "/product/aas-t-shirts",
    popularity: 34,
    rating: 4.0,
    latest: 3,
  },
  {
    name: "Tie Headband",
    imageSrc: "/aas-eagles/Tie-Headband-green.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 18,
    link: "/product/aas-tie-headband",
    popularity: 16,
    rating: 3.4,
    latest: 1,
  },
  {
    name: "Tights Legging",
    imageSrc: "/aas-eagles/Tights-Legging-green.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 23,
    link: "/product/aas-tights-legging",
    popularity: 29,
    rating: 3.9,
    latest: 2,
  },
  {
    name: "Track-Suite",
    imageSrc: "/aas-eagles/Track-Suite-green.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 70,
    link: "/product/aas-track-suite",
    popularity: 65,
    rating: 4.4,
    latest: 7,
  },
  {
    name: "Woman Shirts",
    imageSrc: "/aas-eagles/Woman-Shirts-green.jpg",
    inStock: true,
    colors: ["black", "red"],
    price: 20,
    link: "/product/aas-woman-shirts",
    popularity: 21,
    rating: 3.8,
    latest: 2,
  },
];

export default function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const [stockFilter, setStockFilter] = useState<boolean | null>(null);
  const [colorFilters, setColorFilters] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<string>("default");

  // resolvedImages holds the "actual working src" for each product (keyed by product.link or name)
  const [resolvedImages, setResolvedImages] = useState<Record<string, string>>(
    {}
  );

  // utility to create candidate filename variants to try when an image fails
  const makeCandidates = (src: string) => {
    const set = new Set<string>();
    set.add(src);

    try {
      const m = src.match(/^(\/?[^\/]*\/)*([^\/]+)(\.\w+)$/);
      if (m) {
        const dir = m[1] || "";
        const fname = m[2];
        const ext = m[3] || "";

        // lowercase entire path
        set.add(src.toLowerCase());
        // remove `-green` (common suffix we added)
        set.add(src.replace(/-green/gi, ""));
        set.add(src.toLowerCase().replace(/-green/gi, ""));
        // replace spaces with hyphens and lowercase
        set.add(`${dir}${fname.replace(/\s+/g, "-")}${ext}`);
        set.add(`${dir}${fname.replace(/\s+/g, "-").toLowerCase()}${ext}`);
        // singularize (if fname ends with 's')
        if (fname.endsWith("s")) {
          set.add(`${dir}${fname.slice(0, -1)}${ext}`);
          set.add(`${dir}${fname.slice(0, -1).toLowerCase()}${ext}`);
          set.add(`${dir}${fname.slice(0, -1)}-green${ext}`);
        }
        // underscores -> hyphens
        set.add(`${dir}${fname.replace(/_/g, "-")}${ext}`);
        set.add(`${dir}${fname.replace(/_/g, "-").toLowerCase()}${ext}`);
      }
    } catch (e) {
      // fall through — best effort
    }

    // add a generic lowercase / no-green fallback variants
    set.add(src.replace(/\/([A-Z])/g, (s) => s.toLowerCase()));
    return Array.from(set);
  };

  // Try to load images at runtime and pick the first candidate that loads successfully.
  useEffect(() => {
    let mounted = true;
    const newMap: Record<string, string> = {};

    const checkImage = (src: string) =>
      new Promise<boolean>((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = src;
      });

    (async () => {
      for (const p of PRODUCTS) {
        const key = p.link ?? p.name;
        const candidates = makeCandidates(p.imageSrc);

        let found = false;
        for (const c of candidates) {
          // attempt to load candidate
          // note: the browser may cache 404s; this is still useful to identify wrong names
          // also it's asynchronous — we await sequentially to reduce parallel network churn
          // (fine for small lists)
          // If you prefer parallel checks, we can change to Promise.all
          // but sequential is simpler and avoids too many requests at once.
          // eslint-disable-next-line no-await-in-loop
          const ok = await checkImage(c);
          if (ok) {
            newMap[key] = c;
            found = true;
            break;
          }
        }

        if (!found) {
          // fallback - ensure you have this placeholder in `public/no-image.png`
          newMap[key] = "/no-image.png";
          // helpful console warning for you to fix the filename in public/
          // (shows the original attempted src)
          // remove or change this once you fix the files.
          // eslint-disable-next-line no-console
          console.warn(
            `Image not found for product "${p.name}". attempted candidates:`,
            candidates,
            ". Falling back to /no-image.png"
          );
        }

        if (!mounted) return;
      }

      if (mounted) setResolvedImages((prev) => ({ ...prev, ...newMap }));
    })();

    return () => {
      mounted = false;
    };
  }, []);

  // Filtering + Sorting
  const filteredProducts = useMemo(() => {
    let list = PRODUCTS.filter((product) => {
      if (stockFilter !== null && product.inStock !== stockFilter) return false;
      if (
        colorFilters.length > 0 &&
        !colorFilters.every((c) => product.colors.includes(c))
      )
        return false;
      return true;
    });

    switch (sortOption) {
      case "low-to-high":
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case "popularity":
        list = [...list].sort(
          (a, b) => (b.popularity ?? 0) - (a.popularity ?? 0)
        );
        break;
      case "rating":
        list = [...list].sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
        break;
      case "latest":
        list = [...list].sort((a, b) => (b.latest ?? 0) - (a.latest ?? 0));
        break;
      default:
        break;
    }

    return list;
  }, [stockFilter, colorFilters, sortOption]);

  // pagination
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
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="border border-gray-400 rounded p-1 w-[15%] text-sm text-left cursor-pointer"
                >
                  <option value="default">Default sorting</option>
                  <option value="popularity">Sort by popularity</option>
                  <option value="rating">Sort by average rating</option>
                  <option value="latest">Sort by latest</option>
                  <option value="low-to-high">
                    Sort by price: low to high
                  </option>
                  <option value="high-to-low">
                    Sort by price: high to low
                  </option>
                </select>
              )}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {currentProducts.map((product) => {
                const key = product.link ?? product.name;
                const resolved = resolvedImages[key] ?? product.imageSrc; // use resolved src if we found it
                return (
                  <ProductCardWithPrice
                    key={key}
                    {...product}
                    imageSrc={resolved}
                  />
                );
              })}
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
}
