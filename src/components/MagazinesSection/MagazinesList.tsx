"use client";
import Image from "next/image";

import Magazine from "@/types/IMagazine";
import MagazineTitle from "../MagazineTitle";

const MagazinesList: React.FC<{
  dividedByCategory: { [key: string]: Magazine[] };
}> = ({ dividedByCategory }) => {
  return (
    <div className="w-full space-y-10 sm:space-y-14">
      {Object.keys(dividedByCategory).map((category) => (
        <div key={category}>
          <div className="flex flex-row items-center">
            <div className="relative w-5 h-5 mb-[13px]">
              <Image
                alt={`Immortal Star Icon`}
                fill
                src="/star.png"
                unoptimized
              />
            </div>

            <h2 className="ml-1 font-bold text-lg uppercase mb-3">
              {category}
            </h2>
          </div>

          {dividedByCategory[category].map((magazine: Magazine) => (
            <MagazineTitle key={magazine.id} magazine={magazine} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default MagazinesList;
