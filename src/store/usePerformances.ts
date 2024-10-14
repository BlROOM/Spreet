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
      //   const performances: TPost[] = data.map((performance: any) => ({
      //     id: performance.id,
      //     title: performance.title,
      //     host: performance.host,
      //     location: performance.location,
      //     date: performance.date, // 날짜 포맷이 문자열이 맞는지 확인 필요
      //     genre: performance.genre,
      //     admissionFee: performance.price, // 관람비/참가비로 맵핑
      //     content: performance.content,
      //     image: performance.image,
      //     duration: performance.duration,
      //     ageRating: performance.age_rating,
      //     operatingHours: performance.operating_hours,
      //     notice: performance.notices,
      //     price: performance.price,
      //     discountedPrice: performance.discounted_price,
      //     discountDescription: performance.discount_description,
      //   }));
      set({ performances: data as TPost[] });
    } catch (error) {
      console.error(error);
    }
  },
}));
