"use client";

import Footer from "@/components/Footer";
import React, { useState } from "react";

type Color = {
  name: string;
  color: string;
};

function ArtworkRequestForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    instagram: "",
    address: "",
    team: "",
    role: "",
    orderQuantity: "",
  });
  const [teamColor, setTeamColor] = useState("#b30000");
  const [needMockup, setNeedMockup] = useState<string | null>(null);
  const [organizationType, setOrganizationType] = useState<string[]>([]);
  const [twillType, setTwillType] = useState("Fully Twill");
  const [showColorModal, setShowColorModal] = useState(false);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [otherColor, setOtherColor] = useState("");
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFiles(e.target.files);
  };
  const colors = [
    { name: "WHITE", color: "#ffffff" },
    { name: "SILVER GREY", color: "#c0c0c0" },
    { name: "DARK GREY", color: "#808080" },
    { name: "BLACK", color: "#000000" },
    { name: "NAVY BLUE", color: "#001f5b" },
    { name: "RED", color: "#ff0000" },
    { name: "ROYAL BLUE", color: "#4169e1" },
    { name: "ORANGE", color: "#ffa500" },
    { name: "PURPLE", color: "#800080" },
    { name: "VEGAS GOLD", color: "#c5b358" },
    { name: "MEHROON", color: "#800000" },
    { name: "PEACH", color: "#ffdab9" },
    { name: "FOREST GREEN", color: "#228b22" },
    { name: "FLORECENT GREEN", color: "#39ff14" },
    { name: "KALLY GREEN", color: "#4caf50" },
    { name: "HOT PINK", color: "#ff69b4" },
    { name: "BABY BLUE", color: "#89cff0" },
    { name: "YELLOW GOLD", color: "#ffd700" },
    { name: "NEON YELLOW", color: "#ffff33" },
    { name: "BROWN", color: "#8b4513" },
    { name: "PEARL WHITE", color: "#f8f8ff" },
    { name: "BRUNT ORANGE", color: "#cc5500" },
    { name: "TEEL GREEN", color: "#008080" },
    { name: "AQUA BLUE", color: "#00bcd4" },
    { name: "ARMY GREEN", color: "#4b5320" },
  ];

  const handleOrgChange = (value: string) => {
    setOrganizationType((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const toggleColor = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const handleAddColors = () => {
    if (otherColor.trim()) {
      setSelectedColors((prev) => [...prev, otherColor.trim()]);
      setOtherColor("");
    }
    setShowColorModal(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted successfully!");
  };

  return (
    <>
    <div className="flex flex-col items-center mt-30 bg-white min-h-screen max-w-7xl mb-10 mx-auto">
      <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-3 text-center">
        ARTWORK REQUEST FORM
      </h1>
      <p className="text-gray-800 text-2xl text-center mb-10">
        Please complete the following form in its entirety to receive your
        custom uniform or apparel mock up. Be sure to select the appropriate
        items needed and your mock up will be delivered within 2–3 business
        days.
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-full grid grid-cols-1 md:grid-cols-3 gap-5"
      >
        {/* Full Name */}
        <div className="flex flex-col">
          <label className=" text-xl text-gray-700 font-bold mb-1">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="border border-gray-300 px-2 py-[6px] rounded-xs focus:outline-none focus:ring focus:ring-black"
            required
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="text-xl text-gray-700 font-bold mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 px-2 py-[6px] rounded-xs focus:outline-none focus:ring focus:ring-black"
            required
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col">
          <label className="text-xl text-gray-700 font-bold mb-1">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="border border-gray-300 px-2 py-[6px] rounded-xs focus:outline-none focus:ring focus:ring-black"
            required
          />
        </div>

        {/* Instagram */}
        <div className="flex flex-col">
          <label className="text-xl text-gray-700 font-bold mb-1">
            Instagram
          </label>
          <input
            type="text"
            name="instagram"
            value={formData.instagram}
            onChange={handleChange}
            className="border border-gray-300 px-2 py-[6px] rounded-xs focus:outline-none focus:ring focus:ring-black"
          />
        </div>

        {/* Address */}
        <div className="flex flex-col col-span-2">
          <label className="text-xl text-gray-700 font-bold mb-1">
            Address
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="border border-gray-300 px-2 py-[6px] rounded-xs focus:outline-none focus:ring focus:ring-black"
          />
        </div>

        {/* Team / Organization Name */}
        <div className="flex flex-col">
          <label className="text-xl text-gray-700 font-bold mb-1">
            Team / Organization Name
          </label>
          <input
            type="text"
            name="team"
            value={formData.team}
            onChange={handleChange}
            className="border border-gray-300 px-2 py-[6px] rounded-xs focus:outline-none focus:ring focus:ring-black"
          />
        </div>

        {/* Role */}
        <div className="flex flex-col">
          <label className="text-xl text-gray-700 font-bold mb-1">
            Are You Coach, Player, or Parent
          </label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className={`border border-gray-300 px-2 py-[6px] rounded-xs focus:outline-none focus:ring focus:ring-black ${
              formData.role ? "text-black" : "text-gray-800"
            }`}
            required
          >
            <option value="" disabled>
              Choose one
            </option>
            <option value="Coach" className="text-black">
              Coach
            </option>
            <option value="Player" className="text-black">
              Player
            </option>
            <option value="Parent" className="text-black">
              Parent
            </option>
          </select>
        </div>

        {/* Order Quantity */}
        <div className="flex flex-col">
          <label className="text-xl text-gray-700 font-bold mb-1">
            Order Quantity
          </label>
          <input
            type="number"
            name="orderQuantity"
            value={formData.orderQuantity}
            onChange={handleChange}
            min="1"
            className="border border-gray-300 px-2 py-[6px] rounded-xs focus:outline-none focus:ring focus:ring-black"
            required
          />
        </div>
      </form>

      {/* Color and Options Section */}
      <div className="w-full border-t border-b border-gray-300 border-dashed  py-6 mt-10">
        <div className="flex flex-wrap items-start justify-between gap-8">
          {/* Team Color */}
          <div className="flex flex-col items-start gap-2 ">
            <label className="font-semibold text-2xl text-gray-800">
              Please enter your team color
            </label>
            <button
              // style={{ backgroundColor: teamColor }}
              className="flex items-center justify-center cursor-pointer text-xl border border-black  bg-[#ad2525] rounded-tr-2xl rounded-bl-2xl w-[115px] h-[35px]  text-white font-medium hover:opacity-80 transition"
              onClick={() => setShowColorModal(true)}
              type="button"
            >
              Select color
            </button>
          </div>

          {/* Home/Away Mockup */}
          <div>
            <label className="font-semibold text-2xl text-gray-800 block mb-2">
              Do you need a home / away mock-up?
            </label>
            <div className="flex items-center gap-4">
              {["YES", "NO"].map((option) => (
                <label key={option} className="flex items-center gap-1">
                  <input
                    type="checkbox"
                    checked={needMockup === option}
                    onChange={() =>
                      setNeedMockup((prev) => (prev === option ? null : option))
                    }
                    className="accent-[#b30000]"
                  />
                  <span className="text-gray-800 text-xl font-semibold">
                    {option}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Organization Type */}
          <div>
            <label className="font-semibold text-2xl text-gray-800 block mb-2">
              Team / Organization Name
            </label>
            <div className="flex flex-wrap items-center gap-4">
              {["Traditional", "Non-Traditional", "Combo"].map((type) => (
                <label key={type} className="flex items-center gap-1">
                  <input
                    type="checkbox"
                    checked={organizationType.includes(type)}
                    onChange={() => handleOrgChange(type)}
                    className="accent-[#b30000]"
                  />
                  <span className="text-gray-800 text-xl font-semibold">
                    {type}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Twill Options */}
          <div className="flex-1">
            <label className="font-semibold text-2xl text-gray-800 block mb-2">
              Are You in Twill?
            </label>
            <div className="flex flex-wrap items-center gap-4">
              {[
                "Fully Twill",
                "Sub-Twill",
                "Silicone+Twill",
                "Fully Sublimation",
                "Dont Know",
              ].map((option) => (
                <label key={option} className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="twill"
                    value={option}
                    checked={twillType === option}
                    onChange={() => setTwillType(option)}
                    className="accent-[#b30000]"
                  />
                  <span className="text-gray-700 text-sm font-semibold">
                    {option}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full mt-10">
        <h2 className="text-xl font-bold mb-4 text-gray-900">
          Sport (Choose 2 ONLY if you need 2 different items)
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 mb-6">
          {[
            "bundle deal",
            "Football Uniforms",
            "Basketball Uniforms",
            "Baseball Uniforms",
            "7on7 / Football Uniforms",
            "Track & Field Uniforms",
            "Compression Shirt",
            "Compression Tights",
            "Custom Duffle Bag",
            "Custom Backpack",
            "Polo Shirt / Dri-fit Shirt",
            "Sublimated Hoodie",
            "Warm-Ups",
            "Shooting Shirt",
            "Letterman Jackets",
            "Cheer Uniform",
            "Football Jersey Only",
            "Gloves",
            "Other",
          ].map((item) => (
            <label
              key={item}
              className="flex items-center gap-2  text-xl font-bold"
            >
              <input type="checkbox" className="accent-black w-4 h-4" />
              {item}
            </label>
          ))}
        </div>

        <div className=" flex gap-5 w-full">
        {/* Product / Mockup Request Details */}
        <div className="mb-6 w-1/2">
          <label className="block font-semibold text-2xl mb-2 text-gray-900">
            Product / Mockup Request Details
          </label>
          <textarea
            className="w-full border border-gray-300 rounded-md p-3 text-sm focus:ring-2 focus:ring-gray-800 focus:outline-none"
            rows={5}
          ></textarea>
        </div>

        {/* File Upload */}
        <div className="mb-6 w-1/2">
          <label className="block font-semibold text-2xl text-gray-900">
            Upload high-quality logo, idea, or reference (jpg, jpeg, png, pdf,
            cdr)
          </label>
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-700 p-2 file:mr-4 file:py-1 file:px-3 file:border file:text-xl file:font-semibold file:bg-gray-100 file:text-gray-800 hover:file:bg-gray-200"
          />
          {selectedFiles && (
            <p className="text-xs text-gray-500 mt-1">
              {selectedFiles.length} file(s) selected
            </p>
          )}
        </div>
        </div>

        {/* Additional Detail */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div>
            <label className="block font-semibold text-2xl mb-2 text-gray-900">
              Additional Detail
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-gray-800 focus:outline-none"
            />
          </div>

          <div>
            <label className="block font-semibold text-2xl mb-2 text-gray-900">
              How Did you Hear About us?
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md  px-3 py-2 text-sm focus:ring-2 focus:ring-gray-800 focus:outline-none"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center ">
          <button
            type="submit"
            className="bg-[#c8ff00] text-black text-2xl  w-1/4 py-1 cursor-pointer border border-gray-300 rounded-md hover:bg-lime-500 transition-colors"
          >
            Submit Request
          </button>
        </div>
      </div>
      {/* Color Selection Modal */}
      {showColorModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-[90%] md:w-[700px] max-h-[90vh] overflow-y-auto shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-4xl font-semibold text-gray-800">
                Select Colors for your Combats
              </h2>
              <button
                onClick={() => setShowColorModal(false)}
                className="text-gray-600 cursor-pointer hover:text-black text-xl"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
              {colors.map((c) => {
                const lightTextColors = [
                  "WHITE",
                  "SILVER GREY",
                  "DARK GREY",
                  "ORANGE",
                  "VEGAS GOLD",
                  "PEACH",
                  "FLORECENT GREEN",
                  "KALLY GREEN",
                  "HOT PINK",
                  "BABY BLUE",
                  "YELLOW GOLD",
                  "NEON YELLOW",
                  "PEARL WHITE",
                  "BRUNT ORANGE",
                  "AQUA BLUE",
                ];

                const textColor = lightTextColors.includes(c.name)
                  ? "text-gray-700"
                  : "text-white";

                const addBorder =
                  c.name === "WHITE" || c.name === "PEARL WHITE"
                    ? "border border-gray-400"
                    : "";

                return (
                  <label
                    key={c.name}
                    className={`flex items-center gap-2 w-[160px] h-[33px] rounded-[10px] px-2 cursor-pointer ${textColor} ${addBorder}`}
                    style={{ backgroundColor: c.color }}
                  >
                    <input
                      type="checkbox"
                      checked={selectedColors.includes(c.name)}
                      onChange={() => toggleColor(c.name)}
                      className="accent-black"
                    />
                    <span className="text-xl font-bold">{c.name}</span>
                  </label>
                );
              })}
            </div>

            <div className="mt-3">
              <label className="text-gray-800 font-medium ">
                Type Other color:
              </label>
              <input
                type="text"
                value={otherColor}
                onChange={(e) => setOtherColor(e.target.value)}
                className="w-full border border-gray-300 px-3 py-[2px] rounded focus:outline-none focus:ring focus:ring-black"
              />
            </div>
            <div className=" flex items-center justify-center">
              <button
                onClick={handleAddColors}
                className="bg-[#c8ff00] text-[#800080] cursor-pointer text-xl font-semibold px-5 py-2 mt-5 rounded hover:bg-lime-500 transition w-1/6"
              >
                Add Colors
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
}

export default ArtworkRequestForm;
