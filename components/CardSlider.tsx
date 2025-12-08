"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { FaStar } from "react-icons/fa";
import { Navigation, Autoplay } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import { getTestimonialsAPI } from "@/services/api";
import Link from "next/link";

interface Testimonial {
  id?: number;
  customer_name: string;
  text: string;
}

const TestimonialSlider: React.FC = () => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["testimonials"],
    queryFn: getTestimonialsAPI,
  });

  const testimonials: Testimonial[] = data?.response?.data?.results || [];

  console.log("testimonials", testimonials);

  if (isLoading) {
    return (
      <div className="bg-[#f8f8f8] py-10">
        <div className="max-w-7xl mx-auto px-2 md:px-4">
          <div className="flex justify-center items-center h-64">
            <div className="text-xl">Loading testimonials...</div>
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="bg-[#f8f8f8] py-10">
        <div className="max-w-7xl mx-auto px-2 md:px-4">
          <div className="flex flex-col justify-center items-center h-64">
            <div className="text-xl text-red-500">
              Failed to load testimonials
            </div>
            <button
              onClick={() => refetch()}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!testimonials || testimonials.length === 0) {
    return (
      <div className="bg-[#f8f8f8] py-10">
        <div className="max-w-7xl mx-auto px-2 md:px-4">
          <div className="flex justify-center items-center h-64">
            <div className="text-xl">No testimonials available</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="bg-[#f8f8f8] py-10 ">
        <div className="max-w-7xl mx-auto px-2 md:px-4">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay]}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={testimonial.id || index}>
                <div className="bg-white rounded-md min-h-[250px] p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <div>
                        <img
                          src={testimonial.image || "/LandingPageMainImage.jpg"}
                          className="w-10 h-10 rounded-full object-cover object-top"
                          alt={testimonial?.customer_name}
                        />
                      </div>
                      <span className="font-semibold text-xl text-gray-800">
                        {testimonial?.customer_name}
                      </span>
                    </div>
                    <p className="text-base text-gray-700">
                      {testimonial?.text}
                    </p>
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

        <div className="w-full flex justify-center items-center">
          <Link
            href={
              "https://www.google.com/search?sca_esv=3427d31d1497226b&sxsrf=AE3TifPH04i3UL7zOvvGP-OrTb548pC-nw:1764919853206&q=Prosix+Sports&si=AMgyJEtkdv0bUy3jSIkW9mWntMhFklqBoU8Pv9aKe-yCHl3vFsWZVne1Cl_PjYdiYGp3CM218iHcWF4YG38hwojZs_qay6voCbQUEjpcsdaX_rmmyIzlntz6Hx3bZuEht_6XnS4yGAmYxyUp6JC4-TPwqtMeo4-ERoU5GQKCy9E168oCP-gdIplSiMJG228miS_gDtwdX6ZeSMSP3RTLGnFS5yGtLddfoQ%3D%3D&sa=X&sqi=2&ved=2ahUKEwi6-aDn9qWRAxVGRKQEHTCyEr0Q6RN6BAgXEAE&biw=1536&bih=703&dpr=1.25"
            }
            target="_blank"
            className="my-3 bg-blue-600 px-3 py-2 text-white rounded-md text-lg font-semibold cursor-pointer shadow-lg hover:bg-blue-700"
          >
            View All Testimonials
          </Link>
        </div>

        <div className="text-center my-10">
          <h1 className="text-xl">
            Football is a popular team sport played worldwide, where two teams
            compete to score goals by getting the ball into the opponent's net.{" "}
            <br /> It is known for its excitement, teamwork, and global events
            like the FIFA World Cup.
          </h1>
        </div>
      </div>
    </>
  );
};

export default TestimonialSlider;
