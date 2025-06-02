import React from "react";
import Header from "@/components/Header";
import HelpContact from "@/components/HelpContact";
import Herosection from "@/components/Herosection";
import MenuCards from "@/components/MenuCards";
import HighlightSection from "@/components/HighlighSection";
import RelatedProducts from "@/components/RelatedProducts";

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
      <div className="pt-[250px] bg-[#f8f8f8]"></div>
    </div>
  );
};

export default Page;
