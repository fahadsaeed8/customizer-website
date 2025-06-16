"use client";
import React, { useEffect } from "react";

const CallToAction = () => {
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
    <div
      className="relative bg-cover bg-center bg-no-repeat min-h-[400px] flex items-center justify-center text-center px-4"
      style={{ backgroundImage: "url('/banner-footer.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 "></div>

      {/* Content */}
      <div className="relative z-10 text-white max-w-xl">
        <p className="text-[18px] mb-2 opacity-80 scroll-animate-down">
          You are at the right step now
        </p>
        <h2 className="text-2xl scroll-animate-left md:text-[40px] font-bold leading-snug">
          Purchase Jogwire <br />& Create Beautiful Online Stores
        </h2>

        <button className="mt-6 scroll-animate-up inline-flex items-center gap-2 bg-gradient-to-r from-gray-500 via-gray-800 to-gray-200 text-white px-5 py-2 rounded-full text-[20px] cursor-pointer font-semibold hover:opacity-90 transition">
          {/* SVG Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m12-9l2 9m-6-4a1 1 0 100 2 1 1 0 000-2zm-6 0a1 1 0 100 2 1 1 0 000-2z"
            />
          </svg>
          Buy Jogwire Now
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
