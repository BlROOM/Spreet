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
import LoadingSpinner from "./loading/LoadingSpinner";
import { ITEM_HEIGHT, ITEM_WIDTH, SCREEN_WIDTH } from "@/constants/dimensions";
import SkeletonEventList from "./skeleton/SkeletonEventList";
import formatDate from "@/utils/formatDate";
import useWindowSize from "@/hooks/useWindowSize";
interface MakeItemProps {
  columnIndex: number;
  rowIndex: number;
  style: React.CSSProperties;
}

// const getColumnCount = (width: number) => {
//   console.log("width", width);
//   if (width < 640) return 1;
//   if (width < 1100) return 2;
//   // if (width < 1280) return 3;
//   // if (width < 1450) return 4;
//   return 3; // xl: 1280px 이상
// };

export default function EventsList() {
  const category = useEventCategory();
  const windowSize = useWindowSize();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfinitePostQuery(category);

  const items = useMemo(() => {
    return data?.pages.flatMap((page) => page.data) || []; //데이터 없을 경우 처리
  }, [data]);

  const itemCount = items.length;
  const makeItem = useCallback(
    ({ columnIndex, rowIndex, style }: MakeItemProps) => {
      const itemIndex =
        columnIndex + rowIndex * Math.floor(SCREEN_WIDTH / ITEM_WIDTH);
      // if (!windowSize) return null;
      // const columnCount = getColumnCount(windowSize.width);

      // const itemIndex = columnIndex + rowIndex * columnCount;

      // console.log(
      //   `itemIndex: ${itemIndex}, columnIndex: ${columnIndex}, rowIndex: ${rowIndex}, columnCount : ${columnCount} `
      // );

      if (itemIndex >= itemCount) return null;
      const { id, title, date, location, host, image } = items[itemIndex];
      return (
        <div style={style}>
          <Link key={id} href={`/event/performances/${id}`}>
            <Card>
              <Card.Title>{title}</Card.Title>
              <Card.Img src={image} alt={"Card 이미지"} />
              <Card.Author
                date={formatDate(date)}
                name={host}
                location={location}
              />
            </Card>
          </Link>
        </div>
      );
    },
    [itemCount, SCREEN_WIDTH]
    // [itemCount, windowSize]
  );

  const loaderRef = useRef<HTMLDivElement | null>(null);

  useInfiniteScroll(loaderRef, {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  });

  if (isLoading) return <SkeletonEventList />;
  return (
    <Wrapper className="relative p-2 flex flex-wrap h-[80vh] w-full max-w-[1280px]">
      <AutoSizer>
        {({ height, width }) => {
          // const columnCount = getColumnCount(width); // 너비에 따른 열 수

          return (
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
          );
        }}
      </AutoSizer>
      {isFetchingNextPage && (
        <div className="absolute left-1/2 bottom-2 w-1/12 transform -translate-x-1/2">
          <LoadingSpinner />
        </div>
      )}
      <div ref={loaderRef} className="absolute left-1/2 bottom-2 h-8" />
    </Wrapper>
  );
}
