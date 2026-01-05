"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement | null>(null);

  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="bg-white h-[90px] shadow-sm">
      <div className="h-full flex items-center justify-between px-4 md:px-30">
        <h1>
          <Link href="/">
            <Image
              src="/icons/main-logo.svg"
              alt="logo"
              width={239}
              height={63}
              className="-mb-2 cursor-pointer"
            />
          </Link>
        </h1>

        <nav className="hidden md:flex items-center gap-18 text-lg">
          <Link
            href="/my-garden"
            className={`cursor-pointer transition ${
              isActive("/my-garden")
                ? "text-primary font-semibold"
                : "font-medium"
            }`}
          >
            내 정원
          </Link>

          <Link
            href="/emotion"
            className={`cursor-pointer transition ${
              isActive("/emotion")
                ? "text-primary font-semibold"
                : "font-medium"
            }`}
          >
            감정 일기
          </Link>

          {/* user menu */}
          <div
            ref={userMenuRef}
            className="relative flex items-center justify-center w-[27px] h-[27px]"
          >
            <Image
              src="/icons/user.svg"
              alt="user"
              width={27}
              height={27}
              className="cursor-pointer"
              onClick={() => setIsOpen((prev) => !prev)}
            />

            {isOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[100px] h-[65px] z-50">
                <Image
                  src="/icons/sign-out.svg"
                  alt="sign out"
                  fill
                  className="cursor-pointer"
                />
              </div>
            )}
          </div>
        </nav>

        {/* mobile */}
        <Image
          src="/icons/hamburger.svg"
          alt="menu"
          width={25}
          height={25}
          className="flex md:hidden"
        />
      </div>
    </header>
  );
}
