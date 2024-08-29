import supabase from "@/utils/supabase/supabaseClient";
import validateForm from "@/utils/validateForm";
import { AuthError } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

const getErrorMessage = (error: Error) => {
  switch (error.message) {
    case "Email not confirmed":
      return {
        message:
          "인증이 완료되지\n않은 회원입니다.\n이메일을 확인하여\n인증을 완료해주세요.",
        status: 500,
      };
    case "Invalid login credentials":
      return {
        message: "존재하지 않는 회원입니다.",
        status: 500,
      };
    default:
      return {
        message: "다시 시도하시거나 고객센터에 문의해주세요.",
        status: 500,
      };
  }
};

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    //유효성 검사 필드 정의
    const requiredFields = ["email", "password"];

    // 유효성 검사 실행
    const { valid, missingField } = validateForm(formData, requiredFields);
    if (!valid) {
      return NextResponse.json(
        { error: `입력값이 부족합니다: ${missingField}` },
        { status: 400 }
      );
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    console.error("error", error);
    console.error("data", data);
    if (error instanceof AuthError) {
      const { message, status } = getErrorMessage(error);
      return NextResponse.json({ error: message }, { status });
    }

    const response = NextResponse.json(
      { message: "로그인 성공" },
      { status: 200 }
    );

    return response;
  } catch (error) {
    return NextResponse.json({ error: "로그인 중 오류 발생" }, { status: 500 });
  }
}
