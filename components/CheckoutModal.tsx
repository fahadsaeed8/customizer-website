"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface AddToCartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CheckoutModal: React.FC<AddToCartModalProps> = ({ isOpen, onClose }) => {
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

        <div className="flex items-start gap-4 mb-6">
          <Image
            src="/banner-top.jpg"
            alt="Product"
            width={100}
            height={180}
            className="rounded-md"
          />

          {/* Main text and price row */}
          <div className="flex justify-between w-full">
            <div>
              <p className="text-gray-800 text-[22px] text-start font-medium text-base">
                Jogwire - Sports Clothing &amp; Fitness Equipment Shopify Theme
              </p>
              <p className="text-[18px] mt-2 text-start text-gray-500">
                License type: <strong>Personal license</strong>
              </p>
            </div>

            <div className="text-right text-gray-800 font-semibold whitespace-nowrap">
              $88
            </div>
          </div>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded px-4 py-2">
            <div>
              <span className="text-[18px] text-black">
                Installation & Setup
              </span>
            </div>
            <div>
              <span className="text-[16px] text-gray-600 line-through mr-1">
                $59
              </span>
              <span className="text-[18px] text-orange-600  font-bold">
                $49
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded px-4 py-2">
            <div>
              <span className="text-[18px] text-black">
                Shopify Must-Have Apps
              </span>
            </div>
            <div>
              <span className="text-[16px] text-gray-600 line-through mr-1">
                $89
              </span>
              <span className="text-[18px] text-orange-600  font-bold">
                $39
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-2 items-center mb-2 text-sm text-black">
          <span>Handling fee</span>
          <span>$2</span>
        </div>

        <div className="flex justify-end items-center gap-2 text-lg bg-blue-50 pr-3 font-semibold py-2">
          <span className="text-black">Total:</span>
          <span className="text-blue-700">$178</span>
        </div>

        <div className="flex justify-end">
          <Link
            href="/checkout"
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
