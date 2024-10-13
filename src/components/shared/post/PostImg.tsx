import Image from "next/image";
import { ReactNode } from "react";

type PostImg = {
  src: string;
  alt: string;
  className?: string;
  children?: ReactNode;
};

export default function PostImg({ src, alt, className, children }: PostImg) {
  return (
    <div className="relative">
      <Image
        src={src}
        alt={alt}
        width={200}
        height={100}
        className={className}
      />
      {children}
    </div>
  );
}
