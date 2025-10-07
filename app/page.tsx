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
import BrandSection from "@/components/Brands";
import TestimonialSlider from "@/components/CardSlider";
import SlideReel from "@/components/SlideReel";

const Page = () => {
  return (
    <div className="min-h-screen">
      <Herosection />
      <HelpContact />
      <SlideReel />
      <MenuCards />
      <ShopSection />
      <HighlightSection />
      {/* <RelatedProducts /> */}
      <ImageSlider />
      {/* <CoreFeatures /> */}
      <TestimonialSlider />
      <BrandSection />
      <ActionSection />
      <Footer />
    </div>
  );
};

export default Page;
