<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})

const props = defineProps<{
  ui?: Partial<typeof config>
  class?: any
}>()

const config = {
  wrapper: 'flex flex-col lg:grid gap-8 lg:grid-cols-12 relative',
}

const { ui, attrs } = useUI('landing.grid', toRef(props, 'ui'), config, toRef(props, 'class'), true)
</script>

<template>
  <div :class="ui.wrapper" v-bind="attrs">
    <slot />
  </div>
</template>
