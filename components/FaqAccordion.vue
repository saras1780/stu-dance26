<template>
  <section class="py-12 bg-[#e6e0f2] text-[#0D0E20] rounded-lg">
    <div class="container mx-auto text-center">
      <h2 class="text-3xl font-semibold mb-6">FAQ</h2>

      <div class="w-full max-w-3xl mx-auto">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="border border-gray-100 rounded-lg mb-4 overflow-hidden shadow-lg"
        >
          <button
            @click="toggleFaq(index)"
            class="w-full text-left px-6 py-4 bg-white flex justify-between items-center focus:outline-none transition-all border-l-4 border-purple-900 pl-4"
          >
            <span class="text-lg font-semibold">{{ faq.question }}</span>
            <span
              class="text-2xl font-bold transition-transform text-purple-700"
              :class="{ 'rotate-45': activeIndex === index }"
            >
              +
            </span>
          </button>

          <div
            v-if="activeIndex === index"
            class="bg-purple-50 px-6 py-4  text-purple-950 transition-all"
          >
            {{ faq.answer }}
          </div>
        </div>
      </div>

      <div class="mt-8">
        <a
          href="/contact"
          class="px-6 py-3 bg-purple-700 hover:bg-purple-900 text-white rounded-full text-lg font-semibold shadow-lg transition-all duration-300"
        >
          Contactez-nous !
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const activeIndex = ref(null);

const faqs = ref([
  {
    question: "Quels sont les horaires des cours ?",
    answer: "Nos cours sont disponibles du lundi au samedi, consultez la page 'Horaires'."
  },
  {
    question: "Comment s'inscrire ?",
    answer: "Vous pouvez vous inscrire directement sur notre site via la page 'Inscriptions'."
  },
  {
    question: "Est-ce que c'est sympa ?",
    answer: "Oui de ouf, venez!"
  }
]);

const toggleFaq = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<style>
.rotate-45 {
  transform: rotate(45deg);
}
</style>
