<script setup lang="ts">
const emit = defineEmits(['onClick'])
</script>

<template>
    <button
        @click="emit('onClick')"
        class="bg-purple text-beige px-6 py-2 rounded-full hover:bg-dark-purple transition-colors"
    >
        <slot />
    </button>
</template>

