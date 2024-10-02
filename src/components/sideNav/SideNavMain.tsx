import { navItems } from "@/constants/path";
import { createContext, ReactNode, useContext, useState } from "react";

type SideNavItem = {
  id: string;
  label: string;
  path: string;
};

type SideNavContext = {
  items: SideNavItem[];
  selectedItem: string | null;
  setItems: (items: SideNavItem[]) => void;
  setSelectedItem: (item: string) => void;
};

type SideNavMain = {
  children: ReactNode;
};

export const SideNavContext = createContext<SideNavContext | null>(null);
export default function SidebarMain({ children }: SideNavMain) {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [items, setItems] = useState<SideNavItem[]>(navItems);
  return (
    <SideNavContext.Provider
      value={{ selectedItem, items, setSelectedItem, setItems }}
    >
      {children}
    </SideNavContext.Provider>
  );
}

export const useSideNav = () => {
  const context = useContext(SideNavContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};
