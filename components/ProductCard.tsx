import React, { useState } from "react";
import AddToCartModal from "./AddToCartModal";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  name: string;
  imageSrc: string;
  price?: number;
  product?: any;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  name,
  imageSrc,
  price,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [svgLoaded, setSvgLoaded] = useState(false);
  const router = useRouter();

  console.log("product123>", product);

  const handleSvgLoad = () => {
    setSvgLoaded(true);
  };

  const productData = {
    title: name,
    price: price || 0,
    image: imageSrc,
    color: "Default",
    size: "Default",
    quantity: 1,
  };

  // Get the three front layer images from apiData
  const frontBlackLayer = product?.apiData?.front_black_layer;
  const frontWhiteLayer = product?.apiData?.front_white_layer;
  const frontSvgLayer = product?.apiData?.front_svg_layer;

  // If we have the layered images, use them; otherwise use the fallback imageSrc
  const hasLayeredImages = frontBlackLayer && frontWhiteLayer && frontSvgLayer;

  return (
    <div className="border border-gray-300 p-3 rounded text-center shadow-xl hover:shadow-lg transition">
      {/* Image Container */}
      <div className="w-full h-fit relative mx-auto">
        {hasLayeredImages ? (
          // Stack the three images on top of each other
          <div className="relative w-full h-full">
            {/* SVG layer - hidden, used for loading/preloading */}
            <img
              src={frontSvgLayer}
              onLoad={handleSvgLoad}
              // style={{ display: "none" }}
              alt={`${name} - SVG Layer`}
              className="min-w-[219px] max-w-[219px] min-h-[219px] max-h-[219px]"
            />
            {/* White front layer with multiply blend mode */}
            <img
              src={frontWhiteLayer}
              alt={`${name} - White Layer`}
              className="absolute top-0 left-0 w-full h-full object-cover min-w-[219px] max-w-[219px] min-h-[219px] max-h-[219px]"
              style={{ mixBlendMode: "multiply", pointerEvents: "none" }}
            />
            {/* Black front layer with screen blend mode */}
            <img
              src={frontBlackLayer}
              alt={`${name} - Black Layer`}
              className="absolute top-0 left-0 w-full h-full object-cover min-w-[219px] max-w-[219px] min-h-[219px] max-h-[219px]"
              style={{ mixBlendMode: "screen", pointerEvents: "none" }}
            />
          </div>
        ) : (
          // Fallback to single image
          <img
            src={imageSrc}
            alt={`Product Image of ${name}`}
            className="w-full h-full object-contain"
          />
        )}
      </div>

      <h3 className="font-semibold uppercase mt-2 text-lg">{name}</h3>

      {price !== undefined && (
        <div className="flex justify-center text-[30px] font-bold mb-1 space-x-1">
          <span className="text-lg font-semibold !align-top">$</span>
          <span className="sm:text-4xl text-4xl font-semibold">{price}.</span>
          <span className="text-lg font-semibold align-top">00</span>
        </div>
      )}

      <div className="flex gap-3 justify-center mt-3">
        <button
          onClick={() =>
            router.push(
              // `http://localhost:3001/customize-product?id=${product?.apiData?.id}`
              `https://main.daiaot9t3d884.amplifyapp.com/customize-product?id=${product?.apiData?.id}`
            )
          }
          className="bg-[#ad2525] text-white text-[16px] cursor-pointer px-3 py-1 rounded hover:bg-red-700 transition"
        >
          Customize
        </button>

        {/* changed only the Add to Cart button color to the requested grey/blue gradient (keeps shape) */}
        <button
          className="text-white text-[16px] px-3 py-1 cursor-pointer rounded transition"
          style={{
            background: "linear-gradient(90deg,#39434d 0%,#dfe4e8 100%)",
            boxShadow: "inset 0 -2px 6px rgba(0,0,0,0.18)",
            textShadow: "0 1px 0 rgba(0,0,0,0.25)",
          }}
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
