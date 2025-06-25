import React, { useState } from "react";
import AddToCartModal from "./AddToCartModal";

interface ProductCardProps {
  name: string;
  imageSrc: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, imageSrc }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="border border-gray-300 p-3 rounded text-center hover:shadow-lg transition">
      <img
        src={imageSrc}
        alt={`Product Image of ${name}`}
        className="w-full h-48 object-contain mx-auto"
      />

      <h3 className="font-semibold uppercase mt-2 text-lg">{name}</h3>

      <div className="flex gap-3 justify-center mt-3">
        <button className="bg-[#ad2525] text-white text-sm cursor-pointer px-4 py-2 rounded hover:bg-red-700 transition">
          Customize
        </button>

        <button
          className="bg-[#31af36] text-white text-sm px-4 py-2 cursor-pointer rounded hover:bg-green-700 transition"
          onClick={() => setIsModalOpen(true)}
        >
          Add to Cart
        </button>
      </div>

      <AddToCartModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default ProductCard;
