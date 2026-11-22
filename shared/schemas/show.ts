import { z } from 'zod'

export const showSchema = z.object({
    slug: z.string().trim().min(1),
    title: z.string().trim().min(1),
    titleSubtitle: z.string().optional(),
    listingTitle: z.string().optional(),
    archiveTitle: z.string().optional(),
    archiveVenue: z.string().optional(),
    image: z.string().trim().min(1),
    featuredPoster: z.string().optional(),
    date: z.string().trim().min(1),
    time: z.string().trim().min(1),
    timeLabel: z.string().optional(),
    venue: z.string().trim().min(1),
    venueAddress: z.string().optional(),
    mapUrl: z.string().url().optional(),
    ticketPriceLabels: z.array(z.string()).optional(),
    venueUrl: z.string().optional(),
    ticketUrl: z.string().optional(),
    posterImage: z.string().optional(),
    layoutVariant: z.enum(['split-venues', 'default']).optional(),
    sessions: z.array(z.object({
        id: z.string().trim().min(1),
        venue: z.string().trim().min(1),
        time: z.string().trim().min(1),
        ticketUrl: z.string().url().optional(),
        note: z.string().optional(),
        supportingArtistId: z.string().optional(),
        supportingArtistAffiliation: z.string().optional(),
        supportingArtistRole: z.string().optional(),
    })).min(1).optional(),
    schedule: z
        .array(
            z.object({
                title: z.string().trim().min(1),
                subtitle: z.string().optional(),
                time: z.string().trim().min(1),
            })
        )
        .optional(),
    bands: z.array(
        z.object({
            id: z.string().optional(),
            name: z.string().trim().min(1),
            image: z.string().trim().min(1),
            imageCredit: z.string().optional(),
            bandcamp: z.string().optional(),
            description: z.string().trim().min(1),
            label: z.string().optional(),
            country: z.string().optional(),
        })
    ).min(1),
})
