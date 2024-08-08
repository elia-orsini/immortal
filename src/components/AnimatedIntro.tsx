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
    <div className="w-full h-[30vh] flex">
      <p
        id="AnimatedLogoSVG"
        className={`${drawnFont} m-auto text-[50px] sm:text-[90px]`}
      >
        immortal mags
      </p>
    </div>
  );
};

export default AnimatedIntro;
