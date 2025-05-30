import Header from "@/components/Header";
import HelpContact from "@/components/HelpContact";
import Herosection from "@/components/Herosection";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen">
      <div className="min-h-screen bg-[url('/banner-top.jpg')] bg-cover bg-no-repeat">
        <Header />
        <Herosection />
      </div>
      <HelpContact />
    </div>
  );
};

export default Page;
