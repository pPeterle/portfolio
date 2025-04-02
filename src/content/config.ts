import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
    type: "content",
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string(),
            image: image(),
            hideHeaderImage: z.boolean().optional().default(false),
            publishedAt: z.date(),
            tags: z.array(z.string()),
            readTime: z.number().optional().default(5),
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

export const collections = {
    blog: blogCollection,
    work: workCollection,
};
