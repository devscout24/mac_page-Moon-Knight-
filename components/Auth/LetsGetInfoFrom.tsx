// app/components/Auth/ProfileToRegistrationModal.tsx
"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { X, Camera, Eye, EyeOff } from "lucide-react";
import Modal from "@/components/Modal/modal";
import useModal from "@/components/Modal/useModal";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";

type RegistrationFormValues = {
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
};

export default function UserSingUpForm() {
  const { open, close } = useModal();

  /** PROFILE FORM STATE */
  const [profileForm, setProfileForm] = useState({
    fullName: "",
    university: "",
    dateOfBirth: "",
    nationality: "",
    description: "",
  });
  const [profileErrors, setProfileErrors] = useState<Record<string, string>>({});

  const handleProfileChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setProfileForm(prev => ({ ...prev, [name]: value }));
  };

  const UserSingUpForm = () => {
    const newErrors: Record<string, string> = {};
    if (!profileForm.fullName.trim()) newErrors.fullName = "Full name required";
    if (!profileForm.university.trim()) newErrors.university = "University required";
    if (!profileForm.dateOfBirth) newErrors.dateOfBirth = "Date of birth required";
    if (!profileForm.nationality) newErrors.nationality = "Nationality required";
    if (!profileForm.description.trim()) newErrors.description = "Description required";
    setProfileErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (UserSingUpForm()) {
      console.log("Profile data:", profileForm);
      // Open registration modal instead of submitting profile
      open([{ modalId: "registerModal", openId: "registerOpen" }]);
    }
  };

  /** REGISTRATION FORM HOOKS */
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {
    handleSubmit: handleRegSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<RegistrationFormValues>({
    defaultValues: {
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      agreeToTerms: false,
    },
  });

  const password = watch("password");

  const onSubmitRegistration: SubmitHandler<RegistrationFormValues> = data => {
    console.log("Registration data:", data);
    alert("Registration submitted!");
    close(["registerModal"]);
  };

  return (
    <>
      {/* PROFILE FORM CARD */}
      <div className="min-h-screen flex items-center justify-center bg-muted px-4 py-16">
        <Card className="w-full max-w-md relative shadow-xl rounded-2xl">
          <button
            onClick={() => console.log("Profile close clicked")}
            className="absolute top-4 right-4 text-destructive hover:text-red-700 transition"
          >
            <X size={24} />
          </button>

          <CardHeader>
            <CardTitle className="text-3xl text-center">Profile</CardTitle>
            <CardDescription className="text-center">Complete your profile to continue</CardDescription>
          </CardHeader>

          <CardContent>
            <div className="flex justify-center mb-6">
              <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center">
                <Camera size={48} className="text-gray-400" />
              </div>
            </div>

            <form onSubmit={handleProfileSubmit} className="space-y-5">
              <div className="space-y-1">
                <Label>Full Name</Label>
                <Input
                  name="fullName"
                  placeholder="Enter full name"
                  value={profileForm.fullName}
                  onChange={handleProfileChange}
                />
                {profileErrors.fullName && <p className="text-sm text-destructive">{profileErrors.fullName}</p>}
              </div>

              <div className="space-y-1">
                <Label>University</Label>
                <Input
                  name="university"
                  placeholder="Enter university"
                  value={profileForm.university}
                  onChange={handleProfileChange}
                />
                {profileErrors.university && <p className="text-sm text-destructive">{profileErrors.university}</p>}
              </div>

              <div className="space-y-1">
                <Label>Date of Birth</Label>
                <Input type="date" name="dateOfBirth" value={profileForm.dateOfBirth} onChange={handleProfileChange} />
                {profileErrors.dateOfBirth && <p className="text-sm text-destructive">{profileErrors.dateOfBirth}</p>}
              </div>

              <div className="space-y-1">
                <Label>Nationality</Label>
                <Select
                  value={profileForm.nationality}
                  onValueChange={value => setProfileForm(prev => ({ ...prev, nationality: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select nationality" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usa">United States</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="canada">Canada</SelectItem>
                    <SelectItem value="india">India</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {profileErrors.nationality && <p className="text-sm text-destructive">{profileErrors.nationality}</p>}
              </div>

              <div className="space-y-1">
                <Label>Description</Label>
                <Textarea
                  name="description"
                  placeholder="Tell us about yourself"
                  rows={4}
                  value={profileForm.description}
                  onChange={handleProfileChange}
                />
                {profileErrors.description && <p className="text-sm text-destructive">{profileErrors.description}</p>}
              </div>

              <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
                Continue
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* REGISTRATION MODAL */}
      <Modal modalId="registerModal" openId="registerOpen">
        <div className="w-full max-w-md relative p-6 bg-white rounded-2xl shadow-lg">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-destructive"
            onClick={() => close(["registerModal"])}
          >
            <X size={24} />
          </Button>

          <h1 className="text-2xl font-bold text-center mb-4">Register</h1>

          <form onSubmit={handleRegSubmit(onSubmitRegistration)} className="space-y-5">
            <div className="space-y-1">
              <Label>Email</Label>
              <Controller
                name="email"
                control={control}
                rules={{ required: "Email required" }}
                render={({ field }) => <Input {...field} placeholder="Email" />}
              />
              {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
            </div>

            <div className="space-y-1">
              <Label>Phone</Label>
              <Controller
                name="phone"
                control={control}
                rules={{ required: "Phone required" }}
                render={({ field }) => <Input {...field} placeholder="Phone" />}
              />
              {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
            </div>

            <div className="space-y-1 relative">
              <Label>Password</Label>
              <Controller
                name="password"
                control={control}
                rules={{ required: "Password required" }}
                render={({ field }) => (
                  <Input {...field} type={showPassword ? "text" : "password"} placeholder="Password" className="pr-10" />
                )}
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-3 top-1/2 -translate-y-1/2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </Button>
              {errors.password && <p className="text-sm text-destructive">{errors.password.message}</p>}
            </div>

            <div className="space-y-1 relative">
              <Label>Confirm Password</Label>
              <Controller
                name="confirmPassword"
                control={control}
                rules={{
                  required: "Confirm password",
                  validate: value => value === password || "Passwords do not match",
                }}
                render={({ field }) => (
                  <Input {...field} type={showConfirmPassword ? "text" : "password"} placeholder="Confirm Password" className="pr-10" />
                )}
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-3 top-1/2 -translate-y-1/2"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </Button>
              {errors.confirmPassword && <p className="text-sm text-destructive">{errors.confirmPassword.message}</p>}
            </div>

            <div className="flex items-center space-x-2">
              <Controller
                name="agreeToTerms"
                control={control}
                rules={{ required: "Agree to terms" }}
                render={({ field }) => <Checkbox checked={field.value} onCheckedChange={field.onChange} />}
              />
              <Label className="text-xs">I agree to the terms & privacy policy</Label>
            </div>
            {errors.agreeToTerms && <p className="text-sm text-destructive">{errors.agreeToTerms.message}</p>}

            <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
              Continue
            </Button>
          </form>
        </div>
      </Modal>
    </>
  );
}
