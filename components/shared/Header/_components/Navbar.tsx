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
    { label: "Our Story", href: "#" },
    { label: "How it works", href: "#" },
    { label: "Support", href: "#" },
  ];

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
  );
}
