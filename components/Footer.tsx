"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const mainCategories = [
  { name: "Team Wear", href: "/team-wear" },
  { name: "Clothing & Apparel", href: "/clothing-apparel" },
  { name: "Accessories", href: "/products-accessories" },
  { name: "Fan-Store", href: "/fan-store" },
  { name: "Fitness Wear", href: "/team-wear" },
  // Add more as needed based on your folders
];

const quickLinks = [
  { name: "About us", href: "/about" },
  { name: "Size Reference", href: "/support/size-reference" },
  { name: "Manufacturing process", href: "/support/manufacturing-process" },
  { name: "Fabric", href: "/support/fabric" },
  { name: "Accessories", href: "/products-accessories" },
  { name: "Resource", href: "/support/resource" },
  { name: "Contact us", href: "/contact" },
];

const contactInfo = [
  {
    title: "USA OFFICE",
    phone: "+1 (929) 210 4402",
    email: "sales@prosix.com",
    address: "19 Holly Cove Ln, Dover Delaware 19901",
  },
  {
    title: "UK OFFICE",
    phone: "+44 (77) 193-55678",
    email: "uk@prosix.com",
    address: "Flat 19| 4 Mann Island, Liverpool, Merseyside, United Kingdom.",
  },
];

export default function Footer() {
  useEffect(() => {
    // ...your scroll animation code if needed...
  }, []);

  return (
    <footer className="w-full bg-black text-white pt-12 pb-6 px-4 md:px-16">
      <div className="flex flex-col items-center mb-8">
        <Link href="/" aria-label="Go to homepage">
          <Image
            src="/PROSIX-LOGO.png"
            width={180}
            height={180}
            alt="logo"
            className="invert transition-all duration-500 ease-in-out cursor-pointer"
          />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700 pb-8">
        {/* Main Categories */}
        <div>
          <h3 className="font-bold text-lg mb-4">MAIN CATEGORIES</h3>
          <ul className="space-y-2">
            {mainCategories.map((cat) => (
              <li key={cat.name}>
                <Link href={cat.href} className="hover:underline">
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">QUICK LINKS</h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:underline">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Contact Info */}
        <div>
          <h3 className="font-bold text-lg mb-4">CONTACT US</h3>
          {contactInfo.map((info) => (
            <div key={info.title} className="mb-4">
              <div className="font-semibold">{info.title}</div>
              <div className="text-sm">📞 {info.phone}</div>
              <div className="text-sm">✉️ {info.email}</div>
              <div className="text-sm">📍 {info.address}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Certificates, Payment, Newsletter */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 mt-8">
        <div className="flex flex-col items-center">
          <div className="font-bold mb-2">Our Certificates</div>
          <div className="flex gap-2">
            {/* Replace with your certificate images if available */}
            <Image src="/iso.png" alt="ISO" width={40} height={40} />
            <Image src="/ce.png" alt="CE" width={40} height={40} />
            {/* ... */}
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="font-bold mb-2">Payment Method</div>
          <div className="flex gap-2">
            {/* Replace with your payment method images if available */}
            <Image src="/visa.svg" alt="Visa" width={40} height={24} />
            <Image src="/mastercard.svg" alt="Mastercard" width={40} height={24} />
            <Image src="/paypal.svg" alt="Paypal" width={40} height={24} />
            {/* ... */}
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="font-bold mb-2">Newsletter</div>
          <form className="flex flex-col md:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-1 rounded text-black"
            />
            <button
              type="submit"
              className="bg-red-600 px-4 py-1 rounded text-white font-semibold hover:bg-red-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      {/* Social Icons */}
      <div className="flex justify-center gap-4 mt-8">
        <a href="https://www.facebook.com/prosixsports" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f text-2xl"></i>
        </a>
        <a href="https://www.instagram.com/prosixsports/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram text-2xl"></i>
        </a>
        <a href="https://www.youtube.com/prosixsports" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-youtube text-2xl"></i>
        </a>
        <a href="https://x.com/prosixsports/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter text-2xl"></i>
        </a>
        <a href="https://www.pinterest.com/prosixsports/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-pinterest text-2xl"></i>
        </a>
      </div>
      <div className="text-center text-xs text-gray-400 mt-6">
        Copyright © 2009 - 2024, All rights reserved by{" "}
        <a href="/" className="text-blue-400 hover:underline">
          Prosix Sports
        </a>
        .
      </div>
    </footer>
  );
}