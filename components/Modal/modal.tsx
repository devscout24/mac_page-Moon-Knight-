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
  const { getParams, open, close } = useModal();
  const modal = getParams(modalId);

  const handleOpenChange = (openState: boolean) => {
    if (openState) {
      open([{ modalId, openId }]);
    } else {
      close([modalId, ...(closeModals || [])]);
    }
  };

  return (
    <Dialog open={modal === openId} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild hidden />
      <DialogContent className={cn("min-h-auto min-w-fit border-none bg-transparent p-0 shadow-none", className)}>
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
