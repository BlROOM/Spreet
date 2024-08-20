import { create } from "zustand";

type ModalState = {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const useModalStore = create<ModalState>((set) => ({
  isModalOpen: false,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
}));

export default useModalStore;
