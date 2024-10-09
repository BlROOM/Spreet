import { ReactNode } from "react";

type Wrapper = {
  children: ReactNode;
  className: string;
};
export default function Wrapper({ children, className }: Wrapper) {
  return <div className={className}>{children}</div>;
}
