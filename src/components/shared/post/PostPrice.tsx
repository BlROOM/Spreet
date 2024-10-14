type PostPrice = {
  price: number; // 기본 가격
  discountedPrice?: number; // 할인된 가격
  description?: string; // 할인 설명 (예: "30% 할인")
};

export default function PostPrice({
  price,
  discountedPrice,
  description,
}: PostPrice) {
  const hasDiscount = discountedPrice !== null;
  const displayPrice = discountedPrice ?? price;
  const isFree = price === 0;
  const formattedDescription = description?.replace(/원,/g, "원,\n") || "";

  return (
    <div className="flex gap-2 items-center justify-end text-grayscale-100">
      {hasDiscount ? (
        <>
          {/* 할인 설명이 있으면 표시 */}
          <span className="text-lg flex-1 text-gray-500 whitespace-pre-wrap">
            ({formattedDescription})
          </span>
          {/* 할인된 가격 및 원래 가격 */}
          <div className="flex items-center gap-4 ml-2">
            <span className="text-lg line-through whitespace-nowrap">
              {price} 원
            </span>
            <span className="text-2xl font-bold text-redpoint-500  whitespace-nowrap ">
              {discountedPrice} 원
            </span>
          </div>
        </>
      ) : (
        // 할인 없을 경우 가격 표시 또는 무료 처리
        <span className="text-2xl font-bold">
          {isFree ? "무료" : `${displayPrice}원`}
        </span>
      )}
    </div>
  );
}
