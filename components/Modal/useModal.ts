<<<<<<< HEAD
// app/components/Modal/useModal.ts
"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useCallback, useRef } from "react";
=======
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useRef } from "react";
import Modal from "./modal";
>>>>>>> 5a17f9262e4aea0c4336617aa3ee644691db08ce

export default function useModal() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const close = useCallback(
    (modalIds: string[]) => {
<<<<<<< HEAD
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

=======
      // Clear any pending timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Debounce URL updates to prevent rapid successive calls
>>>>>>> 5a17f9262e4aea0c4336617aa3ee644691db08ce
      timeoutRef.current = setTimeout(() => {
        const params = new URLSearchParams(Array.from(searchParams.entries()));
        modalIds.forEach((id) => params.delete(id));
        router.replace(`?${params.toString()}`, { scroll: false });
<<<<<<< HEAD
      }, 100);
    },
    [router, searchParams]
  );

  const open = useCallback(
    (modals: { modalId: string; openId: string }[]) => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

=======
      }, 200);
    },
    [router, searchParams],
  );

  const open = useCallback(
    (
      modals: {
        modalId: string;
        openId: string;
      }[],
    ) => {
      // Clear any pending timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Debounce URL updates to prevent rapid successive calls
>>>>>>> 5a17f9262e4aea0c4336617aa3ee644691db08ce
      timeoutRef.current = setTimeout(() => {
        const params = new URLSearchParams(Array.from(searchParams.entries()));
        modals.forEach(({ modalId, openId }) => params.set(modalId, openId));
        router.replace(`?${params.toString()}`, { scroll: false });
<<<<<<< HEAD
      }, 100);
    },
    [router, searchParams]
=======
      }, 200);
    },
    [router, searchParams],
>>>>>>> 5a17f9262e4aea0c4336617aa3ee644691db08ce
  );

  const getParams = useCallback(
    (modalId: string) => searchParams.get(modalId),
<<<<<<< HEAD
    [searchParams]
  );

  return { open, close, getParams };
=======
    [searchParams],
  );

  return { close, open, Modal, getParams };
>>>>>>> 5a17f9262e4aea0c4336617aa3ee644691db08ce
}
