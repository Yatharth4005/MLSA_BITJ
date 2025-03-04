"use client";

import { YOUTUBE_URL } from "@/constants";
import NavbarItem from "./NavbarItem";

type MobileMenuProps = {
  visible?: boolean;
};

const MobileView = ({ visible }: MobileMenuProps) => {
  if (!visible) {
    return null;
  }
  return (
    <>
      <div className="fixed right-[24px] mt-2 flex w-[220px] flex-col gap-2 rounded-md bg-gradient-to-b from-[#042179] to-[#949fc0] pb-3 pt-2 text-center font-semibold md:hidden ">
        <NavbarItem href="/events" mobileView={true}>
          Events
        </NavbarItem>
        <NavbarItem href="/projects" mobileView={true}>
          Projects
        </NavbarItem>
        <NavbarItem href="https://mlsabitjaipur.substack.com/" mobileView={true}>
          Blog
        </NavbarItem>
        <NavbarItem href="/members" mobileView={true}>
          Members
        </NavbarItem>
        <NavbarItem href="/gallery" mobileView={true}>
          Gallery
        </NavbarItem>
        <NavbarItem href={YOUTUBE_URL} mobileView={true}>
          Home
        </NavbarItem>
        <NavbarItem href="/contact" type="button" mobileView={true}>
          Contact
        </NavbarItem>
      </div>
    </>
  );
};

export default MobileView;
