<template>
    <footer
        class="w-full bg-zinc-100 py-[var(--fh-space-2)] px-[var(--fh-space-2)] border-t border-current text-center"
    >
        <a
            v-show="showBackToTop"
            href="#page-top"
            aria-label="Volver arriba"
            class="back-to-top"
            @click="backToTop"
        >
            <Icon aria-hidden="true" name="mdi:arrow-up" size="24" />
        </a>
        <a
            href="mailto:hola@foggyhexbcn.com"
            class="font-heading text-[clamp(1.125rem,0.9rem+1vw,2rem)] text-text hover:text-accent transition-colors break-words"
        >
            hola@foggyhexbcn.com
        </a>
    </footer>
</template>

<script setup lang="ts">
const showBackToTop = ref(false)

function updateBackToTop() {
    showBackToTop.value = window.scrollY >= window.innerHeight
}

onMounted(() => {
    updateBackToTop()
    window.addEventListener('scroll', updateBackToTop, { passive: true })
    window.addEventListener('resize', updateBackToTop)
})

onUnmounted(() => {
    window.removeEventListener('scroll', updateBackToTop)
    window.removeEventListener('resize', updateBackToTop)
})

function backToTop(event: MouseEvent) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return

    const top = document.getElementById('page-top')
    if (!top) return

    event.preventDefault()
    top.focus({ preventScroll: true })
    window.scrollTo({
        top: 0,
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
    })
}
</script>

<style scoped>
.back-to-top {
    position: fixed;
    z-index: 110;
    inset-inline-end: max(var(--fh-space-2), env(safe-area-inset-right));
    inset-block-end: max(var(--fh-space-2), env(safe-area-inset-bottom));
    display: grid;
    place-items: center;
    width: 44px;
    height: 44px;
    border: 2px solid currentColor;
    background: #f4f4f5;
}

.back-to-top:hover {
    background: #181818;
    border-color: #181818;
    color: #fff;
}
</style>
