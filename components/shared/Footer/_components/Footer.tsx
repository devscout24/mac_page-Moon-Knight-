"use client";

import { Button } from "@/components/ui/button";
import { Mail, Instagram, Facebook, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { CgArrowLongRight } from "react-icons/cg";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };
  return (
    <footer className="bg-black border-l-4 border-blue-500 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-[120px]">
        <div className="flex-1 sm:flex justify-between  ">
          {/* Logo Section */}
          <div className="flex flex-col justify-start w-[323px]">
            <h4 className="text-[38px] font-bold leading-[38px] mb-2">
              Warm <span className="text-[#F97316]">Welcome</span>
            </h4>
            <p className="text-[#B3C0B4] text-lg leading-[18px]">
              Trusted Mid-Term Room Rentals in Ireland
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-[26px] font-semibold mb-[30px] leading-[26px] text-[#FBFBFB]">
              Quick Links
            </h3>
            <nav className="space-y-5 flex flex-col text-lg font-normal leading-[18px]">
              <a
                href="#"
                className="text-[#DBDBDB] hover:text-[#F97316] transition-colors"
              >
                Browse
              </a>
              <a
                href="#"
                className="text-[#DBDBDB] hover:text-[#F97316] transition-colors"
              >
                List Room
              </a>
              <a
                href="#"
                className="text-[#DBDBDB] hover:text-[#F97316] transition-colors"
              >
                Our Story
              </a>
              <a
                href="#"
                className="text-[#DBDBDB] hover:text-[#F97316] transition-colors"
              >
                Host Blog
              </a>
              <a
                href="#"
                className="text-[#DBDBDB] hover:text-[#F97316] transition-colors"
              >
                Guest Blog
              </a>
            </nav>
          </div>

          {/* Connect Section */}
          <div className="flex flex-col">
            <h3 className="text-[26px] font-semibold mb-[30px] text-[#FBFBFB] leading-[26px]">
              Connect
            </h3>
            <div className="space-y-4 flex flex-col text-lg font-normal leading-[18px]">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#DBDBDB] hover:text-[#F97316] transition-colors"
              >
                <div className="bg-[#F97316] p-2 rounded-full">
                  <Instagram size={16} className="text-[#FBFBFB]" />
                </div>
                <span>Instagram</span>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#DBDBDB] hover:[#F97316] transition-colors"
              >
                <div className="bg-[#F97316] p-2 rounded-full">
                  <Facebook size={16} className="text-[#FBFBFB]" />
                </div>
                <span>Facebook</span>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#FBFBFB] hover:text-orange-500 transition-colors"
              >
                <div className="bg-orange-500 p-2 rounded-full">
                  <X size={16} className="text-[#FBFBFB]" />
                </div>
                <span>X</span>
              </a>
            </div>
          </div>

          {/* Stay Updated Newsletter */}
          <div className="flex flex-col">
            <h3 className="text-[26px] font-semibold mb-6 leading-[26px] text-white">
              Stay Updated
            </h3>
            <p className="text-[#DBDBDB] text-[18px] leading-[18px] mb-[30px]">
              Get the latest news and special offers
            </p>
            <form
              className="relative w-full "
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email"
                className="
      w-full
      px-4 w-[330px] h-[50px] pr-12
      rounded-4xl
      bg-[#3C3C3C]
      text-[#FBFBFB]
      placeholder-gray-500
      focus:outline-none
      focus:ring-2
      focus:ring-orange-500
    "
              />

              <Button
                type="submit"
                className="
      group
      absolute
      right-2
      top-1/2
      -translate-y-1/2
      w-[52px]
      h-[38px]
      rounded-4xl
      bg-[#F97316] hover:bg-[#F97316]
      flex
      items-center
      justify-center
      overflow-hidden
    "
              >
                <span className="relative z-10 text-[22px] text-white">
                  <CgArrowLongRight className="w-6 h-3"/>
                </span>

                <span
                  className="
        absolute
        top-[-50%]
        left-[-60px]
        w-8
        h-[200%]
        bg-white/30
        rotate-[35deg]
        transition-all
        duration-[550ms]
        ease-[cubic-bezier(0.19,1,0.22,1)]
        group-hover:left-[120%]
      "
                />
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto border-t border-[#707070] ">
        <div className=" px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <a
              href="mailto:hello@warmwelcome.ie"
              className="text-[#DBDBDB] hover:text-orange-500 transition-colors text-sm flex items-center gap-2"
            >
              <Mail size={16} />
              hello@warmwelcome.ie
            </a>
            <div className="flex gap-6">
              <a
                href="#terms"
                className="text-[#DBDBDB] hover:text-orange-500 transition-colors text-lg leading-[26px]"
              >
                Terms & conditions
              </a>
              <a
                href="#privacy"
                className="text-[#DBDBDB] hover:text-orange-500 transition-colors text-lg leading-[18px]"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
