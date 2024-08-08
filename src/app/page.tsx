import AnimatedIntro from "@/components/AnimatedIntro";
import MagazinesList from "@/components/MagazinesList";
import { Metadata } from "next";

const dataFetcher = async (): Promise<{ magazines: any }> => {
  const magazinesDataRaw = await fetch(process.env.URL + `/api/magazines`);
  const magazinesData = await magazinesDataRaw.json();

  return { magazines: magazinesData };
};

export default async function Home() {
  const { magazines } = await dataFetcher();

  return (
    <div className="flex min-h-screen w-screen flex-col mb-20">
      <AnimatedIntro />

      <MagazinesList magazines={magazines} />
    </div>
  );
}

export const metadata: Metadata = {
  title: {
    template: "%s | Immortal Mags",
    default: "Immortal Mags",
  },
  description: "Immortal Mags - where magazines will never die.",
};
