<script setup lang="ts">
import { ref } from 'vue'
import AboutMe from '@/components/AboutMe.vue'
import VButton from '@/components/VButton.vue'

const emojis = ['🍵', '🧋', '🧃', '🥤', '🍹', '🍸', '🍶', '☕️']
const fallingEmojis = ref<Array<{ id: number; emoji: string; left: number; delay: number }>>([])

for (let i = 0; i < 20; i++) {
  fallingEmojis.value.push({
    id: i,
    emoji: emojis[Math.floor(Math.random() * emojis.length)],
    left: Math.random() * 100,
    delay: Math.random() * 2,
  })
}
</script>

<template>
  <div>
    <div class="relative h-[60vh] text-beige bg-gradient-to-r from-purple to-dark-purple overflow-hidden">
      <div
        v-for="emoji in fallingEmojis"
        :key="emoji.id"
        class="absolute animate-fall"
        :style="{
          left: `${emoji.left}%`,
          animationDelay: `${emoji.delay}s`,
          fontSize: '28px'
        }"
      >
        {{ emoji.emoji }}
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
    opacity: 1;
  }
  100% {
    transform: translateY(90vh);
    opacity: 0;
  }
}

.animate-fall {
  animation: fall 5s linear infinite;
}
</style>
