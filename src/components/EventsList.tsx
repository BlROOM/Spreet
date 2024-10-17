"use client";
import Link from "next/link";
import Card from "@/components/shared/card/.";
import formatDate from "@/utils/formatDate";
import { useInfinitePostQuery } from "@/hooks/useInfinitePost";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import { useRef } from "react";
import useEventCategory from "@/hooks/useEventCategory";

export default function EventsList() {
  const category = useEventCategory();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfinitePostQuery(category);
  const loaderRef = useRef<HTMLDivElement | null>(null);
  useInfiniteScroll(loaderRef, {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  });
  console.log("Fetched Data:", data); // Fetched Data 로그 출력

  if (isLoading) return <div>로딩중......</div>;
  return (
    <>
      {data?.pages.map((page) =>
        page.data.map(({ id, title, date, location, host, image }) => (
          <Link
            key={id}
            href={`/event/performances/${id}`}
            className="flex flex-col m-5 w-3/12"
          >
            <Card.Title>{title}</Card.Title>
            <Card.Img src={image} alt={"Card 이미지"} />
            <Card.Author
              date={formatDate(date)}
              name={host}
              location={location}
            />
          </Link>
        ))
      )}
      <div ref={loaderRef} className="h-8" />
      {isFetchingNextPage && <p>로딩 중입니다...</p>}
    </>
  );
}
