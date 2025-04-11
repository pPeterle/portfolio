import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
    type: "content",
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string(),
            image: image(),
            publishedAt: z.date(),
            tags: z.array(z.string()),
        }),
});

const workCollection = defineCollection({
    type: "content",
    schema: ({ image }) =>
        z.object({
            description: z.string().array(),
            period: z.string(),
            tags: z.array(z.string()),
            role: z.string(),
            company: z.string(),
            locale: z.string(),
            from: z.date(),
        }),
});

const projectCollection = defineCollection({
    type: "content",
    schema: ({ image }) =>
        z.object({
            description: z.string(),
            title: z.string(),
            languages: z.array(z.string()),
            image: image().optional(),
            date: z.date(),
            link: z.string()
        }),
});

export const collections = {
    blog: blogCollection,
    work: workCollection,
    project: projectCollection
};
