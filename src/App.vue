<script setup>
import NavBar from "@/components/common/NavBar.vue";
import Footer from "@/components/common/Footer.vue";
import HiLY from "@/components/sections/HiLY.vue";
import About from "@/components/sections/About.vue";
import Skills from "@/components/sections/Skills.vue";
import Projects from "@/components/sections/Projects.vue";
import Contact from "@/components/sections/Contact.vue";
import shapeDefinitions from "@/utils/shapeDefinitions";
</script>

<template>
  <div class="relative bg-primary">
    <div class="z-items">
      <NavBar />
      <HiLY />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
    <!-- BACKGROUND with some shapes -->
    <!-- <div
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
      ]"></div> -->
    <!-- BACK TO TOP BUTTON -->
    <Footer />
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
