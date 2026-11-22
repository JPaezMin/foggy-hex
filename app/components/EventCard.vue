<template>
    <article
        class="bg-white title-box p-4 grid items-center gap-[var(--fh-space-2)] relative event-card"
    >
        <!-- Image -->
        <div class="w-full aspect-[4/3] sm:aspect-square overflow-hidden relative">
            <img
                :src="event.image"
                :alt="event.title"
                class="w-full h-full object-cover object-[50%_63%] transition duration-300"
            >
        </div>

        <!-- Text content -->
        <div class="flex-1 flex flex-col text-left">
            <h3 class="event-card-heading">
                <NuxtLink
                    :to="`/events/${event.slug}`"
                    class="event-title-link"
                >
                    <span class="event-title-primary font-heading text-accent">
                        {{ titleMain }}
                    </span>
                    <span
                        v-if="titleSupport"
                        class="event-title-support font-sans text-text/70"
                    >
                        {{ titleSupport }}
                    </span>
                </NuxtLink>
            </h3>

            <!-- Subtitle (date + venue, fixed height) -->
            <p class="event-meta font-sans text-text/70">
                <time :datetime="event.date">{{ formattedDate }}</time>
                <span v-if="timing">{{ timing.timeLabel }} <time :datetime="timing.time">{{ timing.time }}</time></span>
                <span class="text-text/35">/</span>
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
            <NuxtLink
                :to="'/events/' + event.slug"
                :aria-label="'Más información sobre ' + event.title"
                class="inline-flex self-start min-h-11 items-center underline underline-offset-4">
                Más información
            </NuxtLink>
            <a
                v-if="event.ticketUrl"
                :href="event.ticketUrl" target="_blank" rel="noopener noreferrer"
                class="inline-flex self-start mt-4 px-5 py-2 border-2 border-text text-text font-sans text-sm hover:bg-text hover:!text-background transition"
            >
                Entradas
            </a>
            <span
                v-else
                class="inline-flex self-start mt-4 px-5 py-2 border-2 border-text/30 text-text/55 font-sans text-sm"
            >
                Entradas próximamente
            </span>
        </div>
    </article>
</template>

<script setup lang="ts">
import type { UpcomingEvent } from '~/types/events'

const props = defineProps<{
    event: UpcomingEvent
}>()

const formattedDate = computed(() => formatEventDateShort(props.event.date))
const timing = computed(() => /^\d{2}:\d{2}$/.test(props.event.time) ? props.event : undefined)

const titleMain = computed(() =>
    props.event.title
        .replace(/\s*\+\s*$/, '')
        .split(/\s+\+\s+/)[0]?.trim() ?? ''
)

const titleSupport = computed(() => {
    if (props.event.titleSubtitle) {
        const subtitle = props.event.titleSubtitle.trim()
        return subtitle.startsWith('+') ? subtitle : `+ ${subtitle}`
    }

    const parts = props.event.title
        .replace(/\s*\+\s*$/, '')
        .split(/\s+\+\s+/)
        .map((part) => part.trim())
        .filter(Boolean)

    return parts.length > 1 ? `+ ${parts.slice(1).join(' + ')}` : ''
})
</script>

<style scoped>
.event-card {
    width: 100%;
    max-width: 48rem;
    margin-inline: auto;
}

@media (min-width: 42rem) {
    .event-card {
        grid-template-columns: minmax(0, 1fr) minmax(0, 1.618fr);
    }
}

.event-card-heading {
    display: flow-root;
    margin: 0;
    font: inherit;
    letter-spacing: inherit;
}

.event-title-link {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.35rem;
    margin-bottom: 0.85rem;
    color: inherit;
    text-decoration: none;
}

.event-title-primary,
.event-title-support {
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    text-wrap: balance;
}

.event-title-primary {
    font-size: clamp(1.35rem, 2vw, 1.65rem);
    line-height: 1.05;
}

.event-title-support {
    font-size: clamp(1rem, 1.35vw, 1.12rem);
    line-height: 1.25;
}

.event-title-link:hover .event-title-primary,
.event-title-link:hover .event-title-support {
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 4px;
}

.event-meta {
    display: flex;
    min-height: 2.9rem;
    align-items: center;
    justify-content: flex-start;
    gap: 0.55rem;
    border-top: 1px solid rgb(0 0 0 / 0.12);
    padding-top: 0.85rem;
    font-size: 0.94rem;
    line-height: 1.25;
}

@media (max-width: 420px) {
    .event-meta {
        flex-wrap: wrap;
        row-gap: 0.25rem;
    }
}
</style>
