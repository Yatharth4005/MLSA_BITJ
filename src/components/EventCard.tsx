"use client";

import { EVENTS2020, EVENTS2021, EVENTS2022, EVENTS2023 } from "@/constants";
import Image from "next/image";
import { useState } from "react";

const EventCard = () => {
  const [check, setcheck] = useState(false);

  return (
    <>
      <div className="mx-auto max-w-[1920px] bg-black p-[5vw] md:pt-[100px]  ">
        <div className=" flex flex-col-reverse  md:flex-row">
          <div className="relative">
            <img
              src="./students.JPG"
              alt="image"
              className="w-[680px] h-[300px] ml-[0.22rem] mb-[1.5rem] rounded-[20px] md:rounded relative object-cover object-center group hover:shadow-blue2 duration-300 hover:ease-in-out"
            />
            <Image
              alt="image"
              src="/students2.jpg"
              width={800}
              height={300}
              className="ml-[0.22rem] mb-[1rem] rounded relative group"
            />
            <div
              className="absolute bottom-[45px] left-[18px] text-base 3xl:text-3xl font-medium drop-shadow-2xl"
              style={{ textShadow: "1.5px 1.5px black", lineHeight: "normal" }}
            >
              27th January 2025
            </div>
            <div
              className="absolute bottom-[26px] left-[18px] text-base 3xl:text-3xl font-medium drop-shadow-2xl"
              style={{ textShadow: "1.5px 1.5px black", lineHeight: "normal" }}
            >
              100+ Attendees
            </div>
            <div
              className="absolute bottom-[72px] left-[18px] text-xl 3xl:text-3xl font-medium drop-shadow-2xl"
              style={{ textShadow: "1.5px 1.5px black", lineHeight: "normal" }}
            >
              Orientation Session MLSA
            </div>
          </div>
          <div className="flex md:flex-col ml-3 md:ml-[2.5rem]">
            <h1 className="text-2xl md:text-3xl lg:text-4xl pb-4 mt-[-0.7rem] font-semibold bg-gradient-to-br from-[#5051F9] to-[#DFDFFF] bg-clip-text text-transparent tracking-[1px]">
              Recently at
            </h1>
            <h1 className="text-2xl ml-2 md:ml-[0px] mt-[-0.7rem] pb-4 md:text-3xl lg:text-4xl bg-gradient-to-b font-semibold from-[#5051F9] to-[#DFDFFF] bg-clip-text text-transparent tracking-[1px]">
              MLSA
            </h1>
          </div>

        </div>
        <div className=" mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 ">
          {EVENTS2023.map((event, index) => {
            return (
              <>
                <div
                  key={index}
                  className="gallery-gradient group relative h-[300px] w-full overflow-hidden  rounded-[20px] sm:h-[22vw] md:rounded-[4px] lg:h-[19.21vw] 3xl:h-[369px]"
                >
                  {
                    <Image
                      src={event}
                      width={555}
                      height={355}
                      className="z-10 block h-full w-full object-cover object-center transition duration-700 "
                      alt="gallery"
                    ></Image>
                  }

                  <div className="absolute bottom-16 left-4 z-40 text-xl font-normal text-white 3xl:text-3xl ">
                    {event}
                  </div>
                  <div className="absolute bottom-9 left-4 z-40 text-base font-normal text-white 3xl:text-3xl ">
                    {event}
                  </div>
                  <div className="absolute bottom-4 left-4 z-40 text-base font-normal text-white 3xl:text-3xl ">
                    {event}
                  </div>
                </div>
              </>
            );
          })}

          {EVENTS2022.map((event, index) => {
            return (
              <>
                {check == true ? (
                  <div
                    key={index}
                    className="gallery-gradient group relative h-[300px] w-full overflow-hidden  rounded-[20px] sm:h-[22vw] md:rounded-[7px] lg:h-[19.21vw] 3xl:h-[369px]"
                  >
                    <Image
                      src={event}
                      width={555}
                      height={355}
                      className="z-10 block h-full w-full object-cover transition duration-700 "
                      alt="gallery"
                    ></Image>

                    <div className="absolute bottom-16 left-4 z-50 text-xl font-normal text-white 3xl:text-3xl ">
                      {event}
                    </div>
                    <div className="absolute bottom-9 left-4 z-50 text-base font-normal text-white 3xl:text-3xl ">
                      {event}
                    </div>
                    <div className="absolute bottom-4 left-4 z-50 text-base font-normal text-white 3xl:text-3xl ">
                      {event}
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </>
            );
          })}
          {EVENTS2021.map((event, index) => {
            return (
              <>
                {check == true ? (
                  <div
                    key={index}
                    className="gallery-gradient group relative h-[300px] w-full overflow-hidden  rounded-[10px] sm:h-[22vw] lg:h-[19.21vw] lg:rounded-[7px] 3xl:h-[369px]"
                  >
                    <Image
                      src={event.img}
                      width={555}
                      height={355}
                      className="z-10 block h-full w-full object-cover transition duration-700 "
                      alt="gallery"
                    ></Image>

                    <div className="absolute bottom-16 left-4 z-50 text-xl font-normal text-white 3xl:text-3xl ">
                      {event.ProjectName}
                    </div>
                    <div className="absolute bottom-9 left-4 z-50 text-base font-normal text-white 3xl:text-3xl ">
                      {event.date}
                    </div>
                    <div className="absolute bottom-4 left-4 z-50 text-base font-normal text-white 3xl:text-3xl ">
                      {event.numParticipants}
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </>
            );
          })}
          {EVENTS2020.map((event, index) => {
            return (
              <>
                {check == true ? (
                  <div
                    key={index}
                    className="gallery-gradient group relative h-[300px] w-full overflow-hidden  rounded-[10px] sm:h-[22vw] lg:h-[19.21vw] lg:rounded-[7px] 3xl:h-[369px]"
                  >
                    <Image
                      src={event}
                      width={555}
                      height={355}
                      className="z-10 block h-full w-full object-cover transition duration-700"
                      alt="gallery"
                    ></Image>

                    <div className="absolute bottom-16 left-4 z-50 text-xl font-normal text-white 3xl:text-3xl ">
                      {event}
                    </div>
                    <div className="absolute bottom-9 left-4  z-50 text-base font-normal text-white 3xl:text-3xl ">
                      {event}
                    </div>
                    <div className="absolute bottom-4 left-4  z-50 text-base font-normal text-white 3xl:text-3xl ">
                      {event}
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </>
            );
          })}
        </div>
      </div>

      {check == false ? (
        <div
          className={`group my-[5rem] mr-[5.8vw] mt-[10px] flex w-full cursor-pointer items-center sm:mx-[4rem] md:mx-[4rem] md:mt-[90px] lg:mx-[4rem] 2xl:mx-[4rem] 3xl:mx-[4rem] 3xl:mr-[0px]`}
        >
          <div className={`group-hover:bg-gray-300} my-[-5rem] h-[1px] w-[80%] bg-[#FFFFFF]`}></div>
          <div
            onClick={() => {
              setcheck(true);
            }}
            className={`group-hover:text-[#828282]} my-[-15rem]  ml-2 flex-shrink-0 text-[17px] font-normal capitalize leading-none text-white transition duration-300 lg:text-[23px] 3xl:text-[35px] `}
          ></div>
        </div>
      ) : (
        <></>
      )}

      {check == false ? (
        <>
          <div className="mx-[0.9rem] my-auto h-[1px] w-[70%] bg-[#FFFFFF] group-hover:bg-gray-300 lg:mx-[3.8rem] lg:w-[81.5%]"></div>
          <div
            className="3xl:-[35px] mb-5 mt-[-0.8rem] flex cursor-pointer justify-end text-[17px] hover:text-[#828282] lg:mr-[4.5rem] lg:mt-[-1.2rem] lg:text-[20px] 2xl:text-[25px]"
            onClick={() => {
              setcheck(true);
            }}
          ></div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default EventCard;
