<script setup>
import HiLY from '@/components/HiLY.vue'
import NavBar from '@/components/NavBar.vue'
import About from '@/components/About.vue'
import Skills from '@/components/Skills.vue'
import Projects from '@/components/Projects.vue'
import Contact from '@/components/Contact.vue'
</script>

<template>
  <div class="bg-gray-100">
    <NavBar />
    <HiLY />
    <About />
    <Skills />
    <Projects />
    <Contact />
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
