import AnimatedIntro from "@/components/AnimatedIntro";
import MagazinesList from "@/components/MagazinesList";

const dataFetcher = async (): Promise<{ magazines: any }> => {
  const magazinesDataRaw = await fetch(process.env.URL + `/api/magazines`);
  const magazinesData = await magazinesDataRaw.json();

  return { magazines: magazinesData };
};

export default async function Home() {
  const { magazines } = await dataFetcher();

  return (
    <main className="flex min-h-screen w-screen flex-col mb-20">
      <AnimatedIntro />

      <MagazinesList magazines={magazines} />
    </main>
  );
}
