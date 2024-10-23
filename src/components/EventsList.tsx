"use client";
import Link from "next/link";
import Card from "@/components/shared/card/.";
import { useInfinitePostQuery } from "@/hooks/useInfinitePost";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import { useCallback, useEffect, useMemo, useRef } from "react";
import { FixedSizeGrid as Grid } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

import useEventCategory from "@/hooks/useEventCategory";
import Wrapper from "./shared/Wrapper";
import LoadingSpinner from "./loading/LoadingSpinner";
interface MakeItemProps {
  columnIndex: number;
  rowIndex: number;
  style: React.CSSProperties;
}

export default function EventsList() {
  const category = useEventCategory();

  const {
    data,
    fetchNextPage,
    refetch,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useInfinitePostQuery(category);

  useEffect(() => {
    refetch(); // useInfinitePostQuery의 refetch 메서드 사용
  }, []);

  const items = useMemo(() => {
    return data?.pages.flatMap((page) => page.data) || []; //데이터 없을 경우 처리
  }, [data]);

  const itemCount = items.length;

  const SCREEN_WIDTH = 1280;
  const ITEM_HEIGHT = 420; // 카드 높이에 맞게 조정 필요
  const ITEM_WIDTH = 320; // 카드 너비
  const makeItem = useCallback(
    ({ columnIndex, rowIndex, style }: MakeItemProps) => {
      const itemIndex =
        columnIndex + rowIndex * Math.floor(SCREEN_WIDTH / ITEM_WIDTH);
      // console.log("items", items);
      // console.log("itemCount", itemCount);
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
    [items, itemCount, SCREEN_WIDTH]
  );

  const loaderRef = useRef<HTMLDivElement | null>(null);

  useInfiniteScroll(loaderRef, {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  });

  if (isLoading) return <div>로딩중......</div>;

  return (
    <Wrapper className="relative p-2 flex w-[1280px] sm:max-w-4xl lg:max-w-5xl xl:max-w-6xl h-[80vh]">
      <AutoSizer>
        {({ height, width }) => (
          <Grid
            columnCount={Math.floor(width / ITEM_WIDTH)}
            columnWidth={ITEM_WIDTH}
            height={height}
            rowCount={Math.ceil(itemCount / Math.floor(width / ITEM_WIDTH))}
            rowHeight={ITEM_HEIGHT}
            width={width}
            itemData={[items, Math.floor(width / ITEM_WIDTH)]}
            className="no-scrollbar"
          >
            {makeItem}
          </Grid>
        )}
      </AutoSizer>
      {isFetchingNextPage && (
        <div className="absolute left-1/2 bottom-2 w-1/12 transform -translate-x-1/2">
          <LoadingSpinner />
        </div>
      )}
      <div ref={loaderRef} className="bsolute left-1/2 bottom-2 h-8" />
    </Wrapper>
  );
}
