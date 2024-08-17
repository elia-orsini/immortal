import AnimatedIntro from "@/components/AnimatedIntro";
import MagazinesList from "@/components/MagazinesList";
import Magazine from "@/types/IMagazine";
import sortGroupMagazines from "@/utils/sortGroupMagazines";

const dataFetcher = async (): Promise<{
  filteredMags: Magazine[];
  dividedByCategory: { [key: string]: Magazine[] };
}> => {
  const magazinesData = await fetch(process.env.URL + `/api/magazines`, {
    next: { revalidate: parseInt(process.env.REVALIDATE_TIME!) },
  }).then((res) => res.json());

  const filteredMags = magazinesData.filter(
    (mag: Magazine) => !mag.field.includes("too-big")
  );

  const dividedByCategory = sortGroupMagazines(magazinesData);

  return { filteredMags, dividedByCategory };
};

export default async function Home() {
  const { filteredMags, dividedByCategory } = await dataFetcher();

  return (
    <main className="flex min-h-screen w-screen flex-col mb-20">
      <AnimatedIntro />

      <section className="mx-2 sm:mx-auto">
        <p className="uppercase text-sm">
          <span className="font-extrabold">{filteredMags.length}</span>{" "}
          magazines total{" "}
          <span className="font-extrabold">
            {Object.keys(dividedByCategory).length - 1}
            {/* dont include 'other' category */}
          </span>{" "}
          topics
        </p>
        <MagazinesList dividedByCategory={dividedByCategory} />
      </section>
    </main>
  );
}
