"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // 👈 Navigation hata diya
import "swiper/css";
import "swiper/css/pagination"; // 👈 navigation css bhi hata diya
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const slides = [
  {
    subtitle: "Unveiling the Unique Side of Customize Team Uniforms",
  },
  {
    subtitle: "High-performance designs tailored for your team.",
  },
  {
    subtitle: "Stand out on the field with customized uniforms.",
  },
];

export default function HeroSwiper() {
  useEffect(() => {
    if (typeof window === "undefined") return;

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
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          checkInView();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full h-[130vh] lg:h-[100vh]">
      {/* Background image */}
      <div className="absolute inset-0 ">
        <Image
          src="/LandingPageMainImage.jpg" // apni background image yahan daalo
          alt="background"
          fill
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row h-full items-center justify-between px-2 md:px-0 md:pl-10 py-20 md:py-0">
        {/* Left Side Swiper (Text only) */}
        <div className="w-full md:w-1/2 text-white text-center md:text-left ">
          <Link href="/">
            <Image
              src="/PROSIX-LOGO.png"
              width={390}
              height={390}
              alt="logo"
              className="invert  cursor-pointer mx-auto md:mx-0 "
            />
            {/* scroll-animate-down logo ki animation */}
          </Link>
          <Swiper
            modules={[Autoplay]} // 👈 navigation remove kiya
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            className="my-7"
          >
            {slides.map((slide, idx) => (
              // scroll-animate-left slider ki animation
              <SwiperSlide key={idx}>
                <div className="w-full md:w-[50%]">
                  <h1 className="text-lg sm:text-xl md:text-2xl font-extralight ">
                    {slide.subtitle}
                  </h1>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* scroll-animate-up  button ki animation */}
          <button
            className="mt-4 text-[20px] sm:text-[22px] md:text-[24px] cursor-pointer text-white px-6 sm:px-8 md:px-10 py-2 rounded-full bg-gradient-to-r from-gray-500 via-gray-800 to-gray-200 hover:opacity-90 transition duration-300 ease-in-out 
             hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] animate-pulse"
          >
            Shop
          </button>
        </div>

        {/* Right Side Static Image */}
        <div className="flex md:hidden justify-center mt-6">
          {/* scroll-animate-right image ki animation */}
          <div className="w-[300px] sm:w-[280px] h-[300px] sm:h-[380px] relative ">
            <Image
              src="/LandingPageMainImage.jpg" // yahan apni static image daalo
              alt="player"
              fill
              className="object-cover rounded-xl shadow-2xl"
            />
          </div>
        </div>

        <div className="hidden md:flex md:w-1/2 justify-end items-center">
         {/* scroll-animate-left image ki animation */}
          <div className="w-[320px] h-[420px] relative">
            <Image
              src="/LandingPageMainImage.jpg" // yahan apni static image daalo
              alt="player"
              fill
              className="object-cover rounded-l-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
