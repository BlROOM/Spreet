"use client";
import { useRouter, redirect } from "next/navigation";

export default function Login() {
  const router = useRouter(); // client에서 리다이렉트
  router.replace("/i/flow/login");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      메인 페이지입니다.
    </main>
  );
}
