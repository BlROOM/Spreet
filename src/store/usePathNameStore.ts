import { create } from "zustand";

type PathNameState = {
  visitedPaths: string[];
  addPath: (pathName: string) => void;
  hasVisited: (pathName: string) => boolean;
  removePath: (pathName: string) => void;
  prevPath: string;
  setPrevPath: (pathName: string) => void;
};

const usePathNameStore = create<PathNameState>((set, get) => ({
  visitedPaths: [],
  addPath: (pathName: string) =>
    set((state) => ({
      visitedPaths: state.visitedPaths.includes(pathName)
        ? state.visitedPaths
        : [...state.visitedPaths, pathName],
    })),
  hasVisited: (pathName: string) => get().visitedPaths.includes(pathName),
  removePath: (pathName: string) =>
    set((state) => ({
      visitedPaths: state.visitedPaths.filter((path) => path !== pathName),
    })),
  prevPath: "/event",
  setPrevPath: (pathName: string) => set({ prevPath: pathName }),
}));

export default usePathNameStore;
