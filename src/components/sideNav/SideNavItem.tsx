import { ReactNode } from "react";
import Button from "../shared/Button";
import { useSideNav } from "./SideNavMain";
import Link from "next/link";

type SidebarItem = {
  children: ReactNode;
  path: string;
  id: string;
};
export default function SidebarItem({ children, path, id }: SidebarItem) {
  const { selectedItem } = useSideNav();

  return (
    <li className="relative w-[180px] px-4 py-1 min-h-12 flex align-center">
      <Link href={path}>
        <Button
          className={` ${
            selectedItem === id ? "text-redpoint-400" : "text-grayscale-100"
          }  font-semibold text-2xl`}
        >
          {selectedItem === id && (
            <span className="absolute left-0 top-0 h-4/5 w-[3px] bg-redpoint-400" />
          )}
          {children}
        </Button>
      </Link>
    </li>
  );
}
