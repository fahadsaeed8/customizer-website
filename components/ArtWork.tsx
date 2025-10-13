"use client";
import React from "react";
import Link from "next/link";

const ArtWorkRequest = () => {
  return (
    <div className="fixed bottom-5 left-2 md:left-5 z-50 flex flex-col items-center space-y-1 cursor-pointer">

      {/* Floating Icon Button */}
       <Link
        href="/art-work-request-form"
        className="text-sm font-semibold text-gray-800 hover:text-gray-600 transition"
      >
      <div className=" text-white  flex items-center justify-center hover:scale-110 transition-transform duration-300">
       <img src="/art-logo.png" alt="" className=" w-24 " />
      </div>

    
      </Link>
    </div>
  );
};

export default ArtWorkRequest;
