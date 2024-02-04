<script setup lang="ts">
const articles = await queryContent('blog').find()
</script>

<template>
  <UContainer>
    <div class="flex gap-4">
      <div v-for="item in articles" :key="item._id">
        <NuxtLink :to="item._path">
          {{ item._path }}
        </NuxtLink>
      </div>
    </div>
  </UContainer>
</template>

<style scoped>

</style>
