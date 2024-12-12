<template>
  <section id="about" class="section-box">
    <div
      class="container public-container text-center md:text-left"
      data-aos="zoom-in-up"
      data-aos-duration="500"
    >
      <!-- About Me and Education -->
      <div class="lg:grid lg:grid-cols-2 lg:gap-10">
        <!-- About Me -->
        <div class="lg:w-5/6">
          <h2 class="sction-title">About Me</h2>
          <div class="about-text">
            <!-- Floating Profile Image -->
            <img
              :src="aboutme.img"
              alt="Profile"
              class="w-40 rounded-lg shadow-md profile-float"
            />

            <!-- Description Text -->
            <p>
              I’m a front-end engineer who write
              <span class="font-bold">clean, elegant and efficient</span> code.
            </p>
            <p>
              My journey into web development began during university when I
              first encountered HTML. The excitement of seeing a coded interface
              come to life sparked my interest and led me to pursue front-end
              development professionally.
            </p>
            <p>
              With expertise in Vue, TailwindCSS, and JavaScript, I focus on
              crafting user-friendly, visually appealing, and high-performance
              web applications. I enjoy turning creative ideas into functional
              digital experiences, whether building single-page applications or
              contributing to collaborative projects.
            </p>
            <p>
              Driven by curiosity and a commitment to continuous learning, I aim
              to enhance my skills and contribute meaningfully to the tech
              industry. Let's create something amazing together!
            </p>
          </div>
        </div>
        <!-- Education -->
        <div class="mt-16">
          <h3 class="section-header">Education</h3>
          <ul class="list-disc list-inside text-gray-700 space-y-4 text-lg">
            <li>
              <strong>Software Engineering</strong> - [Communication University
              of Zhejiang], [2022]
            </li>
            <li>
              <strong>Japanese</strong> - [Kudan Institute of Japanese
              Language&Culture], [2024]
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const aboutme = { img: "/aboutmeImg.jpg" };
</script>

<style scoped>
/* Custom styling for image floating */
.profile-float {
  @apply float-left mr-2 mb-2;
  /* margin-right: 1.5rem;
  margin-bottom: 1rem; */
}
.about-text {
  @apply text-lg text-gray-700 space-y-4 relative;
}
.about-text p {
  @apply text-left;
  /* text-align: justify; */
}
</style>
