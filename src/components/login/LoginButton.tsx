"use client";
import useModalStore from "@/store/useModalStore";
import checkSignIn from "@/utils/supabase/checkSignin";
import supabase from "@/utils/supabase/supabaseClient";
import sweetAlert from "@/utils/sweetAlert";
import { useEffect, useState } from "react";

export default function LoginButton() {
  const user = checkSignIn();
  const openModal = useModalStore((state) => state.openModal);

  const hanldeLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      sweetAlert(5000, "error", `로그아웃 실패 \n${error}`);
    }
  };

  const [isLogin, setLogin] = useState(false);
  useEffect(() => {
    if (!user) {
      setLogin(false);
    } else {
      setLogin(true);
    }
  }, [user, setLogin]);

  return (
    <>
      {isLogin ? (
        <button onClick={hanldeLogout}>로그아웃</button>
      ) : (
        <button onClick={openModal}>로그인</button>
      )}
    </>
  );
}
