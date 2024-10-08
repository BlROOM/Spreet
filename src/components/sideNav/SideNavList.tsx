import { ReactNode } from "react";

type SidebarList = {
  children: ReactNode;
};
export default function SidebarList({ children }: SidebarList) {
  return (
    <aside className="table-cell w-[300px] align-top max-w-[300px]">
      <nav>
        <ul>{children}</ul>
      </nav>
    </aside>
  );
}
