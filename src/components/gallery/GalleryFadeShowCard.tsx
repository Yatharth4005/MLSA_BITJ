import "@/styles/globals.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ProjectWing_GALLERY } from "./data";

type GalleryImage = {
  img: string;
};

type GalleryFadeShowCardProps = {
  imgArray: GalleryImage[];
  title: string;
  num: number;
  timer: number;
};

const GalleryFadeShowCard = ({ imgArray, title, num, timer }: GalleryFadeShowCardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % ProjectWing_GALLERY.length);
    }, timer); // Set the desired interval time (in milliseconds)

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="group relative mb-[15px] h-[35vh] max-h-[600px] w-full overflow-hidden rounded-lg border border-gray-400 object-cover object-center md:w-[40vw] lg:h-[55vh] lg:w-[22vw] 4xl:w-[400px]">
      {imgArray.slice().map((pic, index) => (
        <Image
          key={index}
          src={pic.img}
          alt={title}
          width={700}
          height={700}
          loading="lazy"
          className={`scale[80%] opacity-1 duration-2000 absolute inset-0 h-full w-full transform rounded-lg object-cover object-center transition-all ease-in-out group-hover:scale-105
            ${index === currentIndex ? "opacity-1" : "opacity-0"}
          `}
        ></Image>
      ))}
      <div className="absolute bottom-0 h-[25%] w-full bg-gradient-to-t from-black to-transparent"></div>

      <div className="absolute inset-0 flex h-full w-full justify-between">
        <div className="self-end pb-4 pl-4 text-xl font-medium md:text-2xl xl:text-3xl">
          {title}
        </div>
        <div className="flex flex-col items-end justify-center gap-4 bg-gradient-to-l from-black to-transparent">
          <div className="mr-[13px] h-[75%] w-[1px] bg-white opacity-50"></div>
          <div className="number-gap -rotate-90 transform text-2xl font-bold text-gray-300 md:text-3xl xl:text-4xl">
            0{num}.
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryFadeShowCard;
