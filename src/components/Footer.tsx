import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaRegCopyright } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

type socialsProps = {
  logo: React.ReactNode;
  src: string;
};

const Socials = ({ logo, src }: socialsProps) => {
  return (
    <Link href={src} target="_blank">
      <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full border-2 border-transparent bg-transparent transition duration-1000 hover:border-[#d7d3d3]">
        {logo}
      </div>
    </Link>
  );
};

const Footer = () => {
  return (
    <>
      <div id="footer" className="custom-font bg-[#111111] bg-opacity-70 pb-8 tracking-[3px]">
        <div className="mx-auto max-w-[1500px] text-[#e7e4e4]">
          <div className="flex flex-col justify-between gap-8 px-2 py-8 sm:px-4 md:flex-row  md:gap-0 md:py-6 xl:px-16 xl:py-8">
            <div className="flex flex-col items-center md:w-[50%] md:items-start xl:w-[60%]">
              {/* <Image
                src="/logo.png"
                alt="footer logo"
                width={200}
                height={200}
                className=""
              ></Image> */}
              <p className="ml-2.5 mt-4 text-center text-xs md:text-start lg:text-sm">
                WE ENCOURAGE YOUNG MINDS TO
                <br />
                PURSUE KNOWLEDGE AND EXCELLENCE <br />
                IN UNIQUE WAYS{" "}
              </p>
              <div className="mt-8 flex justify-center gap-2 md:justify-normal">
                <Socials logo={<FaGithub />} src="https://github.com/mlsa-bitjaipur" />
                {/* <Socials
                  logo={<FaTwitter />}
                  src="https://x.com/mlsakiit"
                /> */}
                <Socials
                  logo={<FaInstagram />}
                  src="https://www.instagram.com/mlsa_bitjaipur/

"
                />
                <Socials
                  logo={<FaLinkedinIn />}
                  src="https://www.linkedin.com/company/mlsa-bit-jaipur-chapter/?viewAsMember=true"
                />
                {/* <Socials
                  logo={<FaDiscord />}
                  src="https://discord.com/invite/P6VCP2Ry3q"
                /> */}
              </div>
            </div>
            <div className="flex flex-col gap-8 text-center sm:flex-row sm:justify-around sm:text-start md:w-[300px] md:flex-col md:gap-8 md:text-justify lg:w-[40%] lg:flex-row lg:items-center ">
              <div className="flex flex-col items-center gap-[5px] text-xs font-medium tracking-[2px] sm:items-start">
                <h1 className="mb-2 text-base font-bold">CONTACT US</h1>
                <span className="group flex items-center gap-2">
                  <FaPhoneAlt className="group-hover:text-[#0070C5]" />
                  <p>+91 8619777940</p>
                </span>
                <span className="group flex items-center gap-2">
                  <FaPhoneAlt className="group-hover:text-[#0070C5]" />
                  <p>+91 8619056754</p>
                </span>
                <span className="group flex items-center gap-2">
                  <HiMail className="group-hover:text-[#0070C5]" />
                  <p>MlSABITJAIPUR@OUTLOOK.COM</p>
                </span>
              </div>
              <div className="flex flex-col gap-1.5 text-xs font-medium tracking-[2px]">
                <h1 className="mb-1 text-base font-bold">VISIT US AT</h1>
                <p className="leading-[20px]">
                  BIT
                  <br />
                  JAIPUR
                  <br />
                  INDIA
                  <br />
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4 flex justify-center">
            <div className="flex flex-col gap-1 text-xs tracking-[2px] text-[#9e9b9b] md:flex-row md:gap-4">
              <span className="flex items-center justify-center gap-2 md:justify-start">
                <FaRegCopyright />
                <p className="text-center">2025 MLSA BIT</p>
              </span>
              <span className="hidden md:block"> | </span>
              <p>DESIGNED BY MLSA BIT TEAM</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
