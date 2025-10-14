"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CheckoutModal from "./CheckoutModal";

interface ProductData {
  title: string;
  price: number;
  image: string;
  color: string;
  size: string;
  quantity: number;
}

interface AddToCartModalProps {
  isOpen: boolean;
  onClose: () => void;
  productData?: ProductData;
}

interface CartItem {
  title: string;
  priceNew: number;
  priceOld: number | null;
  icon: string;
  recommended?: boolean;
}

interface CheckoutItem {
  title: string;
  price: number;
  color?: string;
  size?: string;
  quantity?: number;
  image?: string;
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

// ✅ Default product data
const defaultProductData: ProductData = {
  title: "Product",
  price: 0,
  image: "/placeholder-image.jpg",
  color: "Default",
  size: "Default",
  quantity: 1,
};

const AddToCartModal: React.FC<AddToCartModalProps> = ({
  isOpen,
  onClose,
  productData,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // ✅ Actual product data ya default use karein
  const actualProductData = productData || defaultProductData;

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

  // Calculate total price including main product
  const calculateSubtotal = () => {
    const servicesTotal = cartItems.reduce(
      (total, item) => total + item.priceNew,
      0
    );
    const productTotal = actualProductData.price * actualProductData.quantity;
    return servicesTotal + productTotal;
  };

  const getCheckoutItems = (): CheckoutItem[] => {
    const mainProduct: CheckoutItem = {
      title: actualProductData.title,
      price: actualProductData.price * actualProductData.quantity,
      color: actualProductData.color,
      size: actualProductData.size,
      quantity: actualProductData.quantity,
      image: actualProductData.image,
    };

    const serviceItems: CheckoutItem[] = cartItems.map((item) => ({
      title: item.title,
      price: item.priceNew,
      image: item.icon,
    }));

    return [mainProduct, ...serviceItems];
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-[60] flex items-center justify-center p-2 md:p-4">
      <div
        ref={modalRef}
        className="bg-white rounded-lg shadow-lg w-full max-w-6xl h-full md:h-auto max-h-screen md:max-h-[90vh] relative flex flex-col md:flex-row overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute cursor-pointer top-3 right-3 text-gray-500 hover:text-gray-700 z-50 text-xl"
        >
          ✕
        </button>

        {/* Left Side – Services List */}
        <div className="w-full md:w-2/3 p-4 md:p-6 space-y-4">
          <h2 className="text-xl md:text-[28px] text-start font-semibold mb-4">
            Recommended Customization Services for This Product
          </h2>

          {data.map((item, index) => (
            <div
              key={index}
              className={`${
                item.recommended && "border-2 border-green-500"
              } flex flex-col md:flex-row items-start md:items-center justify-between border border-gray-300 rounded px-3 md:px-4 py-3 relative hover:shadow transition`}
            >
              <div className="flex items-center space-x-3 md:space-x-4 mb-2 md:mb-0">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="object-contain"
                />
                <div>
                  <p className="font-medium text-start text-base md:text-[18px]">
                    {item.title}
                  </p>
                  <p className="text-sm md:text-[14px] text-start text-gray-500">
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
                  <span className="line-through text-sm md:text-lg text-gray-500 mr-2">
                    ${item.priceOld}
                  </span>
                )}
                <span className="font-bold text-base md:text-lg text-orange-600">
                  ${item.priceNew}
                </span>
                <button
                  className={`ml-2 md:ml-3 text-[18px] md:text-[24px] cursor-pointer text-white px-2 md:px-3 rounded ${
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
                <span className="absolute bottom-2 left-2 bg-green-500 text-white text-xs md:text-md px-2 md:px-3 rounded">
                  Recommended
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Right Side – Cart Summary */}
        <div className="w-full md:w-1/3 bg-[#f2f7fb] p-4 md:p-6 space-y-4 flex-shrink-0">
          <h2 className="text-xl md:text-[28px] text-start font-semibold mb-4">
            You added to cart
          </h2>

          {/* Main Product Display - ACTUAL DATA */}
          {/* ✅ Conditional rendering - agar productData hai tabhi dikhayein */}
          {productData && (
            <div className="flex flex-col md:flex-row items-start md:items-center space-x-0 md:space-x-3 space-y-2 md:space-y-0">
              <Image
                src={actualProductData.image}
                alt={actualProductData.title}
                width={120}
                height={80}
                className="rounded border object-cover"
              />
              <div className="text-start">
                <h4 className="text-md font-semibold leading-5">
                  {actualProductData.title}
                </h4>
                <p className="text-sm text-gray-600">
                  Color: {actualProductData.color} | Size:{" "}
                  {actualProductData.size} | Qty: {actualProductData.quantity}
                </p>
                <p className="text-sm font-bold">
                  $
                  {(
                    actualProductData.price * actualProductData.quantity
                  ).toFixed(2)}
                </p>
              </div>
            </div>
          )}

          <div className="text-sm space-y-1 flex flex-col md:flex-row md:justify-between md:items-center">
            <label className="inline-flex items-center space-x-2">
              <input type="checkbox" className="accent-blue-600" />
              <span className="text-sm md:text-[18px]">
                Get 6 more months of support and save $44
              </span>
            </label>
            <div>
              <span className="line-through text-sm md:text-lg text-gray-500 mr-1">
                $88
              </span>
              <span className="font-bold text-sm md:text-lg text-orange-600">
                $44
              </span>
            </div>
          </div>

          {/* Additional Services */}
          <div className="text-sm space-y-2">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex border border-gray-300 rounded p-2 justify-between"
              >
                <span className="flex items-center text-green-600 text-sm md:text-base">
                  ✓ {item.title}
                </span>
                <span>
                  {item.priceOld && (
                    <span className="line-through text-gray-500 mr-1 text-xs md:text-sm">
                      ${item.priceOld}
                    </span>
                  )}
                  <span className="font-bold text-sm md:text-base">
                    ${item.priceNew}
                  </span>
                </span>
              </div>
            ))}
          </div>

          {/* Subtotal */}
          <div className="flex bg-white p-2 justify-between text-sm md:text-lg font-bold">
            <span>Subtotal:</span>
            <span>${calculateSubtotal().toFixed(2)}</span>
          </div>

          <div className="flex flex-col md:flex-row gap-2 pt-2">
            <button
              onClick={() => setIsCheckoutOpen(true)}
              className="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white px-4 py-2 rounded w-full font-semibold"
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
            cartItems={getCheckoutItems()}
          />
        </div>
      </div>
    </div>
  );
};

export default AddToCartModal;
