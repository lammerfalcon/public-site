<template>
  <div :class="[ui.wrapper, align === 'center' && 'text-center', align === 'right' && 'text-right']" v-bind="attrs">
    <h2 v-if="title" :class="ui.title">
      {{ title }}
    </h2>
    <div :class="ui.images">
      <slot/>
    </div>
  </div>
</template>

<script setup lang="ts">
const config = {
  wrapper: '',
  title: 'text-lg font-semibold leading-8 text-gray-900 dark:text-white',
  images: 'mx-auto mt-10 flex flex-wrap items-center justify-between gap-8'
}

defineOptions({
  inheritAttrs: false
})

const props = withDefaults(defineProps<{
  title?: string
  align?: 'left' | 'center' | 'right'
  ui?: Partial<typeof config>
  class?: any
}>(), {
  title: '',
  align: 'center',
  ui: () => ({}),
  class: undefined
})

const {ui, attrs} = useUI('landing.logos', toRef(props, 'ui'), config, toRef(props, 'class'), true)
</script>
