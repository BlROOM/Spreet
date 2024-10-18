import { TPost } from "@/type/post";
import create from "zustand";

type PerformanceStore = {
  performances: TPost[];
  fetchPerformances: () => Promise<void>;
};

export const usePerformanceStore = create<PerformanceStore>((set) => ({
  performances: [],
  fetchPerformances: async () => {
    try {
      const response = await fetch("/api/performances");

      if (!response.ok) {
        throw new Error("Failed to fetch performances");
      }
      const data = await response.json();
      set({ performances: data as TPost[] });
    } catch (error) {
      console.error(error);
    }
  },
}));
