<script setup lang="ts">
import { ref } from 'vue'
import AboutMe from '@/components/AboutMe.vue'
import VButton from '@/components/VButton.vue'

const showAnimation = ref(false);

const drinkImages = [
  '/images/drinks/autumn-matcha.png',
  '/images/drinks/cherry.png',
  '/images/drinks/chocolate.png',
  '/images/drinks/japanese.png',
  '/images/drinks/jasmine.png',
  '/images/drinks/margarita.png',
]
const fallingDrinks = ref<Array<{ id: number; image: string; left: number; delay: number; startTop: number; rotation: number }>>([])

for (let i = 0; i < 20; i++) {
  fallingDrinks.value.push({
    id: i,
    image: drinkImages[Math.floor(Math.random() * drinkImages.length)],
    left: Math.random() * 100,
    delay: Math.random() * 2,
    startTop: Math.random() * -100,
    rotation: Math.random() * 360,
  })
}
</script>

<template>
  <div>
    <div class="relative h-[60vh] text-beige bg-gradient-to-r from-purple to-dark-purple overflow-hidden">
      <VButton
          variant="small"
          @click="showAnimation = !showAnimation"
          class="absolute z-10 m-2"
      >
        {{ showAnimation ? 'Stop Animations :(' : 'Start Animations :)' }}
      </VButton>
      <div
        v-if="showAnimation"
        v-for="drink in fallingDrinks"
        :key="drink.id"
        class="absolute animate-fall"
        :style="{
          top: `${drink.startTop}%`,
          left: `${drink.left}%`,
          animationDelay: `${drink.delay}s`,
          '--end-rotation': `${drink.rotation}deg`,
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
    transform: translateY(-20vh) rotate(0deg);
    opacity: 0.8;
  }
  100% {
    transform: translateY(90vh) rotate(var(--end-rotation));
    opacity: 0;
  }
}

.animate-fall {
  animation: fall 6s linear infinite;
  will-change: transform;
}

.animate-fall img {
  filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.2));
}
</style>
