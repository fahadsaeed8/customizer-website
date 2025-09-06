"use client";
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
    <div className="relative min-h-screen flex flex-col pt-[165px] pb-10 items-center justify-center px-4">
      {/* Map */}
      <div className="w-full h-[350px]">
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
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 px-4 md:px-0">
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="md:col-span-2 flex flex-col gap-3"
        >
          <h2 className="text-lg font-semibold">CONTACT US</h2>
          <p className="text-sm text-gray-600">
            If you’d like to get in touch, please fill out the form below...
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input
              type="text"
              name="firstName"
              placeholder="Full name"
              value={formData.firstName}
              onChange={handleChange}
              className="border p-2 w-full"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input
              type="text"
              name="system"
              placeholder="System"
              value={formData.system}
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
              name="members"
              placeholder="Number of members"
              value={formData.members}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>

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

        {/* Contact Info */}
        <div className="flex flex-col gap-6 text-sm">
          <div>
            <h3 className="font-bold">USA OFFICE</h3>
            <p>📞 +1 234 567 890</p>
            <p>✉️ usa-office@example.com</p>
            <p>📍 123 Example St, Someplace, USA</p>
          </div>

          <div>
            <h3 className="font-bold">UK OFFICE</h3>
            <p>📞 +44 20 7946 0958</p>
            <p>✉️ uk-office@example.com</p>
            <p>📍 45 Queen’s Road, Exampletown, UK</p>
          </div>

          <div>
            <h3 className="font-bold">OFFICE SCHEDULE</h3>
            <p>Monday – Saturday: 10:00am – 6:00pm</p>
          </div>
        </div>
      </div>
    </div>
  );
}
