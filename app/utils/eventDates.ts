// Event dates are calendar dates. UTC keeps their display stable during SSR and hydration.
export function parseEventCalendarDate(value?: string | null): Date | undefined {
    if (!value) return undefined
    const raw = value.trim()
    const iso = /^(\d{4})-(\d{2})-(\d{2})(?:T.*)?$/.exec(raw)
    const european = /^(\d{1,2})\/(\d{1,2})\/(\d{2}|\d{4})$/.exec(raw)
    if (!iso && !european) return undefined

    const yearText = iso?.[1] ?? european![3]!
    const year = Number(yearText.length === 2 ? '20' + yearText : yearText)
    const month = Number(iso?.[2] ?? european![2])
    const day = Number(iso?.[3] ?? european![1])
    const date = new Date(0)
    date.setUTCFullYear(year, month - 1, day)
    date.setUTCHours(0, 0, 0, 0)

    if (
        date.getUTCFullYear() !== year ||
        date.getUTCMonth() !== month - 1 ||
        date.getUTCDate() !== day
    ) return undefined

    return date
}

/** Full Spanish date for concert details, such as Sábado, 30 de enero de 2027. */
export function formatEventDateLong(value?: string | null): string {
    if (!value) return ''
    const date = parseEventCalendarDate(value)
    if (!date) return value.trim()

    const formatted = new Intl.DateTimeFormat('es-ES', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        timeZone: 'UTC',
    }).format(date)

    return formatted.charAt(0).toUpperCase() + formatted.slice(1)
}

/** Compact calendar date for event listings and archive cards, such as 30/01/2027. */
export function formatEventDateShort(value?: string | null): string {
    if (!value) return ''
    const date = parseEventCalendarDate(value)
    if (!date) return value.trim()

    return new Intl.DateTimeFormat('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        timeZone: 'UTC',
    }).format(date)
}

// Search engines infer the timezone from the event's physical location.
// Unknown times remain date-only so metadata does not invent a start time.
export function formatEventStartDate(value: string, time?: string): string | undefined {
    const date = parseEventCalendarDate(value)
    if (!date) return undefined

    const isoDate = date.toISOString().slice(0, 10)
    const localTime = time?.trim()
    return localTime && /^(?:[01]\d|2[0-3]):[0-5]\d$/.test(localTime)
        ? `${isoDate}T${localTime}:00`
        : isoDate
}
