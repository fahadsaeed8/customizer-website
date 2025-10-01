"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const [paymentMethod, setPaymentMethod] = useState("stripe");

  return (
    <div className="bg-[#f0f6fd] overflow-x-hidden">
      <div className="min-h-screen py-[120px] md:py-[180px] px-4">
        {/* Responsive Grid Wrapper */}
        {/* Responsive Grid Wrapper */}
        <div
          className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 
                justify-items-center lg:justify-items-stretch"
        >
          {/* Left Side */}
          <div className="bg-white p-6 rounded-md shadow-md lg:col-span-2 w-full">
            <p className="text-[22px] md:text-[26px] font-bold mb-6 text-gray-800">
              Secure Checkout
            </p>

            {/* Contact Details */}
            <div className="mb-8">
              <p className="text-[18px] font-bold">1. Contact Details</p>
              <p className="text-[16px] font-medium mb-3">
                To use saved payment methods or bonuses, please{" "}
                <Link className="text-blue-400" href={"#"}>
                  Sign In
                </Link>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Your email"
                  className="border border-gray-300 p-[6px] rounded w-full"
                />
                <div className="flex gap-2">
                  <select className="border border-gray-300 p-[6px] rounded w-[90px] md:w-[80px]">
                    <option value="92">+92</option>
                    <option value="91">+91</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Your phone number"
                    className="border border-gray-300 p-[6px] rounded w-full"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div>
              <p className="text-[18px] font-bold mb-3">
                2. Select your payment method
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <button
                  onClick={() => setPaymentMethod("stripe")}
                  className={`p-3 cursor-pointer hover:bg-gray-100 rounded-md font-semibold flex items-center justify-center gap-2 ${
                    paymentMethod === "stripe"
                      ? "border-2 border-green-500 bg-[#f3fcf5]"
                      : "border"
                  }`}
                >
                  <span className="text-blue-600 font-bold">stripe</span> Card
                </button>
                <button
                  onClick={() => setPaymentMethod("paypal")}
                  className={`p-3 cursor-pointer hover:bg-gray-100 rounded-md font-semibold flex items-center justify-center gap-2 ${
                    paymentMethod === "paypal"
                      ? "border-2 border-green-500 bg-[#f3fcf5]"
                      : "border"
                  }`}
                >
                  <span className="text-gray-700">PayPal</span>
                </button>
              </div>

              {paymentMethod === "stripe" && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <input
                      type="text"
                      placeholder="Card Number"
                      className="border border-gray-300 p-2 rounded w-full col-span-1 md:col-span-3"
                    />
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="border border-gray-300 p-[6px] rounded w-full"
                    />
                    <input
                      type="text"
                      placeholder="CVC"
                      className="border border-gray-300 p-[6px] rounded w-full"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Cardholder Name"
                    className="border border-gray-300 p-2 rounded w-full mb-2"
                  />
                  <div className="flex items-center mb-4 cursor-pointer hover:text-green-500">
                    <input type="checkbox" id="savecard" className="mr-2" />
                    <label htmlFor="savecard" className="text-sm">
                      Save card
                    </label>
                  </div>

                  <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2">
                    <p className="text-sm text-gray-600 whitespace-nowrap">
                      We accept:
                    </p>
                    <div className="flex flex-wrap items-center gap-2">
                      <Image
                        src="/visa.svg"
                        alt="Visa"
                        width={32}
                        height={24}
                        className="max-w-full h-auto"
                      />
                      <Image
                        src="/bank.svg"
                        alt="Bank"
                        width={32}
                        height={24}
                        className="max-w-full h-auto"
                      />
                      <Image
                        src="/discover.svg"
                        alt="Discover"
                        width={32}
                        height={24}
                        className="max-w-full h-auto"
                      />
                      <Image
                        src="/american.svg"
                        alt="Amex"
                        width={32}
                        height={24}
                        className="max-w-full h-auto"
                      />
                      <Image
                        src="/club.svg"
                        alt="Club"
                        width={32}
                        height={24}
                        className="max-w-full h-auto"
                      />
                      <Image
                        src="/j.svg"
                        alt="JCB"
                        width={32}
                        height={24}
                        className="max-w-full h-auto"
                      />
                    </div>
                  </div>

                  <p className="text-sm text-gray-500 mb-3">
                    Stripe is a secure gateway. Charges appear as
                    "TEMPLATEMONSTER".
                  </p>
                </>
              )}

              {paymentMethod === "paypal" && (
                <div className="mb-6 p-4 bg-gray-50 rounded-md">
                  <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2">
                    <p className="text-sm text-gray-600 whitespace-nowrap">
                      We accept:
                    </p>
                    <div className="flex flex-wrap items-center gap-2">
                      <Image
                        src="/visa.svg"
                        alt="Visa"
                        width={32}
                        height={24}
                        className="max-w-full h-auto"
                      />
                      <Image
                        src="/bank.svg"
                        alt="Bank"
                        width={32}
                        height={24}
                        className="max-w-full h-auto"
                      />
                      <Image
                        src="/discover.svg"
                        alt="Discover"
                        width={32}
                        height={24}
                        className="max-w-full h-auto"
                      />
                      <Image
                        src="/american.svg"
                        alt="Amex"
                        width={32}
                        height={24}
                        className="max-w-full h-auto"
                      />
                      <Image
                        src="/club.svg"
                        alt="Club"
                        width={32}
                        height={24}
                        className="max-w-full h-auto"
                      />
                      <Image
                        src="/j.svg"
                        alt="JCB"
                        width={32}
                        height={24}
                        className="max-w-full h-auto"
                      />
                    </div>
                  </div>

                  <p className="text-[16px] text-gray-600">
                    PayPal is the most popular, the fastest and most secure
                    payment method.{" "}
                  </p>
                </div>
              )}

              <div className="flex items-start mb-4 cursor-pointer">
                <input type="checkbox" className="mt-1 mr-2" />
                <p className="text-[16px] text-gray-700">
                  I agree that my data will be stored and handled according to
                  the
                  <span className="text-blue-600 underline ml-1">
                    Privacy Policy
                  </span>{" "}
                  and
                  <span className="text-blue-600 underline ml-1">
                    Terms of Use
                  </span>
                  .
                </p>
              </div>

              <button
                className={`w-full py-2 rounded ${
                  paymentMethod === "paypal"
                    ? "bg-blue-600 text-white cursor-pointer"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
                disabled={paymentMethod !== "paypal"}
              >
                {paymentMethod === "paypal" ? "Proceed to PayPal" : "Pay Now"}
              </button>
            </div>
          </div>

          {/* Order Summary */}
          {/* Order Summary */}
          <div
            className="bg-white p-6 rounded-md shadow-md overflow-hidden 
                lg:sticky lg:top-[120px] self-start h-fit 
                "
          >
            <p className="text-[22px] md:text-[26px] font-bold mb-4">
              Order Summary
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
              <Image
                src="/banner-top.jpg"
                alt="Product"
                width={80}
                height={60}
                className="rounded max-w-full h-auto"
              />
              <div>
                <p className="text-sm font-medium">
                  Jogwire - Sports Clothing &amp; Fitness Equipment Shopify
                  Theme
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-300 pb-2">
              <p className="text-[16px] text-gray-500">
                License type: Personal license
              </p>
              <p className="text-[18px] font-semibold mt-1 sm:mt-0">$88</p>
            </div>

            <ul className="mb-4 mt-2 text-sm text-gray-700 space-y-2">
              <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✔</span>
                  <span>Installation & Setup</span>
                </div>
                <div className="flex gap-1 items-center">
                  <span className="line-through text-gray-500 text-sm">
                    $59
                  </span>
                  <span className="text-orange-600 text-[16px] font-semibold">
                    $49
                  </span>
                </div>
              </li>
              <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✔</span>
                  <span>Shopify Must-Have Apps</span>
                </div>
                <div className="flex gap-1 items-center">
                  <span className="line-through text-gray-500 text-sm">
                    $89
                  </span>
                  <span className="text-orange-600 text-[16px] font-semibold">
                    $39
                  </span>
                </div>
              </li>
            </ul>

            <p className="text-[16px] text-blue-600 mb-2 cursor-pointer">
              Have a promocode?
            </p>

            <div className="flex justify-between text-[16px] mb-2 text-gray-600">
              <span>Handling fee</span>
              <span>$2</span>
            </div>

            <div className="flex justify-end gap-2 text-[22px] font-bold border-t pt-4">
              <span>Total:</span>
              <span className="text-blue-700">$178</span>
            </div>
          </div>
        </div>
      </div>
      <footer className="text-center text-[14px] md:text-[16px] py-4 bg-white border-t border-gray-300 text-gray-500">
        © 2025 TemplateMonster.com owned by Theme Technologies LLC. Operated by
        Jetimpex Inc. All rights reserved.
      </footer>
    </div>
  );
};

export default Page;
