import { create } from "zustand";

type ModalState = {
  isModalOpen: boolean;
  isLoginForm: boolean;
  toggleForm: () => void;
  openModal: () => void;
  closeModal: () => void;
};

const useModalStore = create<ModalState>((set) => ({
  isModalOpen: false,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false, isLoginForm: true }),
  isLoginForm: true,
  toggleForm: () => set((state) => ({ isLoginForm: !state.isLoginForm })),
}));

export default useModalStore;
