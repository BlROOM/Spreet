import { ReactNode } from "react";

type PostAuthor = {
  children?: ReactNode;
  name: string;
  date: string;
  location: string;
};

export default function PostAuthor({
  name,
  date,
  location,
  children,
}: PostAuthor) {
  return (
    <div className="text-base text-grayscale-500 flex flex-col ">
      <p>주최자: {name}</p>
      <p>일시: {date}</p>
      <p>장소: {location}</p>
      {children}
    </div>
  );
}
