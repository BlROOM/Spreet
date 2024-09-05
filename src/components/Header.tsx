import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logos/Spreet.svg";
import LoginButton from "./login/LoginButton";

export default function Header() {
  return (
    <header className="w-full py-4 flex justify-center border-b-2">
      <div className="w-[1280px] mx-auto px-2 flex align-middle justify-between items-center">
        <figure className="flex flex-col gap-y-1 text-sm tracking-wide font-serif">
          <Link href="/" className="w-32 h-16 pt-2">
            <Logo />
          </Link>
          {/* <figcaption>Spreed Street culture</figcaption> */}
        </figure>
        <nav className="mr-6">
          <ul className="flex gap-3 text-lg tracking-wide font-semibold">
            <li>
              <Link href="./search">행사</Link>
            </li>
            <li>
              <Link href="./">강의</Link>
            </li>
            <li>
              <LoginButton />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
