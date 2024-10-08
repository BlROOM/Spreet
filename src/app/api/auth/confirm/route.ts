import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  //  인증 제공자가 인증을 완료하면, 사용자는 리디렉션 URL에 인증 코드를 포함하여 해당 페이지로 돌아옴
  const code = String(requestUrl.searchParams.get("code"));
  if (code) {
    const supabase = createClient();
    //서버는 인증 코드를 exchangeCodeForSession 메서드에 전달하여 supabsae에서 해당 유저 세션 획득
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);
    if (error) {
      console.log("---error---", error);
    }
  }

  return NextResponse.redirect(requestUrl.origin);
}
