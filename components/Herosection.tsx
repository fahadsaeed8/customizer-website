"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Herosection = () => {
  const messages = [
    {
      text: "AMERICAN FOOTBALL UNIFORMS",
      subText: "Unveiling the Unique Side of Customize Team Uniforms",
    },
    {
      text: "CLOTHING AND APPARELS",
      subText: "Unveiling the Unique Side of Customize Team Uniforms",
    },
    {
      text: "BASKETBALL UNIFORMS",
      subText: "Unveiling the Unique Side of Customize Team Uniforms.",
    },
    {
      text: "LACROSSE   UNIFORMS",
      subText: "Unveiling the Unique Side of Customize Team Uniforms",
    },
    {
      text: "7v7  Football  Uniforms",
      subText: "Unveiling the Unique Side of Customize Team Uniforms",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? messages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === messages.length - 1 ? 0 : prevIndex + 1
    );
  };

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
    <div className="relative min-h-screen top-50 flex items-start justify-start px-12 bg-transparent">
      <div className="z-10 max-w-4xl w-full">
        {/* Slider content */}
        <div className="relative scroll-animate-left flex md:px-[60px]  flex-col items-start gap-4 transition-all duration-500 ease-in-out">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/PROSIX-LOGO.png"
              width={390}
              height={390}
              alt="logo"
              className="invert scroll-animate-down cursor-pointer"
            />
          </Link>

          {/* Text + Subtext with animation */}
          <div className="transition-all leading-[50px] duration-500 ">
            <p className="text-[21px] md:text-[25px] font-bold text-gray-300 tracking-[3px]">
              {messages[currentIndex].text}
            </p>
            <p className="text-[38px] md:text-[46px] md:w-[65%] tracking-normal text-white ">
              {messages[currentIndex].subText}
            </p>
          </div>

          {/* Call to Action */}
          <button className="mt-4 text-[24px] cursor-pointer text-white px-10 py-3 rounded-full bg-gradient-to-r from-gray-500 via-gray-800 to-gray-200 hover:opacity-90 transition duration-300 ease-in-out">
            Explore Demo
          </button>
        </div>

        {/* Navigation buttons */}
        <div className="absolute md:block hidden top-[100px] -translate-y-1/2 left-4 sm:left-8 z-20">
          <button
            onClick={handlePrev}
            className="bg-gray-200 text-black cursor-pointer hover:bg-gray-400 px-[12px] py-[6px] rounded-full shadow transition"
          >
            <i className="fas fa-chevron-left" />
          </button>
        </div>
        <div className="absolute md:block hidden top-[100px] -translate-y-1/2 right-4 sm:right-8 z-20">
          <button
            onClick={handleNext}
            className="bg-gray-200 text-black cursor-pointer hover:bg-gray-400 px-[12px] py-[6px] rounded-full shadow transition"
          >
            <i className="fas fa-chevron-right" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
