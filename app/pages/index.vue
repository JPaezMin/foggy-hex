<script setup lang="ts">
import type { FutureCollectionItem } from '@nuxt/content'

type FutureGridEvent = FutureCollectionItem & {
    isExpired: boolean
    sortTimestamp: number
}

const { data: futureEvents } = await useAsyncData('future-events', () =>
    queryCollection('future').order('date', 'ASC').all()
)

const { data: pastEvents } = await useAsyncData('past-events', () =>
    queryCollection('past').order('date', 'DESC').all()
)

const today = new Date()
const startOfToday = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
)

const parseEventDate = (dateString?: string | null): Date | null => {
    if (!dateString) return null
    const raw = dateString.trim()
    if (!raw) return null

    if (/^\d{4}-\d{2}-\d{2}/.test(raw)) {
        const iso = raw.split('T')[0] ?? ''
        const parts = iso.split('-').map((part) => part.trim())
        if (parts.length === 3) {
            const [y, m, d] = parts
            const year = Number.parseInt(y, 10)
            const month = Number.parseInt(m, 10)
            const day = Number.parseInt(d, 10)
            if (
                Number.isInteger(year) &&
                Number.isInteger(month) &&
                Number.isInteger(day) &&
                year >= 1900 &&
                year <= 3000 &&
                month >= 1 &&
                month <= 12 &&
                day >= 1 &&
                day <= 31
            ) {
                const parsed = new Date(year, month - 1, day)
                if (!Number.isNaN(parsed.getTime())) {
                    return parsed
                }
            }
        }
    }

    if (/^\d{1,2}\/\d{1,2}\/\d{2,4}$/.test(raw)) {
        const [dd, mm, yy] = raw.split('/').map((part) => part.trim())
        const day = Number.parseInt(dd, 10)
        const month = Number.parseInt(mm, 10)
        const year = Number.parseInt(yy.length === 2 ? `20${yy}` : yy, 10)
        if (
            Number.isInteger(year) &&
            Number.isInteger(month) &&
            Number.isInteger(day) &&
            year >= 1900 &&
            year <= 3000 &&
            month >= 1 &&
            month <= 12 &&
            day >= 1 &&
            day <= 31
        ) {
            const parsed = new Date(year, month - 1, day)
            if (!Number.isNaN(parsed.getTime())) {
                return parsed
            }
        }
    }

    const fallback = new Date(raw)
    if (Number.isNaN(fallback.getTime())) {
        return null
    }
    const fallbackYear = fallback.getFullYear()
    if (fallbackYear < 1900 || fallbackYear > 3000) {
        return null
    }
    return fallback
}

const futureGridEvents = computed<FutureGridEvent[]>(() => {
    const source = futureEvents.value ?? []
    const mapped = source.map((event) => {
        const eventDate = parseEventDate(event.date)
        const timestamp = eventDate?.getTime() ?? Number.POSITIVE_INFINITY
        const isExpired = Boolean(eventDate && eventDate < startOfToday)
        return {
            ...event,
            isExpired,
            sortTimestamp: timestamp,
        }
    })

    const upcoming = mapped
        .filter((event) => !event.isExpired)
        .sort((a, b) => {
            if (a.sortTimestamp !== b.sortTimestamp) {
                return a.sortTimestamp - b.sortTimestamp
            }
            return a.title.localeCompare(b.title)
        })

    const expired = mapped
        .filter((event) => event.isExpired)
        .sort((a, b) => {
            if (a.sortTimestamp !== b.sortTimestamp) {
                return b.sortTimestamp - a.sortTimestamp
            }
            return a.title.localeCompare(b.title)
        })

    return [...upcoming, ...expired]
})

const futureGridTop = computed(() => futureGridEvents.value.slice(0, 3))

const archivedEvents = computed(() =>
    (pastEvents.value ?? []).filter((event) => {
        const eventDate = parseEventDate(event.date)
        return !eventDate || eventDate < startOfToday
    })
)

const formatDate = (dateString?: string | null): string => {
    if (!dateString) return ''

    const raw = dateString.trim()

    // Handle ISO (YYYY-MM-DD or YYYY-MM-DDTHH:mm:ssZ)
    if (/^\d{4}-\d{2}-\d{2}/.test(raw)) {
        const iso = raw.split('T')[0] ?? ''
        const parts = iso.split('-').map((part) => part.trim())
        if (parts.length === 3) {
            const [y, m, d] = parts
            const formattedDay = d.padStart(2, '0')
            const formattedMonth = m.padStart(2, '0')
            return formattedDay + '/' + formattedMonth + '/' + y
        }
    }

    // Handle DD/MM/YYYY or DD/MM/YY
    const parts = raw.split('/').map((part) => part.trim())
    if (parts.length === 3) {
        const [dd, mm, yy] = parts
        if (dd && mm && yy) {
            const fullYear = yy.length === 2 ? '20' + yy : yy
            const formattedDay = dd.padStart(2, '0')
            const formattedMonth = mm.padStart(2, '0')
            return formattedDay + '/' + formattedMonth + '/' + fullYear
        }
    }

    // Fallback: return as-is
    return raw
}
</script>

<template>
    <div class="container mx-auto min-h-screen text-text space-y-6 py-10">
        <!-- About Section -->
        <section id="about" class="container py-12">
            <div
                class="grid grid-cols-1 lg:grid-cols-3 gap-16 items-stretch max-w-6xl mx-auto"
            >
                <!-- Text (2/3 of the width on large screens) -->
                <div
                    class="lg:col-span-2 flex items-center border-l border-text pl-6"
                >
                    <p class="font-heading text-2xl lg:text-4xl leading-snug">
                        Somos un colectivo con base de operaciones en Barcelona.
                        Nacemos de la necesidad de celebrar espacios y escenas
                        que residen en el margen de nuestra ciudad y a la vez
                        acercar a ella proyectos internacionales que nos
                        inspiran.
                    </p>
                </div>
                <!-- Image (1/3 width, smaller accent) -->
                <div
                    class="relative hidden lg:flex justify-center items-center"
                >
                    <img
                        src="/images/fh-deco.svg"
                        alt="Foggy Hex Deco"
                        class="h-full max-h-[360px] w-auto object-contain opacity-90"
                    />
                </div>
            </div>
        </section>

        <!-- Current Event (featured) -->
        <section
            id="current-event"
            class="container mx-auto flex flex-col items-center justify-center px-6 py-6 hidden"
        >
            <h2
                class="text-[32px] bg-sky-50 font-heading mb-8 text-center title-box px-6 py-2 border-1 border-text"
            >
                Próximamente
            </h2>
            <NuxtLink to="/events/hekura-jordi-santanach">
                <img
                    src="/assets/images/current-event-poster.jpg"
                    alt="Cartel de nuestro próximo evento"
                    class="w-[478px] h-auto object-contain mt-8"
                />
            </NuxtLink>
        </section>

        <!-- Future Events -->
        <section id="future-events" class="container mx-auto px-6 py-6">
            <h2
                class="text-[32px] bg-sky-50 font-heading mb-8 text-center title-box px-6 py-2 border-1 border-text"
            >
                Próximos Eventos
            </h2>

            <div
                v-if="futureGridTop.length"
                :class="[
                    'grid gap-8',
                    futureGridTop.length === 1
                        ? 'grid-cols-1'
                        : futureGridTop.length === 2
                          ? 'grid-cols-1 md:grid-cols-2'
                          : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
                ]"
            >
                <EventCard
                    v-for="event in futureGridTop"
                    :key="event.slug"
                    :event="event"
                    :is-expired="event.isExpired"
                />
            </div>

            <p v-else class="text-center text-lg font-sans text-gray-600">
                No hay próximos eventos por ahora. ¡Vuelve pronto!
            </p>
        </section>

        <!-- Newsletter Subscription -->
        <section id="newsletter" class="container mx-auto px-6 py-6">
            <div
                class="border-t border border-text mx-auto py-8 px-8 lg:px-16 lg:py-16"
            >
                <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                    <!-- Text column -->
                    <div class="text-left">
                        <h2 class="font-heading text-3xl mb-4">
                            Suscríbete a nuestra newsletter.
                        </h2>
                        <p class="text-lg text-gray-700 max-w-md">
                            Únete a nuestra lista de correo para enterarte
                            primero de los próximos conciertos, novedades y
                            noticias de Foggy Hex.
                        </p>
                    </div>

                    <!-- Form column -->
                    <div class="w-full">
                        <form
                            action="https://foggyhexbcn.us13.list-manage.com/subscribe/post?u=3bf61944f37a5e219e4fdccda&amp;id=c32ef2e9a5&amp;f_id=001b02e9f0"
                            method="post"
                            target="_blank"
                            novalidate
                            class="flex flex-col sm:flex-row w-full md:max-w-md"
                        >
                            <input
                                type="email"
                                name="EMAIL"
                                placeholder="Tu correo electrónico"
                                required
                                class="flex-grow px-4 py-3 border border-gray-400 sm:rounded-l sm:rounded-r-none rounded focus:outline-none focus:ring-2 focus:ring-sky-400"
                            />
                            <button
                                type="submit"
                                class="bg-black text-white px-6 py-3 sm:rounded-r sm:rounded-l-none rounded font-medium hover:bg-gray-800 transition mt-2 sm:mt-0"
                            >
                                Suscribirse
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        <!-- Past Events -->
        <section id="past-events" class="container mx-auto px-6 py-12">
            <h2
                class="text-4xl bg-sky-50 font-heading mb-8 text-center title-box px-6 py-2 border-1 border-text"
            >
                Eventos Pasados
            </h2>

            <div
                v-if="archivedEvents && archivedEvents.length"
                class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                <div
                    v-for="event in archivedEvents"
                    :key="event.title"
                    class="flex flex-col"
                >
                    <div class="w-full aspect-[16/9] overflow-hidden rounded">
                        <img
                            :src="`${event.image}`"
                            :alt="event.title"
                            class="w-full h-full object-cover grayscale transition"
                        />
                    </div>
                    <h3 class="font-heading text-lg mt-2 text-center truncate">
                        {{ event.title }}
                    </h3>
                    <p class="font-sans text-sm text-center text-gray-600">
                        {{ formatDate(event.date) }} — {{ event.venue }}
                    </p>
                </div>
            </div>

            <p v-else class="text-center text-lg font-sans text-gray-600">
                No hay eventos pasados registrados.
            </p>
        </section>
    </div>
</template>

<style scoped>
.past-event-card img {
    filter: grayscale(100%);
    transition: filter 0.3s ease;
}
</style>
