<script setup lang="ts">
import type { ArchivedEvent } from '~/types/events'

const { data: futureEvents } = await useAsyncData('future-events', () =>
    queryCollection('future').order('date', 'ASC').all()
)

const { data: pastEvents } = await useAsyncData('past-events', () =>
    queryCollection('past').order('date', 'DESC').all()
)

useSeoMeta({
    title: 'Foggy Hex | Música fuera de los márgenes en Barcelona',
    description:
        'Foggy Hex es un colectivo de Barcelona que programa conciertos, escuchas y encuentros alrededor de músicas fuera del circuito habitual: experimental, ambient, electrónica e improvisación.',
    ogTitle: 'Foggy Hex | Música fuera de los márgenes en Barcelona',
    ogDescription:
        'Programación musical independiente en Barcelona para escenas y sonidos fuera del circuito habitual.',
    ogImage: 'https://foggyhexbcn.com/favicons/favicon-1024x1024.png',
    ogUrl: 'https://foggyhexbcn.com/',
    twitterCard: 'summary_large_image',
})

const eventCalendarDate = useEventCalendarDate()

const upcomingEvents = computed(() =>
    getUpcomingEvents(futureEvents.value ?? [], eventCalendarDate.value)
)


const upcomingEvent = computed(() => upcomingEvents.value[0] ?? null)
const otherUpcomingEvents = computed(() => upcomingEvents.value.slice(1, 3))
const upcomingTitle = computed(() =>
    [upcomingEvent.value?.title, upcomingEvent.value?.titleSubtitle].filter(Boolean).join(' ')
)
const upcomingFeaturedPoster = computed(
    () => upcomingEvent.value?.featuredPoster?.trim() || ''
)
const upcomingEventPath = computed(() => {
    if (!upcomingEvent.value || upcomingEvent.value.detailsPublic === false) {
        return ''
    }
    return `/events/${upcomingEvent.value.slug}`
})
const upcomingPosterAlt = computed(() =>
    upcomingEvent.value
        ? `Cartel de ${upcomingEvent.value.title}`
        : 'Cartel de nuestro próximo evento'
)

const { data: showIndex } = await useAsyncData('archive-show-index', () =>
    queryCollection('shows').order('slug', 'ASC').all().then((shows) =>
        shows.filter((show) => show.detailsPublic !== false).map(({ slug, time, timeLabel }) => ({ slug, time, timeLabel }))
    )
)

function showTiming(slug: string) {
    const show = showIndex.value?.find((item) => item.slug === slug)
    return show?.time && /^\d{2}:\d{2}$/.test(show.time) ? show : undefined
}

const upcomingTiming = computed(() =>
    upcomingEvent.value ? showTiming(upcomingEvent.value.slug) : undefined
)

const archivedEvents = computed(() => getArchivedEvents(
    futureEvents.value ?? [],
    pastEvents.value ?? [],
    showIndex.value?.map(({ slug }) => slug) ?? [],
    eventCalendarDate.value,
))

const archiveYears = computed(() => {
    const years = new Map<string, ArchivedEvent[]>()
    for (const event of archivedEvents.value) {
        const year = String(parseEventCalendarDate(event.date)?.getUTCFullYear() ?? 'Sin fecha')
        if (!years.has(year)) years.set(year, [])
        years.get(year)?.push(event)
    }
    return Array.from(years, ([year, events]) => ({ year, events }))
})

</script>

<template>
    <div class="container mx-auto min-h-screen text-text space-y-6 py-10">
        <h1 class="sr-only">Foggy Hex — conciertos en Barcelona</h1>
        <!-- About Section -->
        <section id="about" class="container py-12">
            <div
                class="grid grid-cols-1 lg:grid-cols-3 gap-16 items-stretch max-w-6xl mx-auto"
            >
                <!-- Text (2/3 of the width on large screens) -->
                <div
                    class="lg:col-span-2 flex items-center border-l border-text pl-6"
                >
                    <p class="font-heading text-2xl lg:text-4xl leading-snug">
                        Somos un colectivo con base de operaciones en Barcelona.
                        Nacemos de la necesidad de celebrar espacios y escenas
                        que residen en el margen de nuestra ciudad y a la vez
                        acercar a ella proyectos internacionales que nos
                        inspiran.
                    </p>
                </div>
                <!-- Image (1/3 width, smaller accent) -->
                <div
                    class="relative hidden lg:flex justify-center items-center"
                >
                    <img
                        src="/images/fh-deco.svg"
                        alt="Foggy Hex Deco"
                        class="h-full max-h-[360px] w-auto object-contain opacity-90"
                    />
                </div>
            </div>
        </section>

        <div class="homepage">
            <hr v-if="upcomingEvent" class="programme-divider" />
            <section v-if="upcomingEvent" id="future-events" aria-labelledby="upcoming-heading">
                <article class="featured-event">
                    <div class="featured-copy">
                        <p id="upcoming-heading" class="font-sans text-sm uppercase tracking-widest">Próximo concierto</p>
                        <h2 class="featured-title font-heading leading-tight">{{ upcomingTitle }}</h2>
                        <p class="font-sans text-lg">
                            <time :datetime="upcomingEvent.date">{{ formatEventDateShort(upcomingEvent.date) }}</time>
                            <span v-if="upcomingTiming">
                                · {{ upcomingTiming.timeLabel ? upcomingTiming.timeLabel + ' ' : '' }}<time :datetime="upcomingTiming.time">{{ upcomingTiming.time }}</time>
                            </span>
                            · {{ upcomingEvent.venue }}
                        </p>
                        <div class="featured-actions flex flex-wrap items-center">
                            <a v-if="upcomingEvent.ticketUrl" :href="upcomingEvent.ticketUrl" target="_blank" rel="noopener noreferrer"
                                class="inline-flex items-center min-h-11 border-2 border-text px-4 hover:bg-text hover:!text-background">
                                Entradas
                            </a>
                            <span v-else class="text-sm">Entradas próximamente</span>
                            <NuxtLink v-if="upcomingEventPath" :to="upcomingEventPath"
                                class="inline-flex items-center min-h-11 underline underline-offset-4">
                                Más información
                            </NuxtLink>
                        </div>
                    </div>
                    <img
                        :src="upcomingFeaturedPoster || upcomingEvent.image"
                        :alt="upcomingFeaturedPoster ? upcomingPosterAlt : ''"
                        class="featured-poster-image"
                        fetchpriority="high"
                    />
                </article>

                <div v-if="otherUpcomingEvents.length" class="mt-10">
                    <h2 class="section-heading bg-sky-50 font-heading text-center title-box px-6 py-2 border-1 border-text">Próximamente</h2>
                    <div class="grid gap-8" :class="{ 'md:grid-cols-2': otherUpcomingEvents.length > 1 }">
                        <EventCard v-for="event in otherUpcomingEvents" :key="event.slug" :event="event"
                            :timing="showTiming(event.slug)" />
                    </div>
                </div>
            </section>

            <!-- Newsletter Subscription -->
            <section id="newsletter" class="newsletter-section">
                <div
                    class="border border-text newsletter-panel"
                >
                    <div class="newsletter-grid">
                        <!-- Text column -->
                        <div class="text-left">
                            <h2 class="font-heading text-3xl mb-4">
                                Suscríbete a nuestra newsletter.
                            </h2>
                            <p class="text-lg text-gray-700 max-w-md">
                                Únete a nuestra lista de correo para enterarte
                                primero de los próximos conciertos, novedades y
                                noticias de Foggy Hex.
                            </p>
                        </div>

                        <!-- Form column -->
                        <div class="w-full">
                            <form
                                action="https://foggyhexbcn.us13.list-manage.com/subscribe/post?u=3bf61944f37a5e219e4fdccda&amp;id=c32ef2e9a5&amp;f_id=001b02e9f0"
                                method="post"
                                target="_blank"
                                novalidate
                                class="newsletter-form"
                            >
                                <input
                                    type="email"
                                    name="EMAIL"
                                    placeholder="Tu correo electrónico"
                                    required
                                    class="min-w-0 flex-auto px-4 py-3 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
                                />
                                <button
                                    type="submit"
                                    class="bg-black text-white px-6 py-3 font-medium hover:bg-gray-800 transition"
                                >
                                    Suscribirse
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Past Events -->
            <section id="past-events">
                <h2
                    class="section-heading bg-sky-50 font-heading text-center title-box px-6 py-2 border-1 border-text"
                >
                    Eventos Pasados
                </h2>

                <template v-if="archiveYears.length">
                    <nav aria-label="Años del archivo" class="archive-years flex flex-wrap border-y border-text/30">
                        <a v-for="{ year } in archiveYears" :key="year" :href="'#archivo-' + year"
                            class="inline-flex items-center min-h-11 px-2 font-heading underline underline-offset-4">
                            {{ year }}
                        </a>
                    </nav>
                    <section v-for="{ year, events } in archiveYears" :key="year"
                        class="archive-year" :aria-labelledby="'archivo-' + year">
                        <h3 :id="'archivo-' + year" tabindex="-1" class="archive-year-title font-heading text-3xl">{{ year }}</h3>
                        <div class="archive-grid">
                            <article v-for="event in events" :key="event.title + event.date" class="archive-card">
                                <div class="w-full aspect-[16/9] overflow-hidden">
                                    <img :src="event.image" alt="" loading="lazy"
                                        class="w-full h-full object-cover grayscale" />
                                </div>
                                <h4 class="archive-card-title font-heading" :title="event.title">{{ event.title }}</h4>
                                <p class="archive-card-meta font-sans text-sm text-gray-700">
                                    <span>{{ formatEventDateShort(event.date) }}</span> — {{ event.venue }}
                                </p>
                                <NuxtLink v-if="event.slug" :to="'/events/' + event.slug"
                                    :aria-label="'Más información sobre ' + event.title"
                                    class="archive-card-action">
                                    Más información
                                </NuxtLink>
                            </article>
                        </div>
                    </section>
                </template>

                <p v-else class="text-center text-lg font-sans text-gray-600">
                    No hay eventos pasados registrados.
                </p>
            </section>
        </div>
    </div>
</template>

<style scoped>
.homepage {
    display: grid;
    gap: var(--fh-space-4);
    padding: 0 var(--fh-space-2) var(--fh-space-4);
}

.programme-divider {
    width: clamp(3rem, 8vw, 7rem);
    margin-inline: auto;
    border: 0;
    border-top: 1px solid currentColor;
    opacity: 0.45;
}

.featured-title {
    font-size: clamp(1.85rem, 1.2rem + 2.25vw, 3rem);
}

.featured-actions {
    column-gap: var(--fh-space-2);
    row-gap: var(--fh-space-1);
}

.newsletter-panel {
    padding: var(--fh-space-3);
}

.newsletter-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 23rem), 1fr));
    gap: var(--fh-space-2);
    align-items: center;
}

.newsletter-form {
    display: flex;
    flex-wrap: wrap;
    gap: var(--fh-space-1);
}

.section-heading {
    font-size: clamp(1.9rem, 1.55rem + 1.2vw, 2.25rem);
    margin-bottom: var(--fh-space-2);
}

.archive-years {
    column-gap: var(--fh-space-1);
}

.archive-year {
    margin-top: var(--fh-space-3);
}

.archive-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 25rem), 1fr));
    row-gap: clamp(1rem, 0.9rem + 0.4vw, 1.25rem);
    column-gap: var(--fh-space-2);
    margin-top: var(--fh-space-2);
}

.archive-year-title {
    scroll-margin-block-start: var(--fh-space-2);
}

.archive-card {
    display: flex;
    flex-direction: column;
    min-width: 0;
}

.archive-card-title {
    margin-top: var(--fh-space-1);
    font-size: 1rem;
    letter-spacing: -0.025em;
    line-height: 1.4;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.archive-card-meta {
    letter-spacing: normal;
    overflow-wrap: anywhere;
}

.archive-card-meta span {
    white-space: nowrap;
}

.archive-card-action {
    display: inline-flex;
    align-items: center;
    align-self: flex-start;
    min-height: 44px;
    font-size: 0.875rem;
    text-decoration: underline;
    text-underline-offset: 0.25em;
}

.featured-event {
    display: grid;
    gap: var(--fh-space-3);
    align-items: center;
    max-width: 72rem;
    margin-inline: auto;
}

.featured-copy {
    display: grid;
    gap: var(--fh-space-1);
    border-left: 1px solid currentColor;
    padding-inline-start: var(--fh-space-2);
}

.featured-poster-image {
    display: block;
    width: min(100%, 30rem);
    height: auto;
    max-height: 32rem;
    object-fit: contain;
    justify-self: center;
}

@media (min-width: 768px) {
    .featured-event {
        grid-template-columns: minmax(0, 1.618fr) minmax(0, 1fr);
    }
}
</style>
