"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaStar } from "react-icons/fa";

interface Testimonial {
  name: string;
  message: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Alisha Wilson",
    message:
      "Since day 1 communication has been consistent and they have been very responsive! The turnaround time it takes them is mind-blowing! And the quality of the uniforms are too tier! This is our first year dealing with them and so far we will continue to do business with them for as long as they exist! If you’re...",
  },
  {
    name: "Coach Johnson",
    message:
      "Fast turnaround time, 7-10 days. With unmatchable quality. I will order from ProSix Every Time I need Uniforms. Best part about it, is the uniforms still look the same after several washes!",
  },
  {
    name: "Xavier Williams",
    message:
      "Great service fast shipping! I push for the order and I had my jerseys a week later. Don communicated with me throughout the whole process.",
  },
  {
    name: "Maria Lopez",
    message:
      "Absolutely love the uniforms! The material is durable, and the customer service was outstanding. They even followed up after delivery.",
  },
  {
    name: "James Robinson",
    message:
      "Our team has been using this company for 3 seasons now. Always reliable, fast, and top-notch designs. Highly recommended!",
  },
  {
    name: "Emily Stone",
    message:
      "This was my first time ordering team uniforms and they made the process so easy. The quality is better than I expected. Will be back!",
  },
  {
    name: "Daniel Kim",
    message:
      "Fast responses and clear communication. The uniforms arrived on time and looked exactly how we envisioned. Great job team!",
  },
  {
    name: "Sarah Patel",
    message:
      "Professional, fast, and consistent. Our school’s basketball team got their jerseys within a week, and they looked amazing.",
  },
  {
    name: "Michael Brown",
    message:
      "I was skeptical at first, but everything from order to delivery was seamless. Great quality and service!",
  },
  {
    name: "Lena George",
    message:
      "Our soccer team has never looked better. The custom design options were easy to use, and the shipping was quicker than expected!",
  },
];

const TestimonialSlider: React.FC = () => {
  return (
    <div className="bg-[#f8f8f8] py-10">
      <div className="max-w-7xl mx-auto px-4">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation
          //   modules={[Navigation]}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-md h-[230px] border border-gray-100 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                    <span className="font-semibold text-sm text-gray-800">
                      {testimonial.name}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700">{testimonial.message}</p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex text-yellow-400 space-x-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar key={i} size={16} />
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className=" text-center my-10">
        <h1 className=" text-xl">
          Football is a popular team sport played worldwide, where two teams
          compete to score goals by getting the ball into the opponent’s net. <br /> It
          is known for its excitement, teamwork, and global events like the FIFA
          World Cup.
        </h1>
      </div>
    </div>
  );
};

export default TestimonialSlider;
