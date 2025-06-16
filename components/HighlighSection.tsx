"use client";
import Image from "next/image";
import { useEffect } from "react";

const HighlightSection = () => {
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
      {/* Top Background Section */}
      <div className="w-full py-[60px] md:py-[110px] bg-[url('/highlight-bg.jpg')] bg-contain bg-no-repeat bg-top">
        {/* Main Content */}
        <div className="grid  grid-cols-1 md:grid-cols-2 gap-12 md:gap-[120px] px-4 md:pl-[100px] py-12">
          {/* Left Column */}
          <div className="space-y-10 scroll-animate-left">
            {/* Popup Newsletter */}
            <div className="bg-gray-100 rounded-lg shadow overflow-hidden">
              <Image
                src="/search-img.jpg"
                alt="Popup Newsletter"
                width={800}
                height={400}
                className="w-full object-cover scroll-animate-left"
                style={{ "--animation-order": 1 } as React.CSSProperties}
              />
            </div>

            <div
              style={{ "--animation-order": 2 } as React.CSSProperties}
              className="text-center md:text-left scroll-animate-left"
            >
              <p className="text-[22px] tracking-[1.5px] font-bold mb-2">
                Popup Newsletter
              </p>
              <div className="h-[1px] w-[60px] mx-auto md:mx-0 bg-gradient-to-r from-orange-500 to-transparent mb-4" />
              <p className="text-[#999999] mx-auto md:mx-0 md:w-[70%] tracking-[0.5px] font-bold text-sm">
                Your visitors would get the most relevant search results, and
                personalized product and query suggestions — from the first.
              </p>
            </div>

            {/* Baseball Glove Image */}
            <div
              style={{ "--animation-order": 3 } as React.CSSProperties}
              className="rounded-xl scroll-animate-left mt-[40px] md:mt-[80px] mx-auto md:ml-[220px] overflow-hidden w-fit"
            >
              <Image
                src="/product-img.jpg"
                alt="Ajax Cart"
                width={320}
                height={320}
                className="object-cover"
              />
            </div>

            <div
              style={{ "--animation-order": 4 } as React.CSSProperties}
              className="text-center scroll-animate-left md:text-left mx-auto md:ml-[220px]"
            >
              <p className="text-[22px] tracking-[1.5px] font-bold mb-2">
                Quick view attribute product variable
              </p>
              <div className="h-[1px] w-[60px] mx-auto md:mx-0 bg-gradient-to-r from-orange-500 to-transparent mb-4" />
              <p className="text-[#999999] md:w-[90%] mx-auto tracking-[0.5px] font-bold text-sm">
                The goal of the Quickview feature is to minimize the number of
                clicks and help shoppers initiate their ordering more easily and
                efficiently.
              </p>
            </div>

            <div
              style={{ "--animation-order": 5 } as React.CSSProperties}
              className="rounded-xl scroll-animate-left mx-auto md:ml-[140px] overflow-hidden w-fit"
            >
              <Image
                src="/shoe.png"
                alt="Ajax Cart"
                width={410}
                height={410}
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-10 scroll-animate-left">
            <div
              style={{ "--animation-order": 0 } as React.CSSProperties}
              className="rounded-xl scroll-animate-left mt-[40px] md:mt-[280px] mx-auto overflow-hidden w-fit"
            >
              <Image
                src="/cart-img.jpg"
                alt="Ajax Cart"
                width={320}
                height={320}
                className="object-cover"
              />
            </div>

            <div
              style={{ "--animation-order": 1 } as React.CSSProperties}
              className="scroll-animate-left"
            >
              <p className="text-[22px] tracking-[1.5px] font-bold mb-2">
                Ajax Cart & Wishlist
              </p>

              <div className="h-[1px] w-[60px] bg-gradient-to-r from-orange-500 to-transparent mb-4" />

              <p className="text-[#999999] w-[70%] tracking-[0.5] font-bold text-sm">
                Ajaxifies support cart and wishlist similar with any shopping
                platform all over the world. Let your customers enjoy the
                awesome ajax buttons.
              </p>
            </div>

            <div
              style={{ "--animation-order": 2 } as React.CSSProperties}
              className="bg-gray-100 scroll-animate-left rounded-lg shadow overflow-hidden"
            >
              <Image
                src="/search-img.jpg"
                alt="Popup Newsletter"
                width={800}
                height={400}
                className="w-full object-cover"
              />
            </div>

            <div
              style={{ "--animation-order": 3 } as React.CSSProperties}
              className="scroll-animate-left"
            >
              <p className="text-[22px] tracking-[1.5px] font-bold mb-2">
                Horizontal & Vertical Megamenu
              </p>

              {/* Orange Underline with Right Side Fade */}
              <div className="h-[1px] w-[60px] bg-gradient-to-r from-orange-500 to-transparent mb-4" />

              <p className="text-[#999999] w-[70%] tracking-[0.5] font-bold text-sm">
                Your build-in mega menu is the perfect choice for large menus.
                You can setup columns and rows, use icons and display product in
                mega menu easily.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighlightSection;
