<script setup lang="ts">
import { computed } from 'vue'

useSeoMeta({
    title: 'Nos verémos en... | Foggy Hex',
    description:
        'Agenda viva de conciertos y citas afines en los espacios donde Foggy Hex colabora habitualmente.',
    ogTitle: 'Nos verémos en... | Foggy Hex',
    ogDescription:
        'Agenda viva de conciertos y citas afines en los espacios donde Foggy Hex colabora habitualmente.',
    ogImage: 'https://www.foggyhexbcn.com/about-og.jpg',
    ogUrl: 'https://www.foggyhexbcn.com/agenda',
})

type AgendaLineupEntry = {
    name: string
    note?: string
    url?: string
}

type RawAgendaEntry = {
    slug: string
    title: string
    date: string
    venue: string
    space: string
    time?: string
    lineup: AgendaLineupEntry[]
    ticketUrl?: string
    infoUrl?: string
    source?: string
}

type AgendaEntry = RawAgendaEntry & {
    parsedDate: Date | null
}

const { data: agendaEvents } = await useAsyncData<RawAgendaEntry[]>(
    'agenda-events',
    () => queryCollection('agenda').order('date', 'ASC').all()
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
                Number.isInteger(day)
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
            Number.isInteger(day)
        ) {
            const parsed = new Date(year, month - 1, day)
            if (!Number.isNaN(parsed.getTime())) {
                return parsed
            }
        }
    }

    const fallback = new Date(raw)
    if (!Number.isNaN(fallback.getTime())) {
        return fallback
    }
    return null
}

const formatDate = (dateString?: string | null): string => {
    if (!dateString) return ''
    const parsed = parseEventDate(dateString)
    if (!parsed) return dateString
    const day = String(parsed.getDate()).padStart(2, '0')
    const month = String(parsed.getMonth() + 1).padStart(2, '0')
    const year = String(parsed.getFullYear())
    return `${day}/${month}/${year}`
}

const normalizeAgenda = computed<AgendaEntry[]>(() =>
    (agendaEvents.value ?? []).map((event) => ({
        ...event,
        parsedDate: parseEventDate(event.date),
    }))
)

const upcomingAgenda = computed(() =>
    [...normalizeAgenda.value]
        .filter((event) => {
            if (!event.parsedDate) return true
            return event.parsedDate >= startOfToday
        })
        .sort((a, b) => {
            if (!a.parsedDate && !b.parsedDate) {
                return a.title.localeCompare(b.title)
            }
            if (!a.parsedDate) return -1
            if (!b.parsedDate) return 1
            return a.parsedDate.getTime() - b.parsedDate.getTime()
        })
)

const archivedAgenda = computed(() =>
    [...normalizeAgenda.value]
        .filter((event) => event.parsedDate && event.parsedDate < startOfToday)
        .sort((a, b) => {
            if (!a.parsedDate || !b.parsedDate) return 0
            return b.parsedDate.getTime() - a.parsedDate.getTime()
        })
)

const spaces = [
    'Casa Montjuic',
    'El Teatro de La Rubia / Dublab Barcelona',
    'El Pumarejo Refugio Cultural',
    'Hangar',
    'IF Publications Studio',
    'La Negra Factory',
    'NIU Espacio Artístico',
]

const primaryLink = (event: RawAgendaEntry) => event.ticketUrl ?? event.infoUrl
const primaryLinkLabel = (event: RawAgendaEntry) =>
    event.ticketUrl ? 'Entradas' : 'Más información'
</script>

<template>
    <article class="container mx-auto px-6 py-16 space-y-16">
        <header class="text-center space-y-6">
            <div class="inline-flex flex-col gap-2 items-center">
                <h1
                    class="font-heading text-[46px] leading-tight text-accent title-box px-6 py-3 border border-text inline-block"
                >
                    Nos verémos en...
                </h1>
            </div>
            <p class="font-sans text-lg max-w-3xl mx-auto text-text">
                Una lista en constante actualización con conciertos,
                escuchas y encuentros que resuenan con la sensibilidad de Foggy
                Hex. Sumamos paradas afines siempre que aparezcan.
            </p>
        </header>

        <section class="space-y-8" aria-labelledby="agenda-upcoming">
            <div class="flex items-center gap-4">
                <h2
                    id="agenda-upcoming"
                    class="font-heading text-3xl border-b-2 border-text pb-2"
                >
                    Próximas fechas
                </h2>
                <span class="font-mono text-xs uppercase tracking-[0.4em] text-text/60"
                    >En curso</span
                >
            </div>

            <div
                v-if="upcomingAgenda.length"
                class="grid gap-8 md:grid-cols-2"
            >
                <article
                    v-for="event in upcomingAgenda"
                    :key="event.slug"
                    class="border border-text/30 bg-white p-6 flex flex-col gap-4 shadow-sm"
                >
                    <div class="space-y-2">
                        <p
                            class="font-mono text-xs uppercase tracking-[0.6em] text-text/60"
                        >
                            {{ formatDate(event.date) }}
                        </p>
                        <h3 class="font-heading text-2xl leading-snug">
                            {{ event.title }}
                        </h3>
                        <p class="font-sans text-sm text-text/80">
                            {{ event.venue }}
                        </p>
                    </div>

                    <dl class="space-y-3 font-sans text-sm">
                        <div class="flex gap-3">
                            <dt class="font-semibold w-16">Hora</dt>
                            <dd class="flex-1">
                                {{ event.time || 'Por confirmar' }}
                            </dd>
                        </div>

                        <div class="flex gap-3">
                            <dt class="font-semibold w-16">Line-up</dt>
                            <dd class="flex-1 space-y-1">
                                <p
                                    v-if="!event.lineup?.length"
                                    class="text-text/70"
                                >
                                    Por anunciar
                                </p>
                                <template v-else>
                                    <p
                                        v-for="artist in event.lineup"
                                        :key="artist.name"
                                        class="leading-relaxed"
                                    >
                                        <span class="font-medium">{{
                                            artist.name
                                        }}</span>
                                        <span
                                            v-if="artist.note"
                                            class="text-text/70"
                                        >
                                            — {{ artist.note }}
                                        </span>
                                        <a
                                            v-if="artist.url"
                                            :href="artist.url"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            class="ml-2 text-accent underline decoration-inherit decoration-1 underline-offset-2"
                                        >
                                            escuchar
                                        </a>
                                    </p>
                                </template>
                            </dd>
                        </div>
                    </dl>

                    <div class="flex flex-wrap gap-4 items-center">
                        <a
                            v-if="primaryLink(event)"
                            :href="primaryLink(event)!"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="inline-flex items-center justify-center px-4 py-2 border border-text text-text font-sans uppercase tracking-[0.4em] text-xs hover:bg-text hover:text-background transition"
                        >
                            {{ primaryLinkLabel(event) }}
                        </a>
                        <a
                            v-if="event.infoUrl && event.ticketUrl"
                            :href="event.infoUrl"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="text-sm underline underline-offset-2 decoration-inherit text-text/70 hover:text-text"
                        >
                            Más detalles
                        </a>
                        <a
                            v-else-if="event.source && event.source !== primaryLink(event)"
                            :href="event.source"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="text-sm underline underline-offset-2 decoration-inherit text-text/70 hover:text-text"
                        >
                            Fuente
                        </a>
                    </div>
                </article>
            </div>

            <p
                v-else
                class="font-sans text-center text-base text-text/70 border border-dashed border-text/40 py-8"
            >
                Aún no hay eventos confirmados para los próximos días. Vuelve
                pronto: actualizamos tan pronto como cada espacio publica su
                programación.
            </p>
        </section>

        <section
            v-if="archivedAgenda.length"
            class="space-y-6"
            aria-labelledby="agenda-archived"
        >
            <div class="flex items-center gap-4">
                <h2
                    id="agenda-archived"
                    class="font-heading text-3xl border-b-2 border-text pb-2"
                >
                    Registro reciente
                </h2>
                <span class="font-mono text-xs uppercase tracking-[0.4em] text-text/60"
                    >Archivo</span
                >
            </div>

            <ul class="grid gap-4 md:grid-cols-2">
                <li
                    v-for="event in archivedAgenda"
                    :key="`archived-${event.slug}`"
                    class="border border-text/20 bg-white/70 px-5 py-4"
                >
                    <p class="font-mono text-[11px] uppercase tracking-[0.5em] text-text/60">
                        {{ formatDate(event.date) }}
                    </p>
                    <p class="font-heading text-lg text-text">
                        {{ event.title }}
                    </p>
                    <p class="font-sans text-sm text-text/70">
                        {{ event.venue }}
                    </p>
                </li>
            </ul>
        </section>
    </article>
</template>
