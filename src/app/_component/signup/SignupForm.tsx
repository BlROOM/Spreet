import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, SignupFormData } from "@/type/validator";

type SignupForm = {
  onCancle: () => void;
};

export default function SignupForm({ onCancle }: SignupForm) {
  // register: 폼 필드를 React Hook Form에 등록하는 역할 (등록된 필드를 추적, 폼 데이터를 수집)
  // handleSubmit: 폼이 제출될 때 호출될 함수를 정의
  // formState: { errors }: 폼 상태를 나타내며, 주로 입력 필드의 유효성 검사 에러를
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema), // 폼 유효성 검사에 Zod 스키마를 사용
    defaultValues: {
      // 기본값 설정
      nickname: "",
      email: "",
      phone: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const onSubmit = (data: SignupFormData) => {
    console.log("Form Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-2">
      <div className="mb-4">
        <label>닉네임</label>
        <input
          type="text"
          {...register("nickname")}
          className="mt-1 w-full p-2 border rounded"
        />
        {errors.nickname && (
          <p className="text-red-500 text-sm">{errors.nickname?.message}</p>
        )}
      </div>

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

      <div className="mb-4">
        <label>비멀번호 확인</label>
        <input
          type="password"
          {...register("passwordConfirm")}
          className="mt-1 w-full p-2 border rounded"
        />
        {errors.passwordConfirm && (
          <p className="text-red-500 text-sm">
            {errors.passwordConfirm?.message}
          </p>
        )}
      </div>
      <div className="flex justify-between">
        <button type="submit" className="w-full py-2 rounded border">
          회원가입
        </button>
        <button
          type="button"
          onClick={onCancle}
          className="w-full py-2 rounded border"
        >
          뒤로가기
        </button>
      </div>
    </form>
  );
}
