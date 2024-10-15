import { TPostResponse } from "@/type/post";

export const getPerformances = async (page: number): Promise<TPostResponse> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DEV_API_URL}/api/performances?page=${page}&limit=10`
  );
  if (!res.ok) throw new Error("Failed to fetch performances");
  return res.json();
};

export const getPerformanceById = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DEV_API_URL}/api/performances/${id}`
  );
  if (!res.ok) throw new Error("Failed to fetch performance");
  return res.json();
};
