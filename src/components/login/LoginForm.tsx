import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormData } from "@/type/validator";
import Form from "../shared/Form";
import Input from "../shared/Input";
import Button from "../shared/Button";
import sweetAlert from "@/utils/sweetAlert";
import useModalStore from "@/store/useModalStore";
import useAuthStore from "@/store/useAuthStore";
import ToggleEyeIcon from "../ToggleEyeIcon";
import useToggleEye from "@/store/useToggleEyeStore";
import LoadingSpinner from "../loading/LoadingSpinner";
import useLoadingStore from "@/store/useLoading";

type LoginForm = {
  onSignupClick: () => void;
};

export default function LoginForm({ onSignupClick }: LoginForm) {
  const { closeModal } = useModalStore();
  const { setSignIn } = useAuthStore();
  const { isLoading } = useLoadingStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { visibleStates } = useToggleEye();
  const passwordInputType = visibleStates["password"] ? "text" : "password";

  const { toggleLoading } = useLoadingStore();

  const onSubmit = async (data: LoginFormData) => {
    toggleLoading();
    const formData = new FormData();

    formData.append("email", data.email);
    formData.append("password", data.password);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.log(errorData, "------error");
        sweetAlert(5000, "error", `로그인 실패 \n${errorData.error}`);
        return;
      }

      // const result = await response.json();
      sweetAlert(5000, "success", `로그인에 성공했습니다.`);
      setSignIn(true);
      closeModal();
      // console.log("Login successful:", result);
    } catch (error) {
      console.error("Error during login:", error);
    } finally {
      toggleLoading();
    }
  };
  return (
    <>
      {isLoading ? (
        <div className="flex flex-1 justify-center items-center  h-3/4">
          <LoadingSpinner />
        </div>
      ) : (
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
            type={passwordInputType}
            register={register}
            name="password"
            label="비밀번호"
            error={errors.password}
          >
            <ToggleEyeIcon
              className="absolute right-0 top-1/2 -translate-x-1/2 -translate-y-1/3 text-grayscale-700 w-6 h-6 cursor-pointer"
              fieldKey="password"
            />
          </Input>
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
      )}
    </>
  );
}
