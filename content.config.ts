import { defineContentConfig, defineCollection } from '@nuxt/content'
import { z } from 'zod'

export const ShowSchema = z.object({
    slug: z.string(),
    title: z.string(),
    date: z.string(),
    venue: z.string(),
    ticketUrl: z.string().url(),
    bands: z.array(
        z.object({
            name: z.string(),
            image: z.string(),
            bandcamp: z.string().url(),
            description: z.string(),
        })
    ),
})

export type Show = z.infer<typeof ShowSchema>

export default defineContentConfig({
    collections: {
        future: defineCollection({
            type: 'data',
            source: 'future/*.md',
            schema: z.object({
                slug: z.string(),
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
        shows: defineCollection({
            type: 'data',
            source: 'shows/*.md',
            schema: z.object({
                slug: z.string(),
                title: z.string(),
                date: z.string(),
                time: z.string(),
                venue: z.string(),
                ticketUrl: z.string().optional(),
                bands: z.array(
                    z.object({
                        name: z.string(),
                        image: z.string(),
                        bandcamp: z.string().optional(),
                        description: z.string(),
                    })
                ),
            }),
        }),
    },
})
