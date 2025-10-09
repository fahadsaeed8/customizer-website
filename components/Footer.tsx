"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import Link from "next/link";

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
    <footer className="bg-black text-white py-6 px-6 md:px-20 relative overflow-hidden min-h-[150px]">
      {/* Background pattern (optional) */}
      <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.png')] bg-repeat z-0"></div>

      {/* Top Logo */}
      <div className="relative scroll-animate-down z-10 flex flex-col items-center mb-10">
        <Link href="/" aria-label="Go to homepage">
          <Image
            src="/PROSIX-LOGO.png"
            width={250}
            height={250}
            alt="logo"
            className="invert transition-all duration-500 ease-in-out cursor-pointer"
          />
        </Link>
      </div>

      {/* Grid layout */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 border-y border-gray-700 pt-5 pb-20 text-center md:text-left items-center justify-items-center md:justify-items-start">
        {/* Opening Schedule */}
        <div className="w-full md:w-auto">
          <h3 className="font-bold text-[28px] md:text-[42px] mb-4 text-gray-300">
            OPENING SCHEDULE
          </h3>
          <p className="text-md flex justify-center md:justify-start items-center gap-16">
            <span className="">Days</span>Mon - Sat
          </p>
          <p className="text-md flex justify-center md:justify-start items-center gap-16 my-3">
            <span className="">Time</span>08:00 - 18:00
          </p>
          <p className="text-md flex justify-center md:justify-start items-center gap-12">
            Sunday: <span className="text-white">Closed</span>
          </p>
        </div>

        {/* Subscribe */}
        <div className="px-4 md:px-6 w-full md:w-auto">
          <h3 className="text-[32px] md:text-[102px] leading-none tracking-[0.9px] font-extrabold mb-2 text-gray-300">
            SUBSCRIBE
          </h3>
          <p className="text-lg text-center mb-4">
            To our newsletter for latest updates
          </p>
          <div className="flex justify-center gap-6 text-xl">
            <a
              href="https://www.facebook.com/prosixsports"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f cursor-pointer"></i>
            </a>
            <a
              href="https://www.instagram.com/prosixsports/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram cursor-pointer"></i>
            </a>
            <a
              href="https://www.youtube.com/prosixsports"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube cursor-pointer"></i>
            </a>
            <a
              href="https://x.com/prosixsports/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter cursor-pointer"></i>
            </a>
            <a
              href="https://www.pinterest.com/prosixsports/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-pinterest cursor-pointer"></i>
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="px-4 md:pl-25 w-full md:w-auto text-center md:text-left">
          <h3 className="font-bold text-[28px] leading-none md:text-[42px] mb-4 text-gray-300">
            CONTACT INFO
          </h3>
          <p className="">
            <a
              href="mailto:sales@prosix.com"
              className="text-[#be475c] hover:underline"
            >
              sales@prosix.com
            </a>
          </p>
          <p className=" text-[#be475c]">+ (929) 210 4402</p>
          <p className=" text-white mt-2 text-xl leading-none">
            19 Holly Cove Ln, Dover Delaware 19901
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="relative z-10 text-center text-xl text-gray-200 mt-6">
        Copyright © 2009 - 2024, All rights reserved by{" "}
        <a href="#" className=" text-white font-semibold hover:underline">
          Prosix Sports
        </a>
        .
      </div>
    </footer>
  );
};

export default Footer;
