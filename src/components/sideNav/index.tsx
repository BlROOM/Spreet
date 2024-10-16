import SidebarList from "./SideNavList";
import SidebarMain from "./SideNavMain";
import SideBarItem from "./SideNavItem";

const SideNav = Object.assign(SidebarMain, {
  item: SideBarItem,
  List: SidebarList,
});

export default SideNav;
