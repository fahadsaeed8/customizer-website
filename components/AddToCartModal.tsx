"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";

interface AddToCartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const data = [
  {
    title: "Installation & Setup",
    priceOld: 59,
    priceNew: 49,
    icon: "/banner-top.jpg",
  },
  {
    title: "Local Business Essentials",
    priceOld: null,
    priceNew: 99,
    icon: "/banner-top.jpg",
  },
  {
    title: "Must-Have Installation & Customization Pack",
    priceOld: 369,
    priceNew: 239,
    recommended: true,
    icon: "/banner-top.jpg",
  },
  {
    title: "All-in-One Store Setup + SEO",
    priceOld: 1777,
    priceNew: 1479,
    icon: "/banner-top.jpg",
  },
  {
    title: "Template Localization",
    priceOld: null,
    priceNew: 99,
    icon: "/banner-top.jpg",
  },
  {
    title: "Shopify Must-Have Apps",
    priceOld: 89,
    priceNew: 39,
    icon: "/banner-top.jpg",
  },
  {
    title: "GDPR & CCPA Compliance",
    priceOld: 89,
    priceNew: 59,
    icon: "/banner-top.jpg",
  },
];

const AddToCartModal: React.FC<AddToCartModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-[60] flex items-center justify-center p-4">
      <div
        ref={modalRef}
        className="bg-white rounded-lg shadow-lg w-full max-w-6xl max-h-[90vh] relative flex"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-50"
        >
          ✕
        </button>

        {/* Left Side – Services List */}
        <div className="w-2/3 border-r p-6 space-y-4 overflow-y-auto max-h-[90vh]">
          <h2 className="text-xl font-bold mb-4">
            Recommended Customization Services for This Product
          </h2>

          {data.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border rounded px-4 py-3 relative hover:shadow transition"
            >
              <div className="flex items-center space-x-4">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="object-contain"
                />
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-xs text-gray-500">
                    Provided by TemplateMonster Web Studio
                  </p>
                  <button className="text-blue-600 text-sm">Details</button>
                </div>
              </div>
              <div className="text-right">
                {item.priceOld && (
                  <span className="line-through text-gray-500 mr-2">
                    ${item.priceOld}
                  </span>
                )}
                <span className="font-bold text-green-700">
                  ${item.priceNew}
                </span>
                <button className="ml-3 text-white bg-green-600 px-2 py-1 rounded hover:bg-green-700">
                  +
                </button>
              </div>
              {item.recommended && (
                <span className="absolute top-0 left-0 bg-green-500 text-white text-xs px-2 py-1 rounded-br">
                  Recommended
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Right Side – Cart Summary */}
        <div className="w-1/3 p-6 space-y-4 flex-shrink-0">
          <div className="flex items-center space-x-3">
            <Image
              src="/theme-thumb.jpg"
              alt="Theme"
              width={60}
              height={60}
              className="rounded border object-cover"
            />
            <div>
              <h4 className="text-sm font-semibold leading-5">
                Jogwire - Sports Clothing & Fitness Equipment Shopify Theme
              </h4>
              <p className="text-xs text-gray-500">License: Personal</p>
            </div>
          </div>

          <div className="text-sm space-y-1">
            <label className="inline-flex items-center space-x-2">
              <input type="checkbox" className="accent-blue-600" />
              <span>Get 6 more months of support and save $44</span>
            </label>
            <div className="flex justify-between items-center">
              <span className="line-through text-gray-500">$88</span>
              <span className="font-bold">$44</span>
            </div>
          </div>

          <hr />

          <div className="text-sm space-y-2">
            <div className="flex justify-between">
              <span className="flex items-center text-green-600">
                ✓ Installation & Setup
              </span>
              <span>
                <span className="line-through text-gray-500 mr-1">$59</span>
                <span className="font-bold">$49</span>
              </span>
            </div>
            <div className="flex justify-between">
              <span className="flex items-center text-green-600">
                ✓ Shopify Must-Have Apps
              </span>
              <span>
                <span className="line-through text-gray-500 mr-1">$89</span>
                <span className="font-bold">$39</span>
              </span>
            </div>
          </div>

          <hr />

          <div className="flex justify-between text-lg font-bold">
            <span>Subtotal:</span>
            <span>$176</span>
          </div>

          <div className="flex space-x-4 pt-2">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded w-full font-semibold">
              Go To Cart
            </button>
            <button
              onClick={onClose}
              className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded w-full"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCartModal;
