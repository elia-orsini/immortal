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
  const magazinesDataRaw = await fetch(process.env.URL + `/api/magazines`);
  const magazinesData = await magazinesDataRaw.json();

  const match = magazinesData.find(
    (mag: Magazine) => mag.name.toLowerCase() === convertPathToSlug(slug)
  );

  const path = match.id;

  const magazineDataRaw = await fetch(
    process.env.URL + `/api/magazineData/${path}`
  );
  const magazineData = await magazineDataRaw.json();

  const magazineMetaRaw = await fetch(
    process.env.URL + `/api/magazine/${path}`
  );
  const magazineMeta = await magazineMetaRaw.json();

  return { magazineData, magazineMeta };
};

const SingleMagazine: NextPage<{ params: any }> = async ({ params }) => {
  const { magazineData, magazineMeta } = await dataFetcher(params.slug);

  return (
    <div className="flex min-h-screen w-screen flex-col mb-20">
      <div className="w-full h-10 border-b border-black px-2 sm:px-10 flex">
        <Link href="/" className={`my-auto ${drawnFont}`}>
          {" "}
          immortal mags
        </Link>
      </div>

      <SingleMagazineHeader meta={magazineMeta} />

      <SingleMagazineMeta meta={magazineMeta} />

      <div className="mx-auto w-11/12 sm:w-8/12">
        <NotionRenderer blockMap={magazineData} />
      </div>
    </div>
  );
};

export default SingleMagazine;

export async function generateMetadata(
  { params }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { magazineMeta } = await dataFetcher(params.slug);

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: magazineMeta.name,
    openGraph: {
      images: [`${magazineMeta.imageCover[0].url}`, ...previousImages],
    },
  };
}
