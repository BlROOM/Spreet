import Image, { ImageProps } from "next/image";
import { ReactNode } from "react";

interface PostImg extends ImageProps {
  width?: number;
  height?: number;
  src: string;
  alt: string;
  className?: string;
  children?: ReactNode;
}

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
        // objectFit="cover"
        {...props}
      />
      {children}
    </div>
  );
}
