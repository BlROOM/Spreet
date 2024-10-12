export default function formatDate(date: Date) {
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "short",
  };

  // 'ko-KR' 로케일을 사용하여 한국어 형식으로 변환
  const formattedDate = new Intl.DateTimeFormat("ko-KR", options as any).format(
    date
  );

  const [year, month, day, weekday] = formattedDate
    .replaceAll(" ", "")
    .split(".")
    .filter(Boolean);

  return `${year}.${month}.${day} ${weekday}`;
}
