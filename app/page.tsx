import React from "react";
import Header from "@/components/Header";
import HelpContact from "@/components/HelpContact";
import Herosection from "@/components/Herosection";
import MenuCards from "@/components/MenuCards";

const Page = () => {
  return (
    <div className="min-h-screen">
      <div className="min-h-screen bg-[url('/banner-top.jpg')] bg-cover bg-no-repeat">
        <Header />
        <Herosection />
      </div>
      <HelpContact />
      <MenuCards />
    </div>
  );
};

export default Page;
