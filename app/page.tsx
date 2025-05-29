import Header from "@/components/Header";
import Herosection from "@/components/Herosection";
import Topbar from "@/components/Topbar";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen">
      <div className="min-h-screen bg-[url('/banner-top.jpg')] bg-cover bg-no-repeat">
        <Header />
        <Herosection />
      </div>
    </div>
  );
};

export default Page;
