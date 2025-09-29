"use client";

import Image from "next/image";

const items = [
  {
    src: "/famlife-flex/long-sleeves-t-shirt.jpg",
    label: "Long-sleeves T shirt",
  },
  {
    src: "/co-elite/CO-ELITE-FLEECE-HOODIE.jpg",
    label: "CO ELITE FLEECE HOODIE",
  },
  { src: "/hyfields-hawks/ARM-SLEEVES.jpg", label: "ARM SLEEVES" },
  { src: "/buffs/buff-socks.jpg", label: "SOCKS" },
  { src: "/protomac/protomac-arm-sleeve-min2.jpg", label: "ARM SLEEVES" },
  { src: "/an-rams/backpack-4-min.jpg", label: "BACKPACK" },
  { src: "/protomac-wolverines/beanie-2-min.jpg", label: "Beanies" },
  { src: "/aas-eagles/Duffle-Bag-green.jpg", label: "Duffle Bag" },
  { src: "/accessories/coming-soon-600x600.jpg", label: "FAMLIFE FLEX" },
  { src: "/va-jags/Bags-va.jpeg", label: "Bags" },
];

export default function SlideReel() {
  return (
    <div className="w-full overflow-hidden py-6 bg-lime-300 relative">
      <div className="flex w-max animate-scroll">
        {/* 🔹 Render items twice for seamless scroll */}
        {[...items, ...items].map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center border-2 border-dashed border-red-500 rounded-lg p-3 bg-white min-w-[200px] shadow-md mx-3"
          >
            <Image
              src={item.src}
              alt={item.label}
              width={180}
              height={180}
              className="object-contain"
            />
            <p className="text-sm font-semibold text-black mt-2">
              {item.label}
            </p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .animate-scroll {
          display: flex;
          animation: scroll 40s linear infinite;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
