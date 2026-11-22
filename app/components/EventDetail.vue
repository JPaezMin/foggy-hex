<script setup lang="ts">
import type { ShowsCollectionItem } from '@nuxt/content'

const props = defineProps<{ event: ShowsCollectionItem }>()
const eventCalendarDate = useEventCalendarDate()
const isPast = computed(() => {
    const eventDate = parseEventCalendarDate(props.event.date)
    const today = parseEventCalendarDate(eventCalendarDate.value)
    return Boolean(eventDate && today && eventDate < today)
})

const isSplitVenueEvent = computed(() => props.event.layoutVariant === 'split-venues')

const venueSessions = computed(() => props.event.sessions ?? [])

const supportingPerformances = computed(() =>
    venueSessions.value.flatMap((session) => {
        const artist = props.event.bands.find((band) =>
            band.id && band.id === session.supportingArtistId
        )
        return artist ? [{ session, artist }] : []
    })
)

const primaryBand = computed(() => props.event.bands?.[0] ?? null)

const titleParts = computed(() => {
    if (props.event.title.includes('+') || props.event.titleSubtitle) {
        return {
            main: props.event.title,
            tag: '',
        }
    }

    const match = props.event.title.match(/^(.*?)(?:\s*\(([^)]*)\))?$/)
    return {
        main: (match?.[1] ?? props.event.title).trim(),
        tag: (match?.[2] ?? '').trim(),
    }
})

const ticketedVenueSlots = computed(() =>
    venueSessions.value.filter((slot) => slot.ticketUrl)
)

const formatEventTime = (time?: string) => {
    if (!time) return ''
    return time.trim().toLowerCase() === 'tbc' ? 'Hora por confirmar' : time
}

const formattedDate = computed(() => formatEventDateLong(props.event.date))
</script>

<template>
    <article class="container mx-auto event-article" :class="{ 'event-article-split': isSplitVenueEvent }">
        <!-- Header -->
        <header class="text-center" id="event-header">
            <h1 class="event-title font-heading leading-tight text-accent">
                {{ titleParts.main }}
            </h1>
            <p
                v-if="event.titleSubtitle"
                class="mt-3 font-heading text-2xl leading-tight text-text/80"
            >
                {{ event.titleSubtitle }}
            </p>
            <p
                v-if="titleParts.tag"
                class="mt-1 text-lg font-heading text-text/80"
            >
                {{ `(${titleParts.tag})` }}
            </p>
            <div
                v-if="isSplitVenueEvent"
                class="mt-5 space-y-2"
                id="split-venue-slots"
            >
                <p class="font-heading text-xl font-bold text-accent">
                    {{ formattedDate }}
                </p>
                <div
                    v-for="slot in venueSessions"
                    :key="slot.id"
                    class="flex flex-wrap items-center justify-center gap-2 font-sans text-lg text-center"
                >
                    <span>{{ formatEventTime(slot.time) }}</span>
                    <span>-</span>
                    <span>{{ slot.venue }}</span>
                    <span v-if="slot.note" class="text-sm text-text/70">
                        {{ slot.note }}
                    </span>
                    <template v-if="!isPast && slot.ticketUrl">
                        <span>-</span>
                        <a
                            :href="slot.ticketUrl" target="_blank" rel="noopener noreferrer"
                            class="underline decoration-inherit underline-offset-4 hover:text-accent transition"
                        >
                            Entradas
                        </a>
                    </template>
                    <span v-else-if="!isPast">· Entradas próximamente</span>
                </div>
            </div>
            <template v-else>
                <p class="font-sans text-lg mt-5" id="event-meta">
                    <span class="font-heading text-xl font-bold text-accent">
                        {{ formattedDate }}
                    </span>
                    - {{ event.timeLabel ? event.timeLabel + ' ' : '' }}{{ formatEventTime(event.time) }} -
                    <a
                        v-if="event.venueUrl"
                        :href="event.venueUrl"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="underline decoration-inherit underline-offset-4 hover:text-accent transition"
                    >
                        {{ event.venue }}
                    </a>
                    <span v-else>{{ event.venue }}</span>
                </p>
                <p v-if="event.venueAddress" class="mt-2 font-sans text-base">
                    {{ event.venueAddress }}
                    <a v-if="event.mapUrl" :href="event.mapUrl" target="_blank" rel="noopener noreferrer" class="inline-flex items-center min-h-11 ml-2 underline underline-offset-4">Ver mapa</a>
                </p>
                <ul v-if="!isPast && event.ticketPriceLabels?.length" class="event-prices">
                    <li v-for="price in event.ticketPriceLabels" :key="price">{{ price }}</li>
                </ul>
                <a v-if="!isPast && event.ticketUrl" :href="event.ticketUrl" target="_blank" rel="noopener noreferrer" class="event-ticket">
                    Entradas
                </a>
                <p v-else-if="!isPast" class="mt-6 font-sans text-base">Entradas próximamente</p>
            </template>
            <p v-if="isPast" class="mt-4 font-heading text-sm uppercase tracking-widest">Concierto pasado</p>
            <div v-if="event.schedule?.length" class="mt-10" id="event-schedule">
                <div
                    class="max-w-2xl mx-auto border border-text/10 bg-white/80 shadow-sm"
                >
                    <ul class="divide-y divide-text/10">
                        <li
                            v-for="item in event.schedule"
                            :key="`${item.title}-${item.time}`"
                            class="flex flex-col gap-2 px-6 py-4 text-left sm:flex-row sm:items-center sm:justify-between"
                        >
                            <div>
                                <p class="font-heading text-xl text-accent">
                                    {{ item.title }}
                                </p>
                                <p
                                    v-if="item.subtitle"
                                    class="mt-1 font-sans text-xs uppercase tracking-[0.25em] text-text/60"
                                >
                                    {{ item.subtitle }}
                                </p>
                            </div>
                            <p
                                class="font-sans text-sm uppercase tracking-[0.2em] text-text/80 sm:text-right"
                            >
                                {{ formatEventTime(item.time) }}
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </header>

        <section
            v-if="event.posterImage"
            id="event-poster"
            class="flex justify-center"
        >
            <img
                :src="event.posterImage"
                :alt="`Cartel de ${event.title}`"
                class="w-full max-w-[520px] h-auto object-contain"
            />
        </section>

        <!-- Bands -->
        <section v-if="isSplitVenueEvent && primaryBand" class="grid event-programme">
            <div
                class="relative grid grid-cols-1 lg:grid-cols-12 gap-4 items-start feature-row"
            >
                <!-- Image -->
                <div class="lg:col-span-5 flex justify-center feature-image-col">
                    <div class="overflow-hidden feature-image-frame">
                        <img
                            :src="primaryBand.image"
                            :alt="primaryBand.name"
                            class="w-full object-cover feature-image"
                        />
                    </div>
                </div>

                <!-- Text -->
                <div class="lg:col-span-7 feature-text-col">
                    <div>
                        <h2 class="font-heading text-3xl relative inline-block">
                            <template v-if="primaryBand.bandcamp">
                                <a
                                    :href="primaryBand.bandcamp"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="border-text pb-1 hover:border-accent transition-colors underline decoration-inherit decoration-1 underline-offset-4"
                                >
                                    {{ primaryBand.name }}
                                </a>
                            </template>
                            <template v-else>
                                <span class="border-text pb-1 decoration-1 underline-offset-4">
                                    {{ primaryBand.name }}
                                </span>
                            </template>
                        </h2>
                        <p
                            v-if="primaryBand.label || primaryBand.country"
                            class="mt-1 font-sans text-base text-text/60"
                        >
                            (
                            <span v-if="primaryBand.label">{{ primaryBand.label }}</span>
                            <span v-if="primaryBand.label && primaryBand.country"> / </span>
                            <span v-if="primaryBand.country">{{ primaryBand.country }}</span>
                            )
                        </p>
                    </div>
                    <ArtistBiography
                        class="font-sans text-base leading-relaxed max-w-prose mt-[var(--fh-space-2)] description-html"
                        :html="primaryBand.description"
                    />
                </div>

                <!-- Accent bar -->
                <div class="absolute top-0 h-full w-1 bg-accent feature-accent" />
            </div>
        </section>
        <section v-else class="grid event-programme">
            <EventArtistBio
                v-for="(artist, index) in event.bands"
                :key="artist.name"
                :artist="artist"
                :reversed="index % 2 === 1"
            />
        </section>

        <!-- Split-venue supporting artists -->
        <section
            v-if="isSplitVenueEvent && supportingPerformances.length"
            class="grid gap-12 md:gap-16 md:grid-cols-2 w-full max-w-5xl mx-auto"
            id="split-venue-support"
        >
            <div
                v-for="{ session, artist } in supportingPerformances"
                :key="session.id"
                class="space-y-4 w-full"
            >
                <div class="flex flex-col items-start gap-1.5">
                    <h3
                        class="font-heading text-[26px] leading-tight text-accent m-0 underline decoration-1 underline-offset-4 decoration-current"
                    >
                        {{ session.venue }}
                    </h3>
                    <span
                        class="inline-flex items-baseline text-sm font-semibold tracking-[0.03em] text-text/80 support-subtitle"
                    >
                        {{ artist.name }}<template v-if="session.supportingArtistAffiliation"> ({{ session.supportingArtistAffiliation }})</template>
                    </span>
                    <span v-if="session.supportingArtistRole" class="text-sm font-sans text-text/60">
                        {{ session.supportingArtistRole }}
                    </span>
                </div>
                <div class="w-full aspect-[4/3] overflow-hidden rounded-sm">
                    <img
                        :src="artist.image"
                        :alt="artist.name"
                        class="w-full h-full object-cover"
                    >
                </div>
                <ArtistBiography
                    class="font-sans text-base leading-relaxed description-html text-left w-full"
                    :html="artist.description"
                />
            </div>
        </section>
        <footer v-if="!isPast && (isSplitVenueEvent ? ticketedVenueSlots.length : event.ticketUrl)"
            class="border-t border-text/30 pt-5 text-center">
            <template v-if="isSplitVenueEvent">
                <div class="flex flex-wrap justify-center gap-4">
                    <a v-for="slot in ticketedVenueSlots"
                        :key="slot.id" :href="slot.ticketUrl" target="_blank" rel="noopener noreferrer" class="event-ticket">
                        {{ slot.venue }} · Entradas
                    </a>
                </div>
            </template>
            <a v-else-if="event.ticketUrl" :href="event.ticketUrl" target="_blank" rel="noopener noreferrer" class="event-ticket">
                Entradas
            </a>
        </footer>
    </article>
</template>

<style scoped>
.event-article {
    display: grid;
    gap: var(--fh-space-4);
    padding: var(--fh-space-3) var(--fh-space-2) var(--fh-space-4);
}

.event-article-split {
    gap: var(--fh-space-3);
}

.event-title {
    font-size: clamp(1.8rem, 1.35rem + 1.75vw, 2.5rem);
    text-wrap: balance;
}

.event-prices {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: var(--fh-space-2);
    row-gap: 0.25rem;
    margin-top: var(--fh-space-1);
}

.event-programme {
    gap: var(--fh-space-4);
}



.event-ticket {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid currentColor;
}
.event-ticket:hover {
    color: #fff;
    background: #181818;
    border-color: #181818;
}

.description-html :deep(p) {
    margin-bottom: 8px;
}

.description-html :deep(p:last-child) {
    margin-bottom: 0;
}

.description-html {
    word-break: break-word;
}

/* Split-venue feature image defaults (mobile & portrait) */
.feature-image-frame {
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: clamp(240px, 90vw, 420px);
    margin: 0 auto;
    aspect-ratio: 4 / 3;
    overflow: hidden;
}

.feature-image {
    object-position: center;
    width: 100%;
    height: 100%;
}

.event-article img {
    filter: none !important;
}

.support-subtitle {
    white-space: normal;
    word-break: break-word;
}

/* Split-venue template adjustments for landscape orientation */
@media (orientation: landscape) {
    /* Collapse to single column and place text first, image after */
    .feature-row {
        grid-template-columns: 1fr !important;
    }

    .feature-text-col {
        order: 2 !important; /* text below the image */
        text-align: center !important;
        max-width: 720px;
        margin: 16px auto 0;
    }

    .feature-image-col {
        order: 1 !important; /* image first */
        justify-content: center !important;
    }

    /* Center image and reduce width so it sits under text */
    .feature-image-frame {
        display: flex;
        justify-content: center;
        width: 100%;
        max-width: clamp(300px, 60vw, 600px);
        margin: 0 auto;
        aspect-ratio: 4 / 3;
    }

    /* Hide the vertical accent bar to avoid awkward spacing */
    .feature-accent {
        display: none !important;
    }
}
</style>
