"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const faqs = [
  {
    question: "How do I place a custom order?",
    answer:
      "You can place a custom order by visiting our Products section, selecting your desired item, and using the customization options. For bulk or special requests, please contact our support team.",
  },
  {
    question: "What is the turnaround time for orders?",
    answer:
      "Our standard turnaround time is 2-3 weeks after order confirmation. Rush options may be available—please contact us for details.",
  },
  {
    question: "Can I request a sample before ordering in bulk?",
    answer:
      "Yes, we offer samples for most products. Please reach out to our support team to request a sample.",
  },
  {
    question: "How do I track my order?",
    answer:
      "Once your order is shipped, you will receive a tracking number via email. You can also check your order status in your account dashboard.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We accept returns for defective or incorrect items. Please review our full return policy on the website or contact support for assistance.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Adjust this value to match your header height
  const HEADER_HEIGHT = 120;

  return (
    <div className="flex flex-col min-h-screen bg-white" style={{ marginTop: `${HEADER_HEIGHT}px` }}>
      <Header isModalOpen={false} setIsModalOpen={() => {}} />

      {/* Main Heading */}
      <div className="text-center mt-12 mb-8">
        <h1 className="text-4xl font-bold tracking-wide">Frequently Asked Questions</h1>
        <p className="text-gray-600 mt-2 font-bold text-3xl">Find answers to common questions below.</p>
      </div>

      {/* FAQ Accordion */}
      <div className="flex-1 flex flex-col items-center w-full">
        <div className="w-full max-w-6xl px-4 md:px-12 space-y-4 mb-12">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="w-full border-2 border-black rounded-lg bg-white shadow transition"
            >
              <button
                className="w-full text-left px-6 py-4 font-semibold text-2xl flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                aria-expanded={openIndex === idx}
              >
                {faq.question}
                <span className="ml-4 text-2xl">{openIndex === idx ? "−" : "+"}</span>
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-4 text-gray-800 font-xl font-semibold animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}