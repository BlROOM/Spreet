import { useCallback, useMemo } from "react";
import useWindowSize from "./useWindowSize"; // 윈도우 사이즈 훅을 가져옵니다.
import { useInfinitePostQuery } from "./useInfinitePost";
import useEventCategory from "./useEventCategory";

interface UseInfiniteEventItems<ItemType> {
  renderItem: (item: ItemType) => JSX.Element;
}

// 가상스크롤 Grid 열 개수 결정 함수
const getColumnCount = (width: number) => {
  if (width <= 720) return 1; // 작은 화면에서는 1열
  if (width <= 900) return 2; // 중간 크기에서는 2열
  return 3; // 그 외에는 3열
};

export default function useInfiniteEventItems<ItemType>({
  renderItem,
}: UseInfiniteEventItems<ItemType>) {
  const category = useEventCategory();
  const windowSize = useWindowSize();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfinitePostQuery(category);

  const items = useMemo(() => {
    return data?.pages.flatMap((page) => page.data) || [];
  }, [data]);

  const itemCount = items.length;

  const makeItem = useCallback(
    ({
      columnIndex,
      rowIndex,
      style,
    }: {
      columnIndex: number;
      rowIndex: number;
      style: React.CSSProperties;
    }) => {
      if (!windowSize) return null;

      const columnCount = getColumnCount(windowSize.width); // 현재 너비에 따라 열 개수 결정
      const itemIndex = rowIndex * columnCount + columnIndex;

      if (itemIndex >= itemCount) return null;

      return (
        <div style={style}>{renderItem(items[itemIndex] as ItemType)}</div>
      );
    },
    [itemCount, items, renderItem, windowSize]
  );

  return {
    items,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    makeItem,
    itemCount,
  };
}
