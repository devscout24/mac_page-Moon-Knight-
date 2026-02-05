<<<<<<< HEAD
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
=======
"use client";

import { Bell, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const isLoggedIn = false;

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Browse", href: "#" },
>>>>>>> 5a17f9262e4aea0c4336617aa3ee644691db08ce
    { label: "Our Story", href: "#" },
    { label: "How it works", href: "#" },
    { label: "Support", href: "#" },
  ];

<<<<<<< HEAD
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
=======
  return (
    <nav className="sticky top-0 z-0 w-full  bg-background">
      <div className="max-w-[1280px] mx-auto my-[51px] ">
        {/* ================= Desktop ================= */}
        <div className="hidden md:flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-baseline gap-1 mr-[73px]">
            <span className="text-[26px] font-bold leading-[100%] text-[#F97316]">
              Warm
            </span>
            <span className="text-[26px] font-bold text-[#000] leading-[100%]">
              Welcome
            </span>
          </div>

          {/* Nav Links */}
          <div className="flex items-center gap-12 mr-15">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-lg font-semibold text-foreground text-gray-400 hover:text-[#F97316] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* ================= Right Section ================= */}
          <div className="flex items-center gap-6">
            {!isLoggedIn && (
              <>
                <Button
                  className=" w-[97px] h-[56px]
    group relative overflow-hidden
    bg-[#8A9A5B]
    hover:bg-[#8A9A5B]
    active:bg-[#F97316]
    text-text-gray-400 border border-[#8A9A5B]
    ml-5
  "
                >
                  <span className="relative z-10">Login</span>

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
                  className="group relative overflow-hidden bg-[#F97316] hover:bg-[#F97316] active:bg-[#F97316] text-whiteborder border-[#F97316]
                 "
                >
                  <a className="relative w-[249px] h-[56px]  text-[18px] font-medium">
                    <span className="relative z-10 text-gray-50">Become a Host Partner</span>

                    {/* shine sweep */}
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
                  </a>
                </Button>
              </>
            )}

            {/* ---------- LOGGED IN ---------- */}
            {isLoggedIn && (
              <>
                {/* Notification */}
                <button className="relative p-2 text-foreground hover:bg-muted rounded-lg transition-colors">
                  <Bell className="w-5 h-5" />
                  <span className="absolute top-2 right-2 w-2 h-2 bg-[#F97316] rounded-full" />
                </button>

                {/* Profile Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <div className="flex items-center gap-2 px-2 py-1 rounded-lg cursor-pointer hover:bg-muted transition-colors">
                      <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-semibold text-sm">
                        M
                      </div>

                      <div className="hidden sm:block text-left">
                        <div className="text-sm font-medium text-foreground">
                          Mr James
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Guest Account
                        </div>
                      </div>

                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent
                    align="end"
                    sideOffset={8}
                    className="w-40"
                  >
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem className="text-red-500">
                      Sign out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
>>>>>>> 5a17f9262e4aea0c4336617aa3ee644691db08ce
  );
}
