"use client";
import Link from "next/link";
import Card from "@/components/shared/card/.";
import formatDate from "@/utils/formatDate";
import { useInfinitePostQuery } from "@/hooks/useInfinitePost";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import { useRef } from "react";
import { FixedSizeList as List } from "react-window";

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

  // 데이터가 없을 경우
  const items = data?.pages.flatMap((page) => page.data) || [];
  const itemCount = items.length;

  // 각 아이템의 높이
  const itemHeight = 100; // 카드의 높이에 따라 조정 필요
  if (isLoading) return <div>로딩중......</div>;
  return (
    <>
      <List
        height={window.innerHeight} // 리스트 높이 설정
        itemCount={itemCount}
        itemSize={itemHeight}
        width="100vw"
        style={{
          position: "relative",
          height: "100%",
          overflow: "auto",
          willChange: "transform",
          direction: "ltr",
          display: "flex",
          padding: "0.5rem",
          flexWrap: "wrap",
        }}
        onScroll={({ scrollOffset }) => {
          // 스크롤 위치가 끝에 도달했는지 확인하여 다음 페이지 로드
          if (
            scrollOffset + window.innerHeight >= itemCount * itemHeight &&
            hasNextPage
          ) {
            fetchNextPage();
          }
        }}
      >
        {({ index }) => {
          const { id, title, date, location, host, image } = items[index];

          return (
            <Link
              key={id}
              href={`/event/performances/${id}`}
              className="flex flex-col m-5 w-3/12 min-w-[200px]"
            >
              <Card.Title>{title}</Card.Title>
              <Card.Img src={image} alt={"Card 이미지"} />
              <Card.Author
                date={formatDate(date)}
                name={host}
                location={location}
              />
            </Link>
          );
        }}
      </List>
      {/* {data?.pages.map((page) =>
        page.data.map(({ id, title, date, location, host, image }) => (
          <Link
            key={id}
            href={`/event/performances/${id}`}
            className="flex flex-col m-5 w-3/12 min-w-[200px]"
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
      )} */}
      {/* <div ref={loaderRef} className="h-8" /> */}
      {isFetchingNextPage && <p>로딩 중입니다...</p>}
    </>
  );
}
