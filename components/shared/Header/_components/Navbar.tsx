// app/components/Navbar.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {  Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

import useModal from "@/components/Modal/useModal";
import Modal from "@/components/Modal/modal";
import LoginForm from "@/components/Auth/LoginFrom";
import ProfileFormModal from "@/components/Auth/RegisterForm";
import Link from "next/link";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { open, close } = useModal();
  const router = useRouter();

  const isLoggedIn = false; // 🔹 Replace with real auth logic

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Browse", href: "/browse", requireAuth: true },
    { label: "Our Story", href: "#" },
    { label: "How it works", href: "#" },
    { label: "Support", href: "#" },
  ];

  const handleNavClick = (link: typeof navLinks[0]) => {
    if (link.requireAuth && !isLoggedIn) {
      open([{ modalId: "loginModal", openId: "loginOpen" }]);
    } else if (link.href !== "/browse") {
      router.push(link.href); // 🔹 Navigate
    }
    setIsMobileMenuOpen(false);
  };

  const handleLoginClick = () => {
    open([{ modalId: "loginModal", openId: "loginOpen" }]);
  };

  const handleSignUpClick = () => {
    open([{ modalId: "registerModal", openId: "registerOpen" }]);
  };

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white shadow">
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-baseline gap-1">
              <span className="text-[26px] font-bold text-[#F97316] leading-[100%]">Warm</span>
              <span className="text-[26px] font-bold text-black leading-[100%]">Welcome</span>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-10 lg:gap-12">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link)}
                  className="text-lg font-semibold text-gray-500 hover:text-[#F97316] transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4 sm:gap-6">
              {!isLoggedIn && (
                <>
                     <Button
                className="
                  group relative overflow-hidden
                  bg-[#8A9A5B]
                  hover:bg-[#8A9A5B]
                  text-white
                w-[97px] h-[56px]
                  flex items-center gap-2
                "
              >
                 <span className="relative z-10 text-[18px] text-white font-semibold leading-[18px]">
                  Login
                  </span>
                    <span
                  className="
                    absolute top-[-50%] left-[-60px]
                    w-8 h-[200%]
                    bg-white/30
                    rotate-[35deg]
                    transition-all duration-[550ms]
                    ease-[cubic-bezier(0.19,1,0.22,1)]
                    group-hover:left-[120%]
                  "
                />
                  </Button>
                  <Button
                asChild
                className="group relative overflow-hidden bg-[#F97316] hover:bg-[#F97316] text-white w-[209px] h-[56px]"
              >
                <Link href="#" className="relative flex items-center gap-2">
                  <span className="relative z-10 text-[18px] text-white font-semibold leading-[18px]">
                   Become a Host
                  </span>

                  <span
                    className="
                      absolute top-[-50%] left-[-60px]
                      w-8 h-[200%]
                      bg-white/30
                      rotate-[35deg]
                      transition-all duration-[550ms]
                      ease-[cubic-bezier(0.19,1,0.22,1)]
                      group-hover:left-[120%]
                    "
                  />
                </Link>
              </Button>
                </>
              )}

              {/* Mobile Menu Toggle */}
              <button
                className="md:hidden p-2 rounded-md hover:bg-muted transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-6 border-t bg-white shadow-md flex flex-col gap-5 px-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link)}
                  className="text-lg font-medium text-gray-700 hover:text-[#F97316] transition-colors px-4 py-3 rounded-md hover:bg-muted"
                >
                  {link.label}
                </button>
              ))}

              {!isLoggedIn && (
                <div className="flex flex-col gap-4 mt-4">
                  <Button className="h-12 w-full bg-[#8A9A5B] text-white" onClick={handleLoginClick}>
                    Login
                  </Button>
                  <Button className="h-12 w-full bg-[#F97316] text-white" onClick={handleSignUpClick}>
                    Sign Up
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </nav>

      {/* Login Modal */}
      <Modal modalId="loginModal" openId="loginOpen">
        <LoginForm open={open} close={close} />
      </Modal>

      {/* SignUp/Profile Modal */}
      <Modal modalId="registerModal" openId="registerOpen">
        <ProfileFormModal />
      </Modal>
    </>
  );
}
