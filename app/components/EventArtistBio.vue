<script setup lang="ts">
import type { EventArtist } from '~/types/events'

defineProps<{
    artist: EventArtist
    reversed?: boolean
}>()
</script>

<template>
    <div
        class="relative grid grid-cols-1 event-row-gap lg:grid-cols-12 items-start default-event-row"
    >
        <!-- Image -->
        <div
            class="lg:col-span-5 flex flex-col justify-center default-image-col"
            :class="{ 'lg:order-2': reversed }"
        >
            <div class="overflow-hidden default-image-frame">
                <img
                    :src="artist.image"
                    :alt="artist.name"
                    class="w-full h-full object-cover transition duration-500 default-image"
                >
            </div>
            <p v-if="artist.imageCredit" class="mt-2 text-center text-sm">{{ artist.imageCredit }}</p>
        </div>

        <!-- Text -->
        <div
            class="lg:col-span-7 default-text-col"
            :class="reversed ? 'lg:order-1 lg:text-right' : ''"
        >
            <div>
                <h2 class="font-heading text-3xl relative inline-block">
                    <template v-if="artist.bandcamp">
                        <a
                            :href="artist.bandcamp"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="border-text pb-1 hover:border-accent transition-colors underline decoration-inherit decoration-1 underline-offset-4"
                        >
                            {{ artist.name }}
                        </a>
                    </template>
                    <template v-else>
                        <span class="border-text pb-1 decoration-1 underline-offset-4">
                            {{ artist.name }}
                        </span>
                    </template>
                </h2>
                <p
                    v-if="artist.label || artist.country"
                    class="mt-1 font-sans text-base text-text/60"
                >
                    (
                    <span v-if="artist.label">{{ artist.label }}</span>
                    <span v-if="artist.label && artist.country"> / </span>
                    <span v-if="artist.country">{{ artist.country }}</span>
                    )
                </p>
            </div>
            <ArtistBiography
                class="font-sans text-base leading-relaxed max-w-prose mt-[var(--fh-space-2)] description-html"
                :class="reversed ? 'lg:ml-auto' : ''"
                :html="artist.description"
            />
        </div>

        <!-- Accent bar -->
        <div
            class="absolute top-0 h-full w-1 bg-accent"
            :class="reversed ? 'right-0' : 'left-0'"
        />
    </div>
</template>

<style scoped>
.event-row-gap {
    gap: var(--fh-space-2) var(--fh-space-3);
}

.default-image-frame {
    width: min(100%, 36rem);
    margin: 0 auto;
    aspect-ratio: 4 / 3;
}

.default-image {
    object-position: center;
}

@media (min-width: 640px) {
    .default-image-frame {
        aspect-ratio: 3 / 2;
    }
}

@media (min-width: 1024px) {
    .default-event-row {
        align-items: stretch;
    }

    .default-image-col {
        align-items: stretch;
        justify-content: stretch;
    }

    .default-image-frame {
        position: relative;
        width: 100%;
        flex: 1 1 0;
        aspect-ratio: auto;
        min-height: clamp(360px, 42vw, 620px);
    }

    .default-image {
        position: absolute;
        inset: 0;
    }

    .default-text-col {
        min-width: 0;
    }
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

img {
    filter: none !important;
}
</style>
