"use client";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const page = () => {
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

  const categories = [
    {
      label: "Categories01",
      image: "/accessories/coming-soon-600x600.jpg",
      link: "/fan-store/duffle-packs",
    },
    {
      label: "Categories02",
      image: "/accessories/coming-soon-600x600.jpg",
      link: "/fan-store/back-packs",
    },
    {
      label: "Categories03",
      image: "/accessories/coming-soon-600x600.jpg",
      link: "/fan-store/custom-hats",
    },
    {
      label: "Categories04",
      image: "/accessories/coming-soon-600x600.jpg",
      link: "/fan-store/custom-socks",
    },
    {
      label: "Categories05",
      image: "/accessories/coming-soon-600x600.jpg",
      link: "/fan-store/head-bands",
    },
    {
      label: "Categories06",
      image: "/accessories/coming-soon-600x600.jpg",
      link: "/fan-store/softshell-headguard",
    },
    {
      label: "Categories07",
      image: "/accessories/coming-soon-600x600.jpg",
      link: "/fan-store/football-gloves",
    },
    {
      label: "Categories08",
      image: "/accessories/coming-soon-600x600.jpg",
      link: "/fan-store/hand-warmers",
    },
    {
      label: "Categories09",
      image: "/accessories/coming-soon-600x600.jpg",
      link: "/fan-store/arm-sleeves",
    },
    {
      label: "Categories10",
      image: "/accessories/coming-soon-600x600.jpg",
      link: "/fan-store/spats-covers",
    },
    {
      label: "Categories11",
      image: "/accessories/coming-soon-600x600.jpg",
      link: "/fan-store/leg-sleeves",
    },
    {
      label: "Categories12",
      image: "/accessories/coming-soon-600x600.jpg",
      link: "/fan-store/leg-sleeves-2",
    },
  ];
  return (
    <div>
      <div className="px-6 md:px-20 py-[180px] min-h-screen flex md:flex-row flex-col flex-wrap gap-10">
        <div className="scroll-animate-left mt-35 max-w-[400px] flex-1">
          <h2 className="text-[36px] font-bold mb-2">FAN STORE</h2>
          <p className="text-[22px] font-bold uppercase text-black mb-1">
            CHOOSE THE SPORTS YOU WANT TO CUSTOMIZE / WEAR
          </p>
          <p className="text-[22px] text-gray-700 mb-6">
            After you make your selection, the uniform of your choice becomes
            the canvas. We encourage creativity here at Prosix sports.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 flex-1 scroll-animate-down">
          {categories.map((item, index) => (
            <Link href={item.link} key={index} className="text-center block">
              <div className="relative w-full h-[250px]">
                <Image
                  src={item.image}
                  alt={item.label}
                  layout="fill"
                  objectFit="cover"
                  className="cursor-pointer grayscale hover:grayscale-0 transition-all duration-300 rounded-lg"
                />
              </div>
              <p className="text-[22px] cursor-pointer text-shadow-2xs text-shadow-amber-400 font-bold uppercase">
                {item.label}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
