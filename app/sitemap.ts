import { MetadataRoute } from "next";
import { client } from "@/lib/sanity.client";
import { coursesQuery } from "@/lib/sanity.queries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  // Fetch all courses
  const courses = await client.fetch(coursesQuery);

  const courseUrls =
    courses?.map(
      (course: { slug: string; _updatedAt?: string }) => ({
        url: `${baseUrl}/courses/${course.slug}`,
        lastModified: course._updatedAt || new Date().toISOString(),
        changeFrequency: "weekly" as const,
        priority: 0.8,
      })
    ) || [];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/courses`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    ...courseUrls,
  ];
}

