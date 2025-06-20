import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  const categories = [
    {
      label: "TEAM WEAR",
      image: "/product-images/01-min-2.jpg",
      link: "/products/accessories",
    },
    {
      label: "CLOTHING AND APPAREL",
      image: "/product-images/02-1-768x768.jpg",
      link: "/products/accessories",
    },
    {
      label: "ACCESSORIES",
      image: "/product-images/03-min-2-768x768.jpg",
      link: "/products/accessories",
    },
    {
      label: "FAN STORE",
      image: "/product-images/coming-soon-600x600.jpg",
      link: "/products/accessories",
    },
  ];
  return (
    <div>
      <div className="px-6 md:px-20 py-[180px] min-h-screen">
        <p className="text-[22px] uppercase text-gray-500 mb-2">
          Products page
        </p>

        <h2 className="text-[36px] font-bold mb-2">PRODUCTS</h2>
        <p className="text-[22px] font-bold uppercase text-black mb-1">
          CHOOSE THE SPORTS YOU WANT TO CUSTOMIZE / WEAR
        </p>
        <p className="text-[22px] text-gray-700 mb-6 max-w-[30%]">
          After you make your selection, the uniform of your choice becomes the
          canvas. We encourage creativity here at Press sports.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-8">
          {categories.map((item, index) => (
            <Link href={item.link} key={index} className="text-center block">
              <div className="relative w-full h-88">
                <Image
                  src={item.image}
                  alt={item.label}
                  layout="fill"
                  objectFit="contain"
                  className="cursor-pointer grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <p className="text-[22px] cursor-pointer text-shadow-2xs text-shadow-amber-400 font-bold uppercase mt-2">
                {item.label}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
