<template>
    <article class="bg-white shadow p-4 flex flex-col">
        <!-- Image -->
        <div class="w-full aspect-[16/9] overflow-hidden mb-4">
            <img
                :src="event.image"
                :alt="event.title"
                class="w-full h-full object-cover"
            />
        </div>

        <!-- Text content -->
        <div class="flex-1 flex flex-col justify-between text-center">
            <!-- Title (max 2 lines, fixed height) -->
            <h3 class="font-heading text-2xl mb-2 line-clamp-2 min-h-[3.5rem]">
                {{ event.title }}
            </h3>

            <!-- Subtitle (date + venue, fixed height) -->
            <p class="font-sans text-base text-gray-600 min-h-[1.5rem]">
                {{ event.date }} — {{ event.venue }}
            </p>
        </div>
    </article>
</template>

<script setup lang="ts">
import type { FutureCollectionItem } from '@nuxt/content'

defineProps<{
    event: FutureCollectionItem
}>()
</script>
