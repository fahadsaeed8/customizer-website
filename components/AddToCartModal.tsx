"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CheckoutModal from "./CheckoutModal";

interface AddToCartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CartItem {
  title: string;
  priceNew: number;
  priceOld: number | null;
  icon: string;
  recommended?: boolean;
}

const data: CartItem[] = [
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
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

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

  const handleAddToCart = (item: CartItem) => {
    if (!cartItems.some((cartItem) => cartItem.title === item.title)) {
      setCartItems((prev) => [...prev, item]);
    }
  };

  const isInCart = (title: string) => {
    return cartItems.some((item) => item.title === title);
  };

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
          className="absolute cursor-pointer top-4 right-4 text-gray-500 hover:text-gray-700 z-50"
        >
          ✕
        </button>

        {/* Left Side – Services List */}
        <div className="w-2/3 p-6 space-y-4 overflow-y-auto max-h-[90vh]">
          <h2 className="text-[28px] text-start font-semibold mb-4">
            Recommended Customization Services for This Product
          </h2>

          {data.map((item, index) => (
            <div
              key={index}
              className={`${
                item.recommended && "border-2 border-green-500"
              } flex items-center justify-between border border-gray-300 rounded px-4 py-2 relative hover:shadow transition`}
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
                  <p className="font-medium text-start text-[18px]">
                    {item.title}
                  </p>
                  <p className="text-[14px] text-start text-gray-500">
                    Provided by TemplateMonster Web Studio
                    <Link href={""}>
                      <button className="text-blue-600 text-sm ml-2 no-underline cursor-pointer">
                        Details
                      </button>
                    </Link>
                  </p>
                </div>
              </div>
              <div className="text-right">
                {item.priceOld && (
                  <span className="line-through text-lg text-gray-500 mr-2">
                    ${item.priceOld}
                  </span>
                )}
                <span className="font-bold text-lg text-orange-600">
                  ${item.priceNew}
                </span>
                <button
                  className={`ml-3 text-[24px] cursor-pointer text-white px-3 rounded ${
                    isInCart(item.title)
                      ? "border bg-green-700"
                      : "bg-green-600 hover:bg-green-700"
                  }`}
                  onClick={() => handleAddToCart(item)}
                >
                  {isInCart(item.title) ? "✓" : "+"}
                </button>
              </div>
              {item.recommended && (
                <span className="absolute bottom-15  left-2 bg-green-500 text-white text-md px-3 rounded">
                  Recommended
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Right Side – Cart Summary */}
        <div className="w-1/3 bg-[#f2f7fb] p-6 space-y-4 flex-shrink-0">
          <h2 className="text-[28px] text-start font-semibold mb-4">
            You added to cart{" "}
          </h2>
          <div className="flex items-start space-x-3">
            <Image
              src="/banner-top.jpg"
              alt="Theme"
              width={120}
              height={80}
              className="rounded border object-cover"
            />
            <div className="text-start">
              <h4 className="text-md font-semibold leading-5">
                Jogwire - Sports Clothing & Fitness Equipment Shopify Theme
              </h4>
            </div>
          </div>

          <div className="text-sm space-y-1 flex justify-between items-center">
            <div>
              <label className="inline-flex items-center space-x-2">
                <input type="checkbox" className="accent-blue-600" />
                <span className="text-[18px]">
                  Get 6 more months of support and save $44
                </span>
              </label>
            </div>
            <div>
              <span className="line-through text-lg text-gray-500 mr-1">
                $88
              </span>
              <span className="font-bold text-lg text-orange-600">$44</span>
            </div>
          </div>

          <div className="text-sm space-y-2">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex border border-gray-300 rounded p-2 justify-between"
              >
                <span className="flex items-center text-green-600">
                  ✓ {item.title}
                </span>
                <span>
                  {item.priceOld && (
                    <span className="line-through text-gray-500 mr-1">
                      ${item.priceOld}
                    </span>
                  )}
                  <span className="font-bold">${item.priceNew}</span>
                </span>
              </div>
            ))}
          </div>

          <div className="flex bg-white p-2 justify-between text-lg font-bold">
            <span>Subtotal:</span>
            <span>
              ${cartItems.reduce((total, item) => total + item.priceNew, 0)}
            </span>
          </div>

          <div className="flex space-x-4 pt-2">
            <button
              onClick={() => setIsCheckoutOpen(true)}
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded w-full font-semibold"
            >
              Go To Cart
            </button>
            <button
              onClick={onClose}
              className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded w-full"
            >
              Continue Shopping
            </button>
          </div>
          <CheckoutModal
            isOpen={isCheckoutOpen}
            onClose={() => setIsCheckoutOpen(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default AddToCartModal;
