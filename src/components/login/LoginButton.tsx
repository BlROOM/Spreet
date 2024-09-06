"use client";
import useAuthStore from "@/store/useAuthStore";
import useModalStore from "@/store/useModalStore";
import checkSignIn from "@/utils/supabase/checkSignin";
import supabase from "@/utils/supabase/supabaseClient";
import sweetAlert from "@/utils/sweetAlert";
import { useEffect, useState } from "react";

export default function LoginButton() {
  const openModal = useModalStore((state) => state.openModal);
  const { isSignedIn, setSignIn } = useAuthStore();

  const hanldeLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      sweetAlert(5000, "error", `로그아웃 실패 \n${error}`);
    }
    sweetAlert(5000, "success", "로그아웃 성공");
    setSignIn(false);
  };

  const [isLogin, setLogin] = useState(false);

  useEffect(() => {
    const fetchUserState = async () => {
      const user = await checkSignIn();
      // console.log("-----user로그인버튼----", user);
      setLogin(!!user);
    };
    fetchUserState();
  }, [isSignedIn]);

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
