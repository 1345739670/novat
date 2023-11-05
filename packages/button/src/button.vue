<template>
  <button
    :class="cls"
    :disabled="disabled || loading"
  >
    <span v-if="$slots.icon" :class="iconCls">
      <slot name="icon" />
    </span>
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { createCssScope, getComponentName } from '../../utils'
import { ButtonProps } from './types'
import '../style'

const COMPONENT_BASE_NAME = 'button'

defineOptions({
  name: getComponentName(COMPONENT_BASE_NAME)
})
const bem = createCssScope(COMPONENT_BASE_NAME)

const props = withDefaults(defineProps<ButtonProps>(), {
  long: false,
  loading: false,
  disabled: false
})

const cls = computed(() => {
  const { loading, long, disabled } = props
  return bem({
    loading,
    long,
    disabled
  })
})

const iconCls = computed(() => {
  return {
  }
})
</script>
