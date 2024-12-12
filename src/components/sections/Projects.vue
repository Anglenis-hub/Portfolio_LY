<template>
  <section id="projects" class="section-box">
    <div
      class="container public-container text-center md:text-left"
      data-aos="zoom-in-up"
      data-aos-duration="500"
    >
      <!-- Section Title -->
      <h3 class="sction-title">Projects</h3>
      <p class="text-lg text-gray-600 mb-10">
        Here are some of the projects I've worked on. Click the links to learn
        more or view the live demos.
      </p>

      <!-- Projects Grid -->
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <!-- Project Card -->
        <div
          v-for="project in projects"
          :key="project.title"
          class="flex flex-col justify-between bg-gray-100 rounded-lg shadow-defaultBox p-6 hover:shadow-xl transition-shadow duration-300"
        >
          <div>
            <img
              :src="project.image"
              :alt="project.title"
              class="mx-auto h-48 object-cover rounded-md mb-4"
            />
            <h4 class="text-2xl font-semibold text-gray-800 mb-2">
              {{ project.title }}
            </h4>
            <p class="text-gray-600 mb-4">{{ project.description }}</p>
          </div>
          <div class="flex justify-between items-center">
            <a
              :href="project.link"
              target="_blank"
              class="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
            >
              Link
            </a>
            <!-- <a
              :href="project.github"
              target="_blank"
              class="text-blue-500 underline hover:text-blue-600 transition duration-300"
            >
              GitHub
            </a> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Project data
const projects = [
  {
    title: "EC website",
    description:
      "Electrical products of Listed company App&Web Development with Vue.js.",
    image: "/ECweb.JPG",
    link: "https://mall.dahuatech.com/#/Home",
    // github: "https://github.com/yourusername/portfolio",
  },
  {
    title: "IoT platform",
    description:
      "IoT ecosystem powered by AIoT and data platforms with Vue.js&TailwindCSS.",
    image: "IoTplatform.png",
    link: "https://open.dahuatech.com/#/home",
    // github: "https://github.com/yourusername/ecommerce",
  },
  {
    title: "Hot Pepper App Clone",
    description: "A hot pepper app clone using JavaScript&WeChat Mini Program.",
    image: "/hotpepper.png",
    link: "https://github.com/Anglenis-hub/beauty-miniProgram",
    // github: "https://github.com/yourusername/weather-app",
  },
];
</script>
