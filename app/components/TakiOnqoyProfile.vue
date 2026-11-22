<script setup lang="ts">
import { takiOnqoyImage, takiOnqoyRoutes } from '~/data/takiOnqoy'

defineProps<{
    language: 'en' | 'es' | 'ca'
    portraitAlt: string
    biographyLabel: string
    linksLabel: string
    languageLabel: string
}>()
</script>

<template>
    <article class="profile-page min-h-screen text-text">
        <div class="container mx-auto px-6">
            <div class="profile-layout">
                <figure class="portrait-frame">
                    <img
                        :src="takiOnqoyImage"
                        width="1080"
                        height="1440"
                        :alt="portraitAlt"
                    >
                </figure>

                <section class="bio-copy" :aria-label="biographyLabel">
                    <h1 class="sr-only">Taki Onqoy</h1>
                    <nav class="bio-links" :aria-label="linksLabel">
                        <a
                            href="https://www.instagram.com/takiononqoy/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >Instagram</a>
                        <a
                            href="https://soundcloud.com/takiononqoy"
                            target="_blank"
                            rel="noopener noreferrer"
                        >SoundCloud</a>
                        <a
                            href="https://www.kioskradio.com/label/foggy-hex"
                            target="_blank"
                            rel="noopener noreferrer"
                        >Kiosk Radio BXL</a>
                        <a
                            href="https://www.paranoiseradio.com/residents/taki-onqoy"
                            target="_blank"
                            rel="noopener noreferrer"
                        >Paranoise Radio SKG</a>
                        <a
                            href="https://dublab.cat/archive/pargueland"
                            target="_blank"
                            rel="noopener noreferrer"
                        >Dublab BCN</a>
                    </nav>
                    <nav
                        class="language-switcher"
                        :aria-label="languageLabel"
                    >
                        <NuxtLink
                            :to="takiOnqoyRoutes.es"
                            hreflang="es"
                            lang="es"
                            :aria-current="language === 'es' ? 'page' : undefined"
                        >ES</NuxtLink>
                        <NuxtLink
                            :to="takiOnqoyRoutes.ca"
                            hreflang="ca"
                            lang="ca"
                            :aria-current="language === 'ca' ? 'page' : undefined"
                        >CAT</NuxtLink>
                        <NuxtLink
                            :to="takiOnqoyRoutes.en"
                            hreflang="en"
                            lang="en"
                            :aria-current="language === 'en' ? 'page' : undefined"
                        >EN</NuxtLink>
                    </nav>
                    <slot />
                </section>
            </div>
        </div>
    </article>
</template>

<style scoped>
.profile-page {
    background:
        linear-gradient(90deg, rgba(29, 29, 29, 0.06) 1px, transparent 1px),
        linear-gradient(180deg, #f4f4f1 0%, #ffffff 52%, #f7f7f4 100%);
    background-size:
        96px 100%,
        auto;
}

.profile-layout {
    display: grid;
    grid-template-columns: minmax(280px, 0.72fr) minmax(0, 1fr);
    gap: 56px;
    align-items: start;
    padding: 64px 0 86px;
}

.portrait-frame {
    position: sticky;
    top: 32px;
    margin: 0;
}

.portrait-frame img {
    width: 100%;
    aspect-ratio: 3 / 4;
    object-fit: cover;
    border: 1px solid currentColor;
    filter: grayscale(100%);
}

.bio-copy {
    max-width: 760px;
    padding-top: 8px;
}

.bio-links {
    display: flex;
    flex-wrap: wrap;
    gap: 8px 16px;
    margin-bottom: 28px;
    font-family: 'Source Code Pro', monospace;
    font-size: 14px;
    line-height: 1.45;
    letter-spacing: 0;
}

.bio-links a {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    overflow-wrap: anywhere;
}

.bio-links a::after {
    content: '↗';
    font-size: 0.86em;
    line-height: 1;
}

.language-switcher {
    display: inline-flex;
    gap: 0;
    margin-bottom: 26px;
    border: 1px solid currentColor;
    font-family: 'Source Code Pro', monospace;
    font-size: 14px;
    line-height: 1;
}

.language-switcher a {
    min-width: 44px;
    padding: 10px 12px;
    border-bottom: 0;
    text-align: center;
    font-weight: 400;
}

.language-switcher a + a {
    border-left: 1px solid currentColor;
}

.language-switcher a[aria-current='page'] {
    background: #1d1d1d;
    color: #fff;
}

.bio-copy :deep(.selected-sets) {
    margin-top: 38px;
    border-top: 1px solid currentColor;
    padding-top: 18px;
}

.bio-copy :deep(.selected-sets h2) {
    margin-bottom: 12px;
    font-family: 'Source Code Pro', monospace;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: 0;
}

.bio-copy :deep(.selected-sets ol) {
    display: grid;
    gap: 10px;
    margin: 0;
    padding-left: 22px;
}

.bio-copy :deep(.selected-sets li) {
    padding-left: 4px;
    font-size: 15px;
    line-height: 1.45;
    letter-spacing: 0;
}

.bio-copy :deep(p) {
    margin-bottom: 24px;
    font-size: 19px;
    line-height: 1.76;
    letter-spacing: 0;
}

.bio-copy :deep(a) {
    border-bottom: 1px solid currentColor;
    font-weight: 500;
    letter-spacing: 0;
}

.bio-copy :deep(a:hover) {
    color: #1e25bb;
}

.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}

@media (max-width: 1024px) {
    .profile-layout {
        grid-template-columns: 1fr;
        gap: 34px;
        padding: 44px 0 68px;
    }

    .portrait-frame {
        position: static;
        max-width: 520px;
    }
}

@media (max-width: 768px) {
    .profile-layout {
        padding: 28px 0 54px;
    }

    .bio-copy :deep(p) {
        font-size: 17px;
        line-height: 1.72;
    }
}
</style>
