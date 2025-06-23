"use client";
import Footer from "@/components/Footer";
import Image from "next/image";
import React, { useEffect } from "react";

const page = () => {
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
    <div>
      <div className="max-w-6xl mx-auto px-4 py-[180px] text-center">
        <p className="text-[38px] font-bold mb-6 uppercase scroll-animate-down">
          About Us
        </p>

        <p className="text-[17px] text-start text-gray-700 mb-6 scroll-animate-left">
          <strong>Phenix Sports</strong> is powered by Dreams, Champions &
          Apparel.
        </p>

        <p className="text-[18px] text-gray-600 mb-6 leading-relaxed text-justify scroll-animate-left">
          Established in 2019, Phenix Sports operates with a mission of
          innovation and excellence in the creation of custom athletic uniforms
          and fan clothing apparel. Our journey began when devoted club teams
          discovered the combination provided by great quality, creative
          designs, and consistent service. Phenix established a name in the
          local markets of St. Louis, Missouri, and grew quickly to nationwide
          success through word-of-mouth and digital presence. We remain
          committed to providing a professional custom experience through every
          stage of the process. Our leadership and team consist of past and
          present athletes, coaches, designers, and manufacturers. We understand
          the demands teams face and we aim to be the solution. Our customer
          service department provides hands-on support for customers from start
          to finish. Our clients value the fast turn-around times, fair prices,
          and pro-style uniform design.
        </p>

        <p className="text-[18px] text-gray-600 mb-6 leading-relaxed text-justify scroll-animate-left">
          From the beginning, our mission has always included giving back to the
          youth and communities that inspire us daily. Phenix Sports has proudly
          supported youth football programs, tournaments, schools, and
          non-profits through fundraising, equipment donation, and custom
          uniforms. The importance of youth athletics and development are core
          to our brand. Phenix Sports was created with the spirit of overcoming
          adversity and fighting through struggle. We are dedicated to serving
          our community with excellence and lifting up others along the way. We
          aim to bring you high-end service, affordable pricing, quality
          products, and professional designs.
        </p>

        <p className="text-[18px] text-gray-600 mb-6 leading-relaxed text-justify scroll-animate-left">
          Whether you are outfitting an entire organization or purchasing a fan
          jersey for a loved one, we are here to help you find something that
          inspires you. At <strong>Phenix Sports</strong>, we remain focused on
          our customers and our company purpose: to grow and develop communities
          through innovation & excellence — one victory at a time.
        </p>

        {/* 2 Column Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
          <div className="relative h-[240px] md:h-[380px] scroll-animate-left">
            <Image
              src="/abt-img.jpg"
              alt="Giving Back"
              fill
              className="rounded-md object-cover"
            />
            <div className="absolute bottom-0 left-0 bg-black/40 bg-opacity-60 text-white p-4 w-full text-left">
              <h4 className="text-[22px] font-bold uppercase mb-1">
                Giving Back
              </h4>
              <p className="text-[18px]">
                PHENIX Sports is determined to building positive relationships
                with citizens, good character through giving back to the
                community.
              </p>
            </div>
          </div>

          <div className="relative h-[240px] md:h-[380px] scroll-animate-right">
            <Image
              src="/abt-img01.jpg"
              alt="The Phenix Story"
              fill
              className="rounded-md object-cover "
            />
            <div className="absolute bottom-0 left-0 bg-black/40 bg-opacity-60 text-white p-4 w-full text-left">
              <h4 className="text-[22px] font-bold uppercase mb-1">
                The Phenix Story
              </h4>
              <p className="text-[18px]">
                Success isn’t always about greatness; it’s about consistency.
                Consistent, hard work gains success. Greatness will come.
              </p>
            </div>
          </div>
        </div>

        {/* Company Image Section */}
        <div className="text-left mb-4">
          <h4 className="text-[17px] font-bold mb-2 uppercase scroll-animate-left">
            Company Profile
          </h4>
          <p className="text-[18px] text-gray-600 mb-4 scroll-animate-left">
            Here at Phenix we pride our work ethic, giving excellent service,
            creating value, and a product that is elite in the athletic world.
            It’s exactly what keeps us in business.
          </p>
          <Image
            src="/abt-image-min-1.jpg"
            alt="Team Group"
            width={900}
            height={500}
            className="rounded-md w-full h-auto scroll-animate-up"
          />
        </div>

        <div className="text-left mt-4 scroll-animate-up">
          <h4 className="text-[17px] font-bold mb-2 uppercase">
            Phenix Ethicacy
          </h4>
          <p className="text-[18px] text-gray-600">
            To give athletes and teams what they want. Phenix promises
            world-class service at unmatched value with the fastest uniform
            innovation.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
