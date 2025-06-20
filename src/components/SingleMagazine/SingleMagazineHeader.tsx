import drawnFont from "@/utils/drawnFont";
import Magazine from "@/types/IMagazine";
import Image from "next/image";

const SingleMagazineHeader: React.FC<{ meta: Magazine }> = ({ meta }) => {
  return (
    <header className="w-full h-[30vh] flex">
      <div className="absolute w-full h-[30vh]">
        <div className="relative w-full h-full border-b border-black">
          {meta?.imageCover && (
            <Image
              src={meta?.imageCover[0].url}
              alt={`${meta?.name}, a ${meta?.field} magazine based in ${meta?.city}, ${meta?.name} magazine cover image`}
              className="object-cover"
              fill
            />
          )}
        </div>
      </div>

      <h1
        className={`m-auto z-10 bg-black text-white text-4xl px-2 ${drawnFont}`}
      >
        {meta?.name}
      </h1>
    </header>
  );
};

export default SingleMagazineHeader;
