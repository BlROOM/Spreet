"use client";
import Link from "next/link";
import Card from "@/components/shared/card/.";
import { useQuery } from "@tanstack/react-query";
import { getPerformances } from "@/app/server/getPerformances";
import { TPost } from "@/type/post";
import formatDate from "@/utils/formatDate";

export default function PerformancesList() {
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
          className="flex flex-col m-5 w-3/12"
        >
          <Card.Title>{title}</Card.Title>
          <Card.Img src={image} alt={"Card 이미지"} />
          <Card.Author
            date={formatDate(date)}
            name={host}
            location={location}
          />
        </Link>
      ))}
    </>
  );
}
