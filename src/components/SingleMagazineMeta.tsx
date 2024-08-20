import Magazine from "@/types/IMagazine";
import convertIssuerAYearToText from "@/utils/convertIssuerAYearToText";

const SingleMagazineMeta: React.FC<{ meta: Magazine }> = ({ meta }) => {
  return (
    <section className="flex flex-col m-4 sm:gap-y-2">
      <div className="w-full w-11/12 sm:w-8/12 sm:mx-auto flex flex-col sm:flex-row justify-between uppercase text-sm">
        {meta.city !== "-" && <p>based in {meta.city}</p>}

        <p>{convertIssuerAYearToText(meta.issuesPerYear.toString())}</p>

        {meta.since && <p>since {meta.since}</p>}
      </div>

      {(meta.link || meta.language) && (
        <div className="w-full w-11/12 sm:w-8/12 sm:mx-auto flex flex-col sm:flex-row justify-between uppercase text-sm">
          {meta.link && (
            <a href={meta.link} target="_blank" className="underline">
              website
            </a>
          )}

          {meta.language && (
            <p>
              bilingual {"("}
              {meta.language.join(", ")}
              {")"}
            </p>
          )}
        </div>
      )}
    </section>
  );
};

export default SingleMagazineMeta;
