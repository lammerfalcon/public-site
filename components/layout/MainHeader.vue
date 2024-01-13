<script setup>
const links = [
  {
    label: 'About',
    icon: 'i-heroicons-book-open',
    to: '/'
  },

  {
    label: 'Blog',
    icon: 'i-heroicons-book-open',
    to: '/blog'
  },

  {
    label: 'Contact',
    icon: 'i-heroicons-book-open',
    to: '/contact'
  },
]
</script>
<template>
  <UHeader :ui='{wrapper: "border-none"}'>
    <template #logo>
      <div class="flex flex-row gap-2 items-center">

<!--      <UIcon name="i-heroicons-nuxt"></UIcon>-->
      <p>Rodion Gavrilov</p>
      </div>
    </template>
<template #center>
  <UHeaderLinks :links="links" />

</template>
    <template #right>

      <UColorModeToggle />
    </template>
  </UHeader>
</template>
