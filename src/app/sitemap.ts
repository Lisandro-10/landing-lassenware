import { MetadataRoute } from "next";

const baseUrl = "https://lassenware.com";
const locales = ["es", "en"];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    routes.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    });
  });

  return routes;
}