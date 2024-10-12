import Image from "next/image";

type PostImg = {
  src: string;
  alt: string;
};

export default function PostImg({ src, alt }: PostImg) {
  return <Image src={src} alt={alt} width={100} height={100} />;
}
