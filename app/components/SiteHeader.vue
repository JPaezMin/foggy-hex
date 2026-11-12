<template>
    <header id="page-top" tabindex="-1" class="w-full bg-zinc-100 site-header">
        <div class="container mx-auto site-header-grid">
            <NuxtLink to="/" class="site-logo">
                <img src="/assets/images/logo.svg" alt="Foggy Hex BCN" />
            </NuxtLink>
            <MainNavigation class="site-header-nav" />
            <a
                href="https://instagram.com/foggyhexbcn"
                aria-label="Foggy Hex en Instagram (abre en otra pestaña)"
                target="_blank"
                rel="noopener noreferrer"
                class="site-instagram flex min-w-11 min-h-11 items-center justify-center"
            >
                <Icon aria-hidden="true" name="mdi:instagram" size="32" />
            </a>
        </div>
    </header>
</template>

<style scoped>
.site-header {
    padding: var(--fh-space-2);
}

.site-header-grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
    grid-template-areas: ". logo social" "nav nav nav";
    align-items: center;
    gap: var(--fh-space-1);
}

.site-logo {
    grid-area: logo;
    width: clamp(5.25rem, 3.7rem + 3vw, 8.75rem);
}

.site-header-nav {
    grid-area: nav;
}

.site-instagram {
    grid-area: social;
    justify-self: end;
}

@media (min-width: 75rem) {
    .site-header-grid {
        grid-template-areas: "nav logo social";
    }
}
</style>
