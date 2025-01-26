"use client";

import Image from "next/image";

const Members = () => {
  return (
    <>
      {/* wrapper-outer h-[100vh] */}
      {/* wrapper  */}
      {/* parallax-section */}
      <div className="h-full">
        <div className="h-full overflow-x-hidden ">
          <div className=" teams-gradient relative flex min-h-[90vh] w-[100vw] items-center justify-center p-[5px]">
            <div className=" parallax-bg absolute bottom-0 left-0 right-0 top-0 -z-10 min-h-full bg-cover object-fill"></div>
            <Image
              src="/comingsoon.jpg"
              width={3000}
              height={100}
              alt="members"
              className="no-repeat absolute bottom-0 left-0 right-0 top-0 h-[88vh] w-full bg-cover bg-center bg-no-repeat object-cover"
            ></Image>
            <div className=" absolute bottom-0 left-0 z-30 h-[60px] w-full bg-black text-[32px]  font-semibold">
              {" "}
              <span className="ml-[10px] bg-gradient-to-r from-[#5051F9] to-[#AE86E0] bg-clip-text  leading-[2rem] text-transparent md:ml-[35px] md:text-[40px] lg:text-[60px] lg:leading-[3rem] xl:ml-[80px] 3xl:text-[80px]">
                Our Team
              </span>
            </div>
            <Image
              src="/Rectangle-shadow.svg"
              width={300}
              height={300}
              alt="members"
              className="absolute bottom-[-314px] right-0 z-30"
            ></Image>
            {/* md:w-[400px] md:h-[400px] */}
          </div>
          <div className="parallax-section relative -mt-1 min-h-[100vh] w-[100vw] overflow-hidden bg-black pl-[10px] pr-[10px] pt-[45px] md:pl-[20px] md:pr-[30px]  md:pt-[100px] lg:pl-[50px] lg:pr-[50px]">
            {/* <Webdev />
          <div className="relative">
            <Image src="/Rectangle-shadow.svg" height={300} width={300} alt="members" className=" rotate-180 absolute left-[-50px] bottom-[-554px] z-30"></Image>
          </div>
          <Appdev />
          <div className="relative">
            <Image src="/Rectangle-shadow.svg" height={300} width={300} alt="members" className=" absolute right-[-100px] bottom-[-165px] z-30"></Image>
          </div>
          <Videoediting />
          <div className="relative">
            <Image src="/Rectangle-shadow.svg" height={300} width={300} alt="members" className="rotate-180 absolute left-[-100px] bottom-[-365px] z-30"></Image>
          </div>
          <Marketing />
          <MachineLearning />
          <div className="relative">
            <Image src="/Rectangle-shadow.svg" height={300} width={300} alt="members" className="hidden sm:block absolute right-[-100px] bottom-[-165px] z-30"></Image>
          </div>
          <GraphicDesign />
          <Creative />
          <div className="relative">
            <Image src="/Rectangle-shadow.svg" height={300} width={300} alt="members" className="rotate-180 absolute left-[-50px] bottom-[-500px] z-30"></Image>
          </div>
          <Arvr />
          <Cloud />
          <div className="relative">
            <Image src="/Rectangle-shadow.svg" height={300} width={300} alt="members" className="hidden sm:block absolute right-[-100px] bottom-[-36px] z-30"></Image>
          </div>
          <Youtube />
          <div className="relative">
            <Image src="/Rectangle-shadow.svg" height={300} width={300} alt="members" className="rotate-180 absolute left-[-50px] bottom-[-165px] z-30"></Image>
          </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Members;
