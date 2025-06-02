"use client";

import Image from "next/image";

const HighlightSection = () => {
  return (
    <div>
      {/* Top Background Section */}
      <div className="w-full py-[110px] bg-[url('/highlight-bg.jpg')] bg-contain bg-no-repeat bg-top">
        {/* Main Content (White Section) */}
        <div className="grid bg-transparent grid-cols-1 md:grid-cols-2 gap-[120px] pl-[100px] py-12">
          {/* Left Column */}
          <div className="space-y-10">
            {/* Popup Newsletter */}
            <div className="bg-gray-100  rounded-lg shadow overflow-hidden">
              <Image
                src="/search-img.jpg"
                alt="Popup Newsletter"
                width={800}
                height={400}
                className="w-full object-cover"
              />
            </div>
            <div>
              <p className="text-[22px] tracking-[1.5px] font-bold mb-2">
                Popup Newsletter
              </p>

              {/* Orange Underline with Right Side Fade */}
              <div className="h-[1px] w-[60px] bg-gradient-to-r from-orange-500 to-transparent mb-4" />

              <p className="text-[#999999] w-[70%] tracking-[0.5] font-bold text-sm">
                Your visitors would get the most relevant search results, and
                personalized product and query suggestions — from the first.
              </p>
            </div>

            {/* Baseball Glove Section */}
            <div className="rounded-xl mt-[80px] ml-[220px] overflow-hidden">
              <Image
                src="/product-img.jpg"
                alt="Ajax Cart"
                width={320}
                height={320}
                className="object-cover"
              />
            </div>

            <div className="ml-[220px]">
              <p className="text-[22px]  tracking-[1.5px] font-bold mb-2">
                Quick view attribute product variable
              </p>

              {/* Orange Underline with Right Side Fade */}
              <div className="h-[1px] w-[60px] bg-gradient-to-r from-orange-500 to-transparent mb-4" />

              <p className="text-[#999999] w-[90%] tracking-[0.5] font-bold text-sm">
                The goal of the Quickview feature is to minimize the numbers of
                clicks and help shoppers initiate their ordering more easily and
                efficiently.
              </p>
            </div>

            <div className="rounded-xl ml-[140px] overflow-hidden">
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
          <div className="space-y-10">
            {/* Ajax Cart & Wishlist */}
            <div className="rounded-xl mt-[280px] overflow-hidden">
              <Image
                src="/cart-img.jpg"
                alt="Ajax Cart"
                width={320}
                height={320}
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-[22px] tracking-[1.5px] font-bold mb-2">
                Ajax Cart & Wishlist{" "}
              </p>

              {/* Orange Underline with Right Side Fade */}
              <div className="h-[1px] w-[60px] bg-gradient-to-r from-orange-500 to-transparent mb-4" />

              <p className="text-[#999999] w-[70%] tracking-[0.5] font-bold text-sm">
                Ajaxifies support cart and wishlist similar with any shopping
                platform all over the world. Let your customers enjoy the
                awesome ajax buttons.
              </p>
            </div>

            <div className="bg-gray-100 rounded-lg shadow overflow-hidden">
              <Image
                src="/search-img.jpg"
                alt="Popup Newsletter"
                width={800}
                height={400}
                className="w-full object-cover"
              />
            </div>

            <div>
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
