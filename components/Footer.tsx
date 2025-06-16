"use client";
import Image from "next/image";
import React, { useEffect } from "react";

const Footer = () => {
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
    <footer className="bg-black text-white py-10 px-6 md:px-20 relative overflow-hidden">
      {/* Background pattern (optional) */}
      <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.png')] bg-repeat z-0"></div>

      {/* Top Logo */}
      <div className="relative scroll-animate-down z-10 flex flex-col items-center mb-10">
        <Image
          src="/PROSIX-LOGO.png"
          width={290}
          height={290}
          alt="logo"
          className="invert transition-all duration-500 ease-in-out"
        />
      </div>

      {/* Grid layout */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 border-y border-gray-700 py-8 text-center md:text-left items-center justify-items-center md:justify-items-start">
        {/* Opening Schedule */}
        <div className="w-full md:w-auto">
          <h3 className="font-bold text-[28px] md:text-[34px] mb-4 text-gray-300">
            OPENING SCHEDULE
          </h3>
          <p className="text-md flex justify-center md:justify-start items-center gap-12">
            <span className="text-gray-400">Days</span>Mon - Sat
          </p>
          <p className="text-md flex justify-center md:justify-start items-center gap-12">
            <span className="text-gray-400">Time</span>08:00 - 18:00
          </p>
          <p className="text-md text-gray-400 flex justify-center md:justify-start items-center gap-8">
            Sunday: <span className="text-white">Closed</span>
          </p>
        </div>

        {/* Subscribe */}
        <div className="px-4 md:px-22 w-full md:w-auto">
          <h3 className="text-[32px] md:text-[62px] tracking-[0.9px] font-extrabold mb-2 text-gray-300">
            SUBSCRIBE
          </h3>
          <p className="text-md text-center text-gray-400 mb-4">
            To our newsletter for latest updates
          </p>
          <div className="flex justify-center gap-4 text-xl">
            <i className="fab fa-facebook-f hover:text-gray-300 cursor-pointer"></i>
            <i className="fab fa-twitter hover:text-gray-300 cursor-pointer"></i>
            <i className="fab fa-google hover:text-gray-300 cursor-pointer"></i>
            <i className="fab fa-instagram hover:text-gray-300 cursor-pointer"></i>
            <i className="fab fa-linkedin-in hover:text-gray-300 cursor-pointer"></i>
          </div>
        </div>

        {/* Contact Info */}
        <div className="px-4 md:px-25 w-full md:w-auto text-center md:text-left">
          <h3 className="font-bold text-[28px] md:text-[34px] mb-4 text-gray-300">
            CONTACT INFO
          </h3>
          <p className="text-md">
            <a
              href="mailto:sales@prosix.com"
              className="text-red-500 hover:underline"
            >
              sales@prosix.com
            </a>
          </p>
          <p className="text-md text-red-500">+ (929) 210 4402</p>
          <p className="text-sm text-white mt-2">
            19 Holly Cove Ln, Dover Delaware 19901
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="relative z-10 text-center text-sm text-gray-400 mt-6">
        Copyright © 2009 - 2024, All rights reserved by{" "}
        <a href="#" className="text-blue-400 hover:underline">
          Prosix Sports
        </a>
        .
      </div>
    </footer>
  );
};

export default Footer;
