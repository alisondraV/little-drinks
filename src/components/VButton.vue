<script setup lang="ts">
import { computed } from 'vue'

const emit = defineEmits(['onClick'])
interface Props {
  variant?: 'primary' | 'secondary' | 'small'
}

const { variant = 'primary' } = defineProps<Props>()

const variantClasses = computed(() => {
  switch (variant) {
    case 'secondary':
      return 'bg-beige text-purple hover:bg-gray-100'
    case 'small':
      return 'bg-dark-purple text-beige text-xs px-2 py-1'
    default:
      return 'bg-purple text-beige hover:bg-dark-purple'
  }
})
</script>

<template>
  <button
    @click="emit('onClick')"
    class="px-6 py-2 rounded-full transition-colors"
    :class="variantClasses"
  >
    <slot />
  </button>
</template>
