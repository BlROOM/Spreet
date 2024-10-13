export type TPost = {
  id: number;
  title: string; // 제목
  host: string; // 주최
  location: string; // 장소
  date: string; // 일시
  genre: string; // 장르
  admissionFee: number; // 관람비/참가비
  content: string; // 내용
  image: string; // 이미지 URL
  duration: string; // 진행 기간
  ageRating: string; // 이용 등급
  operatingHours: string; // 운영 시간
  notice: string; // 공지사항
  price: number; // 기본 가격
  discount?: {
    discountedPrice: number; // 할인된 가격
    description: string; // 할인 설명 (예: "30% 할인")
  };
};
