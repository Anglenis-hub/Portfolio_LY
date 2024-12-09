<template>
    <section id="about" class="py-20">
        <div class="container public-container text-center md:text-left"
            data-aos="zoom-in-up"
            data-aos-duration="500">
            <!-- About Me and Education -->
            <div class="lg:grid lg:grid-cols-2 lg:gap-10">
                <!-- About Me -->
                <div class="lg:w-5/6">
                    <h2 class="text-4xl font-bold text-blue-500 mb-6"> About Me </h2>
                    <div class="text-lg text-gray-700 space-y-6 relative">
                        <!-- Floating Profile Image -->
                        <img
                            src="https://via.placeholder.com/200"
                            alt="Profile"
                            class="w-32 h-32 lg:w-40 lg:h-40 rounded-full shadow-md float-left mr-6 mb-4" />

                        <!-- Description Text -->
                        <p>
                            Hello! I’m a front-end engineer with a passion for building beautiful and functional web
                            applications. I love learning new technologies and improving my skills to deliver the best
                            solutions to my clients.
                        </p>
                        <p>
                            My journey began with a degree in Software Engineering, and since then, I’ve worked on a
                            variety
                            of exciting projects in both front-end and back-end development. Currently, I’m focusing on
                            mastering full-stack development using modern tools like Vue, TailwindCSS, and Java.
                        </p>
                        <p>
                            In my free time, I enjoy exploring new places, solving programming challenges, and
                            contributing
                            to open-source projects.
                        </p>
                    </div>
                </div>
                <!-- Education -->
                <div class="mt-16">
                    <h3 class="text-3xl font-bold text-blue-500 mb-4">Education</h3>
                    <ul class="list-disc list-inside text-gray-700 space-y-4 text-lg">
                        <li><strong>Bachelor's in Software Engineering</strong> - [Your University Name], [Year]</li>
                        <li><strong>Certification in Full-Stack Development</strong> - [Institution Name], [Year]</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* Custom styling for image floating */
.float-left {
    float: left;
    margin-right: 1.5rem;
    margin-bottom: 1rem;
}
</style>
