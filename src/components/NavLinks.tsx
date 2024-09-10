"use client";

import {
  CLASS_PATHNAME,
  EVENT_PATHNAME,
  MAIN_PATHNAME,
} from "@/constants/path";
import ExtendedLink from "./ExtendedLink";
import Logo from "@/assets/logos/spreet.svg";

export default function NavLinks() {
  return (
    <>
      <figure className="flex flex-col gap-y-1 text-sm tracking-wide">
        <ExtendedLink href={MAIN_PATHNAME} className="w-32 h-16 pt-2">
          <Logo />
        </ExtendedLink>
      </figure>
      <nav className="mr-6">
        <ul className="flex gap-3 text-lg tracking-wide font-semibold">
          <li>
            <ExtendedLink href={EVENT_PATHNAME}>행사</ExtendedLink>
          </li>
          <li>
            <ExtendedLink href={CLASS_PATHNAME}>강의</ExtendedLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
