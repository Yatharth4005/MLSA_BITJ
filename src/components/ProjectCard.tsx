"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { AiOutlineGithub } from "react-icons/ai";
interface Props {
  bgColor: string;
  img: string;
  ProjectName: string;
  techStack1: string;
  techStack2: string;
  link: string;
  techImg: string;
  techImg2: string;
}

const ProjectCard = ({
  bgColor,
  img,
  ProjectName,
  techStack1,
  techStack2,
  link,
  techImg,
  techImg2,
}: Props) => {
  const containerStyle = {
    width: "calc(100% - 2vw)",
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-easing="linear"
      data-aos-delay="700"
      className="group relative  z-20 min-h-[23.75vw] w-[300px] rounded-[7px] border border-[#878787] bg-[#25252580] pb-3 text-start backdrop-blur-[5px] transition duration-300 ease-in-out hover:shadow-blue3 smm:w-[250px] sm:w-[25.8vw]   md:w-[24.39vw] md:pb-5 md:hover:shadow-blue2 lg:w-[20vw] lg:rounded-[15px] 3xl:min-h-[456px] 3xl:w-[27vw] 4xl:w-[526px] "
    >
      <div className="absolute left-[0px] top-[0px] -z-40 hidden min-h-[23.75vw] w-[300px] transition duration-300 ease-in-out group-hover:block smm:w-[250px] sm:w-[25.8vw] md:w-[24.39vw] lg:w-[20vw] 3xl:min-h-[456px] 3xl:w-[27vw] 4xl:w-[526px]">
        <Image
          src="/Projects/Rectangle (6).svg"
          alt="event item"
          width={555}
          height={555}
          className=" object-fit h-full w-full rounded-full blur-[150px]"
        ></Image>
        {/* <div className="h-[25vw] w-[25vw] hidden group-hover:visible absolute top-[5vw] left-[5vw] rounded-full bg-blue-300 -z-10 "></div> */}
        {/* <style jsx>{`
                  .hover-shadow{
                    border-radius: 553.5px;
                    background: url("/domainLogos/Rectangle (5).png"), cover no-repeat;
                    filter: blur(200px);
                    height: 30vw;
                    width: 30vw;
                    z-index:30;
                  }
                `}</style> */}
      </div>
      <div className="mx-auto pt-[1.35vw] 3xl:pt-[26px]" style={containerStyle}>
        <Image
          src={img}
          alt="event item"
          width={1440}
          height={720}
          className="h-[100px] w-full rounded-[10px] md:h-[11.04vw] 3xl:h-[212px] "
        ></Image>
        <div className=" ml-[.57vw] pt-[1.45vw] text-[#FFF] 3xl:ml-[11px] 3xl:pt-7">
          <div>
            <h2 className="cursor-pointer text-[15px] font-normal capitalize leading-normal sm:text-[0.7rem] md:text-[1rem] lg:text-[1.1rem] 2xl:text-xl 3xl:text-3xl">
              {ProjectName}
            </h2>
            <div className=" mt-[.62vw] flex cursor-default flex-col text-[13px] font-[350] leading-normal lg:text-[15px] 2xl:text-[18px] 3xl:mt-3">
              <span>{techStack1}</span>
              <span>{techStack2}</span>
            </div>
          </div>
          <div className="mt-[15px] flex items-center justify-between">
            <div className="relative flex w-16 ">
              <div className="tech-stack-container relative">
                <style jsx>{`
                  .tech-stack-container::after {
                    // background-color: black;
                    background-color: #252525;
                  }
                `}</style>
                <Image
                  src={techImg}
                  alt="tech stack image"
                  width={100}
                  height={100}
                  className="tech-stack-left absolute left-[1.5px] top-[3.8px] h-[10px] w-[10px] rounded-full bg-white lg:left-[2px] lg:top-[5px] lg:h-[15px] lg:w-[15px] 3xl:left-[3px] 3xl:top-[7.5px] 3xl:h-[21px] 3xl:w-[21px]"
                ></Image>
              </div>
              <div className="tech-stack-container relative ml-[-5px] lg:ml-[-10px]">
                {/* <style jsx>{`
                  .tech-stack-container::after {
                    background-color: black;
                  }
                `}</style> */}
                <Image
                  src={techImg2}
                  alt="tech stack image"
                  width={100}
                  height={100}
                  className="tech-stack-left absolute left-[3px] top-[3px]  h-[11.5px] w-[11.5px] rounded-full bg-white lg:left-[4.5px] lg:top-[4.5px] lg:h-[16px] lg:w-[16px] 3xl:left-[6px] 3xl:top-[6px] 3xl:h-[23px] 3xl:w-[23px]"
                ></Image>
              </div>
              {/* <Image
                src={techImg2}
                alt="tech stack image"
                width={100}
                height={100}
                className="absolute right-[-24px] ml-2 h-[23px] w-[23px] rounded-full bg-white px-1 py-2"
              ></Image> */}
            </div>
            <Link href={link}>
              <AiOutlineGithub className=" mr-2 h-[17px] w-[17px] text-white lg:h-[25px] lg:w-[25px] 3xl:h-[35px] 3xl:w-[35px]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
