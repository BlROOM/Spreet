import { ReactNode } from "react";

type PostTitle = {
  children: ReactNode;
};

export default function PostTitle({ children }: PostTitle) {
  return <h2 className="text-2xg text-grayscale-100">{children}</h2>;
}
