<script setup lang="ts">
import { ref } from 'vue'
import AboutMe from '@/components/AboutMe.vue'
import VButton from '@/components/VButton.vue'

const drinkImages = [
  '/images/drinks/japanese-treat.png',
]
const fallingDrinks = ref<Array<{ id: number; image: string; left: number; delay: number }>>([])

for (let i = 0; i < 20; i++) {
  fallingDrinks.value.push({
    id: i,
    image: drinkImages[Math.floor(Math.random() * drinkImages.length)],
    left: Math.random() * 100,
    delay: Math.random() * 2,
  })
}
</script>

<template>
  <div>
    <div class="relative h-[60vh] text-beige bg-gradient-to-r from-purple to-dark-purple overflow-hidden">
      <div
        v-for="drink in fallingDrinks"
        :key="drink.id"
        class="absolute animate-fall"
        :style="{
          top: '-100px',
          left: `${drink.left}%`,
          animationDelay: `${drink.delay}s`,
        }"
      >
        <img
          :src="drink.image"
          :alt="'Falling drink'"
          class="w-12 h-12 object-contain"
        />
      </div>
      <div class="relative h-full flex items-center justify-center text-center px-4">
        <div class="max-w-3xl">
          <h1 class="mb-4">
            For the love of Little Drinks
          </h1>
          <p class="mb-8">
            Your cup of tea and everything-drinks corner
          </p>
          <v-button variant="secondary">
            <a
              href="https://www.instagram.com/little.drinkss/"
              target="_blank"
            >
              Explore Recipes
            </a>
          </v-button>
        </div>
      </div>
    </div>

    <AboutMe />
  </div>
</template>

<style scoped>
@keyframes fall {
  0% {
    transform: translateY(-20vh);
    opacity: 0.8;
  }
  100% {
    transform: translateY(90vh);
    opacity: 0;
  }
}

.animate-fall {
  animation: fall 6s linear infinite;
}

.animate-fall img {
  filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.2));
}
</style>
