import { ReactNode } from "react";

type PostTitle = {
  children: ReactNode;
};

export default function PostTitle({ children }: PostTitle) {
  return <h4 className="text-lg text-grayscale-100">{children}</h4>;
}
