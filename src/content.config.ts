import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const journal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/journal' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    cover: z.string().optional(),
    tags: z.array(z.string()).default([]),
    readingTime: z.string().optional(),
  }),
});

const lieux = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/lieux' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    ville: z.string(),
    zone: z.enum(['epinac', 'plaine']),
    publishedAt: z.coerce.date(),
    cover: z.string().optional(),
  }),
});

export const collections = { journal, lieux };
