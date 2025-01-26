import React from "react";

interface Props {
  isHome: boolean;
  logo: React.ReactNode | number;
  heading: string;
  about: string;
}

const DomainCard = ({ isHome, logo, heading, about }: Props) => {
  const logoTyp = typeof logo;
  return (
    <>
      <div
        className={`${
          isHome ? "4xl:h-[319px] 4xl:max-w-[475px] " : " h-[120%] shadow-blue"
        } gradient-border group relative mt-[38px] w-[93%] rounded-[8px] border border-[#838383] bg-[#111] pb-1 pr-[6.53px]  pt-[10.93px] transition duration-200   hover:shadow-blue  sm:mt-[44px] md:mt-[60px] md:max-w-[300px]  md:pr-[17px] xl:max-w-[300px] 2xl:mt-[122px] 2xl:min-h-[280px] 2xl:max-w-[370px] 2xl:rounded-[15px] `}
      >
        <div
          className={`${
            logoTyp === "number"
              ? " text-black lg:top-[-30px] lg:h-[58px] lg:w-[58px] lg:text-lg"
              : " text-[#3B61CF] lg:text-4xl 2xl:top-[-48px] 2xl:h-[96px] 2xl:w-[96px] "
          } text-md absolute left-[12px] top-[-33px] flex h-[66px] w-[66px] items-center justify-center rounded-full border-2 border-[#286FD9] bg-[#111111] px-3  py-3 font-semibold sm:text-2xl lg:px-4  2xl:px-6 2xl:py-4`}
        >
          {logo}
        </div>
        <h1
          className={`${
            isHome ? "4xl:h-[3rem] 4xl:text-4xl " : ""
          } mr-[2px] bg-gradient-to-r from-[#286FD9] to-[#50CAFF]  bg-clip-text text-end text-xl font-[550] text-transparent sm:mr-[9px] md:mr-[6.86px]  md:text-2xl md:font-semibold`}
        >
          {heading}
        </h1>
        <p
          className={`${
            isHome ? "md:ml-[32px]  4xl:text-xl" : "mx-5  text-xl "
          } mb-1 ml-[9px]  mt-[12.35px] text-base leading-[25px] text-[#7d8590] transition duration-400 group-hover:text-white sm:ml-[12.92px] sm:mt-[25.83px] md:mt-[35px] lg:mt-[44px] 2xl:mt-[46px] 4xl:text-lg`}
        >
          {about}
        </p>
      </div>
    </>
  );
};

export default DomainCard;
