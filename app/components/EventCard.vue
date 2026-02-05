<template>
    <article
        class="bg-white title-box p-4 flex flex-col transition relative"
        :class="[
            isExpired ? 'opacity-60' : '',
        ]"
        :aria-disabled="isExpired ? 'true' : 'false'"
    >
        <!-- Image -->
        <div class="w-full aspect-[16/9] overflow-hidden mb-4 relative">
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
        <div class="flex-1 flex flex-col justify-between text-center">
            <!-- Title (max 2 lines, fixed height) -->
            <NuxtLink
                v-if="!isExpired"
                :to="`/events/${event.slug}`"
                class="font-heading text-2xl mb-2 line-clamp-2 min-h-[3.5rem] underline decoration-inherit decoration-1 underline-offset-4"
            >
                {{ event.title }}
            </NuxtLink>
            <p
                v-else
                class="font-heading text-2xl mb-2 line-clamp-2 min-h-[3.5rem] opacity-70"
                aria-disabled="true"
            >
                {{ event.title }}
            </p>

            <!-- Subtitle (date + venue, fixed height) -->
            <p class="font-sans text-base text-gray-600 min-h-[1.5rem]">
                {{ formattedDate }} - {{ event.venue }}
            </p>
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
</script>
