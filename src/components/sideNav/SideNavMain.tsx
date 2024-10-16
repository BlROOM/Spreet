"use client";

import { sideNavItems } from "@/constants/path";
import { usePathname } from "next/navigation";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type SideNavContext = {
  selectedItem: string | null;
  setSelectedItem: (item: string) => void;
};

type SideNavMain = {
  children: ReactNode;
};

export const SideNavContext = createContext<SideNavContext | null>(null);
export default function SidebarMain({ children }: SideNavMain) {
  const pathname = usePathname();

  useEffect(() => {
    const currentItem = sideNavItems.find((item) =>
      pathname.includes(item.path)
    );
    setSelectedItem(currentItem ? currentItem.id : null);
  }, [pathname]);

  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  return (
    <SideNavContext.Provider value={{ selectedItem, setSelectedItem }}>
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
