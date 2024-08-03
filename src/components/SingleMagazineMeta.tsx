import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";

import Magazine from "@/types/IMagazine";
import drawnFont from "@/utils/drawnFont";
import Image from "next/image";

const SingleMagazineMeta: React.FC<{ meta: Magazine }> = ({ meta }) => {
  return (
    <div className="w-full flex flex-col sm:flex-row border-b px-2 sm:px-10 border-black justify-between font-mono">
      <p className="">based in {meta.city}</p>
      <p className="">
        {meta.issuesPerYear === "-"
          ? `irregular`
          : `${meta.issuesPerYear} issues/year`}
      </p>
      <p className="">{meta.issuesNumber} issues total</p>
    </div>
  );
};

export default SingleMagazineMeta;
