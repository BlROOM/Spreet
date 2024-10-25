"use client";
import Link from "next/link";
import { useRouterWrapper } from "@/provider/RouterWrapperProvider";
import { EVENT_PATHNAME } from "@/constants/path";

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
  const { push, currentPath } = useRouterWrapper();

  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (currentPath === href) return;
    push(href);
  };
  const isActive =
    href === currentPath ||
    (href === EVENT_PATHNAME && href.includes("/event"));
  return (
    <Link
      className={`link ${className} ${
        // 현재경로 navlink 를 통한 경로라면 redpot 색깔 추가
        isActive && "text-redpoint-500"
      }`}
      onClick={onClick}
      href="#"
    >
      {children}
    </Link>
  );
}
