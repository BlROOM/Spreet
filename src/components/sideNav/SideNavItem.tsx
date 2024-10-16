import { ReactNode } from "react";
import { useSideNav } from "./SideNavMain";
import Link from "next/link";
import Button from "../shared/Button";

type SidebarBaseItemProps = {
  children: ReactNode;
  path: string;
  className?: string;
  id: string;
};

export default function SideNavtem({
  children,
  path,
  className,
  id,
}: SidebarBaseItemProps) {
  const { selectedItem } = useSideNav();
  return (
    <li className={`max-w-[200px] px-4 py-1 min-h-12 flex align-center `}>
      <Link href={path}>
        <Button className={`relative ${className}`}>
          {selectedItem === id && (
            <span className="absolute left-0 top-0 h-4/5 w-[3px] bg-redpoint-400">
              &nbsp;
            </span>
          )}
          {children}
        </Button>
      </Link>
    </li>
  );
}
