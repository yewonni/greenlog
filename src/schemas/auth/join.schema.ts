import { z } from "zod";

export const joinSchema = z
  .object({
    nickname: z
      .string()
      .min(2, "닉네임은 2자 이상이어야 합니다.")
      .max(10, "닉네임은 10자 이하로 입력해주세요."),

    email: z.email("올바른 이메일 형식이 아닙니다."),

    password: z
      .string()
      .min(8, "비밀번호는 8자 이상이어야 합니다.")
      .regex(
        /^(?=.*[A-Za-z])(?=.*\d)/,
        "비밀번호는 영문과 숫자를 포함해야 합니다."
      ),

    passwordCheck: z.string(),

    agree: z.boolean().refine((val) => val === true, {
      message: "약관에 동의해주세요.",
    }),
  })
  .refine((data) => data.password === data.passwordCheck, {
    path: ["passwordCheck"],
    message: "비밀번호가 일치하지 않습니다.",
  });

export type JoinFormValues = z.infer<typeof joinSchema>;
