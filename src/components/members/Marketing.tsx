"use client";

import { Marketing1 } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import GithubIcon from "../../../public/Github.svg";
import LinkdIcon from "../../../public/LinkedIn.svg";
import InstaIcon from "../../../public/instagram.svg";

const imgStyle: any = {
  objectPosition: "center",
  objectFit: "cover",
};

const Item = ({ into, isActive, onClick }: any) => {
  const handleImageClick = () => {
    onClick();
  };

  return (
    <div className="h-[220px] w-full rounded-md md:h-[270px] md:rounded-xl lg:h-[350px] 2xl:h-[400px]">
      <div
        className="image-members relative z-40 h-[175px] w-full rounded-md hover:cursor-pointer md:h-[230px] md:rounded-xl lg:h-[290px] 2xl:h-[340px]"
        onClick={handleImageClick}
      >
        <Image
          src={into.img}
          style={imgStyle}
          className={
            isActive
              ? "z-30 h-full  w-full rounded-b-none rounded-t-md md:rounded-b-none md:rounded-t-xl"
              : "z-30 h-full  w-full rounded-md md:rounded-xl"
          }
          width={700}
          height={700}
          alt="name"
        ></Image>
      </div>

      <div
        className={
          isActive
            ? "delay-400 z-10 flex min-h-[100px] w-full -translate-y-[70px] scale-100 transform items-end justify-between rounded-[10px] bg-[#25252580] p-[3px] pb-[5px] backdrop-blur-[5px] transition  ease-in-out md:pb-[5px] lg:-translate-y-16 2xl:-translate-y-14"
            : " delay-400 z-0 flex min-h-[100px] -translate-y-40 scale-0 transform items-center justify-between bg-[#25252580] backdrop-blur-[5px]  transition ease-in-out"
        }
      >
        <div className="relative flex w-full items-center justify-between">
          <div className="absolute bottom-[-10px] left-[0%] z-40 h-[20px] w-[200px] md:bottom-[-15px]">
            <Image
              src="/Subtract.png"
              alt="event item"
              width={169}
              height={30}
              className="object-fit z-40 h-[30px] w-[140px] fill-white blur-[10px]  md:w-[200px]"
            ></Image>
          </div>
          <div className="text-[12px] font-normal capitalize leading-none text-[#FFF] lg:text-[16.5px] 2xl:text-[20px]">
            {into.name}
          </div>

          <div className="flex items-center gap-[2px] md:gap-1 ">
            <Link href={into.instagram || ""}>
              <Image
                src={InstaIcon}
                alt="icon"
                className={
                  into.instagram === ""
                    ? "hidden"
                    : "h-[15px] w-[15px] transition duration-100 hover:scale-110 md:h-[17px] md:w-[17px] 2xl:h-[24px] 2xl:w-[24px]"
                }
              />
            </Link>
            <Link href={into.linkedIn || ""}>
              <Image
                src={LinkdIcon}
                alt="icon"
                className={
                  into.linkedIn === ""
                    ? "hidden"
                    : "h-[15px] w-[15px] transition duration-100 hover:scale-110 md:h-[17px] md:w-[17px] 2xl:h-[24px] 2xl:w-[24px]"
                }
              />
            </Link>
            <Link href={into.github || ""}>
              <Image
                src={GithubIcon}
                alt="icon"
                className={
                  into.github === ""
                    ? "hidden"
                    : "h-[15px] w-[15px] transition duration-100 hover:scale-110 md:h-[17px] md:w-[17px] 2xl:h-[24px] 2xl:w-[24px]"
                }
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Marketing: any = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (into: any) => {
    setActiveCard(into === activeCard ? null : into);
  };
  return (
    <div className="flex ">
      <div className="flex flex-col items-center px-2 md:px-0">
        <div className="h-[15px] w-[15px] self-center rounded-full bg-white shadow-dotShadowPurple"></div>

        <div className=" h-full  w-[5px] bg-gradient-to-b from-[#533BD0] to-transparent transition duration-700"></div>
      </div>
      <div className="mx-auto flex max-w-[1920px]">
        <div className="ml-[5px] sm:ml-[10px] md:ml-[40px] lg:ml-[70px]"></div>
        <div className="flex flex-col">
          <div className="mb-[30px] text-[16px] font-semibold leading-normal text-[#FFF] md:text-2xl lg:text-3xl ">
            Marketing
          </div>
          <div className="mr-0 grid w-full grid-cols-2 gap-2 sm:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-8 2xl:grid-cols-5">
            {Marketing1.map((into, index) => {
              return (
                <Item
                  into={into}
                  key={index}
                  isActive={into === activeCard}
                  onClick={() => handleCardClick(into)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
