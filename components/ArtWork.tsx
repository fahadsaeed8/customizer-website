"use client";
import React, { useState } from "react";

const ArtWorkRequest = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-5 left-2 md:left-5 z-50 flex flex-col items-start space-y-2">
      {isOpen ? (
        <div className="bg-white rounded-[10px] overflow-y-scroll h-[500px] scrollbar-hide shadow-lg sm:w-[375px] w-full mb-2 overflow-hidden">
          {/* Header */}
          <div className="flex items-center p-3 bg-gray-500 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="white"
              viewBox="0 0 24 24"
              className="mr-3"
            >
              <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm0 18a7.938 7.938 0 0 1-3.955-1.064l.567-1.606a2.01 2.01 0 0 1 1.89-1.33h3.006a2.01 2.01 0 0 1 1.89 1.33l.567 1.606A7.938 7.938 0 0 1 12 20Zm0-16a8 8 0 0 1 7.938 8.73A3.992 3.992 0 0 0 15 11h-6a3.992 3.992 0 0 0-4.938 1.73A8 8 0 0 1 12 4Zm0 8a1.5 1.5 0 1 0-1.5-1.5A1.502 1.502 0 0 0 12 12Z" />
            </svg>
            <div>
              <h2 className="text-lg font-bold leading-tight">
                Art Work Request
              </h2>
              <p className="text-sm text-gray-200 leading-tight">
                Submit your design idea below
              </p>
            </div>
          </div>

          {/* Form */}
          <form className="p-4 space-y-3">
            <div>
              <label className="block text-sm font-semibold mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-400 outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-400 outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Team / Club Name
              </label>
              <input
                type="text"
                placeholder="e.g., Falcons United"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-400 outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Describe Your Artwork
              </label>
              <textarea
                rows={3}
                placeholder="Describe the artwork you need (colors, logo, style...)"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-400 outline-none resize-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Upload Reference Image (optional)
              </label>
              <input
                type="file"
                accept="image/*"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm file:mr-3 file:py-2 file:px-3 file:border-0 file:bg-blue-600 file:text-white file:rounded-md file:cursor-pointer"
              />
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer bg-gray-800 text-white font-semibold rounded-lg py-2 text-sm transition"
            >
              Submit Request
            </button>
          </form>
        </div>
      ) : null}

      {/* Floating Button */}
      <button
        onClick={toggleForm}
        className={`relative bg-gray-600 cursor-pointer text-white rounded-full px-4 ${isOpen ? "py-4" : "py-3"}  shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center gap-2`}
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M18 6L6 18M6 6l12 12"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <>
           
            <span className="text-sm font-bold">Need Artwork?</span>
          </>
        )}
      </button>
    </div>
  );
};

export default ArtWorkRequest;
