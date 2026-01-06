import { z } from "zod";

export const joinSchema = z
  .object({
    nickname: z
      .string()
      .refine(
        (val) => val.length === 0 || (val.length >= 2 && val.length <= 10),
        { message: "2자 이상 10자 이하로 입력해주세요." }
      ),

    email: z
      .string()
      .refine(
        (val) => val.length === 0 || z.string().email().safeParse(val).success,
        { message: "올바른 이메일 형식이 아닙니다." }
      ),

    password: z
      .string()
      .refine(
        (val) =>
          val.length === 0 ||
          (val.length >= 8 && /^(?=.*[A-Za-z])(?=.*\d)/.test(val)),
        { message: "8자 이상, 영문과 숫자를 포함해야 합니다." }
      ),

    passwordCheck: z.string(),

    agree: z.boolean(),
  })
  .refine(
    (data) => {
      if (!data.password || !data.passwordCheck) return true;
      return data.password === data.passwordCheck;
    },
    {
      path: ["passwordCheck"],
      message: "비밀번호가 일치하지 않습니다.",
    }
  );

export type JoinFormValues = z.infer<typeof joinSchema>;
