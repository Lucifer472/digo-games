import { Games, navLinks, SITE_URL } from "@/config";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const links: MetadataRoute.Sitemap = navLinks.map((nav) => ({
    url: `${SITE_URL}${nav.link}`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  const game: MetadataRoute.Sitemap = Games.map((game) => ({
    url: `${SITE_URL}${game.link}`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.9,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    ...game,
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    ...links,
  ];
}
