<script setup lang="ts">
import type { EventArtist } from '~/types/events'

defineProps<{ artist: EventArtist }>()
</script>

<template>
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
</template>
