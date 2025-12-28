import { defineEventHandler, setHeader } from 'h3'

const CALENDAR_ID =
    'c_1b9e4111ecdffe96f6d9e657a6b061386b05f3e5fc93de1f9a482e5a7b1cb485@group.calendar.google.com'

export default defineEventHandler(async (event) => {
    const url = `https://www.google.com/calendar/ical/${CALENDAR_ID}/public/full.ics`

    const response = await fetch(url)
    if (!response.ok) {
        throw createError({
            statusCode: 502,
            statusMessage: 'No se pudo obtener la agenda desde Google Calendar.',
        })
    }

    const text = await response.text()
    setHeader(event, 'Content-Type', 'text/calendar; charset=utf-8')
    // Cache for 10 minutes at the edge (Nitro)
    setHeader(event, 'Cache-Control', 's-maxage=600, stale-while-revalidate=600')
    return text
})
