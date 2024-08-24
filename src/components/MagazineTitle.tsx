import Magazine from "@/types/IMagazine";
import convertTitleToSlug from "@/utils/convertTitleToSlug";

import drawnFont from "@/utils/drawnFont";
import Image from "next/image";
import Link from "next/link";

const MagazineTitle: React.FC<{ magazine: Magazine }> = ({ magazine }) => {
  return (
    <div className="grid grid-cols-2 sm:min-w-[50vw] justify-between gap-x-20 my-0.5 text-sm sm:text-base">
      {magazine.doesHaveAPage ? (
        <Link
          className="bg-lime-400 w-max my-auto whitespace-nowrap"
          href={`/magazine/${convertTitleToSlug(magazine.name)}`}
        >
          {magazine.name}
        </Link>
      ) : (
        <p className="whitespace-nowrap">{magazine.name}</p>
      )}

      <div
        className={`flex flex-row text-xs sm:text-base justify-between ${drawnFont}`}
      >
        <p className="w-full my-auto">
          {magazine.status === "DEAD" ? (
            <>
              <Image
                src="/skull.svg"
                alt={`Immortal Skull Icon`}
                className="-ml-2 -mr-1 inline"
                width={24}
                height={20}
              />
              <span>{magazine.status}</span>
            </>
          ) : (
            magazine.status
          )}
        </p>

        <p className="text-right w-full my-auto">{magazine.city}</p>
      </div>
    </div>
  );
};

export default MagazineTitle;
