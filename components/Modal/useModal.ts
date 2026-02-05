// app/components/Modal/useModal.ts
"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useCallback, useRef } from "react";

export default function useModal() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const close = useCallback(
    (modalIds: string[]) => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        const params = new URLSearchParams(Array.from(searchParams.entries()));
        modalIds.forEach((id) => params.delete(id));
        router.replace(`?${params.toString()}`, { scroll: false });
      }, 100);
    },
    [router, searchParams]
  );

  const open = useCallback(
    (modals: { modalId: string; openId: string }[]) => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        const params = new URLSearchParams(Array.from(searchParams.entries()));
        modals.forEach(({ modalId, openId }) => params.set(modalId, openId));
        router.replace(`?${params.toString()}`, { scroll: false });
      }, 100);
    },
    [router, searchParams]
  );

  const getParams = useCallback(
    (modalId: string) => searchParams.get(modalId),
    [searchParams]
  );

  return { open, close, getParams };
}
