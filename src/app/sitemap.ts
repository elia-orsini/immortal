import Magazine from "@/types/IMagazine";
import convertSlugToPath from "@/utils/convertSlugToPath";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const magazinesData = await fetch(process.env.URL + `/api/magazines`).then(
    (res) => res.json()
  );

  const sitemapPages: any[] = [];

  magazinesData.map((mag: Magazine) => {
    if (mag.doesHaveAPage) {
      const sitemapEntry = {
        url: `https://immortal-mags.xyz/magazine/${convertSlugToPath(
          mag.name
        )}`,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 0.8,
      };

      sitemapPages.push(sitemapEntry);
    }
  });

  return [
    {
      url: "https://immortal-mags.xyz",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...sitemapPages,
  ];
}
