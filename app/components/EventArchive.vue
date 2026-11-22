<script setup lang="ts">
import type { ArchivedEvent } from '~/types/events'

const props = defineProps<{ events: readonly ArchivedEvent[] }>()

const archiveYears = computed(() => {
    const years = new Map<string, ArchivedEvent[]>()
    for (const event of props.events) {
        const year = String(parseEventCalendarDate(event.date)?.getUTCFullYear() ?? 'Sin fecha')
        if (!years.has(year)) years.set(year, [])
        years.get(year)?.push(event)
    }
    return Array.from(years, ([year, events]) => ({ year, events }))
})
</script>

<template>
    <section id="past-events">
        <h2
            class="section-heading bg-sky-50 font-heading text-center title-box px-6 py-2 border-1 border-text"
        >
            Eventos Pasados
        </h2>

        <template v-if="archiveYears.length">
            <nav aria-label="Años del archivo" class="archive-years flex flex-wrap border-y border-text/30">
                <a
                    v-for="{ year } in archiveYears" :key="year" :href="'#archivo-' + year"
                    class="inline-flex items-center min-h-11 px-2 font-heading underline underline-offset-4">
                    {{ year }}
                </a>
            </nav>
            <section
                v-for="{ year, events: yearEvents } in archiveYears" :key="year"
                class="archive-year" :aria-labelledby="'archivo-' + year">
                <h3 :id="'archivo-' + year" tabindex="-1" class="archive-year-title font-heading text-3xl">{{ year }}</h3>
                <div class="archive-grid">
                    <article v-for="event in yearEvents" :key="event.title + event.date" class="archive-card">
                        <div class="w-full aspect-[16/9] overflow-hidden">
                            <img
                                :src="event.image" alt="" loading="lazy"
                                class="w-full h-full object-cover grayscale">
                        </div>
                        <h4 class="archive-card-title font-heading" :title="event.title">{{ event.title }}</h4>
                        <p class="archive-card-meta font-sans text-sm text-gray-700">
                            <span>{{ formatEventDateShort(event.date) }}</span> — {{ event.venue }}
                        </p>
                        <NuxtLink
                            v-if="event.slug" :to="'/events/' + event.slug"
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
</template>

<style scoped>
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
</style>
