<template>
  <section id="contact" class="section-box">
    <div class="container public-container" data-aos="zoom-in-up" data-aos-duration="500">
      <!-- Section Title -->
      <h3 class="text-3xl font-bold text-blue-500 mb-10">Contact Me</h3>

      <div class="grid gap-8 md:grid-cols-2">
        <!-- Contact Information -->
        <div class="p-4 flex flex-col justify-between">
          <!-- <h4 class="text-2xl font-semibold text-gray-800 mb-4"> Contact Details </h4> -->
          <p class="contact-text">Need an experienced senior developer to help out?</p>
          <p class="contact-text">
            Feel free to reach out to me.
            <a href="mailto:anglenis.11@outlook.com" class="underline">Send me an email</a>
          </p>
        </div>

        <div class="bg-gray-100 p-6 rounded-lg shadow-defaultBox flex flex-col justify-center">
          <div class="space-y-4">
            <div class="flex items-center">
              <span class="text-blue-500 text-xl mr-3">
                <i class="fas fa-envelope"></i>
              </span>
              <a href="mailto:anglenis.11@outlook.com" class="text-gray-700 hover:text-blue-500">
                anglenis.11@outlook.com
              </a>
            </div>
            <div class="flex items-center">
              <span class="text-blue-500 text-xl mr-3">
                <i class="fas fa-map-marker-alt"></i>
              </span>
              <p class="text-gray-700">Tokyo</p>
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

<style scoped>
.contact-text {
  @apply text-2xl text-gray-700;
}
</style>
