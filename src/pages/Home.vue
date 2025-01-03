<script setup lang="ts">
import { ref } from 'vue'

const featuredDrink = ref({
  name: 'Japanese Treat',
  description: 'A refreshing and unique drink that combines the flavors of Japan',
  image: '/src/assets/images/japanese-treat.png',
})
</script>

<template>
  <div>
    <div class="relative h-[70vh] text-beige bg-gradient-to-r from-purple to-dark-purple">
      <div class="absolute inset-0 bg-black/50" />
      <div class="relative h-full flex items-center justify-center text-center px-4">
        <div class="max-w-3xl">
          <h1 class="mb-4">
            For the love of Little Drinks
          </h1>
          <p class="mb-8">
            My cup of tea
          </p>
          <a
            href="https://www.instagram.com/little.drinkss/"
            target="_blank"
            class="bg-white text-dark-purple px-8 py-3 rounded-full hover:bg-purple transition-colors"
          >
            Explore Recipes
          </a>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto py-16 px-4">
      <h2 class="mb-12">Featured Creation</h2>
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
          <button class="bg-purple px-6 py-2 rounded-full hover:bg-purple transition-colors">
            View Recipe
          </button>
        </div>
      </div>
    </div>

    <div class="bg-gray-100 py-16">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="text-4xl mb-4">🍸</div>
            <h3 class="mb-2">Cocktails</h3>
            <p class="text-gray-600">Discover creative cocktail recipes</p>
          </div>
          <div class="text-center">
            <div class="text-4xl mb-4">🌿</div>
            <h3 class="mb-2">Mocktails</h3>
            <p class="text-gray-600">Alcohol-free alternatives</p>
          </div>
          <div class="text-center">
            <div class="text-4xl mb-4">🧊</div>
            <h3 class="mb-2">Techniques</h3>
            <p class="text-gray-600">Learn mixing methods</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
