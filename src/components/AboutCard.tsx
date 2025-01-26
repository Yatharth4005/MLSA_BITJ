import React from "react";

type aboutCardProps = {
  icon: React.ReactNode;
  label: string;
  Classname: string;
  content: string;
};

const AboutCard = ({ icon, label, Classname, content }: aboutCardProps) => {
  return (
    <>
      <div
        className={`shadow-lg group w-full flex-shrink-0 rounded-xl bg-[#252525]/50 px-4 py-3 transition duration-400 hover:shadow-aboutContainerShadow sm:max-w-[500px] md:w-[35vw] md:max-w-[330px] md:py-6 lg:w-[30vw] lg:min-w-[280px] lg:max-w-[350px] lg:py-4 xl:w-[20vw] 3xl:max-w-[423px] ${Classname}`}
      >
        {/* <Image src="/Rectangle.png" alt="" width={700} height={700} className="absolute top-0"></Image> */}
        <div className="flex items-center justify-between">
          <div className="rounded-full bg-[#252525] px-4 py-4 text-[#3B61CF] shadow-mobileAboutShadow transition duration-400 md:px-5 md:py-5 md:shadow-aboutLogoShadowBlue">
            <span>{icon}</span>
          </div>
          <div className="mr-2 h-[3px] w-full bg-gradient-to-l from-[#4b8ff4] to-transparent md:h-[5px]"></div>
          <div className="text-xl text-white md:text-2xl 3xl:text-3xl">{label}</div>
        </div>
        <p className="cursor-default pt-4 text-base leading-[25px] text-[#7d8590] transition duration-400 group-hover:text-white md:pt-8 3xl:text-lg">
          {content}
        </p>
      </div>
    </>
  );
};

export default AboutCard;
