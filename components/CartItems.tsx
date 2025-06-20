"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface AddToCartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const popularCategories = [
  {
    label: "WordPress",
    icon: "/wordpress.svg",
    href: "#",
  },
  {
    label: "Shopify",
    icon: "/shopify.svg",
    href: "#",
  },
  {
    label: "HTML",
    icon: "/html.svg",
    href: "#",
  },
  {
    label: "eCommerce",
    icon: "/e-commerce.svg",
    href: "#",
  },
];

const CartItems: React.FC<AddToCartModalProps> = ({ isOpen, onClose }) => {
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
    <div className="fixed inset-0 bg-black/80 z-[60] flex items-center justify-center px-4 py-10">
      <div
        ref={modalRef}
        className="bg-white rounded-lg shadow-lg w-full max-w-2xl max-h-[70vh] overflow-auto relative p-6"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 cursor-pointer text-gray-500 hover:text-gray-700 z-50"
        >
          ✕
        </button>

        <p className="text-[30px] font-semibold">Shopping Cart</p>

        {/* Cart Empty Message */}
        <div className="flex flex-col items-center space-y-4 mb-10 mt-6">
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-50 text-gray-500"
          >
            <path d="M19.45 15.24a.86.86 0 00.848-.719l1.69-10.14a.86.86 0 00-.848-1H4.91L4.229.65A.86.86 0 003.395 0H.858a.86.86 0 100 1.719h1.865l.673 2.696L5.07 14.45v2.6a2.553 2.553 0 00-1.69 2.4A2.552 2.552 0 005.93 22c1.744 0 2.981-1.726 2.41-3.38h7.01c-.572 1.655.667 3.38 2.41 3.38a2.552 2.552 0 002.55-2.55 2.552 2.552 0 00-2.55-2.55H6.79v-1.66zm.676-10.141l-1.404 8.422H6.658L5.254 5.099zM6.76 19.45a.832.832 0 01-1.661 0 .832.832 0 011.661 0m11 .831a.832.832 0 010-1.661.832.832 0 010 1.661" />
          </svg>

          <h2 className="text-xl font-semibold text-gray-700 text-center">
            There are no items in your cart yet
          </h2>
        </div>

        {/* Category Grid */}
        <div className="w-full bg-blue-50 py-6 rounded-lg">
          <h3 className="text-center text-lg font-semibold mb-6 text-gray-700">
            Most popular categories
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
            {popularCategories.map((category, index) => (
              <Link href={category.href} key={index}>
                <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow p-4 hover:shadow-md transition">
                  <Image
                    src={category.icon}
                    alt={category.label}
                    width={40}
                    height={40}
                    className="mb-2"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {category.label}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
