import { MetadataRoute } from "next";

import Magazine from "@/types/IMagazine";
import convertTitleToSlug from "@/utils/convertTitleToSlug";
import { getMagazines } from "@/lib/notion";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://immortalmags.eorsini.xyz";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const magazinesData = await getMagazines();

  const sitemapPages: MetadataRoute.Sitemap = [];

  magazinesData.map((mag: Magazine) => {
    if (mag.doesHaveAPage) {
      sitemapPages.push({
        url: `${SITE_URL}/magazine/${convertTitleToSlug(mag.name)}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
      });
    }
  });

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
    },
    ...sitemapPages,
  ];
}
