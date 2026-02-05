import { Footer } from "@/components/shared/Footer/_components/Footer";
import Header from "@/components/shared/Header";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <Header />
      {children}
      <Footer/>
    </div>
  );
}
