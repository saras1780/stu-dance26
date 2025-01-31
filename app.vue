<template>
  <div class="bg-primary min-h-screen flex flex-col">
    <!-- Header -->
    <header class="bg-accent text-white py-6">
      <div class="container mx-auto flex justify-between items-center px-6">
        <!-- Logo -->
        <div class="logo">
          <img src="public/images/logo.jpeg" alt="Stu'dance 26" class="h-12" />
        </div>

        <!-- Hamburger Menu Button -->
        <button @click="toggleMenu" class="lg:hidden block text-white focus:outline-none" aria-label="Toggle menu">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        <!-- Navigation Menu -->
        <nav :class="{ hidden: !isMenuOpen }"
          class="absolute top-20 left-0 w-full bg-accent lg:static lg:flex lg:items-center lg:justify-end lg:w-auto lg:bg-transparent">
          <ul class="flex flex-col lg:flex-row gap-4 lg:gap-8 text-center lg:text-left">
            <li>
              <NuxtLink to="/" class="hover:underline">Accueil</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/apropos" class="hover:underline">À propos</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/horaire-et-calendrier" class="hover:underline">Horaire et Calendrier</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/inscription" class="hover:underline">Inscriptions</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact" class="hover:underline">Contact</NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>


    <!-- Main Content -->
    <main class="flex-grow py-12 container mx-auto px-6">
      <NuxtPage />
    </main>

    <!-- Footer -->
    <footer class="bg-dark text-white py-8">
      <div class="container mx-auto text-center px-6">
        <p class="mb-4">&copy; 2025 Stu'dance 26 - Tous droits réservés.</p>
        <div class="flex justify-center gap-6 mb-4">
          <a href="https://facebook.com" target="_blank" class="hover:text-accent">Facebook</a>
          <a href="https://instagram.com" target="_blank" class="hover:text-accent">Instagram</a>
        </div>
        <div>
          <a href="/mentions-legales" class="hover:text-accent">Mentions légales</a> |
          <a href="/politique-de-confidentialite" class="hover:text-accent">Politique de confidentialité</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from "vue";

// État du menu (ouvert/fermé)
const isMenuOpen = ref(false);

// Fonction pour basculer l'état du menu
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style>
/* Ajuster les couleurs pour harmoniser */
.bg-primary {
  background-color: #F5EDF0;
}

.text-accent {
  color: #592F83;
}

.bg-accent {
  background-color: #592F83;
}

.bg-dark {
  background-color: #0D0E20;
}
</style>
