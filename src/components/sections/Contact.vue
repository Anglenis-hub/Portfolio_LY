<template>
  <section id="contact" class="py-20">
    <div
      class="container public-container"
      data-aos="zoom-in-up"
      data-aos-duration="500"
    >
      <!-- Section Title -->
      <h3 class="text-3xl font-bold text-blue-500 mb-10">Contact Me</h3>

      <div class="grid gap-8 md:grid-cols-2">
        <!-- Contact Form -->
        <div class="bg-gray-100 p-6 rounded-lg shadow-defaultBox">
          <h4 class="text-2xl font-semibold text-gray-800 mb-4">
            Send a Message
          </h4>
          <form @submit.prevent="handleSubmit">
            <!-- Name -->
            <div class="mb-4">
              <label for="name" class="block text-gray-700 font-medium mb-2"
                >Your Name</label
              >
              <input
                type="text"
                id="name"
                v-model="form.name"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
              />
            </div>

            <!-- Email -->
            <div class="mb-4">
              <label for="email" class="block text-gray-700 font-medium mb-2"
                >Your Email</label
              >
              <input
                type="email"
                id="email"
                v-model="form.email"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
              />
            </div>

            <!-- Message -->
            <div class="mb-4">
              <label for="message" class="block text-gray-700 font-medium mb-2"
                >Your Message</label
              >
              <textarea
                id="message"
                v-model="form.message"
                required
                rows="5"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
              ></textarea>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              class="w-full bg-blue-500 text-white px-4 py-2 rounded-lg shadow-defaultBox hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        <!-- Contact Information -->
        <div
          class="bg-gray-100 p-6 rounded-lg shadow-defaultBox flex flex-col justify-center"
        >
          <h4 class="text-2xl font-semibold text-gray-800 mb-4">
            Contact Details
          </h4>
          <p class="text-gray-700 mb-4">
            Feel free to reach out through any of the following methods.
          </p>
          <div class="space-y-4">
            <div class="flex items-center">
              <span class="text-blue-500 text-xl mr-3">
                <i class="fas fa-envelope"></i>
              </span>
              <a
                href="mailto:your-email@example.com"
                class="text-gray-700 hover:text-blue-500"
              >
                your-email@example.com
              </a>
            </div>
            <div class="flex items-center">
              <span class="text-blue-500 text-xl mr-3">
                <i class="fas fa-map-marker-alt"></i>
              </span>
              <p class="text-gray-700">
                123 Your Street, Your City, Your Country
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

// Reactive form data
const form = ref({
  name: "",
  email: "",
  message: "",
});

// Handle form submission
const handleSubmit = () => {
  console.log("Form Submitted", form.value);
  // Reset form fields
  form.value.name = "";
  form.value.email = "";
  form.value.message = "";
  alert("Thank you for reaching out! Your message has been sent.");
};
</script>
