import { MetadataRoute } from "next";

import Magazine from "@/types/IMagazine";
import convertTitleToSlug from "@/utils/convertTitleToSlug";
import { getMagazines } from "@/lib/notion";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const magazinesData = await getMagazines();

  const sitemapPages: MetadataRoute.Sitemap = [];

  magazinesData.map((mag: Magazine) => {
    if (mag.doesHaveAPage) {
      sitemapPages.push({
        url: `https://immortal-mags.xyz/magazine/${convertTitleToSlug(
          mag.name
        )}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
      });
    }
  });

  return [
    {
      url: "https://immortal-mags.xyz",
      lastModified: new Date(),
      changeFrequency: "weekly",
    },
    ...sitemapPages,
  ];
}
