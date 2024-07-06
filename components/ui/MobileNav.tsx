"use client";
import { SideNavLinks } from "@/constants";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            width={36}
            height={36}
            alt="hamburger icon"
            className="cursor-ponter sm:hidden"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-dark-1 w-[340px]">
          <Link href="/" className="flex items-center gap-1">
            {" "}
            <Image
              src="/icons/logo.svg"
              width={32}
              height={32}
              alt="logo"
              className="max-sm:size-10"
            />
            <p className="text-[26px] font-extrabold text-white">YotorZoom</p>
          </Link>
          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto pt-14">
            <SheetClose asChild>
              <section className="flex flex-col gap-6 h-full text-white">
                {SideNavLinks.map((link) => {
                  const isActive =
                    pathname == link.route ||
                    pathname.startsWith(`${link.route}/`);
                  return (
                    <>
                      <SheetClose asChild>
                        <Link
                          href={link.route}
                          key={link.label}
                          className={cn(
                            "flex items-center gap-2 p-4 rounded-lg w-full max-w-60",
                            {
                              "bg-blue-1": isActive,
                            }
                          )}
                        >
                          <Image
                            src={link.imgUrl}
                            alt={link.label}
                            width={20}
                            height={20}
                          />
                          <p className="font-semibold">{link.label}</p>
                        </Link>
                      </SheetClose>
                    </>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
