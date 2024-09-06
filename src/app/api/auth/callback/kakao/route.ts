import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export const dynamic = "force-dynamic";

const RESTAPI_KEY = process.env.NEXT_PUBLIC_RESTAPI_KEY!;
const CLIENT_SECRET = process.env.NEXT_PUBLIC_CLIENT_SECRET!;

export async function GET(request: Request) {
  const supabase = createClient();
  const requestUrl = new URL(request.url);
  const redirectUrl = new URL("/", requestUrl.origin); // 성공 시 리디렉션할 URL 생성

  /* 인가 코드 받기 */
  const code = requestUrl.searchParams.get("code");

  if (!code) {
    return NextResponse.json({
      success: false,
      message: "카카오 로그인 실패\nAuthorization 코드가 존재하지 않습니다.",
    });
  }

  /* 토큰 요청 */
  const res = await fetch("https://kauth.kakao.com/oauth/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      client_id: RESTAPI_KEY,
      redirect_uri: process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI!,
      code,
      client_secret: CLIENT_SECRET,
    }),
  });

  const { id_token } = await res.json();

  /* ID Token으로 로그인 요청 */
  const {
    data: { session },
    error,
  } = await supabase.auth.signInWithIdToken({
    provider: "kakao",
    token: id_token,
  });
  console.log("----session", session);

  if (!session) {
    console.log("-----error----", error);
    return NextResponse.json({
      success: false,
      message: error?.message || "카카오 로그인 실패",
    });
  }

  const { data: sessionData, error: sessionError } =
    await supabase.auth.getSession();
  console.log("----sessionData", sessionData);
  if (sessionError) {
    console.error("Session Error:", sessionError.message);
    return NextResponse.redirect(new URL("/", request.url)); // 세션 오류 발생 시 로그인 페이지로 리디렉션
  }
  return NextResponse.redirect(redirectUrl);
}
