"use client";
import Image from "next/image";
// #50CAFF
import Link from "next/link";
import { useState } from "react";
import LinkdIcon from "../../public/LinkedIn.svg";
import GithubIcon from "../../public/Github.svg";
import InstaIcon from "../../public/instagram.svg";
interface Props {
  image: string;
  name: string;
  domain: string;
  message: string;
  linkedIn: string;
  instagram: string;
  facebook: string;
  github: string;
  index: number;
  isActive: boolean;
  onClick: Function;
}
const imgStyle: any = {
  objectPosition: "center",
  objectFit: "cover",
};
const CurrentLeadsCard = ({
  image,
  name,
  domain,
  index,
  isActive,
  onClick,
  instagram,
  linkedIn,
  facebook,
  github,
}: Props) => {
  const [showDetail, setShowDetail] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = () => {
    onClick();
  };
  return (
    <div className="h-[26rem]  w-[14rem]  rounded-imageradius">
      <div
        className="hover:shadow-leadsCardShadow relative z-10 mt-[4rem] h-[20rem] w-full rounded-imageradius transition-all  hover:cursor-pointer"
        onClick={handleImageClick}
      >
        <Image
          src={image}
          style={imgStyle}
          className="h-full  w-full rounded-imageradius border border-[#5F5E5E] grayscale"
          width={700}
          height={700}
          alt="name"
        />
        <div className="absolute bottom-0 left-0 h-full w-full cursor-pointer rounded-imageradius bg-gradient-to-t from-black via-transparent to-transparent">
          {" "}
        </div>
        <div className="absolute bottom-4 w-full">
          <h1 className=" bold  text-center text-[1rem] text-[#FFFFFF]">{name}</h1>
          {isActive && <h1 className="bold  text-center text-[0.8rem] text-[#9CE1FF]">{domain}</h1>}
        </div>
      </div>
      {/* -translate-y-32 */}
      <div
        className={
          isActive
            ? "delay-400 z-10 mt-[1.4rem] flex transform items-center justify-evenly transition ease-in-out"
            : " delay-400  z-0 mt-[1.4rem] flex -translate-y-32 transform items-center justify-evenly  transition ease-in-out"
        }
      >
        <Link href={instagram} target="_blank">
          <div className="flex h-[3rem] w-[3rem] items-center justify-center rounded-[6rem] border border-[#3D3D3D] bg-[#111111] bg-opacity-50 backdrop-blur-[17.5px] hover:bg-[#3D3D3D]">
            <Image src={InstaIcon} alt="icon" />
          </div>
        </Link>
        <Link href={linkedIn} target="_blank">
          <div className="flex h-[3rem] w-[3rem] items-center justify-center rounded-[6rem] border border-[#3D3D3D] bg-[#111111] bg-opacity-50 backdrop-blur-[17.5px] hover:bg-[#3D3D3D]">
            <Image src={LinkdIcon} alt="icon" />
          </div>
        </Link>
        <Link href={github} target="_blank">
          <div className="flex h-[3rem] w-[3rem] items-center justify-center rounded-[6rem] border border-[#3D3D3D] bg-[#111111] bg-opacity-50 backdrop-blur-[17.5px] hover:bg-[#3D3D3D]">
            <Image src={GithubIcon} alt="icon" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CurrentLeadsCard;
