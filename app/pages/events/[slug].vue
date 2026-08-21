<script setup lang="ts">
import EventLayout from '~/layouts/EventLayout.vue'

const route = useRoute()
const slug = String(route.params.slug)

const { data: event } = await useAsyncData(`show-${slug}`, () =>
    queryCollection('shows').where('slug', '=', slug).first()
)

const { data: futureEvent } = await useAsyncData(`future-${slug}`, () =>
    queryCollection('future').where('slug', '=', slug).first()
)

if (
    !event.value ||
    event.value.detailsPublic === false ||
    futureEvent.value?.detailsPublic === false
) {
    throw createError({
        statusCode: 404,
        statusMessage: 'Evento no encontrado',
    })
}

const show = event.value
const siteUrl = 'https://foggyhexbcn.com'
const eventUrl = `${siteUrl}/events/${show.slug}`
const fullTitle = [show.title, show.titleSubtitle].filter(Boolean).join(' ')
const primaryBand = show.bands?.[0]
const eventImage = primaryBand?.image || futureEvent.value?.image || ''
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

const parseEventDate = (date: string, time: string) => {
    const parts = date.split('/').map((part) => part.trim())
    if (parts.length !== 3) return date

    const [day, month, year] = parts
    const fullYear = year.length === 2 ? `20${year}` : year
    return `${fullYear}-${month.padStart(2, '0')}-${day.padStart(
        2,
        '0'
    )}T${time}:00+01:00`
}

useSeoMeta({
    title: `${fullTitle} | Foggy Hex`,
    description: eventDescription.slice(0, 155),
    ogTitle: `${fullTitle} | Foggy Hex`,
    ogDescription: eventDescription.slice(0, 200),
    ogImage: absoluteImage,
    ogUrl: eventUrl,
    ogType: 'article',
    twitterCard: 'summary_large_image',
})

useHead({
    script: [
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Event',
                name: fullTitle,
                description: eventDescription,
                image: [absoluteImage],
                startDate: parseEventDate(show.date, show.time),
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
                offers: show.ticketUrl
                    ? {
                          '@type': 'Offer',
                          url: show.ticketUrl,
                          availability: 'https://schema.org/InStock',
                      }
                    : undefined,
            }),
        },
    ],
})
</script>

<template>
    <EventLayout v-if="event" :event="event" />
</template>
