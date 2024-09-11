"use client";

import {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import usePathNameStore from "@/store/usePathNameStore";

export type NavigationDirection = "forward" | "backward";

type RouterWrapperContextType = {
  direction: NavigationDirection;
  currentPath: string;
  push: (url: string) => void;
  back: (url: string) => void;
  prevPath: string;
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
  const { addPath, hasVisited, removePath, setPrevPath, prevPath } =
    usePathNameStore();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storage = window.sessionStorage;

      // 이전 경로 가져오기
      const storedPrevPath = storage.getItem("currentPath") || "/";
      setPrevPath(storedPrevPath);

      // 현재 경로 저장
      storage.setItem("prevPath", storedPrevPath);
      storage.setItem("currentPath", window.location.pathname);
    }
  }, [currentPath, setPrevPath]);
  // 이전 경로 가져오기

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

  const back = useCallback(
    (url: string) => {
      setDirection("backward");
      router.back();
    },
    [router]
  );

  return (
    <RouterWrapperContext.Provider
      value={{ direction, push, back, currentPath, prevPath }}
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
