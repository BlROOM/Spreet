import { ReactNode } from "react";

type PostTitle = {
  children: ReactNode;
};

export default function PostTitle({ children }: PostTitle) {
  return (
    <h2 className="text-2xl text-grayscale-100 whitespace-pre-wrap max-h-24 truncate">
      {children}
    </h2>
  );
}
