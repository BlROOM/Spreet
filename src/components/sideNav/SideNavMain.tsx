"use client";
import { usePathname } from "next/navigation";
import { createContext, ReactNode, useContext } from "react";

type SideNavContext = {
  pathname: string | null;
};

type SideNavMain = {
  children: ReactNode;
};

export const SideNavContext = createContext<SideNavContext | null>(null);
export default function SidebarMain({ children }: SideNavMain) {
  const pathname = usePathname();

  return (
    <SideNavContext.Provider value={{ pathname }}>
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
