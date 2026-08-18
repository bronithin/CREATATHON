import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://creatathon.in";

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/register", "/terms"],
        disallow: ["/api/", "/terms-and-conditions"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
