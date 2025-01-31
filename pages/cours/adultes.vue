<template>
    <Layout>
        <section class="text-center py-12">
            <h1 class="text-4xl font-bold mb-4">Cours pour Adultes</h1>
            <p class="text-lg mb-8">Des ateliers et cours variés pour tous les niveaux.</p>
        </section>
        <section class="py-12">
            <div class="container mx-auto">
                <h2 class="text-3xl font-semibold text-center mb-6">Nos Cours</h2>
                <table class="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr class="bg-gray-200">
                            <th class="border border-gray-300 px-4 py-2">Jour</th>
                            <th class="border border-gray-300 px-4 py-2">Cours</th>
                            <th class="border border-gray-300 px-4 py-2">Niveau</th>
                            <th class="border border-gray-300 px-4 py-2">Horaire</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="border border-gray-300 px-4 py-2">Mardi</td>
                            <td class="border border-gray-300 px-4 py-2">Jazz - Contemporain - Elsa</td>
                            <td class="border border-gray-300 px-4 py-2">Adultes</td>
                            <td class="border border-gray-300 px-4 py-2">20h-21h</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-300 px-4 py-2">Mercredi</td>
                            <td class="border border-gray-300 px-4 py-2">Hip-Hop - Fiona</td>
                            <td class="border border-gray-300 px-4 py-2">Adultes</td>
                            <td class="border border-gray-300 px-4 py-2">20h-21h</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-300 px-4 py-2">Vendredi</td>
                            <td class="border border-gray-300 px-4 py-2">Ragga - Fiona</td>
                            <td class="border border-gray-300 px-4 py-2">Adultes</td>
                            <td class="border border-gray-300 px-4 py-2">20h-21h</td>
                        </tr>
                    </tbody>
                </table>
            </div>
                <!-- Conteneur pour centrer le bouton -->
                <div class="flex justify-center items-center mt-8">
                    <NuxtLink
                        to="/"
                        class="bg-[#592F83] text-white py-2 px-6 rounded-lg hover:bg-[#391B49] transition"
                    >
                        Retour vers l'accueil
                    </NuxtLink>
                </div>
        </section>
    </Layout>
</template>
