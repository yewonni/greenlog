"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import CircleCheckbox from "@/components/CircleCheckbox";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { joinSchema, JoinFormValues } from "@/schemas/auth/join.schema";

export default function JoinPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isValid },
  } = useForm<JoinFormValues>({
    resolver: zodResolver(joinSchema),
    mode: "onChange",
    defaultValues: {
      agree: false,
    },
  });

  const values = watch();

  const canSubmit =
    isValid &&
    values.email?.trim() &&
    values.password?.trim() &&
    values.passwordCheck?.trim() &&
    values.agree === true;

  const onSubmit = (data: JoinFormValues) => {
    console.log(data);
  };

  return (
    <div
      className="relative w-screen h-screen overflow-hidden flex flex-col md:flex-row md:justify-end
      md:bg-[url('/images/auth-bg.png')] md:bg-cover md:bg-center md:bg-no-repeat"
    >
      <div className="hidden md:flex flex-col gap-4 absolute bottom-[70%] left-[5%] z-30">
        <div className="flex items-center gap-2">
          <Image
            src="/icons/logo-white.svg"
            alt="logo"
            width={180}
            height={63}
            className="cursor-pointer"
            onClick={() => router.push("/")}
          />
          <p className="text-4xl text-white/70">와 함께</p>
        </div>
        <p className="text-4xl text-white/70">나의 하루를 심어요,</p>
      </div>

      <section className="w-full md:w-[45vw] h-full bg-main flex flex-col gap-5 items-center justify-center z-20 mt-auto pt-20 lg:pt-0 md:ml-auto">
        <Image
          src="/icons/logo-leaf.svg"
          alt="logo"
          width={38}
          height={38}
          className="-mt-28 md:mt-0"
        />

        <h2 className="text-secondary text-3xl md:text-[40px]">Sign Up</h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-3 w-full max-w-[370px] md:w-[330px] md:max-w-[500px] mt-5"
        >
          <label>닉네임</label>
          <input
            {...register("nickname")}
            type="text"
            placeholder="2자 이상 10자 이하"
            className="w-full border border-primary p-3 rounded-md bg-white"
          />
          {errors.nickname && (
            <p className="text-sm -mt-2 pl-2 text-primary">
              {errors.nickname.message}
            </p>
          )}

          <label>이메일</label>
          <input
            {...register("email")}
            type="email"
            placeholder="ex) example@mail.com"
            className="w-full border border-primary p-3 rounded-md bg-white"
          />
          {errors.email && (
            <p className="text-sm -mt-2 pl-2 text-primary">
              {errors.email.message}
            </p>
          )}

          <label>비밀번호</label>
          <input
            {...register("password")}
            type="password"
            placeholder="8자 이상, 숫자+영문 포함"
            className="w-full border border-primary p-3 rounded-md bg-white"
          />
          {errors.password && (
            <p className="text-sm -mt-2 pl-2 text-primary">
              {errors.password.message}
            </p>
          )}

          <label>비밀번호 재확인</label>
          <input
            {...register("passwordCheck")}
            type="password"
            placeholder="비밀번호와 동일하게 입력"
            className="w-full border border-primary p-3 rounded-md bg-white"
          />
          {errors.passwordCheck && (
            <p className="text-sm -mt-2 pl-2 text-primary">
              {errors.passwordCheck.message}
            </p>
          )}

          <div className="flex items-center gap-2 mt-2 mb-3">
            <CircleCheckbox
              checked={values.agree}
              onChange={(value) => setValue("agree", value)}
              size={20}
            />
            <p
              className="text-secondary cursor-pointer select-none"
              onClick={() => setValue("agree", !values.agree)}
            >
              약관에 동의합니다.
            </p>
          </div>

          {errors.agree && (
            <p className="text-sm text-primary pl-2">{errors.agree.message}</p>
          )}

          <Button variant="dark" size="lg" disabled={!canSubmit}>
            회원가입
          </Button>
        </form>

        <p
          onClick={() => router.push("/login")}
          className="text-sm text-secondary hover:underline cursor-pointer"
        >
          이미 계정이 있으신가요?
        </p>
      </section>
    </div>
  );
}
