<script setup lang="ts">
import MainHeader from "~/components/layout/MainHeader.vue";
import MainFooter from "~/components/layout/MainFooter.vue";

useServerSeoMeta({
  title: 'Vue | Nuxt developer',
  ogTitle: 'Vue | Nuxt developer',
  description: 'As a developer specializing in Vue and Nuxt, I focus on creating efficient, scalable web solutions that prioritize user experience.',
  ogDescription: 'As a developer specializing in Vue and Nuxt, I focus on creating efficient, scalable web solutions that prioritize user experience.',
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
