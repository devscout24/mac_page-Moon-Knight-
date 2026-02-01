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
    } else {
      close([modalId, ...(closeModals || [])]);
    }
  };

  return (
    <Dialog open={modal === openId} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild hidden />
      <DialogContent
        className={cn(
          "min-h-auto min-w-fit border-none bg-transparent p-0 shadow-none",
          className,
        )}
      >
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
