import { ReactNode } from "react";

type CardTitle = {
  children: ReactNode;
};

export default function CardTitle({ children }: CardTitle) {
  return <h4 className="text-lg text-grayscale-100 truncate">{children}</h4>;
}
