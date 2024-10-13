type PostPrice = {
  price: number; // 기본 가격
  discount?: {
    discountedPrice: number; // 할인된 가격
    description: string; // 할인 설명 (예: "30% 할인")
  };
};

export default function PostPrice({ price, discount }: PostPrice) {
  return (
    <div className="flex items-center justify-end text-grayscale-100">
      {discount ? (
        <>
          <span className="text-lg text-gray-500 whitespace-pre-wrap">
            ({discount.description})
          </span>
          <div className="flex items-center gap-4 ml-2">
            <span className="text-lg line-through">{price} 원</span>
            <span className="text-2xl font-bold text-redpoint-500 ">
              {discount.discountedPrice} 원
            </span>
          </div>
        </>
      ) : (
        <span className="text-2xl font-bold">{price} 원</span>
      )}
    </div>
  );
}