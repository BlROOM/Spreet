"use client";
import Post from "../shared/post/inddex";

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

    // 형식에 맞게 날짜를 다시 조합
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
  ];
  return (
    <Post>
      {postData.map(({ id, title, date, location, name, alt, src }) => (
        <div key={id} className="flex flex-col mx-6">
          <Post.Title>{title}</Post.Title>
          <Post.Img src={src} alt={alt} />
          <Post.Author date={date} name={name} location={location} />
        </div>
      ))}
    </Post>
  );
}
