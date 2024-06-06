const handleClickSlide = (
    direction: 'left' | 'right',
    dataLength: number,
    sectorRef: any,
    slideNum: number,
    sectorTransX: any,
  ): any => {
    if (!sectorRef) return;
    const currentX = sectorRef.current.getBoundingClientRect().x;
    const listRef_NodeWidth =  sectorRef.current.childNodes[0].getBoundingClientRect().width;
    //슬라이드에 넣은 데이터 배열의 길이가 0보다 크다면
    //ref속성으로 이어진 돔요소 spreetRef에 childNode에 제일 첫번째
    //요소의 넓이값을 세팅
    // console.log(
    //   '노드의 넓이값',
    //   sectorRef.current.childNodes[0].getBoundingClientRect().width,
    // );
      console.log(
        '현재 current',
        currentX,
        listRef_NodeWidth,
      );
    // 슬라이드 되는 박스 하나의 넓이값 * 3 (전체 넓이를 제한하는 값)
    const slideDistance = listRef_NodeWidth * 3;
    //버튼으로 눌렀을때 변화하는 현재넓이제한값
    let calculate_distance = 0;
    console.log('슬라이드 전체넓이 값?', slideDistance);
    if (direction === 'left') {
      calculate_distance =
        // currentX + (slideDistance / dataLength) * slideNum;
        currentX + (slideDistance / dataLength);
      console.log('현재calculate_distance', calculate_distance);
      if (sectorTransX < calculate_distance) {
        console.log('left버튼"', sectorTransX, calculate_distance);
        calculate_distance = 0;
      }
    }
    if (direction === 'right') {
      const calculationValue = (slideDistance / dataLength);
      // const calculationValue = (slideDistance / dataLength) * slideNum;
      // const calculationValue: number =
      // (listRef_NodeWidth / dataList.length) * slideNum;
      // calculate_distance = currentX - calculationValue; 
      calculate_distance -= (calculationValue * slideNum); 
      // console.log('현재 x :', currentX, '기준위치:',  calculationValue, '변경된 위치:', calculate_distance);
      // if (-slideDistance > calculate_distance) {
      //   calculate_distance = 0;
      // }
      if (-slideDistance > calculate_distance - calculationValue) {
        calculate_distance = 0;
      }
    }
    sectorRef.current.style.transform = `translateX(${calculate_distance}px)`;
  };
  
  export default handleClickSlide;
  