<script setup lang="ts">

</script>

<template>
  <div id="contact" class="border border-primary flex p-2 rounded-2xl items-center justify-center  gap-2">
    <div>Socials:</div>
    <div class="flex flex-row gap-2 text-3xl md:text-2xl">
      <NuxtLink
        class="hover:text-primary underline underline-primary flex  items-center justify-center"
        external
        to="https://www.instagram.com/gavrilov_rodion/"
      >
        <UIcon name="i-simple-icons-telegram" />
      </NuxtLink>
      <NuxtLink
        class="hover:text-primary underline underline-primary flex  items-center justify-center"
        external
        to="https://www.linkedin.com/in/rodion-gavrilov"
      >
        <UIcon name="i-simple-icons-linkedin" />
      </NuxtLink>
      <NuxtLink
        class="hover:text-primary underline underline-primary flex  items-center justify-center"
        external
        to="https://t.me/lammerfalcon"
      >
        <UIcon name="i-simple-icons-instagram" />
      </NuxtLink>
      <NuxtLink
        class="hover:text-primary underline underline-primary flex  items-center justify-center"
        external
        to="https://github.com/lammerfalcon"
      >
        <UIcon name="i-simple-icons-github" />
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>

</style>
