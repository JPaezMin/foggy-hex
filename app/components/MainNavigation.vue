<template>
    <nav class="relative px-4 py-6 font-sans text-text">
        <div class="flex justify-between items-center">
            <!-- Logo Placeholder (handled separately) -->
            <slot name="logo" />

            <!-- Desktop Nav -->
            <ul class="hidden 2xl:flex gap-8 items-end flex-nowrap">
                <li v-for="item in navItems" :key="item.name">
                    <!-- Internal link -->
                    <NuxtLink
                        v-if="!item.external"
                        :to="item.to"
                        class="text-[22px] leading-normal border-b-2 border-current pb-2 whitespace-nowrap"
                    >
                        {{ item.name }}
                    </NuxtLink>

                    <!-- External link -->
                    <a
                        v-else
                        :href="item.href"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-[22px] leading-normal border-b-2 border-current pb-2 whitespace-nowrap"
                    >
                        {{ item.name }}
                    </a>
                </li>
            </ul>

            <!-- Burger Menu -->
            <button
                class="2xl:hidden z-50"
                aria-label="Toggle menu"
                @click="menuOpen = !menuOpen"
            >
                <svg
                    class="w-8 h-8 text-text"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        :d="
                            menuOpen
                                ? 'M6 18L18 6M6 6l12 12'
                                : 'M4 6h16M4 12h16M4 18h16'
                        "
                    />
                </svg>
            </button>
        </div>

        <!-- Mobile Nav -->
        <transition name="fade">
            <ul
                v-if="menuOpen"
                class="absolute py-6 px-6 bg-stone-950 flex flex-col gap-6 mt-4 2xl:hidden text-[24px] leading-normal font-sans"
            >
                <li
                    v-for="item in navItems"
                    :key="item.name"
                    class="text-white"
                >
                    <!-- Internal link -->
                    <NuxtLink
                        v-if="!item.external"
                        :to="item.to"
                        class="block border-b-2 border-current pb-4 whitespace-nowrap"
                        @click="menuOpen = false"
                    >
                        {{ item.name }}
                    </NuxtLink>

                    <!-- External link -->
                    <a
                        v-else
                        :href="item.href"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="block border-b-2 border-current pb-4 whitespace-nowrap"
                        @click="menuOpen = false"
                    >
                        {{ item.name }}
                    </a>
                </li>
            </ul>
        </transition>
    </nav>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

const navItems = [
    { name: 'Nosotros', to: '/about' },
    { name: 'Espacios', to: '/spaces' },
    {
        name: 'Kiosk Radio',
        href: 'https://kioskradio.com/label/foggy-hex',
        external: true,
    },
    // { name: 'Agenda Local', to: '/agenda' },
    // { name: 'Foggy Hex DJs', to: '/dj' },
]
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: all 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}
</style>
