"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getBannerAPI } from "@/services/api";

export default function HeroSwiper() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Fetch banners data
  const { data } = useQuery({
    queryKey: ["banners"],
    queryFn: async () => getBannerAPI(),
  });

  const banners = data?.response?.data?.results || [];

  // Default slides if API returns empty
  const defaultSlides = [
    {
      subtitle: "Unveiling the Unique Side of Customize Team Uniforms",
      image: "/LandingPageMainImage.jpg",
    },
    {
      subtitle: "High-performance designs tailored for your team.",
      image: "/LandingPageMainImage.jpg",
    },
    {
      subtitle: "Stand out on the field with customized uniforms.",
      image: "/LandingPageMainImage.jpg",
    },
  ];

  const slides = banners.length > 0 ? banners : defaultSlides;

  // Auto slide functionality
  useEffect(() => {
    if (slides.length <= 1) return;

    const interval = setInterval(() => {
      handleNextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentSlide, slides.length]);

  // Scroll animation effect
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

  const handleNextSlide = () => {
    if (isTransitioning || slides.length <= 1) return;

    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const handlePrevSlide = () => {
    if (isTransitioning || slides.length <= 1) return;

    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const goToSlide = (index: any) => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentSlide(index);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <div className="relative w-full h-[130vh] lg:h-[100vh]">
      {/* Dynamic Background Images with Slider Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {/* All slides as background images */}
        {slides.map((slide: any, index: number) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image || "/LandingPageMainImage.jpg"}
              alt={`background-${index}`}
              fill
              priority={index === 0}
              className="object-cover object-top"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row h-full items-center justify-between px-2 md:px-0 md:pl-10 py-20 md:py-0">
        {/* Left Side Content (Text only) */}
        <div className="w-full md:w-1/2 text-white text-center md:text-left">
          <Link href="/">
            <Image
              src="/PROSIX-LOGO.png"
              width={390}
              height={390}
              alt="logo"
              className="invert cursor-pointer mx-auto md:mx-0 scroll-animate-down"
            />
          </Link>

          {/* Text Slider */}
          <div className="my-7 h-24 md:h-32 overflow-hidden">
            <div
              className="transition-transform duration-700 ease-in-out"
              // style={{ transform: `translateY(-${currentSlide * 100}%)` }}
            >
              {/* {slides.map((slide, idx) => ( */}
              <div className="w-full md:w-[50%] py-4">
                <h1 className="text-lg sm:text-xl md:text-2xl font-extralight">
                  {slides[currentSlide]?.description ||
                    slides[currentSlide]?.subtitle}
                </h1>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          {slides.length > 1 && (
            <div className="flex justify-center md:justify-start space-x-2 mt-4">
              {slides.map((_: any, idx: number) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    idx === currentSlide
                      ? "bg-white scale-125"
                      : "bg-gray-400 hover:bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          )}

          {/* Navigation Buttons for Desktop */}
          {slides.length > 1 && (
            <div className="hidden md:flex space-x-4 mt-6">
              <button
                onClick={handlePrevSlide}
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all duration-300"
                aria-label="Previous slide"
              >
                ←
              </button>
              <button
                onClick={handleNextSlide}
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all duration-300"
                aria-label="Next slide"
              >
                →
              </button>
            </div>
          )}

          <button className="mt-6 text-[20px] sm:text-[22px] md:text-[24px] cursor-pointer text-white px-6 sm:px-8 md:px-10 py-2 rounded-full bg-gradient-to-r from-gray-500 via-gray-800 to-gray-200 hover:opacity-90 transition duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] animate-pulse scroll-animate-up">
            Shop
          </button>
        </div>

        {/* Right Side Static Image (Mobile) */}
        <div className="flex md:hidden justify-center mt-6">
          <div className="w-[300px] sm:w-[280px] h-[300px] sm:h-[380px] relative scroll-animate-right">
            <Image
              src={slides[currentSlide]?.image || "/LandingPageMainImage.jpg"}
              alt="player"
              fill
              className="object-cover rounded-xl shadow-2xl"
              sizes="(max-width: 640px) 300px, 280px"
            />
          </div>
        </div>

        {/* Right Side Static Image (Desktop) */}
        <div className="hidden md:flex md:w-1/2 justify-end items-center">
          <div className="w-[320px] h-[420px] relative scroll-animate-left">
            <Image
              src={slides[currentSlide]?.image || "/LandingPageMainImage.jpg"}
              alt="player"
              fill
              className="object-cover rounded-l-2xl shadow-2xl"
              sizes="320px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
