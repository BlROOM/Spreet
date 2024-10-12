"use client";
import Link from "next/link";
import Card from "../shared/card/inddex";

export default function Performances() {
  function formatDate(date: Date) {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      weekday: "short",
    };

    // 'ko-KR' 로케일을 사용하여 한국어 형식으로 변환
    const formattedDate = new Intl.DateTimeFormat(
      "ko-KR",
      options as any
    ).format(date);

    const [year, month, day, weekday] = formattedDate
      .replaceAll(" ", "")
      .split(".")
      .filter(Boolean);

    return `${year}.${month}.${day} ${weekday}`;
  }
  const postData = [
    {
      id: 1,
      title: "첫번째 포스트입니다.",
      date: formatDate(new Date()),
      location: "장소 테스트 입니다",
      name: "테스터2",
      alt: "Tailwind CSS chat bubble component",
      src: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    },
    {
      id: 2,
      title: "두번째 포스트입니다.",
      date: formatDate(new Date()),
      location: "장소 테스트 입니다",
      name: "테스터2",
      alt: "Tailwind CSS chat bubble component",
      src: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    },
    {
      id: 3,
      title: "세번째 포스트입니다.",
      date: formatDate(new Date()),
      location: "장소 테스트 입니다",
      name: "테스터2",
      alt: "Tailwind CSS chat bubble component",
      src: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    },
    {
      id: 4,
      title: "네번째 포스트입니다.",
      date: formatDate(new Date()),
      location: "장소 테스트 입니다",
      name: "테스터4",
      alt: "Tailwind CSS chat bubble component",
      src: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    },
    {
      id: 5,
      title: "다섯번째 포스트입니다.",
      date: formatDate(new Date()),
      location: "장소 테스트 입니다",
      name: "테스터5",
      alt: "Tailwind CSS chat bubble component",
      src: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    },
  ];
  return (
    <Card>
      {postData.map(({ id, title, date, location, name, alt, src }) => (
        <Link
          key={id}
          href={`/event/performances/${id}`}
          className="flex flex-col mx-6 w-1/4"
        >
          <Card.Title>{title}</Card.Title>
          <Card.Img src={src} alt={alt} />
          <Card.Author date={date} name={name} location={location} />
        </Link>
      ))}
    </Card>
  );
}
