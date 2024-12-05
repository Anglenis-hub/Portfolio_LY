<template>
    <header class="fixed top-0 left-0 w-full bg-blue-300 z-50 shadow-lg">
        <div class="flex justify-between items-center p-6 bg-blue-300 relative z-20">
            <div class="text-white text-3xl font-bold">LOGO</div>

            <!-- Mobile Toggle Button -->
            <button type="button" class="block text-secondary focus:outline-none" @click="toggleMenu">
                <span v-if="isMenuOpen" class="text-5xl">
                    <img src="https://img.icons8.com/ios-filled/100/ffffff/delete-sign.png" alt="close" width="50"
                        height="50" />
                </span>
                <span v-else class="text-5xl">
                    <img src="https://img.icons8.com/ios-filled/100/ffffff/menu--v6.png" alt="menu" width="50"
                        height="50" />
                </span>
            </button>

            <!-- Nav Bar Links -->
            <nav :class="isMenuOpen ? 'flex' : 'hidden'">
                <ul class="flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0">
                    <li v-for="item in Menu" :key="item.name">
                        <a href="javascript:void(0)"
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
import { ref } from 'vue';

// Reactive menu state
const isMenuOpen = ref(false);

// Menu items
const Menu = ref([
    { name: 'Services', href: '#services' },
    { name: 'About me', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
]);

// Function to toggle menu state
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

// Function to handle menu link click
const handleMenuClick = (href) => {
    // Close the menu
    isMenuOpen.value = false;

    // Scroll to the selected section
    const section = document.querySelector(href);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};
</script>