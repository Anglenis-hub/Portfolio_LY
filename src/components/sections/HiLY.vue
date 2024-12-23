<template>
  <section id="self-introduction" class="min-h-screen">
    <div
      class="h-screen container mx-auto flex flex-col-reverse justify-evenly items-center lg:flex-row lg:justify-center backdrop-blur-none"
    >
      <!-- left-slef introduce text -->
      <div
        class="z-items min-h-320 sm:min-h-400 2xl:min-h-550 mx-12 p-4 sm:p-6 mt-4 sm:mx-6 lg:mr-0 flex flex-col justify-between lg:w-1/2 2xl:w-65/100 text-center lg:text-left bg-white/30 border border-white/20 shadow-defaultBox rounded-3xl"
      >
        <div class="mx-auto">
          <h2 class="text-3xl sm:text-6xl font-bold text-blue-300">Hello</h2>
          <h2
            class="text-3xl sm:text-6xl font-bold text-blue-300 mb-4 sm:mb-12"
          >
            I'm LIANG YI
          </h2>
          <h2 class="text-lg sm:text-2xl text-gray-700 mb-2 sm:mb-12 text-left">
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
          <a href="#contact" class="slefintro-button mb-2 sm:mb-0 sm:mr-8">
            Contact Me
          </a>
          <a href="/resume_pdf_1220.pdf" download class="slefintro-button">
            Download Resume
          </a>
        </div>
      </div>

      <!-- right-slef picture -->
      <div
        class="z-items overflow-hidden mt-16 lg:mt-0 w-7/12 lg:w-35/100 xl:w-30/100 sm:ml-12 sm:mt-4 sm:px-6"
      >
        <img
          :src="img.image"
          alt="Self Introduction"
          class="rounded-lg shadow-defaultBox mx-auto"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const img = {
  image: "/Img.JPG",
};
</script>

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
  @apply block sm:inline-block bg-blue-500 text-white text-sm sm:text-lg p-2 sm:px-6 sm:py-3 rounded-lg shadow-defaultBox hover:bg-blue-600 transition duration-300;
}
</style>
<!-- prettier-ignore-end -->
