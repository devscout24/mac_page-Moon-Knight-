import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useRef } from "react";
import Modal from "./modal";

export default function useModal() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const close = useCallback(
    (modalIds: string[]) => {
      // Clear any pending timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Debounce URL updates to prevent rapid successive calls
      timeoutRef.current = setTimeout(() => {
        const params = new URLSearchParams(Array.from(searchParams.entries()));
        modalIds.forEach((id) => params.delete(id));
        router.replace(`?${params.toString()}`, { scroll: false });
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
      timeoutRef.current = setTimeout(() => {
        const params = new URLSearchParams(Array.from(searchParams.entries()));
        modals.forEach(({ modalId, openId }) => params.set(modalId, openId));
        router.replace(`?${params.toString()}`, { scroll: false });
      }, 200);
    },
    [router, searchParams],
  );

  const getParams = useCallback(
    (modalId: string) => searchParams.get(modalId),
    [searchParams],
  );

  return { close, open, Modal, getParams };
}
