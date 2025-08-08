import "@eliaorsini/react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import { Metadata, NextPage, ResolvingMetadata } from "next";
import { Periodical, WithContext } from "schema-dts";
import { NotionRenderer } from "@eliaorsini/react-notion";
import { notFound } from "next/navigation";

import SingleMagazineHeader from "@/components/SingleMagazine/SingleMagazineHeader";
import SingleMagazineMeta from "@/components/SingleMagazine/SingleMagazineMeta";
import Magazine from "@/types/IMagazine";
import capitalizeString from "@/utils/capitalizeString";
import convertIssuerAYearToText from "@/utils/convertIssuerAYearToText";
import convertTitleToSlug from "@/utils/convertTitleToSlug";
import RecomendationsSection from "@/components/SingleMagazine/ReccomendationsSection";
import getRightArticle from "@/utils/getRightArticle";
import SmallNav from "@/components/SmallNav";
import { fetchOptions } from "@/app/constants/fetchOptions";

const dataFetcher = async (
  slug: string
): Promise<{
  allMags: Magazine[];
  magazineData: any;
  magazineMeta: Magazine;
}> => {
  const magazinesData = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/magazines`,
    fetchOptions
  ).then((res) => res.json());

  const match = magazinesData.find(
    (mag: Magazine) => convertTitleToSlug(mag.name) === slug
  );

  if (!match) notFound();

  const path = match.id;

  const magazineData = await fetch(
    process.env.NEXT_PUBLIC_URL + `/api/magazineData/${path}`,
    fetchOptions
  ).then((res) => res.json());

  const magazineMeta = await fetch(
    process.env.NEXT_PUBLIC_URL + `/api/magazine/${path}`,
    fetchOptions
  ).then((res) => res.json());

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
    name: magazineMeta?.name,
    image: magazineMeta?.imageCover && magazineMeta?.imageCover[0].rawUrl,
    thumbnailUrl:
      magazineMeta?.imageCover && magazineMeta?.imageCover[0].rawUrl,
    description: magazineMeta?.description,
    genre: magazineMeta?.field[0],
    keywords: `Magazine, ${magazineMeta?.name}, ${magazineMeta?.city}, ${magazineMeta?.field} Magazine`,
    url: magazineMeta?.link,
    inLanguage: "English",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://immortal-mags.xyz",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: magazineMeta?.name,
                  item: `https://immortal-mags.xyz/magazine/${convertTitleToSlug(
                    magazineMeta?.name || ""
                  )}`,
                },
              ],
            }),
          }}
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

  if (!magazineMeta) {
    return {};
  }

  const previousImages = (await parent).openGraph?.images || [];

  const description =
    magazineMeta.description || (await parent).description || "";

  const capitalizedField = capitalizeString(
    `${magazineMeta.field}` || "Unknown Field"
  );
  const capitalizedCity = capitalizeString(
    `${magazineMeta.city || "Unknown City"}`
  );
  const capitalizedFrequency = capitalizeString(
    convertIssuerAYearToText(`${magazineMeta.issuesPerYear || "-"}`)
  );
  const initialArticle = getRightArticle(capitalizedFrequency);

  const imageCover = magazineMeta.imageCover
    ? [`${magazineMeta.imageCover[0].url}`, ...previousImages]
    : [...previousImages];

  const canonicalUrl = `https://immortal-mags.xyz/magazine/${convertTitleToSlug(
    magazineMeta.name
  )}`;

  return {
    title: `${magazineMeta.name}, ${initialArticle} ${capitalizedFrequency} ${capitalizedField} Magazine based in ${capitalizedCity}`,
    description: description,
    keywords: [
      "Magazine",
      magazineMeta.name,
      capitalizedCity,
      capitalizedField,
      `${magazineMeta.name} magazine`,
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: "article",
      url: canonicalUrl,
      title: `${magazineMeta.name} – ${capitalizedField} magazine in ${capitalizedCity}`,
      description,
      images: imageCover,
    },
    twitter: {
      card: "summary_large_image",
      title: `${magazineMeta.name} – ${capitalizedField} magazine in ${capitalizedCity}`,
      description,
      images: imageCover,
    },
  };
}

export async function generateStaticParams() {
  const url = `${process.env.NEXT_PUBLIC_URL}/api/magazines`;
  const magazinesData = await fetch(url, fetchOptions).then((res) =>
    res.json()
  );

  const magsWithPages = magazinesData.filter(
    (mag: Magazine) => mag.doesHaveAPage
  );

  return magsWithPages.map((mag: Magazine) => ({
    slug: convertTitleToSlug(mag.name || ""),
  }));
}
