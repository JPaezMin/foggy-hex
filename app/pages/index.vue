<script setup lang="ts">
const { siteUrl } = useRuntimeConfig().public

const { data: shows, error: showsError } = await useAsyncData('shows', () =>
    queryCollection('shows').select(
        'slug', 'title', 'titleSubtitle', 'listingTitle', 'archiveTitle', 'archiveVenue',
        'date', 'time', 'timeLabel', 'venue', 'venueUrl', 'image', 'featuredPoster', 'ticketUrl',
    ).all()
)

const { data: pastEvents, error: pastEventsError } = await useAsyncData('past-events', () =>
    queryCollection('past').order('date', 'DESC').all()
)

const programmeError = showsError.value || pastEventsError.value
if (programmeError) {
    throw createError({
        statusCode: 500,
        statusMessage: 'No se pudo cargar la programación',
        cause: programmeError,
    })
}

useSeoMeta({
    title: 'Foggy Hex | Música fuera de los márgenes en Barcelona',
    description:
        'Foggy Hex es un colectivo de Barcelona que programa conciertos, escuchas y encuentros alrededor de músicas fuera del circuito habitual: experimental, ambient, electrónica e improvisación.',
    ogTitle: 'Foggy Hex | Música fuera de los márgenes en Barcelona',
    ogDescription:
        'Programación musical independiente en Barcelona para escenas y sonidos fuera del circuito habitual.',
    ogImage: `${siteUrl}/favicons/favicon-1024x1024.png`,
    ogUrl: `${siteUrl}/`,
    twitterCard: 'summary_large_image',
})

const eventCalendarDate = useEventCalendarDate()

const upcomingEvents = computed(() =>
    getUpcomingEvents(shows.value ?? [], eventCalendarDate.value)
)

const upcomingEvent = computed(() => upcomingEvents.value[0] ?? null)
const otherUpcomingEvents = computed(() => upcomingEvents.value.slice(1, 3))
const archivedEvents = computed(() => getArchivedEvents(
    shows.value ?? [],
    pastEvents.value ?? [],
    eventCalendarDate.value,
))

</script>

<template>
    <div class="container mx-auto min-h-screen text-text space-y-6 py-10">
        <h1 class="sr-only">Foggy Hex — conciertos en Barcelona</h1>
        <section id="about" class="container py-12">
            <div
                class="grid grid-cols-1 lg:grid-cols-3 gap-16 items-stretch max-w-6xl mx-auto"
            >
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
                <div
                    class="relative hidden lg:flex justify-center items-center"
                >
                    <img
                        src="/images/fh-deco.svg"
                        alt="Foggy Hex Deco"
                        class="h-full max-h-[360px] w-auto object-contain opacity-90"
                    >
                </div>
            </div>
        </section>

        <div class="homepage">
            <hr v-if="upcomingEvent" class="programme-divider">
            <FeaturedEvent v-if="upcomingEvent" :event="upcomingEvent" />
            <UpcomingEvents :events="otherUpcomingEvents" />

            <NewsletterSignup />

            <EventArchive :events="archivedEvents" />
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

</style>
