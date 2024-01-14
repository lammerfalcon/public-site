<script setup lang="ts">
import MainHeader from "~/components/layout/MainHeader.vue";
import MainFooter from "~/components/layout/MainFooter.vue";
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
