import Link from "next/link";
import Card from "./shared/card/.";
import { TPost } from "@/type/post";

type Performances = {
  dataList: TPost[];
};

export default function Performances({ dataList }: Performances) {
  return (
    <>
      {dataList.map(({ id, title, date, location, host, image }) => (
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
