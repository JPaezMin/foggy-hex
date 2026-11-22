<script setup lang="ts">
const props = defineProps<{ html: string }>()
const sanitizedBiography = computed(() => sanitizeArtistBiography(props.html))
</script>

<template>
    <!-- eslint-disable vue/no-v-html -- This boundary renders only sanitized biography markup. -->
    <div v-html="sanitizedBiography" />
    <!-- eslint-enable vue/no-v-html -->
</template>
