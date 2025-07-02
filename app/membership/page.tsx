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
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen bg-white flex flex-col py-[190px] items-center justify-center px-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-8">
          <img src="/logo.png" alt="Prosix Logo" className="mx-auto h-16" />
          <h1 className="text-2xl font-bold mt-4">
            Please Fill Out The Form And Get Advantage From Our Special Deals
            And Promo Package
          </h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div>
            <label className="block text-sm font-medium">Your Name</label>
            <input
              name="name"
              onChange={handleChange}
              className="w-full border p-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Your Email</label>
            <input
              name="email"
              type="email"
              onChange={handleChange}
              className="w-full border p-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Mailing Address</label>
            <input
              name="address"
              onChange={handleChange}
              className="w-full border p-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">
              Organization / High School
            </label>
            <input
              name="organization"
              onChange={handleChange}
              className="w-full border p-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">State</label>
            <input
              name="state"
              onChange={handleChange}
              className="w-full border p-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Zip Code</label>
            <input
              name="zip"
              type="number"
              onChange={handleChange}
              className="w-full border p-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Phone</label>
            <input
              name="phone"
              type="tel"
              onChange={handleChange}
              className="w-full border p-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">
              Are You Coach, Player, or Parent
            </label>
            <select
              name="role"
              onChange={handleChange}
              className="w-full border p-2"
              required
            >
              <option value="">Choose one</option>
              <option value="Coach">Coach</option>
              <option value="Player">Player</option>
              <option value="Parent">Parent</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium">
              Sport (Choose 2 ONLY if you need 2 different items)
            </label>
            <button
              type="button"
              className="mt-2 px-4 py-2 bg-red-700 text-white rounded"
              onClick={() =>
                alert("Sport selection functionality to be implemented")
              }
            >
              Select items
            </button>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-2">
              Are You in Twill?
            </label>
            <div className="flex flex-wrap gap-4">
              {[
                "Youth",
                "Semi Pro",
                "High School",
                "Mockup",
                "Team Apparel",
              ].map((option) => (
                <label key={option} className="flex items-center gap-2">
                  <input
                    type="checkbox"
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
                  {option}
                </label>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 flex justify-center mt-6">
            <button
              type="submit"
              className="bg-lime-400 px-6 py-2 text-black font-semibold rounded hover:bg-lime-500 transition-colors"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
