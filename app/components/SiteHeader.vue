<template>
  <header class="w-full bg-transparent px-6 pt-4">
    <div class="container mx-auto grid grid-cols-3 items-center">
      
      <!-- Left: Navigation -->
      <div class="flex justify-start">
        <MainNavigation />
      </div>

      <!-- Center: Logo -->
      <NuxtLink to="/" class="flex justify-center">
        <img
          src="/assets/images/logo.png"
          alt="Foggy Hex BCN"
          class="w-[175px] h-auto object-contain sm:w-[140px]"
        >
      </NuxtLink>

      <!-- Right: Instagram Icon -->
      <div class="flex justify-end">
        <a
          href="https://instagram.com/foggyhexbcn"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center text-text hover:text-link-hover transition-colors"
        >
          <Icon name="mdi:instagram" size="32" />
        </a>
      </div>
    </div>
  </header>
</template>
