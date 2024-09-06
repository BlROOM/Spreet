"use client";
import useAuthStore from "@/store/useAuthStore";
import useModalStore from "@/store/useModalStore";
import checkSignIn from "@/utils/supabase/checkSignin";
import supabase from "@/utils/supabase/supabaseClient";
import sweetAlert from "@/utils/sweetAlert";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type LoginButton = {
  session: any;
};

export default function LoginButton({ session }: LoginButton) {
  const router = useRouter();
  const openModal = useModalStore((state) => state.openModal);
  const { isSignedIn, setSignIn } = useAuthStore();

  const hanldeLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      sweetAlert(5000, "error", `로그아웃 실패 \n${error}`);
    }
    sweetAlert(5000, "success", "로그아웃 성공");
    setSignIn(false);
    router.refresh();
  };

  const [isLogin, setLogin] = useState(false);

  useEffect(() => {
    const fetchUserState = async () => {
      const user = await checkSignIn();
      console.log("-----user로그인버튼----", user, session);
      setLogin(!!user);
    };
    fetchUserState();
  }, [isSignedIn, session]);

  return (
    <>
      {isLogin || session ? (
        <button onClick={hanldeLogout}>로그아웃</button>
      ) : (
        <button onClick={openModal}>로그인</button>
      )}
    </>
  );
}
