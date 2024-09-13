// import supabase from "@/utils/supabase/supabaseClient";
import { createClient } from "@/utils/supabase/server";

import validateForm from "@/utils/validateForm";
import { AuthError } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

// RESTful API 설계 원칙에 따라 auth 경로를 사용한 이유는 인증과 관련된 작업을 명확히 구분,
// RESTful API는 URL 경로가 리소스와 목적을 명확히 나타내야 한다,
// 인증은 자원(resource)보다는 기능(functionality)에 가까운 개념이므로,
// /api/auth와 같은 경로를 통해 인증 기능을 구분하는 것이 적합하다고 판단

// 인증 리소스: 인증 관련 작업(회원가입, 로그인 등)은 일반적으로 사용자 관리와는 별도로 취급
// 예시) : 사용자관리 api
// 사용자 관리 작업 (users 경로)
// 목적: 사용자 리소스와 관련된 CRUD(Create, Read, Update, Delete)
// 모든 사용자 목록 조회: /api/users
// 특정 사용자 조회: /api/users/[id]
// 사용자 정보 업데이트: /api/users/[id] (PUT/PATCH 요청)
// 사용자 삭제: /api/users/[id] (DELETE 요청)

// 인증 관련 작업
// 회원가입: /api/auth/register
// 로그인: /api/auth/login
// 로그아웃: /api/auth/logout
// 비밀번호 재설정: /api/auth/reset-password

const getErrorMessage = (error: Error) => {
  switch (error.message) {
    case "Email rate limit exceeded":
      return {
        message:
          "죄송합니다.너무 많은 회원가입\n요청으로 인해\n처리가 지연되고 있습니다.\n잠시 후에 다시 시도해 주세요.",
        status: 429,
      };
    case "User already registered":
      return {
        message: "해당 이메일은 이미 사용중 입니다.",
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
  const supabase = createClient();
  try {
    const formData = await req.formData();
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const nickname = formData.get("nickname") as string;
    const provider = (formData.get("provider") as string) || "";

    //유효성 검사 필드 정의
    const requiredFields = ["email", "password", "nickname"];

    // 유효성 검사 실행
    const { valid, missingField } = validateForm(formData, requiredFields);
    if (!valid) {
      return NextResponse.json(
        { error: `입력값이 부족합니다: ${missingField}` },
        { status: 400 }
      );
    }
    const origin = req.headers.get("origin");
    // console.log(email, password, nickname, provider);
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/api/auth/confirm`,
        data: {
          nickname,
          provider,
        },
      },
    });
    console.log("----error---", error);
    if (error instanceof AuthError) {
      const { message, status } = getErrorMessage(error);
      return NextResponse.json({ error: message }, { status });
    }

    const response = NextResponse.json(
      { message: "회원가입 성공" },
      { status: 200 }
    );

    return response;
  } catch (error) {
    return NextResponse.json(
      { error: "회원가입 중 오류 발생" },
      { status: 500 }
    );
  }
}
