import Magazine from "@/types/IMagazine";
import drawnFont from "@/utils/drawnFont";
import Link from "next/link";

const MagazineTitle: React.FC<{ magazine: Magazine }> = ({ magazine }) => {
  return (
    <div className="grid grid-cols-2 justify-between gap-x-20 my-0.5">
      {magazine.doesHaveAPage ? (
        <Link className="bg-lime-400 w-max" href={`/magazine/${magazine.id}`}>
          {magazine.name}
        </Link>
      ) : (
        <p>{magazine.name}</p>
      )}

      <div className={`flex flex-row justify-between ${drawnFont}`}>
        <p className="text-right">{magazine.status}</p>
        <p className="text-left">{magazine.city}</p>
      </div>
    </div>
  );
};

export default MagazineTitle;
