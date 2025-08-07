import { useGSAP } from "@gsap/react";
import gsap from "gsap";

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

  useGSAP(() => {
    gsap.from(".animatedNumber", {
      textContent: 0,
      duration: 1,
      snap: { textContent: 1 },
    });
  }, []);

  return (
    <section className="uppercase text-xs sm:text-sm my-auto sm:pt-0.5 w-full sm:space-x-3">
      <p className="sm:inline whitespace-normal">
        <span className="animatedNumber font-extrabold">
          {filteredMags.length}
        </span>{" "}
        <span>magazines</span>{" "}
      </p>

      <p className="sm:inline whitespace-normal">
        <span className="animatedNumber font-extrabold">{`${stillAlive.length} `}</span>
        <span>alive</span>{" "}
      </p>

      <p className="sm:inline whitespace-normal">
        <span className="animatedNumber font-extrabold">{numOfTopics}</span>{" "}
        <span>topics</span>{" "}
      </p>

      <p className="sm:inline whitespace-normal">
        <span className="animatedNumber font-extrabold">23</span>{" "}
        <span>countries</span>{" "}
      </p>
    </section>
  );
};

export default StatsComponent;
