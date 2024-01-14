<template>
  <div :class="ui.wrapper" v-bind="attrs">
    <slot/>
  </div>
</template>

<script setup lang="ts">
const config = {
  wrapper: 'flex flex-col lg:grid gap-8 lg:grid-cols-12 relative'
}

defineOptions({
  inheritAttrs: false
})

const props = defineProps<{
  ui?: Partial<typeof config>
  class?: any
}>()

const {ui, attrs} = useUI('landing.grid', toRef(props, 'ui'), config, toRef(props, 'class'), true)
</script>
