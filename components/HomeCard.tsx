import { HomeLinks } from "@/app/constants";
import Image from "next/image";
import React from "react";

interface NewHomeLinks {
  bg_color: string;
  iconUrl: string;
  leadingText: string;
  paragraph: string;
  handleClick: () => void;
}

const HomeCard = ({
  bg_color,
  iconUrl,
  leadingText,
  paragraph,
  handleClick,
}: NewHomeLinks) => {
  return (
    <div
      className={`${bg_color} w-full xl:max-w-[270px] min-h-[260px] px-6 py-4 flex flex-col justify-between rounded-[14px] cursor-pointer`}
      onClick={handleClick}
    >
      <div className="flex-center glassmorphism size-12 rounded-[10px]">
        <Image src={iconUrl} alt="meeting" width={27} height={27} />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{leadingText}</h1>
        <p className="text-lg font-normal">{paragraph}</p>
      </div>
    </div>
  );
};

export default HomeCard;
