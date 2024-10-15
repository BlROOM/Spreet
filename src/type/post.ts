export type TPost = {
  id: number;
  title: string; // 제목
  host: string; // 주최
  location: string; // 장소
  date: string; // 일시
  genre: string; // 장르
  content: string; // 내용
  image: string; // 이미지 URL
  duration: string; // 진행 기간
  age_rating: string; // 이용 등급
  operating_hours: string; // 운영 시간
  notice?: string; // 공지사항 (선택적)
  price: number; // 기본 가격
  discounted_price?: number; // 할인된 가격 (선택적)
  discount_description?: string; // 할인 설명 (선택적)
};

export type TPostResponse = {
  data: TPost[];
  meta: {
    currentPage: number;
    totalPages: number;
    hasNextPage: boolean;
  };
};
