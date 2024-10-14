import { ReactNode } from "react";

type PostAuthor = {
  children?: ReactNode;
  name: string;
  date: string;
  location: string;
};

export default function CardAuthor({
  name,
  date,
  location,
  children,
}: PostAuthor) {
  return (
    <div className="text-base text-grayscale-500 flex flex-col ">
      <p className="truncate">주최자: {name}</p>
      <p className="truncate">일시: {date}</p>
      <p className="truncate">장소: {location}</p>
      {children}
    </div>
  );
}
