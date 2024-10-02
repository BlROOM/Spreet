import { ReactNode } from "react";

type SidebarItem = {
  children: ReactNode;
};
export default function SidebarItem({ children }: SidebarItem) {
  return <li>{children}</li>;
}
