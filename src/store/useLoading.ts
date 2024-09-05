import { create } from "zustand";

type LoadingState = {
  isLoading: boolean;
  toggleLoading: () => void;
};

const useLoadingStore = create<LoadingState>((set) => ({
  isLoading: false,
  toggleLoading: () => set((state) => ({ isLoading: !state.isLoading })),
}));

export default useLoadingStore;
