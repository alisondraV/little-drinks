<script setup>
const images = [
  { src: '/images/me/event.png', alt: 'Event' },
  { src: '/images/me/sign.png', alt: 'Sign' },
  { src: '/images/me/workshop.png', alt: 'Workshop' },
  { src: '/images/me/event2.png', alt: 'Another Event' },
]
</script>

<template>
  <div class="bg-beige text-dark-purple max-w-7xl mx-auto p-10">
    <h2 class="mb-6 text-center">About Me</h2>
    <div class="content">
      <div class="balloon-images">
        <img
          v-for="(image, index) in images"
          :key="index"
          :src="image.src"
          :alt="image.alt"
          class="balloon floating"
          :style="`animation-delay: ${index * 0.5}s`"
        />
      </div>
      <p class="description text-center">
        Hi, I’m Alisa — cocktail enthusiast and creator of Little Drinks! 🍸✨ I love experimenting
        with flavors and sharing creative, approachable cocktail and mocktail recipes. Whether
        you’re a pro or just starting out, I hope Little Drinks inspires you to mix, sip, and enjoy.
        <br />
        Cheers! 🥂
      </p>
    </div>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.balloon-images {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.balloon {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.floating {
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0px);
  }
}

.description {
  max-width: 600px;
  line-height: 1.6;
}
</style>
