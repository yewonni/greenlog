"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  return (
    <div
      className="relative w-screen h-screen overflow-hidden flex flex-col lg:flex-row lg:justify-end"
      style={{
        backgroundImage: 'url("/images/auth-bg.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* text - for desktop */}
      <div className="hidden lg:flex flex-col gap-4 absolute bottom-[13%] left-[5%] z-30">
        <Image
          src="/icons/logo-white.svg"
          alt="logo"
          width={239}
          height={63}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />
        <p className="text-xl font-medium text-white/70">
          작은 성장들이 쌓여, 나를 닮은 정원을 만듭니다.
        </p>
      </div>

      {/* login */}
      <section className="w-full lg:w-[45vw] h-[77vh] lg:h-full bg-main flex flex-col gap-5 items-center justify-center z-20 mt-auto lg:ml-auto">
        <Image
          src="/icons/logo-leaf.svg"
          alt="logo"
          width={38}
          height={38}
          className="-mt-28 lg:mt-0"
        />

        <h2 className="text-secondary text-3xl lg:text-[40px] font-semibold">
          Sign In
        </h2>

        <form className="flex flex-col gap-6 w-full max-w-[370px] lg:w-[370px] lg:max-w-[500px] mt-5">
          <label htmlFor="login-id" className="sr-only">
            아이디
          </label>
          <input
            id="login-id"
            type="text"
            placeholder="아이디를 입력해주세요."
            className="w-full border border-primary p-3 rounded-lg"
          />

          <label htmlFor="login-password" className="sr-only">
            비밀번호
          </label>
          <input
            id="login-password"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            className="w-full border border-primary p-3 rounded-lg"
          />

          <p className="text-right text-secondary">아이디 저장</p>

          <button className="bg-secondary text-white py-3 rounded-3xl">
            로그인
          </button>
        </form>
        <p
          className="text-sm text-secondary hover:underline cursor-pointer"
          onClick={() => router.push("/join")}
        >
          계정이 없으신가요?
        </p>
      </section>
    </div>
  );
}
