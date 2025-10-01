"use client";
import Image from "next/image";

const ShopSection = () => {
  const images = [
    "/cate01.jpg",
    "/cate03.jpg",
    "/cate02.jpg",
    "/cate04.jpg",
    "/cate05.jpg",
  ];

  return (
    <section className=" h-full lg:h-screen flex items-center justify-center px-2 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full h-full">
        {/* LEFT SIDE (2 Images stacked) */}
        <div className="grid grid-rows-2 gap-6 md:gap-6">
          {images.slice(0, 2).map((src, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer h-48 sm:h-60 md:h-auto"
            >
              {/* Image */}
              <Image
                src={src}
                alt={`left-${idx}`}
                fill
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 group-hover:bg-black/30 transition duration-500"></div>

              {/* Button */}
              <div className="absolute px-2 bottom-4 left-1/2 -translate-x-1/2 group-hover:bottom-1/3 group-hover:-translate-y-1/2 transition-all w-full duration-700 ease-in-out">
                <button className="px-6 text-2xl cursor-pointer py-2 w-full bg-white/50 text-black font-semibold shadow-md hover:bg-gray-200 transition rounded">
                  SHOP NOW
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CENTER MAIN IMAGE */}
        <div className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer h-64 sm:h-80 md:h-auto">
          <Image
            src={images[2]}
            alt="main"
            fill
            className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          />

          <div className="absolute inset-0 group-hover:bg-black/30 transition duration-500"></div>

          <div className="absolute w-full px-2 bottom-4 left-1/2 -translate-x-1/2 group-hover:bottom-1/2 group-hover:-translate-y-1/2 transition-all duration-700 ease-in-out">
            <button className="px-6 cursor-pointer w-full py-2 bg-white/50 text-black font-semibold text-2xl shadow-md hover:bg-gray-200 transition rounded">
              SHOP NOW
            </button>
          </div>
        </div>

        {/* RIGHT SIDE (2 Images stacked) */}
        <div className="grid grid-rows-2 gap-6 md:gap-6">
          {images.slice(3, 5).map((src, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer h-48 sm:h-60 md:h-auto"
            >
              <Image
                src={src}
                alt={`right-${idx}`}
                fill
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 group-hover:bg-black/30 transition duration-500"></div>
              <div className="absolute w-full px-2 bottom-4 left-1/2 -translate-x-1/2 group-hover:bottom-1/3 group-hover:-translate-y-1/2 transition-all duration-700 ease-in-out">
                <button className="px-6 cursor-pointer py-2 w-full bg-white/50 text-black font-semibold text-2xl shadow-md hover:bg-gray-200 transition rounded">
                  SHOP NOW
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
