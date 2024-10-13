import { navItems } from "@/constants/path";
import SideNav from "./sideNav";

export default function SideBar() {
  return (
    <SideNav>
      <SideNav.List>
        {navItems.map(({ id, label, path }) => (
          <SideNav.item path={path} key={id} id={id}>
            {label}
          </SideNav.item>
        ))}
      </SideNav.List>
    </SideNav>
  );
}
