<template>
    <nav aria-label="Navegación principal">
        <ul class="site-nav">
            <li v-for="item in navItems" :key="item.name">
                <NuxtLink v-if="!item.external" :to="item.to" class="site-nav-link">
                    {{ item.name }}
                </NuxtLink>
                <a v-else :href="item.href" target="_blank" rel="noopener noreferrer" class="site-nav-link">
                    {{ item.name }}
                </a>
            </li>
        </ul>
    </nav>
</template>

<script setup>
const navItems = [
    { name: 'Nosotros', to: '/about' },
    { name: 'Espacios', to: '/spaces' },
    {
        name: 'Kiosk Radio',
        href: 'https://kioskradio.com/label/foggy-hex',
        external: true,
    },
    { name: "Foggy Hex DJ's", to: '/es/taki-onqoy' },
    // { name: 'Agenda Local', to: '/agenda' },
]
</script>

<style scoped>
.site-nav {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    column-gap: var(--fh-space-1);
}

.site-nav-link {
    display: inline-flex;
    min-height: 44px;
    align-items: center;
    padding-inline: 0.125rem;
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 0.4em;
}

@media (min-width: 75rem) {
    .site-nav {
        justify-content: flex-start;
    }
}
</style>
