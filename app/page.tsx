import React from "react";
import Header from "@/components/Header";
import HelpContact from "@/components/HelpContact";
import Herosection from "@/components/Herosection";
import MenuCards from "@/components/MenuCards";
import HighlightSection from "@/components/HighlighSection";
import RelatedProducts from "@/components/RelatedProducts";
import CoreFeatures from "@/components/CoreFeatures";
import ActionSection from "@/components/ActionSection";
import Footer from "@/components/Footer";

const Page = () => {
  return (
    <div className="min-h-screen">
      <div className="min-h-screen bg-[url('/banner-top.jpg')] bg-cover bg-no-repeat">
        <Header />
        <Herosection />
      </div>
      <HelpContact />
      <MenuCards />
      <HighlightSection />
      <RelatedProducts />
      <CoreFeatures />
      <ActionSection />
      <Footer />
    </div>
  );
};

export default Page;
