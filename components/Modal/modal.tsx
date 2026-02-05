<<<<<<< HEAD
// app/components/Modal/modal.tsx
"use client";

import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
=======
"use client";

import { cn } from "@/lib/utils";
import type { PropsWithChildren } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
>>>>>>> 5a17f9262e4aea0c4336617aa3ee644691db08ce
  DialogTrigger,
} from "@/components/ui/dialog";
import useModal from "./useModal";

interface ModalProps {
  modalId: string;
  openId: string;
  closeModals?: string[];
  className?: string;
}

export default function Modal({
  openId,
  modalId,
  children,
  closeModals,
  className,
}: PropsWithChildren<ModalProps>) {
<<<<<<< HEAD
  const { getParams, open, close } = useModal();
  const modal = getParams(modalId);

  const handleOpenChange = (openState: boolean) => {
    if (openState) {
      open([{ modalId, openId }]);
=======
  const { getParams, open: modalOPen, close } = useModal();

  const modal = getParams(modalId);

  const handleOpenChange = (open: boolean) => {
    if (open) {
      modalOPen([
        {
          modalId: modalId,
          openId: openId,
        },
      ]);
>>>>>>> 5a17f9262e4aea0c4336617aa3ee644691db08ce
    } else {
      close([modalId, ...(closeModals || [])]);
    }
  };

  return (
    <Dialog open={modal === openId} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild hidden />
<<<<<<< HEAD
      <DialogContent className={cn("min-h-auto min-w-fit border-none bg-transparent p-0 shadow-none", className)}>
=======
      <DialogContent
        className={cn(
          "min-h-auto min-w-fit border-none bg-transparent p-0 shadow-none",
          className,
        )}
      >
>>>>>>> 5a17f9262e4aea0c4336617aa3ee644691db08ce
        <DialogHeader hidden>
          <DialogTitle hidden />
          <DialogDescription hidden />
        </DialogHeader>
        {children}
        <DialogFooter hidden />
      </DialogContent>
    </Dialog>
  );
}
