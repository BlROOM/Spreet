import { useEffect, useState } from "react";

const useDragCarousel = (
  carouselLength: number,
  ref: React.RefObject<HTMLDivElement>,
  setCurrentSlide: (current: number) => void
) => {
  // drag state
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [endPosition, setEndPosition] = useState(0);
  const ITEM_WIDTH = 1280; // 각 아이템의 너비
  const moveTowardX = (movedDistance: number) => {
    const totalCarouselWidth = ITEM_WIDTH * carouselLength;
    const [minPosition, maxPosition] = [-totalCarouselWidth + ITEM_WIDTH, 0];

    if (movedDistance < minPosition) return minPosition;
    if (movedDistance > maxPosition) return maxPosition;
    return movedDistance;
  };

  const snapToClosestItem = (movedDistance: number) => {
    // 가장 가까운 아이템 위치로 이동
    const closestItemPosition =
      Math.round(movedDistance / ITEM_WIDTH) * ITEM_WIDTH;
    return closestItemPosition;
  };

  const updateCurrentSlide = (position: number) => {
    const slideIndex = Math.round(-position / ITEM_WIDTH) + 1;
    setCurrentSlide(slideIndex);
  };

  const handleMouseDown = (event: MouseEvent) => {
    event.preventDefault();
    setStartPosition(event.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (!isDragging) return;
    const movedDistance = moveTowardX(
      endPosition - startPosition + event.clientX
    );
    if (ref.current)
      ref.current.style.transform = `translateX(${movedDistance}px)`;
  };

  const handleMouseUp = (event: MouseEvent) => {
    if (!isDragging) return;

    const currentMousePosition = event.clientX;
    // 드래그 후 이동 거리 계산
    const movedDistance = moveTowardX(
      endPosition + (currentMousePosition - startPosition)
    ); // 드래그 후 이동 거리 계산

    const closestItemPosition = snapToClosestItem(movedDistance); // 가장 가까운 아이템 위치로 정렬
    setEndPosition(closestItemPosition);

    if (ref.current) {
      ref.current.style.transform = `translateX(${closestItemPosition}px)`;
    }
    updateCurrentSlide(closestItemPosition);

    setIsDragging(false);
  };

  useEffect(() => {
    const carouselItems = ref.current;
    // handleMouseDown 이벤트를 ref에 걸어준 이유는
    // 특정 DOM 요소에서만 드래그 기능을 활성화하기 위함
    //  드래그를 시작하는 이벤트가 캐러셀 내부의 특정 영역
    // (예: carouselItemsRef.current에 할당된 요소)에서만 발생
    carouselItems?.addEventListener("mousedown", handleMouseDown);
    window?.addEventListener("mousemove", handleMouseMove);
    window?.addEventListener("mouseup", handleMouseUp);

    return () => {
      carouselItems?.addEventListener("mousedown", handleMouseDown);
      window?.removeEventListener("mousemove", handleMouseMove);
      window?.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return {};
};

export default useDragCarousel;
