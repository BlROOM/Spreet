"use client";
import Link from "next/link";
import Card from "./shared/card/.";
import { useQuery } from "@tanstack/react-query";
import { getPerformances } from "@/app/service/getPerformances";
import { TPost } from "@/type/post";

export default function Performances() {
  const { data, error, isLoading } = useQuery<TPost[]>({
    queryKey: ["performances"],
    queryFn: getPerformances,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <>
      {data?.map(({ id, title, date, location, host, image }) => (
        <Link
          key={id}
          href={`/event/performances/${id}`}
          className="flex flex-col mx-6 w-1/4"
        >
          <Card.Title>{title}</Card.Title>
          <Card.Img src={image} alt={"Card 이미지"} />
          <Card.Author date={date} name={host} location={location} />
        </Link>
      ))}
    </>
  );
}
