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
      <div class="mt-8 flex flex-col md:flex-row items-center justify-center gap-4 animate-bounce">
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
            <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                <img src="public/images/gallery1.jpg" alt="Spectacle"
                    class="rounded-lg shadow-md hover:shadow-xl transition" />
                <img src="public/images/gallery2.jpg" alt="Représentation"
                    class="rounded-lg shadow-md hover:shadow-xl transition" />
                <img src="public/images/gallery3.jpg" alt="Évènement"
                    class="rounded-lg shadow-md hover:shadow-xl transition" />
            </div>
        </section>

        <!-- Values Section -->
        <section class="py-12 bg-[#D1CCDC] text-[#0D0E20] rounded-lg">
            <div class="container mx-auto text-center">
                <h2 class="text-3xl font-semibold mb-6">Nos valeurs</h2>
                <p class="text-lg leading-relaxed">
                    À Stu'dance 26, nous croyons en l'expression personnelle, le dépassement de soi et la force de la
                    communauté. Rejoignez une école où chaque élève est libre de briller à sa façon.
                </p>
            </div>
        </section>

        <!-- Presentation of Courses -->
<section class="py-12">
    <div class="container mx-auto text-center">
        <h2 class="text-3xl font-semibold mb-6">Nos Cours</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <NuxtLink to="cours/enfants" class="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition block">
                <h3 class="text-2xl font-bold mb-4">Enfants</h3>
                <p>Des cours ludiques adaptés aux plus jeunes.</p>
            </NuxtLink>
            <NuxtLink to="cours/ados" class="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition block">
                <h3 class="text-2xl font-bold mb-4">Adolescents</h3>
                <p>Des cours dynamiques adaptés aux jeunes danseurs.</p>
            </NuxtLink>
            <NuxtLink to="cours/adultes" class="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition block">
                <h3 class="text-2xl font-bold mb-4">Adultes</h3>
                <p>Des ateliers et cours de différents styles.</p>
            </NuxtLink>
        </div>
    </div>
</section>


        <!-- Agenda Section -->
        <section class="py-12">
            <div class="container mx-auto">
                <h2 class="text-3xl font-semibold text-center mb-6">Agenda</h2>
                <ul class="list-disc list-inside text-lg">
                    <li class="mb-4">15 février 2025 : Atelier spécial danse contemporaine</li>
                    <li class="mb-4">10 avril 2025 : Stage intensif de hip-hop</li>
                    <li class="mb-4">20 juin 2025 : Spectacle annuel "Les étoiles de la danse"</li>
                </ul>
            </div>
        </section>

        <!-- Subscription Plans Section -->
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

        <!-- Testimonials Section -->
        <section class="py-12">
            <div class="container mx-auto text-center">
                <h2 class="text-3xl font-semibold mb-6">Témoignages</h2>
                <blockquote class="italic text-lg">"Une école de danse incroyable où l'on progresse tout en s'amusant !" - Emma</blockquote>
            </div>
        </section>

        <!-- FAQ Section -->
        <section class="py-12 bg-[#D1CCDC] text-[#0D0E20] rounded-lg">
            <div class="container mx-auto text-center">
                <h2 class="text-3xl font-semibold mb-6">FAQ</h2>
                <details class="mb-4">
                    <summary class="text-xl font-bold cursor-pointer">Quels sont les horaires des cours ?</summary>
                    <p class="mt-2">Nos cours sont disponibles du lundi au samedi, consultez la page "Horaires".</p>
                </details>
                <details class="mb-4">
                    <summary class="text-xl font-bold cursor-pointer">Comment s'inscrire ?</summary>
                    <p class="mt-2">Vous pouvez vous inscrire directement sur notre site via la page "Inscriptions".</p>
                </details>
                <details class="mb-4">
                    <summary class="text-xl font-bold cursor-pointer">Est-ce que c'est sympa ?</summary>
                    <p class="mt-2">Oui de ouf, venez!</p>
                </details>
                <details class="mb-4">
                    <summary class="text-xl font-bold cursor-pointer">Comment s'inscrire ?</summary>
                    <p class="mt-2">Vous pouvez vous inscrire directement sur notre site via la page "Inscriptions".</p>
                </details>
            </div>
        </section>
</template>

<script setup>
// Ajout d'animations via Framer Motion ou autre si besoin
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
</style>
