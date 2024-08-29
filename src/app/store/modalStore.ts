import { create } from "zustand";

type ModalContent = "로그인" | "회원가입";

type ModalState = {
  isModalOpen: boolean;
  modalContent: ModalContent;
  setModalContent: (content: ModalContent) => void;
  openModal: () => void;
  closeModal: () => void;
};

const useModalStore = create<ModalState>((set) => ({
  isModalOpen: false,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false, modalContent: "로그인" }),
  modalContent: "로그인",
  setModalContent: (content: ModalContent) => set({ modalContent: content }),
}));

export default useModalStore;
