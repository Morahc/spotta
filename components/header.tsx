"use client";

import Image from "next/image";

const Header = () => {
  return (
    <header className="flex justify-between py-2 lg:py-6">
      <Image src="/images/ic_logo.svg" alt="logo" width={92} height={29} />
      <div className="flex gap-2 lg:gap-4 items-center">
        <span className="text-sm md:text-base font-semibold">Welcome!</span>
        <Image alt="Avatar" src="/images/header-avatar.svg" width={36} height={36} />
      </div>
    </header>
  );
}

export default Header