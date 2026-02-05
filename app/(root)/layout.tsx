<<<<<<< HEAD
import { Footer } from "@/components/shared/Footer/_components/Footer";
=======
>>>>>>> 5a17f9262e4aea0c4336617aa3ee644691db08ce
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
<<<<<<< HEAD
      <Footer/>
=======
>>>>>>> 5a17f9262e4aea0c4336617aa3ee644691db08ce
    </div>
  );
}
