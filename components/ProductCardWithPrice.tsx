import React, { useState } from "react";
import AddToCartModal from "./AddToCartModal";
import Link from "next/link";

interface ProductCardWithProps {
  name: string;
  imageSrc: string;
  price: number;
  link?: string;
}

const ProductCardWithPrice: React.FC<ProductCardWithProps> = ({
  name,
  imageSrc,
  price,
  link,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="border border-gray-300 p-3 rounded text-center shadow-xl hover:shadow-lg transition w-62">
      <img
        src={imageSrc}
        alt={`Product Image of ${name}`}
        className="w-full h-56 object-contain mx-auto"
      />

      <h3 className="font-semibold uppercase mt-2 text-2xl">{name}</h3>

      <div className="flex justify-center text-[30px] font-bold mb-1 space-x-1">
        <span className="text-lg font-semibold !align-top">$</span>
        <span className="sm:text-4xl text-4xl font-semibold">{price}.</span>
        <span className="text-lg font-semibold align-top">00</span>
      </div>

      <div className="flex gap-3 justify-center mt-3">
        {link ? (
          <Link
            href={link}
            className="bg-[#ad2525] text-white text-[19px] cursor-pointer px-4 py-1 rounded-md hover:bg-[#414141] transition mt-2 block text-center"
          >
            Select options
          </Link>
        ) : (
          <button className="bg-[#ad2525] text-white text-[19px] cursor-pointer px-4 py-1 rounded-md hover:bg-[#414141] transition mt-2">
            Select options
          </button>
        )}
      </div>

      <AddToCartModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default ProductCardWithPrice;
