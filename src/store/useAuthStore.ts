import { create } from "zustand";

type AuthState = {
  isSignedIn: boolean;
  setSignIn: (state: boolean) => void;
};

const useAuthStore = create<AuthState>((set) => ({
  isSignedIn: false,
  setSignIn: (state) => set({ isSignedIn: state }),
}));

export default useAuthStore;
