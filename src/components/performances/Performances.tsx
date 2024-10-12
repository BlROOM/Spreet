import { postData } from "@/constants/postData";
import Link from "next/link";
import Card from "../shared/card/inddex";

export default function Performances() {
  return (
    <Card>
      {postData.map(({ id, title, date, location, host, image }, idx) => (
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
    </Card>
  );
}
