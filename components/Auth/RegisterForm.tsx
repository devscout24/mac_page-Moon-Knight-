"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { X, Camera } from "lucide-react"

import Modal from "@/components/Modal/modal"
import useModal from "@/components/Modal/useModal"
import UserSingUpForm from "./LetsGetInfoFrom"

export default function ProfileForm() {
  const { open, close } = useModal()

  const [formData, setFormData] = useState({
    fullName: "",
    university: "",
    dateOfBirth: "",
    nationality: "",
    description: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required"
    if (!formData.university.trim()) newErrors.university = "University is required"
    if (!formData.dateOfBirth) newErrors.dateOfBirth = "Date of birth is required"
    if (!formData.nationality) newErrors.nationality = "Nationality is required"
    if (!formData.description.trim()) newErrors.description = "Description is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // 🔥 Continue এ Profile modal বন্ধ + Register modal open
 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()

  if (!validateForm()) return

  console.log("Profile Data:", formData)

  // ✅ 1️⃣ আগে Profile modal বন্ধ
  close(["profileModal"])

  // ✅ 2️⃣ পরের tick এ Register modal open
  setTimeout(() => {
    open([
      {
        modalId: "registerModal",
        openId: "registerOpen",
      },
    ])
  }, 0)
}


  return (
    <>
      {/* 🔥 PROFILE MODAL */}
      <Modal modalId="profileModal" openId="profileOpen">
        <Card className="w-full max-w-md relative shadow-xl rounded-2xl">
          {/* Close */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4"
            onClick={() => close(["profileModal"])}
          >
            <X />
          </Button>

          <CardHeader>
            <CardTitle className="text-3xl text-center">Profile</CardTitle>
            <CardDescription className="text-center">
              Complete your profile to continue
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="flex justify-center mb-6">
              <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center">
                <Camera size={48} className="text-gray-400" />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label>Full Name</Label>
                <Input name="fullName" value={formData.fullName} onChange={handleChange} />
                {errors.fullName && (
                  <p className="text-sm text-destructive">{errors.fullName}</p>
                )}
              </div>

              <div>
                <Label>University</Label>
                <Input name="university" value={formData.university} onChange={handleChange} />
                {errors.university && (
                  <p className="text-sm text-destructive">{errors.university}</p>
                )}
              </div>

              <div>
                <Label>Date of Birth</Label>
                <Input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                />
                {errors.dateOfBirth && (
                  <p className="text-sm text-destructive">{errors.dateOfBirth}</p>
                )}
              </div>

              <div>
                <Label>Nationality</Label>
                <Select
                  value={formData.nationality}
                  onValueChange={value =>
                    setFormData(prev => ({ ...prev, nationality: value }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select nationality" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bd">Bangladesh</SelectItem>
                    <SelectItem value="india">India</SelectItem>
                    <SelectItem value="usa">USA</SelectItem>
                  </SelectContent>
                </Select>
                {errors.nationality && (
                  <p className="text-sm text-destructive">{errors.nationality}</p>
                )}
              </div>

              <div>
                <Label>Description</Label>
                <Textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
                {errors.description && (
                  <p className="text-sm text-destructive">{errors.description}</p>
                )}
              </div>

              <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
                Continue
              </Button>
            </form>
          </CardContent>
        </Card>
      </Modal>

      {/* 🔥 REGISTER MODAL */}
      <Modal modalId="registerModal" openId="registerOpen">
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4"
            onClick={() => close(["registerModal"])}
          >
            <X />
          </Button>

          <UserSingUpForm />
        </div>
      </Modal>
    </>
  )
}
