import ModalBox from "./ModalBox";
import ModalTitle from "./ModalTitle";
import ModalWrapper from "./ModalWrapper";
import Closing from "@/assets/icons/closing.svg";
import { useModalFocusTrap } from "@/hooks/useModalFocusTrap";

type ModalLayout = {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function ModalLayout({
  isOpen,
  title,
  onClose,
  children,
}: ModalLayout) {
  const modalRef = useModalFocusTrap();

  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose}>
      <ModalBox
        ref={modalRef}
        className="p-10 fixed inset-0 z-50 top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 border-none rounded-[32px] min-h-[600px] h-auto shadow-md w-1/4 bg-[white]"
      >
        <div className="flex justify-between items-center mb-6">
          <div className="flex-1 flex justify-center">
            <ModalTitle className="text-2xl font-bold text-primary-900">
              {title}
            </ModalTitle>
          </div>
          <button
            onClick={onClose}
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
