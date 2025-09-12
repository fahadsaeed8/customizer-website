"use client";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    lastName: "",
    zip: "",
    phone: "",
    school: "",
    orderNumber: "",
    salesRep: "",
    email: "",
    address: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle form submission
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Map */}
      <div className="w-full bg-gray-100 border-b border-gray-300" style={{ marginTop: "165px", height: "350px" }}>
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
      <div className="w-full max-w-3xl mx-auto px-4 py-10 flex-1">
        <h2 className="text-2xl font-bold mb-2">CONTACT US</h2>
        <p className="text-sm text-gray-600 mb-6">
          Thank you for taking the time to reach out to us. We’ve given the following information to your area Rep and they will reach out to you soon to answer any questions you might have.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="border p-2 w-full"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="zip"
              placeholder="Zip Code"
              value={formData.zip}
              onChange={handleChange}
              className="border p-2 w-full"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="school"
              placeholder="School / Organization"
              value={formData.school}
              onChange={handleChange}
              className="border p-2 w-full"
            />
            <input
              type="text"
              name="orderNumber"
              placeholder="Order Number (if any)"
              value={formData.orderNumber}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>
          <input
            type="text"
            name="salesRep"
            placeholder="Current sales rep (if any)"
            value={formData.salesRep}
            onChange={handleChange}
            className="border p-2 w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 w-full"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="border p-2 w-full"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="border p-2 w-full"
          ></textarea>
          <button
            type="submit"
            className="bg-lime-400 text-black py-2 font-semibold hover:bg-lime-500 transition"
          >
            SUBMIT
          </button>
        </form>

        {/* Contact Info Below Form */}
        <div className="flex flex-col gap-6 text-sm mt-10">
          <div>
            <h3 className="font-bold text-lg mb-2">USA OFFICE</h3>
            <p>📞 +1 (929) 210 4402</p>
            <p>✉️ sales@prosix.com</p>
            <p>📍 19 Holly Cove Ln, Dover Delaware 19901</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">UK OFFICE</h3>
            <p>📞 +44 (77) 193-55678</p>
            <p>✉️ uk@prosix.com</p>
            <p>📍 Flat 19| 4 Mann Island, Liverpool, Merseyside, United Kingdom.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">OFFICE SCHEDULE</h3>
            <p>Monday – Saturday: 9:00 am – 8:00 pm</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}