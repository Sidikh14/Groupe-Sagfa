import type { MetadataRoute } from "next";
import { site, poles } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/rendez-vous", "/sagfa360", ...poles.map((p) => `/metiers/${p.slug}`)];
  return paths.map((path) => ({ url: `${site.url}${path}`, lastModified: new Date() }));
}
