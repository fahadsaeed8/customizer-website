"use client";
import React, { useState } from "react";
import Button from "./common/Button";

const menuItems = [
  "Demo",
  "Shop Layout",
  "Shop Heading",
  "Shop Filter",
  "Product Layout",
  "Product Type",
  "Product Hover",
  "Pages",
  "Blog",
  "Other Pages",
];

const cardData: Record<string, any[]> = {
  Demo: [
    {
      image: "/banner-top.jpg",
      title: "Home 1",
      note: "*Please enter password 1 to view live demo*",
    },
    {
      image: "/banner-top.jpg",
      title: "Home 2",
      note: "*Please enter password 1 to view live demo*",
    },
    {
      image: "/banner-top.jpg",
      title: "Home 3",
      note: "*Please enter password 1 to view live demo*",
    },
    {
      image: "/banner-top.jpg",
      title: "Home 3",
      note: "*Please enter password 1 to view live demo*",
    },
    {
      image: "/banner-top.jpg",
      title: "Home 3",
      note: "*Please enter password 1 to view live demo*",
    },
    {
      image: "/banner-top.jpg",
      title: "Home 3",
      note: "*Please enter password 1 to view live demo*",
    },
  ],
  "Shop Layout": [
    {
      image: "/banner-top.jpg",
      title: "Shop Home 1",
      note: "Special deals for new customers",
    },
    {
      image: "/banner-top.jpg",
      title: "Shop Home 2",
      note: "Up to 70% off!",
    },
    {
      image: "/banner-top.jpg",
      title: "Shop Home 3",
      note: "Trending fashion styles",
    },
  ],
  "Shop Heading": [
    {
      image: "/banner-top.jpg",
      title: "Heading Variant 1",
      note: "Modern heading with big banner",
    },
    {
      image: "/banner-top.jpg",
      title: "Heading Variant 2",
      note: "Classic shop heading style",
    },
    {
      image: "/banner-top.jpg",
      title: "Heading Variant 3",
      note: "Minimal heading layout",
    },
  ],
  "Shop Filter": [
    {
      image: "/banner-top.jpg",
      title: "Filter Style 1",
      note: "Sidebar filter",
    },
    {
      image: "/banner-top.jpg",
      title: "Filter Style 2",
      note: "Top bar filter",
    },
    {
      image: "/banner-top.jpg",
      title: "Filter Style 3",
      note: "Advanced product filtering",
    },
  ],
  "Product Layout": [
    {
      image: "/banner-top.jpg",
      title: "Grid Layout",
      note: "Products shown in 3-column grid",
    },
    {
      image: "/banner-top.jpg",
      title: "List Layout",
      note: "Full-width list layout",
    },
    {
      image: "/banner-top.jpg",
      title: "Masonry Layout",
      note: "Pinterest-style layout",
    },
  ],
  "Product Type": [
    {
      image: "/banner-top.jpg",
      title: "Simple Product",
      note: "Basic single product",
    },
    {
      image: "/banner-top.jpg",
      title: "Variable Product",
      note: "Multiple options per item",
    },
    {
      image: "/banner-top.jpg",
      title: "Grouped Product",
      note: "Bundle of related products",
    },
  ],
  "Product Hover": [
    {
      image: "/banner-top.jpg",
      title: "Zoom Hover",
      note: "Enlarges product image",
    },
    {
      image: "/banner-top.jpg",
      title: "Slide Hover",
      note: "Slides in extra image on hover",
    },
    {
      image: "/banner-top.jpg",
      title: "Info Hover",
      note: "Shows quick info",
    },
  ],
  Pages: [
    {
      image: "/banner-top.jpg",
      title: "About Us",
      note: "Information about the store",
    },
    {
      image: "/banner-top.jpg",
      title: "Contact",
      note: "Get in touch with support",
    },
    {
      image: "/banner-top.jpg",
      title: "FAQs",
      note: "Common customer questions",
    },
  ],
  Blog: [
    {
      image: "/banner-top.jpg",
      title: "Latest News",
      note: "Keep up with store updates",
    },
    {
      image: "/banner-top.jpg",
      title: "Trends",
      note: "Top trends in ecommerce",
    },
    {
      image: "/banner-top.jpg",
      title: "Tips & Tricks",
      note: "Shopping and product tips",
    },
  ],
  "Other Pages": [
    {
      image: "/banner-top.jpg",
      title: "Login/Register",
      note: "User account pages",
    },
    {
      image: "/banner-top.jpg",
      title: "404 Page",
      note: "Custom not found page",
    },
    {
      image: "/banner-top.jpg",
      title: "Coming Soon",
      note: "Future launches preview",
    },
  ],
};

const MenuCards = () => {
  const [activeTab, setActiveTab] = useState("Demo");

  const cards = cardData[activeTab] || [];

  return (
    <div className="flex flex-col items-center gap-8 mt-12 px-4">
      {/* Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        {menuItems.map((label, index) => (
          <Button
            key={index}
            label={label}
            variant={label === activeTab ? "gradient" : "outline"}
            className="px-10 py-2 rounded-full tracking-[0.2px] transition-all cursor-pointer font-bold text-[16px]"
            onClick={() => setActiveTab(label)}
          />
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1200px] mt-8 mb-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className=" rounded-lg overflow-hidden shadow-md bg-white"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-[200px] object-cover"
            />
            <div className="text-center p-4">
              <h3 className="font-semibold text-lg">{card.title}</h3>
              <p className="text-gray-500 text-sm mt-1">{card.note}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuCards;
