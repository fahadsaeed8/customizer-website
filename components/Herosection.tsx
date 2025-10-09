// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useState, useEffect } from "react";

// const Herosection = () => {
//   const messages = [
//     {
//       text: "AMERICAN FOOTBALL UNIFORMS",
//       subText: "Unveiling the Unique Side of Customize Team Uniforms",
//     },
//     {
//       text: "CLOTHING AND APPARELS",
//       subText: "Unveiling the Unique Side of Customize Team Uniforms",
//     },
//     {
//       text: "BASKETBALL UNIFORMS",
//       subText: "Unveiling the Unique Side of Customize Team Uniforms.",
//     },
//     {
//       text: "LACROSSE   UNIFORMS",
//       subText: "Unveiling the Unique Side of Customize Team Uniforms",
//     },
//     {
//       text: "7v7  Football  Uniforms",
//       subText: "Unveiling the Unique Side of Customize Team Uniforms",
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? messages.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === messages.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   useEffect(() => {
//     const animateElements = document.querySelectorAll(
//       ".scroll-animate-up, .scroll-animate-down, .scroll-animate-left, .scroll-animate-right"
//     );

//     function checkInView() {
//       animateElements.forEach((el) => {
//         const rect = el.getBoundingClientRect();
//         const isInView =
//           rect.top <=
//             (window.innerHeight || document.documentElement.clientHeight) *
//               0.75 && rect.bottom >= 0;

//         if (isInView) {
//           el.classList.add("in-view");
//         } else {
//           el.classList.remove("in-view");
//         }
//       });
//     }

//     checkInView();

//     let ticking = false;
//     window.addEventListener("scroll", () => {
//       if (!ticking) {
//         window.requestAnimationFrame(() => {
//           checkInView();
//           ticking = false;
//         });
//         ticking = true;
//       }
//     });
//     return () => {
//       window.removeEventListener("scroll", checkInView);
//     };
//   }, []);

//   return (
//     <div className="relative min-h-screen top-50 flex items-start justify-start px-12 bg-transparent">
//       <div className="z-10 max-w-4xl w-full">
//         {/* Slider content */}
//         <div className="relative scroll-animate-left flex md:px-[60px]  flex-col items-start gap-4 transition-all duration-500 ease-in-out">
//           {/* Logo */}
//           <Link href="/">
//             <Image
//               src="/PROSIX-LOGO.png"
//               width={390}
//               height={390}
//               alt="logo"
//               className="invert scroll-animate-down cursor-pointer"
//             />
//           </Link>

//           {/* Text + Subtext with animation */}
//           <div className="transition-all leading-[50px] duration-500 ">
//             <p className="text-[21px] md:text-[25px] font-bold text-gray-300 tracking-[3px]">
//               {messages[currentIndex].text}
//             </p>
//             <p className="text-[38px] md:text-[46px] md:w-[65%] tracking-normal text-white ">
//               {messages[currentIndex].subText}
//             </p>
//           </div>

//           {/* Call to Action */}
//           <button className="mt-4 text-[24px] cursor-pointer text-white px-10 py-3 rounded-full bg-gradient-to-r from-gray-500 via-gray-800 to-gray-200 hover:opacity-90 transition duration-300 ease-in-out">
//             Explore Demo
//           </button>
//         </div>

//         {/* Navigation buttons */}
//         <div className="absolute md:block hidden top-[100px] -translate-y-1/2 left-4 sm:left-8 z-20">
//           <button
//             onClick={handlePrev}
//             className="bg-gray-200 text-black cursor-pointer hover:bg-gray-400 px-[12px] py-[6px] rounded-full shadow transition"
//           >
//             <i className="fas fa-chevron-left" />
//           </button>
//         </div>
//         <div className="absolute md:block hidden top-[100px] -translate-y-1/2 right-4 sm:right-8 z-20">
//           <button
//             onClick={handleNext}
//             className="bg-gray-200 text-black cursor-pointer hover:bg-gray-400 px-[12px] py-[6px] rounded-full shadow transition"
//           >
//             <i className="fas fa-chevron-right" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Herosection;

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
    if (typeof window === "undefined") return; // ✅ Fix: prevent server-side error

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
              className="invert scroll-animate-down cursor-pointer mx-auto md:mx-0 "
            />
          </Link>
          <Swiper
            modules={[Autoplay]} // 👈 navigation remove kiya
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            className="my-7"
          >
            {slides.map((slide, idx) => (
              <SwiperSlide key={idx}>
                <div className="w-full md:w-[50%]">
                  <h1 className="text-lg sm:text-xl md:text-2xl font-extralight scroll-animate-left">
                    {slide.subtitle}
                  </h1>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            className="mt-4 text-[20px] sm:text-[22px] md:text-[24px] cursor-pointer text-white px-6 sm:px-8 md:px-10 py-2 rounded-full bg-gradient-to-r from-gray-500 via-gray-800 to-gray-200 hover:opacity-90 transition duration-300 ease-in-out scroll-animate-up
             hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] animate-pulse"
          >
            Shop
          </button>
        </div>

        {/* Right Side Static Image */}
        <div className="flex md:hidden justify-center mt-6">
          <div className="w-[300px] sm:w-[280px] h-[300px] sm:h-[380px] relative scroll-animate-right">
            <Image
              src="/LandingPageMainImage.jpg" // yahan apni static image daalo
              alt="player"
              fill
              className="object-cover rounded-xl shadow-2xl"
            />
          </div>
        </div>

        <div className="hidden md:flex md:w-1/2 justify-end items-center">
          <div className="w-[320px] h-[420px] relative scroll-animate-left">
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
