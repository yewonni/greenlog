"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import CircleCheckbox from "@/components/CircleCheckbox";

export default function JoinPage() {
  const router = useRouter();
  const [agree, setAgree] = useState(false);

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
          <p className="text-4xl text-white/70">와 함께</p>
        </div>
        <p className="text-4xl text-white/70">나의 하루를 심어요,</p>
      </div>

      {/* join */}
      <section className="w-full md:w-[45vw] h-full bg-main flex flex-col gap-5 items-center justify-center z-20 mt-auto pt-20 lg:pt-0 md:ml-auto">
        <Image
          src="/icons/logo-leaf.svg"
          alt="logo"
          width={38}
          height={38}
          className="-mt-28 md:mt-0"
        />

        <h2 className="text-secondary text-3xl md:text-[40px]">Sign Up</h2>

        <form className="flex flex-col gap-3 w-full max-w-[370px] md:w-[330px] md:max-w-[500px] mt-5">
          {/* 닉네임 */}
          <label htmlFor="nickname">닉네임</label>
          <input
            id="nickname"
            type="text"
            placeholder="2자 이상 10자 이하"
            className="w-full border border-primary p-3 rounded-md bg-white"
          />

          {/* 이메일 */}
          <label htmlFor="email">이메일</label>
          <input
            id="email"
            type="text"
            placeholder="ex) example@mail.com"
            className="w-full border border-primary p-3 rounded-md bg-white"
          />

          {/* error msg */}
          <p className="text-sm -mt-2 pl-2 text-primary">
            올바른 이메일 형식이 아닙니다.
          </p>

          {/* 비밀번호 */}
          <label htmlFor="join-password">비밀번호</label>
          <input
            id="join-password"
            type="password"
            placeholder="8자 이상, 숫자+영문 포함"
            className="w-full border border-primary p-3 rounded-md bg-white"
          />

          {/* 비밀번호 확인 */}
          <label htmlFor="join-password-check">비밀번호 재확인</label>
          <input
            id="join-password-check"
            type="password"
            placeholder="비밀번호와 동일하게 입력"
            className="w-full border border-primary p-3 rounded-md bg-white"
          />

          {/* 약관 동의 */}
          <div className="flex items-center gap-2 mt-2 mb-3">
            <CircleCheckbox checked={agree} onChange={setAgree} size={20} />
            <p
              className="text-secondary cursor-pointer select-none"
              onClick={() => setAgree((prev) => !prev)}
            >
              약관에 동의합니다.
            </p>
          </div>

          <Button variant="dark" size="lg" disabled={!agree}>
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
