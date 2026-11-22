import { defineContentConfig, defineCollection } from '@nuxt/content'
import { z } from 'zod'

const showSchema = z.object({
    slug: z.string(),
    title: z.string(),
    titleSubtitle: z.string().optional(),
    date: z.string(),
    time: z.string(),
    timeLabel: z.string().optional(),
    venue: z.string(),
    venueAddress: z.string().optional(),
    mapUrl: z.string().url().optional(),
    ticketPriceLabels: z.array(z.string()).optional(),
    venueUrl: z.string().optional(),
    ticketUrl: z.string().optional(),
    posterImage: z.string().optional(),
    detailsPublic: z.boolean().optional(),
    layoutVariant: z.enum(['split-venues', 'default']).optional(),
    sessions: z.array(z.object({
        id: z.string(),
        venue: z.string(),
        time: z.string(),
        ticketUrl: z.string().url().optional(),
        note: z.string().optional(),
        supportingArtistId: z.string().optional(),
        supportingArtistAffiliation: z.string().optional(),
        supportingArtistRole: z.string().optional(),
    })).min(1).optional(),
    schedule: z
        .array(
            z.object({
                title: z.string(),
                subtitle: z.string().optional(),
                time: z.string(),
            })
        )
        .optional(),
    bands: z.array(
        z.object({
            id: z.string().optional(),
            name: z.string(),
            image: z.string(),
            imageCredit: z.string().optional(),
            bandcamp: z.string().optional(),
            description: z.string(),
            label: z.string().optional(),
            country: z.string().optional(),
        })
    ),
})

export default defineContentConfig({
    collections: {
        future: defineCollection({
            type: 'data',
            source: 'future/*.md',
            schema: z.object({
                archiveTitle: z.string().optional(),
                slug: z.string(),
                title: z.string(),
                titleSubtitle: z.string().optional(),
                date: z.string(),
                venue: z.string(),
                venueUrl: z.string().url().optional(),
                image: z.string(),
                featuredPoster: z.string().optional(),
                ticketUrl: z.string().url().optional(),
                detailsPublic: z.boolean().optional(),
            }),
        }),
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
