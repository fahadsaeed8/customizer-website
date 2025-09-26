"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const images = ["/cate01.jpg", "/cate03.jpg", "/cate04.jpg", "/cate05.jpg"];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(1); // ✅ start from 2nd image

  return (
    <section className="relative w-full h-[110vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Black Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/LandingPageMainImage.jpg"
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

      {/* Swiper Slider */}
      <div className="relative w-full max-w-[1200px] z-20">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={25}
          centeredSlides={true}
          slidesPerView={3} // ✅ default desktop view = 3 images
          initialSlide={1} // ✅ show left + center + right on load
          breakpoints={{
            0: { slidesPerView: 1, initialSlide: 0 }, // ✅ mobile = 1 image
            640: { slidesPerView: 3, initialSlide: 1 }, // ✅ desktop = 3 images
          }}
          onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
          className="flex items-center justify-center"
        >
          {images.map((src, index) => {
            const isActive = index === currentIndex;
            return (
              <SwiperSlide key={index} className="flex justify-center">
                {/* ✅ Rounded corners fix */}
                <div
                  className={`relative rounded-xl overflow-hidden transition-all duration-700 ease-in-out transform ${
                    isActive
                      ? "scale-110 opacity-100 z-20 shadow-2xl"
                      : "scale-90 opacity-60 z-10"
                  }`}
                >
                  <Image
                    src={src}
                    alt={`Slide ${index}`}
                    width={500}
                    height={400}
                    className="object-contain"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
