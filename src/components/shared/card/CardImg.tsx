import Image from "next/image";

type CardImage = {
  src: string;
  alt: string;
};

export default function CardImage({ src, alt }: CardImage) {
  return <Image src={src} alt={alt} width={100} height={100} />;
}
