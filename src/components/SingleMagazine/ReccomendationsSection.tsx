import Magazine from "@/types/IMagazine";
import convertTitleToSlug from "@/utils/convertTitleToSlug";
import Image from "next/image";
import Link from "next/link";

const RecomendationsSection: React.FC<{
  allMags: Magazine[];
  magMetadata: Magazine;
}> = ({ allMags, magMetadata }) => {
  const sameField = allMags.filter(
    (mag) =>
      mag.field[0] === magMetadata?.field[0] &&
      mag.name !== magMetadata?.name &&
      mag.doesHaveAPage
  );

  const slicedReccs = sameField.slice(0, 3);

  if (slicedReccs.length === 0) return <></>;

  return (
    <>
      <hr className="w-11/12 sm:w-8/12 border-black mx-auto mt-10" />

      <section className="w-11/12 sm:w-8/12 mx-auto mt-10">
        <p className="uppercase text-sm opacity-70">you might also like:</p>

        <div className="mt-3">
          {slicedReccs.map((recc) => (
            <div key={recc.id} className="relative my-2 group">
              <Link href={`/magazine/${convertTitleToSlug(recc.name)}`}>
                <p className="font-bold px-1 underline text-sm">{recc.name}</p>
              </Link>

              <div className="pointer-events-none invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-200 absolute z-20 -top-2 sm:top-auto sm:bottom-full sm:mb-2 left-0 sm:left-0">
                <div className="w-[300px] max-w-[80vw] border border-black bg-white shadow-md p-3">
                  <div className="flex gap-3">
                    {recc?.imageCover?.[0]?.url && (
                      <div className="relative flex-shrink-0 w-16 h-14 border border-black overflow-hidden">
                        <Image
                          src={recc.imageCover[0].url}
                          alt={`${recc.name} cover`}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                    )}

                    <div className="min-w-0">
                      <p className="font-bold text-sm leading-tight mb-1 truncate">
                        {recc.name}
                      </p>
                      {recc.since && (
                        <span className="text-xs leading-snug max-h-24 overflow-hidden">
                          Since {recc.since}.
                        </span>
                      )}{" "}
                      {recc.city && (
                        <span className="text-xs leading-snug max-h-24 overflow-hidden">
                          Based in {recc.city}.
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-sm ml-5 opacity-70">{recc.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default RecomendationsSection;
