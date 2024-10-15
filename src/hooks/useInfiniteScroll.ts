import { useEffect } from "react";

type TUseInfiniteScroll = {
  fetchNextPage: () => void; // 다음 페이지를 불러오는 함수
  hasNextPage: boolean; // 다음 페이지가 있는지 여부
  isFetchingNextPage: boolean; // 현재 페이지를 불러오는 중인지 여부
};

export default function useInfiniteScroll(
  loaderRef: React.RefObject<HTMLDivElement>,
  { fetchNextPage, hasNextPage, isFetchingNextPage }: TUseInfiniteScroll
) {
  useEffect(() => {
    const loaderElement = loaderRef.current;
    if (!loaderElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      {
        root: null, // 뷰포트 기준
        rootMargin: "0px",
        threshold: 1.0, // 요소가 100% 보여졌을 때 트리거
      }
    );

    observer.observe(loaderElement);

    return () => {
      if (loaderElement) observer.unobserve(loaderElement);
    };
  }, [loaderRef, fetchNextPage, hasNextPage, isFetchingNextPage]);
}
