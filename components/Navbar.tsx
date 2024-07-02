import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./ui/MobileNav";
import { SignedIn, UserButton } from "@clerk/nextjs";
const Navbar = () => {
  return (
    <nav className="flex-between w-full fixed z-50 bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          width={32}
          height={32}
          alt="logo"
          className="max-sm:size-10"
        />
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">
          YotorZoom
        </p>
      </Link>
      <div className="flex-center gap-8">
        <SignedIn>
          <UserButton />
        </SignedIn>

        {/* Clerk auth */}
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
