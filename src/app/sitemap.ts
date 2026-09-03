import type { MetadataRoute } from "next";
import blogs from "@/data/blogs.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.tarotinft.net";
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];

  const blogRoutes: MetadataRoute.Sitemap = (blogs as { slug: string; date: string }[]).map(
    (b) => ({
      url: `${baseUrl}/blog/${b.slug}`,
      lastModified: new Date(b.date),
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );

  return [...staticRoutes, ...blogRoutes];
}
