import Magazine from "@/types/IMagazine";

const StatsComponent: React.FC<{
  filteredMags: Magazine[];
  dividedByCategory: { [key: string]: Magazine[] };
}> = ({ filteredMags, dividedByCategory }) => {
  const stillAlive = filteredMags.filter(
    (mag: Magazine) => mag.status === "ALIVE"
  );

  const numOfTopics = Object.keys(dividedByCategory).length - 1; // dont include 'other' category

  return (
    <p className="uppercase text-sm w-full mt-2">
      <span className="font-extrabold">{filteredMags.length}</span>{" "}
      <span>magazines total</span>{" "}
      <span className="font-extrabold ml-3">{stillAlive.length}</span>{" "}
      <span>still alive</span>
      <span className="font-extrabold ml-3">{numOfTopics}</span>{" "}
      <span>topics</span>{" "}
    </p>
  );
};

export default StatsComponent;
