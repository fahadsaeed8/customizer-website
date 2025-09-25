"use client";
import React from "react";
import HelpContact from "@/components/HelpContact";
import Herosection from "@/components/Herosection";
import MenuCards from "@/components/MenuCards";
import HighlightSection from "@/components/HighlighSection";
import RelatedProducts from "@/components/RelatedProducts";
import CoreFeatures from "@/components/CoreFeatures";
import ActionSection from "@/components/ActionSection";
import Footer from "@/components/Footer";
import ShopSection from "@/components/common/ShopSection";
import ImageSlider from "@/components/ImageSlider";

const Page = () => {
  return (
    <div className="min-h-screen">
      {/* <div className="min-h-screen h-[140vh] lg:h-screen bg-[url('/banner-top.jpg')] lg:bg-cover bg-no-repeat">
      </div> */}
        <Herosection />
      <HelpContact />
      <MenuCards />
      <ShopSection/>
      <HighlightSection />
      <RelatedProducts />
      <CoreFeatures />
      <ImageSlider/>
      <ActionSection />
      <Footer />
    </div>
  );
};

export default Page;
