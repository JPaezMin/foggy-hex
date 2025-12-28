<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

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

type ContentAgendaEntry = {
    slug: string
    title: string
    date: string
    venue: string
    space: string
    time?: string
    ticketUrl?: string
    infoUrl?: string
    source?: string
    lineup?: { name: string; note?: string; url?: string }[]
}

type ViewAgendaEntry = {
    id: string
    title: string
    date: Date | null
    location?: string
    description?: string
    url?: string
    allDay?: boolean
    time?: string
}

const CALENDAR_ID =
    'c_1b9e4111ecdffe96f6d9e657a6b061386b05f3e5fc93de1f9a482e5a7b1cb485@group.calendar.google.com'
// Fetch ICS via local API to avoid browser CORS from google.com
const CALENDAR_ICS_URL = '/api/agenda/ics'
const runtimeConfig = useRuntimeConfig()
const CALENDAR_API_KEY =
    runtimeConfig.public?.googleCalendarApiKey ??
    runtimeConfig.public?.GOOGLE_CALENDAR_API_KEY ??
    ''
const CALENDAR_VIEW_URL = `https://calendar.google.com/calendar/embed?src=${encodeURIComponent(
    CALENDAR_ID
)}&mode=AGENDA`

const { data: agendaEvents } = await useAsyncData<ContentAgendaEntry[]>(
    'agenda-events',
    () => queryCollection('agenda').order('date', 'ASC').all()
)

const fetchedAgenda = ref<ViewAgendaEntry[]>([])
const isLoadingCalendar = ref(true)
const calendarError = ref<string | null>(null)

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
        const parts = raw.split('/').map((part) => part.trim())
        if (parts.length === 3) {
            const [dd, mm, yy] = parts
            if (!dd || !mm || !yy) return null
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
    }

    const fallback = new Date(raw)
    if (!Number.isNaN(fallback.getTime())) {
        return fallback
    }
    return null
}

const formatDate = (value?: string | Date | null): string => {
    if (!value) return ''
    const parsed = value instanceof Date ? value : parseEventDate(value)
    if (!parsed) return typeof value === 'string' ? value : ''
    const day = String(parsed.getDate()).padStart(2, '0')
    const month = String(parsed.getMonth() + 1).padStart(2, '0')
    const year = String(parsed.getFullYear())
    return `${day}/${month}/${year}`
}

const formatTime = (
    date?: Date | null,
    allDay?: boolean,
    fallback?: string
) => {
    if (fallback) return fallback
    if (!date) return 'Por confirmar'
    if (allDay) return 'Todo el diaa'
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    return `${hours}:${minutes}`
}

const cleanText = (value?: string | null): string => {
    if (!value) return ''
    return value
        .replace(/\\n/g, ' ')
        .replace(/\\\\/g, '\\')
        .replace(/\\,/g, ', ')
        .replace(/\s+/g, ' ')
        .trim()
}

const formatTitleText = (value?: string | null): string => {
    const cleaned = cleanText(value)
    if (!cleaned) return ''
    return cleaned
        .split(' ')
        .map((word) =>
            word ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() : ''
        )
        .join(' ')
}

const extractTicketUrl = (value?: string | null): string | null => {
    if (!value) return null
    const match = value.match(/https?:\/\/[^\s<>"']+/)
    if (!match?.[0]) return null
    return match[0].replace(/[),.;]+$/, '')
}

const ticketLink = (event: ViewAgendaEntry) =>
    extractTicketUrl(event.description) ?? (event.url || null)

const displayTitle = (event: ViewAgendaEntry) => formatTitleText(event.title)

const unfoldIcs = (ics: string) => ics.replace(/\r?\n[ \t]/g, '')

const parseIcsDate = (
    value: string
): { date: Date | null; allDay: boolean } => {
    if (!value) return { date: null, allDay: false }

    // All-day (YYYYMMDD)
    if (/^\d{8}$/.test(value)) {
        const year = Number.parseInt(value.slice(0, 4), 10)
        const month = Number.parseInt(value.slice(4, 6), 10) - 1
        const day = Number.parseInt(value.slice(6, 8), 10)
        const parsed = new Date(Date.UTC(year, month, day))
        return { date: Number.isNaN(parsed.getTime()) ? null : parsed, allDay: true }
    }

    // DateTime (YYYYMMDDTHHmmss[Z])
    const dateTimeMatch = value.match(
        /^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})(Z)?$/
    )
    if (dateTimeMatch) {
        const [, y, m, d, hh, mm, ss, isUtc] = dateTimeMatch
        const year = Number.parseInt(y, 10)
        const month = Number.parseInt(m, 10) - 1
        const day = Number.parseInt(d, 10)
        const hours = Number.parseInt(hh, 10)
        const minutes = Number.parseInt(mm, 10)
        const seconds = Number.parseInt(ss, 10)
        const parsed = isUtc
            ? new Date(Date.UTC(year, month, day, hours, minutes, seconds))
            : new Date(year, month, day, hours, minutes, seconds)
        return { date: Number.isNaN(parsed.getTime()) ? null : parsed, allDay: false }
    }

    const parsed = new Date(value)
    return { date: Number.isNaN(parsed.getTime()) ? null : parsed, allDay: false }
}

const parseIcs = (icsText: string): ViewAgendaEntry[] => {
    const cleaned = unfoldIcs(icsText)
    const blocks = cleaned.split('BEGIN:VEVENT').slice(1)

    return blocks
        .map((block, index) => {
            const body = block.split('END:VEVENT')[0] ?? ''
            const pick = (field: string) => {
                const match = body.match(new RegExp(`${field}[^:]*:([^\\r\\n]+)`))
                return match?.[1] ?? ''
            }

            const rawStart = pick('DTSTART')
            const { date: parsedDate, allDay } = parseIcsDate(rawStart)
            if (!parsedDate) return null

            const url = pick('URL')
            const summary = pick('SUMMARY') || 'Evento sin título'
            const location = cleanText(pick('LOCATION'))
            const description = cleanText(pick('DESCRIPTION'))
            const uid = pick('UID') || `${summary}-${rawStart}-${index}`

            return {
                id: uid,
                title: summary,
                date: parsedDate,
                location,
                description,
                url: url || CALENDAR_VIEW_URL,
                allDay,
            } satisfies ViewAgendaEntry
        })
        .filter(Boolean) as ViewAgendaEntry[]
}

const parseApiEvents = (items: any[]): ViewAgendaEntry[] =>
    (items || [])
        .map((item: any, index: number) => {
            const rawStart = item.start?.dateTime || item.start?.date
            if (!rawStart) return null

            const allDay = Boolean(item.start?.date && !item.start?.dateTime)
            const date = new Date(rawStart)
            if (Number.isNaN(date.getTime())) return null

            return {
                id: item.id || `api-${index}`,
                title: item.summary || 'Evento sin título',
                date,
                location: cleanText(item.location),
                description: cleanText(item.description || item.organizer?.displayName),
                url: item.htmlLink || item.source?.url || CALENDAR_VIEW_URL,
                allDay,
            } satisfies ViewAgendaEntry
        })
        .filter(Boolean) as ViewAgendaEntry[]

const fetchCalendarAgenda = async () => {
    // Prefer the Calendar API (works on static hosts) when a key is present.
    const sources: (() => Promise<ViewAgendaEntry[]>)[] = []

    if (CALENDAR_API_KEY) {
        sources.push(async () => {
            const params = new URLSearchParams({
                timeMin: '2026-01-01T00:00:00Z',
                timeMax: '2027-01-01T00:00:00Z',
                singleEvents: 'true',
                orderBy: 'startTime',
                showDeleted: 'false',
                maxResults: '2500',
                key: CALENDAR_API_KEY,
            })
            const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
                CALENDAR_ID
            )}/events?${params.toString()}`
            const response = await fetch(url)
            if (!response.ok) {
                throw new Error('No se pudo cargar la agenda via Google Calendar API')
            }
            const data = await response.json()
            return parseApiEvents(data.items)
        })
    }

    // ICS proxy (only available on serverful/Nitro hosts). Skip if 404/static.
    sources.push(async () => {
        const response = await fetch(CALENDAR_ICS_URL, {
            headers: { Accept: 'text/calendar' },
        })
        if (!response.ok) {
            throw new Error('No se pudo cargar la agenda desde el proxy ICS')
        }
        const text = await response.text()
        return parseIcs(text)
    })

    let succeeded = false
    let lastError: unknown = null
    try {
        for (const source of sources) {
            try {
                const events = await source()
                fetchedAgenda.value = events
                succeeded = true
                if (events.length) return
            } catch (sourceError) {
                lastError = sourceError
            }
        }
    } catch (error) {
        lastError = error
    } finally {
        isLoadingCalendar.value = false
    }

    if (succeeded) {
        calendarError.value = null
        return
    }

    if (lastError) {
        console.error('Agenda fetch error', lastError)
        calendarError.value =
            'No pudimos cargar la agenda en vivo. Revisa tu conexión, agrega GOOGLE_CALENDAR_API_KEY o vuelve a intentarlo.'
    } else {
        calendarError.value =
            'No pudimos cargar la agenda en vivo. Intentaremos de nuevo más tarde.'
    }
}

onMounted(() => {
    fetchCalendarAgenda()
})

const fallbackAgenda = computed<ViewAgendaEntry[]>(() =>
    (agendaEvents.value ?? [])
        .map((event) => ({
            id: event.slug,
            title: formatTitleText(event.title),
            date: parseEventDate(event.date),
            location: cleanText(event.venue),
            description: cleanText(event.space),
            url: event.ticketUrl ?? event.infoUrl ?? event.source ?? CALENDAR_VIEW_URL,
            allDay: !event.time,
            time: event.time,
        }))
        .filter((event) => !!event.date)
)

const resolvedAgenda = computed<ViewAgendaEntry[]>(() =>
    fetchedAgenda.value.length ? fetchedAgenda.value : fallbackAgenda.value
)

const upcomingAgenda = computed(() =>
    [...resolvedAgenda.value]
        .filter((event) => {
            if (!event.date) return false
            return event.date >= startOfToday && event.date.getFullYear() === 2026
        })
        .sort((a, b) => {
            if (!a.date && !b.date) {
                return a.title.localeCompare(b.title)
            }
            if (!a.date) return -1
            if (!b.date) return 1
            return a.date.getTime() - b.date.getTime()
        })
)

const archivedAgenda = computed(() =>
    [...resolvedAgenda.value]
        .filter((event) => {
            if (!event.date) return false
            return event.date < startOfToday && event.date.getFullYear() === 2026
        })
        .sort((a, b) => {
            if (!a.date || !b.date) return 0
            return b.date.getTime() - a.date.getTime()
        })
)
</script>

<template>
    <article class="relative container mx-auto px-6 py-16 space-y-16 text-left">
        <header class="max-w-4xl space-y-6">
            <h1
                class="font-heading text-[40px] leading-tight text-accent mb-4 border-l-4 border-text pl-4"
            >
                Nos veremos en...
            </h1>
                        <div class="font-sans text-lg leading-relaxed text-text space-y-4">
                <p>
                    Esta agenda reúne solo los eventos a los cuales nos encantaría ir. No hay pagos ni promos de por medio. 
                    Compartimos eventos a los que iríamos como público, por simple afinidad con la música 
                    y con lo que hacen les artistes, con especial atención -aunque no exclusiva- al tejido de salas y espacios autogestionados de nuestra ciudad.
                </p>
                <p>
                    Si tienes un evento que crees que encaja, puedes escribirnos. Leemos todo, pero
                    esto no es un tablón abierto: lo que aparece aquí responde únicamente a nuestros
                    gustos y a la curiosidad del colectivo.
                </p>
                <p>
                    Sabemos, por experiencia, que muchos eventos pequeños organizados por otros colectivos como el nuestro 
                    muchas veces se pierden en el eter del algoritmo, sin ninguna promoción de medios locales y esta agenda 
                    es solo nuestra forma de intentar amplificar un poco esas fechas dentro de nuestra propia comunidad.
                </p>
            </div>
        </header>

        <section class="space-y-8 w-full" aria-labelledby="agenda-upcoming">
            <div class="flex items-center gap-4">
                <h2
                    id="agenda-upcoming"
                    class="font-heading text-3xl border-b-2 border-text pb-2"
                >
                    Agenda Local
                </h2>
            </div>

            <p
                v-if="calendarError"
                class="font-sans text-center text-base text-text/70 border border-dashed border-text/40 py-4"
            >
                {{ calendarError }}
            </p>

            <p
                v-else-if="isLoadingCalendar"
                class="font-sans text-center text-base text-text/70 border border-dashed border-text/40 py-4"
            >
                Cargando agenda 2026...
            </p>

            <div
                v-else-if="upcomingAgenda.length"
                class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full"
            >
                <article
                    v-for="event in upcomingAgenda"
                    :key="event.id"
                    class="border border-text/30 bg-white p-6 flex flex-col gap-4 shadow-sm"
                >
                    <div class="space-y-2">
                        <p
                            class="font-mono text-xs uppercase tracking-[0.6em] text-text/60"
                        >
                            {{ formatDate(event.date) || 'Fecha por definir' }}
                        </p>
                        <h3 class="font-heading text-2xl leading-snug">
                            {{ displayTitle(event) }}
                        </h3>
                        <p class="font-sans text-sm text-text/80">
                            {{ event.location || 'Lugar por definir' }}
                        </p>
                    </div>

                    <dl class="space-y-3 font-sans text-sm">
                        <div class="flex items-center gap-2">
                            <dt class="font-semibold whitespace-nowrap">Hora:</dt>
                            <dd class="flex-1">
                                {{ formatTime(event.date, event.allDay, event.time) }}
                            </dd>
                        </div>

                        <div class="text-text/80">
                            <template v-if="ticketLink(event)">
                                <a
                                    :href="ticketLink(event)!"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="text-accent underline decoration-inherit underline-offset-2"
                                >
                                    Entradas
                                </a>
                            </template>
                            <template v-else>
                                {{ event.description || 'Mas detalles pronto' }}
                            </template>
                        </div>
                    </dl>
                </article>
            </div>

            <p
                v-else
                class="font-sans text-center text-base text-text/70 border border-dashed border-text/40 py-8"
            >
                Aún no hay eventos confirmados para 2026. Vuelve pronto: el
                calendario se actualiza en cuanto añadimos nuevas fechas.
            </p>
        </section>

        <section
            v-if="!isLoadingCalendar && archivedAgenda.length"
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
                    :key="`archived-${event.id}`"
                    class="border border-text/20 bg-white/70 px-5 py-4"
                >
                    <p class="font-mono text-[11px] uppercase tracking-[0.5em] text-text/60">
                        {{ formatDate(event.date) }}
                    </p>
                    <p class="font-heading text-lg text-text">
                        {{ displayTitle(event) }}
                    </p>
                    <p class="font-sans text-sm text-text/70">
                        {{ event.location || 'Lugar por definir' }}
                    </p>
                </li>
            </ul>
        </section>
    </article>
</template>














