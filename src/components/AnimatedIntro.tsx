"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";

import drawnFont from "@/utils/drawnFont";

const AnimatedIntro: React.FC = () => {
  useGSAP(() => {
    gsap.registerPlugin(TextPlugin);

    gsap.from("#AnimatedLogoSVG", {
      duration: 2,
      text: "",
      ease: "none",
    });
  }, []);

  return (
    <header className="w-full h-[15vh] sm:h-[20vh] flex">
      <h1
        id="AnimatedLogoSVG"
        className={`${drawnFont} m-auto text-[45px] sm:text-[70px] lg:text-[95px]`}
      >
        immortal mags
      </h1>
    </header>
  );
};

export default AnimatedIntro;
