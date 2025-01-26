"use client";

import Image from "next/image";
interface Props {
  image: string;
  name: string;
  position: string;
  company: string;
  message: string;
}
const imgStyle: any = {
  // height: 53,
  // width: 53,
  objectFit: "cover",
  objectPosition: "center",
};

const AlumuniCard = ({ image, name, position, company, message }: Props) => {
  return (
    <div className=" mx-8 my-10 h-[200px] w-[300px] sm:mx-6 md:mx-10 md:my-24 md:h-[250px]  md:w-[480px]">
      <div className="mx-1 box-border flex h-[190px] flex-col justify-between overflow-hidden  rounded-[10px] border-[1px] border-solid border-white bg-[#25252580] px-4 py-4 text-start font-sans font-normal text-white backdrop-blur-[5px] hover:shadow-blue2 md:mx-3  md:h-[240px] md:px-5">
        <div className="flex pb-[17px] md:pb-7 ">
          <Image
            src={image}
            height={84}
            width={84}
            className=" h-[35px] w-[35px] rounded-full md:h-[53px]  md:w-[53px] "
            style={imgStyle}
            alt="name"
          />
          <div className="pl-[14px] md:pl-6">
            <h1 className="text-lg md:text-2xl ">{name}</h1>
            <h2 className="md:text-md text-sm md:leading-6">
              {position} {company}
            </h2>
          </div>
        </div>
        <div className="relative flex pb-3 md:px-3 md:pb-6">
          <div className=" h-[100%] w-[2px] bg-blue-600 text-blue-600">.</div>
          <p className="pl-5 text-xs md:text-base md:leading-6">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default AlumuniCard;
