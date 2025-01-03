<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    
    <div class="card">
      <button type="button" @click="count++">
        Count: {{ count }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.home {
  padding: 2rem;
  text-align: center;
}

.card {
  margin: 2rem 0;
}
</style>
