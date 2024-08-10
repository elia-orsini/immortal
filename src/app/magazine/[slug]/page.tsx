import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import { Metadata, NextPage, ResolvingMetadata } from "next";
import Link from "next/link";
import { NotionRenderer } from "react-notion";

import drawnFont from "@/utils/drawnFont";
import SingleMagazineHeader from "@/components/SingleMagazineHeader";
import SingleMagazineMeta from "@/components/SingleMagazineMeta";
import convertPathToSlug from "@/utils/convertPathToSlug";
import Magazine from "@/types/IMagazine";

const dataFetcher = async (slug: string): Promise<any> => {
  const magazinesData = await fetch(process.env.URL + `/api/magazines`).then(
    (res) => res.json()
  );

  const match = magazinesData.find(
    (mag: Magazine) => mag.name.toLowerCase() === convertPathToSlug(slug)
  );

  const path = match.id;

  const magazineData = await fetch(
    process.env.URL + `/api/magazineData/${path}`
  ).then((res) => res.json());

  const magazineMeta = await fetch(
    process.env.URL + `/api/magazine/${path}`
  ).then((res) => res.json());

  return { magazineData, magazineMeta };
};

const SingleMagazine: NextPage<{ params: any }> = async ({ params }) => {
  const { magazineData, magazineMeta } = await dataFetcher(params.slug);

  return (
    <main className="flex min-h-screen w-screen flex-col mb-20">
      <nav className="w-full h-10 border-b border-black px-2 sm:px-10 flex">
        <Link href="/" className={`my-auto ${drawnFont}`}>
          {" "}
          immortal mags
        </Link>
      </nav>

      <SingleMagazineHeader meta={magazineMeta} />

      <SingleMagazineMeta meta={magazineMeta} />

      <article className="mx-auto w-11/12 sm:w-8/12">
        <NotionRenderer blockMap={magazineData} />
      </article>
    </main>
  );
};

export default SingleMagazine;

export async function generateMetadata(
  { params }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { magazineMeta } = await dataFetcher(params.slug);

  const previousImages = (await parent).openGraph?.images || [];

  const description = magazineMeta.description || (await parent).description;

  return {
    title: magazineMeta.name,
    description: description,
    openGraph: {
      images: [`${magazineMeta.imageCover[0].url}`, ...previousImages],
    },
  };
}
