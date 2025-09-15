export function useFormattedDate(rawDate?: string): string {
    if (!rawDate) return '' // ✅ return empty string instead of undefined

    let date: Date | null = null

    // Case 1: DD/MM/YY or DD/MM/YYYY
    if (rawDate.includes('/')) {
        const parts = rawDate.split('/').map(Number)

        if (parts.length === 3) {
            const [day, month, year] = parts

            if (day && month && year) {
                const fullYear = year < 100 ? 2000 + year : year
                date = new Date(fullYear, month - 1, day)
            }
        }
    }

    // Case 2: ISO (YYYY-MM-DD)
    if (!date && /^\d{4}-\d{2}-\d{2}$/.test(rawDate)) {
        const parsed = new Date(rawDate)
        if (!isNaN(parsed.getTime())) {
            date = parsed
        }
    }

    // Final safeguard
    if (!date) return rawDate // ✅ if still invalid, just return the raw string

    return new Intl.DateTimeFormat('es-ES', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    })
        .format(date)
        .replace(/^\w/, (c) => c.toUpperCase())
}
