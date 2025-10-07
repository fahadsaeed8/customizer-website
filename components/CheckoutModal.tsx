"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface CartItem {
  title: string;
  price: number;
  color?: string;
  size?: string;
  quantity?: number;
  image?: string;
}

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cartItems,
}) => {
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
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Calculate total price
  const calculateTotal = () => {
    const itemsTotal = cartItems.reduce((total, item) => total + item.price, 0);
    const handlingFee = 2;
    return itemsTotal + handlingFee;
  };

  // Find main product (first item)
  const mainProduct = cartItems[0];
  // Find additional services (rest items)
  const additionalServices = cartItems.slice(1);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4 py-10">
      <div
        ref={modalRef}
        className="bg-white rounded-md shadow-xl w-full max-w-2xl max-h-[70vh] p-6 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-[44px] cursor-pointer"
        >
          &times;
        </button>

        <h2 className="text-[22px] font-bold text-black flex items-center gap-2 mb-6">
          <i className="fas text-green-500 fa-shopping-cart"></i> Shopping Cart
        </h2>

        {/* Main Product */}
        {mainProduct && (
          <div className="flex items-start gap-4 mb-6">
            <Image
              src={mainProduct.image || "/banner-top.jpg"}
              alt={mainProduct.title}
              width={100}
              height={180}
              className="rounded-md"
            />

            {/* Main text and price row */}
            <div className="flex justify-between w-full">
              <div>
                <p className="text-gray-800 text-[22px] text-start font-medium text-base">
                  {mainProduct.title}
                </p>
                {mainProduct.color && mainProduct.size && (
                  <p className="text-[18px] mt-2 text-start text-gray-500">
                    Color: <strong>{mainProduct.color}</strong> | Size:{" "}
                    <strong>{mainProduct.size}</strong> | Qty:{" "}
                    <strong>{mainProduct.quantity}</strong>
                  </p>
                )}
                <p className="text-[18px] mt-2 text-start text-gray-500">
                  License type: <strong>Personal license</strong>
                </p>
              </div>

              <div className="text-right text-gray-800 font-semibold whitespace-nowrap">
                ${mainProduct.price.toFixed(2)}
              </div>
            </div>
          </div>
        )}

        {/* Additional Services */}
        <div className="space-y-3 mb-6">
          {additionalServices.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded px-4 py-2"
            >
              <div>
                <span className="text-[18px] text-black">{item.title}</span>
              </div>
              <div>
                <span className="text-[18px] text-orange-600 font-bold">
                  ${item.price.toFixed(2)}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-2 items-center mb-2 text-sm text-black">
          <span>Handling fee</span>
          <span>$2</span>
        </div>

        <div className="flex justify-end items-center gap-2 text-lg bg-blue-50 pr-3 font-semibold py-2">
          <span className="text-black">Total:</span>
          <span className="text-blue-700">${calculateTotal().toFixed(2)}</span>
        </div>

        <div className="flex justify-end">
          <Link
            href="/checkout"
            onClick={() => {
              onClose();
            }}
            className="mt-3 text-[18px] text-center bg-orange-500 hover:bg-orange-600 text-white font-semibold w-[30%] py-2 rounded"
          >
            Checkout Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
