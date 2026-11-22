import type { FutureCollectionItem, PastCollectionItem } from '@nuxt/content'
import type { ArchivedEvent, UpcomingEvent } from '~/types/events'
import { parseEventCalendarDate } from './eventDates'

// Includes today's concerts and keeps undated listings after dated ones.
export function getUpcomingEvents(
    futureEvents: readonly FutureCollectionItem[],
    calendarDate: string,
): UpcomingEvent[] {
    const startOfToday = new Date(calendarDate + 'T00:00:00Z')
    const source = futureEvents
    return source
        .map((event) => {
            const eventDate = parseEventCalendarDate(event.date)
            const timestamp = eventDate?.getTime() ?? Number.POSITIVE_INFINITY
            const isExpired = Boolean(eventDate && eventDate < startOfToday)
            return {
                ...event,
                isExpired,
                sortTimestamp: timestamp,
            }
        })
        .filter((event) => !event.isExpired)
        .sort((a, b) => {
            if (a.sortTimestamp !== b.sortTimestamp) {
                return a.sortTimestamp - b.sortTimestamp
            }
            return a.title.localeCompare(b.title)
        })
}

// Builds the concert archive from expired announcements and historical events, newest first.
export function getArchivedEvents(
    futureEvents: readonly FutureCollectionItem[],
    pastEvents: readonly PastCollectionItem[],
    publicShowSlugs: readonly string[],
    calendarDate: string,
): ArchivedEvent[] {
    const startOfToday = new Date(calendarDate + 'T00:00:00Z')
    const publicShows = new Set(publicShowSlugs)
    const expiredFutureEvents = futureEvents
        .map((event) => {
            const eventDate = parseEventCalendarDate(event.date)
            const sortTimestamp = eventDate?.getTime() ?? 0
            return {
                slug: event.detailsPublic !== false && publicShows.has(event.slug) ? event.slug : undefined,
                title: event.archiveTitle || event.title,
                date: event.date,
                venue: event.venue,
                image: event.image,
                sortTimestamp,
                isExpired: Boolean(eventDate && eventDate < startOfToday),
            }
        })
        .filter((event) => event.isExpired)

    const historicalEvents = pastEvents
        .filter((event) => {
            const eventDate = parseEventCalendarDate(event.date)
            return !eventDate || eventDate < startOfToday
        })
        .map((event) => {
            const eventDate = parseEventCalendarDate(event.date)
            return {
                slug: event.slug && publicShows.has(event.slug) ? event.slug : undefined,
                title: event.title,
                date: event.date,
                venue: event.venue,
                image: event.image,
                sortTimestamp: eventDate?.getTime() ?? 0,
            }
        })

    return [...expiredFutureEvents, ...historicalEvents].sort((a, b) => {
        if (a.sortTimestamp !== b.sortTimestamp) {
            return b.sortTimestamp - a.sortTimestamp
        }
        return a.title.localeCompare(b.title)
    })
}
