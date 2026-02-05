"use client"

import { Button } from "@/components/ui/button"
import Modal from "@/components/Modal/modal"
import useModal from "@/components/Modal/useModal"
import UserSingUpForm from "./LetsGetInfoFrom"
import ProfileForm from "./RegisterForm"

export default function AuthModals() {
  const { open } = useModal()

  return (
    <>
      {/* SIGN UP BUTTON */}
      <Button
        onClick={() =>
          open([{ modalId: "profileModal", openId: "profileOpen" }])
        }
        className="bg-orange-500 hover:bg-orange-600"
      >
        Sign Up
      </Button>

      {/* PROFILE MODAL */}
      <Modal modalId="profileModal" openId="profileOpen">
        <ProfileForm />
      </Modal>

      {/* REGISTER MODAL */}
      <Modal modalId="registerModal" openId="registerOpen">
        <UserSingUpForm />
      </Modal>
    </>
  )
}
