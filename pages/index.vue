<template>
  <UContainer>

    <LandingSection
        icon="i-heroicons-rocket-launch"
        title="A Front-End Developer's Journey"
        description="Welcome to my world of front-end development. As a developer specializing in Vue and Nuxt, I focus on creating efficient, scalable web solutions that prioritize user experience."/>
    <LandingSection
        title="Elevating User Experiences Through Modern Frontend Wizardry"
        description="As a forward-thinking frontend developer, I embrace cutting-edge technologies to craft engaging and intuitive user experiences. My approach integrates innovation with best practices, ensuring high-quality, responsive, and accessible web applications. This dedication not only keeps me at the vanguard of technological advancements but also significantly enhances user satisfaction and interaction."
        align="left"
    >
      <TransitionGroup tag="div" name="fade" class="grid-cols-3 grid place-items-center gap-y-6">
        <div v-for="item in shuffledIcons" class="" :key="item">

          <UTooltip>
            <template #text>
              <span class="flex items-center gap-1">{{ item.title }}
                <UIcon
                    class="text-green-400"
                    name="i-formkit-linkexternal"></UIcon>
              </span>
            </template>
            <NuxtLink external :to="item.link">
              <Icon :name="item.name" class="text-5xl"/>
            </NuxtLink>
          </UTooltip>
        </div>
      </TransitionGroup>
    </LandingSection>
    <LandingGrid>

      <LandingCard class="col-span-6 row-span-2" icon="i-heroicons-swatch"
                   description="Leading frontend team — Creating SaaS apps — Affiliate marketing software — CRM system">
        <template #icon>
          <img class="" width="140px" src="https://group-collective.com/assets/main-screen-image-d8061a45.webp">
        </template>
        <template #title>
          <NuxtLink class="hover:text-primary flex gap-1 items-center" to="https://group-collective.com/">
            <span>Group Collective</span>
            <UIcon
                class="text-xs"
                name="i-formkit-linkexternal"></UIcon>
          </NuxtLink>
        </template>
      </LandingCard>
      <LandingCard class="col-span-6 row-span-4" icon="i-heroicons-wrench-screwdriver" title="Fully Customizable"
                   description="Change the style of any component in your App Config or with ui prop.">
        <template #icon>
          <img class="bg-white p-4 rounded-2xl" src="https://rang.ai/assets/public/i/logo.svg" alt="">
        </template>
        <template #title>
          <NuxtLink class="hover:text-primary flex gap-1 items-center" to="https://rang.ai/">
            <span>Rang.ai</span>
            <UIcon
                class="text-xs"
                name="i-formkit-linkexternal"></UIcon>
          </NuxtLink>
        </template>
      </LandingCard>
      <LandingCard class="col-span-6 row-span-4" icon="i-heroicons-face-smile" title="Icons"
                   description="Choose any of the 100k+ icons from the most popular icon libraries."/>
      <LandingCard class="col-span-6 row-span-2" icon="i-heroicons-computer-desktop" title="Keyboard Shortcuts"
                   description="Nuxt UI comes with a set of Vue composables to easily handle shortcuts."/>
    </LandingGrid>

    <LandingCTA
        class="mt-20"
        title="My favorite tech stack"
        description="We've built a strong, lasting partnership. Their trust is our driving force, propelling us towards shared success."
        :card="true"
    />
  </UContainer>
</template>
<script setup lang="ts">
import LandingSection from "~/components/landing/LandingSection.vue";

definePageMeta({
  title: 'About'
})
const icons = [
  {
    name: 'i-logos-javascript',
    title: 'JavaScript',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
  },
  {
    name: 'i-logos-typescript-icon',
    title: 'TypeScript',
    link: 'https://www.typescriptlang.org/'
  },
  {
    name: 'i-logos-docker-icon',
    title: 'Docker',
    link: 'https://www.docker.com/'
  },
  {
    name: 'i-logos-vue',
    title: 'Vue.js',
    link: 'https://vuejs.org/'
  },
  {
    name: 'i-logos-nuxt-icon',
    title: 'Nuxt.js',
    link: 'https://nuxtjs.org/'
  },
  {
    name: 'i-logos-pinia',
    title: 'Pinia',
    link: 'https://pinia.vuejs.org/'
  },
  {
    name: 'i-logos-tailwindcss-icon',
    title: 'Tailwind CSS',
    link: 'https://tailwindcss.com/'
  },
  {
    name: 'i-logos-sentry-icon',
    title: 'Sentry',
    link: 'https://sentry.io/'
  },
  {
    name: 'i-logos-storyblok-icon',
    title: 'Storyblok',
    link: 'https://www.storyblok.com/'
  },
  {
    name: 'i-logos-laravel',
    title: 'Laravel',
    link: 'https://laravel.com/'
  },
  {
    name: 'i-logos-storybook-icon',
    title: 'Storybook',
    link: 'https://storybook.js.org/'
  },
  {
    name: 'i-logos-supabase-icon',
    title: 'Supabase',
    link: 'https://supabase.io/'
  }
];

const shuffledIcons = ref([...icons]);

const shuffleIcons = () => {
  for (let i = shuffledIcons.value.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledIcons.value[i], shuffledIcons.value[j]] = [shuffledIcons.value[j], shuffledIcons.value[i]];
  }
};

</script>
<style scoped>
.icon-container {
  transition: transform 1s;
}

/* 1. declare transition */
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 1s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. declare enter from and leave to state */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
.fade-leave-active {
  position: absolute;
}
</style>
