import type { ShowsCollectionItem } from '@nuxt/content'

export type EventSummary = Pick<ShowsCollectionItem,
    | 'slug' | 'title' | 'titleSubtitle' | 'listingTitle'
    | 'archiveTitle' | 'archiveVenue' | 'date' | 'time' | 'timeLabel'
    | 'venue' | 'venueUrl' | 'image' | 'featuredPoster' | 'ticketUrl'
>

export type UpcomingEvent = EventSummary & {
    sortTimestamp: number
}

export type ArchivedEvent = {
    slug?: string
    title: string
    date?: string | null
    venue: string
    image: string
    sortTimestamp: number
}


export type EventArtist = ShowsCollectionItem['bands'][number]
