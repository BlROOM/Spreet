import Image from "next/image";

type PostImageProps = {
  src: string;
  alt: string;
};

export default function PostImage({ src, alt }: PostImageProps) {
  return <Image src={src} alt={alt} width={100} height={100} />;
}
