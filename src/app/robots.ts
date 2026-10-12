import type { MetadataRoute } from "next";
import { identity } from "@/data/portfolio";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: `${identity.url}/sitemap.xml`,
  };
}
