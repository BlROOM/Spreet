import { ReactNode } from "react";

type CardMain = {
  children: ReactNode;
};

export default function CardrMain({ children }: CardMain) {
  return <>{children}</>;
}
