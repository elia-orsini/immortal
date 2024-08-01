import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";

import drawnFont from "@/utils/drawnFont";
import Magazine from "@/types/IMagazine";
import Image from "next/image";

const SingleMagazineHeader: React.FC<{ meta: Magazine }> = ({ meta }) => {
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
      <div className="absolute w-full h-[30vh]">
        <div className="relative w-full h-full border-b border-black">
          <Image
            src={meta.imageCover[0].url}
            alt={`${meta.name}_bg_image`}
            className="object-cover"
            fill
          />
        </div>
      </div>

      <p className="m-auto z-10 bg-black text-white text-4xl px-2">
        {meta.name}
      </p>
    </div>
  );
};

export default SingleMagazineHeader;
