<script setup lang="ts">
const items = [
  { icon: '🍸', title: 'Cocktails', description: 'Discover creative cocktail recipes' },
  { icon: '🌿', title: 'Mocktails', description: 'Alcohol-free alternatives' },
  { icon: '🥂', title: 'Events', description: 'Events you can find me joining' }
]
</script>

<template>
    <div class="bg-dark-purple text-beige py-10">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="item in items" :key="item.title" class="text-center">
            <div class="text-4xl mb-4">{{ item.icon }}</div>
            <h3 class="mb-2">{{ item.title }}</h3>
            <p class="opacity-75">{{ item.description }}</p>
          </div>
        </div>
    </div>
  </div>
</template>
