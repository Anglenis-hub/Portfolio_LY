<template>
  <section id="self-introduction" class="min-h-screen flex items-center justify-center">
    <!-- bg with some shapes -->
    <!-- <div
      v-for="(shape, index) in shapeDefinitions.shapeItems"
      :key="index"
      :class="[
        'absolute z-10 transform transition-all duration-500',
        shape.position,
        shapeDefinitions.sizes[shape.size],
        shapeDefinitions.colors[shape.color],
        shapeDefinitions.shapeTypes[shape.shape],
        shapeDefinitions.effects[shape.effect],
        shape.opacity,
      ]"></div> -->

    <div
      class="h-screen container mx-auto flex flex-col-reverse justify-evenly lg:flex-row items-center backdrop-blur-none">
      <!-- left-slef introduce text -->
      <div
        class="z-items lg:w-9/12 text-center md:text-left p-6 bg-white/30 border border-white/20 shadow-defaultBox rounded-3xl">
        <h2 class="text-4xl font-bold text-blue-500 mb-4">Hello, I'm LIANG YI</h2>
        <p class="text-2xl text-gray-700 mb-6">
          I am a passionate and driven front-end developer with expertise in creating modern, responsive, and dynamic web
          applications. My journey started with a love for design and problem-solving, and it has grown into a fulfilling
          career in web development.
        </p>
        <p class="text-2xl text-gray-700 mb-6">
          Skilled in Vue, TailwindCSS, and JavaScript, I aim to craft user-friendly interfaces that leave a lasting
          impression. Whether it's building single-page applications or contributing to collaborative projects, I thrive
          on turning ideas into reality.
        </p>
        <a href="#contact"
          class="inline-block bg-blue-500 text-white px-6 py-3 mr-8 rounded-lg shadow-defaultBox hover:bg-blue-600 transition duration-300">
          Contact Me
        </a>
        <a href="/resume_PDF.pdf" download
          class="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg shadow-defaultBox hover:bg-blue-600 transition duration-300">
          Download Resume
        </a>
      </div>

      <!-- right-slef picture -->
      <div class="z-items lg:w-1/2 px-6">
        <img src="https://via.placeholder.com/400" alt="Self Introduction" class="rounded-lg shadow-defaultBox mx-auto" />
      </div>
    </div>
  </section>
</template>

<!-- <script setup>
import shapeDefinitions from "@/utils/shapeDefinitions";
</script> -->
<style scoped>
/* make shapes have animation */
@keyframes floating {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-20px);
  }

  100% {
    transform: translateY(0);
  }
}

/* .animate-floating {
  animation: floating 1s ease-in-out infinite;
  rotate: 15deg;
} */
</style>
