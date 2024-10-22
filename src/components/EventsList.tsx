"use client";
import Link from "next/link";
import Card from "@/components/shared/card/.";
import formatDate from "@/utils/formatDate";
import { useInfinitePostQuery } from "@/hooks/useInfinitePost";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import { useRef } from "react";
import { FixedSizeGrid as Grid } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

import useEventCategory from "@/hooks/useEventCategory";
interface MakeItemProps {
  columnIndex: number;
  rowIndex: number;
  style: React.CSSProperties;
}

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

  const itemHeight = 420; // 카드 높이에 맞게 조정 필요
  const itemWidth = 320; // 카드 너비

  if (isLoading) return <div>로딩중......</div>;

  // 아이템을 만드는 콜백 함수
  const makeItem = ({ columnIndex, rowIndex, style }: MakeItemProps) => {
    const itemIndex =
      columnIndex + rowIndex * Math.floor(window.innerWidth / itemWidth);

    if (itemIndex >= itemCount) return null;

    const { id, title, date, location, host, image } = items[itemIndex];
    return (
      <div style={style}>
        <Link key={id} href={`/event/performances/${id}`}>
          <Card>
            <Card.Title>{title}</Card.Title>
            <Card.Img src={image} alt={"Card 이미지"} />
            <Card.Author date={date} name={host} location={location} />
          </Card>
        </Link>
      </div>
    );
  };

  return (
    <AutoSizer>
      {({ height, width }) => (
        <Grid
          columnCount={Math.floor(width / itemWidth)}
          columnWidth={itemWidth}
          height={height}
          rowCount={Math.ceil(itemCount / Math.floor(width / itemWidth))}
          rowHeight={itemHeight}
          width={width}
          itemData={[items, Math.floor(width / itemWidth)]}
          className="no-scrollbar"
        >
          {makeItem}
        </Grid>
      )}
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
      {/* {isFetchingNextPage && <p>로딩 중입니다...</p>} */}
    </AutoSizer>
  );
}
