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
      label: "AMERICAN FOOTBALL",
      image: "/team-wear/01-min-768x768.jpg",
      link: "/products/accessories",
    },
    {
      label: "7v7 UNIFORM",
      image: "/team-wear/02-min-768x768.jpg",
      link: "/products/accessories",
    },
    {
      label: "BASKETBALL",
      image: "/team-wear/03-min-1-768x768.jpg",
      link: "/products/accessories",
    },
    {
      label: "BASEBALL",
      image: "/team-wear/04-min-1-300x300.jpg",
      link: "/products/accessories",
    },
    {
      label: "FLAG FOOTBALL UNIFORM",
      image: "/team-wear/05-min-1-1-300x300.jpg",
      link: "/products/accessories",
    },
    {
      label: "RUGBY UNIFORM",
      image: "/team-wear/coming-soon-600x600.jpg",
      link: "/products/accessories",
    },
    {
      label: "SOCCER UNIFORM",
      image: "/team-wear/07-min-1-300x300.jpg",
      link: "/products/accessories",
    },
    {
      label: "CHEERLEADING",
      image: "/team-wear/coming-soon-600x600.jpg",
      link: "/products/accessories",
    },
    {
      label: "Ice Hockey",
      image: "/team-wear/coming-soon-600x600.jpg",
      link: "/products/accessories",
    },
    {
      label: "Boxing",
      image: "/team-wear/coming-soon-600x600.jpg",
      link: "/products/accessories",
    },
  ];
  return (
    <div>
      <div className="px-6 md:px-20 py-[180px] min-h-screen flex flex-wrap gap-10">
        <div className="scroll-animate-left mt-35 max-w-[400px] flex-1">
          <h2 className="text-[36px] font-bold mb-2">Team Wear</h2>
          <p className="text-[22px] font-bold uppercase text-black mb-1">
            CHOOSE THE SPORTS YOU WANT TO CUSTOMIZE / WEAR
          </p>
          <p className="text-[22px] text-gray-700 mb-6">
            After you make your selection, the uniform of your choice becomes
            the canvas. We encourage creativity here at Prosix sports.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 flex-1 scroll-animate-down">
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
