import { defineContentConfig, defineCollection } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
    collections: {
        future: defineCollection({
            type: 'data',
            source: 'future/*.md',
            schema: z.object({
                title: z.string(),
                date: z.string(),
                venue: z.string(),
                image: z.string(),
            }),
        }),
        past: defineCollection({
            type: 'data',
            source: 'past/*.md',
            schema: z.object({
                title: z.string(),
                date: z.string(),
                venue: z.string(),
                image: z.string(),
            }),
        }),
    },
})
