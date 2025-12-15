import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-secondary w-full px-4 md:px-30 pt-20 pb-10">
      <Image src="/icons/logo-white.svg" alt="logo" width={160} height={55} />
      <p className="text-white mt-2 text-xs sm:text-base">
        © 2025 All rights reserved.
      </p>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-10">
        <p className="text-white whitespace-nowrap text-xs sm:text-base">
          contact@greenlog.com | 개인정보처리방침 | 이용약관
        </p>
        <div className="flex gap-4 mt-6 sm:mt-0">
          <Image
            src="/icons/insta.svg"
            alt="instagram"
            width={45}
            height={45}
          />
          <Image
            src="/icons/facebook.svg"
            alt="facebook"
            width={31}
            height={33}
          />
        </div>
      </div>
    </footer>
  );
}
