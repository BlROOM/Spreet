import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logos/spreet.svg";
import LoginButton from "./login/LoginButton";
import { createClient } from "@/utils/supabase/server";

export default async function Header() {
  const supabase = createClient();
  const { data: sessionData, error: sessionError } =
    await supabase.auth.getSession();
  return (
    <header className="fixed z-50 w-full py-4 flex justify-center text-grayscale-100 bg-[#111111] ">
      <div className="w-[1280px] mx-auto px-2 flex align-middle justify-between items-center">
        <figure className="flex flex-col gap-y-1 text-sm tracking-wide font-serif">
          <Link href="/" className="w-32 h-16 pt-2">
            <Logo />
          </Link>
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
              <LoginButton session={sessionData.session} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
