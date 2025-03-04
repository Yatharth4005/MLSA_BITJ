"use client";

import { YOUTUBE_URL } from "@/constants";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { VscChromeClose } from "react-icons/vsc";
import MobileView from "./MobileView";
import NavbarItem from "./NavbarItem";

const OFFSET = 20;

const Navbar = () => {
  const [showBackground, setShowBackground] = useState(false);
  const [showMobileMenu, setShowmobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= OFFSET) {
        setShowBackground(true);
      } else setShowBackground(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setShowmobileMenu((current) => !current);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 mx-auto w-screen max-w-full py-4 pl-2 pr-4 transition-all sm:pl-4 sm:pr-6 lg:max-w-[1920px] lg:pl-6 lg:pr-10 ${
        showBackground ? "backdrop-blur-md" : ""
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/">
            {/* <Image
              src="/logo.png"
              alt="MLSA Logo"
              width={400}
              height={400}
              loading="eager"
              className="h-[35px] w-[140px] md:h-[40px] md:w-[160px] lg:h-[50px] lg:w-[197px]"
            /> */}
          </Link>
          {/* <span className="bg-gradient-to-r from-[#0070C5] to-[#3BABCF] bg-clip-text text-[20px] font-semibold text-transparent lg:text-[1.7vw]">
            MLSA <span className="hidden md:inline-block">KIIT</span>
          </span> */}
        </div>
        <div onClick={toggleMobileMenu} className="ml-2 md:hidden">
          {!showMobileMenu ? (
            <AiOutlineMenu className="text-xl" />
          ) : (
            <VscChromeClose className="text-xl" />
          )}
          <MobileView visible={showMobileMenu} />
        </div>
        <div className="hidden gap-4 text-white md:flex md:items-center md:gap-1 xl:gap-6">
          <NavbarItem href="/events">Events</NavbarItem>
          <NavbarItem href="/projects">Projects</NavbarItem>
          <NavbarItem href="https://mlsabitjaipur.substack.com/" external={true}>
            Blog
          </NavbarItem>
          <NavbarItem href="/gallery">Gallery</NavbarItem>
          {/*   <NavbarItem href="/members">Members</NavbarItem> */}
          <NavbarItem href={YOUTUBE_URL} external={true}>
            Home
          </NavbarItem>
          {/* <NavbarItem href="/auth/login" type="button">
            Join Us
          </NavbarItem> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
