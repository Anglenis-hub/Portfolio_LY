<template>
    <section id="skills" class="py-20">
        <div class="container mx-auto px-6 text-center md:text-left"
            data-aos="zoom-in-up"
            data-aos-duration="500">
            <!-- Skills and Experience -->
            <div class="mt-16 lg:grid lg:grid-cols-2 lg:gap-10">
                <!-- Skills Section -->
                <div class="lg:w-5/6">
                    <h3 class="text-3xl font-bold text-blue-500 mb-4">Skills</h3>
                    <div class="space-y-6">
                        <!-- Loop through skills -->
                        <div v-for="skill in skills" :key="skill.name">
                            <div class="flex justify-between">
                                <span class="font-semibold text-gray-700">{{ skill.name }}</span>
                                <span class="text-gray-600">{{ skill.percentage }}%</span>
                            </div>
                            <div class="w-full bg-gray-300 rounded-full h-4">
                                <div
                                    :style="{ width: skill.percentage + '%' }"
                                    class="h-full bg-blue-500 rounded-full transition-all duration-300">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Experience Section -->
                <div class="mt-16 ">
                    <h3 class="text-3xl font-bold text-blue-500 mb-4">Experience</h3>
                    <div class="space-y-6 text-gray-700">
                        <div>
                            <h4 class="font-bold">Front-End Engineer</h4>
                            <p>[Company Name], [Start Date] - Present</p>
                            <p class="text-sm">
                                Worked on building modern, responsive, and user-friendly web applications using Vue.js,
                                TailwindCSS, and JavaScript.
                            </p>
                        </div>
                        <div>
                            <h4 class="font-bold">Software Engineer Intern</h4>
                            <p>[Company Name], [Start Date] - [End Date]</p>
                            <p class="text-sm">
                                Contributed to back-end APIs and front-end features using Node.js, Java, and React.js.
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
    { name: 'Vue.js', percentage: 85 },
    { name: 'React.js', percentage: 80 },
    { name: 'JavaScript', percentage: 90 },
    { name: 'TailwindCSS', percentage: 75 },
    { name: 'Node.js', percentage: 70 },
    { name: 'Java', percentage: 65 },
];
</script>