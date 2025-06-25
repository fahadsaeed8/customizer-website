"use client";
import Sidebar from "@/components/common/Sidebar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

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

  const products = [
    {
      name: "BLACKHAWKS",
      imageSrc: "/american-football/1.jpg",
    },
    {
      name: "BRONCOS",
      imageSrc: "/american-football/2.jpg",
    },
    {
      name: "Buccaneers Football Uniform",
      imageSrc: "/american-football/3.png",
    },
    {
      name: "CHIEFS",
      imageSrc: "/american-football/4.jpg",
    },
    {
      name: "Cobras Football Uniform",
      imageSrc: "/american-football/5.png",
    },
    {
      name: "DUCKS",
      imageSrc: "/american-football/6.jpg",
    },
    {
      name: "Eagles Football Uniform",
      imageSrc: "/american-football/7.png",
    },
    {
      name: "FALCONS",
      imageSrc: "/american-football/8.jpg",
    },
    {
      name: "Hornets Football Uniform",
      imageSrc: "/american-football/9.png",
    },
    {
      name: "Hurricanes Football Uniform",
      imageSrc: "/american-football/10.png",
    },
    {
      name: "Jaguars Football Uniform",
      imageSrc: "/american-football/11.png",
    },
    {
      name: "KNIGHTS",
      imageSrc: "/american-football/12.jpg",
    },
    {
      name: "Packers Football Uniform",
      imageSrc: "/american-football/13.png",
    },
    {
      name: "PANTHERS",
      imageSrc: "/american-football/14.jpg",
    },
    {
      name: "Panthers Football Uniform",
      imageSrc: "/american-football/15.png",
    },
    {
      name: "PREDATORS",
      imageSrc: "/american-football/16.jpg",
    },
    {
      name: "RAMS",
      imageSrc: "/american-football/17.jpg",
    },
    {
      name: "Ravens Football Uniform",
      imageSrc: "/american-football/18.png",
    },
    {
      name: "Rhinos Football Uniform",
      imageSrc: "/american-football/19.png",
    },
    {
      name: "SAINTS",
      imageSrc: "/american-football/20.jpg",
    },
    {
      name: "Seahawks Football Uniform",
      imageSrc: "/american-football/21.png",
    },
    {
      name: "SEMINOLES",
      imageSrc: "/american-football/22.jpg",
    },
    {
      name: "Steelers Football Uniform",
      imageSrc: "/american-football/23.png",
    },
    {
      name: "TAR HEELS",
      imageSrc: "/american-football/24.jpg",
    },
    {
      name: "Texans Football Uniform",
      imageSrc: "/american-football/25.png",
    },
    {
      name: "Timber-wolef Football Uniform",
      imageSrc: "/american-football/26.png",
    },
    {
      name: "Titans Football Uniform",
      imageSrc: "/american-football/27.png",
    },
    {
      name: "Wolves Football Uniform",
      imageSrc: "/american-football/28.png",
    },
  ];

  const totalPages = Math.ceil(products.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

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
          | <span className="text-gray-700">AMERICAN FOOTBALL</span>
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <Sidebar />

          <div className="w-full">
            <h2 className="text-[26px] font-medium mb-2">AMERICAN FOOTBALL</h2>

            <div className="flex justify-between items-center mb-4">
              <p className="text-2xl">
                Showing {indexOfFirstProduct + 1}–
                {Math.min(indexOfLastProduct, products.length)} of{" "}
                {products.length} results
              </p>
              <select className="border border-gray-400 rounded p-1 w-[15%] text-sm text-left cursor-pointer">
                <option>Default sorting</option>
                <option>Sort by popularity</option>
                <option>Sort by average rating</option>
                <option>Sort by latest</option>
                <option>Sort by price: low to high</option>
                <option>Sort by price: high to low</option>
              </select>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {currentProducts.map((product) => (
                <ProductCard key={product.name} {...product} />
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
