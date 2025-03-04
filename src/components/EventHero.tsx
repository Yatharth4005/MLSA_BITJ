import { Just_Another_Hand } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { BsCalendar4Week } from "react-icons/bs";
const anotherHand = Just_Another_Hand({
  subsets: ["latin"],
  weight: "400",
});
const EventHero = () => {
  return (
    <>
      <div className="absolute inset-0 mx-auto max-w-[1920px]">
        <Image
          src="/heroLeft.png"
          alt="hero left gradient"
          width={700}
          height={700}
          className="z-1 absolute left-0 top-0 h-[60%] w-[80%] max-w-[1920px] md:h-full md:w-[50%] "
        />
        <div className="absolute right-0 top-[22rem] z-20 h-[120vh] w-[50%] max-w-[1920px] opacity-60 lg:h-[100vh] lg:w-[40%]">
          <Image
            src="/heroRight.png"
            alt="hero right gradient"
            width={1000}
            height={800}
            className="z-8 h-full w-full"
          />
        </div>
      </div>
      <div className="relative">
        <div className=" no-repeat h-[400px] w-full bg-[url('/EventHero.png')] bg-cover bg-center  bg-no-repeat md:h-[88vh]">
          <div className="mx-auto h-[100px] w-[93%]  text-right text-white">
            .
            <div className="shadow-gray mx-auto mt-[5rem] flex  items-center justify-between rounded-xl border-[1px] border-solid   border-[#858585] bg-[#25252580] py-4 text-white md:py-2  lg:w-[100%] ">
              <Link href={""} target="_blank">
                {/* <Image
                  src=''
                  alt=""
                  width={150}
                  height={150}
                  className=" ml-6 sm:ml-10 h-[105px] w-[100px] md:h-[125px] object-cover md:w-[120px] lg:h-[150px] lg:w-[130px] "
                /> */}
              </Link>
              <div className="flex cursor-default flex-col  items-end justify-between pr-3 pt-3  text-right font-normal capitalize md:text-lg lg:text-xl">
                <div className="flex flex-col">
                  <h1 className="text-[15px] font-semibold md:py-1 md:text-xl md:leading-2 lg:text-2xl lg:leading-4">
                    Upcoming!
                  </h1>

                  <div className="my-2 flex items-center justify-end gap-1">
                    <BsCalendar4Week />
                    <p>Soon!</p>
                  </div>
                  <div className="duration-50 my-1 mb-2 mt-1 h-[2px] w-[100%] bg-gradient-to-r from-transparent  to-[#ffffff] lg:my-2 "></div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 ">
                    <p className="py-1 text-end text-xs font-[100px] md:text-base lg:py-2"></p>
                    <div className="flex items-center justify-end gap-1 md:text-lg lg:text-xl">
                      <p className=""> </p>
                    </div>
                  </div>
                </div>
                <Link href="https://linktr.ee/mlsabitjaipur" target="_blank">
                  <button className=" mb-[15px]  flex w-full items-center justify-center  whitespace-nowrap rounded-[100px] bg-gradient-to-r from-[#0070C5] to-[#3BABCF]  px-2  py-1 text-xs lg:px-8 lg:text-xl  ">
                    Register Now
                  </button>
                </Link>
              </div>
            </div>
            {/* <div className={`${anotherHand.className} registerNow  mr-[9%] mt-2 md:mt-4 lg:mt-6`}>
              <p className="text-4xl relative md:text-[35px] lg:text-5xl">Register Now
                <Image
                  width={50}
                  height={60}
                  src="/arrow.svg"
                  alt="arrow"
                  className="absolute w-[18%] h-[100%] right-[-11.8%] top-[-20px] md:top-[-25px] lg:top-[-30px]"
                /></p>

            </div> */}
          </div>
        </div>
        <div className="jj  absolute bottom-[-3px] w-[100vw] px-10 text-left text-3xl md:text-4xl lg:text-5xl">
          <h1 className="leading-20 mx-[-10px] bg-gradient-to-br from-[#5051F9]  to-[#DFDFFF] bg-clip-text font-semibold text-transparent lg:mx-[19px]">
            Events
          </h1>
          <h2 className="mx-[-10px] text-[18px] md:text-[25px] lg:mx-[19px] lg:py-1 lg:text-[33px]">
            Upcoming
          </h2>
        </div>
      </div>
    </>
  );
};

export default EventHero;
