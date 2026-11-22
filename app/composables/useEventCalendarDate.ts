const EVENT_TIME_ZONE = 'Europe/Madrid'
const REFRESH_INTERVAL_MS = 60_000

function getCurrentEventCalendarDate(): string {
    return new Intl.DateTimeFormat('en-CA', {
        timeZone: EVENT_TIME_ZONE,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    }).format(new Date())
}

// Supplies the current Madrid calendar date (YYYY-MM-DD) for event classification.
// Preserves the SSR date through hydration, then refreshes while the caller is mounted.
export function useEventCalendarDate() {
    const calendarDate = useState('event-calendar-date', getCurrentEventCalendarDate)
    let refreshTimer: ReturnType<typeof setInterval> | undefined

    function refreshCalendarDate() {
        calendarDate.value = getCurrentEventCalendarDate()
    }

    onMounted(() => {
        refreshCalendarDate()
        refreshTimer = setInterval(refreshCalendarDate, REFRESH_INTERVAL_MS)
        window.addEventListener('focus', refreshCalendarDate)
    })

    onUnmounted(() => {
        clearInterval(refreshTimer)
        window.removeEventListener('focus', refreshCalendarDate)
    })

    return computed(() => calendarDate.value)
}
