import { sideNavItems } from "@/constants/path";
import SideNav from "./sideNav";

export default function SideBar() {
  return (
    <SideNav>
      <SideNav.List>
        {sideNavItems.map(({ id, label, path, subNav }) => (
          <div key={id}>
            <SideNav.item path={path} className="text-2xl px-3 ">
              {label}
            </SideNav.item>
            {subNav &&
              subNav.map(({ id: subId, label: subLabel, path: subPath }) => (
                <SideNav.item
                  path={subPath}
                  key={subId}
                  className="text-xl px-3"
                >
                  {subLabel}
                </SideNav.item>
              ))}
          </div>
        ))}
      </SideNav.List>
    </SideNav>
  );
}
