import { defineCollection, z } from "astro:content";

const blog = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        heroImage: z.string().optional(),
    }),
});

const work = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        companyName: z.string(),
        description: z.string(),
        role: z.string(),
        startDate: z.coerce.date(),
        endDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
    }),
});

const project = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        website: z.string(),
        listNumber: z.number(),
        workedOn: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
    }),
});

export const collections = { blog, work, projects: project };
