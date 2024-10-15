import { getPerformances } from "@/app/server/getPerformances";
import { TPost, TPostResponse } from "@/type/post";
import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";

export const useInfinitePostQuery = () => {
  return useInfiniteQuery<TPostResponse, Error, InfiniteData<TPostResponse>>({
    queryKey: ["perforamnces"],
    queryFn: ({ pageParam }) => getPerformances(pageParam as number),
    getNextPageParam: (lastPage) => {
      const {
        meta: { currentPage, hasNextPage },
      } = lastPage;
      return hasNextPage ? currentPage + 1 : undefined;
    },
    initialPageParam: 1,
    staleTime: 60 * 1000,
  });
};
