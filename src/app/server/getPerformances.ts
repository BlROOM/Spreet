import { EventCategory } from "@/type/eventCategory";
import { TPostResponse } from "@/type/post";

// 카테고리별로 데이터를 가져오는 함수 (performance 또는 battle)
export const getEventsByCategory = async (
  page: number,
  category: EventCategory
): Promise<TPostResponse> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DEV_API_URL}/api/events?page=${page}&limit=10&category=${category}`
  );
  if (!res.ok) throw new Error("Failed to fetch events");
  return res.json();
};

export const getPerformanceById = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DEV_API_URL}/api/events/${id}`
  );
  if (!res.ok) throw new Error("Failed to fetch performance");
  return res.json();
};
