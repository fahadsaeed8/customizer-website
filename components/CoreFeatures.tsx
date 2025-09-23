"use client";
import Image from "next/image";
import React, { useEffect } from "react";

const features = [
  { title: "Responsive Design", icon: "/responsive-icon.jpg" },
  { title: "1 Click Import All Demos", icon: "/responsive-icon.jpg" },
  { title: "SEO Optimized", icon: "/responsive-icon.jpg" },
  { title: "Live Search", icon: "/responsive-icon.jpg" },
  { title: "Mega Menu", icon: "/responsive-icon.jpg" },
  { title: "Multi Currency Supported", icon: "/responsive-icon.jpg" },
  { title: "Color Attributes Swatches", icon: "/responsive-icon.jpg" },
  { title: "Validate HTML5 Code", icon: "/responsive-icon.jpg" },
  { title: "Animations", icon: "/responsive-icon.jpg" },
  { title: "Featured Product", icon: "/responsive-icon.jpg" },
  { title: "Social Sharing Features", icon: "/responsive-icon.jpg" },
  { title: "Cross Browser Compatibility", icon: "/responsive-icon.jpg" },
  {
    title: "Typography & Font Library Used",
    icon: "/responsive-icon.jpg",
  },
  { title: "Sticky Add to Cart", icon: "/responsive-icon.jpg" },
  { title: "Friendly Admin Panel", icon: "/responsive-icon.jpg" },
  { title: "Live Chat & Contact Form", icon: "/responsive-icon.jpg" },
  { title: "Blog Module", icon: "/responsive-icon.jpg" },
  { title: "Coming Soon Mode", icon: "/responsive-icon.jpg" },
  { title: "Color & Layout Switcher", icon: "/responsive-icon.jpg" },
  { title: "Bootstrap 5.x", icon: "/responsive-icon.jpg" },
  { title: "Speed Optimized", icon: "/responsive-icon.jpg" },
  { title: "Documentation", icon: "/responsive-icon.jpg" },
  { title: "Free Support & Updates", icon: "/responsive-icon.jpg" },
  { title: "Free Support & Updates", icon: "/responsive-icon.jpg" },
];

const CoreFeatures = () => {
  useEffect(() => {
    const animateElements = document.querySelectorAll(
      ".scroll-animate-up, .scroll-animate-down, .scroll-animate-left, .scroll-animate-right"
    );

    function checkInView() {
      animateElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isInView =
          rect.top <=
            (window.innerHeight || document.documentElement.clientHeight) *
              0.75 && rect.bottom >= 0;

        if (isInView) {
          el.classList.add("in-view");
        } else {
          el.classList.remove("in-view");
        }
      });
    }

    checkInView();

    let ticking = false;
    window.addEventListener("scroll", () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          checkInView();
          ticking = false;
        });
        ticking = true;
      }
    });
    return () => {
      window.removeEventListener("scroll", checkInView);
    };
  }, []);
  return (
    <div className="py-16 px-4 md:px-10 pt-[250px] bg-[#f8f8f8] mx-auto text-center">
      <div className="flex scroll-animate-up flex-col items-center text-center px-4">
        <p className="text-[24px] tracking-[1.5px] font-bold mb-2">
          Core Features{" "}
        </p>

        <p className="text-[#999999] w-[50%] tracking-[0.5px] font-bold text-sm">
          Jogwire comes with a lot of features, we have so many of them it would
          take you too much time to read about our features! We decided to make
          a quick list of the main features, check the pages to see the features
          in action.
        </p>
        <div className="h-[1px] w-[60px] bg-gradient-to-r from-orange-500 to-transparent mt-4 mb-15" />
      </div>

      <div className="grid px-15 grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 justify-items-center gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col w-[80%] h-[60%]  items-center cursor-pointer text-center hover:bg-gray-50 transition "
          >
            <Image
              src={feature.icon}
              alt={feature.title}
              width={150}
              height={150}
              className="mb-3 rounded-sm"
            />
            <p className="text-sm font-medium tracking-[0.5] text-[#999999]">
              {feature.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreFeatures;
