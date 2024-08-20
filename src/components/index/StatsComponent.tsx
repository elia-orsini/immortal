import Magazine from "@/types/IMagazine";
import sortGroupMagazines from "@/utils/sortGroupMagazines";

const StatsComponent: React.FC<{
  filteredMags: Magazine[];
}> = ({ filteredMags }) => {
  const stillAlive = filteredMags.filter(
    (mag: Magazine) => mag.status === "ALIVE"
  );

  const dividedByCategory = sortGroupMagazines(filteredMags);
  const numOfTopics = Object.keys(dividedByCategory).length - 1; // dont include 'other' category

  return (
    <section className="uppercase text-xs sm:text-sm w-full mt-2 sm:space-x-3">
      <p className="sm:inline whitespace-normal">
        <span className="font-extrabold">{filteredMags.length}</span>{" "}
        <span>magazines</span>{" "}
      </p>

      <p className="sm:inline whitespace-normal">
        <span className="font-extrabold">{`${stillAlive.length}/${filteredMags.length}`}</span>{" "}
        <span>alive</span>{" "}
      </p>

      <p className="sm:inline whitespace-normal">
        <span className="font-extrabold">{numOfTopics}</span>{" "}
        <span>topics</span>{" "}
      </p>

      <p className="sm:inline whitespace-normal">
        <span className="font-extrabold">18</span> <span>countries</span>{" "}
      </p>
    </section>
  );
};

export default StatsComponent;
