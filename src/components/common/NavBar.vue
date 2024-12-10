<template>
    <header class="fixed bg-primary z-nav top-0 left-0 w-full z-50 shadow-defaultBox">
        <div class="flex justify-between items-center p-6 relative z-20">
            <!-- Logo -->
            <div class="text-blue-300  text-3xl font-bold">LIANG YI</div>

            <!-- Mobile Toggle Button -->
            <button
                v-show="isMobileView"
                type="button"
                class="block text-secondary focus:outline-none"
                @click="toggleMenu">
                <span v-if="isMenuOpen" class="text-5xl">
                    <img
                        src="https://img.icons8.com/ios-filled/100/ffffff/delete-sign.png"
                        alt="close" width="50" height="50" />
                </span>
                <span v-else class="text-5xl">
                    <img
                        src="https://img.icons8.com/ios-filled/100/ffffff/menu--v6.png"
                        alt="menu" width="50" height="50" />
                </span>
            </button>

            <!-- Navigation Links for Desktop -->
            <nav class="hidden md:flex">
                <ul class="flex items-center space-x-5">
                    <li v-for="item in Menu" :key="item.name">
                        <a
                            href="javascript:void(0)"
                            class="relative block text-blue-300 text-lg font-medium hover:text-yellow-100 transition-all duration-300 group"
                            @click="handleMenuClick(item.href)">
                            {{ item.name }}
                            <!-- Hover Animation -->
                            <span
                                class="absolute left-0 bottom-0 w-0 h-1 bg-yellow-100 transition-all duration-500 group-hover:w-full">
                            </span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>

        <!-- Drop-Down Menu for mobile view -->
        <nav
            v-show="isMobileView"
            :class="[
                ' bg-primary overflow-hidden',
                isMenuOpen ? 'max-h-screen drop-down' : 'max-h-0 drop-up'
            ]"
            class="transition-all duration-600 md:hidden">
            <ul class="flex flex-col items-center space-y-5 py-5">
                <li v-for="item in Menu" :key="item.name">
                    <a
                        href="javascript:void(0)"
                        class="block text-blue-300 transition hover:text-yellow-100 text-lg"
                        @click="handleMenuClick(item.href)">
                        {{ item.name }}
                    </a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Menu } from '@/utils/menuItems.js';

// Reactive state
const isMenuOpen = ref(false); // Default to closed
const isMobileView = ref(window.innerWidth < 768); // Check initial window width
// const isLogoShown = ref(true); // Show logo by default

// Toggle menu state
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

// Handle menu link click
const handleMenuClick = (href) => {
    if (isMobileView.value) {
        isMenuOpen.value = false;
    }
    const section = document.querySelector(href);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

// Update mobile view state
const updateMobileView = () => {
    const isMobile = window.innerWidth < 768;
    isMobileView.value = isMobile;
    isMenuOpen.value = !isMobile; // Automatically open menu on larger screens
};

// Set up resize listener
onMounted(() => {
    updateMobileView(); // Initialize state
    window.addEventListener('resize', updateMobileView);
});

// Clean up listener
onUnmounted(() => {
    window.removeEventListener('resize', updateMobileView);
});
</script>

<style scoped>
/* Custom transition for drop-down */
.drop-down {
    transition: max-height 1s ease-in;
    /* Longer duration for drop-down */
}

/* Custom transition for drop-up */
.drop-up {
    transition: max-height 0.3s ease-out;
    /* Shorter duration for drop-up */
}
</style>
