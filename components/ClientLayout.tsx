"use client";

import { useState } from "react";
import Topbar from "./Topbar";
import Header from "./Header";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Topbar hidden={isModalOpen} />
      {/* <Header isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} /> */}
      {children}
    </>
  );
}
