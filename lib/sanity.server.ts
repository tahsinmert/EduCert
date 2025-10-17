import { createClient } from "next-sanity";

export const serverClient = createClient({
  projectId: process.env.SANITY_PROJECT_ID || "",
  dataset: process.env.SANITY_DATASET || "production",
  apiVersion: process.env.SANITY_API_VERSION || "2023-10-01",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

