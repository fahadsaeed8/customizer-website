"use client";

import React, { useEffect, useState } from "react";

const Topbar = () => {
  const messages = [
    "Every sport available, plus fully-custom designs.",
    "Fastest 2-3 week turnaround and worldwide shipping.",
    "Lowest prices Guaranteed.",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? messages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === messages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const [showDropdown, setShowDropdown] = useState(false);
  const [currentLang, setCurrentLang] = useState({
    name: "English",
    code: "us",
  });

  const languages = [
    { name: "English", code: "us" },
    { name: "Français", code: "fr" },
    { name: "Español", code: "es" },
    { name: "Deutsch", code: "de" },
  ];

  interface Language {
    name: string;
    code: string;
  }

  const handleSelect = (lang: Language) => {
    setCurrentLang(lang);
    setShowDropdown(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === messages.length - 1 ? 0 : prevIndex + 1
      );
    }, 1200);

    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className="w-full bg-[#2d394b] text-white text-sm font-sans">
      <div className="flex items-center justify-between px-4 py-6">
        {/* Left Social Icons */}
        <div className="flex gap-5 px-5 text-white text-[20px]">
          <i className="fab fa-facebook-f cursor-pointer"></i>
          <i className="fab fa-instagram cursor-pointer"></i>
          <i className="fab fa-youtube cursor-pointer"></i>
          <i className="fab fa-twitter cursor-pointer"></i>
          <i className="fab fa-pinterest cursor-pointer"></i>
        </div>

        {/* Center Slider Text */}
        <div className="flex items-center gap-5 max-w-[50%] text-center">
          <button
            onClick={handlePrev}
            className="bg-white rounded-full px-[12px] py-[6px] text-[#2d394b] hover:bg-gray-100 transition-opacity duration-300 cursor-pointer shadow"
          >
            <i className="fas fa-chevron-left"></i>
          </button>

          <div className="cursor-pointer group">
            <span className="flex text-[17px] font-serif text-[#9cc9f5] group-hover:text-white items-center gap-2 whitespace-nowrap">
              <i className="fas fa-fire text-[#9cc9f5] group-hover:text-white"></i>
              {messages[currentIndex]}
            </span>
          </div>

          <button
            onClick={handleNext}
            className="bg-white rounded-full px-[12px] py-[6px] text-[#2d394b] hover:bg-gray-100 transition-opacity duration-300 cursor-pointer shadow"
          >
            <i className="fas fa-chevron-right bg-transparent"></i>
          </button>
        </div>

        {/* Right Language Selector */}
        <div className="relative">
          <div
            className="flex items-center text-[16px] gap-2 cursor-pointer"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <img
              src={`https://flagcdn.com/${currentLang.code}.svg`}
              alt={currentLang.name}
              className="w-6 h-5 object-cover rounded"
            />
            <span>{currentLang.name}</span>
            <i className="fas fa-chevron-down text-[14px] ml-1"></i>
          </div>

          {/* Dropdown */}
          {showDropdown && (
            <div className="absolute right-0 mt-2 bg-white text-black rounded shadow z-50 w-40">
              {languages.map((lang) => (
                <div
                  key={lang.code}
                  className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSelect(lang)}
                >
                  <img
                    src={`https://flagcdn.com/${lang.code}.svg`}
                    alt={lang.name}
                    className="w-5 h-4 object-cover rounded"
                  />
                  <span>{lang.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
