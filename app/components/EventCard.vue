<template>
    <article class="bg-white title-box p-4 flex flex-col">
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
            <NuxtLink
                :to="`/events/${event.slug}`"
                class="font-heading text-2xl mb-2 line-clamp-2 min-h-[3.5rem] underline decoration-inherit decoration-1 underline-offset-4"
            >
                {{ event.title }}
            </NuxtLink>

            <!-- Subtitle (date + venue, fixed height) -->
            <p class="font-sans text-base text-gray-600 min-h-[1.5rem]">
                {{ formattedDate }} — {{ event.venue }}
            </p>
        </div>
    </article>
</template>

<script setup lang="ts">
import type { FutureCollectionItem } from '@nuxt/content'

const props = defineProps<{
    event: FutureCollectionItem
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
</script>
