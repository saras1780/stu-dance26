// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-27',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['@/assets/css/tailwind.css'],
  app : {
    head: {
      title: "Stu'Dance 26",
      link: [
        {rel: "icon", type: "image/jpeg", href:"/images/logo.jpeg"}
      ]
    }
  }
})