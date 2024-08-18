import Magazine from "@/types/IMagazine";
import convertIssuerAYearToText from "@/utils/convertIssuerAYearToText";

const SingleMagazineMeta: React.FC<{ meta: Magazine }> = ({ meta }) => {
  return (
    <div className="flex flex-col m-4 sm:gap-y-2">
      <section className="w-full w-11/12 sm:w-8/12 sm:mx-auto flex flex-col sm:flex-row justify-between uppercase text-sm">
        {meta.city !== "-" && <p className="">based in {meta.city}</p>}

        <p>{convertIssuerAYearToText(meta.issuesPerYear.toString())}</p>

        {meta.issuesNumber !== "?" && (
          <p className="">{meta.issuesNumber} issues total</p>
        )}
      </section>

      {meta.link && (
        <section className="w-full w-11/12 sm:w-8/12 sm:mx-auto flex flex-col sm:flex-row justify-between uppercase text-sm">
          <a href={meta.link} target="_blank" className="underline">
            website
          </a>
        </section>
      )}
    </div>
  );
};

export default SingleMagazineMeta;
