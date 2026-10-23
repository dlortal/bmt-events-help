import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const status = z.enum(["published", "draft"]).default("published");

const articles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/articles" }),
  schema: z.object({
    title: z.string(),
    summary: z.string().optional(),
    category: z.string(),
    subcategory: z.string().optional(),
    order: z.number().default(100),
    updated: z.coerce.date().optional(),
    date: z.coerce.date().optional(),
    status,
    wordpress_id: z.number().optional(),
    slug: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    summary: z.string().optional(),
    updated: z.coerce.date().optional(),
    date: z.coerce.date().optional(),
    status,
    wordpress_id: z.number().optional(),
    slug: z.string().optional(),
  }),
});

export const collections = { articles, pages };
