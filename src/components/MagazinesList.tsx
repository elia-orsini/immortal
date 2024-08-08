"use client"

import Magazine from "@/types/IMagazine";
import MagazineTitle from "./MagazineTitle";
import { useEffect, useState } from "react";
import Image from "next/image";
import sortGroupMagazines from "@/utils/sortGroupMagazines";

const MagazinesList: React.FC<{ magazines: Magazine[] }> = ({ magazines }) => {
  const [divideByCategory, setDivideByCategory] = useState<{
    [key: string]: Magazine[];
  }>({});

  useEffect(() => {
    setDivideByCategory(sortGroupMagazines(magazines));
  }, [magazines]);

  return (
    <div className="mx-2 sm:mx-auto">
      {Object.keys(divideByCategory).map((category) => (
        <div key={category}>
          <div className="flex flex-row items-center">
            <div className="relative w-5 h-5 mt-[26px]">
              <Image alt="star" fill src="/star.png" />
            </div>

            <p className="ml-1 font-bold text-lg uppercase mt-10 mb-3">
              {category}
            </p>
          </div>

          {divideByCategory[category].map((magazine: Magazine) => (
            <MagazineTitle key={magazine.id} magazine={magazine} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default MagazinesList;
