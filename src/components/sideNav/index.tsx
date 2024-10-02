import SidebarItem from "./SideNavItem";
import SidebarList from "./SideNavList";
import SidebarMain from "./SideNavMain";

const SideNav = Object.assign(SidebarMain, {
  item: SidebarItem,
  List: SidebarList,
});

export default SideNav;
