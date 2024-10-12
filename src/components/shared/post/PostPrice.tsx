type PostPrice = {
  price: number; // 기본 가격
  discount?: {
    discountedPrice: number; // 할인된 가격
    description: string; // 할인 설명 (예: "30% 할인")
  };
};

export default function PostPrice({ price, discount }: PostPrice) {
  return (
    <div className="flex justify-between text-grayscale-100">
      {discount ? (
        <>
          <span className="text-sm text-gray-500">
            ({discount.description})
          </span>
          <span className="font-bold text-redpoint-500">
            {discount.discountedPrice} 원
          </span>
        </>
      ) : (
        <span className="font-bold">{price} 원</span>
      )}
    </div>
  );
}
