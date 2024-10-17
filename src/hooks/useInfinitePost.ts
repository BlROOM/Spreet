import { getEventsByCategory } from "@/app/server/getPerformances";
import { EventCategory } from "@/type/eventCategory";
import { TPostResponse } from "@/type/post";
import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";

export const useInfinitePostQuery = (category: EventCategory) => {
  // console.log("inner category", category);
  return useInfiniteQuery<TPostResponse, Error, InfiniteData<TPostResponse>>({
    queryKey: ["events", category],
    queryFn: ({ pageParam }) =>
      getEventsByCategory(pageParam as number, category),
    getNextPageParam: (lastPage) => {
      const {
        meta: { currentPage, hasNextPage },
      } = lastPage;
      return hasNextPage ? currentPage + 1 : undefined;
    },
    initialPageParam: 1,
    staleTime: 1000 * 60 * 5,
  });
};
