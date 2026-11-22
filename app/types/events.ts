import type { FutureCollectionItem, ShowsCollectionItem } from '@nuxt/content'

export type UpcomingEvent = FutureCollectionItem & {
    isExpired: boolean
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
