import { ILayoutProps } from "@/types";
import Link from "next/link";

interface NavbarItemProps extends ILayoutProps {
  href: string;
  type?: "button" | "link";
  className?: string;
  mobileView?: boolean;
  external?: boolean;
}

const NavbarItem = ({
  children,
  href,
  type = "link",
  className = "",
  mobileView,
  external = false,
}: NavbarItemProps) => {
  if (type === "button") {
    return (
      <Link href={href}>
        <button
          className={`bg-gradient-blue text-md rounded-full bg-gradient-to-r from-[#0070C5] to-[#3BABCF] px-7 py-1.5 hover:from-[#1e00c7] hover:to-[#52a8ff] 2xl:text-[1vw]
          ${mobileView ? "text-xl text-white drop-shadow-md" : "text-white"}`}
        >
          {children}
        </button>
      </Link>
    );
  }
  // #0070C5
  return (
    <Link href={href} target={`${external ? "_blank" : ""}`}>
      <div className="group flex flex-col items-center">
        <div className="trasnition-opacity h-[2px] w-full -translate-y-[-10px] bg-white opacity-0 duration-300 group-hover:-translate-y-0 group-hover:opacity-70"></div>
        <div
          className={`text-md cursor-pointer  py-1.5 text-sm font-medium transition duration-300 ease-in-out hover:duration-500 group-hover:bg-[#111]/40 md:px-2 lg:px-4 2xl:text-[1vw]
        ${className} ${mobileView && "w-full text-center text-xl text-white"} 
      `}
        >
          {children}
        </div>
        <div className="trasnition-opacity h-[2px] w-full translate-y-[-10px] bg-white opacity-0 duration-300 group-hover:translate-y-0 group-hover:opacity-70"></div>
      </div>
    </Link>
  );
};

export default NavbarItem;
