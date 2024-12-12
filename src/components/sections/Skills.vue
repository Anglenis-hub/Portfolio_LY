<template>
  <section id="skills" class="section-box">
    <div
      class="container public-container text-center md:text-left"
      data-aos="zoom-in-up"
      data-aos-duration="500"
    >
      <!-- Skills and Experience -->
      <div class="lg:grid lg:grid-cols-2 lg:gap-10">
        <!-- Skills Section -->
        <div class="lg:w-5/6">
          <h3 class="sction-title">Skills</h3>
          <div class="space-y-6">
            <!-- Loop through skills -->
            <div v-for="skill in skills" :key="skill.name">
              <div class="flex justify-between">
                <span class="font-semibold text-gray-700">{{
                  skill.name
                }}</span>
                <span class="text-gray-600">{{ skill.percentage }}%</span>
              </div>
              <div class="w-full bg-gray-300 rounded-full h-4">
                <div
                  :style="{ width: skill.percentage + '%' }"
                  class="h-full bg-blue-500 rounded-full transition-all duration-300"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Experience Section -->
        <div class="mt-16">
          <h3 class="section-header">Experience</h3>
          <div class="space-y-6 text-gray-700">
            <div v-for="experience in experiences">
              <h3 class="section-subheader">{{ experience.header }}</h3>
              <p>{{ experience.company }}</p>
              <p class="text-sm font-bold">
                {{ experience.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
// Skills data
const skills = [
  { name: "HTML/CSS", percentage: 100 },
  { name: "JavaScript", percentage: 90 },
  { name: "Vue.js", percentage: 90 },
  { name: "React.js", percentage: 60 },
  { name: "TypeScript", percentage: 50 },
  { name: "TailwindCSS", percentage: 80 },
  // { name: "Node.js", percentage: 90 },
].sort((a, b) => b.percentage - a.percentage);

// Experiences data
const experiences = [
  {
    header: "Front-End Engineer Intership",
    company: "[Dahua Technology], 2021/7 - 2022/6",
    description:
      "Worked on EC App and Web Development for a Major Electronics Manufacturer",
  },
  {
    header: "Front-End Engineer",
    company: "[Dahua Technology], 2022/6 - 2023/3",
    description:
      "Contributed to Corporate Official Website and Portal Site Development",
  },
  {
    header: "IT Engineer",
    company: "[Marvel], 2024/12 - Present",
    description: "Participated in web development projects",
  },
];
</script>
