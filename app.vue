<template>
<MainHeader></MainHeader>
  <UMain>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UMain>

  <UFooter />
</template>
<script setup lang="ts">
import MainHeader from "~/components/layout/MainHeader.vue";
</script>
