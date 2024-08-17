import Magazine from "@/types/IMagazine";
import convertIssuerAYearToText from "@/utils/convertIssuerAYearToText";

const SingleMagazineMeta: React.FC<{ meta: Magazine }> = ({ meta }) => {
  return (
    <section className="w-full w-11/12 sm:w-8/12 mx-4 sm:mx-auto flex flex-col sm:flex-row my-4 justify-between uppercase text-sm">
      {meta.city !== "-" && <p className="">based in {meta.city}</p>}

      <p>{convertIssuerAYearToText(meta.issuesPerYear.toString())}</p>

      {meta.issuesNumber !== "?" && (
        <p className="">{meta.issuesNumber} issues total</p>
      )}
    </section>
  );
};

export default SingleMagazineMeta;
