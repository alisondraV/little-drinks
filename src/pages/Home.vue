<script setup lang="ts">
import AboutMe from '@/components/AboutMe.vue'
import VButton from '@/components/VButton.vue'
</script>

<template>
  <div>
    <div class="relative h-[70vh] text-beige bg-gradient-to-r from-purple to-dark-purple">
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
