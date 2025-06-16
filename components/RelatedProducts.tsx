"use client";
import Image from "next/image";
import React, { useEffect } from "react";

const RelatedProducts = () => {
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
    <div className="relative min-h-screen text-gray-800 bg-[url('/single-product-bg.jpg')] bg-cover bg-no-repeat bg-center">
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/single-product-img.jpg"
          alt="Overlay Image"
          className="mt-[320px] rounded-xl scroll-animate-up"
          width={600}
          height={600}
          style={{
            objectFit: "contain",
          }}
        />
      </div>

      <div className="relative scroll-animate-down z-10 flex items-center justify-center text-center px-4 min-h-screen">
        <div className="-mt-[350px]">
          <p className="text-[24px] text-white tracking-[1.5px] font-bold mb-2">
            Product Page Variations{" "}
          </p>

          <p className="text-gray-400 w-full md:w-[60%] mx-auto tracking-[0.5px] font-bold text-sm">
            Customize each product variations individually. Set the most
            appropriate zoom effect, page structure, sidebar position etc.
          </p>
          <div className="h-[1px] w-[60px] mt-5 mx-auto bg-gradient-to-r from-orange-500 to-transparent mb-4" />
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
