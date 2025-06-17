import AnimatedIntro from "@/components/AnimatedIntro";
import MagazinesSection from "@/components/MagazinesSection/MagazinesSection";
import Magazine from "@/types/IMagazine";
import convertTitleToSlug from "@/utils/convertTitleToSlug";
import Link from "next/link";

// const dataFetcher = async (): Promise<{
//   filteredMags: Magazine[];
//   magazinesData: Magazine[];
// }> => {
//   const magazinesData = await fetch(process.env.NEXT_PUBLIC_URL + `/api/magazines`).then(
//     (res) => res.json()
//   );

//   const filteredMags = magazinesData.filter(
//     (mag: Magazine) => !mag.field.includes("too-big")
//   );

//   return { filteredMags, magazinesData };
// };

export default async function Home() {
  // const { filteredMags, magazinesData } = await dataFetcher();

  // const magWithPages = magazinesData.filter(
  //   (mag: Magazine) => mag.doesHaveAPage
  // );
  // const randomIndex = Math.floor(Math.random() * magWithPages.length);
  // const randomMag = magWithPages[randomIndex];

  return (
    <>
      <main className="flex min-h-screen w-screen flex-col mb-20">
        <AnimatedIntro />

        <section className="mx-2 sm:mx-auto">
          {/* <MagazinesSection filteredMags={filteredMags} /> */}
        </section>
      </main>

      <section className="mb-6">
        {/* <p className="text-xs sm:mx-10 mx-2">
          undecided? bored? feeling bold? discover a{" "}
          <Link
            className="underline"
            href={`/magazine/${convertTitleToSlug(randomMag.name)}`}
          >
            random magazine
          </Link>
        </p> */}
      </section>
    </>
  );
}
