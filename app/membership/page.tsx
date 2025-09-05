"use client";
import { useState } from "react";

type FormData = {
  name?: string;
  email?: string;
  address?: string;
  organization?: string;
  state?: string;
  zip?: string;
  phone?: string;
  role?: string;
  youth?: boolean;
  semipro?: boolean;
  highschool?: boolean;
  mockup?: boolean;
  teamapparel?: boolean;
};

export default function MembershipForm() {
  const [form, setForm] = useState<FormData>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <div className="relative min-h-screen flex flex-col pt-[190px] pb-10 items-center justify-center px-4">
      {/* Background image */}
      <div
        className="absolute inset-0 w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/texture-lines.jpg')" }}
      ></div>

      {/* Light overlay to soften background */}
      <div className="absolute inset-0 bg-white/90"></div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="text-center mb-8">
          <img
            src="/PROSIX-LOGO.png"
            alt="Prosix Logo"
            className="mx-auto h-24"
          />
          <h1 className="text-4xl font-bold mt-4 text-gray-900">
            Please Fill Out The Form And Get Advantage From Our Special Deals
            And Promo Package
          </h1>
        </div>

        {/* Glass-effect form */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-7 bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-xl"
        >
          {/* Name */}
          <div>
            <label className="block text-xl font-bold">Your Name</label>
            <input
              name="name"
              onChange={handleChange}
              className="w-full border border-gray-400 p-1 text-xl rounded"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-xl font-bold">Your Email</label>
            <input
              name="email"
              type="email"
              onChange={handleChange}
              className="w-full border border-gray-400 p-1 text-xl rounded"
              required
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-xl font-bold">Mailing Address</label>
            <input
              name="address"
              onChange={handleChange}
              className="w-full border border-gray-400 p-1 text-xl rounded"
              required
            />
          </div>

          {/* Organization */}
          <div>
            <label className="block text-xl font-bold">
              Organization / High School
            </label>
            <input
              name="organization"
              onChange={handleChange}
              className="w-full border border-gray-400 p-1 text-xl rounded"
              required
            />
          </div>

          {/* State / Zip / Phone / Role */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:col-span-2">
            {/* State */}
            <div>
              <label className="block text-xl font-bold">State</label>
              <input
                name="state"
                onChange={handleChange}
                className="w-full border border-gray-400 p-1 text-xl rounded"
                required
              />
            </div>

            {/* Zip */}
            <div>
              <label className="block text-xl font-bold">Zip Code</label>
              <input
                name="zip"
                type="number"
                onChange={handleChange}
                className="w-full border border-gray-400 p-1 text-xl rounded"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xl font-bold">Phone</label>
              <input
                name="phone"
                type="tel"
                onChange={handleChange}
                className="w-full border border-gray-400 p-1 text-xl rounded"
                required
              />
            </div>

            {/* Role */}
            <div>
              <label className="block text-xl font-bold">
                Are You Coach, Player, or Parent
              </label>
              <select
                name="role"
                onChange={handleChange}
                className="w-full border p-1 text-xl border-gray-400 rounded"
                required
              >
                <option value="">Choose one</option>
                <option value="Coach">Coach</option>
                <option value="Player">Player</option>
                <option value="Parent">Parent</option>
              </select>
            </div>
          </div>

          {/* Sport & Twill */}
          <div className="md:col-span-2 mt-4 pt-6 border-t border-gray-200">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Sport Selection */}
              <div className="flex-1">
                <label className="block text-xl font-bold text-gray-700 mb-2">
                  Sport (Choose 2 ONLY if you need 2 different items)
                </label>
                <div className="mt-1">
                  <button
                    type="button"
                    className="px-3 cursor-pointer rounded-bl-[30px] rounded-tr-[30px] hover:bg-gray-600 py-2 bg-red-800 text-white text-[20px] focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors w-[30%] text-center"
                    onClick={() =>
                      alert("Sport selection functionality to be implemented")
                    }
                  >
                    Select Items
                  </button>
                </div>
              </div>

              {/* Twill Options */}
              <div className="flex-1">
                <label className="block text-xl font-bold text-gray-700 mb-3">
                  Are You in Twill?
                </label>
                <div className="flex gap-5 font-bold cursor-pointer flex-wrap">
                  {[
                    "Youth",
                    "Semi Pro",
                    "High School",
                    "Mockup",
                    "Team Apparel",
                  ].map((option) => (
                    <div key={option} className="flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                        name={option.toLowerCase().replace(/\s/g, "")}
                        onChange={handleChange}
                        checked={Boolean(
                          form[
                            option
                              .toLowerCase()
                              .replace(/\s/g, "") as keyof FormData
                          ]
                        )}
                      />
                      <label className="ml-2 block text-md text-gray-700">
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="md:col-span-2 flex justify-center mt-6">
            <button
              type="submit"
              className="bg-gray-600 text-white w-[30%] px-6 py-2 text-[20px] cursor-pointer font-semibold rounded hover:bg-red-800 transition-colors"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
