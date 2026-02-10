<script setup lang="ts">
interface Band {
    name: string
    image: string
    bandcamp: string
    description: string
}

interface ScheduleItem {
    title: string
    subtitle?: string
    time: string
}

interface Show {
    slug: string
    title: string
    date: string
    time: string
    venue: string
    ticketUrl?: string
    ticketUrlCasa?: string
    bands: Band[]
    schedule?: ScheduleItem[]
    layoutVariant?: 'split-venues' | 'default'
}

const props = defineProps<{ event: Show }>()
const show = props.event

const isSplitVenueEvent = computed(() => show.layoutVariant === 'split-venues')

const splitVenueSlots = computed(() => [
    {
        time: show.timeCasa || show.time || '18:00',
        venue: 'Casa Montjuic',
        note: '+ Taki Onqoy (Warm up DJ set)',
    },
    {
        time: show.timeLaut || show.time || '21:00',
        venue: 'Laut',
        note: '+ Francisco Sosa (Live modular set)',
    },
])

const supportingBand = computed(() =>
    show.bands.find((band) =>
        band.name.toLowerCase().includes('francisco sosa')
    )
)
const supportingBandCasa = computed(() =>
    show.bands.find((band) => band.name.toLowerCase().includes('taki onqoy'))
)
const supportingBandLaut = supportingBand

const primaryBand = computed(() => show.bands?.[0] ?? null)

const titleParts = computed(() => {
    const match = show.title.match(/^(.*?)(?:\s*\(([^)]*)\))?$/)
    return {
        main: (match?.[1] ?? show.title).trim(),
        tag: (match?.[2] ?? '').trim(),
    }
})

const slotTicketUrl = (venue: string) => {
    const lower = venue.toLowerCase()
    if (lower.includes('casa')) return show.ticketUrlCasa
    if (lower.includes('laut')) return show.ticketUrl
    return show.ticketUrl
}

const formattedDate = computed(() => {
    if (!show.date) return ''

    const parts = show.date.split('/').map(Number)
    if (parts.length !== 3) return show.date // fallback to raw string

    const [day, month, year] = parts
    if (!day || !month || !year) return show.date // safeguard

    const fullYear = year < 100 ? 2000 + year : year

    const date = new Date(fullYear, month - 1, day)

    return new Intl.DateTimeFormat('es-ES', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    })
        .format(date)
        .replace(/^\w/, (c) => c.toUpperCase()) // capitalize first letter
})
</script>

<template>
    <article
        :class="[
            'container mx-auto px-6 py-16 event-article',
            isSplitVenueEvent ? 'space-y-10' : 'space-y-24',
        ]"
    >
        <!-- Header -->
        <header class="text-center" id="event-header">
            <h1 class="font-heading text-[40px] leading-tight text-accent">
                {{ titleParts.main }}
            </h1>
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
                    v-for="slot in splitVenueSlots"
                    :key="slot.venue + slot.time"
                    class="flex flex-wrap items-center justify-center gap-2 font-sans text-lg text-center"
                >
                    <span>{{ slot.time }}</span>
                    <span>-</span>
                    <span>{{ slot.venue }}</span>
                    <span v-if="slot.note" class="text-sm text-text/70">
                        {{ slot.note }}
                    </span>
                    <template v-if="slotTicketUrl(slot.venue)">
                        <span>-</span>
                        <a
                            :href="slotTicketUrl(slot.venue)"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="underline decoration-inherit underline-offset-4 hover:text-accent transition"
                        >
                            Entradas
                        </a>
                    </template>
                    <span v-else>- Entradas Próximamente</span>
                </div>
            </div>
            <template v-else>
                <p class="font-sans text-lg mt-5" id="event-meta">
                    <span class="font-heading text-xl font-bold text-accent">
                        {{ formattedDate }}
                    </span>
                    - {{ event.time }} - {{ event.venue }}
                </p>
                <a
                    v-if="event.ticketUrl"
                    :href="event.ticketUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-block mt-6 px-6 py-2 border-2 border-text text-text font-sans hover:bg-text hover:text-background transition"
                >
                    Entradas
                </a>
                <p v-else class="mt-6 font-sans text-base text-text">
                    Entradas Próximamente
                </p>
            </template>
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
                                {{ item.time }}
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </header>

        <!-- Bands -->
        <section v-if="isSplitVenueEvent && primaryBand" class="grid gap-20">
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
                    <div
                        class="font-sans text-base leading-relaxed max-w-prose mt-8 description-html"
                        v-html="primaryBand.description"
                    />
                </div>

                <!-- Accent bar -->
                <div class="absolute top-0 h-full w-1 bg-accent feature-accent" />
            </div>
        </section>
        <section v-else class="grid gap-20">
            <div
                v-for="(band, i) in event.bands"
                :key="band.name"
                class="relative grid grid-cols-1 lg:grid-cols-12 gap-4 items-start"
            >
                <!-- Image -->
                <div
                    class="lg:col-span-5 flex justify-center"
                    :class="i % 2 === 1 ? 'lg:order-2' : ''"
                >
                    <div class="w-2/3 aspect-square overflow-hidden">
                        <img
                            :src="band.image"
                            :alt="band.name"
                            class="w-full h-full object-cover transition duration-500"
                        />
                    </div>
                </div>

                <!-- Text -->
                <div
                    class="lg:col-span-7"
                    :class="i % 2 === 1 ? 'lg:order-1 text-right' : 'text-left'"
                >
                    <h2 class="font-heading text-3xl relative inline-block">
                        <template v-if="band.bandcamp">
                            <a
                                :href="band.bandcamp"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="border-text pb-1 hover:border-accent transition-colors underline decoration-inherit decoration-1 underline-offset-4"
                            >
                                {{ band.name }}
                            </a>
                        </template>
                        <template v-else>
                            <span class="border-text pb-1 decoration-1 underline-offset-4">
                                {{ band.name }}
                            </span>
                        </template>
                    </h2>
                    <div
                        class="font-sans text-base leading-relaxed max-w-prose mt-8 description-html"
                        :class="i % 2 === 1 ? 'ml-auto' : ''"
                        v-html="band.description"
                    />
                </div>

                <!-- Accent bar -->
                <div
                    class="absolute top-0 h-full w-1 bg-accent"
                    :class="i % 2 === 1 ? 'right-0' : 'left-0'"
                />
            </div>
        </section>

        <!-- Split-venue supporting artists -->
        <section
            v-if="isSplitVenueEvent && supportingBandCasa && supportingBandLaut"
            class="grid gap-12 md:gap-16 md:grid-cols-2 w-full max-w-5xl mx-auto"
            id="split-venue-support"
        >
            <div class="space-y-4 w-full">
                <div class="flex flex-col items-start gap-1.5">
                    <h3
                        class="font-heading text-[26px] leading-tight text-accent m-0 underline decoration-1 underline-offset-4 decoration-current"
                    >
                        Casa Montjuic
                    </h3>
                    <span
                        class="inline-flex items-baseline text-sm font-semibold tracking-[0.03em] text-text/80 support-subtitle"
                    >
                        Taki Onqoy (Foggy Hex / Kiosk Radio)
                    </span>
                    <span class="text-sm font-sans text-text/60">
                        Warm up DJ Set
                    </span>
                </div>
                <div class="w-full aspect-[4/3] overflow-hidden rounded-sm">
                    <img
                        :src="supportingBandCasa.image"
                        :alt="supportingBandCasa.name"
                        class="w-full h-full object-cover"
                    />
                </div>
                <div
                    class="font-sans text-base leading-relaxed description-html text-left w-full"
                    v-html="supportingBandCasa.description"
                />
            </div>
            <div class="space-y-4 w-full">
                <div class="flex flex-col items-start gap-1.5">
                    <h3
                        class="font-heading text-[26px] leading-tight text-accent m-0 underline decoration-1 underline-offset-4 decoration-current"
                    >
                        Laut
                    </h3>
                    <span
                        class="inline-flex items-baseline text-sm font-semibold tracking-[0.03em] text-text/80 support-subtitle"
                    >
                        Francisco Sosa (Barcelona Modular Society / Restless Music)
                    </span>
                    <span class="text-sm font-sans text-text/60">
                        Live modular set
                    </span>
                </div>
                <div class="w-full aspect-[4/3] overflow-hidden rounded-sm">
                    <img
                        :src="supportingBandLaut.image"
                        :alt="supportingBandLaut.name"
                        class="w-full h-full object-cover"
                    />
                </div>
                <div
                    class="font-sans text-base leading-relaxed description-html text-left w-full"
                    v-html="supportingBandLaut.description"
                />
            </div>
        </section>
    </article>
</template>

<style scoped>
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
