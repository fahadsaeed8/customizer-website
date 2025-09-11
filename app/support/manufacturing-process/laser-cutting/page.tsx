"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type ImageType = {
  src: string;
  heading?: string;
};

const images: ImageType[] = [
  {
    src: "/support/laser01.jpg",
    // heading: "MENS MMA SHORTS WITH WEIST TAG",
  },
  {
    src: "/support/laser02.jpg",
    // heading: "MENS MMA SHORTS WITHOUT WEIST TAG",
  },
  {
    src: "/support/laser03.jpg",
    // heading: "MENS ROUND NECK WRESTLING SWEATER",
  },
  {
    src: "/support/laser04.jpg",
    // heading: "MENS WRESTLING 1/4 ZIP JACKET",
  },
];

export default function SizeReferencePage() {
  const [popupImg, setPopupImg] = useState<string | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <Header isModalOpen={false} setIsModalOpen={() => {}} />

      {/* Hero Image (full width, under header, scrolls with page) */}
      <div className="w-full bg-gray-100 border-b border-gray-300" style={{ marginTop: "160px", height: "80vh"}}>
        <img
          src="/support/laser-hero.jpg"
          alt="Hero image"
          className="w-full h-full object-cover block"
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center">
        {/* Main Heading */}
        <div className="text-center mt-8 mb-8">
          <h1 className="text-4xl font-bold tracking-wide">PROSIX: Laser Printing</h1>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl px-4">
          {images.map((img, i) => (
            <div key={i} className="flex flex-col items-center">
              <div
                className="bg-white border-2 border-black rounded shadow hover:shadow-lg transition overflow-hidden flex flex-col items-center group cursor-pointer"
                onClick={() => setPopupImg(img.src)}
                style={{ width: "100%", minHeight: "320px" }}
              >
                <div className="w-full flex-1 flex items-center justify-center overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.heading}
                    className="w-full  h-full object-cover  object-contain transition-transform duration-300 group-hover:scale-105"
                    style={{ background: "transparent" }}
                  />
                </div>
              </div>
              <div className="py-4 w-full text-center">
                <span className="text-xl font-semibold tracking-wide">{img.heading}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup */}
      {popupImg && (
        <div
          className="fixed inset-0 bg-black/80  flex items-center justify-center z-50"
          onClick={() => setPopupImg(null)}
        >
          <div
            className="bg-transparent p-4 rounded shadow-lg max-w-3xl w-full flex flex-col items-center"
            onClick={e => e.stopPropagation()}
          >
            <img src={popupImg} alt="Zoomed" className="w-full rounded-2xl h-auto max-h-[70vh] object-contain" />
            <button
              className="mt-4 px-6 py-2 bg-gray-800 text-white rounded hover:bg-black"
              onClick={() => setPopupImg(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}