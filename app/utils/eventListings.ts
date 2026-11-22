import type { PastCollectionItem } from '@nuxt/content'
import type { ArchivedEvent, EventSummary, UpcomingEvent } from '~/types/events'
import { parseEventCalendarDate } from './eventDates'

// Includes today's concerts and keeps undated shows after dated ones.
export function getUpcomingEvents(
    shows: readonly EventSummary[],
    calendarDate: string,
): UpcomingEvent[] {
    const startOfToday = new Date(calendarDate + 'T00:00:00Z')
    return shows
        .map((show) => {
            const eventDate = parseEventCalendarDate(show.date)
            return {
                ...show,
                title: show.listingTitle || show.title,
                date: eventDate?.toISOString().slice(0, 10) ?? show.date,
                sortTimestamp: eventDate?.getTime() ?? Number.POSITIVE_INFINITY,
            }
        })
        .filter((event) => event.sortTimestamp >= startOfToday.getTime())
        .sort((a, b) => a.sortTimestamp - b.sortTimestamp || a.title.localeCompare(b.title))
}

// Combines expired complete shows with card-only history, newest first.
export function getArchivedEvents(
    shows: readonly EventSummary[],
    pastEvents: readonly PastCollectionItem[],
    calendarDate: string,
): ArchivedEvent[] {
    const startOfToday = new Date(calendarDate + 'T00:00:00Z')
    const showSlugs = new Set(shows.map((show) => show.slug))
    const archivedShows = shows.flatMap((show) => {
        const date = parseEventCalendarDate(show.date)
        if (!date || date >= startOfToday) return []

        return [{
            slug: show.slug,
            title: show.archiveTitle || show.listingTitle || show.title,
            date: show.date,
            venue: show.archiveVenue || show.venue,
            image: show.image,
            sortTimestamp: date.getTime(),
        }]
    })
    const historicalEvents = pastEvents.flatMap((event) => {
        if (event.slug && showSlugs.has(event.slug)) return []

        const date = parseEventCalendarDate(event.date)
        if (date && date >= startOfToday) return []

        return [{
            title: event.title,
            date: event.date,
            venue: event.venue,
            image: event.image,
            sortTimestamp: date?.getTime() ?? 0,
        }]
    })

    return [...archivedShows, ...historicalEvents].sort((a, b) =>
        b.sortTimestamp - a.sortTimestamp || a.title.localeCompare(b.title)
    )
}
