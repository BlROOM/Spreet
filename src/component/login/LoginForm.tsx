import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormData } from "@/type/validator";
import Form from "../shared/Form";
import Input from "../shared/Input";
import Button from "../shared/Button";

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
      <Form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto p-4 h-[500px]"
      >
        <Input
          className="mt-1 w-full p-2 border border-[#C6C6C6] rounded"
          type="email"
          register={register}
          name="email"
          label="이메일"
          error={errors.email}
        />
        <Input
          className="mt-1 w-full p-2 border border-[#C6C6C6] rounded"
          type="password"
          register={register}
          name="password"
          label="비밀번호"
          error={errors.password}
        />
        <Button
          type="submit"
          className="w-full rounded-md border shadow-sm px-6 py-2 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-[#D10536] text-[#fff] font-semibold hover:bg-opacity-75"
        >
          로그인
        </Button>

        <div className="relative flex items-center justify-center mt-4 mb-2 text-lg">
          <div className="absolute inset-0 flex items-center">
            <hr className="w-full border-t border-grayscale-400 bg-[]" />
          </div>
          <div className="relative bg-[#fff] px-2 text-grayscale-600 text-sm">
            또는
          </div>
        </div>

        <div className="flex justify-between">
          <Button
            type="button"
            onClick={onSignupClick}
            className="w-1/4 font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 text-start"
          >
            회원가입
          </Button>

          <Button
            type="button"
            className="w-2/4 font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 text-end"
          >
            아이디/비밀번호 찾기
          </Button>
        </div>

        {/* 소셜 로그인 */}
        <div className="flex flex-col gap-y-4 mt-6">
          <Button
            type="button"
            className="w-full rounded-md border shadow-sm px-6 py-2 focus:outline-none focus:ring-2 focus:ring-offset-2 "
          >
            네이버
          </Button>
          <Button
            type="button"
            className="w-full rounded-md border shadow-sm px-6 py-2 focus:outline-none focus:ring-2 focus:ring-offset-2 "
          >
            카카오
          </Button>
        </div>
      </Form>
    </>
  );
}
