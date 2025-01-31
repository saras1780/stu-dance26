<template>
    <Layout>

        <!-- Welcome Section -->
        <section class="text-center py-12">
            <h1 class="text-4xl font-bold mb-4">Bienvenue chez Stu'dance 26</h1>
            <p class="text-lg mb-8">Découvrez une école de danse qui valorise passion, engagement et créativité.</p>
            <NuxtLink to="/apropos" class="bg-[#592F83] text-white py-3 px-8 rounded-lg hover:bg-[#391B49] transition">
                En savoir plus sur nous
            </NuxtLink>
        </section>

        <!-- Gallery Section -->
        <section class="py-12">
            <h2 class="text-3xl font-semibold text-center mb-6">Moments forts de Stu'dance 26</h2>
            <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                <img src="/images/gallery1.jpg" alt="Spectacle"
                    class="rounded-lg shadow-md hover:shadow-xl transition" />
                <img src="/images/gallery2.jpg" alt="Représentation"
                    class="rounded-lg shadow-md hover:shadow-xl transition" />
                <img src="/images/gallery3.jpg" alt="Évènement"
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
    </Layout>
</template>