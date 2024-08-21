import AnimatedIntro from "@/components/AnimatedIntro";
import MagazinesSection from "@/components/MagazinesSection/MagazinesSection";
import Magazine from "@/types/IMagazine";

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
        <MagazinesSection filteredMags={filteredMags} />
      </section>
    </main>
  );
}
