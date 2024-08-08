import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";

import drawnFont from "@/utils/drawnFont";
import Magazine from "@/types/IMagazine";
import Image from "next/image";

const SingleMagazineHeader: React.FC<{ meta: Magazine }> = ({ meta }) => {
  return (
    <section className="w-full h-[30vh] flex">
      <div className="absolute w-full h-[30vh]">
        <div className="relative w-full h-full border-b border-black">
          <Image
            src={meta.imageCover[0].url}
            alt={`${meta.name} Cover Image`}
            className="object-cover"
            fill
          />
        </div>
      </div>

      <p
        className={`m-auto z-10 bg-black text-white text-4xl px-2 ${drawnFont}`}
      >
        {meta.name}
      </p>
    </section>
  );
};

export default SingleMagazineHeader;
