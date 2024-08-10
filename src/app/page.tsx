import AnimatedIntro from "@/components/AnimatedIntro";
import MagazinesList from "@/components/MagazinesList";
import Magazine from "@/types/IMagazine";

const dataFetcher = async (): Promise<{ magazines: Magazine[] }> => {
  const magazinesData = await fetch(process.env.URL + `/api/magazines`, {
    next: { revalidate: parseInt(process.env.REVALIDATE_TIME!) },
  }).then((res) => res.json());

  const filteredMags = magazinesData.filter(
    (mag: Magazine) => !mag.field.includes("too-big")
  );

  return { magazines: filteredMags };
};

export default async function Home() {
  const { magazines } = await dataFetcher();

  return (
    <main className="flex min-h-screen w-screen flex-col mb-20">
      <AnimatedIntro />

      <section className="mx-2 sm:mx-auto">
        <p className="uppercase text-sm">{magazines.length} magazines total</p>
        <MagazinesList magazines={magazines} />
      </section>
    </main>
  );
}
