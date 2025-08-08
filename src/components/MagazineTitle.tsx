import Magazine from "@/types/IMagazine";
import convertTitleToSlug from "@/utils/convertTitleToSlug";

import drawnFont from "@/utils/drawnFont";
import Image from "next/image";
import Link from "next/link";

const MagazineTitle: React.FC<{ magazine: Magazine }> = ({ magazine }) => {
  return (
    <div className="grid grid-cols-2 sm:min-w-[50vw] justify-between gap-x-20 my-0.5 text-sm sm:text-base">
      {magazine.doesHaveAPage ? (
        <div className="relative inline-block group my-auto">
          <Link
            className="bg-lime-400 w-max whitespace-nowrap px-0.5"
            href={`/magazine/${convertTitleToSlug(magazine.name)}`}
          >
            {magazine.name}
          </Link>

          <div className="pointer-events-none invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-200 absolute z-20 -top-2 sm:top-auto sm:bottom-full sm:mb-2 left-0 sm:left-0">
            <div className="w-[300px] max-w-[80vw] border border-black bg-white shadow-md p-3">
              <div className="flex gap-3">
                {magazine?.imageCover?.[0]?.url && (
                  <div className="relative flex-shrink-0 w-16 h-20 border border-black overflow-hidden">
                    <Image
                      src={magazine.imageCover[0].url}
                      alt={`${magazine.name} cover`}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                )}

                <div className="min-w-0">
                  <p className="font-bold text-sm leading-tight mb-1 truncate">
                    {magazine.name}
                  </p>
                  {magazine.description && (
                    <p className="text-xs leading-snug max-h-24 overflow-hidden">
                      {magazine.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="whitespace-nowrap my-auto">{magazine.name}</p>
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
                unoptimized
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
