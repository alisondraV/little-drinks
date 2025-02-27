<script setup lang="ts">
import { ref } from 'vue'

const featuredDrink = ref({
  name: 'Japanese Treat',
  description: 'A refreshing and unique drink that combines the flavors of Japan',
  image: '/images/japanese-treat.png',
})
</script>

<template>
  <div class="grid md:grid-cols-2 gap-8 items-center">
    <div class="aspect-square bg-gray-200 rounded-lg overflow-hidden">
      <img
        :src="featuredDrink.image"
        :alt="featuredDrink.name"
        class="w-full h-full object-cover"
      />
    </div>
    <div>
      <h3 class="mb-4">{{ featuredDrink.name }}</h3>
      <p class="mb-6">{{ featuredDrink.description }}</p>
      <p>Recipe Placeholder</p>
    </div>
  </div>
</template>
