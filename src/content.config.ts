// https://docs.astro.build/en/guides/content-collections/

import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders"
import { siteConfig } from "./config"

const contentPath = "./src/" + siteConfig.customDir + "/contents/";

const topContents = defineCollection({
    loader: glob({ pattern: "*.md", base: contentPath + "topContents"}),
    schema: z.object({
        title: z.optional(z.string()),
        draft: z.optional(z.boolean()),
        id: z.optional(z.string()),
    }),
});
const workCategories = defineCollection({
    loader: file(contentPath + "workCategories.json"),
    schema: z.object({
        displayName: z.string(),
        slug: z.string(),
    }),
});

const works = defineCollection({
    loader: glob({ pattern: "*.md", base: contentPath + "works"}),
    schema: z.object({
        title: z.optional(z.string()),
        draft: z.boolean(),
        publishedAt: z.optional(z.string().date()),
        category: z.optional(z.string()),
        description: z.optional(z.string()),
    }),
});

export const collections = { topContents, workCategories, works };
