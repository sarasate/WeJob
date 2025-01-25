import { defineCollection, z } from "astro:content";

export const collections = {
  jobs: defineCollection({
    type: "data",
    schema: z.object({
      title: z.string(),
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
