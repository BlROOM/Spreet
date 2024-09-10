import { createClient } from "@/utils/supabase/server";
import NavLinks from "./NavLinks";
import LoginButton from "./login/LoginButton";

export default async function Header() {
  const supabase = createClient();
  const { data: sessionData, error: sessionError } =
    await supabase.auth.getSession();
  return (
    <header className="fixed z-50 w-full py-4 flex justify-center text-grayscale-100 bg-[#111111] ">
      <div className="w-[1280px] mx-auto px-2 flex align-middle justify-between items-center text-lg tracking-wide font-semibold">
        <NavLinks />
        <LoginButton session={sessionData.session} />
      </div>
    </header>
  );
}
