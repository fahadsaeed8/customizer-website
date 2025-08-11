"use client";

import { useState, useRef } from "react";
import Image from "next/image";

interface Color {
  name: string;
  value: string;
  hex: string;
}

interface ZoomPosition {
  x: number;
  y: number;
  show: boolean;
}

export default function ProductPage() {
  const [selectedColor, setSelectedColor] = useState<string>("black");
  const [selectedSize, setSelectedSize] = useState<string>("M");
  const [activeTab, setActiveTab] = useState<string>("additional");
  const [selectedImage, setSelectedImage] = useState<string>(
    "/long-sleeves/LONG-SLEEVE-TSHIRT-3-min-scaled.jpg"
  );
  const [isZoomOpen, setIsZoomOpen] = useState<boolean>(false);
  const [zoomPosition, setZoomPosition] = useState<ZoomPosition>({
    x: 0,
    y: 0,
    show: false,
  });
  const imageRef = useRef<HTMLDivElement>(null);

  const productImages: string[] = [
    "/long-sleeves/LONG-SLEEVE-TSHIRT-3-min-scaled.jpg",
    "/long-sleeves/LONG-SLEEVE-TSHIRT-2-min-scaled.jpg",
    "/long-sleeves/LONG-SLEEVE-TSHIRT-min-1000x693.jpg",
  ];

  const colors: Color[] = [
    { name: "Black", value: "black", hex: "#000000" },
    { name: "White", value: "white", hex: "#ffffff" },
    { name: "Gray", value: "gray", hex: "#d1d5db" },
  ];

  const sizes: string[] = [
    "YS",
    "YM",
    "YL",
    "YXL",
    "S",
    "M",
    "L",
    "XL",
    "2XL",
    "3XL",
    "4XL",
    "Other",
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;

    const { left, top, width, height } =
      imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPosition({ x, y, show: true });
  };

  const handleMouseLeave = () => {
    setZoomPosition((prev) => ({ ...prev, show: false }));
  };

  return (
    <div className="min-h-screen px-6 py-[190px]">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          {/* Main Image with zoom effects */}
          <div
            className="relative border  border-gray-300 rounded overflow-hidden"
            style={{
              boxShadow:
                "0 -10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.1)",
            }}
            ref={imageRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              src={selectedImage}
              alt="Long-sleeve T-shirt"
              width={500}
              height={500}
              className="w-full cursor-zoom-in transition-transform duration-300 hover:scale-110"
              onClick={() => setIsZoomOpen(true)}
            />

            {/* Zoom Lens */}
            {zoomPosition.show && (
              <div
                className="absolute pointer-events-none border-2 border-gray-400 bg-white bg-opacity-30 rounded-full"
                style={{
                  width: "150px",
                  height: "150px",
                  left: `${zoomPosition.x}%`,
                  top: `${zoomPosition.y}%`,
                  transform: "translate(-50%, -50%)",
                  backgroundImage: `url(${selectedImage})`,
                  backgroundSize: imageRef.current
                    ? `${imageRef.current.offsetWidth * 2}px ${
                        imageRef.current.offsetHeight * 2
                      }px`
                    : "cover",
                  backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                }}
              />
            )}
          </div>

          {/* Thumbnails */}
          <div className="flex gap-2 mt-3">
            {productImages.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedImage(img)}
                className={`w-20 border border-gray-400 rounded cursor-pointer transition ${
                  selectedImage === img
                    ? "border-red-500"
                    : "border-gray-300 hover:border-gray-500"
                }`}
              >
                <Image
                  src={img}
                  alt="Thumbnail"
                  width={80}
                  height={80}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-[38px] font-bold mb-2">Long-sleeve T-shirt</h1>
          <p className="text-lg text-gray-800 mb-4">$ 9.99</p>

          {/* Colors */}
          <div className="mb-4">
            <h2 className="font-medium mb-2">Color</h2>
            <div className="flex gap-2">
              {colors.map((color) => (
                <button
                  key={color.value}
                  onClick={() => setSelectedColor(color.value)}
                  className={`w-8 h-8 rounded-full border-2 transition ${
                    selectedColor === color.value
                      ? "border-black"
                      : "border-gray-300 hover:border-gray-500"
                  }`}
                  style={{ backgroundColor: color.hex }}
                  aria-label={`Select ${color.name} color`}
                />
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className="mb-4">
            <h2 className="font-medium mb-2">Size</h2>
            <div className="flex flex-wrap gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1 border rounded transition ${
                    selectedSize === size
                      ? "border-black bg-gray-100"
                      : "border-gray-300 hover:border-gray-500"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="mb-4">
            <h2 className="font-medium mb-2">Quantity</h2>
            <input
              type="number"
              min={1}
              defaultValue={1}
              className="w-20 border border-gray-300 px-2 py-1 rounded"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mb-4">
            <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
              Add to cart
            </button>
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
              Buy now
            </button>
          </div>

          {/* Category */}
          <p className="text-sm text-gray-500">
            Category: <span className="underline">Familife Flex</span>
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-8 border-b border-gray-300 rounded flex gap-8">
        <button
          onClick={() => setActiveTab("additional")}
          className={`pb-2 font-medium transition ${
            activeTab === "additional"
              ? "border-b-2 border-red-500"
              : "border-b-2 border-transparent hover:border-gray-300"
          }`}
        >
          Additional Information
        </button>
        <button
          onClick={() => setActiveTab("reviews")}
          className={`pb-2 font-medium transition ${
            activeTab === "reviews"
              ? "border-b-2 border-red-500"
              : "border-b-2 border-transparent hover:border-gray-300"
          }`}
        >
          Reviews (0)
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-4 text-sm text-gray-600">
        {activeTab === "additional" && (
          <p>Size: YS, YM, YL, YXL, S, M, L, XL, 2XL, 3XL, 4XL, Other</p>
        )}
        {activeTab === "reviews" && (
          <p>No reviews yet. Be the first to review this product!</p>
        )}
      </div>

      {/* Related Products */}
      <div className="mt-10">
        <h2 className="text-lg font-bold mb-4">Related Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((_, idx) => (
            <div
              key={idx}
              className="border border-gray-300 rounded shadow-xl p-2 text-center  hover:shadow-md transition"
            >
              <Image
                src="/long-sleeves/LONG-SLEEVE-TSHIRT-3-min-scaled.jpg"
                alt="Related product"
                width={200}
                height={200}
                className="mx-auto"
              />
              <p className="mt-2 text-sm font-medium">Sample Product</p>
              <p className="text-red-600 font-bold">$9.99</p>
            </div>
          ))}
        </div>
      </div>

      {/* Zoom Modal */}
      {isZoomOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
          onClick={() => setIsZoomOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsZoomOpen(false)}
              className="absolute top-2 right-2 text-white bg-gray-800 bg-opacity-70 rounded-full p-2 hover:bg-opacity-100 transition z-10"
              aria-label="Close Zoom"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="relative w-full h-full">
              <Image
                src={selectedImage}
                alt="Zoomed image"
                width={800}
                height={800}
                className="object-contain max-h-[90vh] w-full"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
