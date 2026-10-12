import type { MetadataRoute } from "next";
import { identity } from "@/data/portfolio";
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${identity.url}/`, changeFrequency: "monthly", priority: 1 }];
}
