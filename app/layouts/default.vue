<template>
    <div id="sections" class="min-h-screen flex flex-col">
        <SiteHeader />

        <main id="main-content" class="flex-grow">
            <slot />
        </main>

        <SiteFooter />
    </div>
</template>
<script setup>
const { $grained } = useNuxtApp()

onMounted(() => {
    $grained('sections', {
        animate: true,
        patternWidth: 100,
        patternHeight: 100,
        grainOpacity: 0.08,
        grainDensity: 1,
        grainWidth: 1,
        grainHeight: 1,
    })
})
</script>
