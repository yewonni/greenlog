"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <header className="bg-white h-[90px] flex items-center justify-between px-4 md:px-30 shadow-sm">
      <h1 onClick={() => router.push("/")}>
        <Image
          src="/icons/main-logo.svg"
          alt="logo"
          width={239}
          height={63}
          className="-mb-2 cursor-pointer"
        />
      </h1>
      <nav className="hidden md:flex items-center">
        <ul className="flex text-lg font-medium gap-18 mr-18">
          <li>내 정원</li>
          <li>감정 일기</li>
        </ul>
        <Image src="/icons/user.svg" alt="user" width={27} height={27} />
      </nav>
      {/** mobile menu */}
      <Image
        src="/icons/hamburger.svg"
        alt="menu"
        width={25}
        height={25}
        className="flex md:hidden"
      />
    </header>
  );
}
