import { defineContentConfig, defineCollection } from '@nuxt/content'
import { z } from 'zod'
import { showSchema } from './shared/schemas/show'


export default defineContentConfig({
    collections: {
        past: defineCollection({
            type: 'data',
            source: 'past/*.md',
            schema: z.object({
                slug: z.string().optional(),
                title: z.string(),
                date: z.string(),
                venue: z.string(),
                image: z.string(),
            }),
        }),
        shows: defineCollection({
            type: 'data',
            source: 'shows/*.md',
            schema: showSchema,
        }),
        agenda: defineCollection({
            type: 'data',
            source: 'agenda/*.md',
            schema: z.object({
                slug: z.string(),
                title: z.string(),
                date: z.string(),
                venue: z.string(),
                space: z.string(),
                time: z.string().optional(),
                lineup: z.array(
                    z.object({
                        name: z.string(),
                        note: z.string().optional(),
                        url: z.string().url().optional(),
                    })
                ),
                ticketUrl: z.string().url().optional(),
                infoUrl: z.string().url().optional(),
                source: z.string().url().optional(),
            }),
        }),
    },
})
