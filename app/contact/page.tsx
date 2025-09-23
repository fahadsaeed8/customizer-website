"use client";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    system: "",
    phone: "",
    school: "",
    members: "",
    email: "",
    address: "",
    message: "",
    zip: "",
    orderNumber: "",
    salesRep: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="relative min-h-screen flex flex-col pt-[165px] pb-0">
      {/* Map (Full Width) */}
      <div className="w-full h-[250px] sm:h-[300px] md:h-[350px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153!2d-122.0842499!3d37.4219999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0!2zMzfCsDI1JzE5LjIiTiAxMjLCsDA1JzAyLjgiVw!5e0!3m2!1sen!2sus!4v1632928470000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          allowFullScreen={true}
          loading="lazy"
          className="border-0"
        ></iframe>
      </div>

      {/* Contact Section */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 px-4 sm:px-6 md:px-8">
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="md:col-span-2 flex flex-col gap-4"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">CONTACT US</h2>
          <p className="text-lg sm:text-2xl text-gray-700 mb-4">
            If you’d like to get in touch, please fill out the form below...
          </p>

          {/* Full Name & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label
                htmlFor="firstName"
                className="mb-0.5 font-bold text-lg sm:text-xl"
              >
                Full Name
              </label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="border border-gray-400 rounded px-3 py-2 w-full text-lg sm:text-xl font-semibold"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="lastName"
                className="mb-0.5 font-bold text-lg sm:text-xl"
              >
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="border border-gray-400 rounded px-3 py-2 w-full text-lg sm:text-xl font-semibold"
              />
            </div>
          </div>

          {/* Zip & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label
                htmlFor="zip"
                className="mb-0.5 font-bold text-lg sm:text-xl"
              >
                Zip Code
              </label>
              <input
                id="zip"
                type="text"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                className="border border-gray-400 rounded px-3 py-2 w-full text-lg sm:text-xl font-semibold"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="phone"
                className="mb-0.5 font-bold text-lg sm:text-xl"
              >
                Phone number
              </label>
              <input
                id="phone"
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="border border-gray-400 rounded px-3 py-2 w-full text-lg sm:text-xl font-semibold"
              />
            </div>
          </div>

          {/* School & Order Number */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label
                htmlFor="school"
                className="mb-0.5 font-bold text-lg sm:text-xl"
              >
                School / Organization
              </label>
              <input
                id="school"
                type="text"
                name="school"
                value={formData.school}
                onChange={handleChange}
                className="border border-gray-400 rounded px-3 py-2 w-full text-lg sm:text-xl font-semibold"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="orderNumber"
                className="mb-0.5 font-bold text-lg sm:text-xl"
              >
                Order Number (if any)
              </label>
              <input
                id="orderNumber"
                type="text"
                name="orderNumber"
                value={formData.orderNumber}
                onChange={handleChange}
                className="border border-gray-400 rounded px-3 py-2 w-full text-lg sm:text-xl font-semibold"
              />
            </div>
          </div>

          {/* Sales Rep */}
          <div className="flex flex-col">
            <label
              htmlFor="salesRep"
              className="mb-0.5 font-bold text-lg sm:text-xl"
            >
              Current sales rep (if any)
            </label>
            <input
              id="salesRep"
              type="text"
              name="salesRep"
              value={formData.salesRep}
              onChange={handleChange}
              className="border border-gray-400 rounded px-3 py-2 w-full text-lg sm:text-xl font-semibold"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="mb-0.5 font-bold text-lg sm:text-xl"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-400 rounded px-3 py-2 w-full text-lg sm:text-xl font-semibold"
            />
          </div>

          {/* Address */}
          <div className="flex flex-col">
            <label
              htmlFor="address"
              className="mb-0.5 font-bold text-lg sm:text-xl"
            >
              Address
            </label>
            <input
              id="address"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="border border-gray-400 rounded px-3 py-2 w-full text-lg sm:text-xl font-semibold"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label
              htmlFor="message"
              className="mb-0.5 font-bold text-lg sm:text-xl"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="border border-gray-400 rounded px-3 py-2 w-full text-lg sm:text-xl font-semibold"
            ></textarea>
          </div>

          {/* Submit */}
          <div className=" flex items-center justify-center">
          <button
            type="submit"
            className="bg-lime-400 cursor-pointer text-black px-6 py-2 text-base sm:text-lg font-bold rounded hover:bg-lime-500 transition w-full sm:w-1/3"
          >
            SUBMIT
          </button>
          </div>
        </form>

        {/* Contact Info */}
        <div className="flex flex-col gap-8 text-lg sm:text-2xl font-bold">
          <div>
            <h3 className="font-extrabold text-2xl sm:text-3xl mb-2">
              USA OFFICE
            </h3>
            <p className="font-semibold">📞 +1 234 567 890</p>
            <p className="font-semibold">✉️ usa-office@example.com</p>
            <p className="font-semibold">📍 123 Example St, Someplace, USA</p>
          </div>

          <div>
            <h3 className="font-extrabold text-2xl sm:text-3xl mb-2">
              UK OFFICE
            </h3>
            <p className="font-semibold">📞 +44 20 7946 0958</p>
            <p className="font-semibold">✉️ uk-office@example.com</p>
            <p className="font-semibold">📍 45 Queen’s Road, Exampletown, UK</p>
          </div>

          <div>
            <h3 className="font-extrabold text-2xl sm:text-3xl mb-2">
              OFFICE SCHEDULE
            </h3>
            <p className="font-semibold">Monday – Saturday: 10:00am – 6:00pm</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full mt-10 margin-top-20px">
        <Footer />
      </div>
    </div>
  );
}
