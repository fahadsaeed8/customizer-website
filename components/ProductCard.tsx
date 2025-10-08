import React, { useState } from "react";
import AddToCartModal from "./AddToCartModal";

interface ProductCardProps {
  name: string;
  imageSrc: string;
  price?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, imageSrc, price }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const productData = {
    title: name,
    price: price || 0,
    image: imageSrc,
    color: "Default",
    size: "Default",
    quantity: 1,
  };

  return (
    <div className="border border-gray-300 p-3 rounded text-center shadow-xl hover:shadow-lg transition">
      <img
        src={imageSrc}
        alt={`Product Image of ${name}`}
        className="w-full h-48 object-contain mx-auto"
      />

      <h3 className="font-semibold uppercase mt-2 text-lg">{name}</h3>

      {price !== undefined && (
        <div className="flex justify-center text-[30px] font-bold mb-1 space-x-1">
          <span className="text-lg font-semibold !align-top">$</span>
          <span className="sm:text-4xl text-4xl font-semibold">{price}.</span>
          <span className="text-lg font-semibold align-top">00</span>
        </div>
      )}

      <div className="flex gap-3 justify-center mt-3">
        <button className="bg-[#ad2525] text-white text-[16px] cursor-pointer px-3 py-1 rounded hover:bg-red-700 transition">
          Customize
        </button>

        <button
          className="bg-[#31af36] text-white text-[16px] px-3 py-1 cursor-pointer rounded hover:bg-green-700 transition"
          onClick={() => setIsModalOpen(true)}
        >
          Add to Cart
        </button>
      </div>

      <AddToCartModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productData={productData}
      />
    </div>
  );
};

export default ProductCard;
