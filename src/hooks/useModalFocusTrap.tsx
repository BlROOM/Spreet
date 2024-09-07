import useModalStore from "@/store/useModalStore";
import { useEffect, useRef } from "react";

export function useModalFocusTrap() {
  const modalRef = useRef<HTMLDialogElement>(null);
  const { isModalOpen } = useModalStore();
  useEffect(() => {
    const modal = modalRef.current;

    // 배경 스크롤 방지
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    // 포커스 트랩
    const focusableElements =
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const firstFocusableElement = modal?.querySelectorAll(focusableElements)[0];
    const lastFocusableElement =
      modal?.querySelectorAll(focusableElements)[
        modal.querySelectorAll(focusableElements).length - 1
      ];

    const handleTab = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        if (e.shiftKey) {
          // Shift + Tab
          if (document.activeElement === firstFocusableElement) {
            e.preventDefault();
            (lastFocusableElement as HTMLElement)?.focus();
          }
        } else {
          // Tab key
          if (document.activeElement === lastFocusableElement) {
            e.preventDefault();
            (firstFocusableElement as HTMLElement)?.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleTab);

    return () => {
      document.body.style.overflow = ""; // Clean up overflow style
      document.removeEventListener("keydown", handleTab);
    };
  }, [modalRef, isModalOpen]);
  return modalRef;
}
