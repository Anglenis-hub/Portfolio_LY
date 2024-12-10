<script setup>
import HiLY from '@/components/HiLY.vue'
import NavBar from '@/components/NavBar.vue'
import About from '@/components/About.vue'
import Skills from '@/components/Skills.vue'
import Projects from '@/components/Projects.vue'
import Contact from '@/components/Contact.vue'
import shapeDefinitions from "@/utils/shapeDefinitions";
</script>

<template>
  <div class="bg-gradient-to-r from-gray-100 to-blue-100">
    <NavBar />
    <HiLY />
    <About />
    <Skills />
    <Projects />
    <Contact />

    <!-- BACKGROUND with some shapes -->
    <div
      v-for="(shape, index) in shapeDefinitions.shapeItems"
      :key="index"
      :class="[
        'fixed z-shapes transform transition-all duration-500',
        shape.position,
        shapeDefinitions.sizes[shape.size],
        shapeDefinitions.colors[shape.color],
        shapeDefinitions.shapeTypes[shape.shape],
        shapeDefinitions.effects[shape.effect],
        shape.opacity,
        shape.isShow,
      ]"></div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
