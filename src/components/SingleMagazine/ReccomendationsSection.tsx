import Magazine from "@/types/IMagazine";
import convertTitleToSlug from "@/utils/convertTitleToSlug";
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
            <div key={recc.id} className="my-2">
              <Link href={`/magazine/${convertTitleToSlug(recc.name)}`}>
                <p className="font-bold px-1 underline text-sm">{recc.name}</p>
              </Link>
              <p className="text-sm ml-5 opacity-70">{recc.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default RecomendationsSection;
