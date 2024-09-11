"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  NavigationDirection,
  useRouterWrapper,
} from "@/provider/RouterWrapperProvider";
import {
  CLASS_PATHNAME,
  EVENT_PATHNAME,
  MAIN_PATHNAME,
  SOCIAL_PATHNAME,
} from "@/constants/path";
import Main from "@/components/main/Main";
import Class from "@/components/Class";
import Social from "@/components/Social";
import Event from "@/components/Event";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { direction, prevPath } = useRouterWrapper();
  console.log("----prevPath", prevPath);
  return (
    <main className="relative justify-center flex-col gap-10 w-[1280px] m-auto pt-[96px]">
      <motion.div
        key={pathname}
        custom={direction}
        variants={{
          enter: (direction: NavigationDirection) => ({
            x: direction === "forward" ? "100vw" : "-100vw",
          }),
          center: {
            x: 0,
          },
        }}
        initial={"enter"}
        animate={"center"}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {children}
      </motion.div>

      <motion.div
        key={`cache-${pathname}`}
        custom={direction}
        variants={{
          center: {
            x: 0,
          },
          exit: (direction: NavigationDirection) => ({
            x: direction === "forward" ? "-100vw" : "100vw",
          }),
        }}
        initial={"center"}
        animate={"exit"}
        transition={{ duration: 1, ease: "easeInOut" }}
        style={{
          position: "absolute",
          width: "100vw",
        }}
      >
        {prevPath === MAIN_PATHNAME && <Main />}
        {prevPath === CLASS_PATHNAME && <Class />}
        {prevPath === SOCIAL_PATHNAME && <Social />}
        {prevPath === EVENT_PATHNAME && <Event />}
      </motion.div>
    </main>
  );
}
