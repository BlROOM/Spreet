"use client";
import Link from "next/link";
import { useRouterWrapper } from "@/provider/RouterWrapperProvider";

type ExtendedLink = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function ExtendedLink({
  href,
  children,
  className,
}: ExtendedLink) {
  const router = useRouterWrapper();

  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (router.currentPath === href) return;
    router.push(href);
  };
  // console.log(
  //   "extend",
  //   href,
  //   router.currentPath,
  //   href.includes(router.currentPath)
  // );
  return (
    <Link
      className={`link ${className} ${
        href.includes(router.currentPath) && "text-redpoint-500"
      }`}
      onClick={onClick}
      href="#"
    >
      {children}
    </Link>
  );
}
