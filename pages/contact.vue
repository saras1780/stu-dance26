<template>
    <Layout>
        <section class="max-w-4xl mx-auto p-6">
            <h1 class="text-3xl font-bold mb-4 text-center">Contactez-nous</h1>

            <!-- Formulaire -->
            <form class="space-y-4 bg-gray-100 p-6 rounded-lg shadow-md">
                <input type="text" placeholder="Votre nom" class="w-full border p-2 rounded-md" />
                <input type="email" placeholder="Votre email" class="w-full border p-2 rounded-md" />
                <textarea placeholder="Votre message" class="w-full border p-2 rounded-md"></textarea>
                <button type="submit" class="bg-cta text-white py-2 px-4 rounded-lg w-full">Envoyer</button>
            </form>

            <!-- Blocs de contact -->
            <div class="flex justify-between mt-6 gap-6 text-center">
                <div class="bg-cta text-white p-4 rounded-lg w-1/3">
                    <p class="font-bold">Adresse</p>
                    <p>Avenue des fossés 36, 4500 Huy</p>
                </div>
                <div class="bg-cta text-white p-4 rounded-lg w-1/3">
                    <p class="font-bold">Téléphone</p>
                    <p>+32 455 55 55 55</p>
                </div>
                <div class="bg-cta text-white p-4 rounded-lg w-1/3">
                    <p class="font-bold">Email</p>
                    <p>contact@studance26.com</p>
                </div>
            </div>

            <!-- Google Maps --> 
             <div class="mt-6"> 
                <iframe class="w-full h-64 rounded-lg shadow-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2520.871292353434!2d5.230309615748727!3d50.51803297947979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c10c7301f23e47%3A0x4e82eb0d2f0a0a0!2sAvenue%20des%20Foss%C3%A9s%2036%2C%204500%20Huy%2C%20Belgique!5e0!3m2!1sfr!2sbe!4v1635606542134!5m2!1sfr!2sbe" loading="lazy"> 
                </iframe> 
            </div>
        </section>
    </Layout>
</template>
