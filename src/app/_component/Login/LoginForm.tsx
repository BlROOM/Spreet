import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormData } from "@/type/validator";

type LoginForm = {
  onSignupClick: () => void;
  onCancle: () => void;
};

export default function LoginForm({ onSignupClick, onCancle }: LoginForm) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema), // 폼 유효성 검사에 Zod 스키마를 사용
    defaultValues: {
      // 기본값 설정
      nickname: "",
      email: "",
      phone: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const onSubmit = (data: LoginFormData) => {
    console.log("Form Data:", data);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto p-2 min-h-[500px]"
      >
        <div className="mb-4">
          <label>이메일</label>
          <input
            type="email"
            {...register("email")}
            className="mt-1 w-full p-2 border rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email?.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label>비밀번호</label>
          <input
            type="password"
            {...register("password")}
            className="mt-1 w-full p-2 border rounded"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password?.message}</p>
          )}
        </div>

        <button
          type="button"
          className="w-full rounded-md border shadow-sm px-6 py-2 focus:outline-none focus:ring-2 focus:ring-offset-2 "
        >
          로그인
        </button>
        <div className="relative flex items-center justify-center my-4 text-lg">
          <div className="absolute inset-0 flex items-center">
            <hr className="w-full border-t border-grayscale-400" />
          </div>
          <div className="relative bg-[#fff] px-2 text-grayscale-600">또는</div>
        </div>
        <button
          type="button"
          onClick={onSignupClick}
          className="w-full rounded-md border shadow-sm px-6 py-2 focus:outline-none focus:ring-2 focus:ring-offset-2 "
        >
          회원가입
        </button>

        {/* 소셜 로그인 */}
        <div className="flex justify-between mt-8">
          <button
            type="button"
            className="w-2/4 rounded-md border shadow-sm px-6 py-2 focus:outline-none focus:ring-2 focus:ring-offset-2 "
          >
            네이버
          </button>
          <button
            type="button"
            className="w-2/4 rounded-md border shadow-sm px-6 py-2 focus:outline-none focus:ring-2 focus:ring-offset-2 "
          >
            카카오
          </button>
        </div>
      </form>
    </>
  );
}
