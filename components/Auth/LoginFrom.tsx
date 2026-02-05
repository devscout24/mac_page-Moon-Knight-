// app/components/Auth/LoginForm.tsx
"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Eye, EyeOff, X } from "lucide-react";

interface LoginFormProps {
  open: any;
  close: any;
}

export default function LoginForm({ open, close }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {},
  );

  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {};
    if (!email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Please enter a valid email";

    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Login successful! (Demo)");
      setEmail("");
      setPassword("");
      close(["loginModal"]);
    }
  };

  const handleSignUp = () => {
    close(["loginModal"]);
    open([{ modalId: "registerModal", openId: "registerOpen" }]);
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-16 ">
      <Card className="w-full max-w-md relative ">
        <button
          type="button"
          className="absolute top-4 right-4 text-destructive hover:text-red-700"
          onClick={() => close(["loginModal"])}
        >
          <X size={24} />
        </button>

        <CardHeader className="text-center">
          <CardTitle className="text-[38px] font-semibold text-black leading-[38px] mb-[14px]">Welcome Back!</CardTitle>
          <CardDescription className="text-lg text-[#9B9B9B] font-normal leading-[18px] mb-[30px]">Please enter your email & password</CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1">
  <Input
    type="email"
    placeholder="example@email.com"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="text-lg font-normal   rounded-md py-3 px-4 h-[56px] "
  />
  {errors.email && (
    <p className="text-sm text-destructive">{errors.email}</p>
  )}
</div>


            <div className="space-y-1">
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                 className="text-lg font-normal text-[#9B9B9B] leading-[18px] py-[6px] px-6 h-[56px]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-sm text-destructive">{errors.password}</p>
              )}
            </div>

            <div className="text-end">
              <a
                href="#"
                className="text-lg text-[#9B9B9B] font-normal leading-[18px] flex text-end mb-[30px] "
              >
                Forgot Password?
              </a>
            </div>

            <Button
              type="submit"
                className="w-full group relative overflow-hidden bg-[#F97316] hover:bg-[#F97316] text-white  h-[36px] "
              
            >
              Log In
              
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
          </form>

          <p className="mt-5 text-center text-lg text-[#9B9B9B] mt-25 ">
            Don't have an account?{" "}
            <span
              onClick={handleSignUp}
              className="text-orange-500 hover:text-orange-600 font-normal "
            >
              Sign Up
            </span>
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
