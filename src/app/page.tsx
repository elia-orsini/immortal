import AnimatedIntro from "@/components/AnimatedIntro";
import MagazinesList from "@/components/MagazinesSection/MagazinesList";
import MagazinesSection from "@/components/MagazinesSection/MagazinesSection";
import StatsComponent from "@/components/index/StatsComponent";
import Magazine from "@/types/IMagazine";
import sortGroupMagazines from "@/utils/sortGroupMagazines";

const dataFetcher = async (): Promise<{
  filteredMags: Magazine[];
}> => {
  const magazinesData = await fetch(process.env.URL + `/api/magazines`, {
    next: { revalidate: parseInt(process.env.REVALIDATE_TIME!) },
  }).then((res) => res.json());

  const filteredMags = magazinesData.filter(
    (mag: Magazine) => !mag.field.includes("too-big")
  );

  return { filteredMags };
};

export default async function Home() {
  const { filteredMags } = await dataFetcher();

  return (
    <main className="flex min-h-screen w-screen flex-col mb-20">
      <AnimatedIntro />

      <section className="mx-2 sm:mx-auto">
        <StatsComponent filteredMags={filteredMags} />

        <MagazinesSection filteredMags={filteredMags} />
      </section>
    </main>
  );
}
