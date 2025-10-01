"use client";
import ProductCardWithPrice from "@/components/ProductCardWithPrice";
import Footer from "@/components/Footer";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import AddToCartModal from "@/components/AddToCartModal";

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
    "/protomac/protomac-arm-sleeve-min2.jpg"
  );
  const [isZoomOpen, setIsZoomOpen] = useState<boolean>(false);
  const [zoomPosition, setZoomPosition] = useState<ZoomPosition>({
    x: 0,
    y: 0,
    show: false,
  });
  const imageRef = useRef<HTMLDivElement>(null);
const [quantity, setQuantity] = useState<number>(1);
    const [price, setPrice] = useState<number>(25.0);
    const [isCartModalOpen, setIsCartModalOpen] = useState(false);
           
    const sizePrices: Record<string, number> = {
     YS: 23.0,
     YM: 23.0,
     YL: 24.0,
     YXL:24.5,
     S: 25.0,
     M: 25.0,
     L: 26.0,
     XL: 27.0,
     "2XL": 28.0,
     "3XL": 29.0,
     "4XL": 30.0,
     Other: 25.0,
    };
           
             const handleSizeChange = (size: string) => {
               setSelectedSize(size);
               setPrice(sizePrices[size] || 25.0);
             };
           
             const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
               const val = Math.max(1, Number(e.target.value));
               setQuantity(val);
             };
  const productImages: string[] = [
    "/protomac/protomac-arm-sleeve-min2.jpg",
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
     <div className="flex flex-col min-h-screen bg-white">
    <div className="flex-1 px-6 py-[190px]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div
                    className="relative border border-gray-300 rounded overflow-hidden"
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
                      alt="Backpack"
                      width={500}
                      height={500}
                      className="mx-auto max-w-[350px] w-full cursor-zoom-in transition-transform duration-300 hover:scale-110"
                      onClick={() => setIsZoomOpen(true)}
                    />
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
      
                <div>
                  <h1 className="text-[40px] font-bold mb-2">ARM SLEEVES</h1>
                  <div className="flex justify-start text-[30px] font-bold mb-1 space-x-1">
                    <span className="text-lg font-semibold !align-top">$</span>
                    <span className="sm:text-4xl text-4xl font-semibold">
                      {(price * quantity).toFixed(2)}
                    </span>
                  </div>
                  <div className="mb-4">
                    <h2 className="font-bold text-2xl mb-2">Color</h2>
                    <div className="flex gap-2">
                      {colors.map((color) => (
                        <button
                          key={color.value}
                          onClick={() => setSelectedColor(color.value)}
                          className={`w-8 h-8 rounded-sm cursor-pointer border-2 transition ${
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
      
                  <div className="mb-4">
                    <h2 className="font-bold text-2xl mb-2">Size</h2>
                    <div className="flex flex-wrap gap-2">
                      {sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => handleSizeChange(size)}
                          className={`px-3 py-1 cursor-pointer border rounded transition ${
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
      
                  <div className="mb-4">
                    <h2 className="font-bold text-2xl mb-2">Quantity</h2>
                    <input
                      type="number"
                      min={1}
                      value={quantity}
                      onChange={handleQuantityChange}
                      className="w-20 border border-gray-300 px-2 py-1 rounded"
                    />
                  </div>
      
                  <div className="flex gap-3 mb-4">
                    <button
                      className="bg-red-700 text-[18px] cursor-pointer text-white px-5 py-2 rounded-[8px] hover:bg-red-700 transition"
                      onClick={() => setIsCartModalOpen(true)}
                    >
                      Add to cart
                    </button>
                    <button
                      className="text-[18px] cursor-pointer px-5 py-2 font-semibold rounded-[8px] text-black transition"
                      style={{ backgroundColor: "#a2e632" }}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.backgroundColor = "#9dff00")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.backgroundColor = "#a2e632")
                      }
                    >
                      Send inquiry
                    </button>
                  </div>
      
                  <p className="text-2xl text-black-500">
                    <span className="font-bold">SKU:</span> N/A
                  </p>
                  <p className="text-2xl text-black-500">
                    <span className="font-bold">Category:</span>{" "}
                    <Link href={"/team-store/aas-eagles"}>
                      <span className="cursor-pointer">Protomac</span>
                    </Link>
                  </p>
                </div>
              </div>
      
              <div className="mt-8 border-b  border-gray-300 rounded flex justify-center gap-8">
                <button
                  onClick={() => setActiveTab("additional")}
                  className={`pb-2 font-bold cursor-pointer text-2xl transition ${
                    activeTab === "additional"
                      ? "border-b-2 border-red-500 text-red-600"
                      : "border-b-2 border-transparent hover:border-gray-300 text-black"
                  }`}
                >
                  Additional information
                </button>
                <button
                  onClick={() => setActiveTab("reviews")}
                  className={`pb-2 cursor-pointer font-bold text-2xl transition ${
                    activeTab === "reviews"
                      ? "border-b-2 border-red-500 text-red-600"
                      : "border-b-2 border-transparent hover:border-gray-300 text-black"
                  }`}
                >
                  Reviews (0)
                </button>
              </div>
      
              {/* Tab Content */}
              <div className="mt-4 text-sm text-black-600">
                {activeTab === "additional" && (
                  <div className="mt-8 max-w-3xl mx-auto">
                    <h2
                      className="text-4xl font-bold mb-6 text-left md:text-left"
                      style={{ fontFamily: "inherit" }}
                    >
                      Additional information
                    </h2>
                    <div className="space-y-2 text-xl">
                      <div className="flex flex-col sm:flex-row sm:items-center mb-2">
                        <span className="font-bold min-w-[100px]">Color</span>
                        <span className="ml-0 sm:ml-4 text-gray-700">
                          Black, Silver Gray, White
                        </span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center">
                        <span className="font-bold min-w-[100px]">Size</span>
                        <span className="ml-0 sm:ml-4 text-black-700">
                          YS, YM, YL, YXL, AS, AM, AL, AXL, 3XL, A2XL, 4XL, Other
                        </span>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === "reviews" && (
                  <div className="mt-8">
                    <h2 className="text-4xl font-bold mb-4 text-center">Reviews</h2>
                    <div className="text-center text-xl text-black-600 mb-6">
                      There are no reviews yet.
                    </div>
                    <form className="max-w-2xl mx-auto space-y-4">
                      <div>
                        <label
                          className="block font-bold text-xl mb-1"
                          htmlFor="rating"
                        >
                          Your rating <span className="text-red-500">*</span>
                        </label>
                        {/* Star rating placeholder */}
                        <div className="flex gap-1 text-2xl justify-center mb-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <span key={star} className="text-black-400">
                              &#9733;
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label
                          className="block font-bold text-xl mb-1"
                          htmlFor="review"
                        >
                          Your review <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="review"
                          rows={4}
                          className="w-full border border-gray-300 rounded px-3 py-2"
                          required
                        />
                      </div>
                      <div className="flex gap-4">
                        <div className="flex-1">
                          <label
                            className="block font-bold text-xl mb-1"
                            htmlFor="name"
                          >
                            Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="name"
                            type="text"
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            required
                          />
                        </div>
                        <div className="flex-1">
                          <label
                            className="block font-bold text-xl mb-1"
                            htmlFor="email"
                          >
                            Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="email"
                            type="email"
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="bg-gray-800 text-xl text-white px-6 py-2 rounded hover:bg-black transition"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>

        {/* Related Product Section */}
        <div className="mt-12">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Related Product
          </h2>
          <div className="flex flex-wrap gap-6 justify-center">
         <ProductCardWithPrice
            name="BACKPACK"
            imageSrc="/protomac/protomac-backpack-min2.jpg"
            price={40}
            link="/product/proto-backpack"
          />
          <ProductCardWithPrice
            name="BEANIES"
            imageSrc="/protomac/protomac-beanie-min2.jpg"
            price={20}
            link="/product/proto-beanies"
          />
          <ProductCardWithPrice
            name="DUFFLE BAG"
            imageSrc="/protomac/protomac-duffle-bag-min2.jpg"
            price={50}
            link="/product/proto-duffle-bag"
          />
          <ProductCardWithPrice
            name="HAT"
            imageSrc="/protomac/protomac-hat-min2.jpg"
            price={25}
            link="/product/proto-hat"
          />
          <ProductCardWithPrice
            name="HEADBAND"
            imageSrc="/protomac/protomac-headband-min2.jpg"
            price={15}
            link="/product/proto-headband"
          />
          <ProductCardWithPrice
            name="HOODIE"
            imageSrc="/protomac/protomac-hoodie-min2.jpg"
            price={45}
            link="/product/proto-hoodie"
          />
          <ProductCardWithPrice
            name="POLO SHIRT"
            imageSrc="/protomac/protomac-polo-shirt-min2.jpg"
            price={35}
            link="/product/proto-polo-shirt"
          />
          <ProductCardWithPrice
            name="SHORTS"
            imageSrc="/protomac/protomac-shorts-min2.jpg"
            price={25}
            link="/product/proto-shorts"
          />
          <ProductCardWithPrice
            name="SOCKS"
            imageSrc="/protomac/protomac-socks-min2.jpg"
            price={21}
            link="/product/proto-socks"
          />
          <ProductCardWithPrice
            name="Spats Cleat Cover"
            imageSrc="/protomac/protomac-spats-min2.jpg"
            price={20}
            link="/product/proto-spats-cleat-cover"
          />
          <ProductCardWithPrice
            name="T-SHIRT"
            imageSrc="/protomac/protomac-t-shirt-min2.jpg"
            price={25}
            link="/product/proto-t-shirt"
          />
          <ProductCardWithPrice
            name="Track-suite / Sweatsuite"
            imageSrc="/protomac/protomac-track-suit-min2.jpg"
            price={70}
            link="/product/proto-track-suite-sweatsuite"
          />
        </div>
      </div>

    

{isZoomOpen && (
           <div
             className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
             onClick={() => setIsZoomOpen(false)}
           >
             <Image
               src={selectedImage}
               alt="Zoomed Backpack"
               width={800}
               height={800}
               className="max-w-[90%] max-h-[90%] object-contain"
             />
           </div>
          )}
 
         <AddToCartModal
           isOpen={isCartModalOpen}
           onClose={() => setIsCartModalOpen(false)}
         />
       </div>
       <Footer />
     </div>
   );
 }
