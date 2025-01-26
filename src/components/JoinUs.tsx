"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const JoinUs: React.FC = () => {
  const textControls = useAnimation();
  const sliderControls = useAnimation();
  const handleSliderAnimationComplete = () => {
    textControls.start({ opacity: 1, x: 30, y: 0 }); //determines final  positionn of text after completion of animation
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      sliderControls.start({ opacity: 1, x: 200 });
    }, 0);

    return () => clearTimeout(timer);
  });
  const controls = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY; //determines how much the user has scrolled
      const windowHeight = window.innerHeight; //determines the height of the  device the user is using
      let num: number;
      if (windowHeight > 720) {
        num = 0.3;
      } else if (windowHeight > 650) {
        num = 0.25;
      } else {
        num = 0.2;
      }

      window.addEventListener("scroll", function () {
        var scrollPosition = window.scrollY;
        if (scrollPosition > windowHeight / 0.3) {
          const element = document.getElementById("myElement"); // gets the circle on top of the slider

          if (element) {
            setTimeout(() => {
              element.classList.add("shadow-magenta"); // Glow adder for slider
            }, 2500); // adds delay to the glow so that the glow starts after animation is complete
          }
        } else {
          const element = document.getElementById("myElement"); // gets the circle on top of the slider

          if (element) {
            element.classList.remove("shadow-magenta"); // Glow remover for slider
          }
        }
      });

      if (scrollPosition > windowHeight / num) {
        controls.start({ opacity: 1, y: 0, x: 0 });
        controls2.start({ opacity: 1, y: 0, x: 0, scale: 1 });
        controls3.start({ opacity: 1, y: 0, x: 0 });
        // } //Final position for slider
      } else {
        controls.start({ opacity: 0, y: 260, x: 0 }); //Initial starting positionn for slider
        controls2.start({ opacity: 0, y: 0, x: 0, scale: 0.5 });
        controls3.start({ opacity: 0, y: 0, x: 0 });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <div className="relative  z-0 mx-auto flex min-h-[100px] max-w-[1920px] flex-row items-center justify-center pb-8 md:mt-[80px] md:pb-20 ">
        <div className="flex w-full pl-4 pt-12 md:pl-[50px] lg:pl-[80px] xl:pl-[90px] 2xl:pl-[130px]">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 260 }} //before scrolling position of slider
            animate={controls} //refer to line 20
            transition={{ duration: 1.5 }} //slider duration for popping up. if you are changinng duration then make sure to change delay of glow adder so thatt  the gow starts after animation is complete
            onAnimationComplete={handleSliderAnimationComplete}
          >
            <div className="flex flex-col items-center">
              <div
                className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#3BABCF] bg-gradient-to-b from-[#3B61CF] to-[#fff]/30 shadow-dotShadowBlue  transition duration-700 md:h-[41px] md:w-[41px] 
              "
              >
                <div className="h-[12px] w-[12px] self-center rounded-full bg-white"></div>
              </div>

              <div className="h-[330px] w-[5px] bg-gradient-to-b  from-[#3BABCF] to-transparent transition duration-700 md:h-[500px] ">
                <Image
                  src="/joinus.svg"
                  alt="vector"
                  height={80}
                  width={50}
                  className="absolute top-[35%] h-[30%]  w-[8%] sm:h-[40%] sm:w-[5%] md:top-[23%] 2xl:w-[3.5%]"
                />
              </div>
            </div>
          </motion.div>

          <div className=" w-[85vw] ">
            <div className="flex  w-full items-center justify-between  pl-[11px] sm:pl-[9px] md:pl-[16px] 2xl:pl-[57px]">
              <motion.div
                className="w-[58%] md:w-[70%]"
                initial={{ opacity: 0 }}
                animate={controls3}
                transition={{ duration: 1.5 }}
                onAnimationComplete={handleSliderAnimationComplete}
              >
                <div className="mt-6 flex items-center  justify-between font-bold md:mr-10 ">
                  <div className=" ">
                    <div className="pl-6 pt-[70px] text-[24px] text-sm font-semibold sm:pl-[40px] sm:text-lg md:pl-[60px] md:text-2xl lg:pl-[80px] lg:text-3xl">
                      <h1 className="bg-gradient-to-r  from-[#0070C5] to-[#3BABCF] bg-clip-text text-transparent">
                        Join
                      </h1>
                      <div className="duration-50 my-2  h-[4px] w-[140%] bg-gradient-to-r from-[#456FDC] to-transparent  sm:my-3 "></div>

                      <h1>
                        Microsoft Learn{" "}
                        <span className=" bg-gradient-to-r  from-[#0070C5] to-[#3BABCF] bg-clip-text text-transparent">
                          Student
                        </span>
                      </h1>
                      <h1>Ambassador</h1>
                      <h1 className="font-normal">BIT Chapter</h1>
                    </div>
                    <Link href="#footer" className="">
                      <button className="my-[15px] ml-5 flex items-center justify-center  whitespace-nowrap rounded-[100px] bg-gradient-to-r from-[#0070C5]  to-[#3BABCF] px-3 py-[5px] text-xs font-normal  text-white sm:ml-[42px] sm:text-sm md:ml-[62px] md:px-4 md:py-[7px] md:text-base lg:ml-[82px]  lg:text-lg ">
                        Contact Us
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="flex w-[58%] justify-end md:w-[30%]"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={controls2}
                transition={{ duration: 0.8 }}
                onAnimationComplete={handleSliderAnimationComplete}
              >
                <Image
                  width={400}
                  height={400}
                  src="/mlsaLogo2.png"
                  alt="rectangle "
                  className="mr-3 mt-28 h-[60%] w-[65%] max-w-[265px] md:mr-24"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinUs;
