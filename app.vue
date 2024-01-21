<script setup lang="ts">
import MainHeader from "~/components/layout/MainHeader.vue";
import MainFooter from "~/components/layout/MainFooter.vue";

defineOgImageScreenshot()

useServerSeoMeta({
  title: 'Rodion Gavrilov',
  ogTitle: 'Rodion Gavrilov',
  description: 'Creating efficient, scalable web solutions that prioritize user experience',
  ogDescription: 'Creating efficient, scalable web solutions that prioritize user experience',
  ogImage: 'https://avatars.githubusercontent.com/u/47675540?v=4',
  twitterCard: 'summary_large_image',
})
</script>
<template>
  <MainHeader/>
  <NuxtPage/>
  <MainFooter>
    <template #left>
      Copyright © {{ new Date().getFullYear() }}
    </template>
    <template #right>

      <UButton icon="i-simple-icons-github" color="gray" variant="ghost" to="https://github.com/lammerfalcon"
               target="_blank"/>
    </template>
  </MainFooter>
</template>
