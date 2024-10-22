"use client";
import Link from "next/link";
import Card from "@/components/shared/card/.";
import { useInfinitePostQuery } from "@/hooks/useInfinitePost";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import { useCallback, useMemo, useRef } from "react";
import { FixedSizeGrid as Grid } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

import useEventCategory from "@/hooks/useEventCategory";
import Wrapper from "./shared/Wrapper";
interface MakeItemProps {
  columnIndex: number;
  rowIndex: number;
  style: React.CSSProperties;
}

export default function EventsList() {
  const category = useEventCategory();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfinitePostQuery(category);

  // 데이터가 없을 경우
  const items = useMemo(() => {
    return data?.pages.flatMap((page) => page.data) || [];
  }, [data]); // data가 변경될 때만 재계산
  const itemCount = items.length;

  const itemHeight = 420; // 카드 높이에 맞게 조정 필요
  const itemWidth = 320; // 카드 너비
  const makeItem = useCallback(
    ({ columnIndex, rowIndex, style }: MakeItemProps) => {
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
    },
    [items, itemCount, itemWidth]
  );

  const loaderRef = useRef<HTMLDivElement | null>(null);

  useInfiniteScroll(loaderRef, {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  });

  // console.log("itemcount", itemCount);
  if (isLoading) return <div>로딩중......</div>;

  return (
    <Wrapper className="p-2 flex w-[1280px] sm:max-w-4xl lg:max-w-5xl xl:max-w-6xl h-[80vh]">
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
      </AutoSizer>
      <div ref={loaderRef} className="h-8" />
    </Wrapper>
  );
}
