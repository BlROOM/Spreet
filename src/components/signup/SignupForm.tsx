import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, SignupFormData } from "@/type/validator";
import Form from "../shared/Form";
import Input from "../shared/Input";
import Button from "../shared/Button";
import ToggleEyeIcon from "../ToggleEyeIcon";
import useToggleEye from "@/store/useToggleEyeStore";
import sweetAlert from "@/utils/sweetAlert";
import useModalStore from "@/store/useModalStore";
import useLoadingStore from "@/store/useLoading";
import LoadingSpinner from "../loading/LoadingSpinner";

type SignupForm = {
  onCancle: () => void;
};

export default function SignupForm({ onCancle }: SignupForm) {
  const { setModalContent } = useModalStore();
  const { isLoading } = useLoadingStore();

  // register: 폼 필드를 React Hook Form에 등록하는 역할 (등록된 필드를 추적, 폼 데이터를 수집)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema), // 폼 유효성 검사에 Zod 스키마를 사용
    defaultValues: {
      nickname: "",
      email: "",
      phone: "",
      password: "",
      passwordConfirm: "",
    },
  });

  // 사용자가 눈 아이콘을 누른다면 타입을 변경하여 입력 내용 보이게 또는 숨김
  const { visibleStates } = useToggleEye();
  const passwordInputType = visibleStates["password"] ? "text" : "password";
  const passwordConfirmInputType = visibleStates["passwordConfirm"]
    ? "text"
    : "password";

  const { toggleLoading } = useLoadingStore();

  async function onSubmit(data: SignupFormData) {
    toggleLoading();
    const formData = new FormData();

    formData.append("nickname", data.nickname);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("passwordConfirm", data.passwordConfirm);

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.log(errorData, "------error");
        sweetAlert(5000, "error", `회원가입 실패 \n${errorData.error}`);
        // console.log("----data---", data);
        return;
      }
      sweetAlert(
        5000,
        "success",
        `이메일로 인증 링크를 보냈습니다.\n이메일을 확인해주세요.`
      );
      setModalContent("로그인");
    } catch (error) {
      console.error("Error during signup:", error);
    } finally {
      toggleLoading();
    }
  }

  return (
    <>
      {isLoading ? (
        <div className="flex flex-1 justify-center items-center  h-3/4">
          <LoadingSpinner />
        </div>
      ) : (
        <Form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-md mx-auto p-2"
        >
          <Input
            className="mt-1 w-full p-2 border border-[#C6C6C6] rounded"
            type="text"
            register={register}
            label="닉네임"
            name="nickname"
            error={errors.nickname}
          />

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

          <Input
            className="mt-1 w-full p-2 border border-[#C6C6C6] rounded"
            type={passwordConfirmInputType}
            register={register}
            name="passwordConfirm"
            label="비밀번호 확인"
            error={errors.passwordConfirm}
          >
            <ToggleEyeIcon
              className="absolute right-0 top-1/2 -translate-x-1/2 -translate-y-1/3 text-grayscale-700 w-6 h-6 cursor-pointer"
              fieldKey="passwordConfirm"
            />
          </Input>

          <div className="flex justify-between gap-2 mt-6">
            <Button
              type="submit"
              className="w-full py-2 rounded-md border bg-[#D10536] text-[#fff] font-semibold hover:bg-opacity-75  shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              확인
            </Button>

            <Button
              type="button"
              onClick={onCancle}
              className="w-full py-2 rounded-md bg-[#B3B3B3] font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-opacity-90"
            >
              뒤로가기
            </Button>
          </div>
        </Form>
      )}
    </>
  );
}
