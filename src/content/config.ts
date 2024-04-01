//A schema guarantees that this data exists in a predictable form when you need to reference or query it.
//If any file violates its collection schema, Astro will provide a helpful error to let you know.
//https://docs.astro.build/en/guides/content-collections/#defining-a-collection-schema

// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string().optional(),
    draft: z.boolean().default(false),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }).optional(),
    tags: z.array(z.string()),
  }),
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  // this is the name of the collections make sure its the name of the folder
  blog: postsCollection,
};
