"use client";

import { useState } from "react";
import Image from "next/image";

const images = ["/cate01.jpg", "/cate03.jpg", "/cate04.jpg", "/cate05.jpg"];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(1); // center image

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Function to get visible 3 images (prev, current, next)
  const getVisibleImages = () => {
    const prev = (currentIndex - 1 + images.length) % images.length;
    const next = (currentIndex + 1) % images.length;
    return [prev, currentIndex, next];
  };

  return (
    <section className="relative w-full h-[110vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Black Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/LandingPageMainImage.jpg" // ⚡ replace with your background image
          alt="football background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Center Text */}
      <div className="absolute top-10 text-center text-white z-30 ">
        <h1 className="text-4xl font-bold uppercase tracking-wide">
          Feel The Power of Football
        </h1>
        <p className="text-lg mt-2 opacity-90">
          Gear up with the best sportswear & dominate the field
        </p>
      </div>

      {/* Slider */}
      <div className="relative flex items-center justify-center w-full">
        <button
          onClick={prevSlide}
          className="absolute left-4 z-30 bg-white/30 p-2 rounded-full"
        >
          ◀
        </button>

        <div className="flex items-center justify-center gap-6 z-20">
          {getVisibleImages().map((index) => {
            const isActive = index === currentIndex;
            return (
              <div
                key={index}
                className={`relative transition-all duration-700 ease-in-out transform ${
                  isActive
                    ? "scale-110 opacity-100 z-20 shadow-2xl"
                    : "scale-90 opacity-60 z-10"
                }`}
              >
                <Image
                  src={images[index]}
                  alt={`Slide ${index}`}
                  width={400}
                  height={300}
                  className="rounded-xl object-cover"
                />
              </div>
            );
          })}
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-4 z-30 bg-white/30 p-2 rounded-full"
        >
          ▶
        </button>
      </div>
    </section>
  );
}
