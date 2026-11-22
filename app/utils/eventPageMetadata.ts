import type { ShowsCollectionItem } from '@nuxt/content'
import { formatEventStartDate } from './eventDates'

export function getEventPageMetadata(show: ShowsCollectionItem, siteUrl: string) {
    const eventUrl = `${siteUrl}/events/${show.slug}`
    const fullTitle = [show.title, show.titleSubtitle].filter(Boolean).join(' ')
    const primaryBand = show.bands?.[0]
    const eventImage = primaryBand?.image || show.image
    const absoluteImage = eventImage.startsWith('http')
        ? eventImage
        : `${siteUrl}${eventImage}`
    const stripHtml = (value: string) =>
        value
            .replace(/<[^>]*>/g, ' ')
            .replace(/\s+/g, ' ')
            .trim()
    const primaryDescription = primaryBand?.description
        ? stripHtml(primaryBand.description)
        : ''
    const eventDescription =
        primaryDescription ||
        `${fullTitle} en ${show.venue}, Barcelona. Concierto organizado por Foggy Hex.`

    const ticketUrls = show.layoutVariant === 'split-venues'
        ? (show.sessions ?? []).flatMap((session) => session.ticketUrl ? [session.ticketUrl] : [])
        : show.ticketUrl ? [show.ticketUrl] : []

    return {
        seo: {
            title: `${fullTitle} | Foggy Hex`,
            description: eventDescription.slice(0, 155),
            ogTitle: `${fullTitle} | Foggy Hex`,
            ogDescription: eventDescription.slice(0, 200),
            ogImage: absoluteImage,
            ogUrl: eventUrl,
            ogType: 'article' as const,
            twitterCard: 'summary_large_image' as const,
        },
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'Event',
            name: fullTitle,
            description: eventDescription,
            image: [absoluteImage],
            startDate: formatEventStartDate(show.date, show.time),
            eventAttendanceMode:
                'https://schema.org/OfflineEventAttendanceMode',
            eventStatus: 'https://schema.org/EventScheduled',
            location: {
                '@type': 'Place',
                name: show.venue,
                sameAs: show.venueUrl,
                address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Barcelona',
                    addressCountry: 'ES',
                },
            },
            performer: show.bands.map((band) => ({
                '@type': 'MusicGroup',
                name: band.name,
                image: band.image?.startsWith('http')
                    ? band.image
                    : `${siteUrl}${band.image}`,
                sameAs: band.bandcamp,
            })),
            organizer: {
                '@type': 'Organization',
                name: 'Foggy Hex',
                url: siteUrl,
                sameAs: 'https://instagram.com/foggyhexbcn',
            },
            offers: ticketUrls.length
                ? ticketUrls.map((url) => ({
                      '@type': 'Offer',
                      url,
                      availability: 'https://schema.org/InStock',
                  }))
                : undefined,
        },
    }
}
