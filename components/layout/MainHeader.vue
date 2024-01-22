<script setup>
import ColorModeToggle from "~/components/colorMode/ColorModeToggle.vue";
import ColorModeButton from "~/components/colorMode/ColorModeButton.vue";

const links = [
  {
    label: 'About',
    icon: 'i-heroicons-book-open',
    to: '/'

  },
  {
    label: 'Blog(soon)',
    icon: 'i-heroicons-book-open',
    disabled: true,
    to: '/blog',
  },

  {
    label: 'Socials',
    icon: 'i-heroicons-book-open',
    to: '/socials',
  },
]
</script>
<template>
  <header class="bg-background/75 backdrop-blur  -mb-px sticky top-0 z-50">
    <UContainer class="flex items-center justify-between gap-3 h-[60px]">
      <div class="lg:flex-1 flex items-center gap-1.5">
        <NuxtLink aria-label="logo" to="/"
                  class="flex-shrink-0 font-bold text-xl text-gray-900 dark:text-white flex items-center gap-1.5">
          <UAvatar
              src="https://avatars.githubusercontent.com/u/47675540?v=4"
              alt="Rodion Gavrilov"
          />
          <span class="hidden lg:flex">

          Rodion Gavrilov
          </span>
        </NuxtLink>
      </div>
      <div>
        <ul class="flex items-center gap-x-8">
          <li v-for="(link, index) in links" :class="link.disabled ? 'cursor-not-allowed':''" :key="index">
            <NuxtLink rel="''" active-class="text-primary" inactive-class="hover:text-primary "
                      class="text-sm/6 font-semibold flex items-center gap-1 text-gray-500"
                      :class="link.disabled ? 'pointer-events-none text-gray-400': ''"
                      :disabled="link.disabled" :to="{
                        path: link.to,
                      }">
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="flex items-center justify-end lg:flex-1 gap-1.5">
        <!--        <ColorModeToggle></ColorModeToggle>-->
        <ColorModeButton></ColorModeButton>
      </div>
    </UContainer>
  </header>
</template>
