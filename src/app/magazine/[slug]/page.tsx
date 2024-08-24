import "@eliaorsini/react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import { Metadata, NextPage, ResolvingMetadata } from "next";
import Link from "next/link";
import { Periodical, WithContext } from "schema-dts";
import { NotionRenderer } from "@eliaorsini/react-notion";

import drawnFont from "@/utils/drawnFont";
import SingleMagazineHeader from "@/components/SingleMagazine/SingleMagazineHeader";
import SingleMagazineMeta from "@/components/SingleMagazine/SingleMagazineMeta";
import Magazine from "@/types/IMagazine";
import capitalizeString from "@/utils/capitalizeString";
import convertIssuerAYearToText from "@/utils/convertIssuerAYearToText";
import convertTitleToSlug from "@/utils/convertTitleToSlug";
import RecomendationsSection from "@/components/SingleMagazine/ReccomendationsSection";
import getRightArticle from "@/utils/getRightArticle";
import { notFound } from "next/navigation";
import SmallNav from "@/components/SmallNav";

const dataFetcher = async (
  slug: string
): Promise<{
  allMags: Magazine[];
  magazineData: any;
  magazineMeta: Magazine;
}> => {
  const magazinesData = await fetch(process.env.URL + `/api/magazines`, {
    next: { revalidate: parseInt(process.env.REVALIDATE_TIME!) },
  }).then((res) => res.json());

  const match = magazinesData.find(
    (mag: Magazine) => convertTitleToSlug(mag.name) === slug
  );

  if (!match) notFound();

  const path = match.id;

  const magazineData = await fetch(
    process.env.URL + `/api/magazineData/${path}`,
    {
      next: { revalidate: parseInt(process.env.REVALIDATE_TIME!) },
    }
  ).then((res) => res.json());

  const magazineMeta = await fetch(process.env.URL + `/api/magazine/${path}`, {
    next: { revalidate: parseInt(process.env.REVALIDATE_TIME!) },
  }).then((res) => res.json());

  if (!magazineMeta.doesHaveAPage) notFound();

  return { allMags: magazinesData, magazineData, magazineMeta };
};

const SingleMagazine: NextPage<{ params: any }> = async ({ params }) => {
  const { allMags, magazineData, magazineMeta } = await dataFetcher(
    params.slug
  );

  const jsonLd: WithContext<Periodical> = {
    "@context": "https://schema.org",
    "@type": "Periodical",
    name: magazineMeta.name,
    image: magazineMeta.imageCover && magazineMeta.imageCover[0].rawUrl,
    thumbnailUrl: magazineMeta.imageCover && magazineMeta.imageCover[0].rawUrl,
    description: magazineMeta.description,
    genre: magazineMeta.field[0],
    keywords: `Magazine, ${magazineMeta.name}, ${magazineMeta.city}, ${magazineMeta.field} Magazine`,
    url: magazineMeta.link,
    inLanguage: magazineMeta.language?.join(", ").toLowerCase() || "English",
  };

  return (
    <main className="flex min-h-screen w-screen flex-col mb-10">
      <SmallNav />

      <SingleMagazineHeader meta={magazineMeta} />

      <SingleMagazineMeta meta={magazineMeta} />

      <hr className="border-black mb-10" />

      <article className="mx-auto w-11/12 sm:w-8/12">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <NotionRenderer blockMap={magazineData} />
      </article>

      <RecomendationsSection allMags={allMags} magMetadata={magazineMeta} />
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

  const capitalizedField = capitalizeString(`${magazineMeta.field}`);
  const capitalizedCity = capitalizeString(`${magazineMeta.city}`);
  const capitalizedFrequency = capitalizeString(
    convertIssuerAYearToText(`${magazineMeta.issuesPerYear}`)
  );
  const initialArticle = getRightArticle(capitalizedFrequency);

  const imageCover = magazineMeta.imageCover
    ? [`${magazineMeta.imageCover[0].url}`, ...previousImages]
    : [...previousImages];

  return {
    title: `${magazineMeta.name}, ${initialArticle} ${capitalizedFrequency} ${capitalizedField} Magazine based in ${capitalizedCity}`,
    description: description,
    openGraph: {
      images: imageCover,
    },
  };
}
