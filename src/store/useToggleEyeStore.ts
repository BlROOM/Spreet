import { create } from "zustand";

type ToggleEyeState = {
  // Record는 TypeScript의 유틸리티 타입 중 하나로, 객체의 키와 값의 타입을 명시가 가능.
  visibleStates: Record<string, boolean>;
  toggleVisibility: (key: string) => void;
};

const useToggleEye = create<ToggleEyeState>((set) => ({
  visibleStates: {}, //상태값이 들어옴, password, passwordConfirm
  toggleVisibility: (key) =>
    set((state) => ({
      visibleStates: {
        ...state.visibleStates,
        [key]: !state.visibleStates[key],
      },
    })),
}));

export default useToggleEye;
