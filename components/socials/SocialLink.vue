<script setup lang="ts">
defineProps<{
  url: string
  icon: string
}>()
</script>

<template>
  <NuxtLink
    :to="url"
    target="_blank"
    class="hover:text-primary underline underline-primary flex items-center justify-center"
    external
  >
    <UIcon :name="icon" />
  </NuxtLink>
</template>
