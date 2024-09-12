const handleDotClickSlide = (
  dataLength: number,
  sectorRef: React.RefObject<HTMLDivElement>,
  slideNum: number
): any => {
  if (!sectorRef.current) return;
  const firstChild = sectorRef.current.childNodes[0] as HTMLElement;

  const listRef_NodeWidth = firstChild.getBoundingClientRect().width;

  const slideDistance = listRef_NodeWidth * 3; // 총 슬라이드 너비
  const calculationValue = slideDistance / dataLength; // 각 슬라이드 별 이동 거리

  // 이동할 거리 계산
  let calculate_distance = -(calculationValue * (slideNum - 1));

  // 슬라이드 이동
  sectorRef.current.style.transform = `translateX(${calculate_distance}px)`;
};

export default handleDotClickSlide;
