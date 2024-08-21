"use client";
import useModalStore from "@/app/store/modalStore";

export default function LoginButton() {
  const openModal = useModalStore((state) => state.openModal);

  return <button onClick={openModal}>로그인</button>;
}
