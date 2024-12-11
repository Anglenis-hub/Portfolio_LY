<template>
  <section id="self-introduction" class="min-h-screen">
    <div
      class="h-screen container mx-auto flex flex-col-reverse justify-evenly items-center lg:flex-row lg:justify-center backdrop-blur-none"
    >
      <!-- left-slef introduce text -->
      <div
        class="z-items min-h-340 sm:min-h-400 mx-12 p-6 mt-4 sm:mx-6 lg:mr-0 flex flex-col justify-between lg:w-1/2 text-center lg:text-left bg-white/30 border border-white/20 shadow-defaultBox rounded-3xl"
      >
        <div class="mx-auto">
          <h2
            class="text-2xl sm:text-6xl font-bold text-blue-300 mb-4 sm:mb-12"
          >
            Hello, I'm LIANG YI
          </h2>
          <h2 class="text-lg sm:text-2xl text-gray-700 mb-6 sm:mb-12 text-left">
            a front-end developer passionate about creating modern and
            user-friendly web applications.
          </h2>
        </div>
        <!-- <p class="text-2xl text-gray-700 mb-6">
          Skilled in Vue, TailwindCSS, and JavaScript, I aim to craft user-friendly interfaces that leave a lasting
          impression. Whether it's building single-page applications or contributing to collaborative projects, I thrive
          on turning ideas into reality.
        </p> -->
        <div>
          <a href="#contact" class="slefintro-button mb-4 sm:mb-0 sm:mr-8">
            Contact Me
          </a>
          <a href="/resume_PDF.pdf" download class="slefintro-button">
            Download Resume
          </a>
        </div>
      </div>

      <!-- right-slef picture -->
      <div class="z-items lg:w-1/2 px-12 mt-32 sm:mt-4 sm:px-6">
        <img
          src="https://via.placeholder.com/400"
          alt="Self Introduction"
          class="rounded-lg shadow-defaultBox mx-auto"
        />
      </div>
    </div>
  </section>
</template>

<!-- <script setup>
import shapeDefinitions from "@/utils/shapeDefinitions";
</script> -->

<!-- prettier-ignore-start -->
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
.slefintro-button {
  @apply block sm:inline-block bg-blue-500 text-white px-6 py-3 rounded-lg shadow-defaultBox hover:bg-blue-600 transition duration-300;
}
</style>
<!-- prettier-ignore-end -->
