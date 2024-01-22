<script setup lang="ts">
import SocialLink from './SocialLink.vue'

interface ISocialLink {
  url: string
  icon: string
}

const socialLinks: ISocialLink[] = [
  {
    url: 'https://t.me/lammerfalcon',
    icon: 'i-simple-icons-telegram',
  },
  {
    url: 'https://www.linkedin.com/in/rodion-gavrilov',
    icon: 'i-simple-icons-linkedin',
  },
  {
    url: 'https://www.instagram.com/gavrilov_rodion/',
    icon: 'i-simple-icons-instagram',
  },
  {
    url: 'https://github.com/lammerfalcon',
    icon: 'i-simple-icons-github',
  },
]
</script>

<template>
  <div id="contact" class="border border-primary flex p-2 rounded-2xl items-center justify-center gap-2">
    <div>Socials:</div>
    <div class="flex flex-row gap-2 text-3xl md:text-2xl">
      <SocialLink
        v-for="socialLink in socialLinks" :key="socialLink.icon" :url="socialLink.url"
        :icon="socialLink.icon"
      />
    </div>
  </div>
</template>
