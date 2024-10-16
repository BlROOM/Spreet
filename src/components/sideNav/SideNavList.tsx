import { ReactNode } from "react";

type SidebarList = {
  children: ReactNode;
};
export default function SideNavList({ children }: SidebarList) {
  return (
    <aside className="flex flex-col align-top max-w-[300px] flex-shrink-0">
      <nav>
        <ul>{children}</ul>
      </nav>
    </aside>
  );
}
