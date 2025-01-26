import Image from "next/image";
import "../styles/globals.css";
import Link from "next/link";

const HeroProjectCard = ({ index, project }: any) => {
  return (
    <Link
      target="_blank"
      href={project.github}
      key={index}
      className="back relative flex h-[150px] w-[192px] items-center justify-center overflow-hidden rounded-[15%]"
    >
      <div className="hero_border_rotation absolute inset-0 h-full w-full rounded-[15%] bg-gradient-to-br from-[#704796] via-[#9B6FEE00] to-[#1C63D3]" />
      <div className="relative flex h-[145px] w-[187px] items-center justify-center rounded-[15%] bg-black">
        <Image
          src={project.img}
          alt={project.ProjectName}
          width={15}
          height={15}
          className="h-1/2 w-1/2"
        />
      </div>
    </Link>
  );
};

export default HeroProjectCard;
