"use client";
import Link from "next/link";
import Card from "@/components/shared/card/.";
import { useRef } from "react";
import { FixedSizeGrid } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import Wrapper from "./shared/Wrapper";
import LoadingSpinner from "./loading/LoadingSpinner";
import { ITEM_HEIGHT, ITEM_WIDTH } from "@/constants/dimensions";
import SkeletonEventList from "./skeleton/SkeletonEventList";
import formatDate from "@/utils/formatDate";
import useInfiniteEventItems from "@/hooks/useInfiniteEventItems";
import { TPost } from "@/type/post";

export default function EventsList() {
  const gridRef = useRef<FixedSizeGrid<any>>(null);

  const {
    items,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    makeItem,
    itemCount,
  } = useInfiniteEventItems({
    renderItem: (item: TPost) => (
      <Link key={item.id} href={`/event/performances/${item.id}`}>
        <Card>
          <Card.Title>{item.title}</Card.Title>
          <Card.Img src={item.image} alt={"Card 이미지"} />
          <Card.Author
            date={formatDate(item.date)}
            name={item.host}
            location={item.location}
          />
        </Card>
      </Link>
    ),
  });
  const handleScroll = ({ scrollTop }: { scrollTop: number }) => {
    // 그리드의 전체 높이 계산
    const scrollHeight = itemCount * ITEM_HEIGHT;
    const clientHeight = gridRef.current ? gridRef.current.props.height : 0;

    // 현재 스크롤 위치가 하단에 가까운지 확인
    if (
      scrollHeight - scrollTop <= clientHeight + 100 && // 100px 미리 로드
      hasNextPage &&
      !isFetchingNextPage
    ) {
      fetchNextPage(); // 다음 페이지 데이터를 가져옴
    }
  };

  if (isLoading) return <SkeletonEventList />;

  return (
    <Wrapper className="relative p-2 flex flex-wrap h-[80vh] w-full max-w-[540px] md:max-w-4xl lg:max-w-6xl">
      <AutoSizer>
        {({ height, width }) => {
          const columnCount = Math.floor(width / ITEM_WIDTH);
          const rowCount = Math.ceil(itemCount / columnCount);
          return (
            <FixedSizeGrid
              ref={gridRef}
              columnCount={columnCount}
              columnWidth={ITEM_WIDTH}
              height={height}
              rowCount={rowCount}
              rowHeight={ITEM_HEIGHT}
              width={width}
              itemData={[items, columnCount]}
              className="no-scrollbar"
              onScroll={handleScroll}
            >
              {makeItem}
            </FixedSizeGrid>
          );
        }}
      </AutoSizer>
      {isFetchingNextPage && (
        <div className="absolute left-1/2 bottom-2 w-1/12 transform -translate-x-1/2">
          <LoadingSpinner />
        </div>
      )}
    </Wrapper>
  );
}
