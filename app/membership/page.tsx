"use client";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { createMembershipRequestAPI } from "../../services/api";
import { toast } from "react-toastify";

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

  // ---------------------------------------------------------
  // HANDLE INPUT CHANGE
  // ---------------------------------------------------------
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

  // ---------------------------------------------------------
  // REACT QUERY MUTATION (POST API)
  // ---------------------------------------------------------
  const mutation = useMutation({
    mutationFn: (payload: any) => createMembershipRequestAPI(payload),
    onSuccess: (res: any) => {
      toast.success(res.response?.message || "Request submitted successfully!");

      console.log("API success:", res);

      // Reset form
      setForm({});
    },
    onError: (err: any) => {
      console.error("API Error:", err);
      toast.error("Failed to submit membership request!");
    },
  });

  // ---------------------------------------------------------
  // SUBMIT HANDLER — MAP FIELDS TO API EXACT FIELDS
  // ---------------------------------------------------------
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TWILL SELECTION (FIRST CHECKED OPTION)
    const twillTypes = {
      youth: "youth",
      semipro: "semi_pro",
      highschool: "high_school",
      mockup: "mockup",
      teamapparel: "team_apparel",
    };

    const selectedTwill =
      (Object.keys(twillTypes) as Array<keyof typeof twillTypes>).find(
        (key) => form[key]
      ) || null;

    const payload = {
      name: form.name,
      email: form.email,
      mailing_address: form.address,
      organization: form.organization,
      state: form.state,
      zip_code: form.zip,
      phone: form.phone,
      user_type: form.role?.toLowerCase(), // Coach → coach
      twill_type: selectedTwill ? twillTypes[selectedTwill] : null,
      sport: "Basketball", // You can make dynamic later
    };

    mutation.mutate(payload);
  };

  // ---------------------------------------------------------
  // UI
  // ---------------------------------------------------------
  return (
    <div className="relative min-h-screen flex flex-col pt-48 pb-10 items-center justify-center px-4">
      {/* Background image */}
      <div
        className="absolute inset-0 w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/texture-lines.jpg')" }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/90"></div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="text-center mb-8 px-2">
          <img
            src="/PROSIX-LOGO.png"
            alt="Prosix Logo"
            className="mx-auto h-16 sm:h-24"
          />
          <h1 className="text-2xl sm:text-4xl font-bold mt-4 text-gray-900">
            Please Fill Out The Form And Get Advantage From Our Special Deals
            And Promo Package
          </h1>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-7 bg-transparent backdrop-blur-md p-4 sm:p-6 rounded-2xl shadow-xl"
        >
          {/* Name */}
          <div>
            <label className="block text-lg sm:text-xl font-bold">
              Your Name
            </label>
            <input
              name="name"
              value={form.name || ""}
              onChange={handleChange}
              className="w-full border border-gray-400 p-2 text-lg sm:text-xl rounded"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-lg sm:text-xl font-bold">
              Your Email
            </label>
            <input
              name="email"
              type="email"
              value={form.email || ""}
              onChange={handleChange}
              className="w-full border border-gray-400 p-2 text-lg sm:text-xl rounded"
              required
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-lg sm:text-xl font-bold">
              Mailing Address
            </label>
            <input
              name="address"
              value={form.address || ""}
              onChange={handleChange}
              className="w-full border border-gray-400 p-2 text-lg sm:text-xl rounded"
              required
            />
          </div>

          {/* Organization */}
          <div>
            <label className="block text-lg sm:text-xl font-bold">
              Organization / High School
            </label>
            <input
              name="organization"
              value={form.organization || ""}
              onChange={handleChange}
              className="w-full border border-gray-400 p-2 text-lg sm:text-xl rounded"
              required
            />
          </div>

          {/* State, Zip, Phone, Role */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:col-span-2">
            <div>
              <label className="block text-lg sm:text-xl font-bold">
                State
              </label>
              <input
                name="state"
                value={form.state || ""}
                onChange={handleChange}
                className="w-full border border-gray-400 p-2 text-lg sm:text-xl rounded"
                required
              />
            </div>

            <div>
              <label className="block text-lg sm:text-xl font-bold">
                Zip Code
              </label>
              <input
                name="zip"
                type="number"
                value={form.zip || ""}
                onChange={handleChange}
                className="w-full border border-gray-400 p-2 text-lg sm:text-xl rounded"
                required
              />
            </div>

            <div>
              <label className="block text-lg sm:text-xl font-bold">
                Phone
              </label>
              <input
                name="phone"
                type="tel"
                value={form.phone || ""}
                onChange={handleChange}
                className="w-full border border-gray-400 p-2 text-lg sm:text-xl rounded"
                required
              />
            </div>

            <div>
              <label className="block text-lg sm:text-xl font-bold">
                Are You Coach, Player, or Parent
              </label>
              <select
                name="role"
                value={form.role || ""}
                onChange={handleChange}
                className="w-full border p-2 text-lg sm:text-xl border-gray-400 rounded"
                required
              >
                <option value="">Choose one</option>
                <option value="coach">Coach</option>
                <option value="player">Player</option>
                <option value="parent">Parent</option>
              </select>
            </div>
          </div>

          {/* Twill Selection */}
          <div className="md:col-span-2 mt-4 pt-6 border-t border-gray-200">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Sport Button */}
              <div className="flex-1">
                <label className="block text-lg sm:text-xl font-bold text-gray-700 mb-2">
                  Sport (Choose 2 ONLY if you need 2 different items)
                </label>
                <button
                  type="button"
                  className="px-3 cursor-pointer rounded-bl-[30px] rounded-tr-[30px] hover:bg-gray-600 py-2 bg-red-800 text-white text-[18px]"
                  onClick={() => alert("Sport selection coming soon")}
                >
                  Select Items
                </button>
              </div>

              {/* Twill Types */}
              <div className="flex-1">
                <label className="block text-lg sm:text-xl font-bold text-gray-700 mb-3">
                  Are You in Twill?
                </label>
                <div className="flex gap-5 font-bold cursor-pointer flex-wrap">
                  {[
                    "Youth",
                    "Semi Pro",
                    "High School",
                    "Mockup",
                    "Team Apparel",
                  ].map((option) => {
                    const key = option.toLowerCase().replace(/\s/g, "");
                    return (
                      <div key={option} className="flex items-center">
                        <input
                          type="checkbox"
                          className="h-4 w-4 text-red-600 border-gray-300 rounded"
                          name={key}
                          checked={Boolean(form[key as keyof FormData])}
                          onChange={handleChange}
                        />
                        <label className="ml-2 block text-sm sm:text-md text-gray-700">
                          {option}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="md:col-span-2 flex justify-center mt-6">
            <button
              type="submit"
              disabled={mutation.isPending}
              className="bg-gray-600 text-white w-full sm:w-[30%] px-6 py-2 text-[18px] cursor-pointer font-semibold rounded hover:bg-red-800"
            >
              {mutation.isPending ? "Submitting..." : "Submit Request"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
