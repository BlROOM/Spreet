import { createClient } from "@supabase/supabase-js";

// 환경 변수에서 Supabase URL과 API 키를 가져옵니다.
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_SERVICE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// 서버 측에서 사용할 Supabase 클라이언트를 생성합니다.
export function createServerSupabaseClient() {
  return createClient(SUPABASE_URL, SUPABASE_SERVICE_ANON_KEY);
}
