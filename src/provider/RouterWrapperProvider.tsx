"use client";

import { createContext, useState, useCallback, useContext } from "react";
import { usePathname, useRouter } from "next/navigation";
import usePathNameStore from "@/store/usePathNameStore";

export type NavigationDirection = "forward" | "backward";

type RouterWrapperContextType = {
  direction: NavigationDirection;
  currentPath: string;
  push: (url: string) => void;
  back: () => void;
};

const RouterWrapperContext = createContext<RouterWrapperContextType | null>(
  null
);

export function RouterWrapperProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [direction, setDirection] = useState<NavigationDirection>("forward");
  const router = useRouter();
  const currentPath = usePathname();
  const { addPath, hasVisited, removePath } = usePathNameStore();

  const push = useCallback(
    (url: string) => {
      if (hasVisited(url)) {
        setDirection("backward");
        removePath(url);
        router.push(url);
      } else {
        setDirection("forward");
        addPath(url);
        router.push(url);
      }
    },
    [router, addPath, hasVisited, removePath]
  );

  // const push = useCallback(
  //   (url: string) => {
  //     setDirection("forward");
  //     router.push(url);
  //   },
  //   [router]
  // );

  const back = useCallback(() => {
    setDirection("backward");
    router.back();
  }, [router]);

  return (
    <RouterWrapperContext.Provider
      value={{ direction, push, back, currentPath }}
    >
      {children}
    </RouterWrapperContext.Provider>
  );
}

export function useRouterWrapper() {
  const context = useContext(RouterWrapperContext);
  if (!context) {
    throw new Error(
      "useRouterWrapper must be used within a RouterWrapperProvider"
    );
  }
  return context;
}
