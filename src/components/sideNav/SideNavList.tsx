import { ReactNode } from "react";

type SidebarList = {
  children: ReactNode;
};
export default function SidebarList({ children }: SidebarList) {
  return (
    <aside className="table-cell w-[180px] align-top max-w-[180px]">
      <nav>
        <ul>{children}</ul>
      </nav>
    </aside>
  );
}
