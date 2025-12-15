"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";

export default function JoinPage() {
  const router = useRouter();

  return (
    <div
      className="relative w-screen h-screen overflow-hidden flex flex-col md:flex-row md:justify-end
      md:bg-[url('/images/auth-bg.png')] md:bg-cover md:bg-center md:bg-no-repeat"
    >
      {/* text - for desktop */}
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
          <p className="text-4xl font-semibold text-white/70">와 함께</p>
        </div>
        <p className="text-4xl font-semibold text-white/70">
          나의 하루를 심어요,
        </p>
      </div>

      {/* join */}
      <section className="w-full md:w-[45vw] h-full  bg-main flex flex-col gap-5 items-center justify-center z-20 mt-auto pt-20 lg:pt-0 md:pt-auto md:ml-auto">
        <Image
          src="/icons/logo-leaf.svg"
          alt="logo"
          width={38}
          height={38}
          className="-mt-28 md:mt-0"
        />

        <h2 className="text-secondary text-3xl md:text-[40px] font-semibold">
          Sign Up
        </h2>

        <form className="flex flex-col gap-3 w-full max-w-[370px] md:w-[330px] md:max-w-[500px] mt-5">
          {/* 닉네임 */}
          <label htmlFor="nickname" className="font-medium">
            닉네임
          </label>
          <input
            id="nickname"
            type="text"
            placeholder="2자 이상 10자 이하"
            className="w-full border border-primary p-3 rounded-md mb-2 bg-white"
          />

          {/* 이메일 */}
          <label htmlFor="email" className="font-medium">
            이메일
          </label>
          <input
            id="email"
            type="text"
            placeholder="ex) example@mail.com"
            className="w-full border border-primary p-3 rounded-md mb-1 bg-white"
          />

          {/** error msg */}
          <p className="text-sm -mt-2 pl-2 text-primary">
            올바른 이메일 형식이 아닙니다.
          </p>

          {/* 비밀번호 */}
          <label htmlFor="join-password" className="font-medium">
            비밀번호
          </label>
          <input
            id="join-password"
            type="password"
            placeholder="8자 이상, 숫자+영문 포함"
            className="w-full border border-primary p-3 rounded-md mb-2 bg-white"
          />

          {/* 비밀번호 확인 */}
          <label htmlFor="join-password-check" className="font-medium">
            비밀번호 재확인
          </label>
          <input
            id="join-password-check"
            type="password"
            placeholder="비밀번호와 동일하게 입력"
            className="w-full border border-primary p-3 rounded-lg mb-4 bg-white"
          />

          <p className="text-left text-secondary mb-3">약관에 동의합니다.</p>

          <Button variant="dark" size="lg">
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
