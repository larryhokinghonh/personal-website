import { blogs } from "@/../data/blogs";
import type { MetadataRoute } from "next";

const siteUrl = "https://larryhkh.me";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/blogs`,
      lastModified: new Date(),
    },
    ...blogs.map((blog) => ({
      url: `${siteUrl}${blog.href}`,
      lastModified: new Date(blog.date),
    })),
  ];
}
