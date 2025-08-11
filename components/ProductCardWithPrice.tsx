import React, { useState } from "react";
import AddToCartModal from "./AddToCartModal";

interface ProductCardProps {
  name: string;
  imageSrc: string;
  price: number; 
}

const ProductCardWithPrice: React.FC<ProductCardProps> = ({ name, imageSrc, price }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="border border-gray-300 p-3 rounded text-center shadow-xl hover:shadow-lg transition">
      <img
        src={imageSrc}
        alt={`Product Image of ${name}`}
        className="w-full h-48 object-contain mx-auto"
      />

      <h3 className="font-semibold uppercase mt-2 text-lg">{name}</h3>
      <p className="text-lg font-bold mt-1">${price}</p>


      <div className="flex gap-3 justify-center mt-3">
        <button className="bg-red-600 text-white text-[16px] cursor-pointer px-4 py-2 rounded hover:bg-[#a2e632] transition mt-2">
  Select options
</button>
      </div>

      <AddToCartModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default ProductCardWithPrice;
