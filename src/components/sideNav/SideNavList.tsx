import { ReactNode } from "react";

type SidebarList = {
  children: ReactNode;
};
export default function SideNavList({ children }: SidebarList) {
  return (
    <aside className="flex flex-col align-top max-w-[300px] flex-shrink-0 pt-10">
      <div className="w-[200px] relative h-screen-90">
        <nav className="fixed">
          <ul>{children}</ul>
        </nav>
      </div>
    </aside>
  );
}
