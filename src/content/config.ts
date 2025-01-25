import { defineCollection, z } from "astro:content";

export const collections = {
  jobs: defineCollection({
    type: "data",
    schema: z.object({
      title: z.string(),
      url: z.string().optional(),
      website_url: z.string().optional(),
      company: z.string(),
      location: z.string(),
      salary: z.string().optional(),
      description: z.string(),
      requirements: z.array(z.string()).optional(),
      responsibilities: z.array(z.string()).optional(),
      postedAt: z.string().transform((str) => new Date(str)),
      type: z
        .enum(["full-time", "part-time", "contract", "internship"])
        .optional(),
      remote: z.boolean().optional(),
    }),
  }),
};
