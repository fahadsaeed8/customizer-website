"use client";
import React, { useEffect, useState } from "react";

const Topbar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentLang, setCurrentLang] = useState({
    name: "English",
    code: "en",
  });

  const getFlagCode = (langCode: string) => {
    const map: Record<string, string> = {
      en: "us",
      fr: "fr",
      de: "de",
      it: "it",
      ar: "sa",
      cn: "cn",
      nl: "nl",
    };
    return map[langCode] || "us";
  };

  const messages = [
    "Every sport available, plus fully-custom designs.",
    "Fastest 2-3 week turnaround and worldwide shipping.",
    "Lowest prices Guaranteed.",
  ];

  const allMessages: Record<string, string[]> = {
    en: [
      "Every sport available, plus fully-custom designs.",
      "Fastest 2-3 week turnaround and worldwide shipping.",
      "Lowest prices Guaranteed.",
    ],
    fr: [
      "Chaque sport disponible, plus des designs personnalisés.",
      "Livraison rapide en 2-3 semaines dans le monde entier.",
      "Les prix les plus bas garantis.",
    ],
    de: [
      "Alle Sportarten verfügbar, plus vollständig anpassbare Designs.",
      "Schnelle Lieferung weltweit in 2-3 Wochen.",
      "Garantiert die niedrigsten Preise.",
    ],
    it: [
      "Tutti gli sport disponibili, con design completamente personalizzati.",
      "Spedizione in tutto il mondo in 2-3 settimane.",
      "Prezzi più bassi garantiti.",
    ],
    ar: [
      "جميع الرياضات متاحة، بالإضافة إلى تصميمات مخصصة بالكامل.",
      "أسرع وقت تسليم من 2-3 أسابيع وشحن عالمي.",
      "أقل الأسعار مضمونة.",
    ],
    cn: [
      "提供所有运动及完全定制设计。",
      "最快 2-3 周交付，全球发货。",
      "最低价格保证。",
    ],
    nl: [
      "Elke sport beschikbaar, plus volledig aangepaste ontwerpen.",
      "Snelle levering binnen 2-3 weken wereldwijd.",
      "Laagste prijzen gegarandeerd.",
    ],
  };

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

  const languages = [
    { name: "English", code: "us" },
    { name: "Arabic", code: "ar" },
    { name: "Chinese", code: "cn" },
    { name: "Dutch", code: "nl" },
    { name: "French", code: "fr" },
    { name: "German", code: "de" },
    { name: "Italian", code: "it" },
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
    <div className="w-full md:block hidden bg-[#2d394b] text-white text-sm font-sans">
      <div className="flex items-center justify-between px-4 py-6">
        {/* Left Social Icons */}
        <div className="flex gap-5 px-5 text-white text-[18px]">
          <a
            href="https://www.facebook.com/prosixsports"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f cursor-pointer"></i>
          </a>
          <a
            href="https://www.instagram.com/prosixsports/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram cursor-pointer"></i>
          </a>
          <a
            href="https://www.youtube.com/prosixsports"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-youtube cursor-pointer"></i>
          </a>
          <a
            href="https://x.com/prosixsports/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter cursor-pointer"></i>
          </a>
          <a
            href="https://www.pinterest.com/prosixsports/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-pinterest cursor-pointer"></i>
          </a>
        </div>

        {/* Center Slider Text */}
        <div className="flex items-center gap-5 max-w-[50%] text-center">
          <button
            onClick={handlePrev}
            className="bg-white rounded-full px-[11px] py-[5px] text-[#2d394b] hover:bg-gray-100 transition-opacity duration-300 cursor-pointer shadow"
          >
            <i className="fas fa-chevron-left"></i>
          </button>

          <div className="cursor-pointer group">
            <span className="flex text-[16px] font-serif text-[#9cc9f5] group-hover:text-white items-center gap-2 whitespace-nowrap">
              <i className="fas fa-fire text-[#9cc9f5] group-hover:text-white"></i>
              {allMessages[currentLang.code]?.[currentIndex] ||
                allMessages.en[currentIndex]}
            </span>
          </div>

          <button
            onClick={handleNext}
            className="bg-white rounded-full px-[11px] py-[5px] text-[#2d394b] hover:bg-gray-100 transition-opacity duration-300 cursor-pointer shadow"
          >
            <i className="fas fa-chevron-right bg-transparent"></i>
          </button>
        </div>

        {/* Right Language Selector */}
        <div className="relative">
          <div
            className="flex items-center text-[20px] gap-2 cursor-pointer"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <img
              src={`https://flagcdn.com/${getFlagCode(currentLang.code)}.svg`}
              alt={currentLang.name}
              className="w-5 h-4 object-cover rounded"
            />

            <span>{currentLang.name}</span>
            <i className="fas fa-chevron-down text-[12px] ml-1"></i>
          </div>

          {/* Dropdown */}
          {showDropdown && (
            <div className="absolute text-[18px] right-0 mt-2 bg-white text-black rounded shadow z-50 w-40">
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
