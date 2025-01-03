<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <div class="p-8 text-center">
    <h1>{{ msg }}</h1>
    
    <div class="my-8">
      <button 
        type="button" 
        @click="count++"
        class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        Count: {{ count }}
      </button>
    </div>
  </div>
</template>
