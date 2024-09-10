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
    router.push(href);
  };
  return (
    <Link className={`link ${className}`} onClick={onClick} href="#">
      {children}
    </Link>
  );
}
