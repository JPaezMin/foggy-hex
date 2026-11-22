<script setup lang="ts">
import type { UpcomingEvent } from '~/types/events'

const props = defineProps<{ event: UpcomingEvent }>()

const title = computed(() =>
    [props.event.title, props.event.titleSubtitle].filter(Boolean).join(' ')
)
const poster = computed(() => props.event.featuredPoster?.trim() || '')
const posterAlt = computed(() => 'Cartel de ' + props.event.title)
const eventPath = computed(() => '/events/' + props.event.slug)
const timing = computed(() => /^\d{2}:\d{2}$/.test(props.event.time) ? props.event : undefined)
</script>

<template>
    <section id="future-events" aria-labelledby="upcoming-heading">
        <article class="featured-event">
            <div class="featured-copy">
                <h2 id="upcoming-heading" class="font-sans text-sm uppercase tracking-widest">Próximo concierto</h2>
                <h3 class="featured-title font-heading leading-tight">{{ title }}</h3>
                <p class="font-sans text-lg">
                    <time :datetime="event.date">{{ formatEventDateShort(event.date) }}</time>
                    <span v-if="timing">
                        · {{ timing.timeLabel ? timing.timeLabel + ' ' : '' }}<time :datetime="timing.time">{{ timing.time }}</time>
                    </span>
                    · {{ event.venue }}
                </p>
                <div class="featured-actions flex flex-wrap items-center">
                    <a
                        v-if="event.ticketUrl" :href="event.ticketUrl" target="_blank" rel="noopener noreferrer"
                        class="inline-flex items-center min-h-11 border-2 border-text px-4 hover:bg-text hover:!text-background">
                        Entradas
                    </a>
                    <span v-else class="text-sm">Entradas próximamente</span>
                    <NuxtLink
                        :to="eventPath"
                        class="inline-flex items-center min-h-11 underline underline-offset-4">
                        Más información
                    </NuxtLink>
                </div>
            </div>
            <img
                :src="poster || event.image"
                :alt="poster ? posterAlt : ''"
                class="featured-poster-image"
                fetchpriority="high"
            >
        </article>
    </section>
</template>

<style scoped>
.featured-title {
    font-size: clamp(1.85rem, 1.2rem + 2.25vw, 3rem);
}
.featured-actions {
    column-gap: var(--fh-space-2);
    row-gap: var(--fh-space-1);
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
