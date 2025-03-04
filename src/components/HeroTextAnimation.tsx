import { useEffect, useState } from "react";

type HeroTextAnimationProps = {
  texts: string[];
};

const HeroTextAnimation = ({ texts }: HeroTextAnimationProps) => {
  const [textAnimation, setTextAnimation] = useState(texts[0]);

  useEffect(() => {
    let currentIndex = 1;
    let intervalId: ReturnType<typeof setInterval> | undefined;

    const animateText = () => {
      const currentText = texts[currentIndex];
      let newText = "";

      for (let i = 0; i < currentText.length; i++) {
        setTimeout(() => {
          newText += currentText[i];
          setTextAnimation(newText);
        }, i * 150);
      }

      currentIndex = (currentIndex + 1) % texts.length;

      if (currentIndex === 0) {
        clearInterval(intervalId);
      }
    };

    intervalId = setInterval(animateText, texts.length * 550);

    return () => {
      clearInterval(intervalId);
    };
  }, [texts]);

  return (
    <div
      className={`ml-2 flex overflow-hidden bg-gradient-to-r from-[#45F4FF] to-[#572EFA] bg-clip-text text-start text-transparent`}
    >
      {texts.map((text, index) => (
        <span
          key={index}
          className={`w-full flex-shrink-0 transition-transform duration-1000 ease-in-out`}
        >
          {textAnimation}
        </span>
      ))}
    </div>
  );
};

export default HeroTextAnimation;
