import { sideNavItems } from "@/constants/path";
import SideNav from "./sideNav";

export default function SideBar() {
  return (
    <SideNav>
      <SideNav.List>
        {sideNavItems.map(({ id, label, path, subNav }) => (
          <SideNav.item
            path={path}
            key={id}
            id={id}
            className="text-2xl px-3 text-grayscale-100"
          >
            {label}
            {/* {subNav &&
              subNav.map(({ id: subId, label: subLabel, path: subPath }) => (
                <SideNav.subItem path={subPath} key={subId} id={subId}>
                  {subLabel}
                </SideNav.subItem>
              ))} */}
          </SideNav.item>
        ))}
      </SideNav.List>
    </SideNav>
  );
}
