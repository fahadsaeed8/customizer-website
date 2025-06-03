import Image from "next/image";
import React from "react";

const RelatedProducts = () => {
  return (
    <div className="relative min-h-screen text-gray-800 bg-[url('/single-product-bg.jpg')] bg-cover bg-no-repeat bg-center">
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/single-product-img.jpg"
          alt="Overlay Image"
          className="mt-[320px] rounded-xl"
          width={600}
          height={600}
          style={{
            objectFit: "contain",
          }}
        />
      </div>

      <div className="relative z-10 flex items-center justify-center text-center px-4 min-h-screen">
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
