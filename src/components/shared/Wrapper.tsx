import { ReactNode } from "react";

type Wrapper = {
  children: ReactNode;
};
export default function Wrapper({ children }: Wrapper) {
  return <div className="p-2">{children}</div>;
}
