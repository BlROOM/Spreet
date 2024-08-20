import { useEffect } from "react";
import ModalBox from "./ModalBox";
import ModalTitle from "./ModalTitle";
import ModalWrapper from "./ModalWrapper";
import Closing from "@/assets/icons/closing.svg";
import { useModalFocusTrap } from "@/hooks/useModalFocusTrap";

type ModalLayout = {
  title: string;
  isOpen: boolean;
  handleIsOpen: () => void;
  onClose: () => void;
  children: React.ReactNode;
};

export default function ModalLayout({
  isOpen,
  title,
  handleIsOpen,
  onClose,
  children,
}: ModalLayout) {
  const modalRef = useModalFocusTrap();

  useEffect(() => {
    // 배경 스크롤 방지
    document.body.style.overflow = "hidden";

    // 포커스 트랩
    const focusableElements =
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const modal = modalRef.current;
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
  }, [modalRef]);

  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose}>
      <ModalBox
        ref={modalRef}
        className="p-10 fixed inset-0 z-50 bg-[gray] border-none rounded-[32px] shadow-md"
      >
        <div className="flex justify-between items-center mb-6">
          <div className="flex-1 flex justify-center">
            <ModalTitle className="b1 font-bold text-primary-900">
              {title}
            </ModalTitle>
          </div>
          <button
            onClick={handleIsOpen}
            className="flex-none"
            aria-label="Close modal"
          >
            <Closing className="text-[gray] w-6 h-6" />
          </button>
        </div>
        {children}
      </ModalBox>
    </ModalWrapper>
  );
}
