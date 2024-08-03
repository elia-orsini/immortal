import Magazine from "@/types/IMagazine";
import drawnFont from "@/utils/drawnFont";
import Image from "next/image";
import Link from "next/link";

const MagazineTitle: React.FC<{ magazine: Magazine }> = ({ magazine }) => {
  return (
    <div className="grid grid-cols-2 justify-between gap-x-20 my-0.5 text-sm sm:text-base">
      {magazine.doesHaveAPage ? (
        <Link className="bg-lime-400 w-max" href={`/magazine/${magazine.id}`}>
          {magazine.name}
        </Link>
      ) : (
        <p>{magazine.name}</p>
      )}

      <div
        className={`flex flex-row text-xs sm:text-base justify-between ${drawnFont}`}
      >
        <p>
          {magazine.status === "DEAD" ? (
            <>
              <Image
                src="/skull.svg"
                alt="skull image"
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
        <p className="text-left">{magazine.city}</p>
      </div>
    </div>
  );
};

export default MagazineTitle;
