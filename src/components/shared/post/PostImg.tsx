import Image from "next/image";
import { ReactNode } from "react";

type PostImg = {
  width?: number;
  height?: number;
  src: string;
  alt: string;
  className?: string;
  children?: ReactNode;
};

export default function PostImg({
  src,
  alt,
  width = 200,
  height = 200,
  className,
  children,
  ...props
}: PostImg) {
  return (
    <div className="relative">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        {...props}
      />
      {children}
    </div>
  );
}
