<script setup lang="ts">
import MainHeader from '~/components/layout/MainHeader.vue'
import MainFooter from '~/components/layout/MainFooter.vue'

useServerSeoMeta({
  title: 'Rodion Gavrilov',
  ogTitle: 'Rodion Gavrilov',
  description: 'Creating efficient, scalable web solutions that prioritize user experience',
  ogDescription: 'Creating efficient, scalable web solutions that prioritize user experience',
  twitterCard: 'summary_large_image',
})
useHead({
  htmlAttrs: {
    lang: 'en',
  },
})
useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
  ],
})
</script>

<template>
  <NuxtLoadingIndicator />

  <MainHeader />
  <div class="min-h-[calc(100vh-60px)]">
    <NuxtPage />
  </div>
  <MainFooter>
    <template #left>
      Copyright © {{ new Date().getFullYear() }}
    </template>
    <template #right>
      <p class="text-gray-500">
        Build with Nuxt 3
      </p>
    </template>
  </MainFooter>
  <UNotifications />
</template>
