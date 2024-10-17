import { ReactNode } from "react";
import { useSideNav } from "./SideNavMain";
import Link from "next/link";
import Button from "../shared/Button";

type SidebarBaseItemProps = {
  children: ReactNode;
  path: string;
  className?: string;
};

export default function SideNavtem({
  children,
  path,
  className,
}: SidebarBaseItemProps) {
  const { pathname } = useSideNav();
  const selected = pathname === path;
  return (
    <li className={`max-w-[200px] px-4 py-1 min-h-12 flex justify-end `}>
      <Link href={path}>
        <Button
          className={`relative ${className} ${
            selected ? "text-redpoint-400" : "text-grayscale-100"
          }`}
        >
          {selected && (
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
