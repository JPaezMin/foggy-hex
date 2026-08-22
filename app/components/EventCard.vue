<template>
    <article
        class="bg-white title-box p-4 flex flex-col transition relative event-card"
        :class="[
            isExpired ? 'opacity-60' : '',
        ]"
        :aria-disabled="isExpired ? 'true' : 'false'"
    >
        <!-- Image -->
        <div class="w-full aspect-[16/9] overflow-hidden mb-5 relative">
            <img
                :src="event.image"
                :alt="event.title"
                class="w-full h-full object-cover transition duration-300"
                :class="isExpired ? 'grayscale scale-105' : ''"
            />
            <div
                v-if="isExpired"
                class="absolute inset-0 bg-black/65 text-white font-heading text-sm uppercase tracking-[0.3em] flex items-center justify-center"
            >
                Evento pasado
            </div>
        </div>

        <!-- Text content -->
        <div class="flex-1 flex flex-col text-center">
            <NuxtLink
                v-if="isLinkable"
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
            <div
                v-else
                class="event-title-link"
                :class="isExpired ? 'opacity-70' : ''"
                aria-disabled="true"
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
            </div>

            <!-- Subtitle (date + venue, fixed height) -->
            <p class="event-meta font-sans text-text/70">
                <span>{{ formattedDate }}</span>
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
            <a
                v-if="event.ticketUrl && !isExpired"
                :href="event.ticketUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex self-center mt-4 px-5 py-2 border-2 border-text text-text font-sans text-sm hover:bg-text hover:text-background transition"
            >
                Entradas
            </a>
            <span
                v-else-if="!isExpired"
                class="inline-flex self-center mt-4 px-5 py-2 border-2 border-text/30 text-text/55 font-sans text-sm"
            >
                Entradas próximamente
            </span>
        </div>
    </article>
</template>

<script setup lang="ts">
import type { FutureCollectionItem } from '@nuxt/content'

const props = defineProps<{
    event: FutureCollectionItem
    isExpired?: boolean
}>()

const formattedDate = computed(() => {
    if (!props.event?.date) return ''

    const parts = props.event.date.split('-').map(Number)
    if (parts.length !== 3) return props.event.date // fallback

    const [year, month, day] = parts
    if (!day || !month || !year) return props.event.date // safeguard

    const dd = String(day).padStart(2, '0')
    const mm = String(month).padStart(2, '0')
    const yyyy = String(year)

    return `${dd}/${mm}/${yyyy}`
})

const isExpired = computed(() => Boolean(props.isExpired))
const isLinkable = computed(
    () => !isExpired.value && props.event.detailsPublic !== false
)

const titleMain = computed(() =>
    props.event.title
        .replace(/\s*\+\s*$/, '')
        .split(/\s+\+\s+/)[0]
        .trim()
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
    min-height: 100%;
}

.event-title-link {
    display: flex;
    min-height: 4.85rem;
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
    -webkit-line-clamp: 1;
    font-size: clamp(1.35rem, 2vw, 1.65rem);
    line-height: 1.05;
}

.event-title-support {
    -webkit-line-clamp: 1;
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
    justify-content: center;
    gap: 0.55rem;
    border-top: 1px solid rgb(0 0 0 / 0.12);
    padding-top: 0.85rem;
    font-size: 0.94rem;
    line-height: 1.25;
}

@media (max-width: 420px) {
    .event-title-link {
        min-height: 5.25rem;
    }

    .event-meta {
        flex-wrap: wrap;
        row-gap: 0.25rem;
    }
}
</style>
