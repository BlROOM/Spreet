// validators.ts
import { z } from "zod";

const passwordRegex =
  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const phoneRegex = /^010\d{8}$/;

export type SignupFormData = z.infer<typeof signupSchema>;
export type LoginFormData = z.infer<typeof loginSchema>;
export type UserRegistrationInput = z.infer<typeof userRegistrationSchema>;

export const signupSchema = z
  .object({
    email: z.string().email({ message: "올바른 이메일을 입력해주세요." }),
    nickname: z
      .string()
      .min(2, { message: "이름은 2글자 이상이어야 합니다." })
      .max(100, { message: "이름은 100글자 이하이어야 합니다." }),
    password: z
      .string()
      .min(6, "비밀번호는 최소 6자리 이상이어야 합니다.")
      .max(100, "비밀번호는 100자리 이하이어야 합니다.")
      .refine(
        (value) => passwordRegex.test(value),
        "비밀번호는 최소 6자리 이상, 영문, 숫자, 특수문자를 포함해야 합니다."
      ),
    passwordConfirm: z
      .string()
      .min(6, "비밀번호는 최소 6자리 이상이어야 합니다.")
      .max(100, "비밀번호는 100자리 이하이어야 합니다.")
      .refine(
        (value) => passwordRegex.test(value),
        "비밀번호는 최소 6자리 이상, 영문, 숫자, 특수문자를 포함해야 합니다."
      ),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "비밀번호와 일치하지 않습니다.",
    path: ["passwordConfirm"],
  });

export const loginSchema = z.object({
  email: z.string().email({ message: "올바른 이메일을 입력해주세요." }),
  password: z
    .string()
    .min(6, "비밀번호는 최소 6자리 이상이어야 합니다.")
    .max(100, "비밀번호는 100자리 이하이어야 합니다.")
    .refine(
      (value) => passwordRegex.test(value),
      "비밀번호는 최소 6자리 이상, 영문, 숫자, 특수문자를 포함해야 합니다."
    ),
});

export const userRegistrationSchema = z.object({
  userId: z.string().nonempty({ message: "User ID is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
  nickname: z.string().nonempty({ message: "Nickname is required" }),
  provider: z.string().optional(),
});
