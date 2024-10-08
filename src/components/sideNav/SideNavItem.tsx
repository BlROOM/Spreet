import { ReactNode } from "react";
import ExtendedLink from "../ExtendedLink";
import Button from "../shared/Button";
import { useSideNav } from "./SideNavMain";

type SidebarItem = {
  children: ReactNode;
  path: string;
  id: string;
};
export default function SidebarItem({ children, path, id }: SidebarItem) {
  const { selectedItem } = useSideNav(); // 선택된 항목 가져오기

  return (
    <li className="w-[180px]">
      <ExtendedLink href={path}>
        <Button
          className={`${
            selectedItem === id ? "text-redpoint-400" : "text-grayscale-100"
          }  font-semibold text-2xl`}
        >
          {children}
        </Button>
      </ExtendedLink>
    </li>
  );
}
