'use client'

import { Bell, ChevronDown } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion';

export function Navbar() {
  
  const isLoggedIn = false

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Browse', href: '#' },
    { label: 'Our Story', href: '#' },
    { label: 'How it works', href: '#' },
    { label: 'Support', href: '#' },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background">
      <div className="max-w-[1280px] mx-auto px-4">

        {/* ================= Desktop ================= */}
        <div className="hidden md:flex items-center justify-between h-20">

          {/* Logo */}
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-bold text-orange-500">
              Warm
            </span>
            <span className="text-xl font-bold text-foreground">
              Welcome
            </span>
          </div>

          {/* Nav Links */}
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* ================= Right Section ================= */}
          <div className="flex items-center gap-4">

            {/* ---------- NOT LOGGED IN ---------- */}
            {!isLoggedIn && (
              <>
                <Button className='bg-white hover:bg-white text-foreground border border-neutral-700'>
                  Login
                </Button>

  <Button
  asChild
  className="
    group
    relative overflow-hidden
    bg-orange-500
    hover:bg-orange-500
    active:bg-orange-500
    text-white
    border border-orange-500
  "
>
  <a className="relative px-6 py-3 font-medium">
    <span className="relative z-10">
      Become a Host Partner
    </span>

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
                  <span className="absolute top-2 right-2 w-2 h-2 bg-orange-500 rounded-full" />
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

                  <DropdownMenuContent align="end" sideOffset={8} className="w-40">
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
  )
}


