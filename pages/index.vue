<template>
  <section class="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-900 to-black text-white overflow-hidden">
    <!-- Background overlay with motion effect -->
    <div class="absolute inset-0 bg-[url('/images/dance-bg.jpg')] bg-cover bg-center opacity-20 animate-pulse"></div>
    
    <!-- Main Content -->
    <div class="relative z-10 text-center max-w-4xl px-6">
      <h1 class="text-5xl md:text-7xl font-extrabold tracking-wider uppercase animate-fade-in">
        Bienvenue chez <span class="text-purple-400">Stu'dance 26</span>
      </h1>
      <p class="mt-6 text-lg md:text-2xl font-light tracking-wide animate-slide-up">
        Des cours de danse pour <span class="text-purple-300 font-semibold">tous les âges</span> et tous les styles.
      </p>
      
      <!-- Call to action buttons -->
      <div class="mt-8 flex flex-col md:flex-row items-center justify-center gap-4 animate-slide-in">
        <a href="/inscription" class="px-6 py-3 bg-purple-500 hover:bg-purple-700 text-white rounded-full text-lg font-semibold shadow-lg transition-all duration-300">
          Inscription
        </a>
        <a href="/horaire-et-calendrier" class="px-6 py-3 border-2 border-purple-500 hover:bg-purple-500 text-white rounded-full text-lg font-semibold shadow-lg transition-all duration-300">
          Voir les horaires
        </a>
      </div>
    </div>
    
  </section>
    <!-- Gallery Section -->
          <section class="py-12">
            <h2 class="text-3xl font-semibold text-center mb-6">Moments forts de Stu'dance 26</h2>
              <div class="container mx-auto">
                <Swiper
                  :modules="[Autoplay, Navigation, Pagination]"
                  :slides-per-view="1"
                  :space-between="20"
                  :loop="true"
                  :pagination="{ clickable: true }"
                  :navigation="true"
                  :autoplay="{ delay: 3000, disableOnInteraction: false }"
                  class="w-full md:w-3/4 mx-auto"
                >
                  <SwiperSlide v-for="(image, index) in galleryImages" :key="index">
                    <img :src="image" class="rounded-lg shadow-md hover:shadow-xl transition w-full object-cover h-[400px] md:h-[500px]" />

                  </SwiperSlide>
                </Swiper>
              </div>
        </section>

      <!-- Présentation des cours section -->
        <section class="py-12">
            <div class="container mx-auto text-center">
                <h2 class="text-3xl font-semibold mb-6">Nos Cours</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <NuxtLink to="cours/enfants" class="p-6 rounded-lg shadow-md hover:shadow-lg transition bg-cover bg-center text-white flex-col justify-between h-full"
                        style="background-image: url('/images/background.png');">
                        <div class="bg-black bg-opacity-15 p-6 rounded-lg h-full flex flex-col justify-center">
                            <h3 class="text-2xl font-bold mb-4">Enfants</h3>
                            <p>Des cours ludiques adaptés aux plus jeunes.</p>
                        </div>
                    </NuxtLink>

                    <NuxtLink to="cours/ados" class="p-6 rounded-lg shadow-md hover:shadow-lg transition bg-cover bg-center text-white flex-col justify-between h-full"
                        style="background-image: url('/images/background.png');">
                        <div class="bg-black bg-opacity-15 p-6 rounded-lg h-full flex flex-col justify-center">
                            <h3 class="text-2xl font-bold mb-4">Adolescents</h3>
                            <p>Des cours dynamiques adaptés aux jeunes danseurs.</p>
                        </div>
                    </NuxtLink>

                    <NuxtLink to="cours/adultes" class="p-6 rounded-lg shadow-md hover:shadow-lg transition bg-cover bg-center text-white flex-col justify-between h-full"
                        style="background-image: url('/images/background.png');">
                        <div class="bg-black bg-opacity-15 p-6 rounded-lg h-full flex flex-col justify-center">
                            <h3 class="text-2xl font-bold mb-4">Adultes</h3>
                            <p>Des ateliers et cours de différents styles.</p>
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </section>

      <!-- Valeurs Section -->
        <section class="py-12 bg-[#D1CCDC] text-[#0D0E20] rounded-lg">
            <div class="container mx-auto text-center">
                <h2 class="text-3xl font-semibold mb-6">Nos valeurs</h2>
                <p class="text-lg leading-relaxed">
                    À Stu'dance 26, nous croyons en l'expression personnelle, le dépassement de soi et la force de la
                    communauté. Rejoignez une école où chaque élève est libre de briller à sa façon.
                </p>
            </div>
        </section>

      <!-- Agenda Section -->
        <section class="py-12">
          <div class="container mx-auto">
              <h2 class="text-3xl font-semibold text-center mb-6">Agenda</h2>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <!-- Carte d'événement -->
                  <div class="border-2 border-purple-950 rounded-lg p-4 text-center shadow-lg">
                      <p class="text-xl font-bold text-purple-950">15 février 2025</p>
                      <hr class="border-t-2 border-purple-950 my-2">
                      <p class="text-lg">Atelier spécial danse contemporaine</p>
                  </div>
                  <div class="border-2 border-purple-950 rounded-lg p-4 text-center shadow-lg">
                      <p class="text-xl font-bold text-purple-950">10 avril 2025</p>
                      <hr class="border-t-2 border-purple-950 my-2">
                      <p class="text-lg">Stage intensif de hip-hop</p>
                  </div>
                  <div class="border-2 border-purple-950 rounded-lg p-4 text-center shadow-lg">
                      <p class="text-xl font-bold text-purple-950">20 juin 2025</p>
                      <hr class="border-t-2 border-purple-950 my-2">
                      <p class="text-lg">Spectacle annuel "Les étoiles de la danse"</p>
                  </div>
              </div>
          </div>
        </section>


      <!-- Témoignages Section -->
        <section class="py-12">
            <div class="container mx-auto text-center">
                <h2 class="text-3xl font-semibold mb-6">Témoignages</h2>
                <blockquote class="italic text-lg">"Une école de danse incroyable où l'on progresse tout en s'amusant !" - Emma</blockquote>
            </div>
        </section>


      <!-- Abonnements Section -->
        <section class="py-12">
            <div class="container mx-auto text-center">
                <h2 class="text-3xl font-semibold mb-8">Formules d'abonnement</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <!-- Plan 1 -->
                    <div class="bg-[#D1CCDC] text-[#0D0E20] rounded-lg p-6 shadow-md">
                        <h3 class="text-2xl font-bold mb-4">Découverte</h3>
                        <p class="mb-4">Accès à 1 cours par semaine</p>
                        <p class="text-lg font-bold mb-4">30€/mois</p>
                        <NuxtLink to="/inscription"
                            class="bg-[#592F83] text-white py-2 px-6 rounded-lg hover:bg-[#391B49] transition">
                            S'inscrire
                        </NuxtLink>
                    </div>

                    <!-- Plan 2 -->
                    <div class="bg-[#D1CCDC] text-[#0D0E20] rounded-lg p-6 shadow-md">
                        <h3 class="text-2xl font-bold mb-4">Classique</h3>
                        <p class="mb-4">Accès à 3 cours par semaine</p>
                        <p class="text-lg font-bold mb-4">60€/mois</p>
                        <NuxtLink to="/inscription"
                            class="bg-[#592F83] text-white py-2 px-6 rounded-lg hover:bg-[#391B49] transition">
                            S'inscrire
                        </NuxtLink>
                    </div>

                    <!-- Plan 3 -->
                    <div class="bg-[#D1CCDC] text-[#0D0E20] rounded-lg p-6 shadow-md">
                        <h3 class="text-2xl font-bold mb-4">Illimité</h3>
                        <p class="mb-4">Accès illimité à tous les cours</p>
                        <p class="text-lg font-bold mb-4">90€/mois</p>
                        <NuxtLink to="/inscription"
                            class="bg-[#592F83] text-white py-2 px-6 rounded-lg hover:bg-[#391B49] transition">
                            S'inscrire
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </section>


      <!-- FAQ Section -->
        <FaqAccordion />

</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import FaqAccordion from "@/components/FaqAccordion.vue";

const galleryImages = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
  "/images/gallery4.jpg",
  "/images/gallery5.jpg",
  "/images/gallery6.jpg",
  "/images/gallery7.jpg",
  "/images/gallery8.jpg",
]

</script>

<style>
@keyframes fade-in {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fade-in 1s ease-out;
}

@keyframes slide-up {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-slide-up {
  animation: slide-up 1s ease-out 0.3s both;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}
.animate-bounce {
  animation: bounce 1.5s infinite;
}
@keyframes slide-in {
  from {
    opacity: 0;
    transform: translateY(50px); /* Départ depuis le bas */
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-in {
  animation: slide-in 0.8s ease-out both;
}

</style>
