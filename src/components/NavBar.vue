<template>
    <header class="fixed top-0 left-0 w-full bg-blue-300 z-50 shadow-lg">
        <div class="flex justify-between items-center p-6 bg-blue-300 relative z-20">
            <!-- Logo -->
            <div v-show="isLogoShown" class="text-white text-3xl font-bold">LOGO</div>

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

            <!-- Navigation Links -->
            <nav :class="isMenuOpen ? 'flex' : 'hidden'">
                <ul class="flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0">
                    <li v-for="item in Menu" :key="item.name">
                        <a
                            href="javascript:void(0)"
                            class="block text-white transition hover:text-primary text-2xl md:text-lg"
                            @click="handleMenuClick(item.href)">
                            {{ item.name }}
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Reactive state
const isMenuOpen = ref(false); // Default to closed
const isMobileView = ref(window.innerWidth < 768); // Check initial window width
const isLogoShown = ref(true); // Show logo by default

// Menu items
const Menu = ref([
    { name: 'About me', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
]);

// Toggle menu state
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
    if (isMobileView.value) {
        isLogoShown.value = !isLogoShown.value;
    }
};

// Handle menu link click
const handleMenuClick = (href) => {
    if (isMobileView.value) {
        isMenuOpen.value = false;
        isLogoShown.value = true; // Reset logo visibility
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