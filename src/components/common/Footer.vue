<template>
  <div>
    <!-- Footer -->
    <footer
      class="relative bottom-0 z-50 bg-foot text-gray-600 text-sm py-4 px-5/100 text-center border-t border-gray-200"
    >
      <div
        class="flex flex-col items-center space-y-4 md:flex-row md:justify-between md:space-y-0"
      >
        <p>© 2024 LIANG YI</p>
        <nav class="hidden md:flex space-x-6">
          <a
            href="javascript:void(0)"
            v-for="item in Menu"
            :key="item.name"
            :href="item.href"
            class="hover:underline"
            @click="handleMenuClick(item.href)"
          >
            {{ item.name }}
          </a>
        </nav>
      </div>
      <!-- Back to Top Button -->
      <div class="absolute -z-10 w-full h-10 -top-10 left-0 overflow-hidden">
        <button
          v-show="showButton"
          class="block absolute left-1/2 -translate-x-1/2 -bottom-10 w-16 h-16 bg-foot rounded-full border border-foot shadow-defaultBox text-gray-600 transition hover:scale-110 hover:text-black"
          @click="scrollToTop"
          aria-label="Back to Top"
        >
          <i class="fas fa-chevron-up text-lg absolute top-1 left-1/3"></i>
        </button>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { Menu } from "@/utils/menuItems.js";

// State to control visibility of the button
const showButton = ref(false);

// Handle menu link click
const handleMenuClick = (href) => {
  const section = document.querySelector(href);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

// Function to handle scrolling
const handleScroll = () => {
  showButton.value = window.scrollY > 300;
};

// Scroll to top smoothly
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Add/remove scroll event listeners
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
/* Add any additional custom styles here */
</style>
