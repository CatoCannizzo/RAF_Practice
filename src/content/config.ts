// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// 2. Define your collection(s)
const blogCollection = defineCollection({ 
   type: 'content',
   schema: z.object({
      title: z.string(),
      date: z.date(),
      author: z.string(),
      draft: z.boolean().optional(),
      image: z.string().optional()
      // slug: z.string()
   })
 });

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'blog': blogCollection,
};